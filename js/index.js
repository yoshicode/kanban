function add(){
  var id = $$("myBoard").add({status: "new", text: ""});
  $$("myForm").show();

  $$("myBoard").select(id);
  $$("myBoard").setCursor(id);
  $$("myForm").focus();
}

function remove(){
  var id = $$("myBoard").getSelectedId();
  if(!id){
    return webix.alert("Please selected a card that you want to remove!");
  }
  $$("myBoard").remove(id);
}
function cancelAdd(){
  var id = $$("myBoard").getCursor();
  $$("myBoard").remove(id);
  $$("myForm").hide();
}
function save(){
  $$("myForm").save();
  $$("myForm").hide();
}




function onBeforeDrag(dragContext){
	console.log("Drag has been started");
	return true
}

function onBeforeDragIn(dragContext,e,list){

	// item id
	var item = this.getItem(dragContext.start);

	// if we move an item from one list to another
	if(dragContext.from != dragContext.to){
		var statusFrom = dragContext.from.config.status;
		var statusTo = dragContext.to.config.status;
		var statusIndex = {"new":0, "work":1, "test": 2, "done":3};
		var diff = Math.abs(statusIndex[statusFrom] - statusIndex[statusTo]);
		if(diff > 1){
			return false;
		}
	}
	return true;
}

function onAfterDrop(dragContext,e,list){

	// item id
	var item = this.getItem(dragContext.start);
  console.log("item: ", item);
	// if we move an item from one list to another
	if(dragContext.from != dragContext.to){
		var status = dragContext.to.config.status;
		// show a message with new status and order
		webix.message("Item '"+item.text+"' was moved into '"+status+"' column to the "+item.$index +" position");
	}
	else
		webix.message("Item '"+item.text+"' was moved to the "+item.$index +" position");
}
