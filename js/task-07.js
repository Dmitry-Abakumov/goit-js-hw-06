const inputRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  spanTextRef.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
});
