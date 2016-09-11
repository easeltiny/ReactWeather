var React = require('react');
var {Link}=require('react-router');
var Examples = (props) => {
    return (<div>
        <h1 className="text-centered">Examples</h1>
          <p>here are a few examples to try out:</p>
          <ol>
            <li>
              <Link to='/?location=Leeds'>Leeds,UK</Link>
            </li>
            <li>
              <Link to='/?location=Rio'>Rio, Brazil</Link>
            </li>
          </ol>
      </div>
    )
};

module.exports = Examples;
