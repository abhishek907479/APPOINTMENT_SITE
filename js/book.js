document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const patientName = document.getElementById("patientName").value;
    const symptoms = document.getElementById("symptoms").value;
    const patientPlace = document.getElementById("patientPlace").value;
    const appointmentDate = document.getElementById("appointmentDate").value;

    // Basic validation
    if (!patientName || !symptoms || !patientPlace || !appointmentDate) {
        alert("Please fill in all fields.");
        return;
    }
    const symp=symptoms.split(",");
  let disease=["headache","pale","stomachpain","itching","swelling","rashes"];
  n=symp.length;
  for(i=0;i<n;i++)
  {
    if(i%2==0)
    {
      symp[i]=disease[Math.floor(((Math.random()*6)))];
    }
  }

  let s=symp.toString();
    d=Math.ceil(((Math.random()*30)+1));
    m=Math.ceil(((Math.random()*11)+1));
    y=2024;
    // Set confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = `
        Appointment booked successfully!<br>
        <strong>Name:</strong> ${patientName}<br>
        <strong>Symptoms:</strong> ${s}<br>
        <strong>Place:</strong> ${patientPlace}<br>
        <strong>Date:</strong> ${d}-${m}-${y}
    `;

    // Show modal
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "block";

    // Reset form
    document.getElementById("appointmentForm").reset();
});

// Close modal when the 'x' button is clicked
document.getElementById("closeModal").onclick = function() {
    document.getElementById("confirmationModal").style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const confirmationModal = document.getElementById("confirmationModal");
    if (event.target === confirmationModal) {
        confirmationModal.style.display = "none";
    }
};
