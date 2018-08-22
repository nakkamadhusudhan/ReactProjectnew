import React, { Component } from "react";

class Button extends Component {
    onClick(){
        window.location.href="#";
    }

    render() { 
        
      return (
          <button onClick={this.onClick} style={Btn}>
              {this.props.buttonName}
              Go to Dashboard
          </button>
            
      );
    }
}

const Btn={
   border:"3px solid #071848",
   width:"auto",
   fontSize:"20px",
   fontFamily:"sans-serif",
   color:"#0e0e0ef7",
   height:"40px",
}
export default Button;
