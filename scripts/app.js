let seatCount = getValue('seat-number');
let seatsLeft = getValue('seats-left');
function selectSeat(e) {
  seatCount++;
  seatsLeft--;

  if (seatCount > 4) {
    alert('One cannot buy more than 4 tickets');
    return;
  }
  setInnerText('seat-number', seatCount);
  setInnerText('seats-left', seatsLeft);

  e.target.style.backgroundColor = '#1DD100';
  e.target.disabled = true;

  createElement(e.target.innerText);

 // apply coupon and calculate discount 
  function applyCoupon() {
    const totalPrice = getValue('total-price');
    const newPrice = totalPrice + 550;
    setInnerText('total-price', newPrice);
    setInnerText('grand-total', newPrice);
    const inputField = document.getElementById('input-field');
    if (inputField.value === 'NEW15') {
      const totalDiscount = newPrice * 0.15;
      const newGrandTotal = newPrice - totalDiscount;
      setInnerText('discount-price', totalDiscount);
      setInnerText('grand-total', newGrandTotal);

      document.getElementById('coupon-field').classList.add('hidden');
    
    } else if (inputField.value === 'Couple 20') {
      const totalDiscount = newPrice * 0.2;
      const newGrandTotal = newPrice - totalDiscount;
      setInnerText('discount-price', totalDiscount);
      setInnerText('grand-total', newGrandTotal);

      document.getElementById('coupon-field').classList.add('hidden');
    } else {
      alert('Sorry! the coupon code is incorrect');
      inputField.value = '';
    }
  }



  // enable apply button
  const btnApply = document.getElementById('apply-btn');
  if (seatCount === 4) {
    btnApply.removeAttribute('disabled');
    btnApply.addEventListener('click', applyCoupon);
  }

  const btnNext = document.getElementById('next-btn');
  
   document.getElementById('number-input').addEventListener('keyup', (e) => {
     const number = e.target.value;
     if (number) {
       btnNext.removeAttribute('disabled');
      
      }
   });
  
}

// create element function
function createElement(text) {
  const tBody = document.getElementById('t-body');
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  tr.classList.add('flex');
  tr.classList.add('justify-between');

  td1.innerText = text;
  td2.innerText = 'Economy';
  td3.innerText = '550';

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tBody.appendChild(tr);
}

// name and phone input function



// add event listener
const allSeats = document.getElementsByClassName('kbd');

for (let seat of allSeats) {
  seat.addEventListener('click', selectSeat);
}


