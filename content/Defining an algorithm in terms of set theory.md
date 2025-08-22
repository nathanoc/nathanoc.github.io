---
{"publish":true,"created":"2025-08-04T13:21:52.359+01:00","modified":"2025-08-22T19:14:40.300+01:00","cssclasses":""}
---

Let a *computational method* be a quadruple $(Q,I,\Omega,f)$.
- $Q$ represents the states of the computation
- $I$ represents the set of all inputs, and so is a subset of $Q$
- $\Omega$ represents the set of all outputs, and so is a subset of $Q$
- $f$ represents the computational rule, and so leaves $\Omega$ pointwise fixed ($\forall q \in \Omega, f(q)=q$)

For every input $x$ in $I$, there is some computational sequence of the form
$$
\begin{align}
x_0=x &&\text{and} && x_{k+1}=f(x_k) \text{ for } k\geq0.
\end{align}
$$
This sequence *terminates in $k$ steps* if $k$ is the smallest integer for which $x_k$ is in $\Omega$.

> [!example]- Euclid's Algorithm
> Let $Q$ be the set of all singletons $(n)$, ordered pairs $(m,n)$, and ordered quadruples $(m,n,r,1)$, $(m,n,r,2)$, $(m,n,p,3)$ where $m$, $n$ and $p$ are positive integers and $r$ is a nonnegative integer.
> 
> Let $I$ be the subset of all pairs $(m,n)$, and $\Omega$ be the subset of all singletons $(n)$.
> 
> Let $f$ be defined as follows.
> $$
> \begin{align}
> f\left((m,n)\right) &= (m,n,0,1) & \text{Receives input}\\
> f\left((n)\right) &= (n) & f \text{ leaves } \Omega \text{ pointwise fixed}\\
> f\left((m,n,r,1)\right) &= (m, n, \text{remainder of } m \text{ divided by } n, 2) \\
> f\left((m,n,r,2)\right) &= (n) \text{ if } r=0, (m,n,r,3) \text{ otherwise} \\
> f\left((m,n,p,3)\right) &= (n,p,p,1) & \text{Return to start of ``loop''}
> \end{align}
> $$
> 
> See [[Euclid's algorithm]]

This formulation of an algorithm does not enforce effectiveness. A version that does is detailed [[A set-theoretic formulation of an algorithm that enforces effectiveness\|here]].