---
{"publish":true,"created":"2025-01-31T17:39:00.642+00:00","modified":"2025-08-22T19:15:06.516+01:00","cssclasses":""}
---

Consider a Chi-squared test where we have a sample of data and we're interested in whether that data follows some distribution.

If we have a reason to believe that the data follows a distribution with specific parameters - e.g. $\text{Bin}(20, 0.5)$ - then the number of degrees of freedom to use in the Chi-squared test is the number of columns (frequency bands) minus one, as, knowing the total sample size, the frequency of the last column can be determined based on the other columns.

If we don't know what parameters the distribution follows, then we estimate the parameters. This reduces the number of degrees of freedom by $1$ for each estimated parameter, as given all but two columns, it is possible to determine both remaining values based on a parameter and the total sample size.