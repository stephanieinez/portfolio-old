import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleMouseEnter = event => {
    this.setState({ show: true });
  };
  handleMouseLeave = event => {
    this.setState({ show: false });
  };
  render() {
    return (
      <a href={this.props.link}>
        <div
          className={this.props.className}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.state.show ? (
            <div className="overlay">
              <p>{this.props.contentTitle}</p>
              <p className="overlay-subtext">{this.props.contentSubtitle}</p>
              <p className="overlay-content">{this.props.contentText}</p>
              <div>{this.props.additional}</div>
            </div>
          ) : null}
        </div>
      </a>
    );
  }
}

export default Project;
