import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class DanceExt extends Component{
    render(){
        return(        
            <Container fluid className={"dance-ext p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/dance/dance_ext_img.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2">
                        <div>
                            <h2 className="mb-3 mt-5 text-dark-gray">
                                Present day
                            </h2>
                            <p className="lead text-dark-gray">
                                Relocating to new location in the heart of city's Theater District, 
                                Dance Studio continues to inspire the world to dance. Under the 
                                direction of long-time staff Diane Richards and Anne Morris, the 
                                studio saw growth in 2012 with expansion and the opening of a new 
                                Dance Studio Children and Teens School.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default DanceExt;