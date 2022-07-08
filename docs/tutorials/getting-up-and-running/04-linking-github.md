import LoomEmbed from '@site/src/components/LoomEmbed';

# Step 4: Link GitHub to Rivet

<LoomEmbed src="https://www.loom.com/embed/72967de8a27344068c55a086a5ac8bcc"></LoomEmbed>

Before doing anything else, we need to link your GitHub repository to your Rivet game so any changes we are automatically pushed to Rivet using GitHub actions.

1. Navigate to the *API* page on the Rivet dashboard and click *Create Cloud Namespace*. Copy the token to your clipboard.
    
    <aside>
    ⚠️ Do not share your cloud tokens with anybody. Cloud tokens give you access to privileged API endpoints.
    
    </aside>
    
    ![Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled.png](Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled.png)
    
2. Open your GitHub repository on [GitHub.com](http://github.com) and click on the *Settings* tab then click *Secrets* in the sidebar.
    
    <aside>
    ⚠️ Make sure you go to your project's settings and not your profile's settings.
    
    </aside>
    
    ![Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%201.png](Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%201.png)
    
3. Click *New Repository Secret*. Fill in `RIVET_CLOUD_TOKEN` for *Name* and the token you copied to your clipboard for *Value*. Then click *Add secret*. 
    
    ![Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%202.png](Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%202.png)
    
4. Click on the *Actions* tab and click *I understand, go ahead and enable them*. This makes it so the next changes we push to this repository are built and pushed to Rivet.
    
    ![Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%203.png](Step%204%20Link%20GitHub%20to%20Rivet%20ff28c19d297a4445a97a8b342d3a532a/Untitled%203.png)
