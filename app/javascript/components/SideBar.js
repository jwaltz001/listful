import React from 'react'

class SideBar extends React.Component {

	render () {
			return (
				<div className="sidebar">
					<ul>
						<li onClick={() => {this.props.fetchItems('Todos')}}>the classic to-do</li>
						<li onClick={() => {this.props.fetchItems('Movies')}}>movies</li>
						<li>music</li>
						<li>games</li>
						<li>books</li>
						<li>videos</li>
						<li>bucket</li>
						<br/>
						<br/>
						<li> Create New </li>
					</ul>
				</div>
			)
	}
}

export default SideBar
