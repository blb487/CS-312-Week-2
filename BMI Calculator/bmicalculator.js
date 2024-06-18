function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = (weight / (height * height)) * 703;
        bmi = bmi.toFixed(2);
        document.getElementById("result").innerHTML = "Your BMI is " + bmi;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
    }
}
