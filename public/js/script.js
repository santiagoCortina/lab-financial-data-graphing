//const { default: axios } = require("axios");

document.addEventListener(
  "DOMContentLoaded",
  () => {
    let fromDate = document.getElementById('fromDate')
    let toDate = document.getElementById('toDate')

    function getData(){
      const APIURI = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate.value}&end=${toDate.value}&currency=USD`
      axios.get(APIURI)
        .then(response => {
          console.log(response.data)
          setData(response.data)
        })
        .catch(error => {
          console.log('Error amigos: ', error)
        })
    }

    getData();

    function setData(stockData){
      const canvas = document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Bitcoin Price',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: stockData.bpi
            }
          ]
        }
      })
    }

    console.log("lab-financial-data-graphing JS imported successfully!");
  },
  false
);

