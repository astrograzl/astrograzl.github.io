---
title: Konvoluce
tags: python, cnn, ml, ai
layout: post
---

Přichází noc, na setmělém nebi se objevují první hvězdy,
vysoko na obloze klidně září Jižní Kříž. Světlo k nám přináší
poselství dalekých míst a dávných věků. Oči i srdce z křemíku,
mysl v oblacích přemýšlí a taky se učí se číst.
Krátká pozastavení v procesu optimalizace.
Mapa vyhlídek na vzpomínky budoucích cest.
Pochopení významu *feature-map* v kontextu.
Operace s poli v *n*-dimenzionálním tensoru.
Trocha toho šílenství prý nikomu neublíží...

<!-- more -->

[![image](/img/weight.png)](/img/intro.mp4)

```python
import numpy as np

def spec2d(spec):
    """Reshape linear spectrum to square"""
    n = len(spec)
    a = int(np.ceil(np.sqrt(n)))
    spec2d = np.append(spec, np.zeros(a**2-n))
    return np.reshape(spec2d, (a, a))
```

¶ [Trip → La Silla](http://www.physics.muni.cz/~janak/tip/)
