/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';

export default createClass({
  render() {
    return (<div>
      <button>Click Fast</button>
      <p>CPS rate: {1}</p>
    </div>);
  }
});
