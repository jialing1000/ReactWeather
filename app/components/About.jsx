var React = require('react');

var About = (props) =>{
	return (
		<div>
            <h1 className="text-center">About</h1>
            <p>Welcome to the about page.</p>
			<p>
				Here are some of the ools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Oen Weather Map</a> - I used Open Weather Map to search for weather data by city name.
				</li>
			</ul>
        </div>
	);

};

module.exports = About;
