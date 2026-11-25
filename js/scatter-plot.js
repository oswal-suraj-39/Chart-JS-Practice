const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "scatter",
    data: {
        datasets: [{
            label: "Sales",
            data: [
                { x: 1, y: 10 },
                { x: null, y: null },
                { x: 3, y: 20 }
            ],
            radius: 4,
            backgroundColor: "#cecece",
            borderColor: "#006aff",
            pointBackgroundColor: "#22ff00",
            pointBorderColor: "#ff0000",
            borderWidth: 2,
            showLine: true,
            cubicInterpolationMode: "monotone",
            spanGaps: true,
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
    
});