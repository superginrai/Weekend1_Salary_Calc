let totalSalary = 0;

class Spaceball {
    constructor(firstName, lastName, id, title, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}
const skroob = { firstName: 'President', lastName: 'Skroob', id: 12345, title: 'President', salary: 99999999};
const helmut = { firstName: 'Dark', lastName: 'Helmut', id: 12346, title: "Father's-Brother's-Nephew's-Cousin's-Former Room Mate", salary: 50000};
const sandurz = { firstName: 'Colonel', lastName: 'Sandurz', id: 12347, title: 'Chicken', salary: 45000};
const vespa = { firstName: 'Princess', lastName: 'Vespa', id: 5, title: 'Daughter of Roland, King of the Druids', salary: 10000000 };
const loneStarr = { firstName: 'Lone', lastName: 'Starr', id: 007, title: 'An honest to goodness prince', salary: 0 };
const barf = { firstName: 'Barf', lastName: '', id: 08, title: 'Mog', salary: 0 };


const spaceballs = [skroob, helmut, sandurz, vespa, loneStarr, barf];

$(document).ready(onReady);

console.log('JAVA JIVE');

function onReady() { 
    console.log('jQuery is go for launch');
    $('#submitButton').on('click', clickHandler);
    $('#submitButton').on('click', clearField);


makeSpaceball (spaceballs);

function makeSpaceball () {
    for (let i = 0; i < spaceballs.length; i++){
       const spaceball = spaceballs[i];
       const madeSpaceball = new Spaceball(spaceball.firstName,
            spaceball.lastName,
            spaceball.id,
            spaceball.title,
            spaceball.salary);

        $('#employeeInfo').append(
            '<tr>' +
            '<td>'+ madeSpaceball.firstName + '</td>' +
            '<td>' + madeSpaceball.lastName + '</td>' +
            '<td>' + madeSpaceball.id + '</td>' +
            '<td>' + madeSpaceball.title + '</td>' +
            '<td>' + madeSpaceball.salary + '</td>' +
            '<td>' + '<button class="deleteButton">DELETE</button>' + '</td>' +
            '</tr>'
        )

       // salary = madeSpaceball.salary;
        $('.deleteButton').on('click', deleteHandler);
        console.log ('Spaceball made');
        console.log(madeSpaceball)
       // updateMonthly();
    }
}

}
function clickHandler(){
    console.log('submit button was clicked!!');

    addEmployee();
}

function deleteHandler(){
    $(this).closest('tr').remove()
    console.log('delete button was clicked');
}

function clearField(){
    $('#firstNameIn, #lastNameIn, #idIn, #titleIn, #salaryIn').val('');
    }

function addEmployee() {
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    $('#employeeInfo').append(
        '<tr>' +
        '<td>'+ firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + id + '</td>' +
        '<td>' + title + '</td>' +
        '<td>' + salary + '</td>' +
        '<td>' + '<button class="deleteButton">DELETE</button>' + '</td>' +
        '</tr>'
    )
    $('.deleteButton').on('click', deleteHandler);
    updateMonthly();    


function updateMonthly() {
    let monthlySalary = (salary/12);
    let cashMoney = (monthlySalary + totalSalary);
    $('#cashMoneyOutput').text('Total Monthly:$' + cashMoney.toFixed(2));
    console.log(cashMoney);
    if (cashMoney > 20000){
        document.getElementById('cashMoneyOutput').style.backgroundColor = 'red';
    }
    totalSalary = cashMoney;
    console.log(totalSalary);
    }
}


