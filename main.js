  // Function to show lab tabs
        function showLab(labNumber) {
            // Hide all lab contents
            document.querySelectorAll('.lab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.lab-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected lab content
            document.getElementById('lab' + labNumber).classList.add('active');
            
            // Add active class to selected tab
            event.target.classList.add('active');
        }

        // Normal distribution calculation helper
        function normalCDF(x, mean, stdDev) {
            const z = (x - mean) / stdDev;
            return 0.5 * (1 + erf(z / Math.sqrt(2)));
        }

        // Error function approximation
        function erf(x) {
            const a1 =  0.254829592;
            const a2 = -0.284496736;
            const a3 =  1.421413741;
            const a4 = -1.453152027;
            const a5 =  1.061405429;
            const p  =  0.3275911;

            const sign = x < 0 ? -1 : 1;
            x = Math.abs(x);

            const t = 1.0 / (1.0 + p * x);
            const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

            return sign * y;
        }

        // Problem 1: Mean of observations
        function solveMeanProblem() {
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given observations:</strong> x, x+4, x+6, x+8, x+12</p>
                    <p><strong>Given mean:</strong> 16</p>
                    <p><strong>Number of observations:</strong> 5</p>
                    
                    <p><strong>Step 1:</strong> Calculate sum of observations</p>
                    <p>Sum = x + (x+4) + (x+6) + (x+8) + (x+12)</p>
                    <p>Sum = x + x + 4 + x + 6 + x + 8 + x + 12</p>
                    <p>Sum = 5x + 30</p>
                    
                    <p><strong>Step 2:</strong> Apply mean formula</p>
                    <p>Mean = Sum / Number of observations</p>
                    <p>16 = (5x + 30) / 5</p>
                    <p>16 × 5 = 5x + 30</p>
                    <p>80 = 5x + 30</p>
                    <p>5x = 80 - 30</p>
                    <p>5x = 50</p>
                    <p>x = 10</p>
                </div>
                <div class="answer">
                    <strong>Answer: x = 10</strong>
                </div>
                <div class="solution">
                    <p><strong>Verification:</strong></p>
                    <p>Observations: 10, 14, 16, 18, 22</p>
                    <p>Mean = (10 + 14 + 16 + 18 + 22) / 5 = 80 / 5 = 16 ✓</p>
                </div>
            `;
            document.getElementById('meanSolution').innerHTML = solution;
        }

        // Problem 2: Corrected Mean
        function solveCorrectedMean() {
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong></p>
                    <ul>
                        <li>Number of observations: 40</li>
                        <li>Original mean: 38</li>
                        <li>Incorrect value: 36</li>
                        <li>Correct value: 56</li>
                    </ul>
                    
                    <p><strong>Step 1:</strong> Calculate original sum</p>
                    <p>Original sum = Mean × Number of observations</p>
                    <p>Original sum = 38 × 40 = 1520</p>
                    
                    <p><strong>Step 2:</strong> Calculate correct sum</p>
                    <p>Correct sum = Original sum - Incorrect value + Correct value</p>
                    <p>Correct sum = 1520 - 36 + 56 = 1540</p>
                    
                    <p><strong>Step 3:</strong> Calculate correct mean</p>
                    <p>Correct mean = Correct sum / Number of observations</p>
                    <p>Correct mean = 1540 / 40 = 38.5</p>
                </div>
                <div class="answer">
                    <strong>Answer: Correct mean = 38.5</strong>
                </div>
            `;
            document.getElementById('correctedMeanSolution').innerHTML = solution;
        }

        // Problem 3: Normal Distribution
        function solveNormalDist1() {
            const mean = 30;
            const stdDev = 4;
            
            const probA = normalCDF(40, mean, stdDev);
            const probB = 1 - normalCDF(21, mean, stdDev);
            const probC = normalCDF(35, mean, stdDev) - normalCDF(30, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = 30, σ = 4</p>
                    
                    <p><strong>a) P(x < 40):</strong></p>
                    <p>Z = (40 - 30) / 4 = 10/4 = 2.5</p>
                    <p>P(x < 40) = P(Z < 2.5) = ${probA.toFixed(4)}</p>
                    
                    <p><strong>b) P(x > 21):</strong></p>
                    <p>Z = (21 - 30) / 4 = -9/4 = -2.25</p>
                    <p>P(x > 21) = 1 - P(Z < -2.25) = ${probB.toFixed(4)}</p>
                    
                    <p><strong>c) P(30 < x < 35):</strong></p>
                    <p>Z₁ = (30 - 30) / 4 = 0</p>
                    <p>Z₂ = (35 - 30) / 4 = 1.25</p>
                    <p>P(30 < x < 35) = P(0 < Z < 1.25) = ${probC.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answers:</strong><br>
                    a) P(x < 40) = ${(probA * 100).toFixed(2)}%<br>
                    b) P(x > 21) = ${(probB * 100).toFixed(2)}%<br>
                    c) P(30 < x < 35) = ${(probC * 100).toFixed(2)}%
                </div>
            `;
            document.getElementById('normalDist1Solution').innerHTML = solution;
        }

        // Problem 4: Car Speeds
        function solveCarSpeeds() {
            const mean = 90;
            const stdDev = 10;
            const prob = 1 - normalCDF(100, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = 90 km/hr, σ = 10 km/hr</p>
                    <p><strong>Find:</strong> P(x > 100)</p>
                    
                    <p><strong>Step 1:</strong> Calculate Z-score</p>
                    <p>Z = (100 - 90) / 10 = 1.0</p>
                    
                    <p><strong>Step 2:</strong> Calculate probability</p>
                    <p>P(x > 100) = 1 - P(Z < 1.0) = 1 - 0.8413 = ${prob.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answer: P(speed > 100 km/hr) = ${(prob * 100).toFixed(2)}%</strong>
                </div>
            `;
            document.getElementById('carSpeedsSolution').innerHTML = solution;
        }

        // Problem 5: Battery Life
        function solveBatteryLife() {
            const mean = 50;
            const stdDev = 15;
            const prob = normalCDF(70, mean, stdDev) - normalCDF(50, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = 50 hours, σ = 15 hours</p>
                    <p><strong>Find:</strong> P(50 < x < 70)</p>
                    
                    <p><strong>Step 1:</strong> Calculate Z-scores</p>
                    <p>Z₁ = (50 - 50) / 15 = 0</p>
                    <p>Z₂ = (70 - 50) / 15 = 1.33</p>
                    
                    <p><strong>Step 2:</strong> Calculate probability</p>
                    <p>P(50 < x < 70) = P(0 < Z < 1.33) = ${prob.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answer: P(50 < battery life < 70) = ${(prob * 100).toFixed(2)}%</strong>
                </div>
            `;
            document.getElementById('batteryLifeSolution').innerHTML = solution;
        }

        // Problem 6: Component Length
        function solveComponentLength() {
            const mean = 5;
            const stdDev = 0.02;
            
            const probA = normalCDF(5.02, mean, stdDev) - normalCDF(4.98, mean, stdDev);
            const probB = normalCDF(5.04, mean, stdDev) - normalCDF(4.96, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = 5 cm, σ = 0.02 cm</p>
                    
                    <p><strong>a) P(4.98 < x < 5.02):</strong></p>
                    <p>Z₁ = (4.98 - 5) / 0.02 = -1.0</p>
                    <p>Z₂ = (5.02 - 5) / 0.02 = 1.0</p>
                    <p>P(4.98 < x < 5.02) = P(-1 < Z < 1) = ${probA.toFixed(4)}</p>
                    
                    <p><strong>b) P(4.96 < x < 5.04):</strong></p>
                    <p>Z₁ = (4.96 - 5) / 0.02 = -2.0</p>
                    <p>Z₂ = (5.04 - 5) / 0.02 = 2.0</p>
                    <p>P(4.96 < x < 5.04) = P(-2 < Z < 2) = ${probB.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answers:</strong><br>
                    a) P(4.98 < length < 5.02) = ${(probA * 100).toFixed(2)}%<br>
                    b) P(4.96 < length < 5.04) = ${(probB * 100).toFixed(2)}%
                </div>
            `;
            document.getElementById('componentLengthSolution').innerHTML = solution;
        }

        // Problem 7: Assembly Time
        function solveAssemblyTime() {
            const mean = 20;
            const stdDev = 2;
            
            const probA = normalCDF(19.5, mean, stdDev);
            const probB = normalCDF(22, mean, stdDev) - normalCDF(20, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = 20 hours, σ = 2 hours</p>
                    
                    <p><strong>a) P(x < 19.5):</strong></p>
                    <p>Z = (19.5 - 20) / 2 = -0.25</p>
                    <p>P(x < 19.5) = P(Z < -0.25) = ${probA.toFixed(4)}</p>
                    
                    <p><strong>b) P(20 < x < 22):</strong></p>
                    <p>Z₁ = (20 - 20) / 2 = 0</p>
                    <p>Z₂ = (22 - 20) / 2 = 1.0</p>
                    <p>P(20 < x < 22) = P(0 < Z < 1) = ${probB.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answers:</strong><br>
                    a) P(time < 19.5 hours) = ${(probA * 100).toFixed(2)}%<br>
                    b) P(20 < time < 22 hours) = ${(probB * 100).toFixed(2)}%
                </div>
            `;
            document.getElementById('assemblyTimeSolution').innerHTML = solution;
        }

        // Problem 8: Employee Salaries
        function solveSalaries() {
            const mean = 50000;
            const stdDev = 20000;
            
            const probA = normalCDF(40000, mean, stdDev);
            const probB = normalCDF(65000, mean, stdDev) - normalCDF(45000, mean, stdDev);
            const probC = 1 - normalCDF(70000, mean, stdDev);
            
            const solution = `
                <div class="solution">
                    <h4>Solution:</h4>
                    <p><strong>Given:</strong> μ = $50,000, σ = $20,000</p>
                    
                    <p><strong>a) P(salary < $40,000):</strong></p>
                    <p>Z = (40000 - 50000) / 20000 = -0.5</p>
                    <p>P(x < 40000) = P(Z < -0.5) = ${probA.toFixed(4)}</p>
                    
                    <p><strong>b) P($45,000 < salary < $65,000):</strong></p>
                    <p>Z₁ = (45000 - 50000) / 20000 = -0.25</p>
                    <p>Z₂ = (65000 - 50000) / 20000 = 0.75</p>
                    <p>P(45000 < x < 65000) = ${probB.toFixed(4)}</p>
                    
                    <p><strong>c) P(salary > $70,000):</strong></p>
                    <p>Z = (70000 - 50000) / 20000 = 1.0</p>
                    <p>P(x > 70000) = 1 - P(Z < 1.0) = ${probC.toFixed(4)}</p>
                </div>
                <div class="answer">
                    <strong>Answers:</strong><br>
                    a) ${(probA * 100).toFixed(2)}% earn less than $40,000<br>
                    b) ${(probB * 100).toFixed(2)}% earn between $45,000 and $65,000<br>
                    c) ${(probC * 100).toFixed(2)}% earn more than $70,000
                </div>
            `;
            document.getElementById('salariesSolution').innerHTML = solution;
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Lab 2 is already active by default
            console.log('Statistics Labs page loaded - Lab 2 active');
        });