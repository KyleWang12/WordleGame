
import { Container, Badge, Row, Col, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Cell from "./Cell";
import './about.css'
import './row.css'
import { Button } from "@mui/material";

export default function Welcome() {

    return (
        <Container className="text-center" >
            <br></br>
            <br></br>
            <h1><Badge bg="info">Rules</Badge></h1>
            <h5>
                You have to guess the hidden word in several tries and the color of the letters changes to show how close you are.<br></br>
                To start the game, just enter any word, for example:
            </h5>
            <Container className="d-flex justify-content-center">
                <Row className="about-row justify-content-center">
                    <Col className="col-2 p-2px" >
                        <Cell letter={'A'} bg={'bg-secondary'} />
                    </Col>
                    <Col className="col-2 p-2px" >
                        <Cell letter={'U'} bg={'bg-success'} />
                    </Col>
                    <Col className="col-2 p-2px" >
                        <Cell letter={'D'} bg={'bg-warning'} />
                    </Col>
                    <Col className="col-2 p-2px" >
                        <Cell letter={'I'} bg={'bg-secondary'} />
                    </Col>
                    <Col className="col-2 p-2px" >
                        <Cell letter={'O'} bg={'bg-warning'} />
                    </Col>
                </Row>
            </Container>
            <Container className="bg-light d-flex flex-column justify-content-between max-width-500">
                <div className="margin-2">
                    <span className="h5 bg-secondary">&nbsp;A </span>
                    <span className="h5">,&nbsp;</span>
                    <span className="h5 bg-secondary"> &nbsp;I&nbsp; </span>
                    <span className="h5">&nbsp;are not in the target word.</span>
                </div>
                <div className="margin-2">
                    <span className="h5 bg-warning">&nbsp;D </span>
                    <span className="h5">,&nbsp;</span>
                    <span className="h5 bg-warning">&nbsp;O </span>
                    <span className="h5">&nbsp;are in the word but in wrong spots.</span>
                </div>
                <div className="margin-2">
                    <span className="h5 bg-success">&nbsp;U </span>
                    <span className="h5">&nbsp;is in the word and in the correct spot.</span>
                </div>
            </Container>
            <Container fluid className="d-flex flex-row justify-content-between max-width-550 p-0">
                <Card className="max-width-300 m-1 mt-3 mb-3">
                    <Card.Body>
                        <Card.Title>Easy</Card.Title>
                        <Card.Text>
                            5-letters words<br></br>
                            7 tries
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="max-width-300 m-1 mt-3 mb-3">
                    <Card.Body>
                        <Card.Title className="h3">Medium</Card.Title>
                        <Card.Text>
                            6-letters words<br></br>
                            6 tries
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="max-width-300 m-1 mt-3 mb-3">
                    <Card.Body>
                        <Card.Title>Hard</Card.Title>
                        <Card.Text>
                            7-letters words<br></br>
                            5 tries
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="contained" size="large">
                        Got it!
                    </Button>
                </Link>
            </Container>
            <br></br>
        </Container>
    )
}