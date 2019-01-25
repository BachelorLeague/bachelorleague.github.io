/*!
 *
 * Google Sheets To HTML v0.9a
 *
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 *
 * The Google document's sharing must be set to public
 *
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1FnpEQ1YHU76Qb3TE8rteZXTPHK8fCLzAK3S6ePDcOfY&output=html&gid=423242965&usp=sharing');
    query.setQuery('SELECT A, B, order by B desc label A "Contestant", B "Point Total"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('team-table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
