function calculatePrice () {
  let price = document.getElementById("price").value;
  let rate = document.getElementById("rate").value;
  let distance = document.getElementById("distance").value;
  const result = Number(price)/Number(rate)*Number(distance)
  let showResult = document.getElementById("result")
  showResult.value = result
  showResult.innerText = result.toFixed(2)
}

