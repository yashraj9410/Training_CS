//import Chart from "chart.js/auto"

const ctx = document.getElementById('barChart');
const ctx1 = document.getElementById('scatterChart');
const ctx2 = document.getElementById('lineChart');
const crypto = document.getElementById('cryptoLineChart');
const pie = document.getElementById('pieChart');
const dnut = document.getElementById('dnutChart');

// --------------------Bar Graph for Parties and respective votes----------------------- 
var barColors = ["red", "green", "blue", "orange", "brown"];
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['BJP', 'Congress', 'APP', 'BSP', 'JDU', 'SP'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: barColors
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


//---------------------scatter plot  for house vs price----------------

var xyValues = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 }
];

new Chart(ctx1, {
    type: "scatter",
    data: {
        datasets: [{
            label: "House Price",
            pointRadius: 4,
            pointBackgroundColor: "red",
            data: xyValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            xAxes: [{ ticks: { min: 20, max: 160 } }],
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        }
    }
});


//-------------------------if we add border colour to scatter plot then it becomes a line graph --------------

var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
new Chart(ctx2, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "House Price",
            fill: false,
            lineTension: 0,
            pointBackgroundColor: "black",
            borderColor: "grey",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        }
    }
});


// line chart for various crypto info ----------------------------------------------------

var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart(crypto, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Bitcoin",
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false
        }, {
            label: "Ethereum",
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false
        }, {
            label: "Dogecoin",
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: true }
    }
});

// --------------------------------cretaing a pie chart with countries and thier percentage of people below poverty
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [5, 4, 4, 20, 5];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart(pie, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Percentage of people below poverty "
        }
    }
});


// --------------------------------creating a doughnt chart , just change the type to doughnut 

new Chart(dnut, {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Percentage of people below poverty "
        }
    }
});