import LoomEmbed from '@site/src/components/LoomEmbed';

# Step 3: Create development token

<LoomEmbed src="https://www.loom.com/embed/8efc90e692654cd993697dc985b7c154"></LoomEmbed>

Rivet provides a way for you to run your game on your local machine for development. In order to do this, we need to create a development token that will be used to securely authenticate your development machine with Rivet's servers.

1. Click on the sidebar button titled *API*. This page is used to manage API tokens which are used to securely authenticate with Rivet's servers.
    
    ![Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled.png](Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled.png)
    
2. Under the group titled *Staging*, click the button named *Create Development Token*. When prompted, set *Hostname* to 127.0.0.1 and create a port mapped from *5000 → 80*. Click *Create* once complete.

    :::note
    Rivet development tokens are designed to make your development environment mimic your production environment. This configuration panel lets you configure how your development environment is configured.
    :::
    
    ![Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled%201.png](Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled%201.png)
    
3. When prompted, click the *Download Environment File* button. Save this file to `tanks-typescript-canvas-socketio/.env`. The file will be downloaded as `_env`, so make sure to rename it to `.env` once downloaded.
    
    :::info
    When we refer to `tanks-typescript-canvas-socketio`, we're referring to the folder you cloned in GitHub Desktop in step 1.
    :::
    
    :::note
    Environment files are a way of exposing environment variables to a program in development.
    :::

    :::note
    The `.env` file is in the `.gitignore`, so this file will always stay on your local machine. [Read more about .gitignore files.](https://docs.github.com/en/github/getting-started-with-github/getting-started-with-git/ignoring-files)
    :::
    
    :::caution
    Do not share your development tokens with anybody. Development tokens give you access to privileged API endpoints.
    :::
    
    ![Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled%202.png](Step%203%20Create%20development%20token%20d4da29bb0be24cbcb453b7bb45077866/Untitled%202.png)
