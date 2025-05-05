// Track toggle state
let textToggled = false;
let styleToggled = false;

// Change/restore the paragraph text
document.getElementById('change-text').addEventListener('click', () => {
  const p = document.getElementById('demo-text');
  p.textContent = textToggled
    ? 'This is the Home section. Try the buttons below:'
    : 'Home section changed! Click again to restore.';      
  textToggled = !textToggled;
});

// Toggle heading style on/off
document.getElementById('change-style').addEventListener('click', () => {
  const h = document.getElementById('demo-heading');
  if (!styleToggled) {
    h.style.color = '#ee9b00';
    h.style.fontSize = '2.4rem';
    h.style.fontStyle = 'italic';
  } else {
    h.style.color = '';
    h.style.fontSize = '';
    h.style.fontStyle = '';
  }
  styleToggled = !styleToggled;
});

// Add a new list item
document.getElementById('add-item').addEventListener('click', () => {
  const list = document.getElementById('demo-list');
  const newLi = document.createElement('li');
  newLi.textContent = `New Item ${list.children.length + 1}`;
  list.appendChild(newLi);
});

// Remove the last list item
document.getElementById('remove-item').addEventListener('click', () => {
  const list = document.getElementById('demo-list');
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});
