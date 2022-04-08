import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cell.css'

export default function Cell(props) {

    return (
        <Card className={`mb-1 ${props.bg} fixed`}>
            {/* {console.log(props)} */}
            <Card.Body className='p-0 align-items-center d-flex justify-content-center'>
                <Card.Text className='text-monospace text-uppercase h1'>{props.letter}</Card.Text>
            </Card.Body>
        </Card>
    )
}