"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (_a) {
    var data = _a.data;
    var id = data.id, title = data.title, completed = data.completed;
    console.log(id, title, completed);
});
