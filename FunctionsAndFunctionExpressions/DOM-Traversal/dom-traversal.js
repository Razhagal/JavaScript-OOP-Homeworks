function traverse(selector) {
    var foundElement = document.querySelector(selector);

    if (foundElement !== null) {
        traverseElement(foundElement, '');
    }

    function traverseElement(element, spacing) {
        var result;
        spacing = spacing || '    ';
        result = spacing + element.nodeName.toLowerCase() + ':';

        if (element.hasAttribute('id')) {
            result += ' id="' + element.getAttribute('id');
        }

        if (element.hasAttribute('class')) {
            result += ' class="' + element.getAttribute('class');
        }

        console.log(result);

        [].forEach.call(element.childNodes, function (child) {
            if (child.nodeType === 1) {
                traverseElement(child, spacing + '    ');
            }
        });
    }
}

var selector = '.birds';
traverse(selector);