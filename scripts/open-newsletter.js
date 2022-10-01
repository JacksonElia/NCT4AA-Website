let articles = document.getElementsByClassName("article-container");
let newsletter = document.getElementById("page-section");

function showNewsletters() {
  newsletter.style.display = "block";
  for (let article of articles) {
    article.style.display = "none";
  }
}

function showArticle(number) {
    newsletter.style.display = "none";
    let article = document.getElementById(number.toString());
    article.style.display = "block";
    window.scrollBy(0, -10000);
}