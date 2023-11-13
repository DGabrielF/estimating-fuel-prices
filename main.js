function calculatePrice () {
  let gasoline = document.getElementById("gasoline").value;
  let alcohol = document.getElementById("alcohol").value;
  let rate = document.getElementById("rate").value;
  let distance = document.getElementById("distance").value;
  let showFuel = document.getElementById("fuel");
  let showResult = document.getElementById("result");

  if (gasoline!=="" && alcohol!=="") {
    if (Number(alcohol)/Number(gasoline <= 0.7)) {
      price = Number(alcohol);
      showFuel.innerHTML = "Usar álcool está mais vantajoso"
    } else {
      price = Number(gasoline);
      showFuel.innerHTML = "Usar gasolina está mais vantajoso"
    }
  } else if (gasoline!=="" && alcohol==="") {
    price = Number(gasoline);
    showFuel.innerHTML = ""
  } else if (gasoline==="" && alcohol!=="") {
    price = Number(alcohol);
    showFuel.innerHTML = ""
  } else if (gasoline==="" && alcohol==="") {
    showFuel.innerHTML = "É necessário ao menos um tipo de conbustível para o cálculo"
  }

  if (rate==="") {
    document.getElementById("rate").nextElementSibling.innerHTML = "O consumo deve ser preenchido"
  } else {
    document.getElementById("rate").nextElementSibling.innerHTML = ""
  }
  if (distance==="") {
    document.getElementById("distance").nextElementSibling.innerHTML = "A distância deve ser preenchida"
  } else {
    document.getElementById("distance").nextElementSibling.innerHTML = ""
  }
  const result = Number(price)/Number(rate)*Number(distance)

  if (!result===NaN) {
    showResult.value = result
    showResult.innerText = result.toFixed(2)
  }
}

