import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'


class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mainView: 'list',
		}
	}

	handleMainView = (viewType) => {
		this.setState({
			mainView: viewType
		})
	}

	handleCreate = (createData, listType) => {
		const updateListItemsArr = () => {
			this.props.updateListItemsArr
		}
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
			const newItemArr = this.props.listItemsArray.push(jsonedItem)
			updateListItemsArr(newItemArr)
			this.setState({
				mainView: 'list'
			})
	    }).catch(err => console.log(err))
	}

	handleDelete = (id, listType) => {
		fetch(`/${listType}/${id}`, {
	      method: 'DELETE',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      }
	    })
	      .then(data => {
				const items = this.props.listItemsArray.filter( item => item.id !== id)
				this.props.updateListItemsArr(items)
        })
	      .catch(err => console.log(err))
	  }

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos
					mainView={this.state.mainView}
					handleCreate={this.handleCreate}
					listItemsArray={this.props.listItemsArray}
					handleMainView={this.handleMainView}
					handleDelete={this.handleDelete}
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
