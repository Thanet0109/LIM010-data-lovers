
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
  if (string === 'PRO') {
    let arrIndicatorsByType = arrData.filter(dataind => (dataind.indicatorCode.startsWith('per') === true));
    return arrIndicatorsByType;
  } else {
    let arrIndicatorsByType = arrData.filter(dataind => (dataind.indicatorCode.startsWith(string) === true));
    return arrIndicatorsByType;
  }
};

const CreateArray = (data1) => {
  let matrizIndicator = new Array(Object.entries(data1));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach((ele, ind) => {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
  });
  let datanew = inmatriz.filter(dataind => isNaN(dataind[1]) === false);
  console.log(datanew);
  return datanew;
};

const dataInGrafic = (data1, min, max) => {
  let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
  console.log(datafilter);
  return datafilter;
};

const dataInTable = (data1, min, max) => {
  let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
  console.log(datafilter);
  return datafilter;
};

const sortfunction = (order1, order2) => {
  if (order1[1] === order2[1]) {
    return 0;
  } else {
    return (order1[1] < order2[1]) ? -1 : 1;
  }
};

const dataInTableOrder = (data1, min, max) => {
  let datafilter = data1.filter(datanew => (datanew[0] >= min && datanew[0] <= max));
  let inmatrizorder = datafilter;
  inmatrizorder.sort(sortfunction);
  return inmatrizorder;
};

const prom = (data1, min, max) => {
  let datafilter = data1.filter(newdata => (newdata[0] >= min && newdata[0] <= max));
  const cant = datafilter.length;
  let sum = 0;
  for (let i = 0; i < cant; i++) {
    sum = sum + datafilter[i][1];
  };
  
  let promedio = (sum / cant) ;
  promedio = promedio.toFixed(2);
  return promedio;
};

window.prom = prom;
window.createdatanew = createdatanew;
window.sortfunction = sortfunction;
window.CreateArray = CreateArray;
window.getIndicatorsForCountry = getIndicatorsForCountry;
window.dataInGrafic = dataInGrafic;
window.dataInTable = dataInTable;
window.dataInTableOrder = dataInTableOrder; 
