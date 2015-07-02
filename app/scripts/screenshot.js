'use strict';

// http://localhost:7051/screenshot-responsive.html?columns=12&container-type=container-fluid&title=992px

(function(document) {

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return pair[1];
      }
    }

    return (false);
  }

  var columns = getQueryVariable('columns');
  var containerType = getQueryVariable('container-type');
  var width = getQueryVariable('width');

  if (columns) {
    var columnsClassName = 'show-' + columns + '-columns';
    document.body.classList.add(columnsClassName);
  }

  if (containerType) {
    var containerClassName = containerType;
    document.querySelector('#container').classList.add(containerClassName);
  }

  if (width && columns) {
    document.querySelector('#label-width').innerHTML = width + 'px';
    document.querySelector('#label-columns').innerHTML = columns;
    document.querySelector('title').innerHTML = 'Grid: ' + width + 'px ,' + columns + ' columns';
  }

  setTimeout(html2canvas([document.body], {
    logging: true,
    onrendered: function(canvas) {
      window.location = canvas.toDataURL('image/png', 1.0);
    }
  }), 100);

})(document);
