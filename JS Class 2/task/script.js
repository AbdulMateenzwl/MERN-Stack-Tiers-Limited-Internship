function calculateAggregate() {
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var matricMarks = parseFloat(document.getElementById("matricMarks").value);
    var fscMarks = parseFloat(document.getElementById("fscMarks").value);
    var entryTestMarks = parseFloat(document.getElementById("entryTestMarks").value);

    var aggregate = (20 * matricMarks / 1100) + (30 * fscMarks / 1100) + (50 * entryTestMarks / 400)

    if (aggregate > 60) {
        alert("Congratulations! You are eligible for admission.");
    } else {
        alert("Sorry, you are not eligible for admission.");
    }

    // Store student name and aggregate in localStorage
    var student = {
        name: name,
        aggregate: aggregate.toFixed(2)
    };

    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // Redirect to the view page
    window.location.href = 'view.html';
}
