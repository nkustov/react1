import React from 'react';
import withStyles from 'react-jss';

export default withStyles({
	overlay: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		position: 'fixed',
		overflow: 'hidden',
		backgroundColor: 'rgba(0, 0, 0, .5)'
	},
	center: {
		width: '60%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center'
	},
	content: {
		width: '100%',
		height: '50%',
		minHeight: 284,
		padding: 12,
		fontFamily: 'arial',
		backgroundColor: '#FFF'
	},
	title: {
		margin: 0
	}
})(({
	title,
	children = [],
	open = false,
	classes
}) => (
	open ? 
		<div className={classes.overlay}>
			<div className={classes.center}>
				<div className={classes.content}>
				<h3 className={classes.title}>
					{title}
				</h3>
				{children}
				</div>
			</div>
		</div> :
		null
));