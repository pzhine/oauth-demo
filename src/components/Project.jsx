import React from 'react';
import fetch from 'isomorphic-fetch';

const Project = React.createClass({
  componentWillMount() {
    const url = 'https://raw.githubusercontent.com/pzhine/oauth-demo/master/upnext.json';
    const options = {
      mode: 'no-cors'
    };
    fetch(url, options).then((data) => {
      return data.blob();
    }).then((data) => {
      console.log(data);
    });

  },
  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
});

export default Project;