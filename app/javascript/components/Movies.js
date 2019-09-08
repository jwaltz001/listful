import React from 'react'

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: false,
			title: '',
			genre: '',
			description: '',
			watched: false,
			imageurl:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	toggleAddForm = () => {
		this.setState({ addForm: !this.state.addForm })
	}

	handleChange = (event) => {
		this.setState({
				[event.target.id] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const formData = {
			title: this.state.title,
			genre: this.state.genre,
			description: this.state.description,
			watched: this.state.watched,
			imageurl: this.state.imageurl
		}
		if(this.state.addform) {
      		this.props.handleCreate(formData, 'Movies')
    	}
	}

	componentDidMount() {
	    this.setState({
		    title: this.state.title,
		    genre: this.state.genre,
		    description: this.state.description,
			watched: this.state.watched,
			imageurl: this.state.imageurl
	    })
  }

	render () {
		if (this.state.addForm) {
			return (
				<main>
					<h2>
						<i onClick={this.toggleAddForm} className="material-icons md-36">close</i>
					</h2>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">Title</label>
							<input type="text" id="title"
								value={this.state.title}
								onChange={this.handleChange}/>

						<label htmlFor="genre">Genre</label>
							<input type="text" id="genre"
								value={this.state.genre}
								onChange={this.handleChange}/>

						<label htmlFor="description">Description</label>
							<input type="text" id="description"
								value={this.state.description}
								onChange={this.handleChange}/>

						<label htmlFor="imageurl">Poster Url</label>
							<input type="text" id="imageurl"
								value={this.state.imageurl}
								onChange={this.handleChange}/>

						<label htmlFor="watched">imageurl</label>
							<input
	            				id="watched"
	            				type="checkbox"
	            				checked={this.state.watched}
	            				onChange={this.handleChange} />

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
