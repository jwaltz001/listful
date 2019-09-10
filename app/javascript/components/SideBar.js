import React from 'react'

class SideBar extends React.Component {

	render () {
			return (
				<div className="sidebar">
					<ul>
						<li onClick={() => {this.props.fetchItems('Todos')}}>the classic to-do</li>
						<li onClick={() => {this.props.fetchItems('Movies')}}>movies</li>
						<li>videos</li>
						<li>games</li>
						<li>books</li>
						<li>bucket</li>
						<br/>
						<br/>
						<li><i onClick={this.props.handleToggleClick} className="material-icons md-36">add</i> Create New </li>
					</ul>
				</div>
			)
	}
}

export default SideBar
