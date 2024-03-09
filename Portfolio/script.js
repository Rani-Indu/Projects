const resumeDownload = document.querySelector(".resume");
const githubLink = document.querySelector(".github");


resumeDownload.addEventListener("click", () => {
	const resumePath = '';
	// const resumePath = 'file:///E:/RESUME_updated';
	window.location.href = resumePath; 
})
// resumeDownload.addEventListener("click", () => {
// 	const resumePath = "RESUME_updated";
// 	window.location.href = resumePath;
// })






githubLink.addEventListener("click", () => {
	const githubProfileURL = 'https://github.com/Rani-Indu';
	window.open(githubProfileURL, '_blank');
	
})