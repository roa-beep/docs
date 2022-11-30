import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type GuideItem = {
	title: string;
	snapshotSrc: string;
	description: JSX.Element;
};

const GUIDE_LIST: GuideItem[] = [
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/guide-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/guide-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/guide-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/guide-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
];

function Guide({ title, snapshotSrc, description }: GuideItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<img src={snapshotSrc} alt='Guide Snapshot' className={styles.guideSnapshot} role='img' />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageOverview(): JSX.Element {
	// return (
	// 	<section className={styles.guide}>
	// 		<div className='container'>
	// 			<div className='row'>
	// 				{GUIDE_LIST.map((props, idx) => (
	// 					<Guide key={idx} {...props} />
	// 				))}
	// 			</div>
	// 		</div>
	// 	</section>
	// );
	return (<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/OVicp0hKTEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>);
}
