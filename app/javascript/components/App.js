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
			listToShow: 'Home',
			mainView: 'list'
		}
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}
	//Methods
	handleToggleClick() {
	    this.setState(prevState => ({
	      	showSideBar: !prevState.showSideBar
	    }));
  	}

	handleView = (listType, view, data) => {
		let listToShow = '';
		switch (listType) {
			case 'Home':
				listToShow = 'Home';
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
			listToShow: listToShow,
			mainView: view
		})
	}

	fetchItems = (listType) => {
			const urlInsert = listType.toLowerCase();
			fetch(`/${urlInsert}`)
			.then(data => data.json())
			.then(jData => {
				this.setState({ listItemsArray: jData })
			})
			this.handleView(listType, 'list')
	}

	updateListItemsArr = (item, listType, method) => {
		console.log("App.js updateListItems params",item, listType, method);
		if (method === 'POST') {
			this.setState(prevState => {
				prevState.listItemsArray.unshift(item)
				return { listItemsArray: prevState.listItemsArray }
			})
		}else if (method === "DELETE") {
			this.setState(prevState => {
				const filteredArr = prevState.listItemsArray.filter( arrItem => arrItem.id !== item)
				return { listItemsArray: filteredArr }
			})
		}else if (method === "PUT") {
			const filteredItemArr = this.state.listItemsArray.filter( arrItem => arrItem.id != item.id)
			filteredItemArr.unshift(item)
			this.setState({
				listItemsArray: filteredItemArr
			})
		}
		this.handleView(listType, 'list')
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
						handleView={this.handleView}
						mainView={this.state.mainView}
					/>
					}
				</div>
			</div>
    	)
  	}
}

export default App
