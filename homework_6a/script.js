    let totalItem = 0;

//create array that will hold all ordered products
    var shoppingCart = [];

    // //this function manipulates DOM and displays content of our shopping cart
    // function displayShoppingCart(){
    //     var orderedProducts=document.getElementById("orderedProducts");
    //     //ensure we delete all previously added rows from ordered products table
    //     while(orderedProducts.rows.length>0) {
    //         orderedProducts.deleteRow(0);
    //     }

    //     //variable to hold total price of shopping cart
    //     var cart_total_price=0;
    //     //iterate over array of objects
    //     for(var product in shoppingCart){
    //         //add new row      
    //         var row=orderedProducts.insertRow();
    //         //create three cells for product properties 
    //         var cellName = row.insertCell(0);
    //         var cellDescription = row.insertCell(1);
    //         var cellPrice = row.insertCell(2);
    //         cellPrice.align="right";
    //         //fill cells with values from current product object of our array
    //         cellName.innerHTML = shoppingCart[product].Name;
    //         cellDescription.innerHTML = shoppingCart[product].Description;
    //         cellPrice.innerHTML = shoppingCart[product].Price;
    //         cart_total_price+=shoppingCart[product].Price;
    //     }
    //     //fill total cost of our shopping cart 
    //     document.getElementById("totalPrice").innerHTML=cart_total_price;
    // }


    function AddtoCart(name,quantity,color,fill,price){
       //Below we create JavaScript Object that will hold five propertie
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Quantity=quantity;
       singleProduct.Price=price;
       singleProduct.Color=color;
       singleProduct.Fill=fill;
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       //displayShoppingCart();
    }  

    var addCartButton = document.getElementById("addcart");
    
    // temporarilly change the button text to "added!"
    document.getElementById('addcart').addEventListener('click', function (clicked) {
        return function () {
            if (!clicked) {
                var last = this.innerHTML;
                this.innerHTML = 'Added!';
                clicked = true;
                setTimeout(function () {
                    this.innerHTML = last;
                    clicked = false;
                }.bind(this), 1000);
            }
        };
    }(false), this);

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
        //console.log(color)
        var fill = document.querySelector('input[name="fillOptions"]:checked').value;
        //console.log(fill)
        var price = document.getElementById("itemprice").textContent;
        //console.log(price)
        document.getElementById("navCart").innerHTML ='Cart (' + totalItem + ')';
        AddtoCart(name, quantity, color, fill, price);
    }

/*{ <table cellpadding="4" cellspacing="4" border="1">
    <tr>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="0">
                <thead>
                    <tr>
                        <td colspan="2">
                            Products for sale
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Table
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Table','Big red table',50)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Door
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Door','Yellow Door',150)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Car
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Ferrari','Ferrari S234',150000)"/>
                        </td>
                    </tr>
                </tbody>

            </table>
        </td>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="1" id="orderedProducts">
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Quantity
                        </td>
                        <td>
                            Price
                        </td>
                    </tr>
                </thead>
                <tbody id="orderedProducts">

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="right" id="cart_total">

                        </td>
                    </tr>
                </tfoot>
            </table>
        </td>
    </tr>
</table> }*/