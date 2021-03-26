document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById("convertUsdBtn").addEventListener("click", function(){

        let usdValue = document.getElementById('usdValue').value;
        const moedaB = 0;
        
        if(usdValue == ""){
            console.log('this is empty');
            return;
        }
        
        usdValue = parseFloat(usdValue);

        let url = "https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=37d6b32bee7189bc371c";

        fetch(url).then(res=>{return res.json})
        .then(json => {
            let cotacao = json["USD_BRL"].val;
            this.moedaB = (cotacao * parseFloat(this.usdValue)).toFixed(2);
        })
        
        
        
        })

        document.getElementById("moedaB").innerText = moedaB;
}
