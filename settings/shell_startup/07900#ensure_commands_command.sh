# create the "commands" command if it doesnt exist
if ! [[ -f "./settings/commands/commands" ]]; then
    echo '#!/usr/bin/env bash
    echo "project commands:"
    tree ./settings/commands -C --dirsfirst  -A -F --noreport | sed '"'"'s/^/    /'"'"' | sed '"'"'s/\.\/settings\/commands/    /'"'"'
    ' > "./settings/commands/commands"
fi 