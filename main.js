const cart=[];
let evgeniu=0;
const cartDiv = document.getElementById("cart");
const cartUl = document.getElementById("cart_list");
const cartBtn = document.getElementById("cart_btn");

function clearCart(){
  cart.length = 0;
  evgeniu = 0;
}
function VisibilityCart(){
    cartDiv.style.display = cartDiv.style.display=== "block"? "none":"block";
}
function HELLINCART(XYZ<){
    const kartochka = btn.clossest(".card");
    const name = kartochka.getAttribute('data-name');
    const price = parseFloat(kartochka.getAttribute('data-price'));
    cart.push({name,price});
}
function renderCart(){
cartUl.innerHTML = "";
cart.forEach((item,inbex)=>{
total+=item.price;
const li = document.createElement("li");
li.textContent = `${item.name} - ${item.price}`
CartUl.appendChild(li);
});
const total_li = document.createElement("li");
total_li.textContent = `ИТОГ:  ${total}`;
cartUL.appendChild(total_li);
}