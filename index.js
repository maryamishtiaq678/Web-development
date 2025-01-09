function calculateBMI() {
    // Get the values of weight and height
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Validate input values
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid numbers for weight and height.";
        return;
    }

                // Calculate BMI
                const bmi = weight / (height * height);

                // Determine BMI category
                let bmiCategory = "";
                if (bmi < 18.5) {
                    bmiCategory = "Underweight";
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    bmiCategory = "Normal weight";
                } else if (bmi >= 25 && bmi < 29.9) {
                    bmiCategory = "Overweight";
                } else {
                    bmiCategory = "Obese";
                }
    
                // Display the result
                document.getElementById("result").innerHTML = 'Your BMI is: <strong>${bmi.toFixed(2)}</strong><br>Category: <strong>${bmiCategory}</strong>';
            }