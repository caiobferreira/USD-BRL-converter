document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  document
    .getElementById("convertUsdBtn")
    .addEventListener("click", function () {
      let usdValue = document.getElementById("usdValue").value;

      let moedaB = {
        value: 0,
      };

      if(usdValue == ""){
          console.log('this is empty');
          return;
      }

      let url =
        "https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=37d6b32bee7189bc371c";

      fetch(url).then((res) => {
        res.json().then((data) => {
          console.log("data", data);
          let cotacao = data.USD_BRL;
          moedaB.value = (cotacao * parseFloat(usdValue)).toFixed(2);
          const resultado = moedaB.value;
          document.getElementById("brlCot").innerText = resultado;
        });
      });
    });

  document
    .getElementById("convertBrlBtn")
    .addEventListener("click", function () {
      let brlValue = document.getElementById("brlValue").value;

      let moedaB = {
        value: 0,
      };

      if(usdValue == ""){
          console.log('this is empty');
          return;
      }

      let url =
        "https://free.currconv.com/api/v7/convert?q=BRL_USD&compact=ultra&apiKey=37d6b32bee7189bc371c";

      fetch(url).then((res) => {
        res.json().then((data) => {
          console.log("data", data);
          let cotacao = data.BRL_USD;
          moedaB.value = (cotacao * parseFloat(brlValue)).toFixed(2);
          const resultado = moedaB.value;
          document.getElementById("usdCot").innerText = resultado;
        });
      });
    });


}
