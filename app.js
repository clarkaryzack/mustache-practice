const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

// const data = require("./data");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
	res.render('todo', { list: todo });
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})

let todo = [{
            "task": "Learn node basics",
            "completed": "checked",
        },
				{
            "task": "Learn Express basics",
            "completed": "checked",
        },
				{
            "task": "Learn mustache",
            "completed": "checked",
        },
				{
            "task": "Learn HTML forms with Express",
            "completed": null,
        },
				{
            "task": "Learn about authentication",
            "completed": null,
        },
				{
            "task": "Learn how to connect to PostreSQL from Node",
            "completed": null,
        },
				{
            "task": "Learn how to create databases",
            "completed": null,
        },
				{
            "task": "Learn SQL",
            "completed": null,
        },
				{
						"task": "Learn how to connect to PostreSQL from Node",
            "completed": null,
				},
				{
						"task": "Learn how to use Sequelize",
            "completed": null,
				}
    ]
