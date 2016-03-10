var container = document.getElementById('react-app');

var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Contacts'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Alessio Rapini'),
                React.createElement('a', {href: 'mailto:_@rub.me'}, '_@rub.me')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Emanuele Palazzetti'),
                React.createElement('a', {href: 'mailto:_@palazzem.me'}, '_@palazzem.me')
            )
        )
    );

ReactDOM.render(rootElement, container);