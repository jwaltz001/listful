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
				{this.state.listItemsArray.map((item) => {
					<Item item={item}/>
				})}
			</main>
		)
	}
}

export default Main
