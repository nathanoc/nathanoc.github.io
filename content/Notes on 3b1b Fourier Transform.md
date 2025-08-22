---
{"publish":true,"created":"2025-03-11T18:21:35.673+00:00","modified":"2025-08-22T19:17:18.632+01:00","cssclasses":""}
---

Take a signal composed of multiple frequencies, and have its intensity be the length of a vector (rotating at some other frequency) about the origin (i.e. a polar curve). If we take the x-coordinate of the centre of mass of that polar curve, we see a spike at where the frequency of rotation of the vector is equal to the frequency of oscillation of the signal. This is the "almost-Fourier Transform", and it is linear: the almost-Fourier Transform of the sum of two signals equals the sum of the almost-Fourier transforms of the two signals.

$g(t)e^{-2\pi i f t}$ gives a rotating vector with an angular frequency of $f$ and a magnitude of the height of $g(t)$. Integrating that (and dividing by the time interval) gives you the centre of mass - the "almost-Fourier Transform". The actual Fourier transform is this integral, but not divided by the length of the time interval (so scaled up). The Fourier transform is notated as $\hat{g}(f)$.