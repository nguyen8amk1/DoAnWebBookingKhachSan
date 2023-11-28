import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { login } from '../api/AuthenticationAPI';
import { Navigate } from 'react-router-dom';
import LocationOnMapSetting from '../components/Map/LocationOnMapSetting';

class MapModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			markers: [
				// {
				// 	latitude: 10.787811400315592,
				// 	longitude: 106.70537121898475,
				// },
			],
		}
	}

	async componentDidMount() {
		this.setState({
			markers: this.props.markers
		});
	}

	toggle = () => {
		this.props.toggle();
	}

	render() {
		return (
			<Modal
				isOpen={this.props.isOpenModal}
				toggle={() => { this.toggle() }}
				className={'modal-user-container'}
				size="lg"
			>
				<ModalHeader toggle={() => { this.toggle(); }}>Map</ModalHeader>
				<ModalBody>
					{/* <LocationOnMapSetting  width="250px" height="200px" style={{}} /> */}
					<LocationOnMapSetting markers={this.state.markers} width="600px" height="600px" style={{}} />
				</ModalBody>
			</Modal>
		)
	}

}

export default MapModal;
