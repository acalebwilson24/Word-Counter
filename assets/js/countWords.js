import {
    getCleanStringArray,
    getMaxWordCount,
    isStringWithinWordCount,
    createCounter,
    insertCounter,
    trimStringToMaxCount,
    getCountElement
} from './helperFunctions.js';

const updateWordCount = (e, counterWrapper) => {
    let count = 0;
    let maxCount = getMaxWordCount(e.target);

    if (isStringWithinWordCount(e.target.value, maxCount)) {
        count = getCleanStringArray(e.target.value).length;
    } else {
        e.target.value = trimStringToMaxCount(e.target.value, maxCount);
        count = maxCount;
    }

    let countElement = getCountElement(counterWrapper);
    countElement.innerHTML = count;
}


let wordCountElements = document.getElementsByClassName("countWords");
for (let index = 0; index < wordCountElements.length; index++) {
    const wordsCounted = wordCountElements[index];
    if (wordsCounted.tagName != "TEXTAREA") {
        continue;
    }

    let maxCount = getMaxWordCount(wordsCounted);
    let counterWrapper = createCounter(maxCount);
    insertCounter(wordsCounted, counterWrapper);

    wordsCounted.addEventListener('input', (e) => updateWordCount(e, counterWrapper));
}