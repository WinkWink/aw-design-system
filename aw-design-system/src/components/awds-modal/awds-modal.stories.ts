import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Modal',
  component: 'awds-modal',
  argTypes: {
    open: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    heading: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    open: false,
    size: 'md',
    heading: 'Modal title',
  },
  render: args => html`
    <awds-button
      variant="primary"
      @click=${() => {
        const modal = document.querySelector('awds-modal');
        modal?.setAttribute('open', '');
      }}
    >
      Open modal
    </awds-button>

    <awds-modal ?open=${args.open} size=${args.size} heading=${args.heading}>
      <p>This is the modal body content.</p>

      <div slot="footer">
        <awds-button variant="secondary">Cancel</awds-button>
        <awds-button variant="primary">Confirm</awds-button>
      </div>
    </awds-modal>
  `,
};
