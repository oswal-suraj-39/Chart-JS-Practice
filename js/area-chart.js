const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Actual Sales",
                data: [20, 40, 30, 60, 50],
                fill: 'shape',
                backgroundColor: "rgba(35, 39, 178, 0.3)",
                borderColor: "rgb(35, 39, 178)",
                tension: 0.2
            }
        ]
    }
});