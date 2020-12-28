import { graphql, useStaticQuery, Link } from "gatsby";
import React, { Component, useState } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="bg-lightBlue-600 hover:bg-lightBlue-700 shadow-lg rounded-full px-6 py-3 text-bold uppercase cursor-pointer"></button>
      </div>
    );
  }
}
