import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';

const InvolvedModal = ({modalHeaderText, modalBodyText, modalBodyTextTwo, modalBodyTextThree, to, value, text}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    
    return (
        <React.Fragment>
            <Buttons color={"primary"} clickHandler={toggleModal} btntext={"Learn More"} className="col-6 col-sm-6 col-md-4 mx-auto shadow-lg btn-learn"/>
            <Modal centered scrollable isOpen={modal} toggle={toggleModal} className=" ">
                <ModalHeader toggle={toggleModal} className="bg-primary text-white">{modalHeaderText}</ModalHeader>
                <ModalBody>
                    <p>{modalBodyText}</p>
                    <p>{modalBodyTextTwo}</p>
                    <p>{modalBodyTextThree}</p>
                </ModalBody>
                <ModalFooter>
                    <Link 
                        className="btn btn-success mission text shadow-md"
                        value={value} color="success" to={to}>
                        {text}
                    </Link>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}

export default InvolvedModal;