# RestCountries Api Project with React

We get country information using the https://restcountries.com/v3.1/all API.

## Description

We pull information from 250 countries using the free API https://restcountries.com/v3.1/all.

## Screenshot

![Uygulama Ekran Görüntüsü](https://github.com/huseyineskan/RestCountries-Api-Project-with-React/blob/main/src/assets/RestCountries-api.png)

### Api Obj Example

```
{
    "name": {
        "common": "Switzerland",
        "official": "Swiss Confederation",
        "nativeName": {
            "fra": {
                "official": "Confédération suisse",
                "common": "Suisse"
            },
            "gsw": {
                "official": "Schweizerische Eidgenossenschaft",
                "common": "Schweiz"
            },
            "ita": {
                "official": "Confederazione Svizzera",
                "common": "Svizzera"
            },
            "roh": {
                "official": "Confederaziun svizra",
                "common": "Svizra"
            }
        }
    },
    "tld": [
        ".ch"
    ],
    "cca2": "CH",
    "ccn3": "756",
    "cca3": "CHE",
    "cioc": "SUI",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "CHF": {
            "name": "Swiss franc",
            "symbol": "Fr."
        }
    },
    "idd": {
        "root": "+4",
        "suffixes": [
            "1"
        ]
    },
    "capital": [
        "Bern"
    ],
    "altSpellings": [
        "CH",
        "Swiss Confederation",
        "Schweiz",
        "Suisse",
        "Svizzera",
        "Svizra"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "languages": {
        "fra": "French",
        "gsw": "Swiss German",
        "ita": "Italian",
        "roh": "Romansh"
    },
    "translations": {
        "ara": {
            "official": "الاتحاد السويسري",
            "common": "سويسرا"
        },
        "bre": {
            "official": "Kengevredad Suis",
            "common": "Suis"
        },
        "ces": {
            "official": "Švýcarská konfederace",
            "common": "Švýcarsko"
        },
        "cym": {
            "official": "Swiss Confederation",
            "common": "Switzerland"
        },
        "deu": {
            "official": "Schweizerische Eidgenossenschaft",
            "common": "Schweiz"
        },
        "est": {
            "official": "Šveitsi Konföderatsioon",
            "common": "Šveits"
        },
        "fin": {
            "official": "Sveitsin valaliitto",
            "common": "Sveitsi"
        },
        "fra": {
            "official": "Confédération suisse",
            "common": "Suisse"
        },
        "hrv": {
            "official": "švicarska Konfederacija",
            "common": "Švicarska"
        },
        "hun": {
            "official": "Svájc",
            "common": "Svájc"
        },
        "ita": {
            "official": "Confederazione svizzera",
            "common": "Svizzera"
        },
        "jpn": {
            "official": "スイス連邦",
            "common": "スイス"
        },
        "kor": {
            "official": "스위스 연방",
            "common": "스위스"
        },
        "nld": {
            "official": "Zwitserse Confederatie",
            "common": "Zwitserland"
        },
        "per": {
            "official": "کنفدراسیون سوئیس",
            "common": "سوئیس"
        },
        "pol": {
            "official": "Konfederacja Szwajcarska",
            "common": "Szwajcaria"
        },
        "por": {
            "official": "Confederação Suíça",
            "common": "Suíça"
        },
        "rus": {
            "official": "Швейцарская Конфедерация",
            "common": "Швейцария"
        },
        "slk": {
            "official": "Švajčiarska konfederácia",
            "common": "Švajčiarsko"
        },
        "spa": {
            "official": "Confederación Suiza",
            "common": "Suiza"
        },
        "srp": {
            "official": "Швајцарска Конфедерација",
            "common": "Швајцарска"
        },
        "swe": {
            "official": "Schweiziska edsförbundet",
            "common": "Schweiz"
        },
        "tur": {
            "official": "İsviçre Konfederasyonu",
            "common": "İsviçre"
        },
        "urd": {
            "official": "سوئیس  متحدہ",
            "common": "سویٹذرلینڈ"
        },
        "zho": {
            "official": "瑞士联邦",
            "common": "瑞士"
        }
    },
    "latlng": [
        47,
        8
    ],
    "landlocked": true,
    "borders": [
        "AUT",
        "FRA",
        "ITA",
        "LIE",
        "DEU"
    ],
    "area": 41284,
    "demonyms": {
        "eng": {
            "f": "Swiss",
            "m": "Swiss"
        },
        "fra": {
            "f": "Suisse",
            "m": "Suisse"
        }
    },
    "flag": "🇨🇭",
    "maps": {
        "googleMaps": "https://goo.gl/maps/uVuZcXaxSx5jLyEC9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/51701"
    },
    "population": 8654622,
    "gini": {
        "2018": 33.1
    },
    "fifa": "SUI",
    "car": {
        "signs": [
            "CH"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC+01:00"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/ch.png",
        "svg": "https://flagcdn.com/ch.svg",
        "alt": "The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field."
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ch.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ch.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            46.92,
            7.47
        ]
    },
    "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
    }
}
```
