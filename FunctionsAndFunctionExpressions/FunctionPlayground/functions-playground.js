function emptyFunction() {
    console.log('Arguments length: ' + arguments.length);

    if (arguments.length > 0) {
        console.log('Arguments list: ');
        for (var argument in arguments) {
            console.log('Argument ' + arguments[argument] + ' is of type ' + typeof arguments[argument]);
        }
    }
}

//emptyFunction.apply(null, [1, "pesho", Date, Date.now(), {}]);
//emptyFunction.call(null, 1, 'pesho', Date, Date.now(), {});

function person(name) {
    this.name = name;
    return this.name;
}

//person('pesho');
//console.log(name);

function AnotherPerson(name) {
    var name = name;
    this.name = name;

    this.getName = function getName() {
        return name;
    }
}

var gosho = new AnotherPerson('Gosho');
console.log(gosho.getName());
console.log(gosho.name);
//console.log(name); -> not defined

AnotherPerson.apply(gosho, ['Pesho']);
console.log(gosho.getName());
console.log(gosho.name);