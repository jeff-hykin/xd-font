# use the virual enviornment
# because nix-opencv doesn't setup correctly for mac
# and I can't figure out how to override the videoio setting
# relevent link to the nix build-opencv: https://github.com/NixOS/nixpkgs/blob/193a6a2307b7b29aa11bee309d4aa41840686ab0/pkgs/development/libraries/opencv/4.x.nix#L258

if ! [[ -d "./.venv" ]]
then
    echo "creating virtual env for python"
    python -m venv .venv && echo "virtual env created"
fi
export VIRTUAL_ENV="$PWD/.venv"
export PATH="$VIRTUAL_ENV/bin:$PATH"

function apt-ensure {
    required_pkg="$1"
    pkg_ok=$(dpkg-query -W --showformat='${Status}\n' $required_pkg | grep "install ok installed")
    echo "Checking for $required_pkg: $pkg_ok"
    if [ "" = "$pkg_ok" ]; then
        echo "No $required_pkg. Installing $required_pkg"
        sudo apt-get --yes install $required_pkg 
    fi
}