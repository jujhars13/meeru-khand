import * as meerukhand from "./js/meeruKhand.js";

const container = document.getElementById("container");
const surs = meerukhand(null, 3);

const tbl = document.createElement("table");
tbl.classList="table table-striped";
const tbody = document.createElement("tbody");

surs.forEach((lines) => {
  let tr = document.createElement("tr");
  lines.forEach((line) => {
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(line));
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

tbl.appendChild(tbody);
container.appendChild(tbl);
// const debug = (document.getElementById(
//   "debug"
// ).innerHTML = `<code>${JSON.stringify(surs)}</code>`);
