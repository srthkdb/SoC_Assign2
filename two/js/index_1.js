var data = [['pittal', '1', 'y18'], ['pandu', '2', 'y18'], ['doobie', '3', 'y18'], ['parth', '4', 'y18'], ['nitin', '5', 'y18'], ['dhaandu', '6', 'y18'], ['guntas', '7', 'y18'], ['prayas', '8', 'y18'], ['rane', '9', 'y18']];

function makeTable(data){
  var i = 0;
  var table = document.getElementById("table");
  for(i = 0; i < data.length; i++){
    var tr = table.insertRow(i);
    var cell1 = tr.insertCell(0);
    var cell2 = tr.insertCell(1);
    var cell3 = tr.insertCell(2);
    cell1.innerHTML = data[i][0];
    cell2.innerHTML = data[i][1];
    cell3.innerHTML = data[i][2];
  }
}

makeTable(data);
