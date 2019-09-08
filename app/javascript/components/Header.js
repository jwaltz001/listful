import React from 'react'

class Header extends React.Component {
  render () {
		return (
			<header>
			<div>
				<i onClick={this.props.handleToggleClick} className="material-icons md-36">
					{this.props.showSideBar ? 'menu_open' : 'menu'}
				</i>
			</div>
				<div className= "site_title">
					<h1>listful.</h1>
					<span id="site_subtitle">All your lists. All the Time</span>
				</div>

			</header>
		)
	}
  }


// =============================
// EXPORT
// =============================
export default Header
