(function () {
    var country1 = {
        name: "Russia",
        cities: [{
            name: "Moscow",
            population: 13000000
        }, {
            name: "Novosibirsk",
            population: 1600000
        }, {
            name: "Sochi",
            population: 450000
        }, {
            name: "Vladivostok",
            population: 600000
        }]
    };

    var country2 = {
        name: "Germany",
        cities: [{
            name: "Berlin",
            population: 3600000
        }, {
            name: "Munich",
            population: 13000000
        }, {
            name: "Hamburg",
            population: 1800000
        }]
    };

    var country3 = {
        name: "Japan",
        cities: [{
            name: "Tokyo",
            population: 14000000
        }, {
            name: "Yokohama",
            population: 3700000
        }, {
            name: "Osaka",
            population: 2700000
        }]
    };

    var coutnry4 = {
        name: "Great Britain",
        cities: [{
            name: "London",
            population: 9000000
        }, {
            name: "Birmingham",
            population: 1130000
        }, {
            name: "Liverpool",
            population: 500000
        }, {
            name: "Manchester",
            population: 500000
        }]
    };

    var coutnry5 = {
        name: "France",
        cities: [{
            name: "Paris",
            population: 2300000
        }, {
            name: "Marseille",
            population: 850000
        }]
    };

    var countries = [country1, country2, country3, coutnry4, coutnry5];
    console.log("Список стран:")
    console.log(countries);

    function getMaxCitiesCount(array) {
        var maxCitiesCount = 0;

        for (var i = 0; i <array.length; i++ ) {
            var currentCitiesCount = array[i].cities.length;

            if (currentCitiesCount > maxCitiesCount) {
                maxCitiesCount = currentCitiesCount;
            }
        }

        return maxCitiesCount;
    }

    var maxCitiesCount = getMaxCitiesCount(countries);

    function getMaxCitiesCountCountryArray(array) {
        return array.filter(function (element) {
            return element.cities.length === maxCitiesCount;
        });
    }

    var maxCitiesCoutCountry = getMaxCitiesCountCountryArray(countries);
    console.log("Список стран c максимальнам количеством городов:")
    console.log(maxCitiesCoutCountry);

    var countriesPopulation = {};

    function getPopulationSum(country) {
        var populationSum = 0;

        for (var i = 0; i < country.cities.length; i++) {
            populationSum += country.cities[i].population;
        }

        return populationSum;
    }

    for(var i = 0; i < countries.length; i++) {
        countriesPopulation[countries[i].name] = getPopulationSum(countries[i]);
    }

    console.log("Объект: имя страны - суммарная численость")
    console.log(countriesPopulation);
})();