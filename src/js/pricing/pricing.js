function selector(selector) {
    return document.querySelector(selector);
}

function selectors(selector) {
    return document.querySelectorAll(selector);
}

// Calculate Cost Of Service
(function () {
    let items = selectors('.selected-service-wrapper .item');
    let itemsArr = [];
    let checked = true;

    items.forEach((item) => {
        itemsArr.push(item.id);
    });

    itemsArr.forEach((item) => {
        let inputs = selectors(`#${item} input`);
        let labels = selectors(`#${item} label`);
        inputs.forEach((input) => {
            input.id += '-' + item;
            input.attributes.name.textContent += '-' + item;
        });
        labels.forEach((label) => {
            label.htmlFor += '-' + item;
        });

        let buttons = selectors(`#${item} .calculate-project-price input`);
        let prices = [0, 0, 0];
        let total = 0;
        function getValue(elements) {
            if (checked) {
                elements[0].checked = true;
                elements[3].checked = true;
                elements[6].checked = true;
            }
            elements.forEach((el) => {
                if (el.checked) {
                    let value = Number(el.value);
                    if (el.name == 'complexility-' + item) {
                        prices[0] = value;
                    } else if (el.name == 'projectSize-' + item) {
                        prices[1] = value;
                    } else {
                        prices[2] = value;
                    }
                }
            });
            total = prices.reduce((a, b) => a + b);
            selector('#' + item + ' .price-from span').innerHTML = total;
            selector('#' + item + ' .price-to span').innerHTML = total * 3.5;
        }
        getValue(buttons);

        buttons.forEach((el) => {
            el.addEventListener('change', (e) => {
                checked = false;
                let inputs = selectors(
                    `#${item} .${e.path[3].className} input`
                );
                getValue(inputs);
            });
        });
    });
})();

// Select Type Of Application
(function () {
    (function () {
        const applications = selector('#select-application');
        const contents = selectors('.selected-service-wrapper .item');
        applications.addEventListener('change', (e) => {
            const id = e.target.value;
            if (id) {
                contents.forEach((content) => {
                    content.classList.remove('active');
                });
                const element = selector('#' + id);
                element.classList.add('active');
            }
        });
    })();
})();
