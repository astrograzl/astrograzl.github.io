---
title: Game of Chaos
tags: python, chaos
layout: post
---

Je to hra. Je to hra o náhodě. Je to hra s nejistým počátkem. Je to hra s předem daným koncem. Je to hra o nemožnosti učinit špatnou volbu. Je to hra tolerující drobné nepřesnosti. Je to hra o životě. Je to hra s absencí hráče.

<!--more -->

![Game of Chaos](/img/game.png)

```python
#!python3
# coding: utf-8
"""Game of Chaos"""

import random
import matplotlib.pyplot as plt

x = []
y = []

A = [0.0, 0.0]
B = [1.0, 0.0]
C = [0.5, 1.0]

x0 = random.uniform(0, 1)
y0 = random.uniform(0, 1)

for i in range(100000):
    V = random.choice([A, B, C])
    x.append(x0 + (V[0] - x0) / 2)
    y.append(y0 + (V[1] - y0) / 2)
    x0 = x[-1]
    y0 = y[-1]

plt.title("Game of Chaos")
plt.plot(A[0], A[1], "b,")
plt.plot(B[0], B[1], "b,")
plt.plot(C[0], C[1], "b,")
plt.plot(x, y, "b,")
plt.show()
```

