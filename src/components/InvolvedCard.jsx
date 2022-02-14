import { Row, Col} from 'reactstrap';
import InvolvedModal from './InvolvedModal';

const InvolvedCard =({ 
    className, 
    title, 
    contentOne, 
    contentTwo, 
    contentThree, 
    modalHeaderText, 
    modalBodyText, 
    imageSrc, 
    imageName 

    }) => {

    return (
        <div >
            <Row className={className}>
                <Col lg={6} className="my-auto" >
                    <h2>{title}</h2>
                    <p className="text-primary mission-text">{contentOne}</p>
                    <p className="text-primary mission-text">{contentTwo}</p>
                    <p className="text-primary mission-text">{contentThree}</p>
                    <InvolvedModal 
                        modalHeaderText={modalHeaderText}
                        modalBodyText={modalBodyText}
                    />
                </Col>
                <Col lg={6}>
                    <img className="col d-flex my-4 my-lg-0 mr-3 img-fluid p-0  img-thumbnail" src={imageSrc} alt={imageName} />
                </Col> 
            </Row>
        </div>
    );
}

export default InvolvedCard;