# Multi-Criteria Decision Analysis (MCDA) Frameworks

## Overview

Multi-Criteria Decision Analysis encompasses a family of formal frameworks for evaluating options against multiple, often conflicting criteria. Where simpler frameworks assume a single dimension of comparison, MCDA acknowledges that real-world decisions involve trade-offs between incommensurable factors.

MCDA frameworks transform subjective judgment into structured analysis by making criteria weights explicit, measuring performance across dimensions consistently, and aggregating these into comparable scores. The methodology forces decision-makers to articulate their preferences transparently and provides a defensible audit trail for decisions.

The Collector skill employs MCDA for high-stakes decisions where multiple criteria interact, where stakeholder preferences must be balanced, and where the decision requires documentation and justification.

## When to Use MCDA

### Appropriate Problem Characteristics

MCDA is most valuable when:

**Multiple Criteria Are Relevant**: The decision involves more than 2-3 evaluation dimensions that cannot be reduced to a single metric.

**Criteria Are Incommensurable**: Criteria are measured in different units (dollars, time, risk levels, satisfaction scores) that cannot be directly compared.

**Trade-offs Exist**: Improving performance on one criterion necessarily reduces performance on another, creating genuine tension.

**Stakeholder Preferences Differ**: Different stakeholders weight criteria differently and MCDA can aggregate these perspectives.

**Transparency Is Required**: Decisions must be justified to multiple audiences with different levels of analytical sophistication.

**Documented Justification Needed**: The decision may be audited or revisited, requiring explicit reasoning.

### Limitations and Contraindications

MCDA is less appropriate when:

**Single Criterion Dominates**: If one criterion clearly outweighs all others, use a simpler weighted approach.

**Data Is Unavailable**: MCDA requires performance ratings on all criteria; without data, the methodology adds false precision.

**Time Constraints Preclude Rigorous Analysis**: Full MCDA requires stakeholder input and careful evaluation; time-pressured decisions may use simplified versions.

**Creative Alternatives Exist**: MCDA evaluates existing options; it cannot generate novel alternatives.

**Values Are Contested**: When stakeholders fundamentally disagree on what matters, MCDA can mask conflict rather than resolve it.

## Analytic Hierarchy Process (AHP)

### Framework Description

The Analytic Hierarchy Process, developed by Thomas Saaty in the 1970s, is perhaps the most widely used MCDA methodology. AHP structures decisions hierarchically, decomposing the goal into criteria and sub-criteria, then systematically evaluating pairwise comparisons to derive weights and scores.

The mathematical foundation of AHP ensures that derived weights are consistent rather than arbitrary. The consistency ratio measures whether judgments are logically coherent, flagging when decision-makers may be confused or inconsistent.

### The AHP Hierarchy Structure

AHP organizes decisions into three levels:

**Level 1 - Goal**: The overall objective being pursued. This is the decision question framed as an achievement.

**Level 2 - Criteria**: The main dimensions of evaluation. These should be characteristics that matter for the goal.

**Level 3 - Alternatives**: The options being evaluated. Each alternative is measured against each criterion.

```
                    ┌─────────────┐
                    │    GOAL     │
                    │ (Decision   │
                    │  Question) │
                    └──────┬──────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
      ┌─────────┐     ┌─────────┐     ┌─────────┐
      │Criterion│     │Criterion│     │Criterion│
      │    A    │     │    B    │     │    C    │
      └────┬────┘     └────┬────┘     └────┬────┘
           │               │               │
      ┌────┴────┐     ┌────┴────┐     ┌────┴────┐
      │         │     │         │     │         │
      ▼         ▼     ▼         ▼     ▼         ▼
   ┌─────┐   ┌─────┐ ┌─────┐   ┌─────┐ ┌─────┐   ┌─────┐
   │Alt 1│   │Alt 2│ │Alt 1│   │Alt 2│ │Alt 1│   │Alt 2│
   └─────┘   └─────┘ └─────┘   └─────┘ └─────┘   └─────┘
```

### Pairwise Comparison Matrix

The core of AHP is the pairwise comparison. Instead of assigning absolute importance, decision-makers compare criteria two at a time, expressing which is more important and by how much.

The Saaty scale assigns numerical values:

| Saaty Scale | Definition | Explanation |
|-------------|------------|-------------|
| 1 | Equal importance | Two criteria contribute equally |
| 3 | Moderate importance | Slight preference for one |
| 5 | Strong importance | Strong preference for one |
| 7 | Very strong importance | Dominance demonstrated |
| 9 | Extreme importance | Highest possible preference |
| 2,4,6,8 | Intermediate values | When compromise is needed |

### Calculating Weights from Pairwise Comparisons

Given a pairwise comparison matrix A where a_ij represents how much more important criterion i is than criterion j:

```
Step 1: Normalize each column by dividing by column sum
Step 2: Average each row to get the weight vector
Step 3: Calculate consistency ratio to verify judgments
```

### Calculating Consistency Ratio

AHP provides a consistency measure to identify unreliable judgments:

```
CI = (λ_max - n) / (n - 1)

CR = CI / RI
```

Where:
- λ_max = principal eigenvalue
- n = number of criteria
- RI = random index (precomputed for each n)

CR ≤ 0.1 indicates acceptable consistency. Higher values suggest the comparison matrix should be re-evaluated.

### AHP Implementation Template

```
ANALYTIC HIERARCHY PROCESS: [Decision Title]

HIERARCHY:
Goal: [State the decision objective]
Criteria: [List all main criteria]
Sub-criteria: [If applicable, decompose criteria]
Alternatives: [List all options to evaluate]

PAIRWISE COMPARISONS - CRITERIA:

Matrix (Criteria vs Criteria):
              C1    C2    C3    C4
    C1       [1]   [a]   [b]   [c]
    C2       [1/a] [1]   [d]   [e]
    C3       [1/b] [1/d] [1]   [f]
    C4       [1/c] [1/e] [1/f] [1]

Weight Vector: [w1, w2, w3, w4]
Consistency Ratio: [CR value]

PAIRWISE COMPARISONS - ALTERNATIVES:

For Criterion 1:
Matrix (Alternatives vs Alternatives):
              Alt1   Alt2   Alt3
    Alt1     [1]    [g]    [h]
    Alt2     [1/g]  [1]    [i]
    Alt3     [1/h]  [1/i]  [1]
Weight Vector: [local weights]
Consistency Ratio: [CR value]

[Repeat for each criterion]

FINAL SCORES:
Alternative 1: Σ(weight_i × local_weight_i) = [score]
Alternative 2: Σ(weight_i × local_weight_i) = [score]
Alternative 3: Σ(weight_i × local_weight_i) = [score]

RECOMMENDATION: [Highest scoring alternative]
SENSITIVITY NOTES: [How robust is the recommendation]
```

### Business Case - NASA Mission Selection

NASA's Jet Propulsion Laboratory has employed AHP for mission concept selection. When evaluating potential Mars rover missions, criteria included scientific value (weight: 0.30), technical feasibility (0.25), cost (0.25), risk (0.15), and schedule (0.05). AHP's pairwise comparison process revealed that scientific value and cost were nearly equally important, contradicting initial assumptions that scientific objectives would dominate. This insight shaped subsequent portfolio discussions.

### Business Case - Mayo Clinic Equipment Procurement

Mayo Clinic used AHP to select a new MRI system. Criteria included image quality, maintenance requirements, operator ease, footprint, vendor support, and total cost. Eight vendors were evaluated across six criteria. The AHP process revealed that image quality and maintenance were the dominant factors, with other criteria having minimal impact on the final ranking. This focused the evaluation and accelerated the decision.

## TOPSIS Method

### Framework Description

TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) evaluates alternatives based on their distance from an ideal solution. The method assumes that the best alternative is simultaneously closest to the ideal (hypothetical best on all criteria) and farthest from the negative ideal (hypothetical worst on all criteria).

TOPSIS is particularly intuitive because it explicitly models both positive and negative references. Decision-makers can easily understand why an alternative scores as it does by examining its relationship to these reference points.

### TOPSIS Procedure

**Step 1 - Construct Decision Matrix**: Create a matrix where rows are alternatives and columns are criteria, with entries representing performance ratings.

**Step 2 - Normalize Decision Matrix**: Convert all criteria to comparable scales using vector normalization:

```
r_ij = x_ij / √(Σ(x_ij²)) for each column j
```

**Step 3 - Weight Normalized Matrix**: Multiply each normalized value by its criterion weight:

```
v_ij = w_j × r_ij
```

**Step 4 - Identify Ideal and Negative-Ideal Solutions**:
```
Ideal (A+): Best weighted value on each criterion
Negative-Ideal (A-): Worst weighted value on each criterion
```

For benefit criteria (higher is better):
```
A+ = max(v_ij) for each column j
A- = min(v_ij) for each column j
```

For cost criteria (lower is better):
```
A+ = min(v_ij) for each column j
A- = max(v_ij) for each column j
```

**Step 5 - Calculate Distances**:
```
S_i+ = √(Σ(v_ij - v_j+)²)  [Distance to ideal]
S_i- = √(Σ(v_ij - v_j-)²)  [Distance to negative-ideal]
```

**Step 6 - Calculate Relative Closeness**:
```
C_i = S_i- / (S_i+ + S_i-)
```

C_i ranges from 0 to 1, with values closer to 1 indicating better alternatives.

### TOPSIS Implementation Template

```
TOPSIS ANALYSIS: [Decision Title]

DECISION MATRIX:
           C1      C2      C3      C4     ...
        ┌──────┬──────┬──────┬──────┐
Alt 1   │ x11  │ x12  │ x13  │ x14  │
        ├──────┼──────┼──────┼──────┤
Alt 2   │ x21  │ x22  │ x23  │ x24  │
        ├──────┼──────┼──────┼──────┤
Alt 3   │ x31  │ x32  │ x33  │ x34  │
        └──────┴──────┴──────┴──────┘

Weights: [w1, w2, w3, w4, ...] (sum to 1.0)
Types: [Benefit/Cost, Benefit/Cost, ...]

NORMALIZED WEIGHTED MATRIX:
           C1      C2      C3      C4     ...
        ┌──────┬──────┬──────┬──────┐
Alt 1   │ v11  │ v12  │ v13  │ v14  │
        ├──────┼──────┼──────┼──────┤
Alt 2   │ v21  │ v22  │ v23  │ v24  │
        ├──────┼──────┼──────┼──────┤
Alt 3   │ v31  │ v32  │ v33  │ v34  │
        └──────┴──────┴──────┴──────┘

IDEAL SOLUTION (A+):
[v1+, v2+, v3+, v4+, ...]

NEGATIVE-IDEAL SOLUTION (A-):
[v1-, v2-, v3-, v4-, ...]

DISTANCE CALCULATIONS:
┌─────────┬─────────┬─────────┬───────────┐
│Alternative│ S+     │ S-      │ C (Score) │
├─────────┼─────────┼─────────┼───────────┤
│   Alt 1  │ [val]  │ [val]  │  [val]    │
│   Alt 2  │ [val]  │ [val]  │  [val]    │
│   Alt 3  │ [val]  │ [val]  │  [val]    │
└─────────┴─────────┴─────────┴───────────┘

RANKING:
1. [Alternative with highest C]
2. [Alternative with second highest C]
3. [Alternative with third highest C]

ANALYSIS:
[Explain the intuition behind the rankings]
[Note any close scores that may warrant sensitivity analysis]
```

### Business Case - Renewable Energy Plant Siting

A European energy company used TOPSIS to select sites for new solar installations. Criteria included solar irradiance (benefit), land cost (cost), grid proximity (cost), environmental sensitivity (cost), and permitting complexity (cost). TOPSIS provided clear scores for 12 candidate sites, revealing that the highest-irradiance site was not optimal when all factors were considered. The winning site balanced strong solar resource with favorable permitting and grid access.

### Business Case - University Ranking Systems

Several university ranking systems employ TOPSIS-like logic. For example, Times Higher Education rankings evaluate institutions across 13 performance indicators grouped into five areas: teaching, research, citations, industry income, and international outlook. TOPSIS methodology aggregates these indicators into overall scores, with the ideal representing the hypothetical best-performing institution across all dimensions.

## Weight Allocation Templates

### Weight Determination Principles

Weight allocation is the most consequential and contentious aspect of MCDA. Weights translate values into numbers, making implicit priorities explicit. Several methods exist for determining defensible weights:

### Direct Rating Method

Ask stakeholders to allocate 100 points across criteria:

```
Please distribute 100 points among the following criteria
to reflect their relative importance:

┌─────────────────────┬────────────┐
│ Criterion           │ Points     │
├─────────────────────┼────────────┤
│ Scientific Value    │ ____       │
│ Technical Feasibility│ ____       │
│ Cost                │ ____       │
│ Risk                │ ____       │
│ Schedule            │ ____       │
├─────────────────────┼────────────┤
│ TOTAL               │ 100        │
└─────────────────────┴────────────┘
```

### Rank-Order Weighting

Stakeholders rank criteria from most to least important, then weights are derived:

```
Step 1: Rank criteria (1 = most important)
Step 2: Assign weights using formula:
        w_i = 2(n + 1 - r_i) / n(n + 1)
        where n = number of criteria, r_i = rank

Example (n=5):
  Rank 1 → w = 2(6-1)/30 = 10/30 = 0.333
  Rank 2 → w = 2(6-2)/30 = 8/30 = 0.267
  Rank 3 → w = 2(6-3)/30 = 6/30 = 0.200
  Rank 4 → w = 2(6-4)/30 = 4/30 = 0.133
  Rank 5 → w = 2(6-5)/30 = 2/30 = 0.067
```

### Swing Weighting

Present a hypothetical worst case and ask which single criterion improvement would matter most:

```
Imagine the worst possible outcome on all criteria.
Now consider improving ONE criterion to its best level.
Which criterion would you choose to improve?

[First choice = highest weight criterion]

Now consider again. If your first choice is already at best,
which would be your second choice?
```

### Ratio Weighting

Ask direct comparative questions:

```
For [Criterion A] and [Criterion B]:
- If [Criterion A] were at its worst and [Criterion B] at its best,
  would you accept this? [Yes/No]
- If [Criterion A] improved from worst to best while [Criterion B]
  stayed at best, would you prefer this to [Criterion A] at worst
  and [Criterion B] at best? [Yes/No]
```

### Weight Validation Template

```
WEIGHT VALIDATION

Stakeholder Review:
- Are the weights consistent with your understanding?
- Are there any criteria that should receive more/less weight?
- Are the weights defensible to other stakeholders?

Sensitivity Check:
- If we increase the highest weight by 20%, does the ranking change?
- If we decrease the lowest weight to zero, does the ranking change?
- If we equalize all weights, which alternative wins?

Consensus Check:
- Have all stakeholders reviewed and approved the weights?
- Are there criteria where stakeholders fundamentally disagree?
- Should disagreement be resolved by averaging, or by selecting one perspective?
```

## Sensitivity Analysis in MCDA

### Why Sensitivity Analysis Matters

MCDA produces point estimates, but decision-makers need to know how robust those estimates are. Sensitivity analysis reveals whether results would change under plausible weight variations.

### One-Way Sensitivity Analysis

Vary one criterion's weight while holding others constant:

```
If Cost weight increases from 20% to:
  - 25%: Ranking unchanged
  - 30%: Alternative B becomes preferred
  - 35%: Alternative B advantage increases
```

### Threshold Analysis

Identify the weight at which ranking changes:

```
Current Cost weight: 25%
Alternative A score: 0.72
Alternative B score: 0.68

At what Cost weight does A = B?
Solve: 0.72 = 0.68 + (0.04 × Δw / 0.25)
Result: Δw = 0.20 or Cost weight = 45%

Threshold: 45%
Current: 25%
Buffer: 20 percentage points
```

### Multi-Way Sensitivity Analysis

Simulate multiple weight changes simultaneously using Monte Carlo methods or systematic sampling.

## Integration with Other Frameworks

### MCDA for Option Generation

Use decision trees or other methods to generate and screen alternatives, then apply MCDA to evaluate the refined set.

### MCDA to Trigger Flow Execution

MCDA determines which option is preferred; flow frameworks implement that preference through defined procedures.

### MCDA Output to Matrices

MCDA scores can populate matrix positions when evaluating options along additional dimensions.

## Quality Assurance Checklist

For MCDA implementation:

- [ ] Criteria are independent and non-redundant
- [ ] Criteria collectively cover the decision dimensions
- [ ] Performance data is current and reliable
- [ ] Weights reflect stakeholder values (validated)
- [ ] Sensitivity analysis has been conducted
- [ ] Results are interpretable and actionable
- [ ] Documentation enables future review
- [ ] Assumptions are clearly stated

## Conclusion

Multi-Criteria Decision Analysis provides rigorous frameworks for evaluating options across multiple dimensions. AHP offers a psychologically grounded methodology with built-in consistency checking. TOPSIS provides an intuitive geometric interpretation. Weight allocation templates ensure systematic preference elicitation.

MCDA transforms complex decisions from intuitive judgments into transparent analysis. The structured approach surfaces assumptions, makes trade-offs explicit, and produces defensible recommendations. When applied with care—attending to criteria selection, weight determination, and sensitivity analysis—MCDA substantially improves decision quality for high-stakes choices.

The Collector skill employs MCDA when problems warrant rigorous multi-criteria evaluation, when stakeholders require transparent justification, and when decisions will be revisited or audited. The framework ensures that value judgments are not hidden but rather placed at the center of analytical attention.
