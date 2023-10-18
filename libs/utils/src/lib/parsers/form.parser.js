export function formParser(form) {
    const inputValue1 = form.get('val1');
    const inputValue2 = form.get('val2');

    return [inputValue1, inputValue2];
}