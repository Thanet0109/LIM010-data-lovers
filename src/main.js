/* Manejo del DOM */
/* Acá va tu código */
let screenLogin = document.getElementById('botonLogin');
let screenSelectCountry = document.getElementById('screenSelectCountry');
let screencountry = document.getElementById('screencountry');
/*let screenAllIndicatorsPeru = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorPeru = document.getElementById('screenOneIndicatorPeru');
let screenChile = document.getElementById('screenChile');
let screenAllIndicatorsChile = document.getElementById('screenAllIndicatorsChile');
let screenOneIndicatorChile = document.getElementById('screenOneIndicatorChile');
let screenBrasil = document.getElementById('screenBrasil');
let screenAllIndicatorsBrasil = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorBrasil = document.getElementById('screenOneIndicatorBrasil');
let screenMexico = document.getElementById('screenBrasil');
let screenAllIndicatorsMexico = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorMexico = document.getElementById('screenOneIndicatorBrasil');*/

const hideallscreens = () => {
    screenLogin.classList.remove('show');
    screenSelectCountry.classList.remove('show');
    screencountry.classList.remove('show');
    /*screenAllIndicatorsPeru.classList.remove('show');
    screenOneIndicatorPeru.classList.remove('show');
    screenChile.classList.remove('show');
    screenAllIndicatorsChile.classList.remove('show');
    screenOneIndicatorChile.classList.remove('show');
    screenBrasil.classList.remove('show');
    screenAllIndicatorsBrasil.classList.remove('show');
    screenOneIndicatorBrasil.classList.remove('show');
    screenMexico.classList.remove('show');
    screenAllIndicatorsMexico.classList.remove('show');
    screenOneIndicatorMexico.classList.remove('show');*/
    screenLogin.classList.add('hide');
    screenSelectCountry.classList.add('hide');
    screencountry.classList.add('hide');
   /* screenAllIndicatorsPeru.classList.add('hide');
    screenOneIndicatorPeru.classList.add('hide');
    screenChile.classList.add('hide');
    screenAllIndicatorsChile.classList.add('hide');
    screenOneIndicatorChile.classList.add('hide');
    screenBrasil.classList.add('hide');
    screenAllIndicatorsBrasil.classList.add('hide');
    screenOneIndicatorBrasil.classList.add('hide');
    screenMexico.classList.add('hide');
    screenAllIndicatorsMexico.classList.add('hide');
    screenOneIndicatorMexico.classList.add('hide');
*/}
const showscreenLogin = () => {
    hideallscreens();
    screenLogin.classList.add('show');
}

const showscreenSelectCountry = () => {
    hideallscreens();
    screenSelectCountry.classList.add('show');
}

const showscreencountry = () => {
    hideallscreens();
    screencountry.classList.add('show');
}
/*
const showscreenAllIndicatorsPeru = () => {   
    hideallscreens();
    screenAllIndicatorsPeru.classList.add('show');

}
const showscreenOneIndicatorPeru = () => {
    hideallscreens();
    screenOneIndicatorPeru.classList.add('show'); 
}
const showscreenChile = () => {
    hideallscreens();
    screenChile.classList.add('show');
}
const showscreenAllIndicatorsChile = () => {    
    hideallscreens();
    screenAllIndicatorsChile.classList.add('show');

}
const showscreenOneIndicatorChile = () => {
    hideallscreens();
    screenOneIndicatorChile.classList.add('show'); 
}

const showscreenBrasil = () => {
    hideallscreens();
    screenBrasil.classList.add('show');
}
const showscreenAllIndicatorsBrasil = () => {    
    hideallscreens();
    screenAllIndicatorsBrasil.classList.add('show');

}
const showscreenOneIndicatorBrasil = () => {
    hideallscreens();
    screenOneIndicatorBrasil.classList.add('show'); 
}

const showscreenMexico = () => {
    hideallscreens();
    screenMexico.classList.add('show');
}
const showscreenAllIndicatorsMexico = () => {    
    hideallscreens();
    screenAllIndicatorsMexico.classList.add('show');

}
const showscreenOneIndicatorMexico = () => {
    hideallscreens();
    screenOneIndicatorMexico.classList.add('show'); 
}*/

/*Login*/
let EnterLogin = document.getElementById('EnterLogin');
let user = document.getElementById('user');
let password = document.getElementById('password');
let enter = document.getElementById('password');

enter.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("EnterLogin").click();
    }
  });

EnterLogin.addEventListener('click', () => {
    let userresult = user.value;
    let passwordresult = password.value;
    if (userresult === "1" && passwordresult === "1") {
        document.getElementById('body').classList.add('bodySelectCountry');
        document.getElementById('body').classList.remove('bodyLogin');
        document.getElementById('Head').classList.remove('hide');  
        showscreenSelectCountry();
       
    }
    else {
        user.value=""; 
        password.value="";
        document.getElementById('mistakeLogin').innerHTML = "Usuario o contraseña incorrectos";
    }
});

let clickPerú = document.getElementById('peru');
const indicatorsPeru=WORLDBANK.PER.indicators;

clickPerú.addEventListener('click', () => {
    showscreencountry();
    screenSelectCountry.classList.add('show');
    console.log(indicatorsPeru);
    indicatorsPeru.forEach(function(element) {
        console.log(element.indicatorName);
        console.log(element.indicatorCode);
      });
});


const arrwomans=["Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)","Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)","Tasa de población activa, mujeres (% de la población femenina mayor de 15 años) (estimación modelado OIT)","Tasa de participación en la fuerza laboral, mujeres (% de la población femenina mayor de 15 años) (estimación nacional)","Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)","Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)","Tasa de participación en la fuerza laboral, mujeres (% de la población femenina entre 15-64 años) (estimación modelado OIT)","Tasa de participación en la fuerza laboral, mujeres (% de la población femenina entre 15-24 años) (estimación modelado OIT)","Tasa de participación en la fuerza laboral, de 15 a 24 años, mujeres (%) (estimación nacional)","Empleados de servicios, mujeres (% del empleo femenino)","Índice de Capital Humano, femenino, límite inferior (escala de 0 a 1)","Índice de Capital Humano, femenino (escala de 0 a 1)","Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)","Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)","Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)","Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)","Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)","Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)","Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)","Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)","Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)","Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)","Proporción de escaños ocupados por mujeres en los parlamentos nacionales (%)","Educacin terciaria, profesores (% de mujeres)","Inscripción escolar, nivel terciario, mujeres (% bruto)","Nivel de instrucción, al menos escuela terciaria de ciclo corto finalizada, población de más de 25 años, mujeres (%) (acumulativo)","Nivel de instrucción, al menos nivel de maestría o equivalente, población de más de 25 años, mujeres (%) (acumulativo)","Nivel de instrucción, al menos nivel de doctorado o equivalente, población de más de 25 años, mujeres (%) (acumulativo)","Nivel de instrucción, al menos nivel de licenciatura o equivalente, población de más de 25 años, mujeres (%) (acumulativo)","Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria)","Necesidades de anticoncepción insatisfechas (% de mujeres casadas entre 15 y 49 años de edad)","Población, mujeres (% del total)","Población, mujeres","Transición a la escuela secundaria, mujeres (%)","Inscripción escolar, nivel secundario, mujeres (% neto)","Inscripción escolar, nivel secundario, mujeres (% bruto)","Educación de nivel secundario, alumnos en programas vocacionales (% de mujeres)","Educación de nivel secundario, alumnos en programas de educación general (% de mujeres)","Educación de nivel secundario, alumnos (% de mujeres)","Nivel de instrucción, al menos ciclo superior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)","Nivel de instrucción, al menos escuela de nivel posterior a la secundaria completa, población de más de 25 años, mujeres (%) (acumulativo)","Nivel de instrucción, al menos ciclo inferior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)","Tasa de finalización del ciclo inferior de la educación secundaria, mujeres (% del grupo etario pertinente)","Total de inscripciones, nivel primario, mujeres (% neto)","Educación de nivel primario, maestras (% de mujeres)","Proporción de sexos al nacer (mujeres cada 1000 hombres)","Población de 80 años en adelante, mujeres (% de la población femenina)","Población de 75 a 79 años, mujeres (% de la población femenina)","Población de 70 a 74 años, mujeres (% de la población femenina)","Población de 65 años de edad y más, mujeres (% del total)","Población de 65 años de edad y más, mujeres","Población de 65 a 69 años, mujeres (% de la población femenina)","Población de 50 a 64 años, mujeres (% de la población femenina)","Población de 55 a 59 años, mujeres (% de la población femenina)","Población de 50 a 54 años, mujeres (% de la población femenina)","Población de 45 a 49 años, mujeres (% de la población femenina)","Población de 40 a 44 años, mujeres (% de la población femenina)","Población de 35 a 39 años, mujeres (% de la población femenina)","Población de 30 a 34 años, mujeres (% de la población femenina)","Población de 25 a 29 años, mujeres (% de la población femenina)","Población de 20 a 24 años, mujeres (% de la población femenina)","Población entre 15 y 64 años de edad, mujeres (% del total)","Población entre 15 y 64 años de edad, mujeres","Población de 15 a 19 años, mujeres (% de la población femenina)","Población de 10 a 14 años, mujeres (% de la población femenina)","Población de 5 a 9 años, mujeres (% de la población femenina)","Población entre 0 y 14 años de edad, mujeres (% del total)","Población entre 0 y 14 años de edad, mujeres","Población de 0 a 4 años, mujeres (% de la población femenina)","Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)","Repetidores, escuela primaria, mujeres (% de mujeres inscriptas)","Perseverancia en la escuela hasta el último grado del nivel primario, mujeres (% de la cohorte)","Perseverancia en la escuela hasta el quinto grado, mujeres (% de la cohorte)","Alumnos de mayor edad, nivel primario, mujeres (% de matrícula de mujeres)","Tasa neta de ingreso en primer grado, mujeres (% de población en edad escolar oficial)","Inscripción escolar, nivel primario, mujeres (% neto)","Tasa bruta de ingreso en primer grado, mujeres (% del grupo etario correspondiente)","Inscripción escolar, nivel primario, mujeres (% bruto)","Educación de nivel primario, alumnos (% de mujeres)","Nivel de instrucción, al menos escuela primaria completa, población de más de 25 años, mujeres (%) (acumulativo)","Tasa de finalización de la educación de nivel primario, mujeres (% del grupo etario correspondiente)","Inscripción escolar, nivel preprimario, mujeres (% bruto)","Desempleo, mujeres (% de la población activa femenina) (estimación modelado OIT)","Desempleo, mujeres (% de participación femenina en la fuerza laboral) (estimación nacional)","Proporción de jóvenes sin educación, empleo ni capacitación, mujeres (% de la población de mujeres jóvenes)","Personas desempleadas con educación intermedia, mujeres","Personas desempleadas con educación básica, mujeres","Personas desempleadas con educación avanzada, mujeres","Desempleo, mujeres jóvenes (% de la población activa femenina entre 15 y 24 años de edad) (estimación modelado OIT)","Desempleo, mujeres jóvenes (% de participación en la fuerza laboral de mujeres de 15 a 24 años) (estimación nacional)","Población activa, mujeres (% de la población activa total)","Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)","Proporción de mujeres con respecto a varones de jóvenes alfabetizados (% de jóvenes entre 15 y 24 años de edad)","Tasa de alfabetización, mujeres jóvenes (% de mujeres entre 15 y 24 años)","Tiempo necesario para iniciar un negocio, mujeres (días)","Empresas con participación de mujeres en la propiedad (% de empresas)","Porcentaje de empresas con manager mujer (promedio entre empresas que reportan)","Empleados en la industria, mujeres (% del empleo femenino)","Trabajadores asalariados (empleados), mujeres (% del empleo femenino)","Empleo vulnerable, mujeres (% del empleo femenino)","Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)","Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación nacional)","Proporción de mujeres con empleo en puestos gerenciales de nivel superior e intermedio (%)","Independientes, mujeres (% del empleo femenino)","Empleadores, mujeres (% del empleo femenino)","Índice de Capital Humano, femenino, límite superior (escala de 0 a 1)","Relación entre empleo y población, edades entre 15 y 24 años, mujeres (%) (estimación modelado OIT)","Relación entre empleo y población, entre 15 y 24 años, mujeres (%) (estimación nacional)"];
let q=0;
arrwomans.forEach(function(element) {
    let arrwoman=element;
   for(q=0;q<139;q++)
   {
    if(arrwoman===WORLDBANK.PER.indicators[q].indicatorName)
    {
        console.log(WORLDBANK.PER.indicators[q].indicatorCode);
    }
   }
});


const arrtotaly=['Fuerza laboral con educación intermedia (% del total)','Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)','Proporcin de tasas de participacin laboral femenina y masculina (%) (estimación modelado OIT)','Proporción de participación en la fuerza laboral de mujeres y varones (%) (estimación nacional)','Fuerza laboral con educación básica (% del total)','Fuerza laboral con educación avanzada (% del total)','Tasa de participación en la fuerza laboral, total (% del total de la población entre 15-64 años) (estimación modelado OIT)','Tasa de participación en la fuerza laboral de personas entre 15 y 24 años; total (%) (estimación modelado OIT)','Tasa de participación en la fuerza laboral, de 15 a 24 años, total (%) (estimación nacional)','Cobertura de los programas de trabajo y protección social (% de la población)','Incidencia de los beneficios de los programas de trabajo y protección social (SPL) para el quintil más pobre (% del total de beneficios de los SPL)','La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)','Personal de las fuerzas armadas (% del total de la fuerza laboral)','Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)','Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)','Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)','Impuestos laborales y contribuciones (% de ganancias comerciales)','Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)','Desempleo, total de jóvenes (% del total de participación en la fuerza laboral de 15 a 24 años) (estimación nacional)','Incidencia de los beneficios de los programas activos del mercado laboral (ALMP) y los beneficios por desempleo para el quintil más pobre (% del total de beneficios de los ALMP/D)','Empresas que usan bancos para financiar el capital de trabajo (% de empresas)','Flujos oficiales netos de organismos de las Naciones Unidas, Organización Internacional del Trabajo (OIT) (USD a precios actuales)'];
arrtotaly.forEach(function(element) {
    let arrtotal=element;
   for(q=0;q<139;q++)
   {
    if(arrtotal===WORLDBANK.PER.indicators[q].indicatorName)
    {
        console.log(WORLDBANK.PER.indicators[q].indicatorCode);
    }
   }
});

const arrwomen=['Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)','Tasa de participación en la fuerza laboral, varones (% de la población masculina mayor de 15 años) (estimación nacional)','Fuerza laboral con educación básica, varones (% de la fuerza laboral masculina)','Fuerza laboral con educación avanzada, varones (% de la fuerza laboral masculina)','Tasa de participación en la fuerza laboral, hombres (% de la población masculina entre 15-64 años) (estimación modelado OIT)','Tasa de participación en la fuerza laboral, hombres (% de la población masculina entre 15-24 años) (estimación modelado OIT)','Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)','Desempleo, varones (% de participación masculina en la fuerza laboral) (estimación nacional)','Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional) '];
arrwomen.forEach(function(element) {
    let arrmen=element;
   for(q=0;q<139;q++)
   {
    if(arrmen===WORLDBANK.PER.indicators[q].indicatorName)
    {
        console.log(WORLDBANK.PER.indicators[q].indicatorCode);
    }
   }
});

const arrindicatorscodewoman=[ 'SL.TLF.PART.FE.ZS','SL.TLF.INTM.FE.ZS','SL.TLF.CACT.FE.ZS','SL.TLF.BASC.FE.ZS','SL.TLF.ADVN.FE.ZS','SL.TLF.ACTI.FE.ZS','SL.TLF.ACTI.1524.FE.ZS','SL.SRV.EMPL.FE.ZS','HD.HCI.OVRL.LB.FE','HD.HCI.OVRL.FE','SH.ANM.NPRG.ZS','SG.VAW.REFU.ZS','SG.VAW.REAS.ZS','SG.VAW.NEGL.ZS','SG.VAW.GOES.ZS','SG.VAW.BURN.ZS','SG.VAW.ARGU.ZS','SG.JOB.NOPN.EQ','SG.GEN.PARL.ZS','SE.TER.TCHR.FE.ZS','SE.TER.ENRR.FE','SE.SEC.UNER.LO.FE.ZS','SP.UWT.TFRT','SP.POP.TOTL.FE.ZS','SP.POP.TOTL.FE.IN','SE.SEC.PROG.FE.ZS','SE.SEC.NENR.FE','SE.SEC.ENRR.FE','SE.SEC.ENRL.VO.FE.ZS','SE.SEC.ENRL.GC.FE.ZS','SE.SEC.ENRL.FE.ZS','SE.SEC.CMPT.LO.FE.ZS','SE.PRM.TENR.FE','SE.PRM.TCHR.FE.ZS','SP.POP.BRTH.MF','SP.POP.65UP.FE.ZS','SP.POP.65UP.FE.IN','SP.POP.1564.FE.ZS','SP.POP.1564.FE.IN','SP.POP.0014.FE.ZS','SP.POP.0014.FE.IN','SP.M18.2024.FE.ZS','SE.PRM.REPT.FE.ZS','SE.PRM.PRSL.FE.ZS','SE.PRM.PRS5.FE.ZS','SE.PRM.OENR.FE.ZS','SE.PRM.NINT.FE.ZS','SE.PRM.NENR.FE','SE.PRM.GINT.FE.ZS','SE.PRM.ENRR.FE','SE.PRM.ENRL.FE.ZS','SE.PRM.CMPT.FE.ZS','SE.PRE.ENRR.FE','SL.UEM.TOTL.FE.ZS','SL.UEM.TOTL.FE.NE.ZS','SL.UEM.NEET.FE.ZS','SL.UEM.INTM.FE.ZS','SL.UEM.BASC.FE.ZS','SL.UEM.ADVN.FE.ZS','SL.UEM.1524.FE.ZS','SL.TLF.TOTL.FE.ZS','SE.ADT.LITR.FE.ZS','SE.ADT.1524.LT.FM.ZS','SE.ADT.1524.LT.FE.ZS','IC.REG.DURS.FE','IC.FRM.FEMO.ZS','IC.FRM.FEMM.ZS','SL.IND.EMPL.FE.ZS','SL.EMP.WORK.FE.ZS','SL.EMP.VULN.FE.ZS','SL.EMP.TOTL.SP.FE.ZS','SL.EMP.SMGT.FE.ZS','SL.EMP.SELF.FE.ZS','SL.EMP.MPYR.FE.ZS','HD.HCI.OVRL.UB.FE','SL.EMP.1524.SP.FE.ZS'];
arrindicatorscodewoman.forEach(function(element) {
    let arrindicatorscode=element;
   for(q=0;q<139;q++)
   {
    if(arrindicatorscode===WORLDBANK.PER.indicators[q].indicatorCode)
    {
        console.log(WORLDBANK.PER.indicators[q].indicatorName);
    }
   }
});



//const btnSubmit = document.getElementById('btn-submit');
//let btnIndex = document.getElementById('btn-index');
//let btnSearch = document.getElementById('btn-search');
//btnSubmit.addEventListener('click', () => {
  // matrix = worldbank.showResult(searchMutipleCountry(), searchRangeYear(), indicator());
//generaTabla(matrix, 'des');
//  generateSumaryTable(promResult(matrix),searchMutipleCountry())
 
//});
