import React from 'react'
import Item from './Item.js'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listItemsArray: []
		}
	}
	fetchItems = () => {
	    fetch(`/${this.props.listToShow}`)
	      .then(data => data.json())
	      .then(jData => {
	        this.setState({ listItemsArray: jData })
	      })
	    }
	componentDidMount() {
    	this.fetchItems()
  	}

	render () {
		return(
			<main>
				<h2><i className="material-icons md-36">add</i></h2>
				{ this.state.listItemsArray.map((itemData) => (
					<Item
			  		key={itemData.id}
			  		itemData={itemData}
					/>
		  		))
				}
			</main>
		)
	}
}

export default Main
