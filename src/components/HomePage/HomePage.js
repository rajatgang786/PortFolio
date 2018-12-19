import React, * as react from "react";
import {connect} from 'react-redux';
const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 50,
    fontColor: "black",
    textAlign:"center"
  }
};
class HomePage extends react.Component {
  render() {
    return (
      <div >
        <div className="col-sm-8" style={{margin:'auto'}}>
          <p style={styles.root}>
            When I sit next to the computer, magic happens.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    ctr : state
  }
} 

export default connect(mapStateToProps)(HomePage);
