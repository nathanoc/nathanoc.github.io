---
{"publish":true,"created":"2025-02-09T20:15:34.625+00:00","modified":"2025-08-22T19:16:25.361+01:00","cssclasses":""}
---

The moment of inertia of a uniform disc is $\frac{1}{2}mR^2$.
![[attachments/Pasted image 20250209201550.png]]
Let the mass per unit area of the disc be $\rho$.

Mass of "donut" with radius difference $\mathrm{d}r$ is $\rho \pi (r + \mathrm{d}r)^2 - \pi r^2 = 2 \rho \pi r \mathrm{d}r + \rho \pi \mathrm{d}r^2$. We ignore the $\rho \pi \mathrm{d}r^2$ term as it becomes negligible compared to the $2\rho \pi r \mathrm{d}r$ term as $\mathrm{d}r$ becomes small, so we have that the total moment of inertia is $\int_0^R 2\rho \pi r^3 \mathrm{d}r$ which is $[\frac{1}{2}\rho \pi r^4]_0^R = \frac{1}{2}\rho \pi R^4$. Noting that $\rho = \frac{m}{\pi R^2}$, we have that the moment of inertia is $\frac{1}{2}mR^2$.

[[List of moments of inertia of shapes]]