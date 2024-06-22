export function startEyesMovement() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        const penguin = document.getElementById('penguin');
        if (penguin) {
            const rect = penguin.getBoundingClientRect();
            const penguinX = rect.left + rect.width / 2;
            const penguinY = rect.top + rect.height / 2;

            const angleDeg = angle(mouseX, mouseY, penguinX, penguinY);
            const eyeTransformValue = `translate(${4 * Math.cos(angleDeg * Math.PI / 180)}px, ${4 * Math.sin(angleDeg * Math.PI / 180)}px)`;
            const eyes = document.querySelectorAll('.eye');
            eyes.forEach((eye) => {
                eye.style.transform = eyeTransformValue;
            });
        }
    });
};

function angle(mx, my, px, py) {
    const dy = my - py;
    const dx = mx - px;
    return Math.atan2(dy, dx) * (180 / Math.PI);
};
