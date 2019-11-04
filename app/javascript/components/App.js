//Dependancies
import React, {useState} from 'react'
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

//React function with hooks
export default function App (props) {
	const [listItemsArray, setListItemsArray] = useState([]);
	const [showSideBar, setShowSideBar] = useState(false);
	const [listToShow, setListToShow] = useState('Home');
	const [mainView, setMainView] = useState('list');

	function handleToggleClick () {
		setShowSideBar(!showSideBar);
	}

	function handleView (listType, view, data) {
		setListToShow(listType);
		setMainView(view);
	}

	function fetchItems (listType) {
			const urlInsert = listType.toLowerCase();
			fetch(`/${urlInsert}`)
			.then(data => data.json())
			.then(jData => {
				for (var i = 0; i < jData.length; i++) {
					if (jData[i].iscomplete === "t") {
						jData[i].iscomplete = true;
					} else {
						jData[i].iscomplete = false;
					}
				}
				console.log(jData);
				setListItemsArray(jData);
			})
			handleView(listType, 'list');
	}

	function updateListItemsArr (item, listType, method) {
		console.log("5 App.js updateListItems params",item, listType, method);
		console.log(listItemsArray);
		if (method === 'POST') {
			setListItemsArray(listItemsArray.unshift(item));
		}else if (method === "DELETE") {
			const filteredArr = listItemsArray.filter( arrItem => arrItem.id !== item)
			setListItemsArray(filteredArr);
		}else if (method === "PUT") {
			const filteredItemArr = listItemsArray.filter( arrItem => arrItem.id != item.id)
			const addedNewItemArr = filteredItemArr.unshift(item)
			setListItemsArray(addedNewItemArr);

		}
		handleView(listType, 'list');
	}

	return (
		<div className="container">
			<Header handleToggleClick={handleToggleClick} showSideBar={showSideBar}/>
			<div className="main-container">
				<SideBarElement
					show={showSideBar}
					fetchItems={fetchItems}
				/>
				{ listToShow === 'Home'
				? <Home />
				:<Main
					listItemsArray={listItemsArray}
					listToShow={listToShow}
					fetchItems={fetchItems}
					updateListItemsArr={updateListItemsArr}
					handleView={handleView}
					mainView={mainView}
				/>
				}
			</div>
		</div>
	)
}

// //React Class
// class App extends React.Component {
// 	//State
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			listItemsArray: [],
// 			showSideBar: false,
// 			loggedInUser: "User",
// 			listToShow: 'Home',
// 			mainView: 'list'
// 		}
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}
// 	//Methods
// 	handleToggleClick() {
// 	    this.setState(prevState => ({
// 	      	showSideBar: !prevState.showSideBar
// 	    }));
//   	}
//
// 	handleView = (listType, view, data) => {
// 		this.setState({
// 			listToShow: listType,
// 			mainView: view
// 		})
// 	}
//
// 	fetchItems = (listType) => {
// 			const urlInsert = listType.toLowerCase();
// 			fetch(`/${urlInsert}`)
// 			.then(data => data.json())
// 			.then(jData => {
// 				for (var i = 0; i < jData.length; i++) {
// 					if (jData[i].iscomplete === "t") {
// 						jData[i].iscomplete = true;
// 					} else {
// 						jData[i].iscomplete = false;
// 					}
// 				}
// 				console.log(jData);
// 				this.setState({ listItemsArray: jData })
// 			})
// 			this.handleView(listType, 'list')
// 	}
//
// 	updateListItemsArr = (item, listType, method) => {
// 		console.log("5 App.js updateListItems params",item, listType, method);
// 		if (method === 'POST') {
// 			this.setState(prevState => {
// 				prevState.listItemsArray.unshift(item)
// 				return { listItemsArray: prevState.listItemsArray }
// 			})
// 		}else if (method === "DELETE") {
// 			this.setState(prevState => {
// 				const filteredArr = prevState.listItemsArray.filter( arrItem => arrItem.id !== item)
// 				return { listItemsArray: filteredArr }
// 			})
// 		}else if (method === "PUT") {
// 			const filteredItemArr = this.state.listItemsArray.filter( arrItem => arrItem.id != item.id)
// 			filteredItemArr.unshift(item)
// 			this.setState({
// 				listItemsArray: filteredItemArr
// 			})
// 		}
// 		this.handleView(listType, 'list')
// 	}
//
// 	render () {
// 		return (
//       		<div className="container">
// 				<Header handleToggleClick={this.handleToggleClick} showSideBar={this.state.showSideBar}/>
// 				<div className="main-container">
// 					<SideBarElement
// 						show={this.state.showSideBar}
// 						fetchItems={this.fetchItems}
// 					/>
// 					{ this.state.listToShow === 'Home'
// 					? <Home />
// 					:<Main
// 						listItemsArray={this.state.listItemsArray}
// 						listToShow={this.state.listToShow}
// 						fetchItems={this.fetchItems}
// 						updateListItemsArr={this.updateListItemsArr}
// 						handleView={this.handleView}
// 						mainView={this.state.mainView}
// 					/>
// 					}
// 				</div>
// 			</div>
//     	)
//   	}
// }
//
// export default App
