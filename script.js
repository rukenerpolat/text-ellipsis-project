const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', event => {
  output.textContent = getDescription(event.currentTarget.value);
});

function getDescription(text) {
  if (text.length > 150) {
    return text.substring(0, 150) + '...';
  }
  return text;
}
