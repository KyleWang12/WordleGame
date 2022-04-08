import GameBoard from "./components/gameBoard/GameBoard"
import KeyBoard from "./components/keyBoard/KeyBoard"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

    const { difficulty } = useParams();

    return (
        <Container className="text-center vertical-center" >
            <div>
                <span className="text-center text-info h2">{"Wordle"}</span>
                <span className="text-center text-success h2">{"Game"}</span>
            </div>
            <GameBoard mode={difficulty}/>
            <KeyBoard />
        </Container>
    )
}