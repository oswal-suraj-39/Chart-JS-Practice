const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "polarArea",
    data: {
        labels: ["Java", "Python", "HTML", "CSS", "JavaScript"],
        datasets: [{
            label: "Technical Skills",
            data: [85, 70, 90, 80, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.75)',
                'rgba(75, 192, 192, 0.75)',
                'rgba(255, 205, 86, 0.75)',
                'rgba(66, 228, 66, 0.75)',
                'rgba(54, 162, 235, 0.75)'
            ],
            circular: true
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Technical Skills"
            },
            legend: {
                display: true,
                position: "top"
            }
        }
    }
});