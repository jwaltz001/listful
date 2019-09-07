import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listItemsArray: []
		}
	}
	fetchItems = () => {
	    fetch(`/${this.props.listToShow}`)
	      	.then(data => data.json())
	      	.then(jData => {
	        	this.setState({ listItemsArray: jData })
	    })
	}

	componentDidMount() {
    	this.fetchItems()
  	}

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos listItemsArray={this.state.listItemsArray}/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies listItemsArray={this.state.listItemsArray}/>
			)
		}
	}
}

export default Main
