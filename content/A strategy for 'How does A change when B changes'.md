---
{"publish":true,"created":"2024-06-05T19:08:54.193+01:00","modified":"2025-08-22T19:12:52.030+01:00","cssclasses":""}
---

In some (especially Physics) problems, there is a system comprising a number of variables and some equations constraining those variables, and the problem asks how some change to the system, given some other facts, affects another variable. The obvious way to handle these questions is to represent (with arrows, for example), the changes to each variable, but there is no system or end goal here; usually the arrows just help with logically deducing the answer in no consistent way. Here is a better way, as illustrated by the below example.
## Question
> <small><i>Adapted from June 2016 AQA AS Physics Paper 1 (Question 4.5)</i></small>
> 
> A wire probe is used to measure the rate of corrosion in a pipe carrying a corrosive liquid. The probe is made from the same metal as the pipe.
> 
> Calculate the percentage change in the diameter of the probe when its resistance increases by $1.6 \%$
> 
> *Relevant equation: $\rho = \frac{RA}{L}$*
## Solution
Let $A_1$ be the original cross-sectional area of the probe. We assume $L$ and $\rho$ to be constant and we know the final resistance to be the initial resistance, $R$ multiplied by $1.016$. Hence we have:

$$
\begin{align}
\rho &= \frac{RA_1}{L} \\
\text{and}\,\rho&= \frac{1.016RA_2}{L} \\
\text{so}\, \frac{RA_1}{L} &= \frac{1.016RA_2}{L}
\end{align}
$$
Cancelling $L$ and $R$ we get:

$$
\begin{align}
A_1 &= 1.016A_2 \\
\implies \pi(\frac{D_1}{2})^2 &= 1.016\pi(\frac{D_2}{2})^2 \\
\implies \frac{D_1^2}{4} &= \frac{1.016D^2}{4} \\
\implies D_2 &= \sqrt{\frac{D_1^2}{1.016}} = D_1 \times \frac{1}{1.016}
\end{align}
$$

Thus the percentage change is $100 \times (1 - \frac{1}{1.016}) = 1.57\%$

In practice this question (worth 2 marks) could be solved much more quickly by taking shortcuts. This system is applicable to all levels of complexity, however. The only limiting factor is time.