import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { generateImage } from 'jsdom-screenshot';

it('has no visual regressions', async () => {
  render(<App />);
  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});