dataset.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));

var str = '<table class="table table-striped"><thead class="thead-light"><tr><th scope="col">Date</th><th scope="col">Name</th><th scope="col">Creator</th><th scope="col">Version</th><th scope="col"></th></tr></thead><tbody>';

const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
};

for (let i = 0; i < dataset.length; i++) {
    str += '<tr><td>' + moment(dataset[i].date).format('MMM D YYYY') + '</td>' + '<td>' + dataset[i].codeName + '</td>' + '<td>' + dataset[i].creatorName + '</td>' + '<td><a href="../files/' + dataset[i].code + '/' + dataset[i].file + '">' + dataset[i].version + '</a></td><td><a href="../files/' + dataset[i].code + '/' + dataset[i].add1 + '" title="Readme"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16"><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/></svg></a></td></tr>'
};

str += '</tbody></table>';

console.log(str);
document.getElementById("archiveData").innerHTML = str;
