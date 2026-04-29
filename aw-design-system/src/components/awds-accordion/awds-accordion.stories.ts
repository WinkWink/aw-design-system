import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Accordion',
  component: 'awds-accordion',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <awds-accordion>
      <awds-accordion-item heading="What is AWDS?"> AWDS is a token-driven web component design system. </awds-accordion-item>

      <awds-accordion-item heading="Why use it?"> It connects Figma tokens to real code. </awds-accordion-item>

      <awds-accordion-item heading="Is it accessible?"> Yes, built with semantic HTML and ARIA attributes. </awds-accordion-item>
    </awds-accordion>
  `,
};
