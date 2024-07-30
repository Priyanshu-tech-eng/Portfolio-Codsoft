document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const dots = parseInt(circle.getAttribute('data-dots'));
        const marked = parseInt(circle.getAttribute('data-percent'));
        const percent = dots * marked / 100;
        const points = [];

        for (let i = 0; i < dots; i++) {
            points.push({
                x: circle.offsetWidth / 2 + circle.offsetWidth / 2 * Math.cos(2 * Math.PI * i / dots),
                y: circle.offsetHeight / 2 + circle.offsetHeight / 2 * Math.sin(2 * Math.PI * i / dots),
                marked: i < percent
            });
        }

        points.forEach(point => {
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.width = '5px';
            dot.style.height = '5px';
            dot.style.borderRadius = '50%';
            dot.style.background = point.marked ? '#00FF00' : '#555';
            dot.style.top = `${point.y}px`;
            dot.style.left = `${point.x}px`;
            circle.appendChild(dot);
        });
    });

    document.querySelector('#menu-icon').addEventListener('click', () => {
        document.querySelector('.navlist').classList.toggle('active');
    });
    console.log('Document loaded and ready.');
});
