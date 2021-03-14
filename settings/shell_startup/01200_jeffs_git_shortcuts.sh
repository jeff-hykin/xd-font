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

function git_sync { # git push && git pull
    args="$@"
    if [[ "$args" = "" ]]; then
        args="-"
    fi
    git add -A && git commit -m "$args" && git pull --no-edit && git submodule update --init --recursive && git push
}

function git_current_branch_name {
    git rev-parse --abbrev-ref HEAD
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

function git_new_branch {
    git checkout "$(git_current_branch_name)" && git checkout -b "$@" && git push --set-upstream origin "$@"
}

function git_pull_submodules {
    git submodule update --init --recursive
    git submodule update --recursive --remote
}

function git_push_submodules {
    args="$@"
    if [[ "$args" = "" ]]; then
        args="-"
    fi
    git submodule foreach --recursive 'git add -A && git commit -m "'"$args"'" && git push'
}

function git_mixin {
    if [[ -z "$1" ]]
    then    
        echo "What is the url to the mixin?"
        read url
    else
        url="$1"
    fi

    # remove any leftover ones (caused by git merge conflicts)
    git remote remove __mixin__ &>/dev/null
    git remote add __mixin__ "$url"
    git fetch __mixin__ --tags 
    git pull --allow-unrelated-histories __mixin__/master
    git submodule update --init --recursive
    git remote remove __mixin__ &>/dev/null
}

# 
# short names
# 
alias gs="git status"
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