import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Checkbox',
  component: 'awds-checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'I agree to the terms',
    checked: false,
    disabled: false,
  },
  render: args => html` <awds-checkbox label=${args.label} ?checked=${args.checked} ?disabled=${args.disabled}></awds-checkbox> `,
};

export const Checked: Story = {
  render: () => html` <awds-checkbox checked label="Checked option"></awds-checkbox> `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display:grid; gap:12px;">
      <awds-checkbox disabled label="Disabled option"></awds-checkbox>
      <awds-checkbox disabled checked label="Disabled checked option"></awds-checkbox>
    </div>
  `,
};

export const WithSlotLabel: Story = {
  render: () => html` <awds-checkbox> Receive product updates </awds-checkbox> `,
};
