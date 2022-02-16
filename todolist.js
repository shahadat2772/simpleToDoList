document
  .getElementById("addButton")
  .addEventListener("click", function (event) {
    var tableBody = document.getElementById("tBody");
    var description = document.getElementById("textarea");

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = 1;
    td2.innerText = description.value;
    td3.innerHTML = ` <button class="deleteButton btn">DELETE</button> 
     <button class="btn button">DONE</button>`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tableBody.appendChild(tr);
    description.value = "";
  });
var tBody = document.getElementById("tBody");
tBody.addEventListener("click", function (event) {
  tBody.removeChild(event.target.parentNode.parentNode);
});
