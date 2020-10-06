import React from 'react';
import { Link } from 'react-router';

function Header(props) {
	return (
		<div>
			<h3>
				<Link to='/'>Home</Link>
			</h3>
			<h3>
				<Link to='/jokes'>Jokes</Link>
			</h3>
		</div>
	);
}

export default Header;
