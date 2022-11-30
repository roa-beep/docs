---
sidebar_position: 10
---

import LoomEmbed from '@site/src/components/LoomEmbed';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started (Multiplayer)

This guide will walk you through the bare minimum steps to get a multiplayer game up and running with Rivet.

We'll include instructions for deploying with either the Rivet Dashboard or GitHub Actions.

:::info

**Should I deploy with the Rivet Dashboard or GitHub Actions?**

- Use the Rivet Dashboard if feel more comfortable with GUIs than Git and are working alone on a project.
- Use GitHub Actions if working with a team using Git and want automated deploys.

:::

## Step 1: Fork example repository (optional)

This guide will use our TypeScript [example repository starter](https://github.com/rivet-gg/example-tanks-typescript-canvas-socketio) to get you up and running. You can either fork this project or follow along with your own project.

> TODO: Walk through forking & cloning project

> TODO: Demonstrate how to run repository

## Step 2: Create game

### Open developer dashboard & create game

<LoomEmbed src="https://www.loom.com/embed/10030c56658c4f42a51ac9153f6663b2"></LoomEmbed>

### Visit default game

<LoomEmbed src="https://www.loom.com/embed/045a756b01084e7f92a3ae6b7d4f2f46"></LoomEmbed>

Rivet will automatically deploy a default game. You'll be able to visit it at `https://{my-game-id}.rivet.game`. [Read more about the Rivet CDN & `rivet.game` domain](/docs/concepts/cdn/rivet-game-domain).

## Step 3: Install the Rivet CLI

Follow the [Rivet CLI installation steps](https://github.com/rivet-gg/cli#installing) for your platform.

The Rivet CLI will be used to bootstrap your repository and manage your game. Almost everything you can do in the Rivet CLI can also be done through a GUI on the Rivet Dashboard.

## Step 4: Initialize repository

### Generate cloud token

<LoomEmbed src="https://www.loom.com/embed/25bdb5865e8e42588b283fbb0796ed78"></LoomEmbed>

:::warning
Treat this token like a password. Anyone who has this token has complete access to your game. Never share it with anyone or commit it to your Git repository.
:::

### Initialize repository

In the root of your project's directory, run:

```bash
rivet init
```

You'll be prompted to input the cloud token you just created. Answer the rest of the questions according to your needs.

:::info
If you plan on deploying with the Rivet Dashboard instead of GitHub Actions, answer `n` to integrating GitHub Actions.
:::

## Step 5: Integrate Rivet Matchmaker

### Create development token

<LoomEmbed src="https://www.loom.com/embed/4f2b28f5911640fdacf5a0fd6de0ca7a"></LoomEmbed>

We recommend making your development environment as similar to your production environment as possible. In order to do that, Rivet can generate a [development token](/docs/concepts/glossary#development-token) used to configure how these responses are mocked.

1. Navigate to *API* and click *Create Development Token* under the *Production* namespace.
1. Update *Port* to match the port that your game runs on in development. For the example game, this should be `5000`.
1. Click *Create*.
1. Click *Download Environment File*.

:::warning
Treat this token like a password. Anyone with access to this token will have elevated access to the namespace it was created in. Never share it with anyone or commit it to your Git repository.
:::

### Install development token

Move the `_env` file that you downloaded in the last step to `.env` in the root of your project.

:::warning
If using Git, make sure the `.env` is in your `.gitignore`. This token should be kept private.
:::

:::info
We recommend using a `.env` file as a way to prevent committing your development token to your repository for security. You may use whatever method you wish to manage this token.
:::

### Install the Rivet Matchmaker package

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```bash
npm install --save @rivet-gg/matchmaker
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn install --save @rivet-gg/matchmaker
```

</TabItem>
<TabItem value="cargo" label="Cargo">

```bash
cargo add rivet-matchmaker
```

</TabItem>
</Tabs>

### Integrate client

<Tabs groupId="language">
<TabItem value="typescript" label="TypeScript">

> TODO: Explain player token

> TODO: Error handling

```typescript
import * as mm from "@rivet-gg/matchmaker";

const mmApi = new mm.MatchmakerService({
	token: process.env.RIVET_CLIENT_TOKEN
});

const findRes = await client.mmApi.findLobby({
	gameModes: ["default"],
});
```

`findRes.lobby.ports["default"].host`

`findRes.lobby.player.token`

:::info
The example project uses (dotenv-webpack)[https://www.npmjs.com/package/dotenv-webpack] to load the `RIVET_CLIENT_TOKEN` variable from the `.env` file to the WebPack bundle.
:::

</TabItem>
<TabItem value="javascript" label="JavaScript">

> TODO

</TabItem>
<TabItem value="rust" label="Rust">

> TODO

</TabItem>
</Tabs>

### Integrate server

<Tabs groupId="language">
<TabItem value="typescript" label="TypeScript">

> TODO: Explain lobby ready

> TODO: Explain & document player lifecycle

> TODO: Error handling

```typescript
import * as mm from "@rivet-gg/matchmaker";

const mmApi = new mm.MatchmakerService({});

await mmApi.lobbyReady({});

await mmApi.playerConnected({ playerToken });

await mmApi.playerDisconnected({ playerToken });
```

:::info
The example project uses (dotenv)[https://www.npmjs.com/package/dotenv] to load the `RIVET_LOBBY_TOKEN` variable from the `.env` file to `process.env`.
:::

:::info
When using NodeJS, `MatchmakerService` will automatically read the `RIVET_LOBBY_TOKEN` environment variable.
:::


</TabItem>
<TabItem value="javascript" label="JavaScript">

> TODO

</TabItem>
<TabItem value="rust" label="Rust">

> TODO

</TabItem>
</Tabs>

:::info
The example project uses [dotenv](https://www.npmjs.com/package/dotenv) to load the `.env` file in to the server's environment.
If following along with your own project, you will need to use the , the [dotenv CLI](https://www.npmjs.com/package/dotenv-cli), or your own method to load this file in to your game's environment.
:::

> TODO: Link to diff in example project

> TODO: Link to updated repo


## Step 6: Deploy



<Tabs groupId="deploy-method">
<TabItem value="rivet" label="Rivet Dashboard">

### Push Build
### Push Site
### Create & publish new version
### Visit site

</TabItem>
<TabItem value="github" label="GitHub Actions">

### Add GitHub Actions `RIVET_CLOUD_TOKEN` secret
### Push to GitHub
### Check version in dashboard
### Visit game

</TabItem>
</Tabs>

## Step 7: Integrate identity

> TODO

