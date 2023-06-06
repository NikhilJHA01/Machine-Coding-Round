const explorer = [
  {
    name: "folder-view",
    children: []
  },
  {
    name: "js-questions",
    children: [
      {
        name: "folder-view.js"
      },
      {
        name: "hasOwnProperty.js"
      },
      {
        name: "inner-folder",
        children: [
          {
            name: "innermost",
            children: []
          },
          {
            name: "file-1.ts"
          },
          {
            name: "file-2.ts"
          }
        ]
      }
    ]
  },
  {
    name: "progress-bar",
    children: [
      {
        name: "index.html"
      },
      {
        name: "index.js"
      },
      {
        name: "styles.css"
      }
    ]
  },
  {
    name: "package.json"
  }
];

export default explorer;
