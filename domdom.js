document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");

    button.appendChild(btnText)

    document.body.appendChild(button)

    button.addEventListener("click", function(){
        let Square = document.createElement("div")
        Square.className = 'BlackBox' 

        document.body.appendChild(Square)
    })
})