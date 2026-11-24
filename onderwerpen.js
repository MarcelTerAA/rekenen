/* Rekenen – overzicht van alle lesintro's per opleiding.
   Nieuwe week toevoegen: zet een nieuw object onderaan ONDERWERPEN.
   - map:  de map van de lesintro (bijv. "kubieke-inhoud")
   - lessen per opleiding: hash = de klas-code in die lesintro (#mi-1, #st, #se, #sd, #sd-en)
   Een opleiding zonder lessen in een week wordt op die pagina overgeslagen. */

const OPLEIDINGEN = {
  mi: { naam: "Medewerker ICT",          niveau: 2, crebo: "25999", ref: "2F", klas: "ID.26MI.A" },
  st: { naam: "ICT support technician",  niveau: 3, crebo: "27015", ref: "2F", klas: "ID.26ST.A" },
  se: { naam: "ICT system engineer",     niveau: 4, crebo: "27016", ref: "3F", klas: "ID.26SE.A" },
  sd: { naam: "Software developer",      niveau: 4, crebo: "25998", ref: "3F", klas: "ID.26SD.A · ID.26SD.E",
        noot: "Tweetalige lesintro's: Nederlandse uitleg met Engelse vaktermen erbij — ook prima voor de Nederlandstalige klas." }
};

const ONDERWERPEN = [
  {
    periode: "Periode 2 · Oriëntatie in de twee- en driedimensionale wereld",
    week: 1,
    map: "oppervlakte",
    lessen: {
      mi: [
        { hash: "mi-1", titel: "Les 1 · Oppervlakte in m²",   sub: "lengte × breedte · vierkante meter" },
        { hash: "mi-2", titel: "Les 2 · Hectare en km²",      sub: "m² · hectare · vierkante kilometer" }
      ],
      st: [ { hash: "st",    titel: "Oppervlakte & omtrek", sub: "omtrek · oppervlakte · straal · diameter" } ],
      se: [ { hash: "se",    titel: "Oppervlakte & omtrek", sub: "omtrek · oppervlakte · cirkel met π" } ],
      sd: [ { hash: "sd-en", titel: "Oppervlakte & omtrek", sub: "omtrek · oppervlakte · cirkel met π", en: "perimeter · area · radius · circumference" } ]
    }
  },
  {
    periode: "Periode 2 · Oriëntatie in de twee- en driedimensionale wereld",
    week: 2,
    map: "kubieke-inhoud",
    lessen: {
      mi: [
        { hash: "mi-1", titel: "Les 1 · Oppervlakte met hulplijnen", sub: "samengestelde vormen · lengte × breedte · afronden" },
        { hash: "mi-2", titel: "Les 2 · Omtrek of oppervlakte?",     sub: "omtrek = rand · oppervlakte = vlak" }
      ],
      st: [ { hash: "st",    titel: "Kubieke inhoud", sub: "m³ · liter = dm³ · ml = cm³" } ],
      se: [ { hash: "se",    titel: "Kubieke inhoud", sub: "m³ · dm³ = liter · cm³ = ml = cc" } ],
      sd: [ { hash: "sd-en", titel: "Kubieke inhoud", sub: "m³ · dm³ = liter · cm³ = ml = cc", en: "volume · cubic metre · litre · millilitre" } ]
    }
  }
];
