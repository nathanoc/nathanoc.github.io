---
publish: true
---
A minterm for $n$ variables is the conjunction of all variables, each of which may be complemented. For example, $x\cdot\bar{y}\cdot z$ is a minterm of three variables.

It can be useful to consider the minterms that correspond to the $1$ outputs of a function. For example, the minterms satisfying the function below are $\bar{a}\cdot\bar{b}\cdot c$, $\bar{a}\cdot b \cdot\bar{c}$, $a \cdot \bar{b} \cdot \bar{c}$ and $a\cdot b \cdot \bar{c}$.

Note that $a \cdot \bar{c}$ is not a minterm because it does not contain all three variables.

| A   | B   | C   | f(A,B,C) |
| --- | --- | --- | -------- |
| 0   | 0   | 0   | 0        |
| 0   | 0   | 1   | 1        |
| 0   | 1   | 0   | 1        |
| 0   | 1   | 1   | 0        |
| 1   | 0   | 0   | 1        |
| 1   | 0   | 1   | 0        |
| 1   | 1   | 0   | 1        |
| 1   | 1   | 1   | 0        |
Taking the disjunction of all minterms expresses a function in [[Disjunctive normal form\|disjunctive normal form]].

Using De Morgan's laws, it can be shown that the corresponding [[Maxterms in Boolean algebra\|maxterm]] is given by complementing each term in the minterm (and replacing the $\cdot$ operations with $+$).