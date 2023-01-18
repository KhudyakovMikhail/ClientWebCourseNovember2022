(function () {
    var peoples = [
        {
            name: "Maksim",
            age: 30
        },
        {
            name: "Elena",
            age: 33
        },
        {
            name: "Ivan",
            age: 42
        },
        {
            name: "Olga",
            age: 26
        },
        {
            name: "Dmitrii",
            age: 33
        },
        {
            name: "Ivan",
            age: 80
        },
        {
            name: "Kristina",
            age: 39
        },
        {
            name: "Daniil",
            age: 9
        },
        {
            name: "Olga",
            age: 20
        },
        {
            name: "Kristina",
            age: 16
        },
        {
            name: "Svetlana",
            age: 22
        }
    ];

    console.log("Список людей:");
    console.log(peoples);

    function getAverageAge(list) {
        var agesSum = _.chain(list)
            .pluck("age")
            .reduce(function (sum, age) {
                return sum + age;
            }, 0)
            .value();

        var peoplesCount = _.size(list);

        return agesSum / peoplesCount;
    }

    var averageAge = getAverageAge(peoples);
    console.log("Средний возраст людей:");
    console.log(averageAge);

    function getFrom20To30PeoplesList(list) {
        return _.chain(list)
            .filter(function (p) {
                return p.age >= 20 && p.age <= 30;
            })
            .sort(function (p1, p2) {
                return p1.age - p2.age;
            })
            .value();
    }

    var from20To30PeoplesList = getFrom20To30PeoplesList(peoples);
    console.log("Список людей с возрастом от 20 до 30 включительно по возрастанию возраста:");
    console.log(from20To30PeoplesList);

    function getDescendingFrom20To30UniqPeoplesNamesList(list) {
        return _.chain(list)
            .filter(function (p) {
                return p.age >= 20 && p.age <= 30;
            })
            .pluck("name")
            .uniq()
            .sortBy()
            .reverse()
            .value();
    }

    var descendingFrom20To30UniqPeoplesNamesList = getDescendingFrom20To30UniqPeoplesNamesList(peoples);
    console.log("Список уникальных имен людей с возрастом от 20 до 30 включительно по убыванию:");
    console.log(descendingFrom20To30UniqPeoplesNamesList);

    function getPeoplesCountByNamesObject(list) {
        var peoplesCountByNames = {};

        var uniqNamesList = _.uniq(list);

        _.each(uniqNamesList, function (human) {
            peoplesCountByNames[human.name] = _.chain(list)
                .filter(function (human1) {
                    return human1.name === human.name;
                })
                .reduce(function (sum) {
                    return sum + 1;
                }, 0)
                .value();
        })

        return peoplesCountByNames;
    }

    var peoplesCountByNamesObject = getPeoplesCountByNamesObject(peoples);
    console.log("Объект, в котором ключи - имена людей, а значения количество людей с этим именем:");
    console.log(peoplesCountByNamesObject);
})();