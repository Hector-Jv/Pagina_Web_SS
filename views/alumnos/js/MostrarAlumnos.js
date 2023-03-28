function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "./data/alumnos.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText); // Archivo json

      generarCards(datos);
    }
  };
}

function generarCards(datos) {
  let cardsAlumnos = document.querySelector("#cards-alumnos");
    
  for (let alumno of datos) {
    cardsAlumnos.innerHTML += `
            <div class="card-alumno"> 

                <div class="info-alumno">
                    <img src="./img/alumno1.jpg" alt="foto alumno">
                    <p>${alumno.nombre}</p>
                </div>

                <div class="trabajos-alumno">
                    
                    <table>
                        <thead>
                            <th>Nombre del trabajo</th>
                            <th>Lugar</th>
                            <th>Fecha</th>
                            <th>Link</th>
                        </thead>
                        <tbody id="res${alumno.id}">
                        
                        </tbody>

                    </table>
                    
                    <div class="contenedor-ntnAgregar">
                        <button id="btn-agregar">Añadir</p>
                    </div>
                </div>

            </div>
        `;
    trabajosAlumno(alumno);
  }
}

function trabajosAlumno(alumno) {
  let etiqueta = `#res${alumno.id}`;
  let trabajosAlumno = document.querySelector(etiqueta);

    for(let trabajo of alumno.trabajos){
        trabajosAlumno.innerHTML += `
            <tr>
                <td>${trabajo.titulo}</td>
                <td>${trabajo.lugar}</td>
                <td>${trabajo.fecha}</td>
                <td><a href="#">Ver</a></td>
            </tr>
        `;
    }
}

traerDatos()