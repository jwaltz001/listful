import React from 'react'

class Item extends React.Component {
	render () {
		return (
			<div className="item-div">
				<input type="checkbox"/>
				<h3>{this.props.itemData.description}</h3>
			</div>
		)
	}
}

export default Item
