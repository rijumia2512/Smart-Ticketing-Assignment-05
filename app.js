// set inner text
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// set table data through click
function setTableData(seatNumber){
    const tBodyOfTicket = document.getElementById('t-body');
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

const allSeats = document.getElementsByClassName('seats');
const maxSeats = 4;

let count = 0;
let ticketPrice = 550;

for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        if (count < maxSeats && !seat.classList.contains('selected')) { 
            count = count + 1;
            setInnerText('seat-count', count);
            seat.classList.add('selected');
            seat.style.backgroundColor = '#1DD100';

            // increment seats left
            const totalSeat = document.getElementById('total-seats');
            const totalSeatText = totalSeat.innerText;
            const availableSeat = parseInt(totalSeatText);
            const remainingSeat = availableSeat - 1;
            setInnerText('total-seats', remainingSeat);

            // set tbody through append
            const seatName = seat.innerText;
            setTableData(seatName);

            // ticket price calculation
            const seatPriceText = document.getElementById('seat-price').innerText;
            const seatPrice = parseFloat(seatPriceText);
            const totalTicketPrice = count * seatPrice;
            setInnerText('total-price', totalTicketPrice);
            // grand total display
            setInnerText('grand-total', totalTicketPrice);
        } else {
           alert('Maximum seats reached or seat already selected');
        }
    });
}



