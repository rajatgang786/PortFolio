import React, { Component } from "react";
import PortFolio from "./components/PortFolio/Portfolio";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.onScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.onScroll);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  onScroll() {
    this.setState({ width: window.innerWidth, height: window.scrollY + 780 });
  }
  render() {
    return (
      <div style={{ width:this.state.width , height:this.state.height }}>
       <PortFolio />
      </div>
    );
  }
}

export default App;
