class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.countOfRooms = {
            single: Math.floor(this.capacity*0.5),
            double: Math.floor(this.capacity*0.3),
            maisonette: Math.floor(this.capacity*0.2)
        }
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights){
        debugger;
        if (this.countOfRooms[roomType] >0){
            let currentBooking = {
                clientName: clientName,
                roomType:roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber
            };

            this.currentBookingNumber++;
            this.countOfRooms[roomType]--;

            this.bookings.push(currentBooking);

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber-1}.`
        }else{
            let message = `No ${roomType} rooms available!`;
            let countOfRooms = this.countOfRooms;
            Object.keys(countOfRooms).forEach(function (key) {
                if (countOfRooms[key]>0){
                    message += `Available ${key} rooms: ${countOfRooms[key]}.`;
                }
            });

            return message;
        }
    }

    roomService(currentBookingNumber, serviceType){
        debugger;
        if (currentBookingNumber<1 || currentBookingNumber>= this.currentBookingNumber){
            return `The booking ${currentBookingNumber} is invalid.`;
        }else if(!this.servicesPricing.hasOwnProperty(serviceType)){
            return `We do not offer ${serviceType} service.`;
        }else{
            let currentBooking = this.bookings.filter(obj => {
                return obj.roomNumber === currentBookingNumber
            })[0];

            if (currentBooking.hasOwnProperty('service')){
                currentBooking.service.push(serviceType);
                return `Mr./Mrs. ${currentBooking.clientName}, Your order for ${serviceType} service has been successful.`;
            } else{
                currentBooking['service'] = [];
                currentBooking.service.push(serviceType);
                return `Mr./Mrs. ${currentBooking.clientName}, Your order for ${serviceType} service has been successful.`;
            }
        }
    }

    checkOut(currentBookingNumber){
        if (currentBookingNumber<0||currentBookingNumber>=this.currentBookingNumber){
            return `The booking ${currentBookingNumber} is invalid.`;
        }else{
            let currentBooking = this.bookings.filter(obj => {
                return obj.roomNumber === currentBookingNumber
            })[0];

            let totalMoney = currentBooking.nights * this.roomsPricing[currentBooking.roomType];

            if (currentBooking.hasOwnProperty('service')){
                let totalServiceMoney = 0;
                for(let currentService of currentBooking.service){
                    totalServiceMoney+= this.servicesPricing[currentService];
                }

                return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
            }else{
                return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
            }
        }
    }

    report(){
        debugger;
        let reportMessage = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        for(let booking of this.bookings){
            if(booking.hasOwnProperty('service')){
                reportMessage+=`bookingNumber - ${booking.roomNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}\nservices: ${booking.service.join(', ')}\n----------\n`;
            }else{
                reportMessage+=`bookingNumber - ${booking.roomNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}\n----------\n`;
            }

        }
        return reportMessage.substr(0,reportMessage.length-12);
    }
}


let hotel = new Hotel('HotUni', 10);

// act
hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());;