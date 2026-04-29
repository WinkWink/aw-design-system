import { newE2EPage } from '@stencil/core/testing';

describe('awds-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awds-accordion></awds-accordion>');

    const element = await page.find('awds-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
