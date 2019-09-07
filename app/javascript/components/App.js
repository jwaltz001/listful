//Dependancies
import React from 'react'
//Imported Components
import Header from './Header.js'
import SideBar from './SideBar.js'
import Main from './Main.js'
import Home from './Home.js'

//React Class
class App extends React.Component {
	//State
	constructor(props) {
		super(props)
		this.state = {
			loggedInUser: "User",
			view: {
				listToShow: 'Home'
				//pageTitle: 'Welcome to listful'
			}
		}
	}
	//Methods
	handleView = (view) => {
		let listToShow = '';
		switch (view) {
			case 'Home':
				listToShow = 'Home';
				// pageTitle = `Hi ${user}, Welcome back`;
				break;
			case 'Todos':
				listToShow = 'Todos';
				break;
			case 'Movies':
				listToShow = 'Movies';
				break;
			default:
				break;
		}
		this.setState({
			view: {
				listToShow: listToShow
			}
		})
	}

	render () {
		return (
      		<div className="container">
				<Header/>
				<div className="main-container">
					<SideBar
						handleView={this.handleView}
					/>
					{ this.state.view.listToShow === 'Home'
					? <Home />
					:<main>
						<h2><i className="material-icons md-36">add</i></h2>
						<Main listToShow={this.state.view.listToShow}/>
					</main>
					}
				</div>
			</div>
    	)
  	}
}

export default App
