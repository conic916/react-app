'use strict'
//pojedynczy element kontaktowy :
var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {
                    className: 'contactItem'
                },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://www.pulpiciak.pl/zmiana.php?adres=123030,twarze-avatar&rozdzielczosc=100x100'
                }),
                React.createElement('p', {
                    className: 'contactLabel'
                }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {
                    className: 'contactLabel'
                }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {
                        className: 'contactEmail',
                        href: 'mailto:' + this.props.item.email
                    },
                    this.props.item.email
                )
            )
        )
    },
})