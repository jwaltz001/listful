import React from 'react'

class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: false,
			view: 'list',
			formData: {
				
			}
		}
	}
	toggleAddForm = () => {
		this.setState({ addForm: !this.state.addForm })
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.handleCreate(this.state.formData)
	}

	render () {
		if (this.state.addForm) {
			return (
				<main>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="description">New To Do Item</label> <br/>
						<input type="text" id="description"/>
						<h2 type="submit" onClick={this.AddItem} className="list-add-btn"><i className="material-icons md-36">add</i></h2>
					</form>
				</main>
			)
		} else {
			return (
				<main>
					<h2 onClick={this.toggleAddForm} className="list-add-btn"><i className="material-icons md-36">add</i></h2>
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
