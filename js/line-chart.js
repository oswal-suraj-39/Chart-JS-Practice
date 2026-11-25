const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "line",
    data: {
        labels: ["", "Male", "Female", "Other"],
        datasets: [{
            label: "genders",
            data: [0, 10, 5, 9],
            backgroundColor: ["rgb(64, 64, 255)"],
            borderColor: "rgba(64, 64, 255, 0.35)",
            tension: 0.4,
            pointHoverRadius: 6,
            pointHitRadius: 3,
        }]
    },
});