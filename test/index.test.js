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
  document.body.innerHTML = `
    <div id="box"></div>
    <div id="remove-me"></div>

    <form id="user-form">
      <input type="text" />
    </form>

    <div id="dynamic-content"></div>
    <div id="error-message" class="hidden"></div>
  `;
});

test('addElementToDOM adds content to the correct element', () => {
  addElementToDOM('box', 'Hello');

  const element = document.getElementById('box');
  expect(element.innerHTML).toBe('Hello');
});
    
test('removeElementFromDOM removes an element', () => {
  removeElementFromDOM('remove-me');

  const element = document.getElementById('remove-me');
  expect(element).toBeNull();
});

test('simulateClick updates the DOM with content', () => {
  simulateClick('box', 'Clicked!');

  const element = document.getElementById('box');
  expect(element.innerHTML).toBe('Clicked!');
});

test('handleFormSubmit updates DOM with input value', () => {
  const input = document.querySelector('input');
  input.value = 'Ashli';

  handleFormSubmit('user-form', 'dynamic-content');

  const result = document.getElementById('dynamic-content');
  expect(result.innerHTML).toBe('Ashli');
});

test('handleFormSubmit shows error when input is empty', () => {
  const input = document.querySelector('input');
  input.value = '';

  handleFormSubmit('user-form', 'dynamic-content');

  const error = document.getElementById('error-message');

  expect(error.textContent).toBe('Input cannot be empty');
  expect(error.classList.contains('hidden')).toBe(false);
});