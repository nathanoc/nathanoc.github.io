---
{"publish":true,"created":"2025-08-04T14:38:06.876+01:00","modified":"2025-08-22T19:15:23.363+01:00","cssclasses":""}
---

Euclid's algorithm finds the greatest common divisor of two positive integers $m$ and $n$.

Here is the algorithm as Knuth notated it.

**E1.** \[Find remainder.] Divide $m$ by $n$ and let $r$ be the remainder. (We will have $0 \leq r \lt n$).
**E2.** \[Is it zero?\] If $r=0$, the algorithm terminates; $n$ is the answer.
**E3.** \[Reduce.\] Set $m \leftarrow n$, $n \leftarrow r$, and go back to step E1.