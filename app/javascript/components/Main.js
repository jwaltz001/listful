import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'

class Main extends React.Component {
	handleCreate = (createData, listType) => {
		console.log("main.js handleCreate createData", createData);
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
			console.log("main.js handleCreate jsoned item",jsonedItem);
			this.props.updateListItemsArr(jsonedItem, listType, 'POST')
			// this.setState({
			// 	mainView: 'list'
			// })
	    }).catch(err => console.log(err))
	}

	handleUpdate = (updateData, listType, id, method) => {
		const urlInsert = listType.toLowerCase()
		console.log("update data", updateData);
		fetch(`/${urlInsert}/${id}`, {
	      body: JSON.stringify(updateData),
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      }
	  	}).then(updatedItem => {
			return updatedItem.json()
		}).then( jsonedItem => {
			console.log("Updated jsonedItem", jsonedItem);
			this.props.updateListItemsArr(jsonedItem, listType, 'PUT')
	      }).catch(err => console.log(err))
	}

	handleDelete = (id, listType) => {
		const urlInsert = listType.toLowerCase()
		fetch(`/${urlInsert}/${id}`, {
	      method: 'DELETE',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      }
	    })
	      .then(data => {
				this.props.updateListItemsArr(id, listType, 'DELETE')
        })
	      .catch(err => console.log(err))
	  }

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos
					mainView={this.props.mainView}
					handleCreate={this.handleCreate}
					listItemsArray={this.props.listItemsArray}
					handleView={this.props.handleView}
					handleDelete={this.handleDelete}
					handleUpdate={this.handleUpdate}
					listToShow={this.props.listToShow}
				/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies
					mainView={this.props.mainView}
					handleCreate={this.handleCreate}
					listItemsArray={this.props.listItemsArray}
					handleView={this.props.handleView}
					handleDelete={this.handleDelete}
					handleUpdate={this.handleUpdate}
					listToShow={this.props.listToShow}
				/>
			)
		}
	}
}

export default Main
