import React from 'react';
import SearchResults from './SearchResults.js';

// export default function Search (props) {
// 	const [searchText, setSearchText] = useState('');
// 	const [searchURL, setSearchURL] = useState('');
// 	const [searchResults, setSearchResults] = useState(null);
//
// 	function handleSubmit (event) {
// 		event.preventDefault();
// 		if (props.listToShow === 'Movies') {
// 			setSearchURL(`https://www.omdbapi.com/?apikey=c1904f71&s=${searchText}&page1`);
// 			.then(() => {
// 				fetch(searchURL)
// 				.then((response) => {
// 					return response.json();
// 				}).then((json) => {
// 					setSearchText('');
// 					setSearchResults(json);
// 				}), error => console.log(error)
// 			})
// 		}
// 	}
//
// 	return(
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor='searchText'>Title</label>
// 					<input
// 					id='searchText'
// 					type='text'
// 					value={searchText}
// 					onChange={event => setSearchText(event.target.value)}
// 					/>
// 					<input
// 					type='submit'
// 					value='Find Movie Info'
// 					/>
// 			</form>
// 			{
// 				searchResults ?
// 					<SearchResults
// 						results={searchResults}
// 						insertSelectedItemFromSearch={props.insertSelectedItemFromSearch}
// 						listToShow={props.listToShow}
// 					/> : ''
// 			}
// 		</div>
// 	)
// }

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
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
		if (this.props.listToShow === "Movies") {
			this.setState({
				searchURL: 'https://www.omdbapi.com/?apikey=c1904f71&s=' +  this.state.searchText + '&page=1'
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
							listToShow={this.props.listToShow}
						/> : ''
				}
			</div>
		)
	}
}

export default Search
