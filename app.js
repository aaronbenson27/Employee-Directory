$('.searchBar').hide()
$('.viewTab').hide()

const render = function() {
    $('.content').empty();
  
    for ( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<div class = employeelist><p>${employeeList[i].name}</p> <p>${employeeList[i].officeNum}</p> <p>${employeeList[i].phoneNum}</p></div>`);
    }
  }

render();

const addInput = function() {
    const nameVal = $('#name').val();
    const officeVal = $('#officeNum').val();
    const phoneVal = $('#phoneNum').val();
    const newObject = {name: nameVal, officeNum: officeVal, phoneNum: phoneVal}

    employeeList.push(newObject);
    
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
  }
  
$('#addButton').on('click', addInput);

const deleteInput = function () {
    const nameVal = $('#name').val()
    for (i=0; i < employeeList.length; i++) {
        if (nameVal === employeeList[i].name) {
            employeeList.splice(i, 1)
            $('#name').val('');
            render (); 
        }
    }
}
$('#deleteButton').on('click', deleteInput);

const updateInput = function () {
    const nameVal = $('#name').val();
    const officeVal = $('#officeNum').val();
    const phoneVal = $('#phoneNum').val();
    const newObject = {name: nameVal, officeNum: officeVal, phoneNum: phoneVal}
    for (i=0; i < employeeList.length; i++) {
        if (nameVal === employeeList[i].name) {
            employeeList.splice(i, 1, newObject)
            $('#name').val('');
            $('#officeNum').val('');
            $('#phoneNum').val('');
            render (); 
        }
    }
}
$('#updateButton').on('click', updateInput);

const verifyInput = function () {
    const nameVal = $('#name').val()

    for (let i=0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            $('.viewTab').text("Yes")
            $('#name').val('');
            break;
        }
        else {
            $('.viewTab').text("No")
            $('#name').val('');
        }
    }
}
$('#verifyButton').on('click', verifyInput);

const viewTab = function () {
    $('.searchBar').hide()
    $('.content').show()
    $('.viewTab').hide()
   
}
const addTab = function () {
    $('.searchBar').show()
    $('.inputBars').show()
    $('#phoneNum').show()
    $('#officeNum').show()
    $('.content').show()
    $('#addButton').show()
    $('#deleteButton').hide()
    $('#verifyButton').hide()
    $('#updateButton').hide()
    $('.viewTab').hide()
}
const verifyTab = function () {
    $('.searchBar').show()
    $('#phoneNum').hide()
    $('#officeNum').hide()
    $('.content').hide()
    $('#name').show()
    $('#verifyButton').show()
    $('#addButton').hide()
    $('#deleteButton').hide()
    $('#updateButton').hide()
    $('.viewTab').show()
    $('.viewTab').empty()
}
const updateTab = function () {
    $('.searchBar').show()
    $('.content').show()
    $('#phoneNum').show()
    $('#officeNum').show()
    $('#addButton').hide()
    $('#deleteButton').hide()
    $('#verifyButton').hide()
    $('#updateButton').show()
    $('.viewTab').hide()
}
const deleteTab = function () {
    $('.searchBar').show()
    $('#phoneNum').hide()
    $('#officeNum').hide()
    $('.content').show()
    $('#name').show()
    $('#addButton').hide()
    $('#deleteButton').show()
    $('#verifyButton').hide()
    $('#updateButton').hide()
    $('.viewTab').hide()
}
$('#view').on('click', viewTab)
$('#add').on('click', addTab)
$('#verify').on('click', verifyTab)
$('#update').on('click', updateTab)
$('#delete').on('click', deleteTab)
