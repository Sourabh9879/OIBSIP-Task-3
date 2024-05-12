function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelector = document.getElementById('unitSelector');
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    
    let convertedTemperature;
    
    if (selectedUnit === 'celsius') {
      convertedTemperature = (temperatureInput - 32) * (5/9);
      document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2) + ' °C';
    } else if (selectedUnit === 'fahrenheit') {
      convertedTemperature = (temperatureInput * (9/5)) + 32;
      document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2) + ' °F';
    } else if (selectedUnit === 'kelvin') {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2) + ' K';
    }
  }
  