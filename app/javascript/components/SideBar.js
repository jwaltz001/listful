import React from 'react'

class SideBar extends React.Component {

	render () {
			return (
				<aside>
					<ul>
						<li onClick={() => {this.props.handleView('Todos')}}>the classic to-do</li>
						<li onClick={() => {this.props.handleView('Movies')}}>movies</li>
						<li>music</li>
						<li>games</li>
						<li>books</li>
						<li>videos</li>
						<li>bucket</li>
						<br/>
						<br/>
						<li> Create New </li>
					</ul>
				</aside>
			)
	}
}

export default SideBar
