import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './../components/buttons/Button';
import Footer from "./../components/footer/footer";


class somepath1 extends Component{

   

    render(){
        
        return(
            <div>
            <div style={Text}>
                  Congratulations <br/>
                  Enrollment <br/>
                  update is complete.
                  <br/>
                  <Button />
                  
            </div>
            <div><Footer /></div>
            </div>
             
        );
        
    }
}

const mapStateToProps = State =>({

});

const mapStateToDispatch = Dispatch =>({

});

export default connect (mapStateToProps,mapStateToDispatch)(somepath1);

const Text= {
    textAlign:"center",
    color:"#18b318",
    fontFamily:"sans-serif",
    fontSize:"45px", 
    border:"3px solid #071848",
    lineHeight : "1.5",
    width:"484px",  
    margin: "144px auto",
    padding:"20px",
}
  
