webix.ready(function(){
  webix.ui({
    rows:[
      {
        css: "toolbar",
        borderless: true,
        paddingY:7,

        paddingX:10,
        margin: 7,
        cols:[
          {view: "label", label: "タスクの追加・削除ができます。"},
          {view: "button", type: "danger", label: "選択中を削除", click: remove, width: 150},
          {view: "button", type: "form",  label: "新規追加", click: add, width: 150}
        ]
      },
      {
        css: "shadow",
        type:"space",
        borderless: true,
        cols:[

          {
            view:"kanban",
            id: "myBoard",
            type: "wide",
            cols:[
              { header:"バックログ",
                body:{ view:"kanbanlist", status:"new", type: "avatars"}},
              { header:"処理中",
                body:{ view:"kanbanlist", status:"work", type: "avatars"}
              },
              { header:"確認中",
                body:{ view:"kanbanlist", status:"test", type: "avatars"}},
              { header:"終了",
                body:{ view:"kanbanlist", status:"done", type: "avatars"}}
            ],
            data:base_task_set
          },
          {
            id: "myForm",
            view: "form",
            width: 300,

            hidden: true,
            elementsConfig:{
              labelPosition: "top"
            },
            elements:[

              { view: "text", label: "Title", name: "text", focus: true},
              { view: "textarea",	label: "Description", name: "textarea", height: 90},
              {
                borderless: true,
                paddingY: 20,
                paddingX: 2,
                margin: 7,
                cols:[
                  {},
                  {view: "button", label: "Cancel", click: cancelAdd},
                  {view: "button", type: "form", label: "Save", click: save}
                ]
              },
              {}
            ]
          }
        ]
      }

    ]

  });
  $$("myForm").bind($$("myBoard"));
});

var base_task_set =[
	{ id:1, status:"new", text:"Task 1", tags:"webix,docs", comments:[{text:"Comment 1"}, {text:"Comment 2"}] },
	{ id:2, status:"work", text:"Task 2", color:"red", tags:"webix", votes:1, personId: 4  },
	{ id:3, status:"work", text:"Task 3", tags:"webix,docs", comments:[{text:"Comment 1"}], personId: 6 },
	{ id:4, status:"test", text:"Task 4 pending", tags:"webix 2.5", votes:1, personId: 5  },
	{ id:5, status:"new", text:"Task 5", tags:"webix,docs", votes:3  },
	{ id:6, status:"new", text:"Task 6", tags:"webix,kanban", comments:[{text:"Comment 1"}, {text:"Comment 2"}], personId: 2 },
	{ id:7, status:"work", text:"Task 7", tags:"webix", votes:2, personId: 7, image: "image001.png"  },
	{ id:8, status:"work", text:"Task 8", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}], votes:5, personId: 4  },
	{ id:9, status:"work", text:"Task 9", tags:"webix", votes:1, personId: 2},
	{ id:10, status:"work", text:"Task 10", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}, {text:"Comment 3"}], votes:10, personId:1 },
	{ id:11, status:"work", text:"Task 11", tags:"webix 2.5", votes:3, personId: 8 },
	{ id:12, status:"done", text:"Task 12", votes:2 , personId: 8, image: "image002.png"},
	{ id:13, status:"ready", text:"Task 14",  personId: 8}
];
