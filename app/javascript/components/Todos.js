import React from 'react'

class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			description: '',
			iscomplete: false,
			listItemsArray: this.props.listItemsArray
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleTodoFormView = (viewType, itemData) => {
		if (viewType === 'addForm') {
				this.setState({
					description: '',
					iscomplete: false
				})
		} else if (viewType === 'editForm') {
			this.setState({
				id: itemData.id,
				description: itemData.description
			})
		}
		this.props.handleView('Todos' , viewType)
	}

	handleCheck = (viewType, itemData) => {
		//console.log("1 pre-update info", itemData);
		const updateData = {
			description: itemData.description,
			iscomplete: !itemData.iscomplete,
			listName: "Todos",
			user_id: 1
		}
		//console.log("2 updateData", updateData);
		this.props.handleUpdate(updateData, 'Todos', itemData.id, 'PUT')
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
			iscomplete: this.state.iscomplete,
			user_id: 1
		}
		if(this.props.mainView === 'addForm') {
			this.props.handleCreate(formData, 'Todos')
    	}else if (this.props.mainView === 'editForm') {
			this.props.handleUpdate(formData, 'Todos', this.state.id, 'PUT')
    	}
	}

	render () {
		if (this.props.mainView === 'list') {
			return (
				<main>
					<button onClick={()=>{this.handleTodoFormView('addForm')}} className="list-add-btn">
						<i className="material-icons md-36">add</i>
					</button>
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="todo-div" key={itemData.id}>
								<form onSubmit={this.handleSubmit}>
									<input id="description" type="hidden" value={itemData.description}/>
									<div className="todo-item-display">
									{
										(itemData.iscomplete == true) ?
										<i onClick={()=>{this.handleCheck('Todos', itemData)}} className="material-icons">check_box</i>
										: <i onClick={()=>{this.handleCheck('Todos', itemData)}} className="material-icons">check_box_outline_blank</i>
									}
									<h2>{itemData.description}</h2>
									<i className="material-icons md-24" onClick={()=>{this.handleTodoFormView('editForm', itemData)}}>edit</i>
									<i onClick={()=>{this.props.handleDelete(itemData.id, 'Todos')}} className="material-icons md-24">delete_forever</i>
									</div>
								</form>
							</div>
						))
					}
				</main>
			)
		} else {
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
		}
	}
}


export default Todos
