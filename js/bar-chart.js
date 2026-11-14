const Canvas = document.getElementById("Canvas");

const chart = new Chart(Canvas, {
    type: "bar",
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 30, 20],
                backgroundColor: '#FF9F40',
            }
        ]
    }
});