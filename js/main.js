let btnPlanA = document.getElementById("planA");
let btnPlanB = document.getElementById("planB");
let btnPlanC = document.getElementById("planC");
let btnPlanD = document.getElementById("planD");
let detallePlanes = document.getElementById("detallePlanes");
let divPlanes = document.createElement("div");

btnPlanA.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h2 id="detallePlan">Hola</h2>`;
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