import React from 'react';
import withStyles from 'react-jss';
// import './styles.css';

const styles = ({ palette: {secondary } }) => {
	// console.log(secondary)
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
		// console.log(this.props.titleColor)
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