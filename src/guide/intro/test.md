# ESP 32 -- Introductie



![example image](./images/feather_pinouttop.jpg "An exemplary image")

---



## Hardware

Er zijn verschillende versies van de esp32 op de markt te verkrijgen. Verschillende fabrikanten hebben hun eigen versie op de markt gebracht. Het nadeel van dit aanbod is dat er naar pincompatibiliteit geen afspraken zijn gemaakt en er dus afwijkingen kunnen zijn op dat vlak tussen vershillende types esp32. 
In deze cursus wordt de focus gelegd op de Adafruit Feather HUZZAH32 ESP32 4Mb. 
Meer info is te vinden op : <https://www.adafruit.com/product/3405>

## Software

De esp32 kan via verschillende platformen worden geprogrammeerd. Het is heel populair om te doen via de Arduino IDE <https://www.arduino.cc/en/software>. Echter zullen we hier Visual Studio Code gebruiken. Visual Studio Code, vanaf nu VSC, is een IDE die voor verschillende ontwikkelingen kan worden gebruikt en wordt in de professionele wereld heel veel gebruikt. Je kan VSC gebruiken voor ontwikkelingen in verschillende talen zoals JAVA, Python, C, .... Dus hiermee ervaring krijgen heeft zeker zijn voordeel. De Arduino IDE is goed voor kleine, beperkte ontwikkelingen, voor gevorderde code (meer dan 200 lijnen code), meerdere bestanden, het gebruik van een intellisense, en andere functies biedt VSC een betere oplossing. VSC biedt voor de esp32 niet alleen de mogelijkheid om code te schrijven, maar ook om die te compileren en die te downloaden in de esp32 microcontroller zelf. Tevens bezit VSC een Serial Terminal scherm die het mogelijk maakt om tijdens de run van de esp32 serieëel te kunnen uitwisselen. Dit kan een ondersteuning zijn voor het debuggen van uw code (uiteraard kan RealTerm hier ook worden voor gebruikt). 

Een echte debug tool met breakpoints is zonder extra hardware echter niet mogelijk. <https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html>
