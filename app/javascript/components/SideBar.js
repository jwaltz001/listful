import React from 'react'

class SideBar extends React.Component {

	render () {
			return (
				<div className="sidebar">
					<h2 className="sidebar-title">your lists</h2>
					<ul>
						<li onClick={() => {this.props.fetchItems('Todos')}}>the classic to-do</li>
						<li onClick={() => {this.props.fetchItems('Movies')}}>movies</li>
						<li onClick={() => {this.props.fetchItems('TempScreen')}}>videos</li>
						<li onClick={() => {this.props.fetchItems('TempScreen')}}>games</li>
						<li onClick={() => {this.props.fetchItems('TempScreen')}}>books</li>
						<li onClick={() => {this.props.fetchItems('TempScreen')}}>bucket</li>
						<br/>
						<br/>
						<li onClick={() => {this.props.fetchItems('TempScreen')}}><i className="material-icons md-36">add</i> Create New </li>
					</ul>
				</div>
			)
	}
}

export default SideBar
