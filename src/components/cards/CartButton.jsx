import React from "react";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShoppingCart, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class CartButton extends React.Component {
    state = {
        setShow: false
    };

    handleShow = () => this.setState({ setShow: true });
    handleClose = () => this.setState({ setShow: false });

    render() {
        return (
            <div>
                <Row>
                    <Col xs={5}>
                        <Card.Text className="fs-18 float-left mt-1">
                            Rp. 15.000
                        </Card.Text>
                    </Col>
                    <Col xs={7}>
                        <Button onClick={() => this.handleShow()} className="cart-button text-uppercase float-right">
                            add <FontAwesomeIcon className="ml-1" icon={faPlus} />
                        </Button>
                        <Modal className="modal-dialog-scrollable" show={this.state.setShow} onHide={() => this.handleClose()}>
                            <Modal.Body>
                                <Row>
                                    <Col xs={7}>
                                        <p className="h6 mb-0">5 Items | Rp. 75,000</p>
                                        <p className="fs-12 mb-0">Sudah termasuk ongkos kirim</p>
                                    </Col>
                                    <Col xs={{ span: 3, offset: 2 }} style={{ float: 'right' }}>
                                        <div className="paseo mt-2">
                                            <FontAwesomeIcon className="fs-20 mr-2" icon={faShoppingCart} /><FontAwesomeIcon className="fs-20" icon={faChevronRight} />
                                        </div>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CartButton;