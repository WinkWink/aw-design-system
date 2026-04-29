import { newSpecPage } from '@stencil/core/testing';
import { AwdsAccordion } from '../awds-accordion';

describe('awds-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwdsAccordion],
      html: `<awds-accordion></awds-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <awds-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </awds-accordion>
    `);
  });
});
