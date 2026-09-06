// Subscribe and Unsubscribe

function subscribe() {
    const elementBtn = document.querySelector('.js-subscribe-btn');
        if (elementBtn.innerHTML === 'Subscribe') {
            elementBtn.innerHTML = 'Subscribed';
        } else {
            elementBtn.innerHTML = 'Subscribe';

        }
}

// Project 2

function calculate() {
    const costOrder = document.querySelector('.costOrd');
    let cost = Number(costOrder.value); //type coersion
    if (cost < 40 ) {
        cost = cost + 10;
    } else {
        cost;
    }
    document.querySelector('.total-cost').innerHTML = `$${cost}`;
}



