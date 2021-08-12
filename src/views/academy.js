import React,{Component} from "react";
import ClassesList from "../components/classes_list";

class Academy extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-academy">     
                <ClassesList/>
            </main>
        );
    }
}

export default Academy;