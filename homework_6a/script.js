    let totalItem = 0;

//create array that will hold all ordered products
    var Cart = [];
    var shoppingCart = (function() {
        cart = [];
        // Constructor
        function Item(name,quantity,color,fill,price) {
          this.name = name;
          this.quantity = quantity;
          this.fill = fill;
          this.color = color;
          this.price = price;
        }
        // Save cart
        function saveCart() {
          sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
        }
          // Load cart
        function loadCart() {
          cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
          loadCart();
        }
        var obj = {};
  
        // Add to cart
        obj.addItemToCart = function(name,quantity,color,fill,price) {
            // for(var item in cart) {
            // if(cart[item].name === name) {
            //     cart[item].count ++;
            //     saveCart();
            //     return;
            // }
            // }
            var item = new Item(name,quantity,color,fill,price);
            cart.push(item);
            saveCart();
            console.log('item:' + item.name + item.color + item.quantity + item.fill + item.price)
        }
        // Set count from item
        obj.setCountForItem = function(name, quantity) {
            for(var i in cart) {
            if (cart[i].name === name) {
                cart[i].quantity = quantity;
                break;
            }
            }
        };
        // Remove item from cart
        // obj.removeItemFromCart = function(name) {
        //     for(var item in cart) {
        //         if(cart[item].name === name) {
        //         cart[item].quantity --;
        //         if(cart[item].quantity === 0) {
        //             cart.splice(item, 1);
        //         }
        //         break;
        //         }
        //     }
        //     saveCart();
        // }

        // Count cart 
        obj.totalCount = function() {
            var totalCount = 0;
            for(var item in cart) {
            totalCount += cart[item].quantity;
            }
            return totalCount;
        }

        // Total cart
        obj.totalCart = function() {
            var totalCart = 0;
            for(var item in cart) {
            totalCart += cart[item].price * cart[item].quantity;
            }
            return Number(totalCart);
        }

        // List cart
        obj.listCart = function() {
            var cartCopy = [];
            for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count);
            cartCopy.push(itemCopy)
            }
            return cartCopy;
        }

        // cart : Array
        // Item : Object/Class
        // addItemToCart : Function
        // removeItemFromCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function
        return obj;
        })();
    
    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var cartArray = shoppingCart.listCart();
        //console.log(cartArray);
        var output = "";
        for(var i in cartArray) {
            output += "<tr>"
              + "<td>" + cartArray[i].name + "</td>" 
              + "<td>(" + cartArray[i].price + ")</td>"
              + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
              + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
              + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
              + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
              + " = " 
              + "<td>" + cartArray[i].total + "</td>" 
              +  "</tr>";
          }
        //var orderedProducts=document.getElementById("orderedProducts");
        //ensure we delete all previously added rows from ordered products table
        // while(orderedProducts.rows.length>0) {
        //     orderedProducts.deleteRow(0);
        // }
        //console.log(output);
        //var display = cartArray
        document.getElementById('showCartTable').innerHTML = output;
        //$('.total-cart').html(shoppingCart.totalCart());
        //$('.total-count').html(shoppingCart.totalCount());

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        for(var i in cartArray) {
            cart_total_price += cartArray[i].price;
        }
        // //iterate over array of objects
        // for(var product in shoppingCart){
        //     //add new row      
        //     var row=orderedProducts.insertRow();
        //     //create three cells for product properties 
        //     var cellName = row.insertCell(0);
        //     var cellDescription = row.insertCell(1);
        //     var cellPrice = row.insertCell(2);
        //     cellPrice.align="right";
        //     //fill cells with values from current product object of our array
        //     cellName.innerHTML = shoppingCart[product].Name;
        //     cellDescription.innerHTML = shoppingCart[product].Description;
        //     cellPrice.innerHTML = shoppingCart[product].Price;
        //cart_total_price+=shoppingCart[product].Price;
    }
        //fill total cost of our shopping cart 
    //     document.getElementById("totalPrice").innerHTML=cart_total_price;
    // }

  
    function AddtoCart(name,quantity,color,fill,price){
       var singleProduct = {};
       singleProduct.Name=name;
       singleProduct.Quantity=quantity;
       singleProduct.Price=price;
       singleProduct.Color=color;
       singleProduct.Fill=fill;
       Cart.push(singleProduct);
       displayShoppingCart();
    }  

    var addCartButton = document.getElementById("addcart");
    // // temporarilly change the button text to "added!"
    // document.getElementById('addcart').addEventListener('click', function (clicked) {
    //     return function () {
    //         if (!clicked) {
    //             var last = this.innerHTML;
    //             this.innerHTML = 'Added!';
    //             clicked = true;
    //             setTimeout(function () {
    //                 this.innerHTML = last;
    //                 clicked = false;
    //             }.bind(this), 1000);
    //         }
    //     };
    // }(false), this);

    // when button is clicked, grab properities of the item and add to cart
    addCartButton.onclick = function(){
    console.log("button pressed")
        var name = document.getElementById("itemname").textContent; 
        //console.log(name)
        var quantity = Number(document.getElementById("quantity").value);
        totalItem = Number(totalItem + quantity);
        //console.log('quantity: ' + quantity)
        //console.log('total item: ' + totalItem)
        var color = document.querySelector('input[name="colorOptions"]:checked').value;
        document.getElementById('colorSelected').innerHTML = color;
        //console.log(color)
        var fill = document.querySelector('input[name="fillOptions"]:checked').value;
        document.getElementById('fillSelected').innerHTML = fill;
        //console.log(fill)
        var p = document.getElementById("itemprice").textContent;
        var price = p.match(/\d/g);
        price = price.join("");
        //console.log(price);
        document.getElementById("navCart").innerHTML ='Cart (' + totalItem + ')';
        shoppingCart.addItemToCart(name, quantity, color, fill, price);
        AddtoCart(name, quantity, color, fill, price);
        //document.getElementById("totalItems").innerHTML = totalItem;
        // document.getElementById("showCartTable").innerHTML = "<tr>"
        // + "<td>" + name + "</td>" 
        // + "<td>(" + price + ")</td>"
        // + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + name + ">-</button>"
        // + "<input type='number' class='item-count form-control' data-name='" + name + "' value='" + quantity + "'>"
        // + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + name + ">+</button></div></td>"
        // + "<td><button class='delete-item btn btn-danger' data-name=" + name + ">X</button></td>"
        // + " = " 
        // + "<td>" + color + "</td>" 
        // +  "</tr>";
        //document.getElementById("totalPrice").innerHTML = ;
        //displayShoppingCart();
        //updateCartPage();
        document.getElementById("show-item-name").innerHTML = name;
        document.getElementById("show-item-price").innerHTML = price;
        document.getElementById("show-item-color").innerHTML = color;
        document.getElementById("show-item-fill").innerHTML = fill;
    }

    function updateCartPage(){
        document.getElementById("totalItems").innerHTML = totalItem;
    }
    


// function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for(var i in cartArray) {
//       output += "<tr>"
//         + "<td>" + cartArray[i].name + "</td>" 
//         + "<td>(" + cartArray[i].price + ")</td>"
//         + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//         + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//         + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//         + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//         + " = " 
//         + "<td>" + cartArray[i].total + "</td>" 
//         +  "</tr>";
//     }
//     $('.show-cart').html(output);
//     $('.total-cart').html(shoppingCart.totalCart());
//     $('.total-count').html(shoppingCart.totalCount());
//   }
  