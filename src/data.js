google.charts.load('current', { packages: ['corechart', 'line'] });

google.charts.load('current', { 'packages': ['table'] });

const getIndicatorsForCountry = (data, string) => {
 let arr = [];
 const arrayIndicators = data[string].indicators;
 for (let i = 0; i < arrayIndicators.length; i++) {
 arr.push(arrayIndicators[i]);
 }
 return arr;
};

const createdatanew = (data, pais, string) => {
 const arrData = data[pais].indicators;
 let arrIndicatorsByType = arrData.filter(dataind => (dataind.indicatorCode.startsWith(string) === true));
 return arrIndicatorsByType;
};

const CreateArray = (data1) => {
 let matrizIndicator = new Array(Object.entries(data1));
 let inmatriz = matrizIndicator[0];
 inmatriz.forEach((ele, ind) => {
 inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
 inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
 });
 let datanew = inmatriz.filter(dataind => isNaN(dataind[1]) === false);
 return datanew;
};

let drawBasic2 = (data1, min, max) => { 
 let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
 console.log(datafilter);
 let data = new google.visualization.DataTable();
 data.addColumn('number', 'X');
 data.addColumn('number', '% o escala');

 data.addRows(datafilter);

 let options = {
 hAxis: {
 title: 'Year'
 },
 vAxis: {
 title: 'Indicator'
 }
 };

 let chartnormal = new google.visualization.LineChart(document.getElementById('chart'));

 chartnormal.draw(data, options);
};


let drawTable = (data1, min, max) => {
 let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
 const data = new google.visualization.DataTable();
 data.addColumn('number', 'año');
 data.addColumn('number', 'porcentaje');
 data.addRows(datafilter);

 let table = new google.visualization.Table(document.getElementById('table_div'));

 table.draw(data, {
 showRowNumber: true,
 width: '100%',
 height: '100%'
 });
};


let drawTableorder = (data1, min, max) => {
 let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
 let inmatrizorder = datafilter;

 let sortfunction = (order1, order2) => {
 if (order1[1] === order2[1]) {
 return 0;
 } else {
 return (order1[1] < order2[1]) ? -1 : 1;
 }
 };
 inmatrizorder.sort(sortfunction);

 const data = new google.visualization.DataTable();
 data.addColumn('number', 'año');
 data.addColumn('number', 'porcentaje');
 data.addRows(inmatrizorder);

 const table = new google.visualization.Table(document.getElementById('table_divorderasc'));

 table.draw(data, {
 showRowNumber: true,
 width: '100%',
 height: '100%'
 });
};


window.createdatanew = createdatanew;
window.drawBasic2 = drawBasic2;
window.drawTable = drawTable;
window.drawTableorder = drawTableorder;
window.CreateArray = CreateArray;

