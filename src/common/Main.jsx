import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends Component {
	render(){
		return(
		<div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">JLab Cars
						</a>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li>
								<IndexLink to="/" 
								activeClassName="active">
								Home</IndexLink>
							</li>
							<li>
								<Link to="/about"
								activeClassName="active">
								About</Link>
							</li>
							<li>
								<Link to="/cars"
								activeClassName="active">
								Car</Link>
							</li>
						</ul>
					</div>	
				</div>
			</nav>
			<div className="container">
				{this.props.children}
			</div>
		</div>

		);
	}
}

export default Main;