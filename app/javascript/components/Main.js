import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'


class Main extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	//
	// 	}
	// }

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos listItemsArray={this.props.listItemsArray}/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies listItemsArray={this.props.listItemsArray}/>
			)
		}
	}
}

export default Main
