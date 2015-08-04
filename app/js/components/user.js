import React from 'react';

class User extends React.Component{
	render() {
		return <span>hi { this.props.name } {this.props.lastName}! </span>
	}
}

User.propTypes ={
	name: React.PropTypes.string.isRequired,
	lastName: React.PropTypes.string.isRequired
};

User.defaultProps = {
	name: 'Heres goes the name',
	lastName: 'Heres goes the last name'
}; 


export default User;