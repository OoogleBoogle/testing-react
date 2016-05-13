import React from 'react';
import ReactDOM from 'react-dom';

var Main = React.createClass({

});

document.addEventListner('DOMContentLoaded', function() {
  ReactDOM.render(<Main />, document.querySelector('.main'));
});
