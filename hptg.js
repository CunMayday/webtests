/* v1.0 - Initial script for hypothesis testing practice. */
document.addEventListener('DOMContentLoaded', () => {
    const examplesSection = document.getElementById('examples');

    if (examplesSection) {
        const interactiveSection = document.createElement('div');
        interactiveSection.classList.add('interactive-section');

        interactiveSection.innerHTML = `
            <h3>Practice Your Skills</h3>
            <p><strong>Scenario:</strong> A researcher claims that the average response time on a cognitive test is 2.5 seconds. You want to test this claim.</p>
            <form id="hypothesis-form">
                <div>
                    <label for="null-hypothesis"><strong>Null Hypothesis (H₀):</strong></label>
                    <input type="text" id="null-hypothesis" name="null-hypothesis" placeholder="e.g., μ = 2.5">
                </div>
                <div style="margin-top: 10px;">
                    <label for="alternative-hypothesis"><strong>Alternative Hypothesis (H₁):</strong></label>
                    <input type="text" id="alternative-hypothesis" name="alternative-hypothesis" placeholder="e.g., μ ≠ 2.5">
                </div>
                <div style="margin-top: 20px;">
                    <button type="submit">Check Answers</button>
                </div>
            </form>
            <div id="feedback" style="margin-top: 15px;"></div>
        `;

        examplesSection.appendChild(interactiveSection);

        const form = document.getElementById('hypothesis-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nullHypothesis = document.getElementById('null-hypothesis').value.trim();
            const alternativeHypothesis = document.getElementById('alternative-hypothesis').value.trim();
            const feedback = document.getElementById('feedback');

            let correct = true;
            let message = '';

            // Check null hypothesis
            if (nullHypothesis !== 'μ = 2.5' && nullHypothesis !== 'μ=2.5') {
                correct = false;
                message += '<p><strong>Null Hypothesis:</strong> Incorrect. The null hypothesis should state that the population mean (μ) is equal to the claimed value.</p>';
            } else {
                message += '<p><strong>Null Hypothesis:</strong> Correct!</p>';
            }

            // Check alternative hypothesis
            if (alternativeHypothesis !== 'μ ≠ 2.5' && alternativeHypothesis !== 'μ!=2.5' && alternativeHypothesis !== 'μ != 2.5') {
                correct = false;
                message += '<p><strong>Alternative Hypothesis:</strong> Incorrect. Since the claim is just being tested (not in a specific direction), a two-tailed test (≠) is appropriate.</p>';
            } else {
                message += '<p><strong>Alternative Hypothesis:</strong> Correct!</p>';
            }

            if (correct) {
                feedback.innerHTML = '<p style="color: green;"><strong>Excellent! Both hypotheses are correct.</strong></p>';
            } else {
                feedback.innerHTML = message;
            }
        });
    }
});
