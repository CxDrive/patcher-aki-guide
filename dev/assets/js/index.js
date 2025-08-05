dataset.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

// Filter categories

const indexHack = dataset.filter(item => item.category === "hack");
const indexTranslationAll = dataset.filter(item => item.category === "translation");
const indexImprovementAll = dataset.filter(item => item.category === "improvement");

// Build Hacks section

const indexCurrent = indexHack.filter(item => item.current === "TRUE");

var strHacks = '';

for (let i = 0; i < indexCurrent.length; i++) {
    strHacks += '<a title="' + indexCurrent[i].codeName + ' by ' + indexCurrent[i].creatorName + '" alt="' + indexCurrent[i].codeName + '" href="./' + indexCurrent[i].code + '.html"><img class="box-link available" src="./assets/img/box_' + indexCurrent[i].code + '.png"></a>'
};

document.getElementById("index-hacks").innerHTML = strHacks;

// Build External section

const indexExternal = dataset.filter(item => item.category === "external");

var strExternal = '';

for (let i = 0; i < indexExternal.length; i++) {
    strExternal += '<a class="list-group-item list-group-item-action" data-toggle="tooltip" title="'  + indexExternal[i].codeName + '" href="' +  indexExternal[i].url + '" target="_blank">'  + indexExternal[i].codeName + ' <span style="color: #dee2e6">by ' + indexExternal[i].creatorName + '</span></a>'
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
