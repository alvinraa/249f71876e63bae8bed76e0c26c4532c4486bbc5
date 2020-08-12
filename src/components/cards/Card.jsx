import React from 'react';
import Rating from './Rating';
import CartButton from './CartButton'
import food from '../../assets/images/ayamcabeijo.jpeg';
import { Card, Col, Row } from "react-bootstrap";

class Cards extends React.Component {
    render() {
        const { date } = this.props
        return (
            <div>
                <Row>
                    <Col xs={12} md={3}>
                        <p className="h5 mb-3">{date}</p>
                        <Card className="mb-4">
                            <Card.Img className="br-card-img" variant="top" src={food} />
                            <Card.Body className="bs-card-body">
                                <Rating />
                                <Card.Title className="mb-0">Chicken with Green Chili ala Minangkabau</Card.Title>
                                <Card.Text className="text-muted fs-12">
                                    By Kulina &#8226; Highhills Lunch
                                </Card.Text>
                                <CartButton />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cards;