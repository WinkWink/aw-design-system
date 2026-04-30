import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'AWDS/Accordion',
  component: 'awds-accordion',
  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    multiple: false,
  },
  render: args => html`
    <awds-accordion ?multiple=${args.multiple}>
      <awds-accordion-item heading="Accordion item one"> Content for accordion item one. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item two"> Content for accordion item two. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item three"> Content for accordion item three. </awds-accordion-item>
    </awds-accordion>
  `,
};

export const MultipleOpen: Story = {
  render: () => html`
    <awds-accordion multiple>
      <awds-accordion-item heading="First item"> Multiple mode allows more than one item to be open. </awds-accordion-item>

      <awds-accordion-item heading="Second item"> This item can stay open at the same time as another item. </awds-accordion-item>
    </awds-accordion>
  `,
};

export const WithLongContent: Story = {
  render: () => html`
    <awds-accordion>
      <awds-accordion-item heading="Long content example">
        <p>
          Accordion content can include longer text, supporting content, and nested markup. This pattern is useful when users need to scan a list of sections and expand only the
          content they need.
        </p>
      </awds-accordion-item>
    </awds-accordion>
  `,
};
