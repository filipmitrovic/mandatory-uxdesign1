function noop() {};

let mds = {
    textField: function(elem) {
        let input = elem.querySelector('.mds-text-field__input');
        let label = elem.querySelector('.mds-text-field__label');
        input.addEventListener('focus', () => {
            console.log('f');
            
            label.style.top = '3px';
            label.style.fontSize = '13px';
            label.style.color = 'purple';
            input.style.borderBottom = '1px solid purple';
            label.style.transition = 'All 0.3s ease-out';
        });
        input.addEventListener('blur', () => {
        if (input.value !== '') {
            label.style.top = '3px';
            label.style.fontSize = '13px';
            label.style.color = 'purple';
            input.style.borderBottom = '1px solid purple';
            label.style.transition = 'All 0.3s ease-out';
        } else {
            label.style.top = '22px';
            label.style.fontSize = '16px';
            label.style.color = 'black';
            input.style.borderBottom = '';
            label.style.transition = 'All 0.3s ease-out'; 
        }
        });
    },
    switch: noop,
    checkbox: noop,
    radioButton: noop,
}
// OBS glöm ej kolla efter memory leaks 
