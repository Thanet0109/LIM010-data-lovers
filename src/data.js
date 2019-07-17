google.charts.load('current', { packages: ['corechart', 'line'] });
/*google.charts.setOnLoadCallback(drawBasic);
*/
google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

function drawBasic2(data1,min,max) {
  let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );   
console.log(datafilter);


  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', '% o escala');

  data.addRows(datafilter);

  var options = {
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Indicator'
    }
  };

  var chartnormal = new google.visualization.LineChart(document.getElementById('chart'));

  chartnormal.draw(data, options);
}


function drawTable(data1,min,max) {
 let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );   
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'año');
        data.addColumn('number', 'porcentaje');
        data.addRows(datafilter);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }


function drawTableorder(data1,min,max) {
  let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );
  let inmatrizorder=datafilter;

 let sortfunction=(a,b)=>{
  if(a[1]===b[1]){
    return 0;
  }else {
    return (a[1]<b[1]) ? -1:1;
  }
   };
 inmatrizorder.sort(sortfunction);

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'año');
  data.addColumn('number', 'porcentaje');
  data.addRows(inmatrizorder);
       
  var table = new google.visualization.Table(document.getElementById('table_divorderasc'));
       
  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}






/*function drawBasic1(number) {
  let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[number].data));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach(function (ele, ind) {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
    console.log(number);
  });
 let inmatrizorder=inmatriz;

 let sortfunction=(a,b)=>{
  if(a[1]===b[1]){
    return 0;
  }else {
    return (a[1]<b[1]) ? -1:1;
  }
   };
 inmatrizorder.sort(sortfunction);
 inmatrizorder.forEach(function (ele, ind) {
let save=inmatrizorder[ind][0];
inmatrizorder[ind][0]=inmatrizorder[ind][1];
inmatrizorder[ind][1]=save;
});
 
  var data = new google.visualization.DataTable();
  data.addColumn('number', '% o escala');
  data.addColumn('number', 'X');

  data.addRows(inmatrizorder);

  var options = {
    hAxis: {
      title: 'Indicator'
    },
    vAxis: {
      title: 'Year'
    }
  };

  var chartorder = new google.visualization.LineChart(document.getElementById('orderchart_div'));

  chartorder.draw(data, options);
}

function prom(number){
  let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[number].data));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach(function (ele, ind) {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
  });
  let i=0;
  let sum=0;
  let long=inmatriz.length;
  for (let j=0;j<long;j++){
    if(isNaN(inmatriz[j][1])===false){
    i++;
    sum=sum+inmatriz[j][1];}
   }
let media=sum/i; console.log(sum);console.log(i);console.log(media);
  return media;
}*/
