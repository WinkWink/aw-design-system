import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Accordion Item',
  component: 'awds-accordion-item',
  argTypes: {
    heading: {
      control: 'text',
    },
    open: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    heading: 'Accordion item',
    open: false,
    disabled: false,
  },
  render: args => html` <awds-accordion-item heading=${args.heading} ?open=${args.open} ?disabled=${args.disabled}> Accordion item content. </awds-accordion-item> `,
};

export const Open: Story = {
  render: () => html` <awds-accordion-item heading="Open accordion item" open> This accordion item is open by default. </awds-accordion-item> `,
};

export const Disabled: Story = {
  render: () => html` <awds-accordion-item heading="Disabled accordion item" disabled> This content is not accessible while the item is disabled. </awds-accordion-item> `,
};

export const WithRichContent: Story = {
  render: () => html`
    <awds-accordion-item heading="Rich content example" open>
      <p>This accordion item includes paragraph content.</p>
      <ul>
        <li>Supporting detail one</li>
        <li>Supporting detail two</li>
        <li>Supporting detail three</li>
      </ul>
    </awds-accordion-item>
  `,
};
