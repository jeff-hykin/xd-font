
puts "if you don't have the xcode app installed, then install it"


# prevent the xcode error
system 'sudo xcode-select -s /Applications/Xcode.app/Contents/Developer'

# otfcc
system 'brew tap caryll/tap'
system 'brew install otfcc-mac64'
# ttfautohint
system 'brew install ttfautohint'
