let count = 0;
let flag = 0;
function showNav() {
    const nav = document.getElementById('sideNav');
    nav.style.display = 'inline';
}
function closeNav() {
    const nav = document.getElementById('sideNav');
    nav.style.display = 'none';
}
function changePic1() {
    document.getElementById("productView").src = "images/image-product-1.jpg";
}
function changePic2() {
    document.getElementById("productView").src = "images/image-product-2.jpg";
}
function changePic3() {
    document.getElementById("productView").src = "images/image-product-3.jpg";
}
function changePic4() {
    document.getElementById("productView").src = "images/image-product-4.jpg";
}
function incrementBtn() {
    count += 1;
    document.getElementById("number").textContent = count;
}
function decrementBtn() {
    if (count > 0) {
        count -= 1;
    } else {
        count = 0;
    }
    document.getElementById("number").textContent = count;
}
function addToCart() {
    const value = document.getElementById("number").textContent;
    document.getElementById("cartCounter").textContent = value;
}
function seeCart() {
    if (flag == 1) {
        document.getElementById("cartBox").style.display = "none";
    }
    if (parseInt(document.getElementById("number").textContent) == 0 && flag == 0) {
        document.getElementById("cartBox").style.display = "block";
        flag = 1;
        document.getElementById("cartBox").innerHTML = "<h5>Cart</h5><hr><h4 id='empty'>Empty!</h4>";
    } if (parseInt(document.getElementById("number").textContent) != 0 && flag == 0) {
        document.getElementById("cartBox").style.display = "block";
        flag = 1;
        document.getElementById("empty").style.display = "none";
        document.getElementById("test").src = "images/image-product-1.jpg";
        document.getElementById("test").style.display = "block";
        document.getElementById("x").style.display = "inline";
        let price = document.getElementById("productPrice").textContent;
        document.getElementById("priceProduct").textContent = price;
        let stack = document.getElementById("cartCounter").textContent;
        document.getElementById("productStack").textContent = stack;
        let num = parseInt("250.00");
        let num2 = parseInt(stack);
        let sum = num * num2;
        document.getElementById("finalPrice").innerText = `$${sum}`;
    }

}