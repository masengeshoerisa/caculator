function generateSingleTable() {
    const number = parseInt(document.getElementById('singleNumber').value);
    const output = document.getElementById('output');
    output.innerHTML = '';
    if (isNaN(number)) {
      output.innerHTML = '<p>Please enter a valid number.</p>';
      return;
    }

    output.innerHTML += `<h3>Table of ${number}</h3>`;
    for (let i = 1; i <= 13; i++) {
      output.innerHTML += `<p>${number} × ${i} = ${number * i}</p>`;
    }
  }

  function generateRangeTables() {
    const start = parseInt(document.getElementById('startNumber').value);
    const end = parseInt(document.getElementById('endNumber').value);
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (isNaN(start) || isNaN(end) || start > end) {
      output.innerHTML = '<p>Please enter a valid range.</p>';
      return;
    }

    for (let num = start; num <= end; num++) {
      output.innerHTML += `<h3>Table of ${num}</h3>`;
      for (let i = 1; i <= 10; i++) {
        output.innerHTML += `<p>${num} × ${i} = ${num * i}</p>`;
      }
      output.innerHTML += '<hr>';
    }
  }