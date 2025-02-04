import { News } from "../interface/getOne";

export const newsData: News[] = [
  {
    id: 1,
    title: "El dólar blue alcanza un nuevo récord en Argentina",
    content: "El dólar blue ha superado la barrera de los 1.200 pesos, marcando un nuevo récord histórico en el mercado informal de divisas. Este aumento se debe a la creciente incertidumbre económica, las restricciones cambiarias y la falta de confianza en el peso argentino. Los analistas advierten que la volatilidad continuará en los próximos días, mientras el gobierno evalúa nuevas medidas para controlar la escalada del tipo de cambio.",
    source: "Diario Financiero",
    dateNews: new Date("2025-02-04"),
    category: "Mercados"
  },
  {
    id: 2,
    title: "El Bitcoin supera los 50,000 dólares tras una ola de compras institucionales",
    content: "El precio del Bitcoin ha alcanzado los 50,000 dólares por primera vez en meses, impulsado por una fuerte demanda institucional. Grandes fondos de inversión y empresas tecnológicas han incrementado sus posiciones en la criptomoneda, generando un renovado optimismo en el mercado. Expertos señalan que este repunte podría marcar el inicio de una nueva tendencia alcista, aunque advierten sobre la posible volatilidad en las próximas semanas.",
    source: "CryptoTimes",
    dateNews: new Date("2025-02-04"),
    category: "Criptomonedas"
  },
  {
    id: 3,
    title: "La FED mantiene las tasas de interés sin cambios",
    content: "La Reserva Federal de EE.UU. ha decidido mantener las tasas de interés en el 5.25%, en línea con las expectativas del mercado. En su comunicado oficial, el organismo señaló que la inflación sigue siendo una preocupación clave y que cualquier ajuste futuro dependerá de la evolución de los datos macroeconómicos. Los mercados reaccionaron con estabilidad a la noticia, aunque algunos analistas advierten que una política monetaria restrictiva podría afectar el crecimiento económico a largo plazo.",
    source: "Wall Street Journal",
    dateNews: new Date("2025-02-04"),
    category: "Política Monetaria"
  },
  {
    id: 4,
    title: "Apple presenta resultados financieros con un crecimiento del 15% en ingresos",
    content: "Apple ha publicado sus resultados financieros del último trimestre, mostrando un crecimiento del 15% en ingresos, superando las estimaciones de los analistas. El éxito se atribuye al aumento en la venta de iPhones, así como al crecimiento de su negocio de servicios, que incluye suscripciones a Apple Music, iCloud y Apple TV+. La compañía también anunció nuevos lanzamientos de productos y una mayor inversión en inteligencia artificial, lo que genera optimismo entre los inversores.",
    source: "Bloomberg",
    dateNews: new Date("2025-02-04"),
    category: "Empresas"
  },
  {
    id: 5,
    title: "El FMI advierte sobre los riesgos de recesión en América Latina",
    content: "El Fondo Monetario Internacional ha emitido un informe en el que advierte sobre los crecientes riesgos de recesión en América Latina. La desaceleración del crecimiento global, la inflación persistente y la incertidumbre política en varios países de la región están afectando la estabilidad económica. El FMI recomienda a los gobiernos implementar políticas fiscales responsables y fomentar la inversión para evitar un impacto negativo en el empleo y el bienestar social.",
    source: "Reuters",
    dateNews: new Date("2025-02-04"),
    category: "Economía"
  }
];
