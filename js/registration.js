function submitForm() {
  // Get the form values
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var systolic = document.getElementById("systolic").value;
  var diastolic = document.getElementById("diastolic").value;
  var normal = document.getElementById("normal").value;
  var cholesterol = document.getElementById("cholesterol").value;
  var glucose = document.getElementById("glucose").value;
  var cardio = document.getElementById("cardio").value;
  var smoke = document.getElementById("smoke").value;
  var alcohol = document.getElementById("alcohol").value;
  var activity = document.getElementById("activity").value;

  //Create an object to store the form values
  var formData = {
    age: age,
    gender: gender,
    weight: weight,
    height: height,
    systolic: systolic,
    diastolic: diastolic,
    normal: normal,
    cholesterol: cholesterol,
    glucose: glucose,
    cardio: cardio,
    smoke: smoke,
    alcohol: alcohol,
    activity: activity
  };

  // Get the existing form data from local storage
  var existingFormData = localStorage.getItem("formData");

  // If there is no existing form data, create an empty array
  if (existingFormData === null) {
    existingFormData = [];
  } else {
    // Parse the existing form data into an array
    existingFormData = JSON.parse(existingFormData);
  }

  // Add the new form data to the existing form data array
  existingFormData.push(formData);

  // Store the updated form data in local storage
  localStorage.setItem("formData", JSON.stringify(existingFormData));

  // Redirect to the results page
  window.location.href = "result.html";
}
