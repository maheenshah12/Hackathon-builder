const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event : Event) => {
  event.preventDefault ();

  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const phone = (document.getElementById('phone') as HTMLInputElement).value
  const education = (document.getElementById('education') as HTMLInputElement).value
  const experience = (document.getElementById('experience') as HTMLInputElement).value
  const skills = (document.getElementById('skills') as HTMLInputElement).value

  const resumeHTML = `
     <h2><b>EDITABLE RESUME BUILDER</b></h2>
   <h3>PERSONAL INFORMATION</h3>
    <p><b>NAME:</b> <span contenteditable="true">${name}</span></p>
     <p><b>EMAIL:</b><span contenteditable="true"> ${email}</span></p>
     <p><b>PHONE:</b><span contenteditable="true"> ${phone }</span></p>

     <h3>EDUCATION</h3>
     <p contenteditable="true">${education}</p>

      <h3>EXPERIENCE</h3>
     <p contenteditable="true">${experience}</p>

      <h3>SKILLS</h3>
   <p contenteditable="true">${skills}</p>
`;
   

  if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
  }else{
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