# add commands to path
PATH="$PROJECTR_FOLDER/settings/commands:$PATH"

# if theres a help command
if [[ -f "$PROJECTR_FOLDER/settings/commands/help" ]]; then
    # override the default bash "help"
    alias help="$PROJECTR_FOLDER/settings/commands/help" 
fi