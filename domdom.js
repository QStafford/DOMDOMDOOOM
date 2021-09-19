document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");

    button.appendChild(btnText)

    document.body.appendChild(button)

    button.addEventListener("click", function(){
        let Square = document.createElement("div")
        Square.className = 'BlackBox' 
        Square.style.width = "100px"
        Square.style.height = "100px"
        Square.style.border = "20px solid black"
        Square.style.padding = "50px solid black"
        Square.style.margin = "20px"
        Square.style.float = 'right'
        document.body.appendChild(Square)
    })
})