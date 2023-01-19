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

    function getMaxCitiesCountCountries(countries) {
        var citiesMaximumCount = Math.max.apply(null, countries.map(function (country) {
            return country.cities.length;
        }));

        return countries.filter(function (country) {
            return country.cities.length === citiesMaximumCount;
        });
    }

    var maxCitiesCountCountries = getMaxCitiesCountCountries(countries);
    console.log("Список стран c максимальнам количеством городов:")
    console.log(maxCitiesCountCountries);

    function getCountriesPopulationObject(countries) {
        var countriesPopulation = {};

        countries.forEach(function (country) {
            countriesPopulation[country.name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        });

        return countriesPopulation;
    }

    var countriesPopulationObject = getCountriesPopulationObject(countries);

    console.log("Объект: имя страны - суммарная численость")
    console.log(countriesPopulationObject);
})();