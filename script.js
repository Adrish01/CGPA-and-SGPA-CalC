function generateSGPAInputs() {
    const numSubjects = document.getElementById('numSubjects').value;
    const sgpaInputsDiv = document.getElementById('sgpaInputs');
    sgpaInputsDiv.innerHTML = '';

    for (let i = 0; i < numSubjects; i++) {
        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.placeholder = `Grade for Subject ${i + 1}`;
        gradeInput.min = 0;
        gradeInput.max = 10;
        gradeInput.className = 'grade-input';
        sgpaInputsDiv.appendChild(gradeInput);

        const creditInput = document.createElement('input');
        creditInput.type = 'number';
        creditInput.placeholder = `Credits for Subject ${i + 1}`;
        creditInput.min = 1;
        creditInput.max = 5;
        creditInput.className = 'credit-input';
        sgpaInputsDiv.appendChild(creditInput);
    }
}

function calculateSGPA() {
    const gradeInputs = document.getElementsByClassName('grade-input');
    const creditInputs = document.getElementsByClassName('credit-input');

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < gradeInputs.length; i++) {
        const grade = parseFloat(gradeInputs[i].value);
        const credits = parseFloat(creditInputs[i].value);
        totalGradePoints += grade * credits;
        totalCredits += credits;
    }

    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('sgpaResult').innerText = `Your SGPA is ${sgpa.toFixed(2)}`;
}

function calculateCGPA() {
    const numSemesters = document.getElementById('numSemesters').value;
    const cgpaInputsDiv = document.getElementById('cgpaInputs');

    cgpaInputsDiv.innerHTML = '';

    let totalSGPA = 0;

    for (let i = 0; i < numSemesters; i++) {
        const sgpaInput = document.createElement('input');
        sgpaInput.type = 'number';
        sgpaInput.placeholder = `SGPA for Semester ${i + 1}`;
        sgpaInput.min = 0;
        sgpaInput.max = 10;
        sgpaInput.className = 'sgpa-input';
        cgpaInputsDiv.appendChild(sgpaInput);
    }

    const sgpaInputs = document.getElementsByClassName('sgpa-input');

    for (let i = 0; i < sgpaInputs.length; i++) {
        const sgpa = parseFloat(sgpaInputs[i].value);
        totalSGPA += sgpa;
    }

    const cgpa = totalSGPA / numSemesters;
    document.getElementById('cgpaResult').innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
}
