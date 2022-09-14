import React from 'react';

export default function LoomEmbed({src}): JSX.Element {
	return (
		<div style={{position: 'relative', 'paddingBottom': '62.5%', 'height': 0, 'margin-bottom': 'var(--ifm-paragraph-margin-bottom)'}}>
			<iframe src={src} frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" style={{position: 'absolute', 'top': 0, left: 0, width: '100%', height: '100%'}}></iframe>
		</div>
	);
}

