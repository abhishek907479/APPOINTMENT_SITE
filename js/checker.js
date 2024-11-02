function checkSymptoms() {
    const symptomsInput = document.getElementById('symptoms').value;
    const symptoms = symptomsInput.split(',').map(symptom => symptom.trim());

    // A list of dangerous diseases to randomly select from
    const dangerousDiseases = [
        "Heart Attack",
        "Cancer",

        "Tuberculosis",
        "Heart Attack",
        "Brain Tumor",
        "HIV/AIDS",
        "COVID-19",
        "Diabetes Complications",
        "Sepsis"
    ];

    // Select a dangerous disease (in this example, just choose the first one)
    const selectedDisease = dangerousDiseases[0]; // You can change this to a random selection if desired

    // Always return the selected disease if any symptom is entered
    const results = symptoms.length > 0 ? 
                    `<strong>${selectedDisease}</strong>` : 
                    "Please enter at least one symptom.";

    document.getElementById('results').innerHTML = results;
}
