let clickCount = 0;

$(document).ready(onReady);

console.log('JAVA JIVE');

function onReady() { 
    console.log('jQuery is up and running');
    $('#seaButton').on('click', clickHandler);
    updateDomCount();
}

function clickHandler(){
    console.log('sea button was clicked!!');
    clickCount++;
    console.log(clickCount);
   updateDomCount();
   addNewCreature();
}

function updateDomCount() {
    $('#seaOutput').text(clickCount);
}

function addNewCreature() {
    let name = $('#nameIn').val();
    let size = $('#sizeIn').val();
    let type = $('#typeIn').val();
    let speed = $('#speedIn').val();

    $('#creatureList').append(
    '<tr>' +
        '<td>'+ name + '</td>' +
        '<td>' + size + '</td>' +
        '<td>' + type + '</td>' +
        '<td>' + speed + '</td>' +
    '</tr>'
    )
}