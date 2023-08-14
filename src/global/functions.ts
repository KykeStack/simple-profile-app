export const deconstructForm = (formElement: HTMLFormElement) => {
    const formContent = {};
    const formElements = Object.keys(formElement.elements);

    formElements.forEach(element => {
        if (parseInt(element) < 10) {
            return;
        }
        const htmlElement = formElement.elements[element];
        if (htmlElement.type === 'checkbox') {
            formContent[element] = htmlElement.checked
        } else {
            formContent[element] = htmlElement.value
        }
    });
    return formContent
}