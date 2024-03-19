const d = document;
const $buttoncolor = d.querySelector("#lettercolor") 
const $buttonsize = d.querySelector("#lettersize") 

console.log($buttoncolor)

$buttoncolor.addEventListener("click", (e) => {
    const $p = d.querySelector("p")
    const $headThtree = d.querySelector("h3")
    $p.style.color = "red"
    $headThtree.style.color = "red"
})

$buttonsize.addEventListener("click", (e) => {
    const $p = d.querySelector("p")
    const $headThtree = d.querySelector("h3")
    $p.style.fontSize = "20px"
    $headThtree.style.fontSize = "50px"
})