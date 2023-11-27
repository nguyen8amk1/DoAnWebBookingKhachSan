import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { login } from '../api/AuthenticationAPI';
import  { Navigate } from 'react-router-dom';
import LocationOnMapSetting from '../components/Map/LocationOnMapSetting';

class MapModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }

    login = async () => {}

    handleOnChangeInput = (event, id) => {}

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
                    <LocationOnMapSetting width="600px" height="600px" style={{}} />
                </ModalBody>
            </Modal>
        )
    }

}

export default MapModal;
