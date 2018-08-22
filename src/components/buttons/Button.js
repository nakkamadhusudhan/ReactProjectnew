import React, { Component } from "react";

class Button extends Component {
    onClick(){
        window.location.href="#";
    }

    render() { 
        
      return (
          <button onClick={this.onClick}>
              {this.props.buttonName}
              Go to Dashboard
          </button>
            
      );
    }
}


export default Button;
