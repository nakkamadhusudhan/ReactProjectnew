import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './../components/buttons/Button'
class somepath2 extends Component{

    
    render(){
        return(
            <div style={{textAlign:"center",color:"red",fontFamily:"sans-serif",fontSize:"30px", border: "2px solid #1d1da0fa",lineHeight : "1.6",width:"400px",  margin: "144px auto",padding:"20px"}}>
                 Sorry,your enrollment could <br/>not be complete online,please contact clint care.
                  <br/>
                  <Button />
            </div>
        );
    }
}

const mapStateToProps = State =>({

});

const mapStateToDispatch = Dispatch =>({

});

export default connect (mapStateToProps,mapStateToDispatch)(somepath2);