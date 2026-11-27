const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    data: {
        datasets: [
            {
                type: 'bar',
                label: 'Bar Dataset',
                data: [10, 20, 30, 40],
                backgroundColor: "#ea6a47",
            },
            {
                type: 'line',
                label: 'Line Dataset',
                data: [15, 25, 35, 45],
                backgroundColor: "#1c4e80",
                borderColor: "#1c4e80"
            },
        ],
        labels: ['January', 'February', 'March', 'April']
    }
});