import LoomEmbed from '@site/src/components/LoomEmbed';

# Step 6: Making a change to the source

<LoomEmbed src="https://www.loom.com/embed/e4ba2aa0163e4bcbae6b112445cad74f"></LoomEmbed>

The development client and server are set up to automatically restart any time a change is made to the source code. We'll change a simple part of the source to see that in action.

1. Open the file `client/Client.ts`.
2. Find the following line:
    
    ```tsx
    public static TITLE_TEXT: string = "Tanks";
    ```
    
3. Change the value `"Tanks"` to anything you'd like and then save the file.
4. Go back to your browser (located at `127.0.0.1:8080`). You should see the title automatically update after making that change. This may take a few seconds.
