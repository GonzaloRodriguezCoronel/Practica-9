import React from "react";
import "aframe";

function App() {
  return (
    <a-scene>
      {/* Fondo 360 */}
      <a-sky src="/imagen2.jpg"></a-sky>

      {/* Usuario */}
      <a-text
        value="Usuario"
        color="#e28409ff"
        position="-4 1.5 -3"
        align="center"
        width="5"
      ></a-text>

      {/* Contraseña */}
      <a-text
        value="Contrasena"
        color="#d49d06ff"
        position="0 1.5 -3"
        align="center"
        width="5"
      ></a-text>

      {/* Botón Iniciar Sesión */}
      <a-text
        value="Iniciar Sesion"
        color="#bfc209ff"
        position="4 1.5 -3"
        align="center"
        width="5"
      ></a-text>

      <button type="submit">Entrar</button>
    </a-scene>
  );
}

export default App;