
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './welcome.css'
import { useDispatch } from "react-redux";


export default function Welcome() {

    const dispatch = useDispatch();

    function startEasy() {
        dispatch({ type: 'DIFFICULTY', wordLength: 5, allowedTries: 7 });
    }

    function startMedium() {
        dispatch({ type: 'DIFFICULTY', wordLength: 6, allowedTries: 6 });
    }

    function startHard() {
        dispatch({ type: 'DIFFICULTY', wordLength: 7, allowedTries: 5 });
    }

    return (
        <Container className="text-center vertical-center" >
            <br></br>
            <br></br>
            <Container className="text-center" >
                <div>
                    <span className="text-center text-info display-1">{"Wordle"}</span>
                    <span className="text-center text-success display-1 title">{"Game"}</span>
                </div>
            </Container>
            <Container className="welcome" >
                <Link to="/game/easy" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="contained" size="large" onClick={startEasy}>
                        play easy mode
                    </Button>
                </Link>
                <Link to="/game/medium" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="contained" size="large" onClick={startMedium}>
                        play medium mode
                    </Button>
                </Link>
                <Link to="/game/hard" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="contained" size="large" onClick={startHard}>
                        play hard mode
                    </Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="contained" size="large">
                        rules
                    </Button>
                </Link>
            </Container>
        </Container>
    )
}