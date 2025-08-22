---
{"publish":true,"created":"2024-11-12T23:02:52.976+00:00","modified":"2025-08-22T19:17:09.607+01:00","cssclasses":""}
---

A language is a subset of the set of all strings of a language. For an alphabet such as $\{\mathrm{a,b}\}$ the set of all languages looks as follows: $$\{\{\text{a}\},\{\text{b}\},\{\text{a},\text{b}\},\{\text{aa},\text{b}\},\{\text{ababab},\text{bababa}\},\{\text{aaaaaa}\},\dots\}$$We can represent this slightly differently: (here $\varnothing$ is used to indicate the non-presence of an element so that each set can be represented as infinitely large)
$$
\begin{array} \\
\{\\
&\{\mathrm{a, \varnothing, \varnothing, \varnothing, \dots}\},& \\
&\{\mathrm{b, \varnothing, \varnothing, \varnothing, \dots}\}, \\
&\{\mathrm{aa, \varnothing, \varnothing, \varnothing, \dots}\}, \\
&\{\mathrm{a, b, aa, bb, \varnothing, \dots}\}, \\
&\dots \\
\}
\end{array}
$$
This resembles the set of real numbers:
$$
\begin{array} \\
\{ \\
&1.59718371\dots,& \\
&2.48357439\dots,& \\
&3.49185748\dots,& \\
&0.18194980\dots,& \\
&\dots \\
\}
\end{array}
$$
Both sets are uncountable: by Cantor's diagonal argument, we can make a new real number by changing the first digit of the "first" number, the second digit of the "second" and so on; likewise we can make a new language by changing the first string of the "first" language, the second string of the "second" and so on. Regular expressions, however, are strings, and therefore they are countable. Thus there cannot exist a bijection between regular expressions and the set of all languages on an alphabet. This implies that not all languages have a corresponding regular expression, as each regular expression matches exactly one language, so if every language had a corresponding regular expression then there would be a bijection.