<<<<<<< HEAD
class SolverSudoku {
  constructor(tablero) {
    this.tablero = tablero;
    this.tieneSolucion = false;
    this.soluciones = [];
  }

  // ===== MÉTODO PÚBLICO =====
  resolver() {
    if (!this.esTableroValidoInicial()) {
      throw new Error("El tablero ingresado no es válido");
    }

    this.tieneSolucion = false;
    this.soluciones = [];

    this.resolverBacktracking();

    if (this.soluciones.length > 0) {
      this.tieneSolucion = true;
    }

    return this.tieneSolucion;
  }

  getSoluciones() {
    return this.soluciones;
  }

  // ===== VALIDACIÓN INICIAL =====
  esTableroValidoInicial() {
    for (let fila = 0; fila < this.tablero.getTamañoDelTablero(); fila++) {
      for (let col = 0; col < this.tablero.getTamañoDelTablero(); col++) {
        let valor = this.tablero.getValorCelda(fila, col);
        if (valor !== 0) {
          this.tablero.setValorCelda(fila, col, 0);

          if (!this.esValido(fila, col, valor) || valor < 1 || valor > 9) {
            this.tablero.setValorCelda(fila, col, valor);
            return false;
          }

          this.tablero.setValorCelda(fila, col, valor);
        }
      }
    }
    return true;
  }

  // ===== BACKTRACKING =====
  resolverBacktracking() {
    let celdasVacias = false;

    for (let fil = 0; fil < this.tablero.getTamañoDelTablero(); fil++) {

      if (this.soluciones.length > 100000) return;

      for (let col = 0; col < this.tablero.getTamañoDelTablero(); col++) {
        if (this.tablero.getValorCelda(fil, col) === 0) {
          celdasVacias = true;

          for (let valor = 1; valor <= 9; valor++) {
            if (this.esValido(fil, col, valor)) {
              this.tablero.setValorCelda(fil, col, valor);
              this.resolverBacktracking();
              this.tablero.setValorCelda(fil, col, 0);
            }
          }
          return; // backtrack
        }
      }
    }

    // Si no hay celdas vacías → solución completa
    if (!celdasVacias) {
      let copia = new Tablero();
      this.tablero.copiarTablero(copia);
      this.soluciones.push(copia);
    }
  }

  // ===== VALIDACIÓN =====
  esValido(fil, col, valor) {
    // fila
    for (let c = 0; c < this.tablero.getTamañoDelTablero(); c++) {
      if (this.tablero.getValorCelda(fil, c) === valor) return false;
    }

    // columna
    for (let f = 0; f < this.tablero.getTamañoDelTablero(); f++) {
      if (this.tablero.getValorCelda(f, col) === valor) return false;
    }

    // sector 3x3
    let filaInicio = Math.floor(fil / 3) * 3;
    let colInicio = Math.floor(col / 3) * 3;

    for (let f = filaInicio; f < filaInicio + 3; f++) {
      for (let c = colInicio; c < colInicio + 3; c++) {
        if (this.tablero.getValorCelda(f, c) === valor) return false;
      }
    }

    return true;
  }
}
=======
class SolverSudoku {
  constructor(tablero) {
    this.tablero = tablero;
    this.tieneSolucion = false;
    this.soluciones = [];
  }

  // ===== MÉTODO PÚBLICO =====
  resolver() {
    if (!this.esTableroValidoInicial()) {
      throw new Error("El tablero ingresado no es válido");
    }

    this.tieneSolucion = false;
    this.soluciones = [];

    this.resolverBacktracking();

    if (this.soluciones.length > 0) {
      this.tieneSolucion = true;
    }

    return this.tieneSolucion;
  }

  getSoluciones() {
    return this.soluciones;
  }

  // ===== VALIDACIÓN INICIAL =====
  esTableroValidoInicial() {
    for (let fila = 0; fila < this.tablero.getTamañoDelTablero(); fila++) {
      for (let col = 0; col < this.tablero.getTamañoDelTablero(); col++) {
        let valor = this.tablero.getValorCelda(fila, col);
        if (valor !== 0) {
          this.tablero.setValorCelda(fila, col, 0);

          if (!this.esValido(fila, col, valor) || valor < 1 || valor > 9) {
            this.tablero.setValorCelda(fila, col, valor);
            return false;
          }

          this.tablero.setValorCelda(fila, col, valor);
        }
      }
    }
    return true;
  }

  // ===== BACKTRACKING =====
  resolverBacktracking() {
    let celdasVacias = false;

    for (let fil = 0; fil < this.tablero.getTamañoDelTablero(); fil++) {

      if (this.soluciones.length > 100000) return;

      for (let col = 0; col < this.tablero.getTamañoDelTablero(); col++) {
        if (this.tablero.getValorCelda(fil, col) === 0) {
          celdasVacias = true;

          for (let valor = 1; valor <= 9; valor++) {
            if (this.esValido(fil, col, valor)) {
              this.tablero.setValorCelda(fil, col, valor);
              this.resolverBacktracking();
              this.tablero.setValorCelda(fil, col, 0);
            }
          }
          return; // backtrack
        }
      }
    }

    // Si no hay celdas vacías → solución completa
    if (!celdasVacias) {
      let copia = new Tablero();
      this.tablero.copiarTablero(copia);
      this.soluciones.push(copia);
    }
  }

  // ===== VALIDACIÓN =====
  esValido(fil, col, valor) {
    // fila
    for (let c = 0; c < this.tablero.getTamañoDelTablero(); c++) {
      if (this.tablero.getValorCelda(fil, c) === valor) return false;
    }

    // columna
    for (let f = 0; f < this.tablero.getTamañoDelTablero(); f++) {
      if (this.tablero.getValorCelda(f, col) === valor) return false;
    }

    // sector 3x3
    let filaInicio = Math.floor(fil / 3) * 3;
    let colInicio = Math.floor(col / 3) * 3;

    for (let f = filaInicio; f < filaInicio + 3; f++) {
      for (let c = colInicio; c < colInicio + 3; c++) {
        if (this.tablero.getValorCelda(f, c) === valor) return false;
      }
    }

    return true;
  }
}
>>>>>>> c928f990f4f55d7f2cddd4878d4bb20377e2ee88
