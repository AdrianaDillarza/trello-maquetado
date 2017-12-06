var contAddList = document.getElementById("cont-addlist");
var contList = document.getElementById("cont-list");
var list = document.getElementById("list");

/*Creacion de evento para agregar Lista*/
list.addEventListener("click", openList);
function openList(event) {

  document.getElementById("list").style.display = "none";
  var formList = document.createElement("div");
  formList.setAttribute("id","formbox");
  formList.classList.add("form");
  contAddList.appendChild(formList);
  var newList = document.createElement("input");
  newList.setAttribute("placeholder", "Añadir una lista...");
  newList.setAttribute("id","newList");
/*Boton de Guardar lista*/
  var btnSave = document.createElement("button");
  btnSave.classList.add("btnSave");
  btnSave.setAttribute("id","save");

/*Boton de cerrar lista*/
  var close = document.createElement("i");
  close.setAttribute("class", "fa fa-times");
  close.addEventListener("click", closeList);

/*Evento cuando se cierra*/
  function closeList(event) {
    contAddList.removeChild(formList);
    contAddList.appendChild(list);
    document.getElementById("list").style.display = "inline-block"; //aparece la ventana
  }

  formList.appendChild(newList);
  formList.appendChild(btnSave);
  formList.appendChild(close);
  btnSave.textContent = "Guardar";
  //contAddList.removeChild(list);
  newList.focus();
  btnSave.addEventListener("click", saveInf);

  /*Versión 0.0.2*/

  function saveInf(event) {
    /*var valid = document.getElementsByTagName("input")[1].value;
    if(valid=== "" || valid === " "){
      document.getElementById("save").disabled = true;
    } else{*/
    var title = newList.value;
    var listDiv = document.createElement("div");
    var text = document.createElement("div");
    var activity = document.createElement("div");
    listDiv.classList.add("listDiv");
    activity.classList.add("activity");
    text.classList.add("title");
    text.innerText = title;
    activity.innerHTML = "Añadir una tarea...";
    listDiv.appendChild(text);
    listDiv.appendChild(activity);
    contList.appendChild(listDiv);
    newList.value= "";
    contAddList.appendChild(listDiv);
    activity.addEventListener("click", listWork);

    /*Versión 0.0.3*/

    function listWork(event) {
      var formActivity = document.createElement("div");
      formActivity.classList.add("formActivity");

      var nameActivity = document.createElement("textarea");
      nameActivity.classList.add("nameActivity");

      var saveActivity = document.createElement("button");
      saveActivity.classList.add("saveActivity");
      saveActivity.textContent = "Añadir";

     var close = document.createElement("i");
      close.setAttribute("class", "fa fa-times");
      close.setAttribute("aria-hidden", "true");
      close.addEventListener("click", closeAct);


      function closeAct(event) {
        listDiv.removeChild(formActivity);
        listDiv.appendChild(activity);
      }

      formActivity.appendChild(nameActivity);
      formActivity.appendChild(saveActivity);
      formActivity.appendChild(close);

      listDiv.appendChild(formActivity);
      listDiv.removeChild(activity);

/*Versión 0.0.4.*/

      nameActivity.focus();
      saveActivity.addEventListener("click", saveList);

      function saveList(event) {
        var titleAct = nameActivity.value;
        var addAct = document.createElement("div");
        addAct.classList.add("activity");
        addAct.innerHTML = titleAct;

        listDiv.appendChild(addAct);
        listDiv.insertBefore(addAct,formActivity);
        nameActivity.value = "";
        nameActivity.focus();
       //}
     }
   }
 }
}
