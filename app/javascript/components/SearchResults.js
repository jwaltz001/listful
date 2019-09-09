import React from 'react'


class SearchResults extends React.Component {
  render () {
    return  (
      <div>
	  	{
			this.props.movies.map((movie) => (
				<div key={movie.imdbID} onClick={()=>{this.props.insertSelectedMovie(movie)}}>
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
