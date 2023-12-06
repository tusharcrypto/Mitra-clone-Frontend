let loadObject;
let convenience_fee=99;
onload();
function onload(){
  loadObjectfrombag();
 displaybagItem();
 displayBagSummary();
}

// it will show the bag summary from here
function displayBagSummary(){
 let summaryElement = document.querySelector('.bag-summary');
 let itemcount = loadObject.length;
 let total_mrp=0;
 let discountPrice=0;
 let total_amount=0;
 loadObject.forEach(itembagid =>{
  total_mrp+=itembagid.original_price;
  discountPrice+=itembagid.original_price-itembagid.current_price;
  
 });
  total_amount = total_mrp-discountPrice+convenience_fee;
 summaryElement.innerHTML=` <div class="bag-details-container">
 <div class="price-header">PRICE DETAILS (${itemcount} Items) </div>
 <div class="price-item">
   <span class="price-item-tag">Total MRP</span>
   <span class="price-item-value">Rs ${total_mrp}</span>
 </div>
 <div class="price-item">
   <span class="price-item-tag">Discount on MRP</span>
   <span class="price-item-value priceDetail-base-discount"> Rs ${discountPrice}</span>
 </div>
 <div class="price-item">
   <span class="price-item-tag">Convenience Fee</span>
   <span class="price-item-value">Rs ${convenience_fee}</span>
 </div>
 <hr>
 <div class="price-footer">
   <span class="price-item-tag">Total Amount</span>
   <span class="price-item-value">Rs ${total_amount}</span>
 </div>
</div>
<button class="btn-place-order">
 <div class="css-xjhrni">PLACE ORDER</div>
</button>`

}

 function loadObjectfrombag(){
  console.log(itemsbag);
  loadObject =  itemsbag.map(bagid=> {
for(let i= 0; i<items.length; i++){
  
    if(bagid == items[i].id) {
      console.log(bagid);
      return items[i];
    }
  }
 });
}
 
function displaybagItem(){
  let bagItemContainerElement = document.querySelector('.bag-items-container');
  let innerHTML='';
 
  loadObject.forEach(item => {
    console.log(item);
    innerHTML += htmlstructure(item);  
  });
  bagItemContainerElement.innerHTML=innerHTML; 
 
}

  function removeFromBag(itemid){
    itemsbag = itemsbag.filter(bagid => bagid!= itemid);
    localStorage.setItem('bagscount',JSON.stringify(itemsbag));
    loadObjectfrombag();
    displaybagIcon();
    displaybagItem();
    displayBagSummary();
    
  }

 function  htmlstructure(item){ 
  return  `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
</div>`

 }