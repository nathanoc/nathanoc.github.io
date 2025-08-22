---
{"publish":true,"created":"2024-09-30T22:37:34.493+01:00","modified":"2025-08-22T19:15:04.151+01:00","cssclasses":""}
---

Reducibility Among Combinatorial Problems: [karp.pdf (uoa.gr)](https://cgi.di.uoa.gr/~sgk/teaching/grad/handouts/karp.pdf)

At the start of Chapter 3, a difficult definition of NP is given. This note is breaking down that definition.

Consider the set of all pairs of strings over an alphabet, such that that pair is recognisable as a member of that set in polynomial time. There are various ways we could recognise a pair - there could be separate rules for each element of the pair (e.g. element 1 must be a multiple of 2, element 2 must be a multiple of 3) or there could be some kind of relationship between the elements (e.g. element 2 must be double element 1) or the pairs could just be members of some finite set and so are identifiable simply by comparing them against every element in that set. In Karp's paper, $L^{(2)}$ denotes any such set, and $\mathcal{P}^{(2)}$ denotes the set of all such sets.

For a given $L^{(2)}$, $L$ is the set of all of the first elements of the pairs, where the size of the second element of the pair is bounded polynomially with respect to the first. Consider the possibility that the elements in the pairs are connected by some relationship. Seeing as $L^{(2)}$ effectively denotes a rule by which pairs can be identified, $L$ denotes the set of first elements $x$ of pairs, such that the _additional information needed_ - that is, the second element of the pair, $y$ - to identify the pair as a member of $L^{(2)}$ in polynomial time, has a length bounded polynomially with respect to the size of $x$.

This all comes together when you imagine that $y$ is a proof certificate for $x$'s membership of the set. NP is the set of pairs such that, given some proof certificate of polynomial length, it is possible to verify that $x$ is a valid member of some set, within polynomial time.

It was already specified at the start that our algorithm for checking whether the pair is in $L^{(2)}$ must run in polynomial time - so why must we then specify that $y$ is also of polynomial length with respect to $x$? The answer is that our pair-checking algorithm must run in polynomial time _with respect to the size of the pair_, not with respect to the size of $x$. To ensure that the algorithm runs in polynomial time with respect to the size of $x$, we must bound $y$ polynomially, as otherwise to simply read the value of $y$ could require more than polynomial time.