import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Button',
  component: 'awds-button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: args => html` <awds-button variant=${args.variant} size=${args.size} ?disabled=${args.disabled}> Button </awds-button> `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button variant="primary">Primary</awds-button>
      <awds-button variant="secondary">Secondary</awds-button>
      <awds-button variant="tertiary">Tertiary</awds-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button size="sm">Small</awds-button>
      <awds-button size="md">Medium</awds-button>
      <awds-button size="lg">Large</awds-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html` <awds-button disabled>Disabled</awds-button> `,
};
