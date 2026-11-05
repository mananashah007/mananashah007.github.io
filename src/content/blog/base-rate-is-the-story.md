---
title: 'The Base Rate Is the Story'
description: 'Why a 99% accurate test can still be wrong most of the time, and what that teaches us about reading any metric that arrives with a percentage attached.'
pubDate: 2026-03-14
tags: ['Statistics', 'Causal inference']
---

A test is 99% accurate. You test positive. What is the probability you actually have the condition?

Most people say 99%. The honest answer is that it depends almost entirely on something the test result never mentions: **how common the condition is in the first place.** This is the base rate, and it is usually the most important number in the room.

## A worked example

Suppose a disease affects 1 in 1,000 people. A test is 99% sensitive (it catches 99% of true cases) and 99% specific (it correctly clears 99% of healthy people). You test positive.

Take 100,000 people:

- 100 have the disease. The test catches 99 of them.
- 99,900 are healthy. The test falsely flags 1% of them: 999 people.

So 1,098 people test positive, and only 99 of them have the disease:

$$
P(\text{disease} \mid +) = \frac{99}{99 + 999} \approx 9\%
$$

A positive result moves your probability from 0.1% to about 9% — a hundredfold increase, and still a small number. The test is excellent. The prior is doing most of the work.

```python
def posterior(prior, sensitivity, specificity):
    p_pos = sensitivity * prior + (1 - specificity) * (1 - prior)
    return sensitivity * prior / p_pos

posterior(prior=0.001, sensitivity=0.99, specificity=0.99)  # ~0.090
```

## Where this shows up outside medicine

Base-rate neglect is not a medical curiosity. It is the default failure mode of almost every metric dashboard:

- **Fraud detection.** A model with 99% precision on a 0.1% fraud base rate can still generate far more false alerts than real ones. The team drowns, and the model gets blamed.
- **Hiring tests.** A screening test that is "right 90% of the time" tells you very little when the prior is 5% strong candidates.
- **Anomaly alerts.** Every spike detector is a base-rate machine. If incidents are rare, most alerts are noise — which is why alert fatigue is a design problem, not a discipline problem.

The fix is rarely a better model. It is usually a better prior, a cheaper second test, or a decision rule that accounts for the cost of being wrong in each direction.

> A percentage is only meaningful next to the population it was computed on.

## The Bayesian view, briefly

Bayes' theorem is just the arithmetic of updating a belief:

$$
P(H \mid E) = \frac{P(E \mid H)\,P(H)}{P(E)}
$$

The term people forget is $P(H)$ — the prior. A test result is evidence, not a verdict. The same evidence should move two people with different priors to different conclusions, and that is a feature, not a bug.

## What to ask next time

1. **What is the base rate?** Before any percentage, ask: out of what?
2. **What does a false positive cost, relative to a false negative?** Accuracy hides this tradeoff completely.
3. **Is the number a rate or a count?** A doubling of something rare is still rare.
4. **Who computed the denominator?** Selection effects live there.

None of this requires new data. It requires noticing that a probability is a relationship between evidence and prior belief — and that the prior is usually the part nobody put in the slide.
