# Identity

TODO: Link to test game

TODO: Link to test game source code

## Setup

```bash
npm install --save @rivet-gg/identity
```

```jsx
import * as identity from '@rivet-gg/identity';

// Setup identity API
let existingIdentityToken = localStorage.getItem('rivet:identity-token');
let identityApi = new identity.IdentityService({
	endpoint: 'https://identity.api.rivet.gg/v1',
	tls: true,
	requestHandler: requestHandlerMiddleware()
});

let { identity, identityToken } = await identityApi.setupIdentity({
	identityToken: existingIdentityToken
});

// Save identity token in local storage
localStorage.setItem('rivet:identity-token', identityToken);

// Update request handler with bearer token
identityApi.config.requestHandler = requestHandlerMiddleware(identityToken);
```

Listen to activities endpoint

```jsx
let friends = [];
let friendsStream = new identity.common.RepeatingRequest(async (abortSignal, watchIndex) => {
	return await this.identityApi.getActivities({ watchIndex }, { abortSignal });
});

friendsStream.onMessage(res => {
	friends = res.identities;
});

friendsStream.onError(err => {
	console.error('Request error:', err);
});
```
