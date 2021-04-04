# version 2.0 is at least the minimum (may have a higher minimum like 2.21)

# this is not actually global because the home var is changed
git config --global core.editor nano 

function git_log {
    git log --oneline
}

function git_current_commit_hash {
    # https://stackoverflow.com/questions/949314/how-to-retrieve-the-hash-for-the-current-commit-in-git
    git rev-parse HEAD
}

# 
# sync
# 
function git_sync { # git push && git pull
    args="$@"
    if [[ "$args" = "" ]]; then
        args="-"
    fi
    # https://stackoverflow.com/questions/3745135/push-git-commits-tags-simultaneously
    git add -A; git commit -m "$args"; git pull --no-edit; git submodule update --init --recursive && git push
}

function git_force_push {
    args="$@"
    git push origin $args --force
}

function git_force_pull { 
    # get the latest
    git fetch --all
    # delete changes
    git_delete_changes &>/dev/null
    # reset to match origin
    git reset --hard "origin/$(git_current_branch_name)"
}

function git_delete_changes {
    # reset all the submodules
    git submodule foreach --recursive 'git stash save --keep-index --include-untracked'
    git submodule foreach --recursive 'git reset --hard'
    git submodule update --init --recursive # https://stackoverflow.com/questions/7882603/how-to-revert-a-git-submodule-pointer-to-the-commit-stored-in-the-containing-rep
    # unstage everything
    git reset --
    $result="$(git stash save --keep-index --include-untracked)"
    # stash everything and delete stash
    if [[ $result == "No local changes to save" ]] 
    then
        echo no changes to delete
    else
        git stash drop
    fi
}

function git_keep_mine {
    git checkout --ours .
    git add -u
    git commit -m "_Keeping all existing changes $@"
}

function git_keep_theirs { # git keep theirs 
    git checkout --theirs .
    git add -u
    git commit -m "_Accepting all incoming changes $@"
}

# 
# Branch
# 
function git_current_branch_name {
    git rev-parse --abbrev-ref HEAD
}

function git_new_branch {
    branch_name="$1"
    git checkout "$(git_current_branch_name)" && git checkout -b "$branch_name" && git push --set-upstream origin "$branch_name"
}

function git_delete_branch {
    git push origin --delete "$@"
    git branch -D "$@"
}

function git_delete_local_branch {
    git branch -D "$@"
}

# 
# submodules
# 
function git_pull_submodules {
    git submodule update --init --recursive
    git submodule update --recursive --remote
}

function git_push_submodules {
    args="$@"
    if [[ "$args" = "" ]]; then
        args="-"
    fi
    git submodule foreach --recursive 'git add -A && git commit -m "'"$args"'"; git push'
}

# 
# tags 
# 
function git_new_tag {
    tag_name="$1"
    # local
    git tag "$tag_name"
    # remote
    git push origin "$tag_name"
}

function git_move_tag {
    tag_name="$1"
    new_commit_hash="$2"
    if [[ -z "$2" ]]
    then
        new_commit_hash="$(git_current_commit_hash)"
    fi
    git tag -f "$tag_name" "$new_commit_hash"
    git push --force origin "$tag_name"
}

function git_delete_tag {
    tag_name="$1"
    # global
    git push --delete origin "$tag_name"
    # local
    git tag --delete "$tag_name"
}

# 
# misc
# 
function git_delete_large_file {
    filepath="$1"
    if [[ -z "$filepath" ]]
    then
        echo "what is the path to the file you want to permantly delete?"
        read filepath
    fi
    
    # check if file exists
    if ! [[ -f "$filepath" ]]
    then
        echo "That file doesn't seem to exist"
    fi
    
    echo 
    echo "PLEASE make a backup (copy whole folder to somewhere else)"
    echo "this is a risky operation EVEN if you're sure you want to delete the file"
    echo
    echo "are you sure you want to continue?";read ANSWER;echo
    if [[ ! "$ANSWER" =~ ^[Yy] ]]
    then
        exit 0
    fi
    
    git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch '$filepath'" HEAD
    echo 
    echo "Now you need to destroy everyone else's progress by force pushing if you want remote to have the fix"
    echo 
}

function git_mixin {
    url="$1"
    branch="$2"
    commit="$3"
    
    if [[ -z "$url" ]]
    then    
        echo "What is the url to the mixin?"
        read url
    fi
    
    if [[ -z "$branch" ]]
    then    
        echo "What is the branch you want to mixin? (default=master)"
        read branch
        if [[ -z "$branch" ]]
        then
            branch="master"
        fi
    fi
    
    # remove any leftover ones (caused by git merge conflicts)
    git remote remove __mixin__ &>/dev/null
    git remote add __mixin__ "$url"
    git fetch __mixin__ "$branch"
    # if there was a commit
    if ! [[ -z "$commit" ]]
    then    
        # only merge that one commit
        git cherry-pick "$commit"
    else
        # merge the entire history
        git pull --allow-unrelated-histories __mixin__ "$branch"
    fi
    git submodule update --init --recursive
    git remote remove __mixin__ &>/dev/null
}

# 
# short names
# 
alias gs="git status"
alias gl="git_log"
alias gp="git_sync"
alias gm="git merge"
alias gfpull="git_force_pull"
alias gfpush="git_force_push"
alias gc="git checkout"
alias gb="git branch"
alias gnb="git_new_branch"
alias gd="git_delete_changes"
alias gcp="git add -A;git stash"
alias gpst="git stash pop;git add -A"
alias gundo="git reset --soft HEAD~1"