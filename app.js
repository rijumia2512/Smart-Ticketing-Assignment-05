function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function setTableData(seatNumber){
    const tBodyOfTicket =document.getElementById('t-body');
    const tableRow = document.createElement('tr');

    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    const thirdCol = document.createElement('td');

    firstCol.classList.add('py-2', 't-Data');
    thirdCol.classList.add('text-right');
    firstCol.textContent = seatNumber;
    secondCol.textContent = 'Economy';
    thirdCol.textContent = '550';

    tableRow.appendChild(firstCol);
    tableRow.appendChild(secondCol);
    tableRow.appendChild(thirdCol);
    
    tBodyOfTicket.appendChild(tableRow);
}

function getValue(elementId){
    const element = document.getElementById(elementId);
    const currentElementText = element.innerText;
    const value = parseFloat(currentElementText);

    return value;
}







const allSeats = document.getElementsByClassName('seats');

let count = 0;

function seatClickHandler(event) {
    count = count + 1;
    setInnerText('seat-count', count);

    // Seats left
    const totalSeat = document.getElementById('total-seats');
    const totalSeatText = totalSeat.innerText;
    const availableSeat = parseInt(totalSeatText);
    const remainingSeat = availableSeat - 1;
    setInnerText('total-seats', remainingSeat);


    const seatName = this.innerText;
    setTableData(seatName);

    // Set Price Here

    const seatPriceText = document.getElementById('seat-price').innerText;
    const seatPrice = parseFloat(seatPriceText);
    const totalTicketPrice = count * seatPrice;
    setInnerText('total-price', totalTicketPrice);
    setInnerText('grand-total', totalTicketPrice);


    if (count <= 4) {
        this.classList.add('bg-[#1dd100]');
    }





    if (count === 4) {
        for (const seat of allSeats) {
            seat.removeEventListener('click', seatClickHandler);
        }
    }
}

for (const seat of allSeats) {
    seat.addEventListener('click', seatClickHandler);
}

const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function () {

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    let willDiscountPrice = 2200;

    if (count === 4) {
        if (inputFieldValue === 'NEW15') {
            let discountPrice = willDiscountPrice - (willDiscountPrice * 15) / 100;
            setInnerText('grand-total', discountPrice);
            
            // append discount price
            const discountDiv = document.getElementById('priceDiscountContainer');

            const firstH1 = document.createElement('h1');
            firstH1.textContent = 'Discount Price';

            const secondH1 = document.createElement('h1');
            secondH1.textContent = 'BDT 330';

            discountDiv.appendChild(firstH1);
            discountDiv.appendChild(secondH1);
            
            
            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            
           
            

        }
        else if(inputFieldValue === 'Couple 20'){
            let discountPrice = willDiscountPrice - (willDiscountPrice * 20) / 100;
            setInnerText('grand-total', discountPrice);
            const discountDiv = document.getElementById('priceDiscountContainer');

            const firstH1 = document.createElement('h1');
            firstH1.textContent = 'Discount Price';

            const secondH1 = document.createElement('h1');
            secondH1.textContent = 'BDT 440';

            discountDiv.appendChild(firstH1);
            discountDiv.appendChild(secondH1);

            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            

        }
        
        else {
            alert('Please provide valid coupon')
        }

    } else {
        alert('Please selected buy 4 tickets')
    }



})


  
  function modalHide() {
    location.reload()
  }
  
  
  function formSubmit(e) {
    e.preventDefault();
  
    // name
    let name = document.getElementById("name");
    let nameValue = name.value;
    // number
    let number = document.getElementById("phone-number");
    let numberValue = number.value;
    // email
    let email = document.getElementById("email");
    let emailValue = email.value;
    let value = getValue("seat-count");
  
    if (numberValue.length == 11 && numberValue > 0 && value > 0 && nameValue !== "" &&  emailValue !== "") {
      console.log("Submitted successfully.");
      modal.showModal()
      let inputs = document.querySelectorAll("input");
      inputs.forEach(function(input) {
        input.value = '';
      });
    } else {
      alert("Please Submit All Input Filed.");
    }
  }