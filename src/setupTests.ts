// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { setDefaultOptions } from 'jsdom-screenshot';
expect.extend({ toMatchImageSnapshot });
jest.setTimeout(10000);
setDefaultOptions({
    launch: { args: ['--no-sandbox'] }
});