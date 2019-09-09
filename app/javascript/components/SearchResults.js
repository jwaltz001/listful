import React from 'react'


class SearchResults extends React.Component {
  render () {
	  if (true) {

	  }

	return  (
      <div>
	  	{
			this.props.results.map((movie) => (
				<div key={movie.imdbID} onClick={()=>{this.props.insertSelectedItemFromSearch(movie)}}>
					<h4>{movie.Title}</h4>
					<p>Year: {movie.Year}</p>
				</div>
			))
		}
      </div>
    )
  }
}

export default SearchResults
