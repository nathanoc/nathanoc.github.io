---
{"publish":true,"created":"2025-03-11T18:21:35.684+00:00","modified":"2025-08-22T19:12:40.575+01:00","cssclasses":""}
---

We are given: $\alpha$ and $\beta = \alpha^x$ (all mod some $p$), and we want $x$.

Firstly, we want to find some pair of numbers $a$ and $b$ such that $\alpha^a=\beta^b$. We can try random pairs $a_i$, $b_i$ until we find two pairs such that $\alpha^{a_i}\beta^{b_i}=\alpha^{a_j}\beta^{b_j}$. Then by dividing both sides by $\alpha^{a_j}\beta^{b_i}$ we get $\alpha^{a_i-a_j}=\beta^{b_j-b_i}$. So $a$ = $a_i-a_j$, and $b = b_j-b_i$.

Now that we have $\alpha^a = \beta^b$, we can find $x$ by raising both sides to the power of $b^{-1}$. If $b$ does not have a unique inverse modulo $p-1$, then it's over.