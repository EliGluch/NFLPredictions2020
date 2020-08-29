

var ss = SpreadsheetApp.openById("1ypMbd-Ovgu9DK9ZuUAfCloCQ72jtztym-_-e6biBu20");
var sheet = ss.getSheetByName("Questions")
//var sheet = ss.getSheets()[0];

// This represents ALL the data
var range = sheet.getDataRange();
var values = range.getValues();


function createForm() {
  var form = FormApp.create('NFL SEASON 2019');
  
    // Start from 1 because 0 row is Header row
  for (var i = 1; i < values.length; i++) {    
    addQuestion(form, values[i][0],  values[i][1] );
    } 
}


// adds question (no description)
function addQuestion(form, question){
  // Add a text item to a form and require it to be a number within a range.
  var textItem = form.addTextItem().setTitle(question);
  var textValidation = FormApp.createTextValidation()
    .setHelpText('Input was not a number between 1 and 99.')
    .requireNumberBetween(1, 99)
    .build();
  textItem.setValidation(textValidation);
  
}

// Adds a question with a description.    
function addQuestion(form, question, description){
  // Add a text item to a form and require it to be a number within a range.
  var textItem = form.addTextItem().setTitle(question);
  var textValidation = FormApp.createTextValidation()
    .setHelpText('Input was not a number between 1 and 99.')
    .requireNumberBetween(1, 99)
    .build();
  textItem.setValidation(textValidation);
  textItem.setHelpText(description)
  
}

createForm()
