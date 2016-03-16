#  Kurze Tour durch mein Entwicklerwohnzimmer

.fx: fullImage

![lden](img/hackers-den.jpg)

--------------------------------

#  Jetbrains PyCharm

.fx: fullImage

![pycharm](img/pycharm-logo.png)

---

#  Was erwartet ihr von einer IDE?

# Presenter Notes

Gibt's da Meinungen bei den Zuhörern?

---

.fx: fullImage

![wollmilchsau](img/wollmilchsau.jpg)

# Presenter Notes

**Eierlegende Wollmilchsau**

Muss ich während der Entwicklung selten verlassen

---

#  Was ich **nicht** erwarte ...

---

![bad](img/multiple-cursors.gif)

Geht aber auch mit [ideavim](https://confluence.jetbrains.com/display/PYH/Configuring+PyCharm+to+work+as+a+Vim+editor)

# Presenter Notes

**Vim-artige Textmanipulation**

Ich komme eher vom Klavier und spiele lieber Accorde als Licks

Symbolmanipulationen sind mir wichtiger (z.B. Name und Move Refactoring)

Eine IDE ist was anderes als ein Text Editor

Programmieren ist auch was anderes als Text editieren

**Ich will einen Pedanten mit Lexokonwissen haben, der mir beim Tippen hilft**

---

![good](img/pair-programming.jpg)

# Presenter Notes

**Pair programming ohne pair programmer**

Jemand der auf alles achtet, was ich gern vergesse

... der jeden Syntaxfehler sieht

... der PEP8 Fehler sofort sieht

... der mich auf fehlende Parameter in format strings hinweist

... der alle Feinheiten der verschiedenen Python Versionen kennt

... der weiß wo alle Funktionen, Klassen und Module sind

... der mir beim Fixen der Fehler hilft

---

![bad](img/pair-programming-fail.jpg)

# Presenter Notes

den ich aber getrost ignorieren kann **(Quick fix Warnung aus)**

---

# Passt zu meiner Art zu Arbeiten

![ordnung](img/ordnung.jpg)

---

## Projektorientiert

* [.idea](https://www.jetbrains.com/help/pycharm/5.0/project.html)
* Projektstruktur (source root, excludes, templates)
* Projekt Interpreter
* Mehrere Repositories in einem Projekt (synchronisierbare branches)
* Datenbankdetails

---

## Unterstützt meine Frameworks und Tools

[Teilweise nur Professional Edition](https://www.jetbrains.com/help/pycharm/5.0/languages-and-frameworks.html)

* Flask
* sqlalchemy
* Foundation
* vagrant
* Docker

---

### formate, Formate, FORMATE

* Python
* SQL
* Direkter Datenbankzugriff
* Javascript
* CSS / SCSS / LESS
* HTML
* YAML
* JSON
* Jinja2
* Bash
* Markdown (sehr gut mit Multimarkdown)
* restructuredText
* Ruby (Vagrantfiles) -> textmate bundle


## Erlernbarkeit und Konfigurierbarkeit

* Productivity Guide
* Help -> Find Action
* Settings gut strukturiert mit Suchfunktion
* [Plugins!](https://plugins.jetbrains.com/?pycharm)
    * [Key Promoter](https://plugins.jetbrains.com/plugin/1003)
    * [MultiMarkdown](http://vladsch.com/product/multimarkdown)
    * [Bash Support](https://github.com/jansorg/BashSupport)
    * [.ignore](https://plugins.jetbrains.com/plugin/7495?pr=pycharm)
    * [Databse Navigator](https://confluence.jetbrains.com/display/CONTEST/Database+Navigator)
**
---

# Hilfe bekommen

* [Sehr gute Dokumentation](https://www.jetbrains.com/pycharm/documentation/)
* Statische Code Analyse (MMn unerreicht von anderen Tools)
* Viele Quick Fixes für Konfigurationsprobleme, fehlende Pakete, Probleme im Code
* Gute Integration mit Entwicklungsaktivitäten
    * Code ausführen (Run script, Evaluate Expression)
    * update/commit/push code from VCS (git, mercurial, svn, ...)
    * create/switch branches/tags
    * Local History / VCS history
    * Compare Files / read diffs
    * Vor Commit: Code Analyse / Import Optimierung / Todos checken
    * Share project on Github
    * Share code / console output as gist
* Überall kann man einfach suchen (Projektdateinamen, Edtor, Global, Scope, ...)

---

## Liebe zum Detail

* ``Esc`` -> spring von überall zurück in den letzten aktiven Editor
* ``Alt, Alt`` -> Toolfensterknöpfe einblenden
* ``Shift, Shift`` -> Search Everywhere
* ``Alt+Enter`` (über Fehler/Warnung/Intention) -> Quick Fix
* ``F1`` -> Terminal einblenden und wieder ausblenden
* CamelCase/slug_case sensitive Suche
* Optionen direkt in Find Action / Search Everywhere anpassen 
* Toolfenster Navigation (z.B. ``Alt+<1-9>`` - frei konfigurierbar)
* Toolfenster konfigurierbar (Floating, Docked, Pinned)
* Favoriten, Bookmarks, QuickLists
* Modes (Presentation, Distraction Freee)
* Darcula Theme!1!!

# Presenter Notes

Suche1: monty-python.jpg -> mp

Suche2: pycharm/wollmilchsa.jpg -> upy/wo

Optionen1: line numbers

Optionen2: code folding

---

# Bequemlichkeit

* Code Vervollständigung
* Code Navigation
* Switcher (``Strg+Tab``, Recent Files: ``Strg+E``)
* TODOs werden gescannt und in Toolfenster angezeigt
* Schnelle Erreichbarkeit aller wichtigen Funktionen
* Individualisierung 
    * Frei konfigurierbare Maus/Keyboard Shortcuts für alles
    * selbstkonfigurierbare Quicklists
* File / Code / Live Templates

---

# Analyse / Fehlervermeidung / Optimierung

* Code inspections mit Quick Fixes direkt im Editor
* Guter Visueller Debugger
* Visueller Profiler

---

# Testen

* Tools -> Python Integrated Tools
* Schöne Darstellung, mit Navigation zum betroffenen Code
* Konkrete Testfunktion, Klasse, Modul vom Code aus starten
* Auto rerun von Tests
