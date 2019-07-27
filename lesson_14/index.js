// **4. Как отобразить эти данные используя только обычный html и javascript, без сервера?

let xhr = new XMLHttpRequest();
const tableContainer = document.getElementById('table_currency');
const urlRequest = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

xhr.open('GET', urlRequest, true);
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  
  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    addToPage(xhr.responseText);
  }
}

function addToPage(_data) {
  let _currencyObj = jsonToObj(_data);
  let _addedNode = '<tr>';

  for (let i = 0; i < _currencyObj.length; i++) {
    for (let key in _currencyObj[i]) {
      _addedNode += '<td>' + key + '</td><td>' + _currencyObj[i][key] + '</td>';
    };
    _addedNode += '</tr>';
  };

  tableContainer.innerHTML = _addedNode;
}

function jsonToObj(_data) {
  return JSON.parse(_data);
}