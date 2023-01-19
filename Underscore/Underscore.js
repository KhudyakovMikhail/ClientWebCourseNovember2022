(function () {
    var people = [
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
            name: "Olga",
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
    console.log(people);

    function getAverageAge(people) {
        var agesSum = _.chain(people)
            .reduce(function (sum, person) {
                return sum + person.age;
            }, 0)
            .value();

        return agesSum / people.length;
    }

    var averageAge = getAverageAge(people);
    console.log("Средний возраст людей:");
    console.log(averageAge);

    function getFrom20To30PeoplesList(people) {
        return _.chain(people)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .sortBy("age")
            .value();
    }

    var from20To30PeopleList = getFrom20To30PeoplesList(people);
    console.log("Список людей с возрастом от 20 до 30 включительно по возрастанию возраста:");
    console.log(from20To30PeopleList);

    function getDescendingFrom20To30UniquePeopleNames(people) {
        return _.chain(people)
            .filter(function (p) {
                return p.age >= 20 && p.age <= 30;
            })
            .pluck("name")
            .uniq()
            .sortBy()
            .reverse()
            .value();
    }

    var descendingFrom20To30UniqPeopleNames = getDescendingFrom20To30UniquePeopleNames(people);
    console.log("Список уникальных имен людей с возрастом от 20 до 30 включительно по убыванию:");
    console.log(descendingFrom20To30UniqPeopleNames);

    function getPeoplesCountByNamesObject(people) {
        var peoplesCountByNames = {};

        var uniqueNamesList = _.uniq(people);

        _.each(uniqueNamesList, function (person) {
            peoplesCountByNames[person.name] = _.chain(people)
                .filter(function (person1) {
                    return person1.name === person.name;
                })
                .size()
                .value();
        });

        return peoplesCountByNames;
    }

    var peoplesCountByNamesObject = getPeoplesCountByNamesObject(people);
    console.log("Объект, в котором ключи - имена людей, а значения количество людей с этим именем:");
    console.log(peoplesCountByNamesObject);
})();