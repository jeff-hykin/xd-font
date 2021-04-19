# don't let zsh update itself without telling all the other packages 
# instead use nix to update zsh
DISABLE_AUTO_UPDATE="true"
DISABLE_UPDATE_PROMPT="true"

# load custom user settings
# if user just wants to add something (like an export) and not replace everything
# they should use settings/shell_startup/.dont-sync.exports.sh 
CUSTOM_USER_SETTINGS="./.dont-sync.zshrc"
if [[ -f "$CUSTOM_USER_SETTINGS" ]]; then
    source "$CUSTOM_USER_SETTINGS"
#
# if no custom user settings, then use epic defaults 👌
# 
else
    if [[ -z "$PROJECTR_FOLDER" ]]
    then
        echo PROJECTR_FOLDER is empty
        export PROJECTR_FOLDER="$PWD"
    fi
    function nix_path_for {
        nix-instantiate --eval -E  '"${
            (
                builtins.elemAt (
                    builtins.filter (each: each.name == "'$1'") (
                        builtins.map (
                            each: ({
                                name = each.load;
                                source = builtins.getAttr each.load (
                                    builtins.import (
                                        builtins.fetchTarball {url="https://github.com/NixOS/nixpkgs/archive/${each.from}.tar.gz";}
                                    ) {
                                        config = (builtins.fromJSON (builtins.readFile "'"$PROJECTR_FOLDER"'/settings/requirements/simple_nix.json")).nix.config;
                                    }
                                );
                            })
                        ) (builtins.fromJSON (builtins.readFile "'"$PROJECTR_FOLDER"'/settings/requirements/simple_nix.json")).nix.packages
                    )
                ) 0
            ).source
        }"' | sed -E 's/^"|"$//g'
    }
    
    # 
    # import paths from nix
    # 
    zsh_syntax_highlighting__path="$(nix_path_for zsh-syntax-highlighting)"
    zsh_auto_suggest__path="$(nix_path_for zsh-autosuggestions)"
    spaceship_prompt__path="$(nix_path_for spaceship-prompt)"
    oh_my_zsh__path="$(nix_path_for oh-my-zsh)"
    zsh__path="$(nix_path_for zsh)"
    
    # 
    # set fpath for zsh
    # 
    local_zsh="$PWD/settings/zsh.dont-sync/site-functions/"
    mkdir -p "$local_zsh"
    # export fpath=""
    export fpath=("$local_zsh")
    export fpath=("$oh_my_zsh__path"/share/oh-my-zsh/functions $fpath)
    export fpath=("$oh_my_zsh__path"/share/oh-my-zsh/completions $fpath)
    export fpath=("$zsh__path"/share/zsh/site-functions $fpath)
    export fpath=("$zsh__path"/share/zsh/*/functions $fpath)
    
    # See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
    ZSH_THEME="robbyrussell" # default
    
    # 
    # add spaceship-prompt theme
    # 
    ln -fs "$spaceship_prompt__path/lib/spaceship-prompt/spaceship.zsh" "$local_zsh"prompt_spaceship_setup
    
    export ZSH="$oh_my_zsh__path/share/oh-my-zsh"
    source "$ZSH/oh-my-zsh.sh"
    
    # 
    # enable syntax highlighing
    # 
    export ZSH_HIGHLIGHT_HIGHLIGHTERS_DIR="$zsh_syntax_highlighting__path/share/zsh-syntax-highlighting/highlighters"
    source "$ZSH_HIGHLIGHT_HIGHLIGHTERS_DIR/../zsh-syntax-highlighting.zsh"
    
    # 
    # enable auto suggestions
    # 
    source "$zsh_auto_suggest__path/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
    
    # TODO: make this increase with depth, maybe use parent process: ps -o ppid= -p $$
    SPACESHIP_CHAR_SYMBOL="∫ " # ☣ ⁂ ⌘ ∴ ∮ ֎ Ͽ ♫ ⛬ ⚿ ♦ ♢ ⛶ ✾ ❒ ⟩ ⟡ ⟜ ⟦ ⦊ ⦒ ⪢ ⪾ ∫ ∬ ∭
    SPACESHIP_VENV_SYMBOL="🐍$(python -V 2>&1 | sed -E 's/Python//g' )"
    SPACESHIP_VENV_PREFIX=""
    SPACESHIP_VENV_GENERIC_NAMES="."
    SPACESHIP_VENV_COLOR="green"
    SPACESHIP_NODE_COLOR="yellow"
    
    # Set Spaceship ZSH as a prompt
    autoload -U promptinit; promptinit
    prompt spaceship
    
    # enable auto complete
    autoload -Uz compinit
    compinit

    autoload bashcompinit
    bashcompinit
    
    unalias -m '*' # remove all default aliases
fi

# 
# find and run all the startup scripts in alphabetical order
# 
for file in $PROJECTR_FOLDER/settings/shell_startup/*
do
    # make sure its a file
    if [[ -f "$file" ]]; then
        source "$file"
    fi
done