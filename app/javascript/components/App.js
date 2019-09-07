//Dependancies
import React from 'react'
//Imported Components
import Header from './Header.js'
import SideBar from './SideBar.js'
import Main from './Main.js'
import Home from './Home.js'

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}
	return (
		<SideBar handleView={props.handleView}/>
	)
}

//React Class
class App extends React.Component {
	//State
	constructor(props) {
		super(props)
		this.state = {
			showSideBar: false,
			loggedInUser: "User",
			view: {
				listToShow: 'Home'
				//pageTitle: 'Welcome to listful'
			}
		}
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}
	//Methods
	handleToggleClick() {
	    this.setState(prevState => ({
	      	showSideBar: !prevState.showSideBar
	    }));
  	}
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
				<Header handleToggleClick={this.handleToggleClick} showSideBar={this.state.showSideBar}/>
				<WarningBanner warn={this.state.showSideBar} handleView={this.handleView}/>
				<div className="main-container">
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
