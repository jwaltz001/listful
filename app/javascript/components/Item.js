import React from 'react'

class Item extends React.Component {
	render () {
		return (
			<div>
				<h3>{this.props.item.description}</h3>
			</div>
		)
	}
}

export default Item
