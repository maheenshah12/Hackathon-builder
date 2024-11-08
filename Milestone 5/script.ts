const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('down-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById('username') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Save data in local storage for future retrieval
  const resumeData = { name, email, phone, education, experience, skills };
  localStorage.setItem(username, JSON.stringify(resumeData));

  // Generate the resume HTML
  const resumeHTML = `
     <h2><b>EDITABLE RESUME BUILDER</b></h2>
     <h3>PERSONAL INFORMATION</h3>
     <p><b>NAME:</b> <span contenteditable="true">${name}</span></p>
     <p><b>EMAIL:</b><span contenteditable="true"> ${email}</span></p>
     <p><b>PHONE:</b><span contenteditable="true"> ${phone}</span></p>
     <h3>EDUCATION</h3>
     <p contenteditable="true">${education}</p>
     <h3>EXPERIENCE</h3>
     <p contenteditable="true">${experience}</p>
     <h3>SKILLS</h3>
     <p contenteditable="true">${skills}</p>
  `;
  resumeDisplayElement.innerHTML = resumeHTML;

  // Create the shareable link with HTTPS
  const shareableURL = `${window.location.protocol}//${window.location.hostname}${window.location.pathname}?username=${encodeURIComponent(username)}`;
  
  // Ensure HTTPS is being used
  if (window.location.protocol !== "https:") {
    const newURL = shareableURL.replace("http:", "https:");
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.textContent = newURL;
  } else {
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.textContent = shareableURL;
  }

  // Open link in new tab on click
  shareableLinkElement.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents default anchor behavior
    window.open(shareableURL, '_blank'); // Opens link in new tab
  });
});

// Download button for PDF functionality
downloadPdfButton.addEventListener('click', () => {
  window.print();
});

// Load resume data from URL
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  if (username) {
    const savedResumeData = localStorage.getItem(username);

    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById('username') as HTMLInputElement).value = username;
      (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
      (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
      (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
      (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
      (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
      (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;

      // Populate resume display
      resumeDisplayElement.innerHTML = `
        <h2><b>EDITABLE RESUME BUILDER</b></h2>
        <h3>PERSONAL INFORMATION</h3>
        <p><b>NAME:</b> <span contenteditable="true">${resumeData.name}</span></p>
        <p><b>EMAIL:</b><span contenteditable="true"> ${resumeData.email}</span></p>
        <p><b>PHONE:</b><span contenteditable="true"> ${resumeData.phone}</span></p>
        <h3>EDUCATION</h3>
        <p contenteditable="true">${resumeData.education}</p>
        <h3>EXPERIENCE</h3>
        <p contenteditable="true">${resumeData.experience}</p>
        <h3>SKILLS</h3>
        <p contenteditable="true">${resumeData.skills}</p>
      `;
    }
  }
});
