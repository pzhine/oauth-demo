import React from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import base64 from 'base-64';

const Project = React.createClass({
  getInitialState() {
    return {
      projectJson: null,
      projectImages: []
    }
  },
  getProject(githubUser, githubRepo) {
    const url = 'https://api.github.com/repos/'
      + githubUser + '/' + githubRepo + '/contents/upnext.json';
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
  getImages(githubUser, githubRepo) {
    const url = 'https://api.github.com/repos/'
      + githubUser + '/' + githubRepo + '/contents/upnext';
    fetch(url)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((json) => {
      this.setState({
        projectImages: json.map(file => file.download_url)
      });
    })
    .catch((err) => {
      console.log(err);
    }); 
  },
  componentWillMount() {
    const githubUser = 'pzhine';
    const githubRepo = 'oauth-demo';
    this.getProject(githubUser, githubRepo);
    this.getImages(githubUser, githubRepo);
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
        <ul>
          {this.state.projectImages.map((url, idx) => (
            <li key={idx}><img width="100" src={url} /></li>
          ))}
        </ul>
      </div>
    );
  }
});

export default Project;