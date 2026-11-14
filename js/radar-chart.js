const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "radar",

    data: {
        labels: ["Java", "Python", "HTML", "CSS", "JavaScript"],

        datasets: [{
            label: "Technical Skills",
            data: [85, 70, 90, 80, 75],
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            borderColor: "#2196F3",
            borderWidth: 2,
            pointBackgroundColor: "#2196F3",
            pointBorderColor: "#ffffff",
            pointRadius: 4,
            fill: true,
            tension: 0.2
        }]
    },

    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Employee Skills"
            },
            legend: {
                display: true,
                position: "top"
            }
        },

        scales: {
            r: {
                min: 0,
                max: 100
            }
        }
    }
});