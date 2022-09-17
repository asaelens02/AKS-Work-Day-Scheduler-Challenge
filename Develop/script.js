//variables
//jumbotron
var day = moment().format('dddd,MMMM Do');
dayElement.text(day);

//use JQuery to grab current day id and container div from HTML
var dayElement = $('#currentDay');
var timeBlockDiv = $('.container');
var currentTime = moment().hour();

//Array of hours for current day
var Hours = [

    moment().hour(24).format('hA'),
    moment().hour(1).format('hA'),
    moment().hour(2).format('hA'),
    moment().hour(3).format('hA'),
    moment().hour(4).format('hA'),
    moment().hour(5).format('hA'),
    moment().hour(6).format('hA'),
    moment().hour(7).format('hA'),
    moment().hour(8).format('hA'),
    moment().hour(9).format('hA'),
    moment().hour(10).format('hA'),
    moment().hour(11).format('hA'),
    moment().hour(12).format('hA'),
    moment().hour(13).format('hA'),
    moment().hour(14).format('hA'),
    moment().hour(15).format('hA'),
    moment().hour(16).format('hA'),
    moment().hour(17).format('hA'),
    moment().hour(18).format('hA'),
    moment().hour(19).format('hA'),
    moment().hour(20).format('hA'),
    moment().hour(21).format('hA'),
    moment().hour(22).format('hA'),
    moment().hour(23).format('hA'),
];

//column for div that holds timeblock hour
var timeBlock = $('col-1 hour')

//div that holds the task
var task = $('.description')

//for loop to add each timeblock beginning with 12AM
for (var i= 0; i<Hours.length;i++){
    //adds rows to div
    var row =$('<div>')
    .addClass ('row time')
    .attr ({
        id: 'row-' + (i+24)
    })

    var timeBlock = $('<div>')
    .addClass('col-1 hour')
    .text(Hours[i])
    .attr ({
        id: i+ 24
    })

    var taskArea = $('<div>')
    .addClass('col-10')
    .attr ({
        id: 'time-block-'+(i+24)
    })
    
    var taskInput = $('<p>')
    .addClass  ('description')
    .text (' ')
    .attr({
        id: 'Hour-'(i+9)
    });

    var save = $('<button>')
    .addClass ('col-1 save')
    .attr({
        id: 'save-button-' + (i+24),
        type: 'button',    })

        .on('click',function () {

            var timeBlockHour = $(this).siblings().first().text();
            var newTask = $(this).siblings().first().text();

            save(timeBlockHour,newTask)
        })

    //call function to checktime
    checkTime(taskSpace);

    //creates rows in div container
    $(timeBlockDiv).append(row);
    //adds time blocks columns to rows
    $(row).append(timeBlock);
    //adds area for task entry
    $(row).append(taskArea);
    //adds users input to taskArea
    $(taskArea).append(taskInput);

}