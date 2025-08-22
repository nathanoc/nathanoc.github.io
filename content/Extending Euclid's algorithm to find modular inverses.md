---
{"publish":true,"created":"2025-02-27T18:30:50.865+00:00","modified":"2025-08-22T19:15:30.049+01:00","cssclasses":""}
---

```python
def inverse(n, p):
    initial_p = p
    n_coefs = (1, 0)
    p_coefs = (0, 1)
    r = -1
    while r != 1:
        d, r = divmod(n, p)
        n_coefs, p_coefs = p_coefs, (n_coefs[0] - d * p_coefs[0], n_coefs[1] - d * p_coefs[1])
        n, p = p, r
    return p_coefs[0] % initial_p
```

The variables `n_coefs` and `p_coefs` express the current values of `n` and `p` (typically `m` and `n` in Euclid's algorithm) as a linear combination of the input values of `n` and `p` . By keeping track of these coefficients, we end up with an expression for 1 as a linear combination of `n` and `p`. The coefficient of `n` is then the modular inverse of `n` mod `p`.