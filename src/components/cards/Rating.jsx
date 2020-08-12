import React from "react";
import { Col, Row } from "react-bootstrap";

const Rating = () => {
    return (
        <div>
            <Row>
                <Col className="pr-0" xs={2} style={{ flex: ' 0 0 11%' }}>
                    <p className="fs-14 text-muted">4.0</p>
                </Col>
                <Col className="pl-0" xs={4}>
                    <div className=" fs-14 rating">
                        &#9734; &#9733; &#9733; &#9733; &#9733;
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Rating;