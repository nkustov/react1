import React from 'react';
import withStyles from 'react-jss';
const styles = ({ palette: { secondary } }) => {
	return {
		root: {
			display: 'flex',
			fontFamily: 'arial',
			color: (props) => props.titleColor || secondary,
			justifyContent: 'space-between'
		}
	}
};

class Toolbar extends React.PureComponent {
	render = () => {
		const { title = '', children = [], classes } = this.props;
		return <div className={classes.root}>
			<h1>{title}</h1>
			<div>
				{children}
			</div>
		</div>
	}
}

export default withStyles(styles)(Toolbar);