var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>Get Weather</IndexLink> |
            <Link to="/about" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>About</Link> |
            <Link to="/examples" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;
