/* Graficos */
google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.load('current', { 'packages': ['table'] });
/* Manejo del DOM */
/* Acá va tu código */
const screenLogin = document.getElementById('boton-login');
const screenSelectCountry = document.getElementById('screen-select-country');
const screenpresentationPER = document.getElementById('presentationper');
const screenpresentationCHL = document.getElementById('presentationchl');
const screenpresentationMEX = document.getElementById('presentationmex');
const screenpresentationBRA = document.getElementById('presentationbra');
const screencountry = document.getElementById('screencountry');
const screenchart = document.getElementById('chart');
const screenResult = document.getElementById('screenresult');
const screenNot = document.getElementById('not');
const footer = document.getElementById('footer');
const Screenquienessomos = document.getElementById('quienessomos');
/* Login */
const EnterLogin = document.getElementById('enterlogin');
const user = document.getElementById('user');
const password = document.getElementById('password');
const enter = document.getElementById('password');
/* Seleccionar paises */
const elementUlCountry = document.getElementById('pais');

/* Data de indicadores por pais */
const hideallscreens = () => {
  screenLogin.classList.remove('show');
  screenSelectCountry.classList.remove('show');
  screencountry.classList.remove('show');
  screenchart.classList.remove('show');
  screenpresentationPER.classList.remove('show');
  screenpresentationMEX.classList.remove('show');
  screenpresentationCHL.classList.remove('show');
  screenpresentationBRA.classList.remove('show');
  screenResult.classList.remove('show');
  screenNot.classList.remove('show');
  screenLogin.classList.add('hide');
  screenSelectCountry.classList.add('hide');
  screencountry.classList.add('hide');
  screenchart.classList.add('hide');
  screenpresentationPER.classList.add('hide');
  screenpresentationMEX.classList.add('hide');
  screenpresentationCHL.classList.add('hide');
  screenpresentationBRA.classList.add('hide');
  screenResult.classList.add('hide');
  screenNot.classList.add('hide');
};

const showscreenenterLogin = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
  document.getElementById('body').classList.add('bodySelectCountry');
  document.getElementById('body').classList.remove('body-login');
  document.getElementById('head').classList.remove('hide');
  screenNot.classList.remove('hide');
  screenNot.classList.add('show');
  footer.classList.remove('hide');
  footer.classList.add('show');
};

const showscreenLogin = () => {
  hideallscreens();
  screenLogin.classList.add('show');
};

/* const showscreenSelectCountry = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
}; */

const showscreencountry = () => {
  hideallscreens();
};

const showscreenchart = () => {
  hideallscreens();
  screenchart.classList.add('show');
};

const showscreenempleo = () => {
  screenempleo.classList.add('show');
  screenpresentationPER.classList.remove('show');
  screenpresentationPER.classList.add('hide');
};

const showscreenpresentationPER = () => {
  hideallscreens();
  screenSelectCountry.classList.add('show');
  screenpresentationPER.classList.add('show');
};

const showscreenResult = () => {
  hideallscreens();
  screencountry.classList.add('show');
  screenSelectCountry.classList.add('show');
  screenResult.classList.add('show');
};

enter.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('enterlogin').click();
  }
});
/* LOGIN */
EnterLogin.addEventListener('click', () => {
  let userresult = user.value;
  let passwordresult = password.value;
  if (userresult === '1' && passwordresult === '1') {
    showscreenenterLogin();
  } else {
    user.value = '';
    password.value = '';
    document.getElementById('mistakelogin').innerHTML = 'Usuario o contraseña incorrectos';
  }
});

Screenquienessomos.addEventListener('click', () => {
  showscreenenterLogin();
});

/* Funcion que pinta la lista de indicadores en HTML dinamicamente*/
let paintingList = (data, id) => {
  let string = '';
  data.forEach((elem, indi) => {
    string += `<li id=${elem.indicatorName}><a id=${elem.indicatorCode} href="#">${elem.indicatorName}</a></li>`;
  });
  document.getElementById(id).innerHTML = string;
};

/* Clickear un país y obtener ID, que puede ser 'PER', 'CHL', 'BRA', 'MEX' para obtener sus indicadores */
let pais = '';
let tipoIndicador = '';

document.body.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName !== 'INPUT') {
    if (event.target.tagName === 'LI') {
      if (tipoIndicador !== '') {
        document.getElementById('listsl').innerHTML = '';
        document.getElementById('listhd').innerHTML = '';
        document.getElementById('listsg').innerHTML = '';
        document.getElementById('listse').innerHTML = '';
        document.getElementById('listsp').innerHTML = '';
        document.getElementById('listic').innerHTML = '';
        document.getElementById('listsh').innerHTML = '';
        document.getElementById('listpro').innerHTML = '';
        document.getElementById('listms').innerHTML = '';
      }
      tipoIndicador = '';
      pais = event.target.id;
      pais = pais.toUpperCase();
      hideallscreens();
      document.getElementById('cont').classList.remove('newcont');
      document.getElementById('cont').classList.add('cont');
      if (pais === 'PER') {
        screenpresentationPER.classList.add('show');
      }
      if (pais === 'CHL') {
        screenpresentationCHL.classList.add('show');
      }
      if (pais === 'MEX') {
        screenpresentationMEX.classList.add('show');
      }
      if (pais === 'BRA') {
        screenpresentationBRA.classList.add('show');
      }
      screenSelectCountry.classList.add('show');
      screencountry.classList.add('show');
    } else if (event.target.tagName === 'A') {
      tipoIndicador = event.target.id;
      console.log(tipoIndicador);
    } if (pais !== '') {
      console.log(pais);
      const indicadoresPorPaisyTipo = createdatanew(WORLDBANK, pais, tipoIndicador.toUpperCase());
      console.log(indicadoresPorPaisyTipo);
      if (tipoIndicador.length === 2 || tipoIndicador.length === 3) {
        const idElementoLi = `list${tipoIndicador}`;
        console.log(idElementoLi);
        paintingList(indicadoresPorPaisyTipo, idElementoLi);
      } else if (tipoIndicador.length > 3) {
        console.log(tipoIndicador);
        const idElementoLi = tipoIndicador;
        const dataDeCodigoIndicador = createdatanew(WORLDBANK, pais, idElementoLi);
        const createDataForTablas = dataDeCodigoIndicador[0].data;
        console.log(createDataForTablas);
        const indicatorName = dataDeCodigoIndicador[0].indicatorName;
        console.log(indicatorName);
        const newdata = CreateArray(createDataForTablas);
        console.log(newdata);
        document.getElementById('tabledivorderasc').innerHTML = '';
        document.getElementById('prom').innerHTML = '';
        showscreenResult();
        createGrafic(newdata, indicatorName);
        drawBasic2(dataInGrafic(newdata, newdata[0][0], newdata[newdata.length - 1][0]));
        drawTable(dataInTable(newdata, newdata[0][0], newdata[newdata.length - 1][0]));
        document.getElementById('prom').innerHTML = `El porcentaje promedio es: ${prom(newdata, newdata[0][0], newdata[newdata.length - 1][0])}`;
        /*   document.getElementById('cont').classList.remove('cont');
        document.getElementById('cont').classList.add('newcont');*/
        showscreenResult();
        screenchart.classList.add('show');
      }
    }
  }
});


let createGrafic = (newdata, indicatorName) => {
  document.getElementById('indicatorname').innerHTML = indicatorName;
  let multirange = document.getElementById('multirange');
  multirange.innerHTML = `<div class='multi-range' data-lbound='${newdata[0][0]}' data-ubound='${newdata[newdata.length - 1][0]}' id="rango">
   <hr/>
   <input type='range' id="lbound"  min='${newdata[0][0]}' max='${newdata[newdata.length - 2][0]}' step='1' value='${newdata[0][0]}'
          oninput='this.parentNode.dataset.lbound=this.value'
          />
   <input type='range'  id="ubound"  min='${newdata[1][0]}' max='${newdata[newdata.length - 1][0]}' step='1' value='${newdata[newdata.length - 1][0]}'
          oninput='this.parentNode.dataset.ubound=this.value'
          />
   </div>`;
  const rangoInput = document.getElementById('rango');

  rangoInput.addEventListener('change', (event) => {
    let min;
    let max;
    let lboun = 0;
    let uboun = 0;
    if (event.target.id === 'lbound') {
      lboun++;
      min = event.target.value;
      console.log(min);
    } else {
      uboun++;
      max = event.target.value;
    }

    if (lboun === 0) {
      min = document.getElementById('lbound').value;
    }
    if (uboun === 0) {
      max = document.getElementById('ubound').value;
    }

    if (min > max) {
      let minnew = min;
      min = max;
      max = minnew;
    }
    
    document.getElementById('prom').innerHTML = '';
    document.getElementById('prom').innerHTML = `El porcentaje promedio es: ${prom(newdata, min, max)}`;
    drawBasic2(dataInGrafic(newdata, min, max)); drawTable(dataInTable(newdata, min, max)); drawTableorder(dataInTableOrder(newdata, min, max));
  });
  document.getElementById('cont').classList.remove('cont');
  document.getElementById('cont').classList.add('newcont');
  showscreenResult();
  screenchart.classList.add('show');
  screencountry.classList.add('show');
};

let drawBasic2 = (datafilter) => {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', '% o escala');
  data.addRows(datafilter);

  var options = {
    hAxis: {
      title: 'Año'
    },
    vAxis: {
      title: '% de indicador'
    }
  };

  var chartnormal = new google.visualization.LineChart(document.getElementById('chart'));

  chartnormal.draw(data, options);
};

let drawTable = (datafilter) => {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'año');
  data.addColumn('number', '% indicador');
  data.addRows(datafilter);

  var table = new google.visualization.Table(document.getElementById('tablediv'));

  table.draw(data, {
    showRowNumber: false,
    width: '58%',
    height: '50%'
  });
};


let drawTableorder = (inmatrizorder) => {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'año');
  data.addColumn('number', '% indicador');
  data.addRows(inmatrizorder);

  var table = new google.visualization.Table(document.getElementById('tabledivorderasc'));

  table.draw(data, {
    showRowNumber: false,
    width: '58%',
    height: '50%'
  });
};