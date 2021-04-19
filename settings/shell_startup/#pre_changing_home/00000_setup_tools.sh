function inject_into_path {
    # if it is an absolute path use it directly
    if [[ -f "$1" ]]
    then
        local system_path="$1"
    # if it is the name of a command, then find the path
    else
        local system_path="$(which "$1" 2>/dev/null)"
    fi
    # make sure its a file
    if [[ -f "$system_path" ]]; then
        mkdir -p "$PROJECTR_FOLDER/settings/path_injection"
        # put it in the injections, and use the real home variable
        local new_executable="$PROJECTR_FOLDER/settings/path_injection/$(basename "$system_path")"
        echo "#!/usr/bin/env bash
        HOME='$HOME' '$system_path' "'"$@"' > "$new_executable"
        # make sure we can execute it
        chmod u+wrx "$new_executable"
    else 
        echo "no system '$1' avalible for path injection (some stuff might break)"
    fi
}