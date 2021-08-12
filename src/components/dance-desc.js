import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class DanceDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"dance-desc p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-dark-yellow "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={7} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="w-75 mx-auto">
                            <h2 className="mb-3 mt-5 fw-bold text-dark-gray">
                                History
                            </h2>
                            <p className="lead text-dark-gray">
                                Created in 1984 Dance Studio was created through the vision of Richard Briggs 
                                and legendary instructor Frank Harris. Dance Studio became a home for dancers 
                                of all levels, offering classes in a variety of styles.                                                
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/dance/dance_desc_img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default DanceDesc;