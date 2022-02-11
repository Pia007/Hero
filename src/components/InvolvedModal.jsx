import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Buttons from './Buttons';

const InvolvedModal = ({modalHeaderText, modalBodyText}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    
    return (
        <div>
            <Buttons clickHandler={toggleModal} btnText={"Learn More"} className="col-6 col-sm-6 col-md-4 mx-auto btn-learn"/>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{modalHeaderText}</ModalHeader>
                <ModalBody>
                    <p>{modalBodyText}</p>
                </ModalBody>
                <ModalFooter>
                    {/* Update this button */}
                    <Button 
                        type="submit" value="submit" color="primary">
                        Test
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default InvolvedModal;