import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './../components/buttons/Button'
class somepath2 extends Component{

    enrollMerchant = () => {
        this.props.history.push("/");
    }
    
    render(){
        return(
            <div style={NewStyle}>
                 Sorry,your enrollment could <br/>not be complete online,please contact clint care.
                  <br/>
                  <Button buttonClass="btn btn-primary" onClick={this.enrollMerchant} buttonName="Contact Clint Care"/>
            </div>
        );
    }
}

const mapStateToProps = State =>({

});

const mapStateToDispatch = Dispatch =>({

});

const NewStyle={
    textAlign:"center",
    color:"red",
    fontFamily:"sans-serif",
    fontSize:"30px", 
    border:"3px solid #071848",
    lineHeight : "1.6",
    width:"400px", 
     margin: "144px auto",
     padding:"20px",
}

export default connect (mapStateToProps,mapStateToDispatch)(somepath2);
