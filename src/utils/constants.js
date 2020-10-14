export const MEDICAL_ANALYSIS = [
  {
    name: "Acido Urico | ACU | URIC",
    code: "070",
  },
  {
    name: "Antiestreptolisinas | AEL | ASLA | ASL",
    code: "217A",
  },
  {
    name: "Brusella",
    code: "3004",
  },
  {
    name: "Baar expectoracion 1 (una muestra) baciloscopia",
    code: "260",
    details: `
      Diagnostico debe decir: control
    `,
  },
  {
    name: "Baar expectoracion 3 (tres muestras) baciloscopia",
    code: "264",
    details: `
      Diagnostico debe decir: deteccion
    `,
  },
  {
    name: "Bilirrubinas | Bilis",
    code: "077O",
    details: `
      Escribir Bilis O 077O ( Ultimo caracter es letra O)
    `,
  },
  {
    name: "Biometria hematica | BH | FORMULA ROJA",
    code: "001",
    details: `
      No capturar 002
    `,
  },
  {
    name: "Chikungunya | Chikv",
    code: "3026",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Colesterol | COL",
    code: "074",
  },
  {
    name: "COOMBS INDIRECTO",
    code: "013",
    details: `
      No capturar 012
    `,
  },
  {
    name: "Coprocultivo",
    code: "5145",
    details: `
      Muestra de excremento en frasco esteril
    `,
    color: "blue",
  },
  {
    name: "Coprologico General",
    code: "154",
    details: `
      Muestra de excremento
    `,
  },
  {
    name: "Creatinina | CR | CREA",
    code: "069",
  },
  {
    name: "Cultivo de Esperma | Espermocultivo",
    code: "5129",
    details: `
      Dar frasco, decirle al paciente que lea instrucciones
    `,
    color: "blue",
  },
  {
    name: "Cultivo exudado Faringeo | CFAR",
    code: "5125",
    details: `
      Decirle al paciente que lea instrucciones
    `,
    color: "blue",
  },
  {
    name: "Cultivo de orina | URO | UROCULTIVO",
    code: "5126",
    details: `
      Dar frasco, no abrir hasta colocar muestra 
    `,
    color: "blue",
  },
  {
    name: "Cultivo de secreciones (Heridas en el cuerpo, secrecciones, etc.)",
    code: "5133",
    details: `
    Decirle al paciente que lea instrucciones
  `,
    color: "blue",
  },
  {
    name: "Cultivo uretral",
    code: "5127",
    details: `
    Decirle al paciente que lea instrucciones
  `,
    color: "blue",
  },
  {
    name: "Cultivo Vaginal | C VAG ",
    code: "5131",
    details: `
      Decirle al paciente que lea instrucciones
    `,
    color: "blue",
  },
  {
    name: "Dengue",
    code: "3005",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Depuracion de creatinina",
    code: "113",
    details: `
      No capturar 069, pero y talla del paciente, que lea las instrucciones
    `,
  },
  {
    name: "Eosinofilos en moco nasal | EMN",
    code: "006",
    details: `
      Decirle al paciente que lea instrucciones
    `,
  },
  {
    name: "Espermatobiosopia",
    code: "152",
    details: `
      Decirle al paciente que lea instrucciones
    `,
  },
  {
    name: "Examen general de orina | EGO",
    code: "100",
    details: `
      Dar bolsa de recoleccion a menores de 2 años
    `,
  },
  {
    name: "Factor reumatoide | FR",
    code: "218A",
  },
  {
    name: "FTA",
    code: "-",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Glucosa | GLU",
    code: "064",
  },
  {
    name: "Glucosa Post pandrial",
    code: "066",
  },
  {
    name: "Glucosa Post carga",
    code: "067",
  },
  {
    name: "Grupo sanguineo y factor RH | GPO | RH",
    code: "008",
    details: `
      No capturar 009
    `,
  },
  {
    name: "Hemoglobina glucosilada",
    code: "072",
    details: `
      Autorización de jefe de consulta
    `,
  },
  {
    name: "Hepatitis A",
    code: "3002",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Hepatitis B",
    code: "273",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Hepatitis C",
    code: "272",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "MERCAPTOETANOL",
    code: "222",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Paludismo",
    code: "3000B",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Perfil Hepatico | Pruebas de funcion hepatica",
    code: "084 Y Bilis",
    details: `
      No capturar 085
    `,
  },
  {
    name: "Prueba inmunologica de embarazo | Pie",
    code: "165",
  },
  {
    name: "Proteina C reactiva | PCR",
    code: "216A",
  },
  {
    name: "Quimica sanguinea | QS",
    code: "064 Y 069",
  },
  {
    name: "Reacciones febriles | R FEB",
    code: "220",
  },
  {
    name: "Riquetsiosis",
    code: "3025",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Rosa de bengala",
    code: "221",
  },

  {
    name: "Rubeola",
    code: "3010B",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },

  {
    name: "Sangre oculta en heces",
    code: "5155",
    details: `
      Decirle al paciente que lea instrucciones
    `,
  },

  {
    name: "Sarampion",
    code: "3010A",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Toxoplasma",
    code: "199",
    details: `
      Solo con solicitud del epidemiologo
    `,
    color: "red",
  },
  {
    name: "Transaminasas (Capturar TGP) | TGP",
    code: "084",
    details: `
      No capturar 085
    `,
  },
  {
    name: "Trigliceridos | TRIG",
    code: "095",
  },
  {
    name: "VIH | HIV",
    code: "268",
    details: `
    Solo con solicitud del epidemiologo
  `,
    color: "red",
  },
  {
    name: "VDRL",
    code: "219",
  },
  {
    name: "Velocidad de sedimentacion | VSG | VEL",
    code: "004",
  },
]
