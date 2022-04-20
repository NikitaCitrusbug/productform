
    function seterror(id,error){
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;

    }
    function validateForm(){
        var returnval = true;
        var pname = document.forms['productForm']['fname'].value;
        if(pname.length<5){
            seterror("pname","**length is too short");
            returnval= false;
        }
        var disc = document.forms['productForm']['fdisc'].value;
        if(disc.length<2){
            seterror("disc","**length is too short");
            returnval= false;
        }
        if(disc.length>250){
            seterror("disc","**length is too long");
            returnval= false;
        }
        var productprice = document.forms['productForm']['fproductprice'].value;
        if(Number(productprice)>2000){
            seterror("productprice","**price is not greater than 2000");
            returnval= false;
        }
        
        // var dis = document.forms['productForm']['fdis'].value;
        // if(dis.num>=100){
        //     seterror("dis","**number is not valid");
        //     returnval= false;
        // }
        
        
        return returnval;

    }

    