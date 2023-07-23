import React from "react";

import { GroupBase, OptionBase, Select } from "chakra-react-select";

interface CurrencyDetail {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
}

//TODO: clean up load up from api
const currencies: { [index: string]: CurrencyDetail } = {
  AED: {
    name: "United Arab Emirates Dirham",
    symbol: "AED",
    symbolNative: "د.إ.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "AED",
    namePlural: "UAE dirhams",
  },
  AFN: {
    name: "Afghan Afghani",
    symbol: "Af",
    symbolNative: "؋",
    decimalDigits: 0,
    rounding: 0,
    code: "AFN",
    namePlural: "Afghan Afghanis",
  },
  ALL: {
    name: "Albanian Lek",
    symbol: "ALL",
    symbolNative: "Lek",
    decimalDigits: 0,
    rounding: 0,
    code: "ALL",
    namePlural: "Albanian lekë",
  },
  AMD: {
    name: "Armenian Dram",
    symbol: "AMD",
    symbolNative: "դր.",
    decimalDigits: 0,
    rounding: 0,
    code: "AMD",
    namePlural: "Armenian drams",
  },
  ARS: {
    name: "Argentine Peso",
    symbol: "AR$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "ARS",
    namePlural: "Argentine pesos",
  },
  AUD: {
    name: "Australian Dollar",
    symbol: "AU$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "AUD",
    namePlural: "Australian dollars",
  },
  AZN: {
    name: "Azerbaijani Manat",
    symbol: "man.",
    symbolNative: "ман.",
    decimalDigits: 2,
    rounding: 0,
    code: "AZN",
    namePlural: "Azerbaijani manats",
  },
  BAM: {
    name: "Bosnia-Herzegovina Convertible Mark",
    symbol: "KM",
    symbolNative: "KM",
    decimalDigits: 2,
    rounding: 0,
    code: "BAM",
    namePlural: "Bosnia-Herzegovina convertible marks",
  },
  BDT: {
    name: "Bangladeshi Taka",
    symbol: "Tk",
    symbolNative: "৳",
    decimalDigits: 2,
    rounding: 0,
    code: "BDT",
    namePlural: "Bangladeshi takas",
  },
  BGN: {
    name: "Bulgarian Lev",
    symbol: "BGN",
    symbolNative: "лв.",
    decimalDigits: 2,
    rounding: 0,
    code: "BGN",
    namePlural: "Bulgarian leva",
  },
  BHD: {
    name: "Bahraini Dinar",
    symbol: "BD",
    symbolNative: "د.ب.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "BHD",
    namePlural: "Bahraini dinars",
  },
  BIF: {
    name: "Burundian Franc",
    symbol: "FBu",
    symbolNative: "FBu",
    decimalDigits: 0,
    rounding: 0,
    code: "BIF",
    namePlural: "Burundian francs",
  },
  BND: {
    name: "Brunei Dollar",
    symbol: "BN$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BND",
    namePlural: "Brunei dollars",
  },
  BOB: {
    name: "Bolivian Boliviano",
    symbol: "Bs",
    symbolNative: "Bs",
    decimalDigits: 2,
    rounding: 0,
    code: "BOB",
    namePlural: "Bolivian bolivianos",
  },
  BRL: {
    name: "Brazilian Real",
    symbol: "R$",
    symbolNative: "R$",
    decimalDigits: 2,
    rounding: 0,
    code: "BRL",
    namePlural: "Brazilian reals",
  },
  BWP: {
    name: "Botswanan Pula",
    symbol: "BWP",
    symbolNative: "P",
    decimalDigits: 2,
    rounding: 0,
    code: "BWP",
    namePlural: "Botswanan pulas",
  },
  BYN: {
    name: "Belarusian Ruble",
    symbol: "Br",
    symbolNative: "руб.",
    decimalDigits: 2,
    rounding: 0,
    code: "BYN",
    namePlural: "Belarusian rubles",
  },
  BZD: {
    name: "Belize Dollar",
    symbol: "BZ$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "BZD",
    namePlural: "Belize dollars",
  },
  CAD: {
    name: "Canadian Dollar",
    symbol: "CA$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "CAD",
    namePlural: "Canadian dollars",
  },
  CDF: {
    name: "Congolese Franc",
    symbol: "CDF",
    symbolNative: "FrCD",
    decimalDigits: 2,
    rounding: 0,
    code: "CDF",
    namePlural: "Congolese francs",
  },
  CHF: {
    name: "Swiss Franc",
    symbol: "CHF",
    symbolNative: "CHF",
    decimalDigits: 2,
    rounding: 0.05,
    code: "CHF",
    namePlural: "Swiss francs",
  },
  CLP: {
    name: "Chilean Peso",
    symbol: "CL$",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "CLP",
    namePlural: "Chilean pesos",
  },
  CNY: {
    name: "Chinese Yuan",
    symbol: "CN¥",
    symbolNative: "CN¥",
    decimalDigits: 2,
    rounding: 0,
    code: "CNY",
    namePlural: "Chinese yuan",
  },
  COP: {
    name: "Colombian Peso",
    symbol: "CO$",
    symbolNative: "$",
    decimalDigits: 0,
    rounding: 0,
    code: "COP",
    namePlural: "Colombian pesos",
  },
  CRC: {
    name: "Costa Rican Colón",
    symbol: "₡",
    symbolNative: "₡",
    decimalDigits: 0,
    rounding: 0,
    code: "CRC",
    namePlural: "Costa Rican colóns",
  },
  CVE: {
    name: "Cape Verdean Escudo",
    symbol: "CV$",
    symbolNative: "CV$",
    decimalDigits: 2,
    rounding: 0,
    code: "CVE",
    namePlural: "Cape Verdean escudos",
  },
  CZK: {
    name: "Czech Republic Koruna",
    symbol: "Kč",
    symbolNative: "Kč",
    decimalDigits: 2,
    rounding: 0,
    code: "CZK",
    namePlural: "Czech Republic korunas",
  },
  DJF: {
    name: "Djiboutian Franc",
    symbol: "Fdj",
    symbolNative: "Fdj",
    decimalDigits: 0,
    rounding: 0,
    code: "DJF",
    namePlural: "Djiboutian francs",
  },
  DKK: {
    name: "Danish Krone",
    symbol: "Dkr",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "DKK",
    namePlural: "Danish kroner",
  },
  DOP: {
    name: "Dominican Peso",
    symbol: "RD$",
    symbolNative: "RD$",
    decimalDigits: 2,
    rounding: 0,
    code: "DOP",
    namePlural: "Dominican pesos",
  },
  DZD: {
    name: "Algerian Dinar",
    symbol: "DA",
    symbolNative: "د.ج.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "DZD",
    namePlural: "Algerian dinars",
  },
  EGP: {
    name: "Egyptian Pound",
    symbol: "EGP",
    symbolNative: "ج.م.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "EGP",
    namePlural: "Egyptian pounds",
  },
  ERN: {
    name: "Eritrean Nakfa",
    symbol: "Nfk",
    symbolNative: "Nfk",
    decimalDigits: 2,
    rounding: 0,
    code: "ERN",
    namePlural: "Eritrean nakfas",
  },
  ETB: {
    name: "Ethiopian Birr",
    symbol: "Br",
    symbolNative: "Br",
    decimalDigits: 2,
    rounding: 0,
    code: "ETB",
    namePlural: "Ethiopian birrs",
  },
  EUR: {
    name: "Euro",
    symbol: "€",
    symbolNative: "€",
    decimalDigits: 2,
    rounding: 0,
    code: "EUR",
    namePlural: "euros",
  },
  GBP: {
    name: "British Pound Sterling",
    symbol: "£",
    symbolNative: "£",
    decimalDigits: 2,
    rounding: 0,
    code: "GBP",
    namePlural: "British pounds sterling",
  },
  GEL: {
    name: "Georgian Lari",
    symbol: "GEL",
    symbolNative: "GEL",
    decimalDigits: 2,
    rounding: 0,
    code: "GEL",
    namePlural: "Georgian laris",
  },
  GHS: {
    name: "Ghanaian Cedi",
    symbol: "GH₵",
    symbolNative: "GH₵",
    decimalDigits: 2,
    rounding: 0,
    code: "GHS",
    namePlural: "Ghanaian cedis",
  },
  GNF: {
    name: "Guinean Franc",
    symbol: "FG",
    symbolNative: "FG",
    decimalDigits: 0,
    rounding: 0,
    code: "GNF",
    namePlural: "Guinean francs",
  },
  GTQ: {
    name: "Guatemalan Quetzal",
    symbol: "GTQ",
    symbolNative: "Q",
    decimalDigits: 2,
    rounding: 0,
    code: "GTQ",
    namePlural: "Guatemalan quetzals",
  },
  HKD: {
    name: "Hong Kong Dollar",
    symbol: "HK$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "HKD",
    namePlural: "Hong Kong dollars",
  },
  HNL: {
    name: "Honduran Lempira",
    symbol: "HNL",
    symbolNative: "L",
    decimalDigits: 2,
    rounding: 0,
    code: "HNL",
    namePlural: "Honduran lempiras",
  },
  HRK: {
    name: "Croatian Kuna",
    symbol: "kn",
    symbolNative: "kn",
    decimalDigits: 2,
    rounding: 0,
    code: "HRK",
    namePlural: "Croatian kunas",
  },
  HUF: {
    name: "Hungarian Forint",
    symbol: "Ft",
    symbolNative: "Ft",
    decimalDigits: 0,
    rounding: 0,
    code: "HUF",
    namePlural: "Hungarian forints",
  },
  IDR: {
    name: "Indonesian Rupiah",
    symbol: "Rp",
    symbolNative: "Rp",
    decimalDigits: 0,
    rounding: 0,
    code: "IDR",
    namePlural: "Indonesian rupiahs",
  },
  ILS: {
    name: "Israeli New Sheqel",
    symbol: "₪",
    symbolNative: "₪",
    decimalDigits: 2,
    rounding: 0,
    code: "ILS",
    namePlural: "Israeli new sheqels",
  },
  INR: {
    name: "Indian Rupee",
    symbol: "Rs",
    symbolNative: "টকা",
    decimalDigits: 2,
    rounding: 0,
    code: "INR",
    namePlural: "Indian rupees",
  },
  IQD: {
    name: "Iraqi Dinar",
    symbol: "IQD",
    symbolNative: "د.ع.‏",
    decimalDigits: 0,
    rounding: 0,
    code: "IQD",
    namePlural: "Iraqi dinars",
  },
  IRR: {
    name: "Iranian Rial",
    symbol: "IRR",
    symbolNative: "﷼",
    decimalDigits: 0,
    rounding: 0,
    code: "IRR",
    namePlural: "Iranian rials",
  },
  ISK: {
    name: "Icelandic Króna",
    symbol: "Ikr",
    symbolNative: "kr",
    decimalDigits: 0,
    rounding: 0,
    code: "ISK",
    namePlural: "Icelandic krónur",
  },
  JMD: {
    name: "Jamaican Dollar",
    symbol: "J$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "JMD",
    namePlural: "Jamaican dollars",
  },
  JOD: {
    name: "Jordanian Dinar",
    symbol: "JD",
    symbolNative: "د.أ.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "JOD",
    namePlural: "Jordanian dinars",
  },
  JPY: {
    name: "Japanese Yen",
    symbol: "¥",
    symbolNative: "￥",
    decimalDigits: 0,
    rounding: 0,
    code: "JPY",
    namePlural: "Japanese yen",
  },
  KES: {
    name: "Kenyan Shilling",
    symbol: "Ksh",
    symbolNative: "Ksh",
    decimalDigits: 2,
    rounding: 0,
    code: "KES",
    namePlural: "Kenyan shillings",
  },
  KHR: {
    name: "Cambodian Riel",
    symbol: "KHR",
    symbolNative: "៛",
    decimalDigits: 2,
    rounding: 0,
    code: "KHR",
    namePlural: "Cambodian riels",
  },
  KMF: {
    name: "Comorian Franc",
    symbol: "CF",
    symbolNative: "FC",
    decimalDigits: 0,
    rounding: 0,
    code: "KMF",
    namePlural: "Comorian francs",
  },
  KRW: {
    name: "South Korean Won",
    symbol: "₩",
    symbolNative: "₩",
    decimalDigits: 0,
    rounding: 0,
    code: "KRW",
    namePlural: "South Korean won",
  },
  KWD: {
    name: "Kuwaiti Dinar",
    symbol: "KD",
    symbolNative: "د.ك.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "KWD",
    namePlural: "Kuwaiti dinars",
  },
  KZT: {
    name: "Kazakhstani Tenge",
    symbol: "KZT",
    symbolNative: "тңг.",
    decimalDigits: 2,
    rounding: 0,
    code: "KZT",
    namePlural: "Kazakhstani tenges",
  },
  LBP: {
    name: "Lebanese Pound",
    symbol: "LB£",
    symbolNative: "ل.ل.‏",
    decimalDigits: 0,
    rounding: 0,
    code: "LBP",
    namePlural: "Lebanese pounds",
  },
  LKR: {
    name: "Sri Lankan Rupee",
    symbol: "SLRs",
    symbolNative: "SL Re",
    decimalDigits: 2,
    rounding: 0,
    code: "LKR",
    namePlural: "Sri Lankan rupees",
  },
  LTL: {
    name: "Lithuanian Litas",
    symbol: "Lt",
    symbolNative: "Lt",
    decimalDigits: 2,
    rounding: 0,
    code: "LTL",
    namePlural: "Lithuanian litai",
  },
  LVL: {
    name: "Latvian Lats",
    symbol: "Ls",
    symbolNative: "Ls",
    decimalDigits: 2,
    rounding: 0,
    code: "LVL",
    namePlural: "Latvian lati",
  },
  LYD: {
    name: "Libyan Dinar",
    symbol: "LD",
    symbolNative: "د.ل.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "LYD",
    namePlural: "Libyan dinars",
  },
  MAD: {
    name: "Moroccan Dirham",
    symbol: "MAD",
    symbolNative: "د.م.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "MAD",
    namePlural: "Moroccan dirhams",
  },
  MDL: {
    name: "Moldovan Leu",
    symbol: "MDL",
    symbolNative: "MDL",
    decimalDigits: 2,
    rounding: 0,
    code: "MDL",
    namePlural: "Moldovan lei",
  },
  MGA: {
    name: "Malagasy Ariary",
    symbol: "MGA",
    symbolNative: "MGA",
    decimalDigits: 0,
    rounding: 0,
    code: "MGA",
    namePlural: "Malagasy Ariaries",
  },
  MKD: {
    name: "Macedonian Denar",
    symbol: "MKD",
    symbolNative: "MKD",
    decimalDigits: 2,
    rounding: 0,
    code: "MKD",
    namePlural: "Macedonian denari",
  },
  MMK: {
    name: "Myanma Kyat",
    symbol: "MMK",
    symbolNative: "K",
    decimalDigits: 0,
    rounding: 0,
    code: "MMK",
    namePlural: "Myanma kyats",
  },
  MOP: {
    name: "Macanese Pataca",
    symbol: "MOP$",
    symbolNative: "MOP$",
    decimalDigits: 2,
    rounding: 0,
    code: "MOP",
    namePlural: "Macanese patacas",
  },
  MUR: {
    name: "Mauritian Rupee",
    symbol: "MURs",
    symbolNative: "MURs",
    decimalDigits: 0,
    rounding: 0,
    code: "MUR",
    namePlural: "Mauritian rupees",
  },
  MXN: {
    name: "Mexican Peso",
    symbol: "MX$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "MXN",
    namePlural: "Mexican pesos",
  },
  MYR: {
    name: "Malaysian Ringgit",
    symbol: "RM",
    symbolNative: "RM",
    decimalDigits: 2,
    rounding: 0,
    code: "MYR",
    namePlural: "Malaysian ringgits",
  },
  MZN: {
    name: "Mozambican Metical",
    symbol: "MTn",
    symbolNative: "MTn",
    decimalDigits: 2,
    rounding: 0,
    code: "MZN",
    namePlural: "Mozambican meticals",
  },
  NAD: {
    name: "Namibian Dollar",
    symbol: "N$",
    symbolNative: "N$",
    decimalDigits: 2,
    rounding: 0,
    code: "NAD",
    namePlural: "Namibian dollars",
  },
  NGN: {
    name: "Nigerian Naira",
    symbol: "₦",
    symbolNative: "₦",
    decimalDigits: 2,
    rounding: 0,
    code: "NGN",
    namePlural: "Nigerian nairas",
  },
  NIO: {
    name: "Nicaraguan Córdoba",
    symbol: "C$",
    symbolNative: "C$",
    decimalDigits: 2,
    rounding: 0,
    code: "NIO",
    namePlural: "Nicaraguan córdobas",
  },
  NOK: {
    name: "Norwegian Krone",
    symbol: "Nkr",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "NOK",
    namePlural: "Norwegian kroner",
  },
  NPR: {
    name: "Nepalese Rupee",
    symbol: "NPRs",
    symbolNative: "नेरू",
    decimalDigits: 2,
    rounding: 0,
    code: "NPR",
    namePlural: "Nepalese rupees",
  },
  NZD: {
    name: "New Zealand Dollar",
    symbol: "NZ$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "NZD",
    namePlural: "New Zealand dollars",
  },
  OMR: {
    name: "Omani Rial",
    symbol: "OMR",
    symbolNative: "ر.ع.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "OMR",
    namePlural: "Omani rials",
  },
  PAB: {
    name: "Panamanian Balboa",
    symbol: "B/.",
    symbolNative: "B/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PAB",
    namePlural: "Panamanian balboas",
  },
  PEN: {
    name: "Peruvian Nuevo Sol",
    symbol: "S/.",
    symbolNative: "S/.",
    decimalDigits: 2,
    rounding: 0,
    code: "PEN",
    namePlural: "Peruvian nuevos soles",
  },
  PHP: {
    name: "Philippine Peso",
    symbol: "₱",
    symbolNative: "₱",
    decimalDigits: 2,
    rounding: 0,
    code: "PHP",
    namePlural: "Philippine pesos",
  },
  PKR: {
    name: "Pakistani Rupee",
    symbol: "PKRs",
    symbolNative: "₨",
    decimalDigits: 0,
    rounding: 0,
    code: "PKR",
    namePlural: "Pakistani rupees",
  },
  PLN: {
    name: "Polish Zloty",
    symbol: "zł",
    symbolNative: "zł",
    decimalDigits: 2,
    rounding: 0,
    code: "PLN",
    namePlural: "Polish zlotys",
  },
  PYG: {
    name: "Paraguayan Guarani",
    symbol: "₲",
    symbolNative: "₲",
    decimalDigits: 0,
    rounding: 0,
    code: "PYG",
    namePlural: "Paraguayan guaranis",
  },
  QAR: {
    name: "Qatari Rial",
    symbol: "QR",
    symbolNative: "ر.ق.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "QAR",
    namePlural: "Qatari rials",
  },
  RON: {
    name: "Romanian Leu",
    symbol: "RON",
    symbolNative: "RON",
    decimalDigits: 2,
    rounding: 0,
    code: "RON",
    namePlural: "Romanian lei",
  },
  RSD: {
    name: "Serbian Dinar",
    symbol: "din.",
    symbolNative: "дин.",
    decimalDigits: 0,
    rounding: 0,
    code: "RSD",
    namePlural: "Serbian dinars",
  },
  RUB: {
    name: "Russian Ruble",
    symbol: "RUB",
    symbolNative: "₽.",
    decimalDigits: 2,
    rounding: 0,
    code: "RUB",
    namePlural: "Russian rubles",
  },
  RWF: {
    name: "Rwandan Franc",
    symbol: "RWF",
    symbolNative: "FR",
    decimalDigits: 0,
    rounding: 0,
    code: "RWF",
    namePlural: "Rwandan francs",
  },
  SAR: {
    name: "Saudi Riyal",
    symbol: "SR",
    symbolNative: "ر.س.‏",
    decimalDigits: 2,
    rounding: 0,
    code: "SAR",
    namePlural: "Saudi riyals",
  },
  SDG: {
    name: "Sudanese Pound",
    symbol: "SDG",
    symbolNative: "SDG",
    decimalDigits: 2,
    rounding: 0,
    code: "SDG",
    namePlural: "Sudanese pounds",
  },
  SEK: {
    name: "Swedish Krona",
    symbol: "Skr",
    symbolNative: "kr",
    decimalDigits: 2,
    rounding: 0,
    code: "SEK",
    namePlural: "Swedish kronor",
  },
  SGD: {
    name: "Singapore Dollar",
    symbol: "S$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "SGD",
    namePlural: "Singapore dollars",
  },
  SOS: {
    name: "Somali Shilling",
    symbol: "Ssh",
    symbolNative: "Ssh",
    decimalDigits: 0,
    rounding: 0,
    code: "SOS",
    namePlural: "Somali shillings",
  },
  SYP: {
    name: "Syrian Pound",
    symbol: "SY£",
    symbolNative: "ل.س.‏",
    decimalDigits: 0,
    rounding: 0,
    code: "SYP",
    namePlural: "Syrian pounds",
  },
  THB: {
    name: "Thai Baht",
    symbol: "฿",
    symbolNative: "฿",
    decimalDigits: 2,
    rounding: 0,
    code: "THB",
    namePlural: "Thai baht",
  },
  TND: {
    name: "Tunisian Dinar",
    symbol: "DT",
    symbolNative: "د.ت.‏",
    decimalDigits: 3,
    rounding: 0,
    code: "TND",
    namePlural: "Tunisian dinars",
  },
  TOP: {
    name: "Tongan Paʻanga",
    symbol: "T$",
    symbolNative: "T$",
    decimalDigits: 2,
    rounding: 0,
    code: "TOP",
    namePlural: "Tongan paʻanga",
  },
  TRY: {
    name: "Turkish Lira",
    symbol: "TL",
    symbolNative: "TL",
    decimalDigits: 2,
    rounding: 0,
    code: "TRY",
    namePlural: "Turkish Lira",
  },
  TTD: {
    name: "Trinidad and Tobago Dollar",
    symbol: "TT$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "TTD",
    namePlural: "Trinidad and Tobago dollars",
  },
  TWD: {
    name: "New Taiwan Dollar",
    symbol: "NT$",
    symbolNative: "NT$",
    decimalDigits: 2,
    rounding: 0,
    code: "TWD",
    namePlural: "New Taiwan dollars",
  },
  TZS: {
    name: "Tanzanian Shilling",
    symbol: "TSh",
    symbolNative: "TSh",
    decimalDigits: 0,
    rounding: 0,
    code: "TZS",
    namePlural: "Tanzanian shillings",
  },
  UAH: {
    name: "Ukrainian Hryvnia",
    symbol: "₴",
    symbolNative: "₴",
    decimalDigits: 2,
    rounding: 0,
    code: "UAH",
    namePlural: "Ukrainian hryvnias",
  },
  UGX: {
    name: "Ugandan Shilling",
    symbol: "USh",
    symbolNative: "USh",
    decimalDigits: 0,
    rounding: 0,
    code: "UGX",
    namePlural: "Ugandan shillings",
  },
  USD: {
    name: "US Dollar",
    symbol: "$",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "USD",
    namePlural: "US dollars",
  },
  UYU: {
    name: "Uruguayan Peso",
    symbol: "$U",
    symbolNative: "$",
    decimalDigits: 2,
    rounding: 0,
    code: "UYU",
    namePlural: "Uruguayan pesos",
  },
  UZS: {
    name: "Uzbekistan Som",
    symbol: "UZS",
    symbolNative: "UZS",
    decimalDigits: 0,
    rounding: 0,
    code: "UZS",
    namePlural: "Uzbekistan som",
  },
  VEF: {
    name: "Venezuelan Bolívar",
    symbol: "Bs.F.",
    symbolNative: "Bs.F.",
    decimalDigits: 2,
    rounding: 0,
    code: "VEF",
    namePlural: "Venezuelan bolívars",
  },
  VND: {
    name: "Vietnamese Dong",
    symbol: "₫",
    symbolNative: "₫",
    decimalDigits: 0,
    rounding: 0,
    code: "VND",
    namePlural: "Vietnamese dong",
  },
  XAF: {
    name: "CFA Franc BEAC",
    symbol: "FCFA",
    symbolNative: "FCFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XAF",
    namePlural: "CFA francs BEAC",
  },
  XOF: {
    name: "CFA Franc BCEAO",
    symbol: "CFA",
    symbolNative: "CFA",
    decimalDigits: 0,
    rounding: 0,
    code: "XOF",
    namePlural: "CFA francs BCEAO",
  },
  YER: {
    name: "Yemeni Rial",
    symbol: "YR",
    symbolNative: "ر.ي.‏",
    decimalDigits: 0,
    rounding: 0,
    code: "YER",
    namePlural: "Yemeni rials",
  },
  ZAR: {
    name: "South African Rand",
    symbol: "R",
    symbolNative: "R",
    decimalDigits: 2,
    rounding: 0,
    code: "ZAR",
    namePlural: "South African rand",
  },
  ZMK: {
    name: "Zambian Kwacha",
    symbol: "ZK",
    symbolNative: "ZK",
    decimalDigits: 0,
    rounding: 0,
    code: "ZMK",
    namePlural: "Zambian kwachas",
  },
  ZWL: {
    name: "Zimbabwean Dollar",
    symbol: "ZWL$",
    symbolNative: "ZWL$",
    decimalDigits: 0,
    rounding: 0,
    code: "ZWL",
    namePlural: "Zimbabwean Dollar",
  },
};

const options: CurrencyDetail[] = Object.keys(currencies).map(
  (key) => currencies[key]
);

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
}

type SelectOption = OptionBase & CurrencyDetail;

export const CurrencySelect = ({ value, onChange, ...props }: Props) => {
  const selectedValue = options.find(({ code }) => code === value) ?? null;

  return (
    <Select<SelectOption, false, GroupBase<SelectOption>>
      placeholder="Select currency"
      value={selectedValue}
      options={options}
      onChange={(selectedOption) =>
        selectedOption && onChange(selectedOption.code)
      }
      getOptionValue={({ code }) => code}
      getOptionLabel={({ name, code }) => `${code} - ${name}`}
      blurInputOnSelect
      {...props}
    />
  );
};
