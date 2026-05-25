document.getElementById('testBtn').addEventListener('click', async () => {
  const resultDiv = document.getElementById('result');
  
  try {
    const response = await fetch('/api/hello');
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
    resultDiv.style.display = 'block';
  } catch (error) {
    resultDiv.textContent = 'Error: ' + error.message;
    resultDiv.style.display = 'block';
  }
});
