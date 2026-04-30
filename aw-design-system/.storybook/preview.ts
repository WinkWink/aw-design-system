import '../src/styles/tokens.css';

import '../dist/components/awds-button.js';
import '../dist/components/awds-checkbox.js';
import '../dist/components/awds-accordion.js';
import '../dist/components/awds-accordion-item.js';
import '../dist/components/awds-modal.js';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  :root {
    font-family: var(--font-family-base);
  }
`;
document.head.appendChild(globalStyles);
