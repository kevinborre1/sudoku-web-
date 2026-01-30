<<<<<<< HEAD
class Tablero {
  constructor() {
    this.tablero = Array.from({ length: 9 }, () =>
      Array(9).fill(0)
    );
  }

  randomizar(cantPistas) {
    if (cantPistas < 0 || cantPistas > 81) {
      throw new Error(`${cantPistas} : cantidad de pistas inválida (0-81)`);
    }

    this.vaciarTablero();

    const solver = new SolverSudoku(this);
    solver.resolver();

    if (!solver.getSoluciones() || solver.getSoluciones().length <= 0) {
      throw new Error("No hay soluciones disponibles para randomizar el tablero");
    }

    const indice = Math.floor(Math.random() * solver.getSoluciones().length);
    solver.getSoluciones()[indice].copiarTablero(this);

    const totalCeldas = 81;
    const aBorrar = totalCeldas - cantPistas;

    let indices = Array.from({ length: totalCeldas }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    for (let j = 0; j < aBorrar; j++) {
      const idx = indices[j];
      const fila = Math.floor(idx / 9);
      const columna = idx % 9;
      this.setValorCelda(fila, columna, 0);
    }
  }

  numeroValidoParaFila(fila, numero) {
    this._numeroValido(numero);
    this._indiceValido(fila);

    for (let c = 0; c < 9; c++) {
      if (numero === this.numeroEnCelda(fila, c)) return false;
    }
    return true;
  }

  numeroValidoParaColumna(columna, numero) {
    this._numeroValido(numero);
    this._indiceValido(columna);

    for (let f = 0; f < 9; f++) {
      if (numero === this.numeroEnCelda(f, columna)) return false;
    }
    return true;
  }

  numeroValidoEnSector(fila, columna, numero) {
    this._numeroValido(numero);
    this._indiceValido(fila);
    this._indiceValido(columna);

    for (
      let f = this.comienzoDeSector(fila);
      f <= this.finalDeSector(fila);
      f++
    ) {
      for (
        let c = this.comienzoDeSector(columna);
        c <= this.finalDeSector(columna);
        c++
      ) {
        if (numero === this.numeroEnCelda(f, c)) return false;
      }
    }
    return true;
  }

  copiarTablero(otroTablero) {
    for (let f = 0; f < 9; f++) {
      for (let c = 0; c < 9; c++) {
        otroTablero.setValorCelda(f, c, this.getValorCelda(f, c));
      }
    }
  }

  vaciarTablero() {
    for (let f = 0; f < 9; f++) {
      for (let c = 0; c < 9; c++) {
        this.setValorCelda(f, c, 0);
      }
    }
  }

  comienzoDeSector(n) {
    return 3 * this.grupoDeTres(n);
  }

  finalDeSector(n) {
    return 3 * this.grupoDeTres(n) + 2;
  }

  grupoDeTres(n) {
    return Math.floor(n / 3);
  }

  _numeroValido(n) {
    if (n < 1 || n > 9)
      throw new Error(`${n} : número inválido (1-9)`);
  }

  _indiceValido(i) {
    if (i < 0 || i > 8)
      throw new Error(`${i} : índice inválido (0-8)`);
  }

  getTamañoDelTablero() {
    return 9;
  }

  setValorCelda(fila, columna, n) {
    this.tablero[fila][columna] = n;
  }

  getValorCelda(fila, columna) {
    return this.tablero[fila][columna];
  }

  numeroEnCelda(fila, columna) {
    return this.tablero[fila][columna];
  }

  generarCompleto() {
  this._generarBacktracking(0, 0);
}

_generarBacktracking(fil, col) {
  if (fil === 9) return true;

  const sigFil = col === 8 ? fil + 1 : fil;
  const sigCol = col === 8 ? 0 : col + 1;

  const numeros = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);

  for (let n of numeros) {
    if (this.esValido(fil, col, n)) {
      this.matriz[fil][col] = n;
      if (this._generarBacktracking(sigFil, sigCol)) return true;
      this.matriz[fil][col] = 0;
    }
  }
  return false;
}
eliminarNumeros(cantidad) {
  let eliminados = 0;

  while (eliminados < cantidad) {
    const f = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);

    if (this.matriz[f][c] !== 0) {
      this.matriz[f][c] = 0;
      eliminados++;
    }
  }
}

}

=======
class Tablero {
  constructor() {
    this.tablero = Array.from({ length: 9 }, () =>
      Array(9).fill(0)
    );
  }

  randomizar(cantPistas) {
    if (cantPistas < 0 || cantPistas > 81) {
      throw new Error(`${cantPistas} : cantidad de pistas inválida (0-81)`);
    }

    this.vaciarTablero();

    const solver = new SolverSudoku(this);
    solver.resolver();

    if (!solver.getSoluciones() || solver.getSoluciones().length <= 0) {
      throw new Error("No hay soluciones disponibles para randomizar el tablero");
    }

    const indice = Math.floor(Math.random() * solver.getSoluciones().length);
    solver.getSoluciones()[indice].copiarTablero(this);

    const totalCeldas = 81;
    const aBorrar = totalCeldas - cantPistas;

    let indices = Array.from({ length: totalCeldas }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    for (let j = 0; j < aBorrar; j++) {
      const idx = indices[j];
      const fila = Math.floor(idx / 9);
      const columna = idx % 9;
      this.setValorCelda(fila, columna, 0);
    }
  }

  numeroValidoParaFila(fila, numero) {
    this._numeroValido(numero);
    this._indiceValido(fila);

    for (let c = 0; c < 9; c++) {
      if (numero === this.numeroEnCelda(fila, c)) return false;
    }
    return true;
  }

  numeroValidoParaColumna(columna, numero) {
    this._numeroValido(numero);
    this._indiceValido(columna);

    for (let f = 0; f < 9; f++) {
      if (numero === this.numeroEnCelda(f, columna)) return false;
    }
    return true;
  }

  numeroValidoEnSector(fila, columna, numero) {
    this._numeroValido(numero);
    this._indiceValido(fila);
    this._indiceValido(columna);

    for (
      let f = this.comienzoDeSector(fila);
      f <= this.finalDeSector(fila);
      f++
    ) {
      for (
        let c = this.comienzoDeSector(columna);
        c <= this.finalDeSector(columna);
        c++
      ) {
        if (numero === this.numeroEnCelda(f, c)) return false;
      }
    }
    return true;
  }

  copiarTablero(otroTablero) {
    for (let f = 0; f < 9; f++) {
      for (let c = 0; c < 9; c++) {
        otroTablero.setValorCelda(f, c, this.getValorCelda(f, c));
      }
    }
  }

  vaciarTablero() {
    for (let f = 0; f < 9; f++) {
      for (let c = 0; c < 9; c++) {
        this.setValorCelda(f, c, 0);
      }
    }
  }

  comienzoDeSector(n) {
    return 3 * this.grupoDeTres(n);
  }

  finalDeSector(n) {
    return 3 * this.grupoDeTres(n) + 2;
  }

  grupoDeTres(n) {
    return Math.floor(n / 3);
  }

  _numeroValido(n) {
    if (n < 1 || n > 9)
      throw new Error(`${n} : número inválido (1-9)`);
  }

  _indiceValido(i) {
    if (i < 0 || i > 8)
      throw new Error(`${i} : índice inválido (0-8)`);
  }

  getTamañoDelTablero() {
    return 9;
  }

  setValorCelda(fila, columna, n) {
    this.tablero[fila][columna] = n;
  }

  getValorCelda(fila, columna) {
    return this.tablero[fila][columna];
  }

  numeroEnCelda(fila, columna) {
    return this.tablero[fila][columna];
  }

  generarCompleto() {
  this._generarBacktracking(0, 0);
}

_generarBacktracking(fil, col) {
  if (fil === 9) return true;

  const sigFil = col === 8 ? fil + 1 : fil;
  const sigCol = col === 8 ? 0 : col + 1;

  const numeros = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);

  for (let n of numeros) {
    if (this.esValido(fil, col, n)) {
      this.matriz[fil][col] = n;
      if (this._generarBacktracking(sigFil, sigCol)) return true;
      this.matriz[fil][col] = 0;
    }
  }
  return false;
}
eliminarNumeros(cantidad) {
  let eliminados = 0;

  while (eliminados < cantidad) {
    const f = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);

    if (this.matriz[f][c] !== 0) {
      this.matriz[f][c] = 0;
      eliminados++;
    }
  }
}

}

>>>>>>> c928f990f4f55d7f2cddd4878d4bb20377e2ee88
