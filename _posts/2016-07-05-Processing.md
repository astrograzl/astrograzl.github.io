---
title: Processing
tags: art, code
layout: post
---

<script src="/src/p5.js"></script>
<script src="/src/spoje.js"></script>
<div id="spoje"></div>

Neopakovatelnost okamžiku postavená na náhodě. Výřečnost jazyka s kořeny v *Javě*. Generované umění a virtuání galérie. Krásný je kód a krásný je i jeho výsledek. Inspirace v přírodě, v chaose, ve fraktálech. Spojení technologií do sítě informací. Instrukce pro stroje a komentáře pro lidi. Co oči nevidí se ukrývá ve zdroji. Umělé narušení symetrie. Pokřivené vnímání času a prostoru. Na startu bez cíle. Vynucené ukončení programu.

```java
void setup() {                         // nastavení
  size(800, 600);                      // velikost plátna
  frameRate(0.3);                      // počet snímků za sekundu
  stroke(42);                          // odstín šedi čáry
  strokeWeight(2);                     // šířka čáry
  background(255);                     // barva pozadí
}

void draw() {                          // vykreslení
  background(255);                     // mazání plátna
  translate(width/2, height/2);        // posun počátku souřadnic
  for (int i = 512; i > 0; i -= 64) {  // začátek cyklu
    float dr = random(2);              // náhodné otočení
    float dx = random(5);              // náhodné posunutí v ose x
    float dy = random(7);              // náhodné posunutí v ose y
    float da = random(9);              // náhodné protažení v hlavní poloose
    float db = random(11);             // náhodné protažení ve vedlejší poloose
    float r = random(255);             // náhodná červená
    float g = random(255);             // náhodná zelená
    float b = random(255);             // náhodná modrá
    fill(r, g, b);                     // barva výplně
    rotate(dr*PI);                     // otočení
    ellipse(dx, dy, i+da, i+db);       // letokruh
  }                                    // konec cyklu
}
```

* [Processing](https://processing.org/)

