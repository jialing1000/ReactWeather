var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        console.log('not yet wired up!');
    },
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="acitve" activeStyle={{fontWegith:'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather" />
                            </li>
                            <li>
                                <input type="button" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Nav;
