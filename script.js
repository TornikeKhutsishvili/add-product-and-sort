// სორტირების შემდეგ თუ შევცვლი კატეგორიას ავტომატურად უბრუნდება ორიგინალ მასივს,
// არ აქვს მნიშნელობა სხვა კატეგორიაზე გადავალ თუ ორივე კატეგორიას ერთად ჩამოვშლი. 
// ორიგინალი მასივი არ უნდა შეიცვალოს თავისი წყობით. უნდა შემეძლოს მთლიანი
// კატეგორიებს და ცალ-ცალკე ორივე კატეგორიის სორტირება ფასის გამოშვების თარიღის 
// და ვადის მიხედვით.

class Product{
    constructor(productname,description,price,relasedate,duration,category){
        this.productname = productname;
        this.description = description;
        this.price = price;
        this.relasedate = relasedate;
        this.duration = duration;
        this.category = category;
    }
}

let pname = document.querySelector(".pname")
let description = document.querySelector(".description")
let price = document.querySelector(".price")
let relasedate = document.querySelector(".rdate")
let duration = document.querySelector(".duration")
let category = document.querySelector(".category")
var save = document.querySelector(".save")
var tb = document.querySelector(".tb")
let filterCategory = document.querySelector(".filterCategory")
var body = JSON.parse(localStorage.getItem("cardizain"))

var allProducts = []
var foods = []
var drinks = []

save.addEventListener("click",function(){
        var obj = new Product(pname.value, description.value, price.value, relasedate.value, duration.value, category.value)
        allProducts.push(obj)
    if(obj.category == "drink"){
        drinks.push(obj)
    }
    else if(obj.category == "food"){
        foods.push(obj)
    }
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
            <td>${i.category}</td>
        </tr>
        `
        tb.innerHTML += tmp
    }
});

filterCategory.addEventListener("change",function(){
    if(filterCategory.value == "food"){
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
     </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
        `
        tb.innerHTML += tmp
        }
    }
    else if(filterCategory.value == "drink"){
        tb.innerHTML = `
        <tr>
            <th>Product name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Relase Date</th>
            <th>End Date</th>
        </tr>
        `
    for(var i of drinks){
        var tmp = `
         <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
        `
        tb.innerHTML += tmp
        }
    }
    else{
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
     </tr>
        `
    for(var i of allProducts){
         var tmp = `
     <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
     </tr>
         `
         tb.innerHTML += tmp
        }
    }
});




var filterselect = document.querySelector(".filterselect")

filterselect.addEventListener("change", function () {
if(filterselect.value == "enddesc"){
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return new Date(a.duration) - new Date(b.duration)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
  }
  else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return new Date(a.duration) - new Date(b.duration)
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return new Date(a.duration) - new Date(b.duration)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
  }
}

if(filterselect.value == "endasc"){
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return new Date(b.duration) - new Date(a.duration)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
  }
  else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return new Date(b.duration) - new Date(a.duration)
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return new Date(b.duration) - new Date(a.duration)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
  }
}


if(filterselect.value == "relasedesc"){
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return new Date(a.relasedate) - new Date(b.relasedate)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
  }
  else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return new Date(a.relasedate) - new Date(b.relasedate)
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return new Date(a.relasedate) - new Date(b.relasedate)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
  }
}


if(filterselect.value == "relaseasc"){
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return new Date(b.relasedate) - new Date(a.relasedate)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
  }
  else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return new Date(b.relasedate) - new Date(a.relasedate)
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return new Date(b.relasedate) - new Date(a.relasedate)
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
  }
}



if(filterselect.value == "pricedesc"){
    
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return a.price - b.price
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
}
    else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return a.price - b.price
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return a.price - b.price
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
  }
}
if(filterselect.value == "priceasc"){
    
    if(filterCategory.value == "drink"){
        drinks.sort(function(a,b){
            return b.price - a.price
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of drinks){
    var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
    </tr>
     `
    tb.innerHTML += tmp
    }
}
    else if(filterCategory.value == "food"){
        foods.sort(function(a,b){
            return b.price - a.price
        })
        tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
    </tr>
    `
    for(var i of foods){
        var tmp = `
        <tr>
            <td>${i.productname}</td>
            <td>${i.description}</td>
            <td>${i.price}Gel</td>
            <td>${i.relasedate}</td>
            <td>${i.duration}</td>
        </tr>
         `
        tb.innerHTML += tmp
    }    
}
    else{
        allProducts.sort(function (a,b){
            return b.price - a.price
        })
    tb.innerHTML = `
    <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Relase Date</th>
        <th>End Date</th>
        <th>Category</th>
    </tr>
    `
    for(var i of allProducts){
        var tmp = `
    <tr>
        <td>${i.productname}</td>
        <td>${i.description}</td>
        <td>${i.price}Gel</td>
        <td>${i.relasedate}</td>
        <td>${i.duration}</td>
        <td>${i.category}</td>
    </tr>
    `
    tb.innerHTML += tmp
    }
   }
  }
});