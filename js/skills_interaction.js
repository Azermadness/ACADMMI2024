const skills = document.querySelectorAll('.skill');
const skills_button = document.querySelectorAll('.skill img');
const skills_text = document.querySelectorAll('.skill p');

const separator = document.querySelector('.separator');

    skills.forEach(element => {
        element.addEventListener("click", function(){ 

            separator.classList.toggle('open');

            let clickedIndex = Array.from(skills).indexOf(element);

            if(element.classList.contains('open')){
               element.classList.remove('open');
            }

            if(isOpened()){
                skills.forEach(element => {
                    element.classList.remove('open');
                    skills_button[clickedIndex].classList.remove('open');
                });

                skills[clickedIndex].classList.toggle('open');
                skills_button[clickedIndex].classList.toggle('open');
                console.log("Contenu ouvert détecté");
            }
            
            else{
                skills[clickedIndex].classList.toggle('open');
                skills_button[clickedIndex].classList.toggle('open');
                console.log("Contenu fermé !");
            }    
        })
    });

function isOpened(){
    return Array.from(skills).some(element => element.classList.contains('open'));
}
