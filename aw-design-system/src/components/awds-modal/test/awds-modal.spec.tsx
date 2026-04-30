import { newSpecPage } from '@stencil/core/testing';
import { AwdsModal } from '../awds-modal';

describe('awds-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwdsModal],
      html: `<awds-modal></awds-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <awds-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </awds-modal>
    `);
  });
});
