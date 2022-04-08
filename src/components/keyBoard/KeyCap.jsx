import {Col} from 'react-bootstrap'
import { Button } from '@mui/material';
import './keyCap.css'

function KeyCap(props) {

    return (
        <Col className='p-0 keyCap-fixed'>
            <Button className='bg-light keyCap-button' onClick={props.onClick}>
                {props.letter}
            </Button>
        </Col>
    )
}

export default KeyCap;