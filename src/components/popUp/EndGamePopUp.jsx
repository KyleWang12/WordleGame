import {Button,Modal} from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EndGamePopUp(props) {
    
    return (
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                className='text-center'
                centered
            >
                <Modal.Header className="justify-content-center">
                    <Modal.Title className={`text-${props.type}`} >{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-secondary h5'>
                    {props.answer ? `Answer: ${props.answer}` :null}
                    {props.answer ? <br></br> :null}
                    {props.message}
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary w-25" onClick={props.handleClose}>Try Again</Button>
                    <Link to="/" className='w-25'>
                        <Button className="btn-secondary w-100" >Cancel</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
    );
}
