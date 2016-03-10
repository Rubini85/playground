// helpers
function toReact(contact) {
    return React.createElement('li', {},
        React.createElement('h2', {}, contact.name),
        React.createElement('a', {href: 'mailto: ' + contact.email}, contact.email)
    );
}

// main container
var container = document.getElementById('react-app');

// data model
var contacts = [
    {id: 1, name: 'Alessio Rapini', email: '_@rub.me'},
    {id: 2, name: 'Emanuele Palazzetti', email: '_@palazzem.me'},
    {id: 3, name: 'Federico Frenguelli', email: '_@frenguelli.me'}
]

var contactList = contacts.map(toReact);

var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Contacts'),
        React.createElement('ul', {}, contactList)
    );

ReactDOM.render(rootElement, container);