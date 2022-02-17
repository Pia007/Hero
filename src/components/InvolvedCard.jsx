import { Row, Col} from 'reactstrap';
import InvolvedModal from './InvolvedModal';
import Fade from 'react-reveal/Fade';

const InvolvedCard =({ 
    className, 
    title, 
    contentOne, 
    contentTwo, 
    contentThree, 
    modalHeaderText,
    modalBodyText,
    modalBodyTextTwo, 
    modalBodyTextThree, 
    value,
    to,
    imageSrc, 
    imageName 

    }) => {

    return (
        <div >
            <Row className={className}>
                <Col lg={6} className="my-auto text-primary" >
                    <Fade bottom cascade>
                        <h2 className="text-primary">{title}</h2>
                        <p className=" mission-text">{contentOne}</p>
                        <p className=" mission-text">{contentTwo}</p>
                        <p className=" mission-text">{contentThree}</p>
                    </Fade>
                    <InvolvedModal 
                        modalHeaderText={modalHeaderText}
                        modalBodyText={modalBodyText}
                        modalBodyTextTwo={modalBodyTextTwo}
                        modalBodyTextThree={modalBodyTextThree}
                        value={value}
                        to={to}
                        text={title}
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