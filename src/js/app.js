import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    const button = document.querySelector(".button");
    button.addEventListener("click", () => {

    });

});

let add_article = () => {
    const articleTemplate = document.createElement('article');
    articleTemplate.classList.add("message");
    articleTemplate.innerHTML = "sample text sample text sample text sample text";
    document.body.appendChild(articleTemplate);
}
document.body.addEventListener("click", () => {
    let flag = 5;
    while (flag !== 0) {
        add_article();
        flag--;
    }
})
