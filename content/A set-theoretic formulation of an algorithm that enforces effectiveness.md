---
{"publish":true,"created":"2025-08-04T18:10:19.927+01:00","modified":"2025-08-22T19:12:46.814+01:00","cssclasses":""}
---

This builds on the formulation of an algorithm given [[Defining an algorithm in terms of set theory\|here]]. We will place restrictions on $Q$, $I$, $\Omega$ and $f$ so as to enforce effectiveness.

Let $A$ be a finite set of letters, and let $A^*$ be the set of all strings on $A$. Let $N$ be a nonnegative integer: we will then have $Q$ be the set of all $(\sigma, j)$ where $\sigma \in A^*$ and $0\leq j\leq N$.

So $Q$ is the set of ordered pairs of strings in $A^*$ and integers from $0$ to $N$. We will then have $I$ be the subset where $j=0$, and $\Omega$ be the subset where $j=N$.

We will define $f$ in terms of two lists of strings and two lists of integers. The strings and integers are given by $\theta_j$, $\phi_j$, $a_j$ and $b_j$ respectively, for $0\leq j \leq N$.
$$
\begin{align}
f((\sigma,j))&=(\sigma,a_j) & \text{if } \theta_j \text{ does not occur in } \sigma; \\
f((\sigma,j))&=(\alpha\phi_j\omega,b_j) & \text{if } \alpha \text{ is the shortest possible string for which }\sigma=\alpha\theta_j\omega; \\
f((\sigma,N))&=(\sigma,N) & \text{(thus} f \text{ leaves } \Omega \text{ pointwise fixed)}
\end{align}
$$
In words: $f$ takes a pair $(\sigma,j)$, and branches the computation according to whether $\theta_j$ occurs in $\sigma$. If it does, then it substitutes $\theta_j$ by $\phi_j$ in $\sigma$, and switches $j$ for $b_j$. Otherwise, $f$ does nothing to the string; it simply substitutes $j$ for $a_j$.