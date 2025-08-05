dataset.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

const currentData = dataset.find(item => item.code === currentCode);

document.getElementById("header-image").innerHTML = '<img src="./assets/img/lg_' + currentData.code + '.png" alt="' + currentData.codeName + '" />';
document.getElementById("header-h1").innerHTML = currentData.codeName;

document.getElementById("summary-created-by").innerHTML = currentData.creatorName;
document.getElementById("summary-based-on").innerHTML = currentData.inputRom;
document.getElementById("summary-version").innerHTML = currentData.version;

if (currentData.add2 === "") {
  document.getElementById("summary-additional").innerHTML = '<a href="./files/' + currentData.code + '/' + currentData.add1 + '" class="yellow-link">' + currentData.add1Title + '</a>';
} else {
  document.getElementById("summary-additional").innerHTML = '<a href="./files/' + currentData.code + '/' + currentData.add1 + '" class="yellow-link">' + currentData.add1Title + '</a>  |  <a href="./files/' + currentData.code + '/' + currentData.add2 + '" class="yellow-link">' + currentData.add2Title + '</a>';
}
document.getElementById("summary-website").innerHTML = '<a href="' + currentData.url + '" class="yellow-link">' + currentData.urlTitle + '</a>';


var propertyFile = './files/' + currentData.code + '/' + currentData.file;
var propertyName = currentData.outputName;
var propertyCrc = currentData.inputCrc32;
var propertyOutput = currentData.outputName;
