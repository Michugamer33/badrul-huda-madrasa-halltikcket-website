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

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById('hallTicket');
    html2canvas(element).then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4'); // Use A4 size in millimeters
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297); // 210x297 mm for A4 size
        pdf.save('hall-ticket.pdf');
    });
}