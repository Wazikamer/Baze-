function checkForm(el) {
  var name = el.name.value;
  var price = el.price.value;
  var date = el.date.value;
  var fail = "";

  if (name == "" || price == "" || date == "")
    fail = "Будь ласка, заповніть всі поля";
  else if (name.length <= 1 || name.length > 30) fail = "Некоректна довжина";
  else if (
    name.split("@").length > 1 ||
    name.split("$").length > 1 ||
    name.split("&").length > 1
  )
    fail = "Недопустимий символ";

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
  }

  return false;
}

document.getElementById("submit").addEventListener("click", q);

function q() {
  let a = document.querySelector(".input").value;
  let b = document.querySelector(".input-1").value;
  let c = document.querySelector(".input-2").value;
  if (a == "" || b == "" || c == "") return;
  const newDiv = document.createElement("div");
  newDiv.innerHTML =
    "Доданий товар: " + a + " Ціна: " + b + " Дата виготовлення: " + c;
  newDiv.classList.add("product");
  const wrapper = document.getElementById("item");
  wrapper.appendChild(newDiv);
}
