self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/Calendar": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/Calendar.js"
    ],
    "/ToDoApp": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/ToDoApp.js"
    ],
    "/ToDoApp2": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/ToDoApp2.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/info": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/info.js"
    ],
    "/like-demo": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/like-demo.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];