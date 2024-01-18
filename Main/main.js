const projectArticles = document.getElementsByClassName("project-article");
const projectArticleText = document.getElementsByClassName("project-article-text");





function eventListeners() {
for(let i = 0; i < projectArticles.length; i++){
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