function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      const display = document.getElementById('display');
      const result = eval(display.value);
      document.getElementById('copyOutput').value = `${display.value} = ${result}`;
      display.value = result;
    } catch {
      document.getElementById('display').value = 'Error';
      document.getElementById('copyOutput').value = '';
    }
  }
  
  
  function copyCalculation() {
    const copyField = document.getElementById("copyOutput");
    copyField.select();
    copyField.setSelectionRange(0, 99999); // For mobile
    navigator.clipboard.writeText(copyField.value);
  }
  