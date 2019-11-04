import React from 'react';


export default function SearchResults (props) {
	  if (props.listToShow === "Movies") {
		  return  (
			  <div className="search-results-div">
			  {
				  props.results.map((movie) => (
					  <div className="search-result" key={movie.imdbID} onClick={()=>{props.insertSelectedItemFromSearch(movie)}}>
						  <h4>{movie.Title}</h4>
						  <p>Year: {movie.Year}</p>
					  </div>
				  ))
			  }
			  </div>
			)
	  }
}
