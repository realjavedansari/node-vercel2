const form = document.getElementById('addition-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const num1 = parseFloat(form.num1.value);
  const num2 = parseFloat(form.num2.value);

  const response = await fetch('/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ num1, num2 }),
  });

  const { result } = await response.json();
  resultElement.textContent = `Result: ${result}`;
});
