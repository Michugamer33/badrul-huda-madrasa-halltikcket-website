function displayImage(event) {
    const file = event.target.files[0];
    const profileImage = document.getElementById('profileImage');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
            profileImage.style.display = 'block'; // Show the image
        };
        reader.readAsDataURL(file);
    }
}

function updateTableContent() {
    const tableBody = document.getElementById('tableBody');
    const selectedClass = document.getElementById('classSelect').value;
    let tableContent = '';

    if (selectedClass === 'class1') {
        tableContent = `
        <tr><td>1</td><td>09.11.24</td><td>തഫ്ഹീം, ദുറൂസ് വായന, എഴുത്ത്</td><td></td></tr>
        <tr><td>2</td><td>10.11.24</td><td>ദീനിയ്യാത്ത്, അഖ്ലാഖ് "കേട്ടെഴുത്ത്</td><td></td></tr>`;
    }
    else if (selectedClass === 'class2') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>04.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>3</td><td>05.11.24</td><td>അഖ്ലാഖ്</td><td></td></tr>
        <tr><td>4</td><td>06.11.24</td><td>അഖിദ</td><td></td></tr>
        <tr><td>5</td><td>07.11.24</td><td>ലിസാൻ</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class3') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>04.11.24</td><td>തജ്വീദ്</td><td></td></tr>
        <tr><td>3</td><td>05.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>4</td><td>06.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>5</td><td>07.11.24</td><td>അഖ്ലാഖ്</td><td></td></tr>
        <tr><td>6</td><td>09.11.24</td><td>താരിഖ്</td><td></td></tr>
        <tr><td>7</td><td>10.11.24</td><td>അഖീദ</td><td></td></tr>
        <tr><td>8</td><td>11.11.24</td><td>പ്രാക്ടിക്കൽ</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class4') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ,ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>04.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>3</td><td>05.11.24</td><td>അഖ്ലാഖ്</td><td></td></tr>
        <tr><td>4</td><td>06.11.24</td><td>അഖിദ</td><td></td></tr>
        <tr><td>5</td><td>07.11.24</td><td>തജ്‌വീദ്</td><td></td></tr>
        <tr><td>6</td><td>09.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>7</td><td>10.11.24</td><td>താരിഖ്</td><td></td></tr>
        <tr><td>8</td><td>11.11.24</td><td>പ്രാക്ടിക്കൽ</td><td></td></tr>`;
    }
    else if (selectedClass === 'class5') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ,ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>04.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>3</td><td>05.11.24</td><td>തജ്‌വീദ്</td><td></td></tr>
        <tr><td>4</td><td>06.11.24</td><td>താരിഖ്</td><td></td></tr>
        <tr><td>5</td><td>07.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>6</td><td>09.11.24</td><td>അഖിദ</td><td></td></tr>
        <tr><td>7</td><td>10.11.24</td><td>അഖ്ലാഖ്</td><td></td></tr>`;
    }
    else if (selectedClass === 'class6') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ,ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>05.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>3</td><td>06.11.24</td><td>ദുറൂസ്</td><td></td></tr>
        <tr><td>4</td><td>09.11.24</td><td>താരീഖ്</td><td></td></tr>
        <tr><td>5</td><td>10.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class7') {
        tableContent = `
        <tr><td>1</td><td>03.11.24</td><td>ഖുർആൻ,ഹിഫ്ള്</td><td></td></tr>
        <tr><td>2</td><td>04.11.24</td><td>ദുറൂസ്</td><td></td></tr>
        <tr><td>3</td><td>05.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>4</td><td>07.11.24</td><td>താരിഖ്</td><td></td></tr>
        <tr><td>5</td><td>09.11.24</td><td>ലിസാൻ</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class8') {
        tableContent = `
        <tr><td>1</td><td>04.11.24</td><td>താരിഖ്</td><td></td></tr>
        <tr><td>2</td><td>06.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>3</td><td>07.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>4</td><td>10.11.24</td><td>ദുറൂസ്</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class9') {
        tableContent = `
        <tr><td>1</td><td>04.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>2</td><td>05.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>3</td><td>06.11.24</td><td>ദുറൂസ്</td><td></td></tr>
        <tr><td>4</td><td>09.11.24</td><td>താരീഖ്</td><td></td></tr>`;
    }
    else if (selectedClass === 'class10') {
        tableContent = `
        <tr><td>1</td><td>04.11.24</td><td>തഫ്സീർ</td><td></td></tr>
        <tr><td>2</td><td>06.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>3</td><td>07.11.24</td><td>ദുറൂസ്</td><td></td></tr>
        <tr><td>4</td><td>10.11.24</td><td>ലിസാൻ</td><td></td></tr>
        `;
    }
    else if (selectedClass === 'class+1') {
        tableContent = `
        <tr><td>1</td><td>04.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>2</td><td>05.11.24</td><td>തഫ്സീർ</td><td></td></tr>
        <tr><td>3</td><td>07.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>4</td><td>09.11.24</td><td>ദുറൂസ്</td><td></td></tr>`;
    }
    else if (selectedClass === 'class+2') {
        tableContent = `
        <tr><td>1</td><td>05.11.24</td><td>ഫിഖ്ഹ്</td><td></td></tr>
        <tr><td>2</td><td>06.11.24</td><td>തഫ്സീർ</td><td></td></tr>
        <tr><td>3</td><td>09.11.24</td><td>ലിസാൻ</td><td></td></tr>
        <tr><td>4</td><td>10.11.24</td><td>ദുറൂസ്</td><td></td></tr>`;
    }
    else {
        tableContent = '<tr><td colspan="4">Select a class to view exam schedule</td></tr>';
    }

    tableBody.innerHTML = tableContent;
}

async function downloadPDFWithPdfLib() {
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 size in points (8.27 x 11.69 inches)

    const { width, height } = page.getSize();
    const fontSize = 12;
    const textX = 50; // Starting X position for text

    // Add Title
    page.drawText('Hall Ticket', {
        x: width / 2 - 50,
        y: height - 50,
        size: 24,
        color: PDFLib.rgb(0, 0, 0),
    });

    // Retrieve values from inputs with checks
    const studentName = document.getElementById('studentName')?.value || 'N/A';
    const admissionNumber = document.getElementById('admissionNumber')?.value || 'N/A';
    const classSelected = document.getElementById('classSelect')?.value || 'N/A';
    const address = document.getElementById('studentAddress')?.value || 'N/A';
    const dob = document.getElementById('studentDOB')?.value || 'N/A';

    // Add details to the PDF
    page.drawText(`Name of Student: ${studentName}`, { x: textX, y: height - 100, size: fontSize });
    page.drawText(`Admission Number: ${admissionNumber}`, { x: textX, y: height - 120, size: fontSize });
    page.drawText(`Class: ${classSelected}`, { x: textX, y: height - 140, size: fontSize });
    page.drawText(`Address: ${address}`, { x: textX, y: height - 160, size: fontSize });
    page.drawText(`Date of Birth: ${dob}`, { x: textX, y: height - 180, size: fontSize });

    // Serialize the PDF to bytes and initiate download
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'hall-ticket.pdf';
    link.click();
}
