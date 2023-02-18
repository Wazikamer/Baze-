document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let date = document.getElementById("date").value;
  let fail = "";

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
  } else {
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
      "Доданий товар: " +
      name +
      " Ціна: " +
      price +
      " Дата виготовлення: " +
      date;
    newDiv.classList.add("product");
    const wrapper = document.getElementById("item");
    wrapper.appendChild(newDiv);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
  }
}

const btn = document.getElementById("btn");

bnt.addEventListener('mouseenter', () => {
  btn.style.left = ${random(0, 90)}
})
