/*
Description:
    We receive locational data from facebook as a state name (string), but when 
    Generating map visualizations using topography json files on the frontend
    We receive them as numerical codes, this file acts as a key-value pair to convert
    The respective state names to their numerical codes

    If you want to add them yourself:
    The first value should be the exact string that Facebooks API uses, and the second should be the id that the TopoJSON uses.

    All codes refer to id's found in TopoJsons gathered from https://code.highcharts.com/mapdata/

    For Spain, the map is taken from unpkg (https://unpkg.com/es-atlas@0.5.0/es/autonomous_regions.json)
    As it supports autonomous regions, which is what facebook provides us with
*/

const at = new Map([
    ["Unknown", "N/A"],
    ["Burgenland", "AT.BU"], 
    ["Carinthia", "AT.KA"], 
    ["Lower Austria", "AT.NO"], 
    ["Upper Austria", "AT.OO"], 
    ["Salzburg", "AT.SZ"],
    ["Styria", "AT.ST"],
    ["Tyrol", "AT.TR"], 
    ["Vorarlberg", "AT.VO"],
    ["Vienna", "AT.WI"],
]);

const au = new Map([
    ["Unknown", "N/A"],
    ["New South Wales", "AU.NSW"], 
    ["Victoria", "AU.VIC"], 
    ["Queensland", "AU.QLD"], 
    ["South Australia", "AU.SA"], 
    ["Western Australia", "AU.WA"],
    ["Tasmania", "AU.TAS"],
    ["Northern Territory", "AU.NT"], 
    ["Australian Capital Territory", "AU.ACT"],
    ["Jervis Bay Territory", "AU.JB"],
]);

const be = new Map([
    ["Unknown", "N/A"],
    ["Flemish Region", "VLG"], 
    ["Brussels", "BRU"], 
    ["Wallonia", "WAL"], 
]);

const br = new Map([
    ["Unknown", "N/A"],
    ["Acre (state)", "BR.AC"], 
    ["Alagoas", "BR.AL"], 
    ["Amapá", "BR.AP"], 
    ["Amazonas", "BR.AM"],
    ["Bahia", "BR.BA"], 
    ["Ceará", "BR.CE"], 
    ["Federal District", "BR.DF"], 
    ["Espírito Santo", "BR.ES"], 
    ["Goiás", "BR.GO"], 
    ["Maranhão", "BR.MA"], 
    ["Mato Grosso", "BR.MT"], 
    ["Mato Grosso do Sul", "BR.MS"], 
    ["Minas Gerais", "BR.MG"], 
    ["Pará", "BR.PA"], 
    ["Paraíba", "BR.PB"], 
    ["Paraná", "BR.PR"], 
    ["Pernambuco", "BR.PE"], 
    ["Piauí", "BR.PI"], 
    ["Rio de Janeiro (state)", "BR.RJ"], 
    ["Rio Grande do Norte", "BR.RN"], 
    ["Rio Grande do Sul", "BR.RS"], 
    ["Rondônia", "BR.RO"], 
    ["Roraima", "BR.RR"], 
    ["Santa Catarina", "BR.SC"], 
    ["São Paulo (state)", "BR.SP"], 
    ["Sergipe", "BR.SE"], 
    ["Tocantins", "BR.TO"], 
]);

const ca = new Map([
    ["Unknown", "N/A"],
    ["Manitoba", "CA.MB"],
    ["Saskatchewan", "CA.SK"],
    ["Alberta", "CA.AB"],
    ["British Columbia", "CA.BC"],
    ["Nunavut", "CA.NU"],
    ["Northwest Territories", "CA.NT"],
    ["Newfoundland and Labrador", "CA.NL"],
    ["Nova Scotia", "CA.NS"],
    ["Ontario", "CA.ON"],
    ["Quebec", "CA.QC"],
    ["New Brunswick", "CA.NB"],
    ["Yukon", "CA.YT"],
    ["Prince Edward Island", "CA.PE"],
]);

const cz = new Map([
    ["Unknown", "N/A"],
    ["Karlovy Vary Region", "CZ.KK"],
    ["Plzeň Region", "CZ.6304"],
    ["Ústí nad Labem Region", "CZ.6303"],
    ["Central Bohemian Region", "CZ.SK"],
    ["South Bohemian Region", "CZ.CK"],
    ["Prague", "CZ.2293"],
    ["Liberec Region", "CZ.LK"],
    ["Hradec Králové Region", "CZ.HK"],
    ["Pardubice Region", "CZ.6308"],
    ["Vysočina Region", "CZ.JK"],
    ["Vysočina Region", "CZ.JK"],
    ["South Moravian Region", "CZ.6305"],
    ["Olomouc Region", "CZ.6307"],
    ["Zlín Region", "CZ.6306"],
    ["Moravian-Silesian Region", "CZ.VK"],
]);

const de = new Map([
    ["Unknown", "N/A"],
    ["Baden-Württemberg", "DE.BW"],
    ["Bayern", "DE.BY"],
    ["Berlin", "DE.BE"],
    ["Brandenburg", "DE.BB"],
    ["Bremen", "DE.HB"],
    ["Hamburg", "DE.HH"],
    ["Hessen", "DE.HE"],
    ["Mecklenburg-Vorpommern", "DE.MV"],
    ["Niedersachsen", "DE.NI"],
    ["Nordrhein-Westfalen", "DE.NW"],
    ["Rheinland-Pfalz", "DE.RP"],
    ["Saarland", "DE.SL"],
    ["Sachsen", "DE.SN"],
    ["Saxony-Anhalt", "DE.ST"],
    ["Schleswig-Holstein", "DE.SH"],
    ["Thüringen", "DE.TH"]
]);

const dk = new Map([
    ["Unknown", "N/A"],
    ["Capital Region of Denmark", "DK.6325"], 
    ["Central Denmark Region", "DK.6326"],
    ["North Denmark Region", "DK.3568"],
    ["Zealand Region", "DK.3563"],
    ["Region of Southern Denmark", "DK.3564"],
]);

const ee = new Map([
    ["Unknown", "N/A"],
    ["Saare County", "EE.SA"], 
    ["Hiiu County", "EE.HI"], 
    ["Lääne County", "EE.LN"], 
    ["Harju County", "EE.HA"], 
    ["Rapla County", "EE.RA"], 
    ["Pärnu County", "EE.PR"], 
    ["Lääne-Viru County", "EE.LV"], 
    ["Järva County", "EE.JR"], 
    ["Viljandi County", "EE.VD"], 
    ["Ida-Viru County", "EE.IV"], 
    ["Jõgeva County", "EE.JN"], 
    ["Tartu County", "EE.TA"], 
    ["Valga County", "EE.VG"], 
    ["Põlva County", "EE.PL"], 
    ["Võru County", "EE.VR"], 
]);

const es = new Map([
    ["Unknown", "N/A"],
    ["Andalusia", "01"], 
    ["Aragón", "02"],
    ["Principality of Asturias", "03"],
    ["Balearic Islands", "04"],
    ["Islas Canarias", "05"],
    ["Cantabria", "06"],
    ["Castilla y Leon", "07"], 
    ["Castilla-La Mancha", "08"],
    ["Cataluña", "09"],
    ["Comunidad Valenciana", "10"],
    ["Extremadura", "11"],
    ["Galicia", "12"],
    ["Comunidad de Madrid", "13"],
    ["Region of Murcia", "14"],
    ["Navarra", "15"],
    ["País Vasco", "16"],
    ["La Rioja", "17"],
    ["Ceuta", "18"],
    ["Melilla", "19"],
]);

const fi = new Map([
    ["Unknown", "N/A"],
    ["Lapland (Finland)", "FI.3285"],
    ["Northern Ostrobothnia", "FI.3281"],
    ["Kainuu", "FI.3288"],
    ["Central Ostrobothnia", "FI.3289"],
    ["Central Finland", "FI.3286"], // unconfirmed
    ["Pohjois-Savo", "FI.3287"],
    ["Etelä-Savo", "FI.3295"],
    ["North Karelia", "FI.3296"],
    ["South Karelia", "FI.3294"],
    ["Kymenlaakso", "FI.3276"],
    ["Ostrobothnia (region)", "FI.3280"],
    ["Southern Ostrobothnia", "FI.3290"],
    ["Pirkanmaa", "FI.3293"],
    ["Päijät-Häme", "FI.3291"],
    ["Uusimaa", "FI.3275"],
    ["Tavastia Proper", "FI.3292"],
    ["Satakunta", "FI.3279"],
    ["Southwest Finland", "FI.3272"],
    ["Åland Islands", "FI.AI"],
]);

const fr = new Map([
    ["Unknown", "N/A"],
    ["Poitou-Charentes", "FR.T"],
    ["Corse", "FR.H"],
    ["Bretagne", "FR.E"],
    ["Pays de la Loire", "FR.R"],
    ["Provence-Alpes-Côte d'Azur", "FR.U"],
    ["Midi-Pyrénées", "FR.N"],
    ["Basse-Normandie", "FR.P"],
    ["Nord-Pas-de-Calais", "FR.O"],
    ["Rhône-Alpes", "FR.V"],
    ["Picardie", "FR.S"],
    ["Champagne-Ardenne", "FR.G"],
    ["Languedoc-Roussillon", "FR.K"],
    ["Alsace", "FR.A"],
    ["Auvergne", "FR.C"],
    ["Centre", "FR.F"],
    ["Limousin", "FR.L"],
    ["Bourgogne", "FR.D"],
    ["Aquitaine", "FR.B"],
    ["Franche-Comté", "FR.I"],
    ["Haute-Normandie", "FR.Q"],
    ["Île-de-France", "FR.J"],
    ["Lorraine", "FR.M"],
    ["Réunion", "FR.RE"],
    ["Mayotte", "FR.YT"],
    ["French Guiana", "FR.GF"],
    ["Martinique", "FR.MQ"],
    ["Guadeloupe", "FR.GP"],
]);

const ge = new Map([
    ["Unknown", "N/A"],
    ["Abkhazia", "GE.AB"],
    ["Samegrelo-Zemo Svaneti", "GE.SZ"],
    ["Racha-Lechkhumi and Kvemo Svaneti", "GE.RK"],
    ["Shida Kartli", "GE.SD"],
    ["Mtskheta-Mtianeti", "GE.MM"],
    ["Kakheti", "GE.KA"],
    ["Guria", "GE.GU"],
    ["Imereti", "GE.IM"],
    ["Adjara", "GE.AJ"],
    ["Samtskhe-Javakheti", "GE.SJ"],
    ["Kvemo Kartli", "GE.KK"],
    ["Tbilisi", "GE.TB"],
]);

const gb = new Map([
    ["Unknown", "N/A"],
    ["England", "GB.ENG"],
    ["Scotland", "GB.SCT"],
    ["Wales", "GB.WLS"],
    ["Northern Ireland", "GB.NIR"]
]);

const gr = new Map([
    ["Unknown", "N/A"],
    ["Eastern Macedonia and Thrace", "GR.MT"],
    ["Central Macedonia", "GR.MC"],
    ["Western Macedonia", "GR.MW"],
    ["Epirus (region)", "GR.EP"],
    ["Ionian Islands (region)", "GR.II"],
    ["Northern Aegean", "GR.AN"],
    ["Thessaly", "GR.TS"],
    ["Western Greece", "GR.GW"],
    ["Central Greece (region)", "GR.GC"],
    ["Southern Aegean", "GR.AS"],
    ["Crete", "GR.CR"],
    ["Attica (region)", "GR.AT"],
    ["Peloponnese (region)", "GR.PP"],
    ["Mount Athos", "GR.MA"],
]);

const hr = new Map([
    ["Unknown", "N/A"],
    ["Istria County", "HR.IS"],
    ["Primorje-Gorski Kotar County", "HR.PG"],
    ["Karlovac County", "HR.KA"],
    ["Zagreb County", "HR.ZG"],
    ["Zagreb", "HR.GZ"],
    ["Sisak-Moslavina County", "HR.SM"],
    ["Krapina-Zagorje County", "HR.KZ"],
    ["Varaždin County", "HR.VA"],
    ["Međimurje County", "HR.ME"],
    ["Koprivnica-Križevci County", "HR.KK"],
    ["Bjelovar-Bilogora County", "HR.BB"],
    ["Virovitica-Podravina County", "HR.VP"],
    ["Požega-Slavonia County", "HR.SP"],
    ["Brod-Posavina County", "HR.2228"],
    ["Osijek-Baranja County", "HR.OB"],
    ["Vukovar-Srijem County", "HR.VS"],
    ["Lika-Senj County", "HR.LS"],
    ["Zadar County", "HR.ZD"],
    ["Šibenik-Knin County", "HR.SB"],
    ["Split-Dalmatia County", "HR.SD"],
    ["Dubrovnik-Neretva County", "HR.DN"],
]);

const hu = new Map([
    ["Unknown", "N/A"],
    ["Győr-Moson-Sopron County", "HU.GS"],
    ["Vas County", "HU.VA"],
    ["Zala County", "HU.ZA"],
    ["Veszprém County", "HU.VE"],
    ["Somogy County", "HU.SO"],
    ["Komárom-Esztergom County", "HU.KE"],
    ["Fejér County", "HU.FE"],
    ["Tolna County", "HU.TO"],
    ["Baranya County", "HU.BA"],
    ["Pest County", "HU.PE"],
    ["Budapest", "HU.BU"],
    ["Bács-Kiskun County", "HU.BK"],
    ["Nógrád County", "HU.NO"],
    ["Heves County", "HU.HE"],
    ["Jász-Nagykun-Szolnok County", "HU.JN"],
    ["Csongrád County", "HU.CS"],
    ["Borsod-Abaúj-Zemplén County", "HU.BZ"],
    ["Hajdú-Bihar County", "HU.HB"],
    ["Békés County", "HU.BE"],
    ["Szabolcs-Szatmár-Bereg County", "HU.SZ"],
]);

const ie = new Map([
    ["Unknown", "N/A"],
    ["Kilkenny", "Kilkenny"],
    ["County Tipperary", "Tipperary"],
    ["Waterford", "Waterford"],
    ["Wexford", "Wexford"],
    ["Wicklow", "Wicklow"],
    ["Galway", "Galway"],
    ["County Mayo", "Mayo"],
    ["Cavan", "Cavan"],
    ["Donegal", "Donegal"],
    ["Kildare", "Kildare"],
    ["County Leitrim", "Leitrim"],
    ["County Laois", "Laois"],
    ["County Longford", "Longford"],
    ["County Louth", "Louth"],
    ["County Meath", "Meath"],
    ["County Monaghan", "Monaghan"],
    ["County Offaly", "Offaly"],
    ["Roscommon", "Roscommon"],
    ["Sligo", "Sligo"],
    ["County Westmeath", "Westmeath"],
    ["Dublin", "Dublin"],
    ["Carlow", "Carlow"],
    ["Limerick", "Limerick"],
    ["Kerry", "Kerry"],
    ["County Cork", "Cork"],
    ["County Clare", "Clare"],
]);

const id = new Map([ 
    ["Unknown", "N/A"],
    ["Aceh", "ID.AC"], // #1 (In GeometryCollection object)
    ["Bali", "ID.BA"], // #7
    ["Bangka–Belitung Islands", "ID.BB"], // #6
    ["Banten", "ID.BT"], // #4
    ["Bengkulu", "ID.BE"], // #3
    ["Central Java", "ID.JT"], // #2
    ["Central Kalimantan", "ID.KT"], // #34
    ["Central Sulawesi", "ID.ST"], // #23
    ["East Java", "ID.JI"], // #8
    ["East Kalimantan", "ID.KI"], // #26
    ["East Nusa Tenggara", "ID.NT"], // #10
    ["Gorontalo", "ID.GO"], // #30
    ["Jakarta", "ID.JK"], // #28
    ["Jambi", "ID.JA"], // #33
    ["Lampung", "ID.1024"], // #33
    ["Maluku", "ID.MA"], // #20
    ["North Kalimantan", "ID.KU"], // #17
    ["North Maluku", "ID.LA"], // #18
    ["North Sulawesi", "ID.SW"], // #16
    ["North Sumatra", "ID.SU"], // #14
    ["Papua (province)", "ID.PA"], // #24
    ["Riau Islands Province", "ID.KR"], // #12
    ["Riau", "ID.RI"], // #15
    ["South Kalimantan", "ID.KS"], // #9
    ["South Sulawesi", "ID.SE"], // #11
    ["South Sumatra", "ID.SL"], // #31
    ["Southeast Sulawesi", "ID.SG"], // #22
    ["Special Region of Yogyakarta", "ID.YO"], // #31
    ["West Java", "ID.JR"], // #25
    ["West Kalimantan", "ID.KB"], // #5
    ["West Nusa Tenggara", "ID.NB"], // #21
    ["West Papua", "ID.IB"], // #13
    ["West Sulawesi", "ID.SR"], // #32
    ["West Sumatra", "ID.SB"], // #19
]);

const ind = new Map([
    ["Unknown", "N/A"],
    ["Puducherry", "IN.PY"],
    ["Lakshadweep", "IN.LD"],
    ["Andaman and Nicobar Islands", "IN.AN"],
    ["West Bengal", "IN.WB"],
    ["Odisha", "IN.OR"],
    ["Bihar", "IN.BR"], 
    ["Sikkim", "IN.SK"],
    ["Chhattisgarh", "IN.CT"],
    ["Tamil Nadu", "IN.TN"],
    ["Madhya Pradesh", "IN.MP"],
    ["Gujarat", "IN.2984"],
    ["Goa", "IN.GA"],
    ["Nagaland", "IN.NL"],
    ["Manipur", "IN.MN"],
    ["Arunachal Pradesh", "IN.AR"],
    ["Mizoram", "IN.MZ"],
    ["Tripura", "IN.TR"],
    ["Delhi", "IN.DL"],
    ["Haryana", "IN.HR"],
    ["Chandigarh", "IN.CH"],
    ["Himachal Pradesh", "IN.HP"],
    ["Jammu and Kashmir", "IN.JK"],
    ["Kerala", "IN.KL"],
    ["Karnataka", "IN.KA"],
    ["Dadra and Nagar Haveli", "IN.DN"],
    ["Maharashtra", "IN.MH"],
    ["Assam", "IN.AS"],
    ["Andhra Pradesh", "IN.AP"],
    ["Meghalaya", "IN.ML"],
    ["Punjab region", "IN.PB"],
    ["Rajasthan", "IN.RJ"],
    ["Uttar Pradesh", "IN.UP"],
    ["Uttarakhand", "IN.UT"],
    ["Jharkhand", "IN.JH"],
]);

const it = new Map([
    ["Unknown", "N/A"],
    ["Piedmont", 1], // C
    ["Aosta Valley", 2],
    ["Lombardia", 3],
    ["Trentino-Alto Adige", 4], // C
    ["Veneto", 5],
    ["Friuli-Venezia Giulia", 6],
    ["Liguria", 7],
    ["Emilia-Romagna", 8],
    ["Tuscany", 9], // C
    ["Umbria", 10],
    ["Marche", 11],
    ["Lazio", 12],
    ["Abruzzo", 13],
    ["Molise", 14],
    ["Campania", 15],
    ["Puglia", 16],
    ["Basilicata", 17],
    ["Calabria", 18],
    ["Sicilia", 19],
    ["Sardinia", 20], // C
]);

const lt = new Map([
    ["Unknown", "N/A"],
    ["Alytus County", "LT.AS"],
    ["Kaunas County", "LT.KS"],
    ["Klaipėda County", "LT.KP"],
    ["Marijampolė County", "LT.MA"],
    ["Panevėžys County", "LT.PA"],
    ["Šiauliai County", "LT.SH"],
    ["Tauragė County", "LT.TG"],
    ["Telšiai County", "LT.TL"],
    ["Utena County", "LT.UN"],
    ["Vilnius County", "LT.VI"],
]);

const lu = new Map([
    ["Unknown", "N/A"],
    ["Diekirch District", "LU.DI"],
    ["Grevenmacher District", "LU.GR"],
    ["Luxembourg District", "LU.LU"],
]);

const lv = new Map([
    ["Unknown", "N/A"],
    ["Riga Planning Region", "Riga"],
    ["Kurzeme Region", "Kurzeme"],
    ["Latgale", "Latgale"],
    ["Semigallia", "Semigallia"],
    ["Vidzeme", "Vidzeme"],
]);

const nl = new Map([
    ["Unknown", "N/A"],
    ["Zeeland", "NL.ZE"],
    ["Zuid-Holland", "NL.ZH"],
    ["North Brabant", "NL.NB"],
    ["Limburg", "NL.LI"],
    ["Noord-Holland", "NL.NH"],
    ["Utrecht", "NL.UT"],
    ["Gelderland", "NL.GE"],
    ["Friesland", "NL.FR"],
    ["Overijssel", "NL.OV"],
    ["Overijssel", "NL.OV"],
    ["Flevoland", "NL.FL"],
    ["Drenthe", "NL.DR"],
    ["Groningen", "NL.GR"],
]);

const ph = new Map([ 
    ["Unknown", "N/A"],
    ["Davao Region", 11],
    ["Central Visayas", 7],
    ["Eastern Visayas", 8],
    ["Western Visayas", 6],
    ["Bicol Region", 5],
    ["Calabarzon", 4],
    ["Autonomous Region in Muslim Mindanao", 19],
    ["Central Luzon", 3],
    ["Mimaropa", 17],
    ["Cagayan Valley", 2],
    ["Soccsksargen", 12],
    ["Northern Mindanao", 10],
    ["Ilocos Region", 1],
    ["Cordillera Administrative Region", 14],
    ["Metro Manila", 13],
    ["Zamboanga Peninsula", 9],
    ["Caraga", 16],
]);

const pl = new Map([ 
    ["Unknown", "N/A"],
    ["Łódź Voivodeship", 'PL.LD'],
    ["Masovian Voivodeship", 'PL.MZ'],
    ["Świętokrzyskie Voivodeship", 'PL.SK'],
    ["Podlaskie Voivodeship", 'PL.PD'],
    ["Lublin Voivodeship", 'PL.LU'],
    ["Podkarpackie Voivodeship", 'PL.PK'],
    ["Opole Voivodeship", 'PL.OP'],
    ["Lesser Poland Voivodeship", 'PL.MA'],
    ["Warmian-Masurian Voivodeship", 'PL.WN'],
    ["Pomeranian Voivodeship", 'PL.PM'],
    ["Lower Silesian Voivodeship", 'PL.DS'],
    ["West Pomeranian Voivodeship", 'PL.ZP'],
    ["Lubusz Voivodeship", 'PL.LB'],
    ["Greater Poland Voivodeship", 'PL.WP'],
    ["Kuyavian-Pomeranian Voivodeship", 'PL.KP'],
    ["Silesian Voivodeship", 'PL.SL'],
]);

const pt = new Map([ 
    ["Unknown", "N/A"],
    ["Leiria District", 'PT.LE'],
    ["Viseu District", 'PT.VI'],
    ["Vila Real District", 'PT.VR'],
    ["Viana do Castelo District", 'PT.VC'],
    ["Setúbal District", 'PT.SE'],
    ["Santarém District", 'PT.SA'],
    ["Porto District", 'PT.PO'],
    ["Portalegre District", 'PT.PA'],
    ["Lisbon District", 'PT.LI'],
    ["Guarda District", 'PT.GU'],
    ["Aveiro District", 'PT.AV'],
    ["Madeira", 'PT.MA'],
    ["Faro District", 'PT.FA'],
    ["Évora District", 'PT.EV'],
    ["Coimbra District", 'PT.CO'],
    ["Castelo Branco District", 'PT.CB'],
    ["Braganca", 'PT.BA'],
    ["Braga District", 'PT.BR'],
    ["Beja District", 'PT.BE'],
    ["Azores", 'PT.AC'],
]);

const ro = new Map([ 
    ["Unknown", "N/A"],
    ["Satu Mare County", 'RO.SM'],
    ["Maramureș County", 'RO.MM'],
    ["Mehedinți County", 'RO.MH'],
    ["Mureș County", 'RO.MS'],
    ["Timiș County", 'RO.TM'],
    ["Arad County", 'RO.AR'],
    ["Caraș-Severin County", 'RO.CS'],
    ["Bihor County", 'RO.BH'],
    ["Hunedoara County", 'RO.HD'],
    ["Dolj County", 'RO.DJ'],
    ["Gorj County", 'RO.GJ'],
    ["Sălaj County", 'RO.SJ'],
    ["Cluj County", 'RO.CJ'],
    ["Alba County", 'RO.AB'],
    ["Sibiu County", 'RO.SB'],
    ["Vâlcea County", 'RO.VL'],
    ["Olt County", 'RO.OT'],
    ["Bistrița-Năsăud County", 'RO.BN'],
    ["Brașov County", 'RO.BV'],
    ["Argeș County", 'RO.AG'],
    ["Teleorman County", 'RO.TR'],
    ["Suceava County", 'RO.SV'],
    ["Harghita County", 'RO.HR'],
    ["Dâmbovița County", 'RO.DB'],
    ["Giurgiu County", 'RO.GR'],
    ["Botoșani County", 'RO.BT'],
    ["Neamț County", 'RO.NT'],
    ["Iași County", 'RO.IS'],
    ["Bacău County", 'RO.BC'],
    ["Vaslui County", 'RO.VS'],
    ["Covasna County", 'RO.CV'],
    ["Vrancea County", 'RO.VN'],
    ["Galați County", 'RO.GL'],
    ["Prahova County", 'RO.PH'],
    ["Buzău County", 'RO.BZ'],
    ["Brăila County", 'RO.BR'],
    ["Tulcea County", 'RO.TL'],
    ["Ilfov County", 'RO.IF'],
    ["Bucharest", 'RO.BI'],
    ["Ialomița County", 'RO.IL'],
    ["Călărași County", 'RO.CL'],
    ["Constanța County", 'RO.CT'],
]);

const se = new Map([ 
    ["Unknown", "N/A"],
    ["Blekinge County", "SE.BL"],
    ["Östergötland County", "SE.OG"],
    ["Skåne County", "SE.SN"],
    ["Stockholm County", "SE.ST"],
    ["Västmanland County", "SE.VM"],
    ["Västernorrland County", "SE.VN"],
    ["Västerbotten County", "SE.VB"],
    ["Värmland County", "SE.VR"],
    ["Uppsala County", "SE.UP"],
    ["Södermanland County", "SE.SD"],
    ["Örebro County", "SE.OR"],
    ["Gävleborg County", "SE.GV"],
    ["Norrbotten County", "SE.NB"],
    ["Kronoberg County", "SE.KR"],
    ["Dalarna County", "SE.KO"],
    ["Kalmar County", "SE.KA"],
    ["Jönköping County", "SE.JO"],
    ["Jämtland County", "SE.JA"],
    ["Halland County", "SE.HA"],
    ["Gotland County", "SE.GT"],
    ["Västra Götaland County", "SE.VG"],
]);

const si = new Map([ 
    ["Unknown", "N/A"],
    ["Mura Statistical Region", 11],
    ["Drava Statistical Region", 12],
    ["Carinthia Statistical Region", 13],
    ["Savinja Statistical Region", 14],
    ["Central Sava Statistical Region", 15],
    ["Lower Sava Statistical Region", 16],
    ["Southeast Slovenia Statistical Region", 17],
    ["Littoral–Inner Carniola Statistical Region", 18],
    ["Central Slovenia Statistical Region", 21],
    ["Upper Carniola Statistical Region", 22],
    ["Goriška Statistical Region", 23],
    ["Coastal–Karst Statistical Region", 24],
]);

const us = new Map([
    ["Unknown", "N/A"],
    ["Alabama", "01"],
    ["Alaska", "02"],
    ["Arizona", "04"],
    ["Arkansas", "05"],
    ["California", "06"],
    ["Colorado", "08"],
    ["Connecticut", "09"],
    ["Delaware", "10"],
    ["Washington, District of Columbia", "11"],
    ["Florida", "12"],
    ["Georgia", "13"],
    ["Hawaii", "15"],
    ["Idaho", "16"],
    ["Illinois", "17"],
    ["Indiana", "18"],
    ["Iowa", "19"],
    ["Kansas", "20"],
    ["Kentucky", "21"],
    ["Louisiana", "22"],
    ["Maine", "23"],
    ["Maryland", "24"],
    ["Massachusetts", "25"],
    ["Michigan", "26"],
    ["Minnesota", "27"],
    ["Mississippi", "28"],
    ["Missouri", "29"],
    ["Montana", "30"],
    ["Nebraska", "31"],
    ["Nevada", "32"],
    ["New Hampshire", "33"],
    ["New Jersey", "34"],
    ["New Mexico", "35"],
    ["New York", "36"],
    ["North Carolina", "37"],
    ["North Dakota", "38"],
    ["Ohio", "39"],
    ["Oklahoma", "40"],
    ["Oregon", "41"],
    ["Pennsylvania", "42"],
    ["Rhode Island", "44"],
    ["South Carolina", "45"],
    ["South Dakota", "46"],
    ["Tennessee", "47"],
    ["Texas", "48"],
    ["Utah", "49"],
    ["Vermont", "50"],
    ["Virginia", "51"],
    ["Washington", "53"],
    ["West Virginia", "54"],
    ["Wisconsin", "55"],
    ["Wyoming", "56"]
]);

// ^^^ Add more map key-value pairs above here, name maps as their 2 character country code

const maps = {
    'at': at,
    'au': au,
    'be': be,
    'br': br,
    'ca': ca,
    'cz': cz,
    'de': de,
    'dk': dk,
    'ee': ee,
    'es': es,
    'fi': fi,
    'fr': fr,
    'ge': ge,
    'gb': gb,
    'gr': gr,
    'hr': hr,
    'hu': hu,
    'ie': ie,
    'id': id,
    'in': ind,
    'it': it,
    'lt': lt,
    'lu': lu,
    'lv': lv,
    'nl': nl,
    'ph': ph,
    'pl': pl,
    'pt': pt,
    'ro': ro,
    'se': se,
    'si': si,
    'us': us,
    // ^^^ add defined maps here
}

module.exports = maps;