---
title: 'What an A/B Test Actually Measures'
description: 'A significant result tells you the difference was unlikely under the null. It does not tell you the effect will hold, that users are representative, or that the metric is the point.'
pubDate: 2026-10-18
tags: ['Statistics', 'Experimentation']
---

An A/B test ends, the p-value comes back at 0.03, the team ships. The number is real; the confidence in it is usually borrowed from assumptions nobody wrote down.

This post is a short checklist of the things a significant result does **not** establish — and the questions that catch them.

## What the p-value says

A p-value is the probability of seeing data at least this extreme **if the null hypothesis were true**. That is all. It is not the probability the treatment works, not the probability you would see the same result again, and not a measure of how large the effect is.

$$
p = P(\text{data as extreme} \mid H_0)
$$

The quantity people actually want is usually the other conditional:

$$
P(\text{lift} > 0 \mid \text{data})
$$

Those two numbers live in different worlds, and the gap between them is where most misread experiments come from.

## Five things a significant result does not tell you

1. **Whether the effect is big enough to matter.** With enough traffic, a 0.05% lift is significant. That does not make it worth shipping.
2. **Whether the sample resembles the population.** One segment, one device, one geography — the test answers a narrower question than the one the roadmap asks.
3. **Whether the effect persists.** Novelty effects inflate early lifts; some users act differently simply because something changed.
4. **Whether the metric was the point.** A significant increase in clicks on a button nobody converts from is a real result about the wrong thing.
5. **Whether the mechanism is what you think.** A win can come from a change in mix, timing, or a logging difference rather than the feature.

## The questions worth asking before you read the result

- **What was the unit of randomisation, and what was the unit of analysis?** Mismatches (users randomised, sessions analysed) quietly shrink standard errors.
- **How many comparisons did we run?** Twenty metrics at α = 0.05 gives you roughly one false positive by construction.
- **What is the minimum detectable effect, and did we power for it?** An underpowered test that lands "not significant" is not evidence of no effect.
- **What would we do differently if this came back flat?** If the answer is "nothing", the test is a ritual, not an experiment.
- **Can we reproduce it in a holdout or a second cohort?** The cheapest robustness check is usually a repeat.

## A worked example of the trap

Suppose you test a checkout change on a 50/50 split. Conversion is 4.0% in control and 4.3% in treatment, p = 0.04. The headline: "+7.5% conversion, ship it."

Now look at the segments. Desktop is up, mobile is flat, and mobile is 70% of traffic. The pooled effect is real, but most users see no benefit — and the win may not survive the next release, since the mechanism only applies to desktop.

This is not a story about lying with statistics. Every number was correct. The mistake was treating a pooled average as a description of the population.

## The takeaway

A/B testing is a tool for **decision-making under uncertainty**, not a machine that outputs truth. The p-value is one input. Effect size, segment consistency, mechanism, and the cost of being wrong are the rest.

The best habit I know: before the test runs, write down the decision rule — what result would make you ship, what would make you stop, and what would make you run it again. Then the experiment has something to be right or wrong about.

---

*This is a starter post to show the format — edit or delete it in `src/content/blog/`.*
