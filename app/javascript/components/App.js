//Dependancies
import React from 'react'
//Imported Components
import Header from './Header.js'
import SideBar from './SideBar.js'
import Main from './Main.js'

//React Class
class App extends React.Component {
	//State
	constructor(props) {
		super(props)
		this.state = {
			loggedInUser: "User",
			view: {
				page: 'home',
				pageTitle: 'Welcome to listful'
			},
			listToShow: 'todos'
		}
	}
	//Methods
	handleView = (view, user) => {
		let pageTitle = '';
		switch (view) {
			case 'home':
				pageTitle = `Hi ${user}, Welcome back`;
			break
		}
	}
	render () {
    	return (
      		<div className="container">
				<Header loggedInUser={this.state.loggedInUser}/>
					<div className="main-container">
						<SideBar listToShow={this.state.listToShow}/>
						<Main listToShow={this.state.listToShow}/>
					</div>
			</div>
    	)
  	}
}

export default App
