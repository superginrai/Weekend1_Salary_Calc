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

$(document).ready(onReady);

console.log('JAVA JIVE');

function onReady() { 
    console.log('jQuery is up and running');
    $('#submitButton').on('click', clickHandler);
    $('#submitButton').on('click', clearField);
}

function clickHandler(){
    console.log('submit button was clicked!!');

    addEmployee();
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
    '</tr>'
    )
    updateMonthly();    


function updateMonthly() {
    let monthlySalary = (salary/12);
    let cashMoney = (monthlySalary + totalSalary);
    $('#cashMoneyOutput').text('Total Monthly: ' + cashMoney);
    console.log(cashMoney);
    if (cashMoney > 20000){
        document.getElementById('cashMoneyOutput').style.backgroundColor = 'red';
    }
    totalSalary = cashMoney;
    console.log(totalSalary);
    }

}