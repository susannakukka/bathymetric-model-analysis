# gradu

## analysis
- on tehty qgis:ssa analyysi, missä saatu jokaiselle validaatiopisteelle kaukokartoitusaineistosta vastaavat pisteet arvoineen (asv,als, satellite)
- tehtävänä saavuttaa jokaiselle menetelmälle samat yksiköt syvyysarvoihin, jotta vertailu voi onnistua. Satelliittidata täytyy arvioida heijastusarvoilla, eli sitä ei saa täysin vastaavaksi. ALS datassa käytetään validaatiopisteiden tapaan GPS-korkeusmittaa, eli ellipsodial height. ASV on saanut kaikuluotauksesta prosessoidut arvot, eli sensorista pohjaan ulottuva matka. 
- https://www.unavco.org/software/geodetic-utilities/geoid-height-calculator/geoid-height-calculator.html voi laskea pisteille eri korkeudet, josta laskea taas ALS datalle samantyyppiset syvyysarvoit kuin kaikuluotauksesta. Myös validaatiopisteille tämä voidaan tehdä.
- lopulliset tulokset csv taulukkoon, missä koordinaattipisteet, ellipsoidic height, geidic height, orthographic height sekä sonar height

- validaatiosyvyys asv-datalle laskettiin seuraavasti:
  tiedettiin asv päivän (19.9.22) vedenpinnan korkeus (64,41m), ja tiedettiin validaatiopisteiden elevation height. Voitiin siis laskea pohjan elevation height miinustamalla asv:n data päivän vedenpinnan korkeudesta. Validaatiopisteiden vastaava tulos saatiin laskettua, kun miinustettiin pohjan eh:sta validaatiopisteiden eh.

  seuraava steppi - kokeile saatko aikaiseksi tota syvyystietoa als datasta - selvitä, mikä on nuorgamin kohtalo - selvitä, onko tää edes hyvä/oikea lähestymistapa koko hommaan


## laz pipeline
https://pdal.io/en/2.4.3/workshop/exercises/analysis/dtm/dtm.html execution ohjeet
originaali skripti, arvoja muutettu vallen takia
[
    "/Users/susanna/repos/gradu/data/valle_ALS_data/Kukkavuori_Valle_ETRSTM35FIN_N2000.laz",
    {
        "type":"filters.range",
        "limits":"Z[10:20],Classification[1:3]"
    },
    {
        "type":"writers.las",
        "filename":"/Users/susanna/repos/gradu/data/output/valle_als_filtered_2.laz"
    }
]
