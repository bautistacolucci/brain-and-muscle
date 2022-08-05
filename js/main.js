let btnPlanA = document.getElementById("planA");
let btnPlanB = document.getElementById("planB");
let btnPlanC = document.getElementById("planC");
let btnPlanD = document.getElementById("planD");
let detallePlanes = document.getElementById("detallePlanes");
let divPlanes = document.createElement("div");

btnPlanA.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h3>Plan entrenamiento & macros</h3>
    <p>
    Este es bajo mi criterio de los más eficientes de cara a una recomposición corporal y progreso a largo plazo, recolectando lo mejor de los anteriores planes, siendo muy flexible pero al mismo tiempo eficiente, desde las ganancias musculares así como del estrés mental. <br>
    El plan que más recomiendo. 
    </p>
    <div class="items">
      <p>Macros</p> <span></span>
      <p>Mesociclo</p> <span></span>
      <p>Plicometría</p> <span></span>
      <p>Diario de entrenamiento</p>
    </div>
    <a href="contact.html" class="button"> Contactar </a>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanB.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h3>Plan entrenamiento & dieta pautada </h3>
    <p>
    Se pauta un día donde pueda hacerte una plicometria que no es más que medir tu % de grasa corporal y en base a tus necesidades energéticas, tu actividad física y tu meta en particular (como puede ser el buscar bajar % graso o ganancia de masa muscular o en casos muy específicos una recomposición corporal que es un poco de ambos). Con todos los datos se calculan de forma precisa los macronutrientes que tu cuerpo necesita, y en base a esto se realiza una lista de comidas por día con cantidades exactas y demás. Se va a tener en cuenta tus preferencias para que sean comidas de tu agrado pero que se acoplen al objetivo.
    También viene incluído el mesociclo más el diario de entrenamiento y días en concreto para revisión técnica.
    </p> 
    <div class="items">
      <p>Dieta pautada</p> <span></span>
      <p>Mesociclo</p> <span></span>
      <p>Plicometría</p> <span></span>
      <p>Diario de entrenamiento</p>
    </div>
    <a href="contact.html" class="button"> Contactar </a>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanC.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h3>Plan entrenamiento</h3>
    <p>
    En base a tus objetivos y particularidades anatómicas voy a darte un plan de entrenamiento mensual (mesociclo) con una selección de ejercicios especialmente personalizada, con un diario en formato digital para que vayas registrando tus sesiones y que yo las pueda ir viendo a medida que lo vas llenando.
    </p>
    <div class="items">
      <p>Mesociclo</p> <span></span>
      <p>Diario de entrenamiento</p>
    </div>
    <a href="contact.html" class="button"> Contactar </a>`;
    detallePlanes.appendChild(divPlanes);
});
btnPlanD.addEventListener("click", () => {
    detallePlanes.innerHTML = "";
    divPlanes.innerHTML = `<h3>Plan Macros</h3>
    <p>
    En este plan también voy a hacerte una plicometria, pero nos vamos a manejar con macronutrientes (proteínas, grasas y carbohidratos), es decir, yo voy a pasarte cuáles son los macros que necesitas (ej: Proteina:180g, Grasas:70g, Hidratos: 385g) macros con los que llegarías a tus calorías objetivo, vas utilizar una app para registrar tus comidas y donde me vas enviar como vas, yo voy a estar para ayudarte a llegar a tus requerimientos de una forma eficaz y precisa.
    </p>
    <div class="items">
    <p>Macros</p> <span></span>
    <p>Plicometría</p>
    </div>
    <a href="contact.html" class="button"> Contactar </a>`;
    detallePlanes.appendChild(divPlanes);
});