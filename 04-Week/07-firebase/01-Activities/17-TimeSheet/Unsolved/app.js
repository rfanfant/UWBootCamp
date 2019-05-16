
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDIjMxgIFr_utQwxqdH0_rXtVE1UJ7MaSI",
  authDomain: "time-sheet-821f5.firebaseapp.com",
  databaseURL: "https://time-sheet-821f5.firebaseio.com",
  projectId: "time-sheet-821f5",
  storageBucket: "",
  messagingSenderId: "419964532678"
};
firebase.initializeApp(config);

var database = firebase.database();

// =========== VARIABLES ======== //




// ============ FUNCTIONS ========= //



// ============ EVENT LISTENERS ====== //

// event listener for my submit button

$("#add-employee-btn").click(function(event) {

  event.preventDefault();

  // grab the values of the input elements and store them in a variable
  var name = $("#employee-name-input").val();
  var role = $("#role-input").val();
  var date = $("#start-input").val();
  var rate = $("#rate-input").val();

  var employeeObj = { 
    name, role, date, rate
  }

  console.log(employeeObj);

  database.ref().push(employeeObj);
   
})


// firebase event listener for changes to the databse
database.ref().on("value", function(snapshot){
  // console.log('EMPLOYEE OBJECTS: ', snapshot.val());

  var employees = snapshot.val();
  for (const i in employees) {
    console.log("EMPLOYEE OBJ: ", employees[i])
    var { name, role, date, rate } = employees[i];

    var tableRow = $("<tr>")

    var tdName = $("<td>").text(name);
    var tdRate = $("<td>").text(rate);
    var tdDate = $("<td>").text(date);
    var tdRole = $("<td>").text(role);

    var months = moment(date).diff(moment(), "months") * -1
    var tdMonths = $("<td>").text(months)

    var tdBilled = $("<td>").text(months * rate)

    tableRow.append(tdName, tdRole, tdDate, tdMonths ,tdRate, tdBilled);

    $("tbody").append(tableRow);
  }
})