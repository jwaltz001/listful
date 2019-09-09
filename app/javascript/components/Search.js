import React from 'react'
import SearchResults from './SearchResults.js'
class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			baseURL: 'http://www.omdbapi.com/?',
			apikey: 'apikey=' + 'c1904f71',
			query: '&s=',
			numOfResults: '&page=1',
    		movieTitle: '',
    		searchURL: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange (event) {
  		this.setState({ [event.target.id]: event.target.value })
	}
	handleSubmit (event) {
  		event.preventDefault()
		this.setState({
			searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle + this.state.numOfResults
  		}, () => {
  			fetch(this.state.searchURL)
			.then((response) => {
				const testResponse = response.json()
				console.log(testResponse);
				return testResponse
			}).then((json) => this.setState({
				movies: json,
				movieTitle: ''
			}),
  				err => console.log(err))
  		})
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='movieTitle'>Title</label>
						<input
						id='movieTitle'
						type='text'
						value={this.state.movieTitle}
						onChange={this.handleChange}
						/>
						<input
						type='submit'
						value='Find Movie Info'
						/>
				</form>
				{
					this.state.movies ?
						<SearchResults
							movies={this.state.movies.Search}
							insertSelectedMovie={this.props.insertSelectedMovie}
						/> : ''
				}
			</div>
		)
	}
}

export default Search
