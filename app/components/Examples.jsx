import React from 'react';
import { Link } from 'react-router';

let Examples = () => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are some example cities to try out!</p>
			<ol>
				<li>
					<Link to="/?location=New%20York%20City">New York City, New York</Link>
				</li>
				<li>
					<Link to='/?location=Paris'>Paris, France</Link>
				</li>
				<li>
					<Link to="/?location=Tokyo">Tokyo, Japan</Link>
				</li>
			</ol>
		</div>
	);
}

export default Examples;
