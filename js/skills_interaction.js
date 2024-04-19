const skills = document.querySelectorAll('.skill');
const skills_button = document.querySelectorAll('.skill img');
const skills_text = document.querySelectorAll('.skill p');

const separator = document.querySelector('.separator');

skills.forEach(element => {
    element.addEventListener("click", function(){
        // Vérifie si l'élément cliqué a déjà la classe 'open'
        let isOpen = element.classList.contains('open');
        
        // Ferme tous les éléments en enlevant la classe 'open' de tous les éléments
        skills.forEach(skill => {
            skill.classList.remove('open');
        });

        // Ferme également tous les boutons de compétences en enlevant la classe 'open'
        skills_button.forEach(button => {
            button.classList.remove('open');
            separator.classList.remove('open');       

        });

        // Si l'élément cliqué n'était pas ouvert, l'ouvre en ajoutant la classe 'open'
        if (!isOpen) {
            element.classList.add('open');  
            separator.classList.add('open');       
        }

    });
});
