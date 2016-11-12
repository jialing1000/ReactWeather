var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component is here...</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;
