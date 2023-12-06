// i wnat to apply  jva scpirt on itemlist-container so we will select the that container

// so to make this dynamic we have to  create object so

// let item={
//  item_image:'images/1.jpg',
//  rating:{
//  star:4.5,
//  reviews:1400
//  },
//  companyName:'Carlton London',
//  itemName:'Rhodium-Plted FLoral',
//  current_Price:600,
//  original_Price:800,
//  dicount:42,
// }
// in place of creating the loots of object we have create  diffrent array whic conatins lots of item so we wil use it
let itemsbag;
onload();
function onload(){
let localdbStr = localStorage.getItem('bagscount');
itemsbag = localdbStr ? JSON.parse(localdbStr):[];

displayItemHomePage(); 
displaybagIcon();
// localStorage.clear();
}
// addtoBag();
function addtoBag(itemid){
itemsbag.push(itemid);
localStorage.setItem('bagscount',JSON.stringify(itemsbag));
displaybagIcon();
}
function displayItemHomePage(){
  // as we go on the another page then it will be thre so du to of which remaing code will the work in load function so we have to check the conditon
  let itemlistConatinerELemenet = document.querySelector('.itemlist-container');
if(!itemlistConatinerELemenet){
  return;
}

  let innerHTML='';
  items.forEach(item=>{
    innerHTML+=`<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item-mage">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company  }</div>    
    <div class="item-name">${item.item_name}</div>
    <div class="pricesing">
        <span class="current-price">Rs  ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% oFF)</span>
    </div>
    <button class="btn-to-cart" onclick="addtoBag(${item.id})">Add to Cart</button>
    </div>`
  })
  
  itemlistConatinerELemenet.innerHTML=innerHTML;
}

function displaybagIcon(){
  let displaycountELement = document.querySelector('.itemcount');
  if(itemsbag.length>0){
    displaycountELement.innerText=itemsbag.length;
    displaycountELement.style.visibility='visible';
    
  }
  else{
    displaycountELement.style.visibility='hidden';
  }
 
}



