import LoomEmbed from '@site/src/components/LoomEmbed';

# Step 8: Deploy new game version

<LoomEmbed src="https://www.loom.com/embed/b595a19e34724e4eafd02a7ec88807f5"></LoomEmbed>

Now that the GitHub action has built and pushed your game to Rivet, we can deploy a new version of your game for the world to see.

1. Click the button titled *New Version* in the sidebar of your game's dashboard.
    
    ![Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled.png](Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled.png)
    
2. Change the *Version Name* to whatever you like. In this case, we'll set it to `0.0.2`.
    
    <aside>
    💡 We recommend loosely following semantic versioning for your game versions. Learn more about semantic versioning [here](https://en.wikipedia.org/wiki/Software_versioning).
    
    </aside>
    
3. Under *Initiate namespaces*, check *Production*.
4. Click the toggle next to *CDN*. Select the most recent upload.
    
    ![Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled%201.png](Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled%201.png)
    
5. Click the toggle next to *Matchmaker*.
    1. Click the button named *Add mode*.
    2. Set *Name ID* to `default`.
    3. Under *Docker*, select the most recent build.
    4. Leave the rest of the settings as is.
    
    ![Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled%202.png](Step%208%20Deploy%20new%20game%20version%2016da3e09129a454db9ffa20f69d1a61a/Untitled%202.png)
    
6. Click the *Publish* button at the top of the page.
7. Click on the *Production* button in the sidebar and click *Visit* button. This will open your game in a new tab. Share this link with a friend and play your game together.
    
    <aside>
    ⚠️ Rivet does not support HTTPS at the moment, so make sure your URL starts with `http://`. This will be fixed soon.
    
    </aside>
    
8. Repeat this process after pushing your code every time you want to update your game.
