import {Col} from 'react-bootstrap'
import { Button } from '@mui/material';
import './keyCap.css'

function KeyCap(props) {

    return (
        <Col className='p-0 keyCap-fixed'>
            <Button style={{minWidth: '100%'}} className='bg-light' onClick={props.onClick}>
                {props.letter}
            </Button>
        </Col>
    )
}

export default KeyCap;