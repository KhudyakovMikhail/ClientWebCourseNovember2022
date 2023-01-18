(function () {
    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 13000000
                },
                {
                    name: "Novosibirsk",
                    population: 1600000
                },
                {
                    name: "Sochi",
                    population: 450000
                },
                {
                    name: "Vladivostok",
                    population: 600000
                }
            ]
        },
        {
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3600000
                },
                {
                    name: "Munich",
                    population: 13000000
                },
                {
                    name: "Hamburg",
                    population: 1800000
                }
            ]
        },
        {
            name: "Japan",
            cities: [
                {
                    name: "Tokyo",
                    population: 14000000
                },
                {
                    name: "Yokohama",
                    population: 3700000
                },
                {
                    name: "Osaka",
                    population: 2700000
                }
            ]
        },
        {
            name: "Great Britain",
            cities: [
                {
                    name: "London",
                    population: 9000000
                },
                {
                    name: "Birmingham",
                    population: 1130000
                },
                {
                    name: "Liverpool",
                    population: 500000
                },
                {
                    name: "Manchester",
                    population: 500000
                }
            ]
        },
        {
            name: "France",
            cities: [
                {
                    name: "Paris",
                    population: 2300000
                },
                {
                    name: "Marseille",
                    population: 850000
                }
            ]
        }
    ];

    console.log("Список стран:")
    console.log(countries);

    function getMaxCitiesCountCountryArray(countriesArray) {
        return countriesArray.filter(function (country) {
            return country.cities.length === countries.map(function (country) {
                return country.cities.length;
            }).sort(function (number1, number2) {
                return number2 - number1;
            })[0];
        });
    }

    var maxCitiesCountCountry = getMaxCitiesCountCountryArray(countries);
    console.log("Список стран c максимальнам количеством городов:")
    console.log(maxCitiesCountCountry);

    function getCountriesPopulationObject(countriesArray) {
        var countriesPopulation = {};

        countriesArray.forEach(function (country) {
            countriesPopulation[country.name] = country.cities.map(function (city) {
                return city.population;
            }).reduce(function (sum, population) {
                return sum + population;
            }, 0)
        })

        return countriesPopulation;
    }

    var countriesPopulation = getCountriesPopulationObject(countries);

    console.log("Объект: имя страны - суммарная численость")
    console.log(countriesPopulation);
})
();