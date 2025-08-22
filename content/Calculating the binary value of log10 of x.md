---
{"publish":true,"created":"2025-08-21T18:47:58.219+01:00","modified":"2025-08-22T19:13:16.331+01:00","cssclasses":""}
---

First, divide $x$ by $10^n$, where $n$ is chosen such that $1\leq x/{10^n} \lt 10$. The integer part of $\log_{10}(x)$ is given by $n$. The binary expansion of the fractional part can be determined by the following procedure.

Start by setting $x_0=x/10^n$. To determine $b_k$ (the $k$th digit of the binary expansion):
- $b_k=0$ if $x_{k-1}^2<10$. In this case, $x_k=x_{k-1}^2$.
- $b_k=1$ if $x_{k-1}^2\geq10$. In this case, $x_k = x_{k-1}^2/10$
