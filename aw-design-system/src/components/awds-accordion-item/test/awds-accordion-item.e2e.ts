import { newE2EPage } from '@stencil/core/testing';

describe('awds-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awds-accordion-item></awds-accordion-item>');

    const element = await page.find('awds-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
