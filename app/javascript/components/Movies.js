import React from 'react'

class Movies extends React.Component {
	render(){
		return (
			<div>
				{
					this.props.listItemsArray.map((itemData) => (
						<div className="movie-div" key={itemData.id}>
							<img src={itemData.imageurl}/>
							<h3>{itemData.title}</h3>
							<h4>{itemData.genre}</h4>
							<p>{itemData.description}</p>
							<p>Watched:
								{itemData.watched ? (
									<input type="checkbox" checked />
								) : (
									<input type="checkbox" checked />
								)}
							</p>
						</div>
					))
				}
			</div>
		)
	}
}
export default Movies
