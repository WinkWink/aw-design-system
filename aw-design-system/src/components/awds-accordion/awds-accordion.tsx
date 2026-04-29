import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'awds-accordion',
  shadow: true,
})
export class AwdsAccordion {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
