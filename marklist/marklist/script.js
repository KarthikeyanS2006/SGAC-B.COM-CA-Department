// script.js
document.getElementById('markForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const marks = [
        parseInt(document.getElementById('subject1').value),
        parseInt(document.getElementById('subject2').value),
        parseInt(document.getElementById('subject3').value),
        parseInt(document.getElementById('subject4').value),
        parseInt(document.getElementById('subject5').value)
    ];

    const totalMarks = marks.reduce((a, b) => a + b, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    document.getElementById('studentInfo').textContent = `Student Name: ${studentName}`;
    
    const marksTable = document.getElementById('marksTable');
    marksTable.innerHTML = '';  // Clear previous entries

    marks.forEach((mark, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Subject ${index + 1}</td><td>${mark}</td>`;
        marksTable.appendChild(row);
    });

    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('resultContainer').style.display = 'block';
});