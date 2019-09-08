import React from 'react'

class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: false,
			view: 'list',
			formData: {
				description: ''
			}
		}
		this.handleChange = this.handleChange.bind(this)
	}

	toggleAddForm = () => {
		this.setState({ addForm: !this.state.addForm })
	}

	handleChange = (event) => {
		this.setState({
			formData: {
				[event.target.id] : event.target.value
			}
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.addform) {
      		this.props.handleCreate(this.state.formData, 'Todo')
    	}
	}

	render () {
		if (this.state.addForm) {
			return (
				<main>
					<h2><i onClick={this.toggleAddForm} className="material-icons md-36">close</i></h2>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="description">New To Do Item</label>
							<input type="text" id="description"
								value={this.state.formData.description}
								onChange={this.handleChange}/>
						<button type="submit" onClick={this.AddItem} className="list-add-btn"><i className="material-icons md-36">add</i></button>
					</form>
				</main>
			)
		} else {
			return (
				<main>
					<button onClick={this.toggleAddForm} className="list-add-btn"><i className="material-icons md-36">add</i></button>
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="todo-div" key={itemData.id}>
							{itemData.iscomplete ? (
								<input type="checkbox" defaultChecked />
							) : (
								<input type="checkbox"/>
							)}
							<h3>{itemData.description}</h3>
							</div>
						))
					}
				</main>
			)
		}
	}
}


export default Todos
