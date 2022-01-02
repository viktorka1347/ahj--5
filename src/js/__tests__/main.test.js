import main from '../main';

document.body.innerHTML = `
  <main class="main">
    <button class="btn" type="button" data-title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
      Click to toggle popover
    </button>
  </main>
`;
const button = document.querySelector('.btn');

test('should create or delete tooltip', () => {
  main();

  button.click();
  expect(document.body.querySelector('.popover')).toBeTruthy();

  button.click();
  expect(document.body.querySelector('.popover')).toBe(null);
});
