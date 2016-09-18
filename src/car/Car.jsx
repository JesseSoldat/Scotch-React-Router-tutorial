import React, { Component } from 'react';
import carData from '../carData.js';

class Car extends Component {

	constructor(props){
		super(props)

		this.state = {
			cars: []
		};
	}

	componentDidMount(){
		
		this.setState({cars: carData});
	}

	render(){
		const carNode = this.state.cars.map( (car) => {
			return (
			<a	href="#"
				className="list-group-item"
				key={car.id}>
				{car.name}
			</a>
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
export default Car