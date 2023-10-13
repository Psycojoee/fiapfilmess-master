"use client"

export default function Score(){
document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    const scoreDisplay = document.getElementById('scoreDisplay');

    document.querySelectorAll('.risk-checkbox').forEach(checkbox => { //Risk-checkbox é o nome para utilizar a função do checkbox quando clicar
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                score += 1;
            } else {
                score -= 1;
            }
            scoreDisplay.textContent = score;
        });
    });
});
}