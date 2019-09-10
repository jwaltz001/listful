import React from 'react'
import Search from './Search.js'

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			title: '',
			genre: '',
			description: '',
			watched: false,
			imageurl: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleMovieFormView = (viewType, itemData) => {
		if (viewType === 'addForm') {
				this.setState({
					title: '',
					genre: '',
					description: '',
					watched: false,
					imageurl:''
				})
		} else if (viewType === 'editForm') {
			this.setState({
				id: itemData.id,
				title: itemData.title,
				genre: itemData.genre,
				description: itemData.description,
				watched: itemData.watched,
				imageurl:itemData.imageurl
			})
		}
		this.props.handleView('Movies',viewType)
	}

	insertSelectedMovie = (selectedMovie) => {
		this.setState({
			title: selectedMovie.Title,
			genre: selectedMovie.Type,
			description: '',
			watched: false,
			imageurl: selectedMovie.Poster,
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
			title: this.state.title,
			genre: this.state.genre,
			description: this.state.description,
			watched: this.state.watched,
			imageurl: this.state.imageurl
		}
		console.log("movies.js handleSubmit() formdata ", formData);
		if(this.props.mainView === 'addForm') {
      		this.props.handleCreate(formData, 'Movies')
    	}else if (this.props.mainView === 'editForm') {
    		this.props.handleUpdate(formData, 'Movies', this.state.id, "PUT")
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
		if (this.props.mainView != 'list') {
			return (
				<main>
					<h2>
						<i onClick={()=>{this.handleMovieFormView('list')}} className="material-icons md-36">close</i>
					</h2>
					<Search
						insertSelectedItemFromSearch={this.insertSelectedMovie}
						mainView={this.props.mainView}
						listToShow={this.props.listToShow}
					/>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">Title</label>
							<input type="text" id="title"
								value={this.state.title}
								onChange={this.handleChange}/>

						<label htmlFor="genre">Genre</label>
							<input type="text" id="genre"
								value={this.state.genre}
								onChange={this.handleChange}/>

						<label htmlFor="description">Comments</label>
							<input type="text" id="description"
								value={this.state.description}
								onChange={this.handleChange}/>

						<label htmlFor="imageurl">Poster Url</label>
							<input type="text" id="imageurl"
								value={this.state.imageurl}
								onChange={this.handleChange}/>

						<label htmlFor="watched">Watched</label>
							<input
	            				id="watched"
	            				type="checkbox"
	            				checked={this.state.watched}
	            				onChange={this.handleChange} />

						<button type="submit" className="list-add-btn">
							<i className="material-icons md-36">add</i>
						</button>
					</form>
				</main>
			)
		} else {
			return (
				<main>
					<button onClick={()=>{this.handleMovieFormView('addForm')}} className="list-add-btn">
						<i className="material-icons md-36">add</i>
					</button>
					<div className="movie-container">
					{
						this.props.listItemsArray.map((itemData) => (
							<div className="movie-div" key={itemData.id}>
								<img src={itemData.imageurl}/>
								<div className="movie-info">
									<h3>{itemData.title}</h3>
									<h4>{itemData.genre}</h4>
									<p>Watched:
									{itemData.watched ? (
										<input type="checkbox" defaultChecked />
									) : (
										<input type="checkbox"/>
									)}
									</p>
									<p className="edit-delete-item-btn">
										<i className="material-icons md-24" onClick={()=>{this.handleMovieFormView('editForm', itemData)}}>edit</i>
										<i onClick={()=>{this.props.handleDelete(itemData.id, 'Movies')}} className="material-icons md-24">delete_forever</i>
									</p>
								</div>
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
