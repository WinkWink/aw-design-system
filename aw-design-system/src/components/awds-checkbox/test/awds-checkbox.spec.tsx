import { newSpecPage } from '@stencil/core/testing';
import { AwdsCheckbox } from '../awds-checkbox';

describe('awds-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwdsCheckbox],
      html: `<awds-checkbox></awds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <awds-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </awds-checkbox>
    `);
  });
});
