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
                {
                    latitude: 10.787811400315592,
                    longitude: 106.70537121898475,
                },
            ],
        }
    }

    generateRandomCoordinate = (min, max) => {
        return Math.random() * (max - min) + min;
    }
      
      generateRandomLocations = () => {
        const hcmcCenter = { latitude: 10.7769, longitude: 106.7009 }; // Ho Chi Minh City center
      
        const locations = [];
      
        for (let i = 0; i < 100; i++) {
          const latitude = this.generateRandomCoordinate(10.7, 10.9); // Adjust the latitude range as needed
          const longitude = this.generateRandomCoordinate(106.5, 106.9); // Adjust the longitude range as needed
      
          // Calculate distance from the center to filter out locations too far away (optional)
          const distance = Math.sqrt(
            Math.pow(latitude - hcmcCenter.latitude, 2) +
            Math.pow(longitude - hcmcCenter.longitude, 2)
          );
      
          // Filter locations within a certain distance from the center (adjust as needed)
          if (distance < 0.3) {
            locations.push({ latitude, longitude });
          }
        }
      
        return locations;
    }
      

    componentDidMount() {
      const locationsArray = this.generateRandomLocations();
    //   console.log(locationsArray[0]);
      this.setState({
        markers:  locationsArray
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
