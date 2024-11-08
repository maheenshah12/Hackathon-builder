// Accessing elements with correct type assertions
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Retrieve input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save the data in localStorage
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume HTML content
    var resumeHTML = "\n     <h2><b>EDITABLE RESUME BUILDER</b></h2>\n     <h3>PERSONAL INFORMATION</h3>\n     <p><b>NAME:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>EMAIL:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n     <p><b>PHONE:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n     <h3>EDUCATION</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n     <h3>EXPERIENCE</h3>\n     <p contenteditable=\"true\">").concat(experience, "</p>\n     <h3>SKILLS</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>\n  ");
    // Update the resume display element with generated HTML
    resumeDisplayElement.innerHTML = resumeHTML;
    // Show the shareable link
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Add download functionality to PDF button
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Load resume data from localStorage if a username is in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            // Populate resume display area with saved data
            // const resumeHTML = `
            //   <h2><b>EDITABLE RESUME BUILDER</b></h2>
            //   <h3>PERSONAL INFORMATION</h3>
            //   <p><b>NAME:</b> <span contenteditable="true">${resumeData.name}</span></p>
            //   <p><b>EMAIL:</b><span contenteditable="true"> ${resumeData.email}</span></p>
            //   <p><b>PHONE:</b><span contenteditable="true"> ${resumeData.phone}</span></p>
            //   <h3>EDUCATION</h3>
            //   <p contenteditable="true">${resumeData.education}</p>
            //   <h3>EXPERIENCE</h3>
            //   <p contenteditable="true">${resumeData.experience}</p>
            //   <h3>SKILLS</h3>
            //   <p contenteditable="true">${resumeData.skills}</p>
            // `;
            // resumeDisplayElement.innerHTML = resumeHTML;
        }
    }
});
