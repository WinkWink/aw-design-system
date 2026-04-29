/// <reference types="jest" />
import { newE2EPage } from '@stencil/core/testing';

describe('awds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awds-button></awds-button>');

    const element = await page.find('awds-button');
    expect(element).toHaveClass('hydrated');
  });
});
