import React from 'react'

class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			description: '',
			isComplete: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleTodoFormView = (viewType, itemData) => {
		if (viewType === 'addForm') {
				this.setState({
					description: '',
					isComplete: false
				})
		} else if (viewType === 'editForm') {
			this.setState({
				id: itemData.id,
				description: itemData.description
			})
		}
		this.props.handleMainView(viewType)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const formData = {
			description: this.state.description,
			isComplete: this.state.isComplete,
			user_id: 1
		}
		if(this.props.mainView === 'addForm') {
			this.props.handleCreate(formData, 'Todos')
    	}else if (this.props.mainView === 'editForm') {
			this.props.handleUpdate(formData, 'Todos', this.state.id)
    	}
	}

	render () {
		if (this.props.mainView != 'list') {
			return (
				<main>
					<h2>
						<i onClick={()=>{this.handleTodoFormView('list')}} className="material-icons md-36">close</i>
					</h2>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="description">To Do Item:</label>
							<input type="text" id="description"
								value={this.state.description}
								onChange={this.handleChange}/>
						<button type="submit" className="list-add-btn">
							<i className="material-icons md-36">add</i>
						</button>
					</form>
				</main>
			)
		} else {
			return (
				<main>
					<button onClick={()=>{this.handleTodoFormView('addForm')}} className="list-add-btn">
						<i className="material-icons md-36">add</i>
					</button>
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="todo-div" key={itemData.id}>
								<form onSubmit={this.handleSubmit}>
									<button type="submit">Mark as Done</button>
									<input id="decription" type="hidden" value={itemData.description}/>
									<h2>{itemData.description}
										<i className="material-icons md-24" onClick={()=>{this.handleTodoFormView('editForm', itemData)}}>edit</i>
										<i onClick={()=>{this.props.handleDelete(itemData.id, 'todos')}} className="material-icons md-24">delete_forever</i>
										</h2>
								</form>
							</div>
						))
					}
				</main>
			)
		}
	}
}


export default Todos

// {itemData.iscomplete ? (
// 	<input
// 		id="isComplete"
// 		type="checkbox"
// 		defaultChecked
// 		checked={this.state.isComplete}
// 		onChange={this.handleChange}
// 	/>
// ) : (
// 	<input
// 		id="isComplete"
// 		type="checkbox"
// 		checked={this.state.isComplete}
// 		onChange={this.handleChange}
// 	/>
// )}
