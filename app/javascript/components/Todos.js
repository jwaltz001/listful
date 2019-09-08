import React from 'react'

class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			view: 'list',
			description: '',
			isComplete: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	showAddForm = () => {
		this.setState({
			view: 'addForm',
			description: '',
			isComplete: false
		})
	}

	showEditForm = (descriptionToEdit) => {
		this.setState({
			view: 'editForm',
			description: descriptionToEdit
		})
	}

	closeForms = () => {
		this.setState({
			view: 'list'
		})
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
			isComplete: this.state.incomplete
		}
		if(this.state.view === 'addForm') {
			this.props.handleCreate(formData, 'Todos')
    	}else if (this.state.view === 'editForm') {

    	}
	}

	render () {
		if (this.state.view === 'addForm'  || this.state.view === 'editForm') {
			return (
				<main>
					<h2>
						<i onClick={this.closeForms} className="material-icons md-36">close</i>
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
					<button onClick={this.showAddForm} className="list-add-btn">
						<i className="material-icons md-36">add</i>
					</button>
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="todo-div" key={itemData.id}>
								<form onSubmit={this.handleSubmit}>
									<button type="submit">Mark as Done</button>
									<input id="decription" type="hidden" value={itemData.description}/>
									<h2>{itemData.description} <i className="material-icons md-24" onClick={()=>{this.showEditForm(itemData.description)}}>edit</i></h2>
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
