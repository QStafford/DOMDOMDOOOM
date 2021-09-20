document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    let i = 1
    button.appendChild(btnText)

    document.body.appendChild(button)

    button.addEventListener("click", function(){
        let Square = document.createElement("div")
       
        Square.className = 'BlackBox'
        
        Square.id = i++ 
             
        Square.style.width = "50px"
        Square.style.height = "50px"
        Square.style.border = "30px solid black"
        Square.style.padding = "50px solid black"
        Square.style.margin = "20px"
        Square.style.float = 'right'
        Square.innerText = Square.id
       
        document.body.appendChild(Square)
        
       
        Square.addEventListener("click", function(){
            Square.style.background = 'blue'
        })
        
        Square.addEventListener("dblclick", function(){
            Square.style.background = 'red'
            }
        )
    })
})