---
title: Gaia Progress II
tags: art, code, python
layout: post
---

![map](/img/important.png)

<!-- more -->

Vytváření grafů reprezentujících nějaký vědecký výsledek, jsem vždy považoval tak trochu za magii. Ono taky hodně záleží na tom, jaké si vyberete data, jaký znak jim přiřadíte a taky barvu. Tady kontrast nad pozadím můžete podrhnout vhodným odstínem šedé. Také rámečky, aby byly dostatečně široké. A pak se vyznejte v tom, co jste malovali štětcem na papír ve výtvarné hodině na základní škole. Jak zněl ten dotaz na DNA v SQL?

```python
plt.title("Identity of moving parts ..: from Gaia import Hipparcos")
plt.xlabel("Right ascension")
plt.ylabel("Declination")
plt.xlim([0, 2*np.pi])
plt.ylim([-np.pi/2, np.pi/2])

plt.scatter(np.deg2rad(hipp.ra+2*hipp.pmra*1e-6),
            np.deg2rad(hipp.dec+2*hipp.pmdec*1e-6),
            s=2.7, c="white", lw=0, alpha=0.8,
            label="Gaia 2018")

plt.scatter(hip2.RArad+20*hip2.pmRA*1e-6,
            hip2.DErad+20*hip2.pmDE*1e-6,
            s=8.3, c="cyan", lw=0, alpha=0.3335,
            label="Hipparcos 2017")

plt.scatter(hip2.RArad,
            hip2.DErad,
            s=3.2, c="yellow", lw=0, alpha=0.3335,
            label="Hipparcos 1997")

plt.scatter(np.deg2rad(hipp.ra),
            np.deg2rad(hipp.dec),
            s=1.5, c="magenta", lw=0, alpha=0.3335,
            label="Gaia 2016")

plt.legend(loc="upper center", ncol=4,
           markerscale=6,
           frameon=True);

plt.savefig("important.png")
```

* [Gaia Jupyter notebook](https://gist.github.com/astrograzl/1aa8a7f82a92d0a35c88d7dd3c0fb96e#file-jupyter-ipynb)
