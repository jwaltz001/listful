import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'


class Main extends React.Component {

	handleCreate = (createData, listType) => {
		const urlInsert = listType.toLowerCase()
		fetch(`/${urlInsert}`, {
	      	body: JSON.stringify(createData),
	      	method: 'Post',
	      	headers: {
	        	'Accept': 'application/json, text/plain, */*',
	        	'Content-Type': 'application/json'
	      	}
	    }).then(createdItem => {
	        return createdItem.json()
	    }).then(jsonedItem => {
			this.props.listItemsArray.push(jsonedItem)
	    }).catch(err => console.log(err))
	}

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos handleCreate={this.handleCreate} listItemsArray={this.props.listItemsArray}/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies handleCreate={this.handleCreate} listItemsArray={this.props.listItemsArray}/>
			)
		}
	}
}

export default Main
