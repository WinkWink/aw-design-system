import { newE2EPage } from '@stencil/core/testing';

describe('awds-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awds-modal></awds-modal>');

    const element = await page.find('awds-modal');
    expect(element).toHaveClass('hydrated');
  });
});
