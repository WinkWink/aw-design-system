import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'awds-modal',
  styleUrl: 'awds-modal.css',
  shadow: true,
})
export class AwdsModal {
  @Element() el!: HTMLElement;

  private dialog?: HTMLDialogElement;

  /** Modal open state */
  @Prop({ reflect: true, mutable: true }) open = false;

  /** Modal heading */
  @Prop() heading = 'Modal title';

  @Watch('open')
  handleOpenChange(isOpen: boolean) {
    if (!this.dialog) return;

    if (isOpen && !this.dialog.open) {
      this.dialog.showModal();
    }

    if (!isOpen && this.dialog.open) {
      this.dialog.close();
    }
  }

  componentDidLoad() {
    this.handleOpenChange(this.open);
  }

  @Method()
  async show() {
    this.open = true;
  }

  @Method()
  async close() {
    this.open = false;
  }

  private handleCancel = (event: Event) => {
    event.preventDefault();
    this.open = false;
  };

  private handleCloseClick = () => {
    this.open = false;
  };

  private handleDialogClick = (event: MouseEvent) => {
    if (event.target === this.dialog) {
      this.open = false;
    }
  };

  render() {
    return (
      <Host>
        <dialog ref={el => (this.dialog = el)} class="dialog" onCancel={this.handleCancel} onClick={this.handleDialogClick}>
          <header class="header">
            <div class="title-row">
              <h2 class="title">{this.heading}</h2>

              <button class="close" type="button" aria-label="Close modal" onClick={this.handleCloseClick}>
                ×
              </button>
            </div>
          </header>

          <div class="body">
            <slot />
          </div>

          <footer class="footer">
            <slot name="footer" />
          </footer>
        </dialog>
      </Host>
    );
  }
}
