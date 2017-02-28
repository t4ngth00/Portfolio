$( document ).ready(function() {

  var storedNames = JSON.parse(localStorage.getItem("names"));
  if (storedNames === null)
  {
    console.log("There is nothing in the list!");
  } else {
    for (i = 0; i < storedNames.length; i++) {
      InsertName(storedNames[i]);
    }
  }

  function InsertName(data) {
    $("#resultBox").append("<p>"+ data +"</p>");
  }

  $( "#btn" ).click(function() {
    var PersonNameInput = $("#input").val(); console.log("Added name: " + PersonNameInput);
    var personlist = JSON.parse(localStorage.getItem("names")); console.log("Previous names list: " + personlist)
    if (personlist === null)
    {
      var personlist = [];
      InsertName(PersonNameInput);
    } else {
      InsertName(PersonNameInput);
    }
    personlist.push(PersonNameInput); console.log("Current names list: " + personlist);
    localStorage.setItem("names", JSON.stringify(personlist));
  });

  $( "#btn2" ).click(function() {
    localStorage.removeItem("names");
    location.reload();
  });

});
