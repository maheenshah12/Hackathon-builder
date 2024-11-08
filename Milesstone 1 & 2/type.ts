const toggleBut = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleBut .addEventListener( 'click', () => {
    if(skills.style.display === 'none'){
          skills.style.display = 'block'
    }else {
        skills.style.display = 'none'
    }
});

// 
