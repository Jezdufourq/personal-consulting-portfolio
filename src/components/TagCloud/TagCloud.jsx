import React, { Component } from "react";
import "./tagcloud.css";
const tagcloud = require("TagCloud");

export default class TagCloud extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // TODO: Need to update the options for the text cloud
  }

  componentDidMount() {
    const container = ".content";
    const options = {
      containerClass: "content",
      useContainerInlineStyles: false,
    };
    var tagCloud = tagcloud(container, this.props.text, options);
  }
  render() {
    return <div className="content" ref="textCloud" />;
  }
}
