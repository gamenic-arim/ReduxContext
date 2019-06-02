import React, { Component } from "react";
import "./index.css";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "arim shrestha",
    age: 23,
    address: "dhapashi"
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          birthday: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Person extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        So How do i access my file here ??
        <MyContext.Consumer>
          {context => (
            <>
              <p>My name is {context.state.name} </p>
              <p>My age is {context.state.age} </p>
              <p>My address is {context.state.address} </p>

              <button onClick={context.birthday}>Happy birthday</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class Family extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        hello is from family
        <MyContext.Consumer>
          {
            (context) =>(
              <>
                i need to access props in family
                <p>
                  {context.state.name}
                </p>
              </>
              )
            }
        </MyContext.Consumer>
        <Person />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Family />
      </MyProvider>
    );
  }
}

export default App;
