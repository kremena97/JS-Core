function solve() {
    let zoneArray = [];
    let fans = 0;
    let totalSum = 0;

    addEventListerToZoneButtons(document.querySelectorAll('#exercise .Levski table')[0], 'Levski');
    addEventListerToZoneButtons(document.querySelectorAll('#exercise .Litex table')[0], 'Litex');
    addEventListerToZoneButtons(document.querySelectorAll('#exercise .VIP table')[0], 'VIP');

    console.log(document.querySelectorAll('#exercise .Levski table')[0].rows[1].children[2], 'Levski');

    console.log(document.querySelectorAll('#exercise .Levski table'));

    function addEventListerToZoneButtons(table, zone) {
        for(let i=0; i< table.rows.length; i++)
        console.log(table.rows[i]);
    }
}