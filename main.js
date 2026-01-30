// ===== VARIABLES GLOBALES =====
const tableroDiv = document.getElementById("tablero");
let inputs = [];
let tableroActual = null;

// ===== CREA TABLERO VISUAL =====
function crearTableroVisual() {
  tableroDiv.innerHTML = "";
  inputs = [];

  for (let i = 0; i < 81; i++) {
    const input = document.createElement("input");
    input.maxLength = 1;

    input.oninput = () => {
      input.value = input.value.replace(/[^1-9]/g, "");
    };

    tableroDiv.appendChild(input);
    inputs.push(input);
  }
}

// ===== HTML → TABLERO =====
function cargarTableroDesdeHTML() {
  tableroActual = new Tablero();

  inputs.forEach((input, i) => {
    const fila = Math.floor(i / 9);
    const col = i % 9;
    const valor = input.value ? parseInt(input.value) : 0;
    tableroActual.setValorCelda(fila, col, valor);
  });
}

// ===== TABLERO → HTML =====
function mostrarTablero(tablero) {
  inputs.forEach((input, i) => {
    const fila = Math.floor(i / 9);
    const col = i % 9;
    const valor = tablero.getValorCelda(fila, col);
    input.value = valor === 0 ? "" : valor;
  });
}

// ===== BOTÓN RESOLVER =====
function resolver() {
  try {
    cargarTableroDesdeHTML();

    const solver = new SolverSudoku(tableroActual);

    if (solver.resolver()) {
      const solucion = solver.getSoluciones()[0];
      mostrarTablero(solucion);
    } else {
      alert("No tiene solución");
    }

  } catch (e) {
    alert(e.message);
  }
}

function generarDesdeMenu() {
  const cant = parseInt(document.getElementById("cantidad").value);

  if (cant < 0 || cant > 81) {
    alert("Cantidad inválida");
    return;
  }

  document.getElementById("menu").style.display = "none";
  document.getElementById("juego").style.display = "block";

  iniciarJuego(cant);
}

// ===== BOTÓN NUEVO =====
function nuevo() {
  let cantidad = prompt("¿Cuántos números querés en el Sudoku? (0–81)");

  if (cantidad === null) return; // canceló

  cantidad = parseInt(cantidad);

  if (isNaN(cantidad) || cantidad < 0 || cantidad > 81) {
    alert("Cantidad inválida (0–81)");
    return;
  }

  tableroActual = new Tablero();
  tableroActual.randomizar(cantidad);
  mostrarTablero(tableroActual);
}


function iniciarJuego(cantidad) {
  tableroActual = new Tablero();

  if (cantidad > 0) {
    tableroActual.generarCompleto();
    tableroActual.eliminarNumeros(81 - cantidad);
  }

  crearTableroVisual();
  mostrarTablero(tableroActual);
}



// ===== INICIALIZACIÓN =====
crearTableroVisual();

