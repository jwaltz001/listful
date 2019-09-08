import React from 'react'

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: false,
			view: 'list',
			formData: {
				title: '',
				genre: '',
				description: '',
				watched: false,
				imageurl:''
			}
		}
		this.handleChange = this.handleChange.bind(this)
	}

	toggleAddForm = () => {
		this.setState({ addForm: !this.state.addForm })
	}

	handleChange = (event) => {
		const value = target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({
			formData: {
				[event.target.id] : value
			}
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.addform) {
      		this.props.handleCreate(this.state.formData, 'Movies')
    	}
	}

	render () {
		if (this.state.addform) {
			return (
				<main>
					<h2>
						<i onClick={this.toggleAddForm} className="material-icons md-36">close</i>
					</h2>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">Title
							<input type="text" id="title"
								value={this.state.formData.title}
								onChange={this.handleChange}/>
						</label>
						<label htmlFor="genre">genre
							<input type="text" id="genre"
								value={this.state.formData.genre}
								onChange={this.handleChange}/>
						</label>
						<label htmlFor="description">Description
							<input type="text" id="description"
								value={this.state.formData.description}
								onChange={this.handleChange}/>
						</label>
						<label htmlFor="imageurl">imageurl
							<input type="text" id="imageurl"
								value={this.state.formData.imageurl}
								onChange={this.handleChange}/>
						</label>
						<label htmlFor="watched">imageurl
							<input
	            				id="watched"
	            				type="checkbox"
	            				checked={this.state.watched}
	            				onChange={this.handleChange} />
						</label>
						<button onClick={this.AddItem} type="submit" className="list-add-btn">
							<i className="material-icons md-36">add</i>
						</button>
					</form>
				</main>
			)
		} else {
			return (
				<main>
					<button onClick={this.toggleAddForm} className="list-add-btn">
						<i className="material-icons md-36">add</i>
					</button>
					<div className="movie-container">
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="movie-div" key={itemData.id}>
								<img src={itemData.imageurl}/>
								<h3>{itemData.title}</h3>
								<h4>{itemData.genre}</h4>
								<p>{itemData.description}</p>
								<p>Watched:
								{itemData.watched ? (
									<input type="checkbox" defaultChecked />
								) : (
									<input type="checkbox"/>
								)}
								</p>
							</div>
						))
					}
					</div>
				</main>
			)
		}
	}
}
export default Movies
