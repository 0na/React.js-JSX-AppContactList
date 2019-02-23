//komponent odpowiedzialny za wyświetlenie całej listy kotaktów

var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired, ////był array ale konsola mówiła że string
    },

    //tu używamy metody map!
    render: function () {
        var contacts = this.props.items.map(function (contact) {
            return React.createElement(Contact, {
                item: contact,
                key: contact.id
            });
        });

        return (
            React.createElement('ul', {
                className: 'contactsList'
            }, contacts)
        );
    }
});