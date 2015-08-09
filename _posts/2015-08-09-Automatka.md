---
layout: post
title: Automatická pračka
tags: python
---

*Představ si pračku, ke které by jsi přišla s košem plným špinavého 
prádla a bez třídění ho mohla do ní vysypat. Pračka by už sama podle 
štítků poznala, jak ho má správně prát. A co by na tom štítku mělo být? 
No přece QR-kód, když je to automatická pračka. Tak přestaň na chvíli snít a zkus 
si sama naprogramovat svého vlastního robota.*


[![Automatka](/img/automatka.png)](/src/automatka.py "Klikni pro stažení zdrojového kódu...")

## Import potřebných modulů

```python
import logging as log
from zlib import adler32 as hash
```

## Nastavení informování

```python
log.basicConfig(level=log.INFO)
```


## Třída pro automatickou pračku

```python
class Pracka:
    """Automatická pračka se schopností spouštět specifický program
    pro každý druh prádla identifikovaný podle QR-kódu na jeho štítku
    """


    ## Naplnění pračky
    
    def __init__(self, kos):
        """Naplnění automatické pračky"""
        self.kos = []
        for kus in kos:
            self.kos.append(kus.encode())
    
    
    ## Spuštění pračky
    
    def run(self):
        """Spuštění automatické pračky"""
        self.trideni()
        self.start()
        self.stop()
    
    
    ## Roztřídění prádla
    
    def trideni(self):
        """Roztřídí plný koš špinavého prádla podle hashe QR-kódu na štítku"""
        self.obleceni = []
        for kus in self.kos:
            self.obleceni.append(hash(kus))
    
    
    ## Spuštění praní
    
    def start(self):
        """Start automatického praní"""
        # začíná třídit prádlo
        log.info("Spouštím automatickou pračku...")
        for kus in self.obleceni:
            try:
                log.info("Spouštím program {}...".format(kus))
                self.program(kus)
            except Neznam:
                log.info("Neznámý kus oblečení")
            finally:
                log.info("...program {} ukončen.".format(kus))
    
    
    ## Program pro každé prádlo
    
    def program(self, kus):
        """Běh programu"""
        log.info("...program {} běží...".format(kus))
    
    
    ## Ukončení praní
    
    def stop(self):
        """Zastavení automatické pračky"""
        log.info("...zastavuji automatickou pračku.")
```


## Hlavní program

```python
if __name__ == "__main__":
 
    ## Koš se špinavým prádlem
    spinave_pradlo = [
        "ponožky",
        "trenýrku",
        "trička",
        "košile",
        "ručníky",
        "kalhoty",
        "mikina"
    ]
    
    ## Naplnění pračky
    pracka = Pracka(spinave_pradlo)
    log.info("Zahajuji praní...")
    pracka.run() ## Spuštění pračky
    log.info("...praní dokončeno.")
```

***

P.S.: Než prádlo pověsíš na šňůru, tak ho pořádně roztřepej, uschne pak tak, že se už nemusí žehlit. Kolíčky taky nejsou třeba, snad jen na ponožky, aby náhodou neuletěly k sousedům ;-)