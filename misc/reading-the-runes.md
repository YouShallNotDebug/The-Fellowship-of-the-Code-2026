# Reading The Runes

## Short Description Of The Code

Der Code soll Essensrationen automatisch berechnen. Der User gibt eine Menge ein und kann anschließend auswählen, ob diese dem Lagerbestand hinzugefügt oder davon entnommen werden soll. Die Anwendung soll anschließend anzeigen, wie viele Rationen aktuell verfügbar sind. Zu Beginn beträgt der Lagerbestand 10 Rationen. 

---

## Identified Issue 1

amountInput.value liefert standardmäßig einen String zurück. Dadurch kann es bei der Verwendung des +-Operators zu einer String-Verkettung statt zu einer mathematischen Addition oder Subtraktion kommen. 

**Where it occurs**

Zeile 28 und Zeile 35

**What the code intends to do**

Der Code soll die eingegebenen Rationen korrekt addieren oder bei einer Mahlzeit vom Lagerbestand subtrahieren. 

**What actually happens instead**

Da der eingegebene Wert als String behandelt wird, werden die Werte teilweise wie Zeichenketten aneinandergereiht, anstatt mathematisch berechnet zu werden. 

### Why the issue matters

**How it affects the user experience**

Die Kernfunktion der Anwendung funktioniert dadurch nicht korrekt. Der User erhält somit keinen verlässlichen Lagerbestand angezeigt. 

**How it could cause bugs later**

Der Logikfehler könnte sich an mehreren Stellen im System wiederholen und dadurch weitere Berechnungsfehler verursachen. 

**Why it would be risky in a larger system**

In größeren Systemen könnten dadurch falsche Daten verarbeitet oder gespeichert werden. Wenn sich Benutzer auf diese Berechnungen verlassen müssten, könnte dies zu erheblichen Problemen und unzuverlässigen Ergebnissen führen. 

### Description of fixes

Der eingegebene Wert sollte als Zahl definiert werden: 

Number(amountInput.value)

---

## Identified Issue 2

Im Eingabefeld können nicht nur Zahlen, sondern auch Buchstaben und andere ungültige Zeichen eingegeben werden. 

**Where it occurs**

Zeile 28 und Zeile 35

**What the code intends to do**

Der Code soll eine gültige Mengenangabe für die Rationen verarbeiten. 

**What actually happens instead**

Mit dem aktuellen Code können beliebige Zeichen eingegeben werden, ohne dass eine Fehlermeldung erscheint. 

### Why the issue matters

**How it affects the user experience**

Der User könnte versehentlich Buchstaben statt Zahlen eingeben und erhält dabei keine Rückmeldung über die fehlerhafte Eingabe. 

**How it could cause bugs later**

Dadurch können ungültige Werte verarbeitet und falsche Lagerbestände angezeigt werden. 

**Why it would be risky in a larger system**

Fehlende Eingabevalidierungen können zu fehlerhaften Datensätzen und später zu falschen Auswertungen oder Berechnungen führen.  

### Description of fixes

Es sollte mit einer If-Struktur überprüft werden, ob der eingegebene Wert NaN (Not a Number) ist: 

isNaN(value)

---

## Identified Issue 3

Die Funktion updateStatus() wird an der falschen Stelle ausgeführt. 

**Where it occurs**

Zeile 37

**What the code intends to do**

Der Code soll den Lagerbestand aktualisieren und den User warnen, wenn nicht genügend Rationen vorhanden sind. 

**What actually happens instead**

Die Fehlermeldung “Not enought rations!” wird angezeigt, bevor der Lagerbestand tatsächlich verändert wurde. Dadurch kann es zu einer Verwirrung beim User kommen. 

### Why the issue matters

**How it affects the user experience**

Die Anzeige kann für den User verwirrend sein, da die Fehlermeldung zu früh erscheint und somit den Lagerbestand verzerrt darstellt.  

**How it could cause bugs later**

Der Fehler könnte sich durch Wiederverwendung oder Erweiterung des Codes weiter verbreiten. 

**Why it would be risky in a larger system**

Falsche oder verspätete Statusanzeigen können in größeren Anwendungen zu Missverständnissen und fehlerhaften Entscheidungen führen. 

### Description of fixes

updateStatus() sollte erst nach der erfolgreichen Verarbeitung innerhalb der if-else-Struktur ausgeführt werden. 

