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
