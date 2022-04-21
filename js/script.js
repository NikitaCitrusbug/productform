
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validateForm() {
    var returnval = true;
    var pname = document.forms['productForm']['fname'].value;
    if (pname.length < 5) {
        alert("minimum length required is 6");
        returnval = false;
    }
    var disc = document.forms['productForm']['fdisc'].value;
    if (disc.length = 0) {
        seterror("disc", "**please enter the discription");
        returnval = false;
    }
    if (disc.length < 2) {
        alert("minimum length required is 3");
        returnval = false;
    }
    if (disc.length > 250) {
        alert("maximum length is 250");
        returnval = false;
    }
    var productprice = document.forms['productForm']['fproductprice'].value;
    if (Number(productprice) < 0) {
        alert("price is not valid in minus");
        returnval = false;
    }
    var dis = document.forms['productForm']['fdis'].value;
    if (Number(dis) < 0) {
        alert("discount is not valid in minus");
        returnval = false;
    }
    if (Number(dis) > 100) {
        alert("discount is not valid more than 100");
        returnval = false;
    }


    return returnval;

}

