"use strict";

const pips = [];

for (let i = 3; i < 16; i += 0.5) {
  pips.push(i);
}

console.log(pips);

let resultado;
let resultado2;
let resultado3;
let alter;
const btnAction = document.querySelector(".btn-action");
console.log(btnAction);
const solution = document.querySelector(".solution");
const lista = document.querySelector(".lista");
const lista2 = document.querySelector(".lista2");
const lista3 = document.querySelector(".lista3");
const lista4 = document.querySelector(".lista4");
const exRow = document.getElementById("exRow");
const pRisk = document.querySelector(".p-risk");
const rRisk = document.querySelector(".r-risk");
const sRCalc = document.querySelector(".section-r-calc");
const exResult = document.querySelector(".ex-result");
const alternativeHtml = document.querySelector(".alternative");

clean();
btnAction.addEventListener("click", function (e) {
  e.preventDefault();
  const cantidad = document.getElementById("amount").value;
  const pip = document.getElementById("pip").value;
  const clasiInput = document.getElementById("clasi").value;
  pRisk.innerHTML = `Permitted risk: <br/>$${(cantidad * 0.0175).toFixed(
    2
  )} - 1.75%`;
  rRisk.innerHTML = `Recommended risk: <br/>$${(cantidad * 0.015).toFixed(
    2
  )} - 1.5%`;
  sRCalc.classList.remove("hidden");
  exResult.classList.remove("hidden");
  alternativeHtml.classList.remove("hidden");
  if (clasiInput === "A") {
    repeater();
    resultado = (cantidad * 1) / pip / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        resultado > 1 || resultado < 1
          ? resultado.toFixed(2) + " lotes"
          : resultado.toFixed(2) + " lote"
      }<br /><br /> Twin: <br />${
        resultado > 1 || resultado < 1
          ? (resultado / 2).toFixed(2) + " lotes"
          : (resultado / 2).toFixed(2) + " lote"
      }</p>`),
      // othersA(cantidad),
      expectedResult(resultado, pip)
    );
  } else if (clasiInput === "C") {
    repeater();
    resultado = (cantidad * 0.75) / pip / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        resultado > 1 || resultado < 1
          ? resultado.toFixed(2) + " lotes"
          : resultado.toFixed(2) + " lote"
      }<br /><br /> Twin: <br />${
        resultado > 1 || resultado < 1
          ? (resultado / 2).toFixed(2) + " lotes"
          : (resultado / 2).toFixed(2) + " lote"
      }</p>`),
      // othersC(cantidad),
      expectedResult(resultado, pip)
    );
  } else if (clasiInput === "D") {
    repeater();
    resultado = (cantidad * 0.5) / pip / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        resultado > 1 || resultado < 1
          ? resultado.toFixed(2) + " lotes"
          : resultado.toFixed(2) + " lote"
      }<br /><br /> Twin: <br />${
        resultado > 1 || resultado < 1
          ? (resultado / 2).toFixed(2) + " lotes"
          : (resultado / 2).toFixed(2) + " lote"
      }</p>`),
      // othersD(cantidad),
      expectedResult(resultado, pip)
    );
  } else if (clasiInput === "E") {
    repeater();
    resultado = (cantidad * 0.25) / pip / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        resultado > 1 || resultado < 1
          ? resultado.toFixed(2) + " lotes"
          : resultado.toFixed(2) + " lote"
      }</p>`),
      // othersD(cantidad),
      expectedResult(resultado, pip)
    );
  } else if (clasiInput === "B") {
    repeater();
    if (pip > 0.5){
    resultado = parseFloat((cantidad * 0.11) / pip / 1000);
    }else{
    resultado = parseFloat((cantidad * 0.11) / 8.5 / 1000);
    }
    resultado2 = (cantidad * 0.11) / 5 / 1000;
    resultado3 = (cantidad * 0.11) / 2.6 / 1000;
    alter = (cantidad * 0.33) / 6.5 / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        alter > 1 || alter < 1
          ? alter.toFixed(2) + " lotes"
          : alter.toFixed(2) + " lote"
      } <br><span class="span-commissions">Based on 6.5 pips</span></p> `),
      // othersD(cantidad),
      expectedResultBreaks(resultado, resultado2, resultado3)
    );
  } else if (clasiInput === "B2") {
    repeater();
    resultado = (cantidad * 0.166) / 8.5 / 1000;
    resultado2 = (cantidad * 0.166) / 5 / 1000;
    resultado3 = (cantidad * 0.166) / 2.6 / 1000;
    alter = (cantidad * 0.5) / 6.5 / 1000;
    exRow.classList.remove("hidden");
    return (
      (solution.innerHTML = `<p class="result-p">Usa: <br />${
        alter > 1 || alter < 1
          ? alter.toFixed(2) + " lotes"
          : alter.toFixed(2) + " lote"
      } <br><span class="span-commissions">Based on 6.5 pips</span></p> `),
      // othersD(cantidad),
      expectedResultBreaks(resultado, resultado2, resultado3)
    );
  } else if (clasiInput === "E+") {
    repeater();
    resultado = (cantidad * 0.32) / pip / 1000;
    // exRow.classList.remove("hidden");
    exRow.style = "opacity:0;";
    solution.style = "display: inline-block;";
    return (solution.innerHTML = `<p class="result-p">Usa: <br />${
      resultado > 1 || resultado < 1
        ? resultado.toFixed(2) + " lotes"
        : resultado.toFixed(2) + " lote"
    } <br /><br />Twin: <br />${
      resultado > 1 || resultado < 1
        ? (resultado / 2).toFixed(2) + " lotes"
        : (resultado / 2).toFixed(2) + " lote"
    } </p>`);
    // othersD(cantidad),
    // expectedResult(resultado, pip)
  } else {
    return `El caracter ${clasiInput} no esta disponible`;
  }
});

console.log(exRow);

// function othersA(cantidad) {
//   for (let i = 0; i < pips.length; i++) {
//     let resulti = (cantidad * 1) / pips[i] / 1000;
//     let resulti2 = (cantidad * 0.75) / pips[i] / 1000;
//     let resulti3 = (cantidad * 0.5) / pips[i] / 1000;
//     let resulti4 = (cantidad * 0.25) / pips[i] / 1000;
//     lista.innerHTML += `<li><span>${pips[i]}</span> ${resulti.toFixed(2)}</li>`;
//     lista2.innerHTML += `<li><span>${pips[i]}</span> ${resulti2.toFixed(
//       2
//     )}</li>`;
//     lista3.innerHTML += `<li><span>${pips[i]}</span> ${resulti3.toFixed(
//       2
//     )}</li>`;
//     lista4.innerHTML += `<li><span>${pips[i]}</span> ${resulti4.toFixed(
//       2
//     )}</li>`;
//   }
// }
// function othersC(cantidad) {
//   for (let i = 0; i < pips.length; i++) {
//     let resulti2 = (cantidad * 0.75) / pips[i] / 1000;
//     let resulti3 = (cantidad * 0.5) / pips[i] / 1000;
//     let resulti4 = (cantidad * 0.25) / pips[i] / 1000;
//     lista2.innerHTML += `<li><span>${pips[i]}</span> ${resulti2.toFixed(
//       2
//     )}</li>`;
//     lista3.innerHTML += `<li><span>${pips[i]}</span> ${resulti3.toFixed(
//       2
//     )}</li>`;
//     lista4.innerHTML += `<li><span>${pips[i]}</span> ${resulti4.toFixed(
//       2
//     )}</li>`;
//   }
// }
// function othersD(cantidad) {
//   for (let i = 0; i < pips.length; i++) {
//     let resulti3 = (cantidad * 0.5) / pips[i] / 1000;
//     let resulti4 = (cantidad * 0.25) / pips[i] / 1000;

//     lista3.innerHTML += `<li><span>${pips[i]}</span> ${resulti3.toFixed(
//       2
//     )}</li>`;
//     lista4.innerHTML += `<li><span>${pips[i]}</span> ${resulti4.toFixed(
//       2
//     )}</li>`;
//   }
// }

function expectedResult(resultado, pip) {
  const result = resultado * 400;
  const result2 = resultado * pip * 10;
  const alternative = resultado * 0.33;
  const alternative2 = resultado * 0.66;

  alternativeHtml.innerHTML = `
  <p class="AP">Alternative Approach</p>
  <li class="alt-li"><p>Favorable Twin Trade</p>  <p>${alternative.toFixed(
    2
  )} & ${alternative2.toFixed(2)}</p></li>
  <li class="alt-li"><p>Regular Twin Trade</p> <p>${(resultado / 2).toFixed(
    2
  )} & ${(resultado / 2).toFixed(2)}</p></li>

  `;

  exResult.innerHTML = `

  <li>$${result.toFixed(2)}+</li>
  or
  <li>-$${result2.toFixed(2)}</li>
  <span class="span-commissions">Results are without commissions</span>
  `;
}


function expectedResultBreaks(resultado, resultado2, resultado3) {
  const result = (resultado * 3)*300;
  const result2 = (resultado * 3) * 85;
  const re1 = resultado;
  const re2 = resultado2;
  const re3 = resultado3;

  alternativeHtml.innerHTML = `
  <p class="AP">Alternative Approach</p>
  <li class="alt-li"><p>Favorable Triada (8.5, 5 & 2.6)</p>  <p>${re1.toFixed(
    2
  )} & ${re2.toFixed(2)} & ${re3.toFixed(2)}</p></li>


  <li class="alt-li"><p>Favorable Twin (5 & 2.6)</p> <p>${(re2 * 1.5).toFixed(
    2
  )} & ${(re3*1.5).toFixed(2)}</p></li>

  `;

  exResult.innerHTML = `

  <li>$${result.toFixed(2)}+</li>
  or
  <li>-$${result2.toFixed(2)}</li>
  <span class="span-commissions">Results are without commissions</span>
  `;
}

const btnClean = document.querySelector(".btn-clean");

function clean() {
  const cantidad = (document.getElementById("amount").value = "");
  const pip = (document.getElementById("pip").value = "");
  const clasiInput = (document.getElementById("clasi").value = "");
  solution.textContent = "";

  exResult.textContent = "";
  alternativeHtml.textContent = "";
  exRow.classList.add("hidden");
  exRow.style = "opacity: 0"
  sRCalc.classList.add("hidden");
  exResult.classList.add("hidden");
  alternativeHtml.classList.add("hidden");
}

function repeater() {
  solution.textContent = "";
  exRow.style = "opacity: 1";
  exResult.textContent = "";
  alternativeHtml.textContent = "";
}

btnClean.addEventListener("click", clean);

/* REENTRIES PART*/

// MODAL PART
const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".btn-modal");
const overlay = document.querySelector(".overlay");
let solutionModal = document.querySelector(".solution-modal");
console.log(solutionModal);
console.log(showModal);
console.log(closeModal);

showModal.addEventListener("click", openModal);
overlay.addEventListener("click", hideModal);
closeModal.addEventListener("click", hideModal);

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
// let prueba = "prueba";
// solutionModal.innerHTML = `<p>Hola ${prueba}</p>`;
/*Calculos*/
limpiarModal();
btnModal.addEventListener("click", function (e) {
  e.preventDefault();
  const amountModal = Number(document.getElementById("amount-modal").value);
  const won = Number(document.getElementById("won").value);
  const pipsModal = document.getElementById("pips-modal").value;
  const resulModal = amountModal + won;
  const calcLotD = (amountModal * 0.5) / pipsModal / 1000;
  const calcLotC = (amountModal * 0.75) / pipsModal / 1000;
  const percentage = (won / amountModal) * 100;
  const calcLot = (won * 80) / pipsModal / 1000;
  const calcWD = function (amou) {
    return won - amou;
  };
  // const rTotal = function (amou) {
  //   return resulModal - amou;
  // };

  if (percentage >= 10) {
    return (solutionModal.innerHTML = `<p class="uso3">Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, por lo que sugerimos mantener y no tradear mas, felicidades! es un buen avance, recuerde siempre pensar en base a una serie de trades y no apuntar a uno solo</p><p class="useModal">Usa: <br/> <span class="uso">${(
      calcLot * 0.06
    ).toFixed(2)} y ${(calcLot * 0.06).toFixed(
      2
    )}</span><br> </p><p><span class="uso2">en caso de que decida continuar</span></p>
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.12
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 5) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, por lo que sugerimos mantener y no tradear mas, felicidades! es un buen avance, recuerde siempre pensar en base a una serie de trades y no apuntar a uno solo</p><p class="useModal">Usa: <br/> <span class="uso">${(
      calcLot * 0.14
    ).toFixed(2)} </span><br/>o 2 de estas<br/><span class ="uso">${(
      calcLot * 0.07
    ).toFixed(2)}
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.14
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 4) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, por lo que sugerimos mantener y no tradear mas, felicidades! es un buen avance, recuerde siempre pensar en base a una serie de trades y no apuntar a uno solo</p><p class="useModal">Usa: <br/> <span class="uso">${(
      calcLot * 0.14
    ).toFixed(2)} y ${(calcLot * 0.14).toFixed(
      2
    )} </span><br/>o<br/><span class ="uso">${(calcLot * 0.28).toFixed(
      2
    )}<div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.28
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 3) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, felicidades! es un buen avance, aqui tiene lo que podra usar, elija la que usted guste</p><p class="useModal">Usa:<br/> <span class="uso">${(
      calcLot * 0.22
    ).toFixed(2)} y ${(calcLot * 0.22).toFixed(
      2
    )}</span> <br /> or <span class="uso">${(calcLot * 0.32).toFixed(2)} y ${(
      calcLot * 0.12
    ).toFixed(2)}</p><br/>
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.44
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 2) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, felicidades! es un buen avance, aqui tiene lo que podra usar, elija la que usted guste</p><p class="useModal">Usa:<br/> <span class="uso">${(
      calcLot * 0.33
    ).toFixed(2)} y ${(calcLot * 0.33).toFixed(
      2
    )}</span> <br /> or <span class="uso">${(calcLot * 0.53).toFixed(2)} y ${(
      calcLot * 0.13
    ).toFixed(2)}</p><br/>
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.66
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 1) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, aqui tiene lo que podra usar, elija la que usted guste</p><p class="useModal">Usa:<br/> <span class="uso">${(
      calcLot * 0.4
    ).toFixed(2)} y ${(calcLot * 0.4).toFixed(
      2
    )}</span> <br /> or <span class="uso">${(calcLot * 0.6).toFixed(2)} y ${(
      calcLot * 0.2
    ).toFixed(2)}</p><br/>
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 0.8
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 0.5) {
    return (solutionModal.innerHTML = `<p>Tu cuenta esta actualmente en ${resulModal}</p><p>Jugador ha ganado un procentaje de ${percentage.toFixed(
      2
    )}, aqui tiene lo que podra usar, elija la que usted guste</p><p class="useModal">Usa:<br/> <span class="uso">${(
      calcLot * 0.7
    ).toFixed(2)} y ${(calcLot * 0.7).toFixed(
      2
    )}</span> <br /> or <span class="uso">${calcLot.toFixed(2)} y ${(
      calcLot * 0.4
    ).toFixed(2)}</p><br/>
    <div class="ex-resul">
    <p class="b-total">En ganancias no debe descender de: ${calcWD(
      won * 0.8 * 1.4
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= 0) {
    return (solutionModal.innerHTML = `<p>Jugador ha ganado ${won} por lo que se habilita jugar con 1.5% de la cuenta, tomando en cuenta que ha jugado antes</p><p class="useModal">Usa: <br/>3 de estas <span class="uso">${calcLotD.toFixed(
      2
    )}</span> <br> o <br>2 de estas <span class="uso">${calcLotC.toFixed(
      2
    )}</span></p><p><span class="uso2">Sientase libre de usar la seccion de entradas normales para un mejor panorama. Solo recuerde el porcentaje maximo con el que puede jugar</span></p>`);
  } else if (percentage >= -0.5) {
    return (solutionModal.innerHTML = `Nadie quiere perder, pero los buenos traders saben que es parte del juego 🙃 tienes un ${percentage.toFixed(
      2
    )} porciento, aun puedes usar 2 de estas: <p class="useModal">${calcLotD.toFixed(
      2
    )}</p><p class="uso2">No mas eh!!</p>
    <div class="ex-resul">
    <p>En su historial diario no debe descender de: ${calcWD(
      amountModal * 0.01
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage >= -1.25) {
    return (solutionModal.innerHTML = `Nadie quiere perder, pero los buenos traders saben que es parte del juego 🙃 tienes un ${percentage.toFixed(
      2
    )} porciento, aun puedes usar 1 de estas: <p class="useModal">${calcLotD.toFixed(
      2
    )}</p><p class="uso2">No mas eh!!</p>
    <div class="ex-resul">
    <p>En su historial diario no debe descender de: ${calcWD(
      amountModal * 0.005
    ).toFixed(2)}</p>
    </div>`);
  } else if (percentage < -1.25) {
    return (solutionModal.innerHTML = `Vuelva a casa jugador 🫶, descanse y vuelva otro día, un día de juego malo, no define el siguiente, preparece para las siguientes ordas enemigas!`);
  } else {
    return (solutionModal.innerHTML =
      "Jugador, que esta haciendo? por favor introduzca algo válido, evite usar letras o caracteres especiales");
  }
});

function limpiarModal() {
  const amountModal = (document.getElementById("amount-modal").value = "");
  const won = (document.getElementById("won").value = "");
  const pipsModal = (document.getElementById("pips-modal").value = "");
  solutionModal.innerHTML = "";
}

// const rTotalD = amountModal - amountModal * 0.005 + won;
// const rTotalC = amountModal - amountModal * 0.01 + won;
// const rTotalT = won - amountModal * 0.005;
// const rTotal = resulModal - won * 0.8 * 0.12;
// const rTotal5 = resulModal - won * 0.8 * 0.14;
// const rTotal4 = resulModal - won * 0.8 * 0.28;
// const rTotal3 = resulModal - won * 0.8 * 0.44;
// const rTotal2 = resulModal - won * 0.8 * 0.66;
// const rTotal1 = resulModal - won * 0.8 * 0.8;
// const rTotal05 = resulModal - won * 0.8 * 1.4;
// console.log(calcWD(won * 0.8 * 0.12));
// console.log(percentage);
// console.log(resulModal);
// console.log(calcLot);
// console.log(solutionModal);
