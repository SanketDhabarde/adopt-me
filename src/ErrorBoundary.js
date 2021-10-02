import { Component } from "react";
import { Link, Redirect } from "react-router-dom"; //eslint-disable-line

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError(){
      return { hasError: true }
  }

  componentDidCatch(error, info){
      console.error("Error boundary cath error", error, info);
      setTimeout(() => this.setState({redirect: true}), 5000);
  }

  render(){
      if(this.state.redirect){
          return <Redirect to="/"/>
      }else if(this.state.hasError){
          return(
              <h2>Something went wrong. <Link to="/">Click here</Link> to go back to home page or wait for 5 Seconds.</h2>
          )
      }
      return this.props.children;
  }
}

export default ErrorBoundary;