pwd=`pwd`
osascript -e 'activate application "iTerm"'
osascript -e 'tell application "System Events" to keystroke "t" using command down'
osascript -e 'tell application "iTerm" to tell session -1 of current terminal to write text "cd '$pwd' && nodemon --debug server/server.js"'

webpack-dev-server --port 4000 --inline --devtool eval --progress --no-info --colors --hot --content-base build/
