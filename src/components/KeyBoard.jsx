import { Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyCap from './KeyCap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { isWord } from '../helper/getWord'
import PopUp from './PopUp';
import ErrorPopUp from './ErrorPopUp';
import './keyboard.css'

function KeyBoard() {
    const rows = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "X", "C", "V", "B", "N", "M", "⌫"]]

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [errMes, setErrMes] = useState("");

    function SuccessHandleClose() {
        dispatch({ type: 'RESET' });
        setShow(false);
    }

    function ErrorHandleClose() {
        setOpen(false);
    }

    const dispatch = useDispatch();
    const currentRow = useSelector(state => state.keyBoard.currentRow);
    const wordLength = useSelector(state => state.keyBoard.wordLength);
    const allowedTries = useSelector(state => state.keyBoard.allowedTries);
    const goal = useSelector(state => state.keyBoard.goal);

    const [word, setWord] = useState("");

    function handleClick(event) {
        const key = event.target.textContent || event.target.innerText;
        if (key.length === 1 && key.match(/[A-Z]/i) && currentRow < allowedTries && word.length < wordLength) {
            dispatch({ type: 'ADD', letter: key });
            setWord(word + key);
        }
        if (key === '⌫' && word.length > 0) {
            setWord(word.substring(0, word.length - 1));
            dispatch({ type: 'DEL' });
        }
        if (key === 'Enter') {
            // setShow(true);
            if (word.length === wordLength && isWord(word, wordLength)) {
                dispatch({ type: 'CHECK', word });
                if (word === goal) {
                    setTimeout(() => setShow(true), 500)
                }
                setWord("");
            } else if (word.length === wordLength) {
                // alert("not a valid word!!!");
                setOpen(true);
                setErrMes('Not a valid english word!');
            } else {
                // alert("word not long enough!!");
                setOpen(true);
                setErrMes('Word not long enough!');
            }
        }
        // console.log(goal);
    }


    return (
        <Container className='keyboard h-100'>
            {[0, 1, 2].map(id =>
                <Row key={id.toString()} className='flex-nowrap justify-content-between'>
                    {rows[id].map(letter =>
                        <KeyCap key={letter} onClick={handleClick} letter={letter} />
                    )}
                </Row>
            )}
            <PopUp show={show} handleClose={SuccessHandleClose} />
            <ErrorPopUp open={open} handleClose={ErrorHandleClose} message={errMes} />
        </Container>
    )
}

export default KeyBoard;