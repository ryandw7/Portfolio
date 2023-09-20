const resume = document.getElementById("resume");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const awards = document.getElementById("awards-and-certificates");

const resumeContent = document.getElementById("resume-content");
const awardsContent = document.getElementById("awards-and-certificates-content");
const skillsContent = document.getElementById("skills-content");
const projectsContent = document.getElementById("projects-content");
resumeContent.hidden = true;
awardsContent.hidden = true;
skillsContent.hidden = true;
projectsContent.hidden = true;

resume.addEventListener('click', () => {
    resumeContent.hidden = false;
    awardsContent.hidden = true;
    skillsContent.hidden = true;
    projectsContent.hidden = true;
})

skills.addEventListener('click', () => {
    resumeContent.hidden = true;
    awardsContent.hidden = true;
    skillsContent.hidden = false;
    projectsContent.hidden = true;
})

awards.addEventListener('click', () => {
    resumeContent.hidden = true;
    awardsContent.hidden = false;
    skillsContent.hidden = true;
    projectsContent.hidden = true;
})

projects.addEventListener('click', () => {
    resumeContent.hidden = true;
    awardsContent.hidden = true;
    skillsContent.hidden = true;
    projectsContent.hidden = false;
})