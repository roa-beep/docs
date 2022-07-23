import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type TutorialItem = {
	title: string;
	snapshotSrc: string;
	description: JSX.Element;
};

const TUTORIAL_LIST: TutorialItem[] = [
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/tutorial-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/tutorial-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/tutorial-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
	{
		title: 'Todo',
		snapshotSrc: require('@site/static/img/tutorial-snapshots/todo.jpg').default,
		description: (
			<>
				TODO
			</>
		)
	},
];

function Tutorial({ title, snapshotSrc, description }: TutorialItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<img src={snapshotSrc} alt='Tutorial Snapshot' className={styles.tutorialSnapshot} role='img' />
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
	// 	<section className={styles.tutorial}>
	// 		<div className='container'>
	// 			<div className='row'>
	// 				{TUTORIAL_LIST.map((props, idx) => (
	// 					<Tutorial key={idx} {...props} />
	// 				))}
	// 			</div>
	// 		</div>
	// 	</section>
	// );
	return (<div></div>);
}
