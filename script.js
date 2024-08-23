let CSSQuestion = document.querySelector('.CSS_Question');
let cssQa = document.querySelector('.css_qa');

CSSQuestion.addEventListener('click', function(){
    cssQa.style.display = "inline-block";
    CSSQuestion.style.display = "none";
})

cssQa.addEventListener('click', function(){
    cssQa.style.display = "none";
    CSSQuestion.style.display = "inline-block";
})