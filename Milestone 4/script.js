var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n     <h2><b>Editable Resume</b></h2>\n   <h3>PERSONAL INFORMATION</h3>\n    <p><b>NAME:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>EMAIL:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n     <p><b>PHONE:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n     <h3>EDUCATION</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3>EXPERIENCE</h3>\n     <p contenteditable=\"true\">").concat(experience, "</p>\n\n      <h3>SKILLS</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something is missing in resume');
    }
});
// <h2><b>Resume</b></h2>
//    <h3>PERSONAL INFORMATION</h3>
//    <p><b>Name:</b> ${name}</p>
//     <p><b>Email:</b> ${email}</p>
//     <p><b>Phone Number:</b> ${phone}</p>
//     <h3>EDUCATION</h3>
//     <p>${education}</p>
//      <h3>EXPERIENCE</h3>
//     <p>${experience}</p>
//      <h3>SKILLS</h3>
//     <p>${skills}</p>
//   `;
