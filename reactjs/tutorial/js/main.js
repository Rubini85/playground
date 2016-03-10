// main container
var container = document.getElementById('react-app');

// data model
var contacts = [
    {id: 1, name: 'Alessio Rapini', email: '_@rub.me'},
    {id: 2, name: 'Emanuele Palazzetti', email: '_@palazzem.me'},
    {id: 3, name: 'Federico Frenguelli', email: '_@frenguelli.me'}
]

// React classes
var contactItem = React.createClass({
    render: function() {
        React.createElement('li', {},
            React.createElement('h2', {}, this.props.name),
            React.createElement('a', {href: 'mailto: ' + this.props.email}, this.props.email)
        );
    }
})

var contactsList = [];
for (var i = 0; i < contacts.length; i++) {
    var contact = contacts[i];
    contactsList.push(React.createElement(contactItem, {name: contact.name, email: contact.email});
}

var element = React.createElement(ContactItem, {name: 'Alessio', email: 'foo@email.com'});

var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Contacts'),
        React.createElement('ul', {}, element)
    );

ReactDOM.render(rootElement, container);