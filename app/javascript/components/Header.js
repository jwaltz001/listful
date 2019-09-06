import React from 'react'

class Header extends React.Component {
  render () {
		return (
			<header>
			<div>
				<i className="material-icons md-36">menu</i>
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
