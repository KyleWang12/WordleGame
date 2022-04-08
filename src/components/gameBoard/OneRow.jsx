import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './oneRow.css'

export default function OneRow(props) {

    const wordLength = useSelector(state => state.keyBoard.wordLength);
    const rows = useSelector(state => state.keyBoard.rows);
    const letters = rows[props.id];

    const nums = Array.from(Array(wordLength).keys());

    const cells = nums.map(num =>
        <Col className="p-2px max-width-60" key={num.toString()} >
            <Cell letter={letters[num].letter} bg={letters[num].bg} />
        </Col>
    )


    return (
        <Row className='flex-nowrap justify-content-center max-width'>
            {cells}
        </Row>
    )
}