import React from 'react'

class Welcome extends React.Component {
  	constructor(props) {
    super(props);
    this.state = {
			message: ['it', 'doing', 'watching', 'reading', 'seeing', 'living'],
			index: 0
		};
  	}

  	componentDidMount() {
	    this.timerID = setInterval(
	      	() => this.tick(),
	      	1500
	    	);
	  	}

  	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

  	tick() {
	    if (this.state.index <= 4) {
			this.setState(prevState => ({
	      		index: prevState.index += 1
	    	}));
	    }else{
			this.setState({
	      		index: 0
	    	});
	    }
  	}

  render() {
    return (
        <h1 className="scrolling-message">{this.state.message[this.state.index]} starts here</h1>
    );
  }
}

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

class Home extends React.Component {
	render () {
		return (
			<div className="scrolling-message-div">
				<Welcome />
			</div>
		)
	}
}

export default Home
