---
{"publish":true,"created":"2024-06-24T18:49:32.198+01:00","modified":"2025-08-22T19:17:05.743+01:00","cssclasses":""}
---

By exploiting implicit casting in JavaScript (e.g. putting a `+` before anything converts it to a number; adding an empty list to anything converts it to a string; inverting anything with an `!` converts it to a bool) we can generate any string of text, and can access the function constructor which takes in a string, thereby allowing us to define and execute any function.