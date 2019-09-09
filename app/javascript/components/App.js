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
			listToShow: 'Home'
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
			case 'Loadscreen':
				listToShow = 'Loadscreen';
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
			listToShow: listToShow
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

	updateListItemsArr = (newItemArr, list) => {
		this.handleView('Loadscreen')
		console.log(newItemArr);
		this.setState({
			listItemsArray: newItemArr,
		})
		this.handleView(list)
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
					{ this.state.listToShow === 'Home'
					? <Home />
					:<Main
						listItemsArray={this.state.listItemsArray}
						listToShow={this.state.listToShow}
						fetchItems={this.fetchItems}
						updateListItemsArr={this.updateListItemsArr}
					/>
					}
				</div>
			</div>
    	)
  	}
}

export default App
