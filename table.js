$(document).ready(function () {
    // DataTable initialization, sample table
    $('#example').DataTable({
      serverSide: true,
      ordering: false,
      searching: false,
      ajax: function (data, callback, settings) {
        var out = [];

        for (var i = data.start, ien = data.start + data.length; i < ien; i++) {
          out.push([i + '-1', i + '-2', i + '-3', i + '-4', i + '-5']);
        }

        setTimeout(function () {
          callback({
            draw: data.draw,
            data: out,
            recordsTotal: 500,
            recordsFiltered: 500
          });
        }, 50);
      },
      scrollY: 200,
      scroller: {
        loadingIndicator: true
      }
    });
});
      
