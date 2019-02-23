"use strict";

var Counter = React.createClass({


  getDefaultProps() { //ustawia domyślne wartości propsów, jeśli nie przekażemy ich do komponentu.
    console.log("Getting our default properties")
  },



  componentWillMount() {
    console.log("Before Mounting") //jeśli chcemy ją wywołać przed metodą render. Przygotowuje do pierwszego renderowania. Możemy tutaj zaktualizować stan.')

  },

  getInitialState: function () { // poczatkowy stan komponentu
    return {
      counter: 0
    };
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentDidMount() {
    console.log('After Mounting') //wywoływana po metodzie render. Na przykład może być konieczne wprowadzenie zmian w naszym obecnym stanie w zależności od tego jak wyświetlane są elementy.')
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceivePropse works')
  }, //wywoływana, gdy komponent otrzyma nowe właściwości, które są przekazywane jako argument tej metody i dzięki temu możemy je porównać z wcześniejszymi i wykonać odpowiednie akcje. Na przykład mamy Form Component i Person Component. Form Component ma <input />, które pozwala użytkownikowi zmienić nazwę. Input jest powiązany ze zdarzeniem onChange i ustawia stan w formularzu. Wartość stanu jest następnie przekazywana do Person Component jako prop.')

  //componentWillReceiveProps(nextProps) {
  //  if (this.state.counter !== nextProps.counter) {
  //    console.log("componentWillReceiveProps works") //wywoływana, gdy komponent otrzyma nowe właściwości, które są przekazywane jako argument tej metody i dzięki temu możemy je porównać z wcześniejszymi i wykonać odpowiednie akcje. Na przykład mamy Form Component i Person Component. Form Component ma <input />, które pozwala użytkownikowi zmienić nazwę. Input jest powiązany ze zdarzeniem onChange i ustawia stan w formularzu. Wartość stanu jest następnie przekazywana do Person Component jako prop.
  //  }
  //},


  //shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.this.state.counter == nextState.counter) {
  //     console.log("shouldComponentUpdate works")
  //  }
  // },
  componentDidUpdate() {
    console.log("componentDidUpdate works")
  },

  componentWillUnmount() {
    console.log("componentWillUnmount works")
  },

  render: function () {
    return React.createElement(
      "div", {},
      React.createElement("button", {
        onClick: this.increment
      }, "+1"),
      React.createElement("button", {
        onClick: this.decrement
      }, "-1"),
      React.createElement("span", {}, "Score : " + this.state.counter)
    );
  },


  // render: function(){
  //  return (
  // <h1>{this.state.counter}</h1>
  //<button onClick={this.increment}>Increment</button>
  //<button onClick={this.decrement}>Decrement</button>
  //      );
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById("app"));