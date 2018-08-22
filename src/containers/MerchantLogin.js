import React, { Component } from 'react';
import { connect } from 'react-redux';


class MerchantLogin extends Component {

  goback = () => {
      this.props.history.push("/");
  }
  constructor() {
    super();
    this.state = {
      checkbox: 'false',
     
    };
  }

  getInitialState() {
    return {checkbox: ''}
  }
  handleChange(e) {
    this.setState({checkbox: e.target.value})
  }
    render() {
      return (
          <div>
            <h2>FundsAdvance-Update card</h2>
            <br/>
            
          </div>
      );
    }

    
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(MerchantLogin);
