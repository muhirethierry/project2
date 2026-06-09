const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const answer = this.querySelector(".answer");

        if (this.classList.contains("active")) {
            answer.style.height = answer.scrollHeight + "px";
        } else {
            answer.style.height = "0px";
        }
    });
}