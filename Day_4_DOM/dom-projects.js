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

// EXERCISES

  //9a
        const btn9a = document.querySelector('button').innerHTML;
        console.log(btn9a);

        document.querySelector('.btn2').innerHTML = '9b done!';

        function pressBtn (choice) {
            document.querySelector('.p').textContent = 'You choose: ' + choice;
        }

