# create the "commands" command if it doesnt exist
if ! [[ -f "$PROJECTR_FOLDER/settings/commands/commands" ]]; then
    echo '#!/usr/bin/env bash
    echo "project commands:"
    tree "$PROJECTR_FOLDER/settings/commands" -C --dirsfirst  -A -F --noreport | sed '"'"'s/^/    /'"'"' | sed "1d"
    ' > "$PROJECTR_FOLDER/settings/commands/commands"
fi 