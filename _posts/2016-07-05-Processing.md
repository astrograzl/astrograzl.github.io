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
void setup() {                    // nastavení
  size(800, 600);                 // velikost plátna
  frameRate(3);                   // počet snímků za sekundu
  stroke(42);                     // barva čáry
  strokeWeight(2);                // šířka čáry
  rectMode(CENTER);               // způsob umístění čtverce
}

final int min = 8;                // minimální průměr
final int max = 64;               // maximální průměr
int end = 96;                     // počet objektů

float s;                          // průměr
float x, x0;                      // souřadnice v ose x
float y, y0;                      // souřadnice v ose y
float r, g, b;                    // složky barvy RGB

void draw() {                     // vykreslení
  if (end++ == 96) {              // bylo-li dosaženo cíle
    end = 0;                      // zpátky na začátek
    delay(3000);                  // vyčkej chviličku
    x = width/2;                  // uprostřed šířky
    y = height/2;                 // uprostřed výšky
    fill(255);                    // barva výplně
    background(255);              // barva pozadí
    rect(x, y, 25, 25);           // malý čtvereček
  }

  x0 = x;                         // původní souřadnice x
  y0 = y;                         // původní spuřadnice y
  
  r = random(255);                // náhodná červená
  g = random(255);                // náhodná zelená
  b = random(255);                // náhodná modrá
  
  s = random(min, max);           // náhodný průměr
  
  if (random(2) < 1) {            // pokud padne panna
    x = random(max, width-max);   // náhodná souřadnice x
  } else {                        // jinak
    y = random(max, height-max);  // náhodná souřadnice y
  }

  fill(r, g, b);                  // barva výplně
  line(x0, y0, x, y);             // spojovací čára
  ellipse(x, y, s, s);            // kružnice
}
```

* [Processing](https://processing.org/)

