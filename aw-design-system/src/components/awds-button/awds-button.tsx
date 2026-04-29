import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'awds-button',
  styleUrl: 'awds-button.css',
  shadow: true,
})
export class AwdsButton {
  /** Visual style */
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  /** Button type */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <Host variant={this.variant} size={this.size} disabled={this.disabled ? true : null}>
        <button class="awds-button" type={this.type} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}
