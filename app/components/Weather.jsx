var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
    getInitialState: function() {
        return {isloading: false}
    },
    handleSearch: function(location) {
        var that = this;

debugger;
        this.setState({isloading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({location: location, temp: temp, isloading: false});
        }, function(errorMessage) {
            alert(errorMessage);
        });
    },

    render: function() {
        var {isloading, temp, location} = this.state;

        function renderMessage() {
            if (isloading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
