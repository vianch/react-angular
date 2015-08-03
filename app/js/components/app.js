'use strict'

import React from 'react';

export default class User extends React.Component{
	render() {
		return <span>
			hi { this.props.name } {this.props.lastName} 
		<span>
	}
}

User.propTypes: {
	name: React.React.PropTypes.string.isRequired,
	lastName: React.React.PropTypes.string.isRequired
}