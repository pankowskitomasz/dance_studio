import React,{Component} from "react";
import HomeTop from "../components/home-top";

class Home extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-home d-flex align-items-center">     
                <HomeTop backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Home;