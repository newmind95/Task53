import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  var div = document.querySelector('.product')
  var price = document.querySelectorAll('p')[1].innerHTML;
  var span = document.createElement('span')
  span.class = 'data-price'
  span.className = 'data-price'
  span.innerHTML = price
  div.setAttribute('data-price', price)
  div.appendChild(span)

});
