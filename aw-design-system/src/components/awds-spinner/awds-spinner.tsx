import { Component, h } from '@stencil/core';

@Component({
  tag: 'awds-spinner',
  styleUrl: 'awds-spinner.css',
  shadow: true,
})
export class Spinner {
  render() {
    return (
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
