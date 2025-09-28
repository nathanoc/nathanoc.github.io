---
{"publish":true,"created":"2025-08-18T17:44:02.678+01:00","modified":"2025-09-06T16:39:04.017+01:00","cssclasses":""}
---

This method uses induction to prove that an algorithm always produces the correct answer, if it terminates. Proofs that the algorithm terminates are usually handled separately.

This method is represented by a flowchart on page 15 of [[The Art of Computer Programming]].

We firstly break down the algorithm into steps. After each step, we make an assertion which must be true after this step. For simplicity, where multiple statements are made after a given step, we consider that as being grouped into a single assertion - for example, "$m \leq n$ and $mn=q$" together could be a single assertion.

Where the computation branches, the assertion made will depend on which branch is taken - for example, "if $r=1$, assert $n$ odd, else assert $n$ even". If we can prove that each assertion follows from the previous assertion in combination with the operation performed in between, then we know by induction that whenever the end of the computation is reached, the final assertion made is true. That assertion will state that the program has produced the correct answer - for example, in the [[Euclid's algorithm\|Euclidean algorithm]], it would be asserted that the output equals the greatest common divisor of the inputs.

The path we follow through the algorithm will be different depending on the inputs, due to branching. Nonetheless, we can produce a general proof by induction that accounts for this. Here is what such a proof would look like.

> [!PROOF]-
> I wrote this proof myself, so it may contain errors.
> 
> Let $m$ be the total number of assertions in the algorithm, and $n$ be the total number of (not necessarily unique) assertions encountered during a particular running of the algorithm. Let $A_1 \cdots A_m$ be the set of assertions, and $a_1 \cdots a_n$ be the sequence of encountered assertions until the termination of the program. Let $\alpha_k$ be the set of possible assertions that can follow after $A_k$. So $\alpha_k \subseteq \{A_1 \cdots A_m\}$.
> 
> Firstly, prove that $a_1$ is true for any given input. Then prove that, for all $k \in \{1\cdots m\}$, $\alpha_k$ is proven by its corresponding operation in combination with $A_k$. Assume $a_i$ is true for some integer $i$. The assertion $a_i$ corresponds to some assertion $A_j$, and $a_{i+1}$ is in $\alpha_j$. It has been proven that $A_j$ (and the operations that follow it) imply all assertions in $\alpha_j$. Therefore, using the operation preceding $a_{i+1}$, $a_i$ implies $a_{i+1}$ for all integers $i$. Thus, since $a_1$ has been proven to be true, all assertions $a_1 \cdots a_n$ are true by induction.

This general principle can be used to formulate a semantic definition of each operation in a programming language, as a logical rule that says exactly what assertions can be made after the operation, based on what operations are true beforehand. Reversing this (finding the "weakest precondition" that must be true before an operation, in order for a given assertion to be true afterward) can be used to discover new algorithms that are guaranteed to be correct.