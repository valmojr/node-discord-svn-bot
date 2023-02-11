# Discord SVN Bot
This is a simples discord webhook bot handler for SVN repository commits using VisualSVN for server manager.

# How to use
## Install
After cloning the repository, install the needed dependencies with
>> npm install

## Configure
Configure your Discord bot informations in DiscordBotConfig.js

## Test
You can run a test command using
>> node index.js 1 [webhookURL]  

This should retrieve the information about the first commit done in the repository to your discord server

## Run
Then you can add the following script as a post-commit hook  
```
:: Location of node.exe (node if path variable)
@set NODE_EXE="node"

:: Location of post-commit JavaScript file (our index.js)
@set HOOK_SCRIPT="hook_script_file_path"

:: Revision number; REV argument passed from Subversion
@set REVISION_NUM=%2

:: Name of repository (as set in VisualSVN)
@set REPO_NAME="reponame"

:: Webhook URL of Discord channel that the message will be posted in
@set WEBHOOK_URL="discord_webhook_url"


:: EXECUTE THE HOOK SCRIPT
%NODE_EXE% %HOOK_SCRIPT% %REVISION_NUM% %REPO_NAME% %WEBHOOK_URL%
```