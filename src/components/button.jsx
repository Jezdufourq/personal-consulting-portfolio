import { graphql, useStaticQuery, Link } from "gatsby";
import React, { Component, useState } from "react";

export default class button extends Component {
  render() {
    return (
      <div>
        <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Sign up
        </button>
      </div>
    );
  }
}
