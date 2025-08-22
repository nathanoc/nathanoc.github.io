---
{"publish":true,"created":"2025-03-06T18:57:03.804+00:00","modified":"2025-08-22T19:15:18.176+01:00","cssclasses":""}
---

$$
\begin{align}
&\mathbf{Mv}=\lambda \mathbf{v} & \text{(by definition of eigenvalue/eigenvector)}\\
&\implies \mathbf{Mv} = \lambda \mathbf{Iv} \\
&\implies \left(\mathbf{M} - \lambda \mathbf{I}\right)\mathbf{v} = \mathbf{0} \\
&\implies \det (\mathbf{M} - \lambda \mathbf{I}) = 0 & \text{(as $\mathbf{M}$ maps $\mathbf{v}$ to the origin)}
\end{align}
$$
Hence
$$
\det \begin{pmatrix}
a - \lambda & b & c \\
d & e - \lambda & f \\
g & h & i - \lambda
\end{pmatrix} = 0
$$
We can - e.g. by doing $\begin{pmatrix}a-\lambda \\ d \\ g\end{pmatrix}\times\begin{pmatrix}b \\ e-\lambda \\ h\end{pmatrix} \cdot \begin{pmatrix}c\\f\\i-\lambda\end{pmatrix}$ - produce a polynomial equation in $\lambda$, the solutions of which will be the eigenvalues of $\mathbf{M}$. This polynomial is called the characteristic polynomial of $\mathbf{M}$.

The Cayley-Hamilton theorem states that $\mathbf{M}$ always satisfies its own characteristic polynomial.