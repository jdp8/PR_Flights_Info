var isoCodeConverterData = {"BD": "BGD", "BE": "BEL", "BF": "BFA", "BG": "BGR", "BA": "BIH", "BB": "BRB", "WF": "WLF",
"BL": "BLM", "BM": "BMU", "BN": "BRN", "BO": "BOL", "BH": "BHR", "BI": "BDI", "BJ": "BEN", "BT": "BTN", "JM": "JAM",
"BV": "BVT", "BW": "BWA", "WS": "WSM", "BQ": "BES", "BR": "BRA", "BS": "BHS", "JE": "JEY", "BY": "BLR", "BZ": "BLZ",
"RU": "RUS", "RW": "RWA", "RS": "SRB", "TL": "TLS", "RE": "REU", "TM": "TKM", "TJ": "TJK", "RO": "ROU", "TK": "TKL",
"GW": "GNB", "GU": "GUM", "GT": "GTM", "GS": "SGS", "GR": "GRC", "GQ": "GNQ", "GP": "GLP", "JP": "JPN", "GY": "GUY",
"GG": "GGY", "GF": "GUF", "GE": "GEO", "GD": "GRD", "GB": "GBR", "GA": "GAB", "SV": "SLV", "GN": "GIN", "GM": "GMB",
"GL": "GRL", "GI": "GIB", "GH": "GHA", "OM": "OMN", "TN": "TUN", "JO": "JOR", "HR": "HRV", "HT": "HTI", "HU": "HUN",
"HK": "HKG", "HN": "HND", "HM": "HMD", "VE": "VEN", "PR": "PRI", "PS": "PSE", "PW": "PLW", "PT": "PRT", "SJ": "SJM",
"PY": "PRY", "IQ": "IRQ", "PA": "PAN", "PF": "PYF", "PG": "PNG", "PE": "PER", "PK": "PAK", "PH": "PHL", "PN": "PCN",
"PL": "POL", "PM": "SPM", "ZM": "ZMB", "EH": "ESH", "EE": "EST", "EG": "EGY", "ZA": "ZAF", "EC": "ECU", "IT": "ITA",
"VN": "VNM", "SB": "SLB", "ET": "ETH", "SO": "SOM", "ZW": "ZWE", "SA": "SAU", "ES": "ESP", "ER": "ERI", "ME": "MNE",
"MD": "MDA", "MG": "MDG", "MF": "MAF", "MA": "MAR", "MC": "MCO", "UZ": "UZB", "MM": "MMR", "ML": "MLI", "MO": "MAC",
"MN": "MNG", "MH": "MHL", "MK": "MKD", "MU": "MUS", "MT": "MLT", "MW": "MWI", "MV": "MDV", "MQ": "LCA", "MP": "MNP",
"MS": "MSR", "MR": "MRT", "IM": "IMN", "UG": "UGA", "TZ": "TZA", "MY": "MYS", "MX": "MEX", "IL": "ISR", "FR": "FRA",
"IO": "IOT", "SH": "SHN", "FI": "FIN", "FJ": "FJI", "FK": "FLK", "FM": "FSM", "FO": "FRO", "NI": "NIC", "NL": "NLD",
"NO": "NOR", "NA": "NAM", "VU": "VUT", "NC": "NCL", "NE": "NER", "NF": "NFK", "NG": "NGA", "NZ": "NZL", "NP": "NPL",
"NR": "NRU", "NU": "NIU", "CK": "COK", "XK": "XKX", "CI": "CIV", "CH": "CHE", "CO": "COL", "CN": "CHN", "CM": "CMR",
"CL": "CHL", "CC": "CCK", "CA": "CAN", "CG": "COG", "CF": "CAF", "CD": "COD", "CZ": "CZE", "CY": "CYP", "CX": "CXR",
"CR": "CRI", "CW": "CUW", "CV": "CPV", "CU": "CUB", "SZ": "SWZ", "SY": "SYR", "SX": "SXM", "KG": "KGZ", "KE": "KEN",
"SS": "SSD", "SR": "SUR", "KI": "KIR", "KH": "KHM", "KN": "KNA", "KM": "COM", "ST": "STP", "SK": "SVK", "KR": "KOR",
"SI": "SVN", "KP": "PRK", "KW": "KWT", "SN": "SEN", "SM": "SMR", "SL": "SLE", "SC": "SYC", "KZ": "KAZ", "KY": "CYM",
"SG": "SGP", "SE": "SWE", "SD": "SDN", "DO": "DOM", "DM": "DMA", "DJ": "DJI", "DK": "DNK", "VG": "VGB", "DE": "DEU",
"YE": "YEM", "DZ": "DZA", "US": "USA", "UY": "URY", "YT": "MYT", "UM": "UMI", "LB": "LBN", "LC": "LCA", "LA": "LAO",
"TV": "TUV", "TW": "TWN", "TT": "TTO", "TR": "TUR", "LK": "LKA", "LI": "LIE", "LV": "LVA", "TO": "TON", "LT": "LTU",
"LU": "LUX", "LR": "LBR", "LS": "LSO", "TH": "THA", "TF": "ATF", "TG": "TGO", "TD": "TCD", "TC": "TCA", "LY": "LBY",
"VA": "VAT", "VC": "VCT", "AE": "ARE", "AD": "AND", "AG": "ATG", "AF": "AFG", "AI": "AIA", "VI": "VIR", "IS": "ISL",
"IR": "IRN", "AM": "ARM", "AL": "ALB", "AO": "AGO", "AQ": "ATA", "AS": "ASM", "AR": "ARG", "AU": "AUS", "AT": "AUT",
"AW": "ABW", "IN": "IND", "AX": "ALA", "AZ": "AZE", "IE": "IRL", "ID": "IDN", "UA": "UKR", "QA": "QAT", "MZ": "MOZ",
"AN": "ANT"};

var map = new Datamap({
    element: document.getElementById('container'),
    data: {},
    geographyConfig: {
        hideAntarctica: false
    }
});

var form = document.getElementById('validationForm');
document.getElementById('yearButton').onclick = changeYear;

function changeYear() {
    if(!form.reportValidity()) {
        return;
    }

    var year = document.getElementById('year').value;
    var radio = document.querySelector('input[name="flight_type"]:checked').value;
<!--        console.log(radio)-->

    var sql = 'SELECT SUM(CAST("DEPARTURES_SCHEDULED" AS INTEGER)) AS DEPARTURES_SCHEDULED,SUM(CAST("DEPARTURES_PERFORMED" AS INTEGER))' +
        'AS DEPARTURES_PERFORMED,SUM(CAST("PASSENGERS" AS INTEGER)) AS PASSENGERS,SUM(CAST("FREIGHT" AS INTEGER)) AS FREIGHT,' +
        'SUM(CAST("MAIL" AS INTEGER)) AS MAIL, "YEAR", "ORIGIN_STATE_ABR", "ORIGIN_STATE_NM","ORIGIN_COUNTRY", "ORIGIN_COUNTRY_NAME",' +
        '"DEST_STATE_ABR", "DEST_STATE_NM", "DEST_COUNTRY", "DEST_COUNTRY_NAME" FROM "cdb53058-f36b-4852-97d9-4177ffd74a9e"'

    if(radio == "Incoming") { // Incoming
        sql += 'WHERE "YEAR" LIKE \''+year+'\' AND "DEST_STATE_ABR" LIKE \'PR\' AND "ORIGIN_COUNTRY" NOT LIKE \'US\' GROUP BY "YEAR",' +
        '"ORIGIN_STATE_ABR", "ORIGIN_STATE_NM", "ORIGIN_COUNTRY", "ORIGIN_COUNTRY_NAME", "DEST_STATE_ABR","DEST_STATE_NM",' +
        '"DEST_COUNTRY", "DEST_COUNTRY_NAME";'
    }
    else { // Outgoing
        sql += 'WHERE "YEAR" LIKE \''+year+'\' AND "ORIGIN_STATE_ABR" LIKE \'PR\' AND "DEST_COUNTRY" NOT LIKE \'US\' GROUP BY "YEAR",' +
        '"ORIGIN_STATE_ABR", "ORIGIN_STATE_NM", "ORIGIN_COUNTRY", "ORIGIN_COUNTRY_NAME", "DEST_STATE_ABR","DEST_STATE_NM",' +
        '"DEST_COUNTRY", "DEST_COUNTRY_NAME";'
    }

<!--        console.log(year,typeof(year));-->
    data = {
        resource_id: 'cdb53058-f36b-4852-97d9-4177ffd74a9e',
        sql: sql
    };

  $.ajax({
    url: 'https://datos.estadisticas.pr/api/action/datastore_search_sql',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
<!--          alert('Total results found: ' + data.result.records.length)-->
<!--          console.log(data.result.records)-->
      var arcs = []

      if(radio == "Incoming") { // Incoming
            for(var i=0;i < data.result.records.length;i++) {
                arcs[i] = {origin: isoCodeConverterData[data.result.records[i].ORIGIN_COUNTRY],
                destination: isoCodeConverterData[data.result.records[i].DEST_STATE_ABR],
                full_origin: data.result.records[i].ORIGIN_COUNTRY_NAME,
                full_destination: data.result.records[i].DEST_STATE_NM,
                departures_scheduled: data.result.records[i].departures_scheduled,
                departures_performed: data.result.records[i].departures_performed,
                passengers: data.result.records[i].passengers,
                freight: data.result.records[i].freight,
                mail: data.result.records[i].mail
                }
            }
      }
      else { // Outgoing
            for(var i=0;i < data.result.records.length;i++) {
                arcs[i] = {origin: isoCodeConverterData[data.result.records[i].ORIGIN_STATE_ABR],
                destination: isoCodeConverterData[data.result.records[i].DEST_COUNTRY],
                full_origin: data.result.records[i].ORIGIN_STATE_NM,
                full_destination: data.result.records[i].DEST_COUNTRY_NAME,
                departures_scheduled: data.result.records[i].departures_scheduled,
                departures_performed: data.result.records[i].departures_performed,
                passengers: data.result.records[i].passengers,
                freight: data.result.records[i].freight,
                mail: data.result.records[i].mail
                }
            }
      }

<!--        console.log(arcs)-->
    map.arc(arcs, {strokeWidth: 2, animationSpeed: 3000, popupOnHover: true,
                    popupTemplate: function(geography, data) {
                      return '<div class="hoverinfo"><strong>Origin: ' + data.full_origin + '<br>Destination: ' + data.full_destination +
                      '<br>Departures Scheduled: ' + data.departures_scheduled + '<br>Departures Performed: ' +
                      data.departures_performed + '<br>Passengers: ' + data.passengers + '<br>Freight: ' + data.freight +
                      '<br>Mail: ' + data.mail + '</strong></div>';
                    }
                    });
<!--          map.updateChoropleth();-->
    }
  });
}