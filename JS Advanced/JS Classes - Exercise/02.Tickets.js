function solve(array, sortingCriteria) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (i = 0; i < array.length; i++) {
        debugger;
        let ticketArgs = array[i].split('|');
        let currentTicket = new Ticket(ticketArgs[0], Number(ticketArgs[1]), ticketArgs[2]);
        tickets.push(currentTicket);
    }

    let sortedTickets;
    switch (sortingCriteria) {
        case 'destination':
            sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sortedTickets = tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return sortedTickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));