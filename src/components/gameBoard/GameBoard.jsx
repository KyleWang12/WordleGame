import { useEffect } from 'react';
import OneRow from './OneRow'
import {Container} from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameBoard.css'

export default function GameBoard(props){

    const dispatch = useDispatch();
    const allowedTries = props.mode==='easy' ? 7 : (props.mode==='medium' ? 6 : 5);
    const wordLength = props.mode==='easy' ? 5 : (props.mode==='medium' ? 6 : 7);
    useEffect(()=>{
        dispatch({type:'DIFFICULTY', wordLength, allowedTries});
    },[])
    const ids = Array.from(Array(allowedTries).keys());
    const rows = ids.map(id=>
        <OneRow key={id.toString()} id={id}/>
    );

    return(
        <Container fluid>
            <div className='gameboard'>
                {rows}
            </div>
        </Container>
    )
}


// state = {
//     rows:[
//         {
//             cluedLetters:[
//                 {clue: 0, letter: "t", total: 1},
//                 {}
//             ]
//         },
//         {},
//         {}
//     ]
//    difficulty:...
// }