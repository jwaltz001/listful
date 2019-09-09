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
    		searchText: '',
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
			searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.searchText + this.state.numOfResults
  		}, () => {
  			fetch(this.state.searchURL)
			.then((response) => {
				return response.json()
			}).then((json) => this.setState({
				results: json.Search,
				searchText: ''
			}),
  				err => console.log(err))
  		})
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='searchText'>Title</label>
						<input
						id='searchText'
						type='text'
						value={this.state.searchText}
						onChange={this.handleChange}
						/>
						<input
						type='submit'
						value='Find Movie Info'
						/>
				</form>
				{
					this.state.results ?
						<SearchResults
							results={this.state.results}
							insertSelectedItemFromSearch={this.props.insertSelectedItemFromSearch}
						/> : ''
				}
			</div>
		)
	}
}

export default Search
