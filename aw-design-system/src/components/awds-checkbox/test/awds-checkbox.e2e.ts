import { newE2EPage } from '@stencil/core/testing';

describe('awds-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awds-checkbox></awds-checkbox>');

    const element = await page.find('awds-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
