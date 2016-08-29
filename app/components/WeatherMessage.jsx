var React = require('react');

var WeatherMessage=({temp, location}) => {
    return (
        <div>
            <h1>{location + ' ' + temp}</h1>
        </div>
    );
}

module.exports = WeatherMessage;
