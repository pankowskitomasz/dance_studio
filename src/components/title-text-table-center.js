import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-footer-adj "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={8} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-start">
                            <h2 className="dispaly-6 fw-bold text-secondary text-center">
                                Courses and prices 
                            </h2>
                            <p className="text-muted">
                                You don't need a degree to start a dance studio. Dance teachers only need 
                                college degrees when working in the public education system. However, there 
                                are no degrees or certificates required to open a private dance studio. 
                                Opening a studio requires start-up capital, business knowledge, and extreme 
                                attention to detail.
                            </p>
                            <p className="text-muted mb-5">
                                Instructors wishing to teach in schools will need to earn both a bachelor's 
                                degree in education and a specific certification in dance, where available, 
                                or earn a bachelor's degree in theater and dance arts and then a certification 
                                in education to be able to teach.
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-secondary">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;