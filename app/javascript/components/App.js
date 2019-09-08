//Dependancies
import React from 'react'
//Imported Components
import Header from './Header.js'
import SideBar from './SideBar.js'
import Main from './Main.js'
import Home from './Home.js'

//Sidebar toggling function
function SideBarElement(props) {
	if (!props.show) {
		return null;
	}
	return (
		<SideBar fetchItems={props.fetchItems}/>
	)
}

//React Class
class App extends React.Component {
	//State
	constructor(props) {
		super(props)
		this.state = {
			listItemsArray: [],
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
	fetchItems = (view) => {
			const urlInsert = view.toLowerCase();
			fetch(`/${urlInsert}`)
			.then(data => data.json())
			.then(jData => {
				this.setState({ listItemsArray: jData })
			})
			this.handleView(view)
	}

	render () {
		return (
      		<div className="container">
				<Header handleToggleClick={this.handleToggleClick} showSideBar={this.state.showSideBar}/>
				<div className="main-container">
					<SideBarElement
						show={this.state.showSideBar}
						fetchItems={this.fetchItems}
					/>
					{ this.state.view.listToShow === 'Home'
					? <Home />
					:<main>
						<h2 className="list-add-btn"><i className="material-icons md-36">add</i></h2>
						<Main
							listItemsArray={this.state.listItemsArray}
							listToShow={this.state.view.listToShow}
						/>
					</main>
					}
				</div>
			</div>
    	)
  	}
}

export default App
