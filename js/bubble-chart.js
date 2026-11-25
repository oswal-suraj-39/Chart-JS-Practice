const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "bubble",
    data: {
        datasets: [{
            label: "Sales",
            data: [
                { x: 10, y: 10, r: 5},
                { x: 20, y: 30, r: 8},
                { x: 30, y: 20, r: 10}
            ]
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