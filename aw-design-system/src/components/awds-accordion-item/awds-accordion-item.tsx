import { Component, h, Host, Prop, State } from '@stencil/core';

let id = 0;

@Component({
  tag: 'awds-accordion-item',
  styleUrl: 'awds-accordion-item.css',
  shadow: true,
})
export class AwdsAccordionItem {
  private contentId = `awds-accordion-content-${++id}`;

  /** Heading text */
  @Prop() heading!: string;

  /** Open state */
  @Prop({ reflect: true, mutable: true }) open = false;

  @State() isOpen = this.open;

  private toggle = () => {
    this.isOpen = !this.isOpen;
    this.open = this.isOpen;
  };

  render() {
    return (
      <Host>
        <button class="header" aria-expanded={this.isOpen ? 'true' : 'false'} aria-controls={this.contentId} onClick={this.toggle}>
          <span>{this.heading}</span>
          <span class="icon">{this.isOpen ? '−' : '+'}</span>
        </button>

        <div id={this.contentId} class="panel" role="region" hidden={!this.isOpen}>
          <slot />
        </div>
      </Host>
    );
  }
}
