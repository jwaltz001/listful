import React from 'react'
import Todos from './Todos.js'
import Movies from './Movies.js'


class Main extends React.Component {

	handleCreate = (createData) => {
	    fetch('/api/posts', {
	      body: JSON.stringify(createData),
	      method: 'Post',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      }
	    })
	      .then(createdPost => {
	        return createdPost.json()
	      })
	      .then(jsonedPost => {
	        // takes us back to the index page
	        this.props.handleView('home')
	        // update state with our new post
	        this.setState(prevState => {
	          prevState.posts.push(jsonedPost)
	          return { posts: prevState.posts }
	        })
	      })
	      .catch(err => console.log(err))
	  }

	render () {
		if (this.props.listToShow === 'Todos') {
			return (
				<Todos handleCreate={this.handleCreate} listItemsArray={this.props.listItemsArray}/>
			)
		} else if (this.props.listToShow === 'Movies') {
			return (
				<Movies listItemsArray={this.props.listItemsArray}/>
			)
		}
	}
}

export default Main
