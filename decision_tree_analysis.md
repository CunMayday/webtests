# Research Methodology Decision Tree - Comprehensive Analysis

## Overview

The Research Methodology Decision Tree is an interactive web-based tool designed to guide DBA (Doctor of Business Administration) students and applied researchers through a systematic process of selecting the most appropriate research methodology for their projects. Created by Dr. Altinoz, this tool uses a sophisticated scoring algorithm to recommend methodologies based on user responses to eight key questions.

---

## Decision Tree Structure

### Question Sequence

The decision tree follows a **conditional branching structure** with up to 8 questions:

1. **Research Purpose** (Always asked)
2. **Level of Control** (Always asked)
3. **Time Design** (Always asked)
4. **Data Source** (Always asked)
5. **Depth vs. Generalizability** (Always asked)
6. **Innovation vs. Evaluation** (Conditional - only if purpose = "improve")
7. **Theoretical Maturity** (Always asked)
8. **Feasibility Safeguards** (Always asked)

**Key Conditional Logic**: Question 6 (Innovation vs. Evaluation) is only presented when the user selects "Improve or change current business practices" in Question 1. This creates a dynamic path through the tree.

---

## Question-by-Question Breakdown

### Question 1: Research Purpose
**Prompt**: "What is your primary research purpose?"

**Options**:
- **Explore and understand** a business problem or phenomenon
  - *Example*: Understand how remote work affects team collaboration dynamics
- **Explain relationships** between business variables
  - *Example*: Examine how employee engagement mediates leadership style and performance
- **Predict future outcomes** or test interventions
  - *Example*: Forecast customer demand patterns to optimize inventory
- **Improve or change** current business practices
  - *Example*: Redesign onboarding to reduce time-to-productivity by 30%

**Impact**: This question is the primary branching point that determines whether Question 6 will be asked and heavily influences initial methodology scoring.

---

### Question 2: Level of Control
**Prompt**: "Can you manipulate the key variable and (ideally) randomize?"

**Options**:
- **Yes, random assignment** to conditions is feasible
  - *Example*: Randomly assign sales teams to different incentive structures
- **I can manipulate but not randomize** assignment
  - *Example*: Implement new training in west region, use east as comparison
- **No manipulation feasible** – observational only
  - *Example*: Analyze existing employee performance data

**Impact**: Strongly influences experimental vs. observational methodology recommendations. Randomization capability heavily favors experimental designs.

---

### Question 3: Time Design
**Prompt**: "Will you observe change over time?"

**Options**:
- **Cross-sectional snapshot** (one point in time)
  - *Example*: Survey all departments simultaneously for benchmarking
- **Longitudinal panel** or growth over time
  - *Example*: Track same cohort of managers quarterly over two years
- **High-frequency time-series** or forecasting
  - *Example*: Analyze daily sales data over three years

**Impact**: Determines temporal dimension of research and strongly influences time-series, longitudinal, or cross-sectional methodology selection.

---

### Question 4: Data Source
**Prompt**: "What is your primary data source?"

**Options**:
- **Existing organizational or archival data**
  - *Example*: Leverage existing CRM data to analyze purchasing patterns
- **New survey data**
  - *Example*: Deploy validated organizational culture survey to 500+ employees
- **Interviews, observations, or documents**
  - *Example*: Conduct in-depth interviews with 25 frontline employees
- **Combination of quantitative and qualitative sources**
  - *Example*: Combine performance metrics with manager interviews

**Impact**: Major determinant of qualitative vs. quantitative vs. mixed methods approaches.

---

### Question 5: Depth vs. Generalizability
**Prompt**: "Is your priority depth in context or generalizable estimates?"

**Options**:
- **Contextual depth**
  - *Example*: Deeply explore organizational culture in a single high-tech startup
- **Generalizable estimates**
  - *Example*: Generate findings applicable across all 200 retail locations
- **Both depth and generalizability**
  - *Example*: Combine statistical analysis with case studies

**Impact**: Balances qualitative depth-focused methods (ethnography, phenomenology) against quantitative generalization methods (surveys, SEM).

---

### Question 6: Innovation vs. Evaluation (CONDITIONAL)
**Prompt**: "What kind of improvement work are you driving?"

**Only asked when**: Question 1 answer = "improve"

**Options**:
- **Build and evaluate** a new artifact or process
  - *Example*: Design and pilot a new performance dashboard
- **Iterative co-change** with stakeholders
  - *Example*: Partner with frontline teams to redesign workflow processes
- **Evaluate an existing** intervention or process
  - *Example*: Evaluate effectiveness of last year's leadership development program

**Impact**: Strongly differentiates between design science, action research, and quasi-experimental approaches.

---

### Question 7: Theoretical Maturity
**Prompt**: "How mature is the theory base in this area?"

**Options**:
- **Thin theory** – need to build or refine frameworks
  - *Example*: Explore emerging gig economy workforce management
- **Mature theory** – ready to test or extend
  - *Example*: Test established motivation theories in hybrid work contexts

**Impact**: Influences whether theory-building (grounded theory) or theory-testing (SEM, experimental) methods are favored.

---

### Question 8: Feasibility Safeguards
**Prompt**: "What feasibility guardrails apply?"

**Options**:
- **Strong support** – resources, access, and approvals in place
  - *Example*: Executive sponsorship secured, IRB approved, full data access
- **Some constraints** – need to streamline scope or sequencing
  - *Example*: Limited to six-month timeline, restricted department access
- **Significant constraints** – prioritize lean, feasible design
  - *Example*: Three-month deadline with limited participant availability

**Impact**: Adds cautions to complex methodologies and boosts simpler approaches when constraints are significant. Influences feasibility notes in final recommendations.

---

## Scoring Algorithm

### Methodology Evaluation System

The decision tree evaluates **14 different research methodologies**:

1. Experimental Research Design
2. Quasi-Experimental Design
3. Correlational/Observational Study
4. Longitudinal Panel/Growth Modeling
5. Time-Series/Forecasting Analysis
6. Structural Equation Modeling (SEM)
7. Survey Research Methodology
8. Mixed Methods Research
9. Case Study Research
10. Ethnography
11. Grounded Theory
12. Phenomenology
13. Action Research
14. Design Science Research
15. Systematic Review/Meta-Analysis

### Scoring Mechanism

Each methodology starts with a score of **0 points**. As the user answers questions, the algorithm:

1. **Adds points** to methodologies that align with the answer (typically 1-4 points)
2. **Records reasons** for why points were added (displayed to user)
3. **Adds cautions** when a methodology may be problematic given the answer
4. **Accumulates feasibility notes** based on constraint levels

**Scoring Weights by Question**:
- Research Purpose: 1-3 points per methodology
- Level of Control: 1-4 points (randomization = 4 points to experimental)
- Time Design: 1-4 points (strong alignment = 4 points)
- Data Source: 1-4 points (perfect match = 4 points)
- Depth vs. Generalizability: 1-3 points
- Innovation vs. Evaluation: 1-4 points (when asked)
- Theoretical Maturity: 1-3 points
- Feasibility: 1-2 points (mainly adds cautions)

### Example Scoring Path

**Scenario**: User selects:
- Purpose: Explain relationships
- Control: Observational only
- Time: Cross-sectional
- Data: New survey data
- Depth: Generalizable estimates
- Theory: Mature
- Feasibility: Strong support

**Resulting Scores** (approximate):
- **SEM**: 3 + 1 + 1 + 3 + 2 + 3 = **13 points** ✓ (Primary recommendation)
- **Survey Research**: 2 + 2 + 2 + 4 + 3 + 2 = **15 points** ✓ (Could be primary)
- **Correlational/Observational**: 2 + 3 + 3 + 2 + 1 = **11 points** (Alternative)
- **Experimental Design**: 2 + 0 + 0 + 0 + 2 + 2 = **6 points** (Lower, with cautions)

---

## Recommendation Generation

### Primary Recommendation Selection

After all questions are answered:

1. **Calculate total scores** for all 14 methodologies
2. **Sort methodologies** by score (highest to lowest)
3. **Select primary**: Highest-scoring methodology
   - If no methodology has positive score, default to "Mixed Methods"
4. **Select alternatives**: Next 2 highest-scoring methodologies with positive scores
   - If fewer than 2 alternatives have positive scores, include top-scoring regardless

### Output Components

For each recommendation, the user receives:

#### 1. **Decision Path Summary**
- Step-by-step recap of all questions and chosen answers
- Helps users understand their journey through the tree

#### 2. **Primary Methodology Details**
- **Name**: Full methodology name
- **Why this fits**: Bulleted list of reasons based on scoring logic
- **Description**: What the methodology is
- **When to use**: Appropriate contexts
- **Common methods and techniques**: Specific approaches within the methodology
- **Key advantages**: Benefits of this approach
- **Important considerations**: Limitations and challenges
- **Business research examples**: 4 real-world examples
- **Next steps**: 5 concrete action items to begin
- **Feasibility watch-outs**: Cautions specific to user's answers (if any)

#### 3. **Complementary Alternatives**
- 2 alternative methodologies with similar structure (name, reasons, cautions)
- Provides options if primary doesn't fully fit

#### 4. **Feasibility Guidance**
- Notes based on feasibility constraints selected
- Warnings about integration workload, timeline, or resource needs

---

## Key Evaluation Logic

### Conditional Branching

The tree implements **smart conditional logic**:

```javascript
function getActiveSequence() {
    const sequence = [...baseSequence];
    const purposeDecision = decisions.find(decision => decision.id === 'question1');
    if (!purposeDecision || purposeDecision.value !== 'improve') {
        return sequence.filter(id => id !== 'questionInnovation');
    }
    return sequence;
}
```

This ensures Question 6 is only asked when relevant, creating a more efficient user experience.

### Reason Tracking

The algorithm doesn't just score—it **explains**:

```javascript
function addScore(method, points, reason = null) {
    methodScores[method] += points;
    if (reason && points > 0) {
        methodReasons[method].push(reason);
    }
}
```

Every point added includes a human-readable reason displayed in the final recommendation.

### Caution System

The algorithm proactively warns users:

```javascript
function addCaution(method, message) {
    if (message) {
        methodCautions[method].push(message);
    }
}
```

Example: If user selects "observational only" for control, experimental design receives caution: *"No manipulation feasible—true experiments are unlikely."*

---

## Notable Design Patterns

### 1. **Multi-Criteria Decision Making**
The tree doesn't rely on a single question but integrates 7-8 dimensions to provide nuanced recommendations.

### 2. **Weighted Scoring**
Different questions carry different weights (1-4 points), reflecting their relative importance to methodology selection.

### 3. **Negative Filtering via Cautions**
Rather than negative scoring, the system adds cautions to flag problematic methodologies while still showing them as options.

### 4. **Fallback Logic**
If no methodology scores positively, the system defaults to "Mixed Methods" as a versatile catch-all.

### 5. **Transparency**
The decision path summary and reason tracking ensure users understand *why* they received their recommendation.

### 6. **Progressive Disclosure**
Questions are revealed one at a time with a progress bar, reducing cognitive load.

### 7. **Accessibility Features**
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure

---

## User Experience Flow

1. **Introduction Screen**
   - Explains tool purpose
   - Links to source material (Research Methods Guide PDF)
   - Creator attribution
   - "Begin Decision Tree" button

2. **Question Progression**
   - One question displayed at a time
   - Progress bar shows completion percentage
   - Each option includes:
     - Main choice text
     - Explanatory hint
     - Real-world example
   - Back button enabled after first question
   - Restart button always available

3. **Results Display**
   - Decision path recap
   - Primary methodology with full details
   - 2-3 alternative methodologies
   - Feasibility guidance
   - Smooth scroll to results

4. **Navigation Options**
   - Back button: Return to previous question (removes last decision)
   - Start Over: Complete restart to introduction screen

---

## Technical Implementation Highlights

### State Management
```javascript
let decisions = [];  // Array of {id, question, choice, value} objects
```

### Dynamic Question Activation
```javascript
function handleChoice(questionId, element) {
    // Record decision
    decisions.push({id, question, choice, value});
    
    // Deactivate current question
    questionElement.classList.remove('active');
    
    // Activate next question or show results
    const nextQuestionId = getNextQuestionId(questionId);
    if (nextQuestionId) {
        document.getElementById(nextQuestionId).classList.add('active');
    } else {
        showResults();
    }
}
```

### Progress Calculation
```javascript
function updateProgress() {
    const sequence = getActiveSequence();
    const progress = (decisions.length / sequence.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}
```

---

## Methodology Coverage

### Quantitative Methods (7)
1. Experimental Research Design
2. Quasi-Experimental Design
3. Correlational/Observational Study
4. Longitudinal Panel/Growth Modeling
5. Time-Series/Forecasting Analysis
6. Structural Equation Modeling (SEM)
7. Survey Research Methodology

### Qualitative Methods (4)
8. Case Study Research
9. Ethnography
10. Grounded Theory
11. Phenomenology

### Mixed/Applied Methods (3)
12. Mixed Methods Research
13. Action Research
14. Design Science Research

### Secondary Research (1)
15. Systematic Review/Meta-Analysis

---

## Strengths of the Decision Tree

1. **Comprehensive Coverage**: 14 methodologies spanning quantitative, qualitative, and mixed approaches
2. **Contextual Guidance**: Real-world examples for every option
3. **Transparent Logic**: Users see why they received their recommendation
4. **Practical Focus**: Emphasizes feasibility and actionable next steps
5. **Educational Value**: Teaches methodology selection principles
6. **Flexible Navigation**: Back button allows exploration of different paths
7. **Accessibility**: WCAG-compliant design patterns
8. **DBA-Specific**: Tailored to applied business research context

---

## Potential Limitations

1. **Simplified Complexity**: Real methodology selection involves more nuance than 8 questions can capture
2. **Equal Weighting Assumptions**: Some scoring decisions may not reflect all research contexts
3. **No Hybrid Recommendations**: Primary recommendation is single methodology (though alternatives are provided)
4. **Limited Customization**: No ability to adjust weights or add custom methodologies
5. **Static Content**: Methodology descriptions don't adapt based on specific user context

---

## Conclusion

The Research Methodology Decision Tree represents a sophisticated **multi-criteria decision support system** that guides researchers through a complex selection process. By combining:

- **Conditional branching** (Question 6 only when relevant)
- **Weighted scoring** across 8 dimensions
- **Transparent reasoning** with explanations for every recommendation
- **Practical guidance** with examples and next steps
- **Feasibility awareness** with cautions and constraints

The tool successfully balances **comprehensiveness** with **usability**, making advanced research methodology selection accessible to DBA students and applied researchers.

The scoring algorithm's integration of multiple perspectives (purpose, control, time, data, depth, innovation, theory, feasibility) mirrors the real-world complexity of methodology selection while providing clear, actionable guidance.

---

**Created by**: Dr. Altinoz  
**Contact**: caltinoz@purdueglobal.edu  
**Source Material**: [Research Methods Guide (PDF)](https://cunmayday.github.io/webtests/ResearchMethods.pdf)
