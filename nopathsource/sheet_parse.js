// import{json} from "https://spreadsheets.google.com/feeds/cells/1d0DndZ0spSZmvR5Jj17k7hjJZcTMZSLB22tuOAzirTo/1/public/values?alt=json-in-script&callback=doData"
var spData = null;
function doData(json) {
    spData = json.feed.entry;
}

function readcell(col) {
	r = 0
    while(1) {
      try{
        var cell = spData[r]["gs$cell"];
        if(cell["col"] == col){
          var val = cell["$t"];
	      console.log(r,val);
          parent = "para" + cell["row"].toString();
          document.getElementById(parent).innerHTML = val;
        }
      }
      catch(err){
      	break;
      }
      r = r + 1;
    }
}


