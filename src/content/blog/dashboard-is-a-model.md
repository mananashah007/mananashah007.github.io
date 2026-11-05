---
title: 'Your Dashboard Is a Model'
description: 'Every metric is a measurement instrument with assumptions baked in. Treating a dashboard as neutral data is how teams end up optimising the wrong thing.'
pubDate: 2026-01-22
tags: ['Data Science', 'Business']
---

A dashboard feels like a window. You open it and see the business. But a window is a choice — of frame, angle, and what to leave outside. A dashboard is the same, except the frame is a SQL query and the angle is whoever wrote it.

This is not a complaint about dashboards. It is an argument that **every metric is a model**, and models deserve the same scrutiny whether they are in a notebook or a BI tool.

## Three ways a metric lies without lying

### 1. The denominator drifts

Active users are up 20%. Also, the definition of "active" changed from "logged in" to "opened the app," and the reporting window moved from 30 days to 90. Neither change is wrong. Together they make the trend meaningless.

The fix is boring and effective: version your metric definitions, and put the definition next to the number.

### 2. The average hides the mix

Average revenue per user is flat. But new signups shifted toward the low-price plan, and existing enterprise accounts expanded. Two opposite movements cancelled out. The average is a true statement about a mixture that no longer has the same recipe.

Segment before you conclude. A single aggregate is a weighted average of stories you have not read yet.

### 3. The metric becomes the target

> When a measure becomes a target, it ceases to be a good measure.

Once support tickets are the KPI, tickets get closed faster — and reopened later. Once lines of code are the metric, code gets longer. Goodhart's law is not a warning about bad people; it is a prediction about incentives.

## A small discipline that pays off

For any metric that drives a decision, write down four lines:

1. **Definition** — exactly what is counted, and over what window.
2. **Instrument** — where the number comes from, and what it cannot see.
3. **Failure mode** — the most likely way it goes wrong.
4. **Counter-metric** — the number you watch to catch that failure.

Teams that do this argue less about whether the number is right and more about what to do next — which is the conversation the dashboard was supposed to start.

## Instrumentation is product design

The deeper point: what you can measure shapes what you can notice. A product that never logs a specific event is a product whose users' behaviour is partly invisible. That invisibility becomes strategy by default, because the roadmap follows the metrics.

So the next time a dashboard says something surprising, the useful question is not "is this true?" It is "what would the world have to look like for this number to be true, and is that the world we are in?"

That question scales from a single chart to an entire strategy.
