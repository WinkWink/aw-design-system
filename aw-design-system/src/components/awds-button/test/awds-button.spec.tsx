/// <reference types="jest" />
import { newSpecPage } from '@stencil/core/testing';
import { AwdsButton } from '../awds-button';

describe('awds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwdsButton],
      html: `<awds-button></awds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <awds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </awds-button>
    `);
  });
});
