const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "doughnut",
    data: {
	labels: ["Male", "Female", "Other"],
	datasets: [{
        label: "genders",
        data: [10, 5, 9],
        backgroundColor: ["#36A2EB", "#FF6384", "#FF9F40"]
    }]
    },
    options: {}
});