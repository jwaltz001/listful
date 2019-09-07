import React from 'react'

class Todos extends React.Component {

	render () {
		return (
			<div>
				{
					this.props.listItemsArray.map((itemData) => (
						<div className="todo-div" key={itemData.id}>
						{itemData.iscomplete ? (
							<input type="checkbox" defaultChecked />
						) : (
							<input type="checkbox"/>
						)}
							<h3>{itemData.description}</h3>
						</div>
					))
				}
			</div>
		)
	}
}
export default Todos
