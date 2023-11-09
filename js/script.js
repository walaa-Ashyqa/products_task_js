
    var cart = document.querySelector("#cart")
    var btn1 = document.querySelector("#showPrice")
    var totalPrice = 0
    var allProducts2 = document.querySelectorAll(".container .row .col .card .card-body")
    allProducts2.forEach(function (item) {
       var button_item= item.lastElementChild
       button_item.onclick = function (){
            totalPrice +=  +(button_item.getAttribute("price"))
            cart.innerHTML += button_item.getAttribute("price") + " "

            if (cart.innerHTML != ""){
                btn1.style.display = "block"
             
            }
   
        }
    })


    btn1.onclick = function (){
        div2.innerHTML = totalPrice
        console.log(totalPrice)
    }




 