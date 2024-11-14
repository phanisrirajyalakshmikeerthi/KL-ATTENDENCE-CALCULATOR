// Attendance Calculation Function
function calculateAverage() {
    // Get values from input fields and count the number of filled components
    const lecture = parseFloat(document.getElementById('lecture').value) || 0;
    const tutorial = parseFloat(document.getElementById('tutorial').value) || 0;
    const practical = parseFloat(document.getElementById('practical').value) || 0;
    const skilling = parseFloat(document.getElementById('skilling').value) || 0;

    // Count only the components that have been entered
    let filledComponents = 0;
    if (document.getElementById('lecture').value) filledComponents++;
    if (document.getElementById('tutorial').value) filledComponents++;
    if (document.getElementById('practical').value) filledComponents++;
    if (document.getElementById('skilling').value) filledComponents++;

    // Avoid division by zero in case no components are filled
    if (filledComponents === 0) {
        document.getElementById('result').innerText = "Please enter attendance for at least one component.";
        return;
    }

    // Calculate average attendance
    const average = (lecture + tutorial + practical + skilling) / filledComponents;

    // Display result
    document.getElementById('result').innerText = `Average Attendance: ${average.toFixed(2)}%`;
}

// Disable right-click context menu
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Disable certain keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'c' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 'h')) {
        event.preventDefault();
    }
});
