import React from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import base64 from 'base-64';

const Project = React.createClass({
  getInitialState() {
    return {
      projectJson: null
    }
  },
  componentWillMount() {
    const url = 'https://api.github.com/repos/pzhine/oauth-demo/contents/upnext.json';
    fetch(url)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((json) => {
      const projectJson = JSON.parse(base64.decode(json.content));
        console.log(projectJson);
      this.setState({
        projectJson: projectJson
      });
    })
    .catch((err) => {
      console.log(err);
    });

  },
  render() {
    return (
      <div>
        Hi
        <div>
          {this.state.projectJson 
            ? this.state.projectJson.project.name 
            : 'loading...'
          }
        </div>
      </div>
    );
  }
});

export default Project;