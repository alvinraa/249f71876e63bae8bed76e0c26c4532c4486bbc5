import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
class Buttons extends React.Component {
    state = {
        isLunch:true,
        isDinner:false
    };

    handleLunch = () => {
        this.setState({ isLunch: true });
        this.setState({ isDinner: false });
    }

    handleDinner = () => {
        this.setState({ isLunch: false});
        this.setState({ isDinner: true });
    }

    render() {
        return (
            <div className="d-flex flex-column mb-4 mt-4">
                <ButtonGroup size="lg">
                    <Button variant={this.state.isLunch === true ? "dark" : "secondary"} onClick={()=>this.handleLunch()}>Lunch</Button>
                    <Button variant={this.state.isDinner === true ? "dark" : "secondary"} onClick={()=>this.handleDinner()}>Dinner</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Buttons;