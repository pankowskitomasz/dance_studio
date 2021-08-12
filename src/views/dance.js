import React,{Component} from "react";
import DanceDesc from "../components/dance-desc";
import DanceExt from "../components/dance-ext";

class Dance extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">     
                <DanceDesc/>
                <DanceExt/>
            </main>
        );
    }
}

export default Dance;