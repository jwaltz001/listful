import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'


class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mainView: 'list'
		}
	}

	handleMainView = (viewType) => {
		this.setState({
			mainView: viewType
		})
	}

	handleCreate = (createData, listType) => {
		//console.log(JSON.stringify(createData));

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
				<Todos
					mainView={this.state.mainView}
					handleCreate={this.handleCreate}
					listItemsArray={this.props.listItemsArray}
					handleMainView={this.handleMainView}
					/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies handleCreate={this.handleCreate} listItemsArray={this.props.listItemsArray}/>
			)
		}
	}
}

export default Main
