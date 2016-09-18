import React, { Component } from 'react';
// import carData from '../carData.js';
import { Link } from 'react-router';

class Car extends Component {

	// constructor(props){
	// 	super(props)

	// 	this.state = {
	// 		cars: []
	// 	};
	// }

	componentDidMount(){
		
		// this.setState({cars: carData});
	}

	render(){
		const cars = this.props.route.data;

		const carNode = cars.map( (car) => {
			return (
			<Link to={'/cars/'+car.id}
				className="list-group-item"
				key={car.id}>
				{car.name}
			</Link>
				)
		});
		return(
		<div>
			<h1>Cars</h1>
			<div className="list-group">
				{carNode}
			</div>
		</div>
		);
	}
}
export default Car;