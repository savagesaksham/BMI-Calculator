function calculateBMI() {
  const gender = document.getElementById('gender').value;
  const age = parseFloat(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // converting height to meters

  if (age && weight && height) {
    const bmi = weight / (height * height);
    const bmiResult = document.getElementById('result');
    
    let bmiCategory = '';
    if (gender === 'male') {
      bmiCategory = getBMICategoryForMen(bmi);
    } else {
      bmiCategory = getBMICategoryForWomen(bmi);
    }

    const emojis = ["🥦", "🏋️‍♂️", "🍔", "🍟", "🥗", "🥦", "🍎", "🥑"]; // Emojis for fun
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    let message = '';
    switch (bmiCategory) {
      case 'underweight':
        message = `Oops! Looks like you're underweight ${randomEmoji}. You might need some extra fuel ⛽.`;
        break;
      case 'normal':
        message = `Great job! You have a normal weight ${randomEmoji}. Keep up the good work! 🌟`;
        break;
      case 'overweight':
        message = `Whoops! You're overweight ${randomEmoji}. Time for a health kick! 🥗`;
        break;
      case 'obese':
        message = `Uh-oh! You're in the obese category ${randomEmoji}. Time for a lifestyle change! 🚴‍♀️`;
        break;
      default:
        message = `Oops! Something went wrong. Please try again!`;
        break;
    }

    const bmiMessage = `<strong>${message}</strong>`;
    bmiResult.innerHTML = bmiMessage;
  } else {
    alert('Please enter valid values for Age, Weight, and Height.');
  }
}

function getBMICategoryForMen(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'normal';
  } else if (bmi >= 25 && bmi < 30) {
    return 'overweight';
  } else {
    return 'obese';
  }
}

function getBMICategoryForWomen(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi < 24) {
    return 'normal';
  } else if (bmi >= 24 && bmi < 29) {
    return 'overweight';
  } else {
    return 'obese';
  }
}

function convertToCM() {
  const feet = parseFloat(document.getElementById('feet').value);
  const inches = parseFloat(document.getElementById('inches').value);
  
  if (!isNaN(feet) && !isNaN(inches)) {
    const heightInCM = (feet * 30.48) + (inches * 2.54); // 1 foot = 30.48 cm, 1 inch = 2.54 cm
    const convertedHeight = document.getElementById('convertedHeight');
    convertedHeight.textContent = `Height in cm: ${heightInCM.toFixed(2)} cm`;
    document.getElementById('height').value = heightInCM.toFixed(2); // Update height input value
  } else {
    alert('Please enter valid values for feet and inches.');
  }
}
