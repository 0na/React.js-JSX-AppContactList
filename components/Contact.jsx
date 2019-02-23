var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  }, //walidacja właściwości do której
  //możemy później odwołać się, dzięki this.props.item

  render: function() {
    return (
      <div className={"contactItem"}>
        <img
          className="contactImage"
          src={"http://icons.veryicon.com/png/System/Once%20Again/Contact.png"}
        />
        <p className={"contactLabel"}>Imię: {this.props.item.firstName}</p>
        <p className={"contactLabel"}>Nazwisko: {this.props.item.LastName}</p>
        <a href={"mailto:" + this.props.item.email}> {this.props.item.email}</a>
      </div>
    );
  }
});
