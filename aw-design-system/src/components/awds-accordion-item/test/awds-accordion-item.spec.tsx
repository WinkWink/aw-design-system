import { newSpecPage } from '@stencil/core/testing';
import { AwdsAccordionItem } from '../awds-accordion-item';

describe('awds-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwdsAccordionItem],
      html: `<awds-accordion-item></awds-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <awds-accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </awds-accordion-item>
    `);
  });
});
