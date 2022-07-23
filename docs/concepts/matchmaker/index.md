# Matchmaker

TODO: Link to test game

TODO: Link to test game source code

## Lobby lifecycle

TODO: Diagram

### Client

Connect to rivet matchmaking and find a lobby with the `'default'` gamemode, then connect to its websocket.

```jsx
let clientApi = new mm.MatchmakerService({
	endpoint: 'https://matchmaker.api.rivet.gg/v1',
	tls: true,
	requestHandler: requestHandlerMiddleware()
});

let res = await clientApi
	.findLobby({
		gameModes: ['default'],
		preventAutoCreateLobby: false
	});

let port = res.lobby.ports['default'];
let token = res.lobby.player.token;
let gameIndex = 0;

let wsProtocol = port.useTls ? 'wss:' : 'ws:';
let url = `${wsProtocol}//${port.hostname}:${port.port}/?gameIndex=${gameIndex}`;
if (token != null) url += `&token=${token}`;

let ws = new WebSocket(url);
```

### Server

Mark a lobby as ready to accept players from Rivet

```jsx
let rivetServer = new rivet.MatchmakerService({
	endpoint: process.env.RIVET_MATCHMAKER_API_URL,
	tls: true,
	requestHandler: requestHandlerMiddleware(process.env.RIVET_LOBBY_TOKEN)
});

await rivetServer.lobbyReady({});
```

Mark a player as connected/disconnected (parse `playerToken` from URL query)

```jsx
await rivetServer.playerConnected({ playerToken });
await rivetServer.playerDisconnected({ playerToken });
```

## Player lifecycle

TODO: Diagram