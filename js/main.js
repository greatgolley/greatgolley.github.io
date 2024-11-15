
// get element references
const roleButtons = document.querySelectorAll('.roleButton');
const articleSection = document.getElementById('articleSections');

//func to update articleSection based on selected role




function updateArticle(role){
    //cler the current content of the article section
    articleSection.innerHTML = '';

    if (role == 'web developer') {//web dev section
        articleSection.innerHTML = '<li><h2 class="titleCard">Certifications</h2><div><p>HTML5</p><p>CSS3</p><p>javascript</p></div></li> <li><h2 class="titleCard">Skills</h2><div><p>React</p><p>Vue.js</p><p>Node.js</p></div></li> <li><h2 class="titleCard">Experience Summary</h2><p>5 years of experience in web development, specializiing in building responsive and interactive web applications<p></li><li><h2 class="titleCard">Projects</h2><div><button class="Button"> <h3 class="secTitleCard">Calculator</h3> </a> </button></div></li> ';
        
    }
    else if (role == 'game developer') {//game dev section
        articleSection.innerHTML = '<li><h2 class="titleCard">Languages</h2><div><p>C++</p><p>C#</p><p>Java</p><p>GDscript</p></div></li> <li><h2 class="titleCard">Engines</h2><div><p>Unreal Engine 5</p><p>Unity Game Engine</p><p>Godot Game engine</p></div></li>';
        
    }
    else if (role == '3D designer') {//3D designer section
        articleSection.innerHTML = '<li><h2 class="titleCard">Software Literacy</h2><div><p>Blender</p><p>AutoCAD</p><p>Adobe</p></div></li> <li><h2 class="titleCard">Engines</h2><div><p>Unreal Engine 5</p><p>Unity Game Engine</p><p>Godot Game engine</p></div></li>';
        
    }
}

roleButtons.forEach(button=>{
    button.addEventListener('click',()=> {
        //remove the active clas from all buttons
        roleButtons.forEach(b => b.classList.remove('active'));

        //add the active class to the clicked button
        button.classList.add('active');

        //get the role from the button;s text content
        const role = button.textContent.trim().toLowerCase();

        //update article section
        updateArticle(role);

    });

});

//initial call for first role
updateArticle("web developer");
