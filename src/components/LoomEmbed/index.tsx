import React from 'react';

export default function LoomEmbed({src}): JSX.Element {
	return (
		<div style={{position: 'relative', 'padding-bottom': '62.5%', 'height': 0}}>
			<iframe src={src} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', 'top': 0, left: 0, width: '100%', height: '100%'}}></iframe>
		</div>
	);
}

