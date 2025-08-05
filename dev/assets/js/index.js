dataset.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

// Filter categories

const indexHack = dataset.filter(item => item.category === "hack");
const indexTranslationAll = dataset.filter(item => item.category === "translation");
const indexImprovementAll = dataset.filter(item => item.category === "improvement");


// Filter current hacks

const indexCurrent = indexHack.filter(item => item.current === "TRUE");

// Build 2025 Hack section

const index2025 = indexCurrent.filter(item => item.date.includes("2025"));

var str2025 = '';

for (let i = 0; i < index2025.length; i++) {
    str2025 += '<a title="' + index2025[i].codeName + ' by ' + index2025[i].creatorName + '" alt="' + index2025[i].codeName + '" href="./' + index2025[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + index2025[i].code + '.png"></a>'
};

document.getElementById("index-2025").innerHTML = str2025;

// Build 2024 Hack section

const index2024 = indexCurrent.filter(item => item.date.includes("2024"));

var str2024 = '';

for (let i = 0; i < index2024.length; i++) {
    str2024 += '<a title="' + index2024[i].codeName + ' by ' + index2024[i].creatorName + '" alt="' + index2024[i].codeName + '" href="./' + index2024[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + index2024[i].code + '.png"></a>'
};

document.getElementById("index-2024").innerHTML = str2024;

// Build 2023 Hack section

const index2023 = indexCurrent.filter(item => item.date.includes("2023"));

var str2023 = '';

for (let i = 0; i < index2023.length; i++) {
    str2023 += '<a title="' + index2023[i].codeName + ' by ' + index2023[i].creatorName + '" alt="' + index2023[i].codeName + '" href="./' + index2023[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + index2023[i].code + '.png"></a>'
};

document.getElementById("index-2023").innerHTML = str2023;

// Build 2022 Hack section

const index2022 = indexCurrent.filter(item => item.date.includes("2022"));

var str2022 = '';

for (let i = 0; i < index2022.length; i++) {
    str2022 += '<a title="' + index2022[i].codeName + ' by ' + index2022[i].creatorName + '" alt="' + index2022[i].codeName + '" href="./' + index2022[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + index2022[i].code + '.png"></a>'
};

document.getElementById("index-2022").innerHTML = str2022;

// Build 2020 Hack section

const index2020 = indexCurrent.filter(item => item.date.includes("2020"));

var str2020 = '';

for (let i = 0; i < index2020.length; i++) {
    str2020 += '<a title="' + index2020[i].codeName + ' by ' + index2020[i].creatorName + '" alt="' + index2020[i].codeName + '" href="./' + index2020[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + index2020[i].code + '.png"></a>'
};

document.getElementById("index-2020").innerHTML = str2020;

// Build External section

const indexExternal = dataset.filter(item => item.category === "external");

var strExternal = '';

for (let i = 0; i < indexExternal.length; i++) {
    strExternal += '<a title="' + indexExternal[i].codeName + ' by ' + indexExternal[i].creatorName + '" alt="' + indexExternal[i].codeName + '" href="' + indexExternal[i].url + '" target="_blank"><img class="box-link available" src="./assets/img/box_' + indexExternal[i].code + '.png"></a>'
};

document.getElementById("index-external").innerHTML = strExternal;

// Build The Future section

const indexFuture = dataset.filter(item => item.category === "future");

var strFuture = '';

for (let i = 0; i < indexFuture.length; i++) {
    strFuture += '<a class="list-group-item list-group-item-action" data-toggle="tooltip" title="'  + indexFuture[i].codeName + '" href="' +  indexFuture[i].url + '">'  + indexFuture[i].codeName + ' <span style="color: #dee2e6">by ' + indexFuture[i].creatorName + '</span></a>'
};

document.getElementById("index-future").innerHTML = strFuture;

// Build Translations section

const indexTranslation = indexTranslationAll.filter(item => item.current === "TRUE");

var strTranslation = '';

for (let i = 0; i < indexTranslation.length; i++) {
    strTranslation += '<a title="' + indexTranslation[i].codeName + ' by ' + indexTranslation[i].creatorName + '" alt="' + indexTranslation[i].codeName + '" href="./' + indexTranslation[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + indexTranslation[i].code + '.png"></a>'
};

document.getElementById("index-translation").innerHTML = strTranslation;

// Build Improvements section

const indexImprovement = indexImprovementAll.filter(item => item.current === "TRUE");

var strImprovement = '';

for (let i = 0; i < indexImprovement.length; i++) {
    strImprovement += '<a title="' + indexImprovement[i].codeName + ' by ' + indexImprovement[i].creatorName + '" alt="' + indexImprovement[i].codeName + '" href="./' + indexImprovement[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + indexImprovement[i].code + '.png"></a>'
};

document.getElementById("index-improvement").innerHTML = strImprovement;

// Build Unlock section

const indexUnlock = dataset.filter(item => item.category === "unlock");

var strUnlock = '';

for (let i = 0; i < indexUnlock.length; i++) {
    strUnlock += '<a class="list-group-item list-group-item-action" data-toggle="tooltip" title="'  + indexUnlock[i].codeName + '" href="' +  indexUnlock[i].code + '.html">'  + indexUnlock[i].codeName + '</a>'
};

document.getElementById("index-unlock").innerHTML = strUnlock;
