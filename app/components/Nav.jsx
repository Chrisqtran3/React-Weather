import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {

	constructor() {
		super()

		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(e) {
		e.preventDefault();

		let location = this.refs.location.value;
		let encodedLocation = encodeURIComponent(location);

		if(location.length > 0) {
			this.refs.location.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	}

	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" ref="location" placeholder="Search weather by city"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
}

export default Nav;
