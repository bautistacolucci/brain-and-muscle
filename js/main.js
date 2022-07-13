let btnPlanA = document.getElementById("planA");
let btnPlanB = document.getElementById("planB");
let btnPlanC = document.getElementById("planC");
let btnPlanD = document.getElementById("planD");
let detallePlanes = document.getElementById("detallePlanes");
let divPlanes = document.createElement("div");

btnPlanA.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h3>Plan A</h3>
    <p>Ideal para quien desea generar un cambio grande pero no sabe como hacerlo, nos encargamos de planificar la
      alimentacion diaria, rutina, y realizamos calculo de grasa corporal mediante plicometria para lograr una mayor
      precision en los resultados</p>
    <div class="items">
      <p>Dieta cerrada</p> <span></span>
      <p>Mesociclo</p> <span></span>
      <p>Plicometria</p>
    </div>
    <a href="contact.html" class="button"> Contactar </a>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanB.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h2 id="detallePlan">Hola</h2>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanC.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h2 id="detallePlan">Hola</h2>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanD.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h2 id="detallePlan">Hola</h2>`;
    detallePlanes.appendChild(divPlanes);
});