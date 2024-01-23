const projectArticles = document.getElementsByClassName("project-article");
const projectArticleText = document.getElementsByClassName("project-article-text");





function eventListeners() {
    for (let i = 0; i < projectArticles.length; i++) {
        projectArticles[i].addEventListener("mouseover", function () {
            projectArticleText[i].style.visibility = 'visible';
            console.log('bruh');
        }
        )
        projectArticles[i].addEventListener("mouseout", function () {
            projectArticleText[i].style.visibility = 'hidden';
            console.log('bruh');
        }
        )
    }
}

eventListeners();
const aboutMe = document.getElementById("about-me-p");
let loadCompleted = false;
const title = document.getElementById('h1');
function fadeIn(element){
    element.style.opacity = 0;
    for(let i = 0; i < 20; i++){
        element.style.opacity += .05;
    }
}


function stringTyper(string, element) {
    const char = string.split('');
    const newArray = [];
    for (let i = 0; i < string.length; i++) {
        setTimeout(() => {
            newArray.pop()
            newArray.push(char[i]);
            newArray.push('|')
            element.textContent = newArray.join("");
        }, i * 50);
    }
    
}

window.addEventListener("load", () => {
    console.log('test')
    stringTyper("I'm Ryan, I'm 22 years old, and I am a passionate front-end developer with a year of hands-on experience in crafting engaging and responsive web experiences. My expertise lies in the trifecta of web technologies: JavaScript, HTML, and CSS.", aboutMe)
})

