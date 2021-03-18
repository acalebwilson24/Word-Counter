export const getMaxWordCount = (element) => {
    let classList = element.classList;
    for (let index = 0; index < classList.length; index++) {
        if (classList[index].includes("cw-")) {
            return parseInt(classList[index].split("-")[1]);
        }
    }

    return 500;
}

export const convertStringToArray = (str) => {
    return str.split(" ");
}

export const sanitiseArray = (strArray) => {
    return strArray.filter(d => d != "");
}

export const getCleanStringArray = (str) => {
    const strArray = convertStringToArray(str);
    return sanitiseArray(strArray);
}

export const isStringWithinWordCount = (str, maxCount) => {
    const cleanStrArray = getCleanStringArray(str);
    let count = cleanStrArray.length;
    return count <= maxCount;
}

export const getCountElement = (counterWrapper) => {
    const children = counterWrapper.children;
    for (let index = 0; index < children.length; index++) {
        const child = children[index];
        if (child.classList.contains("count")) {
            return child;
        }
    }
}

export const trimStringToMaxCount = (str, maxCount) => {
    const cleanStrArray = getCleanStringArray(strArray);
    const trimmedStrArray = cleanStrArray.slice(0, maxCount);
    const newStr = trimmedStrArray.join(" ");
    return newStr;
}

export const createCounter = (maxCount) => {
    let counterWrapper = document.createElement("p");
    counterWrapper.innerHTML = `Word Count: <span class="count">0</span>/<span>${maxCount}</span>`;
    return counterWrapper
}

export const insertCounter = (wordsCounted, counterWrapper) => {
    wordsCounted.parentNode.insertBefore(counterWrapper, wordsCounted.nextSibling);
}