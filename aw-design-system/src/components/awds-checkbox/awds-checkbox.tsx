import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'awds-checkbox',
  styleUrl: 'awds-checkbox.css',
  shadow: true,
})
export class AwdsCheckbox {
  /** Checkbox name for forms */
  @Prop() name?: string;

  /** Checkbox value */
  @Prop() value = 'on';

  /** Visible label */
  @Prop() label?: string;

  /** Checked state */
  @Prop({ reflect: true, mutable: true }) checked = false;

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
  };

  render() {
    return (
      <Host>
        <label class="checkbox">
          <input class="checkbox__input" type="checkbox" name={this.name} value={this.value} checked={this.checked} disabled={this.disabled} onChange={this.handleChange} />

          <span class="checkbox__control" aria-hidden="true">
            <svg class="checkbox__icon" viewBox="0 0 16 16">
              <path d="M6.4 11.2 3.2 8l1.1-1.1 2.1 2.1 5.3-5.3L12.8 4.8z" />
            </svg>
          </span>

          <span class="checkbox__label">
            <slot>{this.label}</slot>
          </span>
        </label>
      </Host>
    );
  }
}
