// declare global variables
var $clickMe = $("#click-me");
var $getOrgTable = $("#get-original-table");
var $getProTable = $("#get-processed-table");
var rowSize = 10;
var colSize = 10;

/* 
Create 2D array that filled with random number
@param {number} rowSize
@param {number} colSize
@return {array} cells - 2D array
 */
function create2dArrRandInt(rowSize, colSize) {
  var cells = [];
  for (var i = 0; i < rowSize; i++) {
    cells.push([]);
    for (var j = 0; j < colSize; j++) {
      cells[i][j] = Math.floor(Math.random() * 99 + 1);
    }
  }
  return cells;
}

/* 
Square each number in a 2D array
@param {array} arrData - 2D array
@return {array} sqrArrResult - 2D array 
*/
function square2dArrNum(arrData) {
  var sqrArrResult = [];
  for (var i = 0; i < arrData.length; i++) {
    var sqrArrUnit = arrData[i].map((x) => Math.pow(x, 2));
    sqrArrResult.push(sqrArrUnit);
  }
  return sqrArrResult;
}

/* 
Make HTML table with 2D array
@param {array} arrValue - 2D array
@return {string} table 
*/
function makeTableHTML(arrValue) {
  var table = document.createElement("table");
  for (var i = 0; i < arrValue.length; i++) {
    var rows = document.createElement("tr");
    for (var j = 0; j < arrValue[i].length; j++) {
      var cols = document.createElement("td");
      cols.appendChild(document.createTextNode(arrValue[i][j]));
      rows.appendChild(cols);
    }
    table.appendChild(rows);
  }
  return table;
}

/* 
Convert table to 2D array
@param {string} tableOne
@return {array} arrayFields - 2D array
*/
function convertTableTo2dArr(tableOne) {
  var arrayFields = [];
  var tableOne = document.querySelector("table");
  var rows = tableOne.children; // get a collection of "tr" elements
  for (var i = 0; i < rows.length; i++) {
    var rowArray = [];
    var cols = rows[i].children; // get a collection of "td" elements
    for (var j = 0; j < cols.length; j++) {
      rowArray.push(cols[j].innerHTML);
    }
    arrayFields.push(rowArray);
  }
  return arrayFields;
}

function lesson8Exe() {
  // Append original table to target div
  var orgTable = makeTableHTML(create2dArrRandInt(rowSize, colSize));
  $getOrgTable.append("<h1>Original Table</h1>");
  $getOrgTable.append(orgTable);

  // Convert the table into a 2D array
  var getTable = $getOrgTable.find("table");
  var extract2dArray = convertTableTo2dArr(getTable);
  console.log(extract2dArray); // The original, unchanged

  // Store the result - Approach 1: - Update and return a new 2D array
  var processed2dArray = square2dArrNum(extract2dArray);
  console.log(processed2dArray); // The processed, changed

  // Store the result - Approach 2: - Update the original 2D array
  var proTable = makeTableHTML(processed2dArray);
  $getProTable.append("<h1>Processed Table</h1>");
  $getProTable.append(proTable);
}

// button click function
$clickMe.click(lesson8Exe);
