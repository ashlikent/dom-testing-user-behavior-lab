/**
 * @jest-environment jsdom
 */

const {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
} = require('../index');

beforeEach(() => {
  document.body.innerHTML = `<div id="box"></div>`;
});

test('addElementToDOM adds content to the correct element', () => {
  addElementToDOM('box', 'Hello');

  const element = document.getElementById('box');
  expect(element.innerHTML).toBe('Hello');
});
    
