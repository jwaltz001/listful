import React from 'react'


class SearchResults extends React.Component {
  render () {
	  if (this.props.listToShow === "Movies") {
		  return  (
			  <div className="search-results-div">
			  {
				  this.props.results.map((movie) => (
					  <div className="search-result" key={movie.imdbID} onClick={()=>{this.props.insertSelectedItemFromSearch(movie)}}>
						  <h4>{movie.Title}</h4>
						  <p>Year: {movie.Year}</p>
					  </div>
				  ))
			  }
			  </div>
			)
	  }
  }
}

export default SearchResults
