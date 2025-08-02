dataset.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

var str = '<table class="table table-striped"><thead class="thead-light"><tr><th scope="col">Date</th><th scope="col">Name</th><th scope="col">Creator</th><th scope="col">Version</th><th scope="col">Readme</th></tr></thead><tbody>';

const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
};

for (let i = 0; i < dataset.length; i++) {
    str += '<tr><td>' + moment(dataset[i].date).format('MMM D YYYY') + '</td>' + '<td>' + dataset[i].codeName + '</td>' + '<td>' + dataset[i].creatorName + '</td>' + '<td><a href="../files/' + dataset[i].code + '/' + dataset[i].file + '">' + dataset[i].version + '</a></td><td><a href="../files/' + dataset[i].code + '/' + dataset[i].add1 + '">link</a></td></tr>'
};

str += '</tbody></table>';

console.log(str);
document.getElementById("archiveData").innerHTML = str;
