var specialConsole = (function () {
    function getResultToPrint(argumentsToFormat) {
        var result = argumentsToFormat[0].toString(),
            placeholderValues;

        if (argumentsToFormat.length > 1) {
            var args = Array.prototype.slice.call(argumentsToFormat);
            var placeholderValues = args.slice(1, args.length);
            var placeholdersCount = result.match(/(\d+)/g).length;

            if (placeholdersCount > placeholderValues.length) {
                return 'Placeholders must be less or equal to the format values';
            }

            placeholderValues.forEach(function (value, index) {
                result = result.replace('{' + index + '}', value);
            });

            return result;
        }
        else {
            return result;
        }
    }

    function writeLine() {
        console.log(getResultToPrint(arguments));
    }

    function writeWarning() {
        console.warn(getResultToPrint(arguments));
    }

    function writeError() {
        console.error(getResultToPrint(arguments));
    }

    return {
        writeLine: writeLine,
        writeWarning: writeWarning,
        writeError: writeError
    }
})();

specialConsole.writeLine('Message: Hello');
specialConsole.writeLine('Message: {0}', 'Hello');
specialConsole.writeError('Error: {0}', 'A fatal error has occurred.');
specialConsole.writeWarning('Warning: {0}', 'You are not allowed to do that!');