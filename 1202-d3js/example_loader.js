var prettyAll;

function delayPrettyAll() {
  if (prettyAll) clearTimeout(prettyAll);
  prettyAll = setTimeout(function(){prettyPrint()}, 300);
}

function snipCode(text) {
  var result = "";
  var lines = text.split("\n");
  for (var i=0; typeof(text=lines[i]) != "undefined"; i++) {
    if ( text.indexOf("=begin") >=0 ) result = "";
    else if ( text.indexOf("=end") >= 0) break;
         else result += text + "\n";
  }
  return result;
}

function loadExample(id, lnum) {
  d3.text("1202-d3js/"+id+".js", "text/x-javascript", function(txt){
            d3.selectAll('#'+id+' pre')
              .attr('class', 'prettyprint' + (lnum ? " linenums:"+lnum : ""))
              .text(snipCode(txt));
            eval(txt);
            delayPrettyAll();
  });
}
