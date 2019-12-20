require 'atk_toolbox'

# Make sure node is installed
Atk.run('jeff-hykin/install-node')

system "npm install"

def confirm(has, tool)
    if has
        return "✓ #{tool}".green.on_black
    else
        return "✖ #{tool}".red.on_black
    end
end

# 
# check otfcc and ttfautohint
# 
has_otfccdump = Console.has_command("otfccdump")
has_otfccbuild = Console.has_command("otfccbuild")
has_otfcc = has_otfccbuild && has_otfccdump
has_tff_autohint = Console.has_command("ttfautohint")
has_node = Console.has_command("node")

if OS.is?("mac")
    if !FS.exists?("/Applications/Xcode.app")
        raise "\n\nThis project needs the Xcode app ( /Applications/Xcode.app )\nYou can download the Xcode app for free on the Mac App store\n"
    end
    
    # prevent the xcode error
    system 'sudo xcode-select -s /Applications/Xcode.app/Contents/Developer'
    
    # otfcc
    if !has_otfcc
        system 'brew tap caryll/tap'
        system 'brew install otfcc-mac64'
    end
    
    # ttfautohint
    if !has_tff_autohint
        system 'brew install ttfautohint'
    end
    
    # todo: improve this method of avoiding the
    # "dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.61.dylib"
    # bug
    system "node || brew upgrade node && npm install"
else
    if !has_otfcc || !has_tff_autohint
        raise <<-HEREDOC.remove_indent
            
            
            The setup of this project needs:
                #{confirm(has_node, "node")}
                #{confirm(has_otfcc, "otfcc")}
                    #{confirm(has_otfccdump, "otfccdump command avalible")}
                    #{confirm(has_otfccbuild, "otfccbuild command avalible")}
                #{confirm(has_tff_autohint, "tff_autohint")}
                
            The auto-install of #{"otfcc".blue} and #{"tff_autohint".blue}
            are not yet supported for your OS. Please try to install them manually
            (search for a tutorial)
        HEREDOC
    end
end

