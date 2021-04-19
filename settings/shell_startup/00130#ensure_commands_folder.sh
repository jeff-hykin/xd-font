# ensure commands folder exists
if ! [[ -d "$PROJECTR_FOLDER/settings/commands" ]]; then
    # remove a potenial file
    rm -f $PROJECTR_FOLDER/settings/commands
    # make the folder
    mkdir $PROJECTR_FOLDER/settings/commands
fi