// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require moment
//= require fullcalendar
//= require_tree .
// $(document).ready(function () {
//     $('#calendar').fullCalendar({
//         header: {
//             left: 'prev,next today',
//             center: 'title',
//             right: 'agendaDay,agendaWeek'
//         },
//         height: 'auto',
//         events: "/bookings",
//         defaultView: 'resourceDay',
//     });
//     // $('#calendar').fullCalendar({
//     //     header: {
//     //         left: 'prev,next today',
//     //         center: 'title',
//     //         right: 'resourceAgendaDay,month,agendaWeek,agendaDay'
//     //     },
//     //     defaultDate: '2014-11-12',
//     //     editable: true,
//     //     eventLimit: true, // allow "more" link when too many events
//     //     defaultView: 'resourceAgendaDay',
//     //     views: {
//     //         resourceAgendaDay: {
//     //             type: 'resourceAgenda',
//     //             duration: {
//     //                 days: 1
//     //             },
//     //             buttonText: "resource"
//     //         }
//     //     },
//     //     allDaySlot: false, // Unsupported yet
//     //     unknownResourceTitle: 'Others',
//     //     resources: [
//     //         {id: 'room101', name: 'Room 101'},
//     //         {id: 'room102', name: 'Room 102'},
//     //         {id: 'room201', name: 'Room 201'},
//     //         {id: 'room301', name: 'Room 301'},
//     //         {id: 'room401', name: 'Room 401'},
//     //         {id: 'room707', name: 'Room 707'}
//     //     ],
//     //     events: [
//     //         {
//     //             title: 'All Day Event',
//     //             start: '2014-11-01',
//     //             resource: 'room101'
//     //         },
//     //         {
//     //             title: 'Long Event',
//     //             start: '2014-11-07',
//     //             end: '2014-11-10',
//     //             resource: 'room101'
//     //         },
//     //         {
//     //             id: 999,
//     //             title: 'Repeating Event',
//     //             start: '2014-11-09T16:00:00'
//     //         },
//     //         {
//     //             id: 999,
//     //             title: 'Repeating Event',
//     //             start: '2014-11-16T16:00:00',
//     //             resource: 'room101'
//     //         },
//     //         {
//     //             title: 'Conference',
//     //             start: '2014-11-11',
//     //             end: '2014-11-13',
//     //             resource: 'room102'
//     //         },
//     //         {
//     //             title: 'Meeting',
//     //             start: '2014-11-12T10:30:00',
//     //             end: '2014-11-12T12:30:00',
//     //             resource: 'room201'
//     //         },
//     //         {
//     //             title: 'Lunch',
//     //             start: '2014-11-12T12:00:00',
//     //             resource: 'room301'
//     //         },
//     //         {
//     //             title: 'Meeting',
//     //             start: '2014-11-12T14:30:00',
//     //             resource: 'room707'
//     //         },
//     //         {
//     //             title: 'Happy Hour',
//     //             start: '2014-11-12T17:30:00',
//     //             resource: 'room707'
//     //         },
//     //         {
//     //             title: 'Dinner',
//     //             start: '2014-11-12T20:00:00',
//     //             resource: 'room707'
//     //         },
//     //         {
//     //             title: 'Birthday Party',
//     //             start: '2014-11-13T07:00:00'
//     //         },
//     //         {
//     //             title: 'Click for Google',
//     //             url: 'http://google.com/',
//     //             start: '2014-11-28'
//     //         }
//     //     ]
//     // });
// });
$(document).ready(function () {

    // var date = new Date();
    // var d = date.getDate();
    // var m = date.getMonth();
    // var y = date.getFullYear();
    //
    // var calendar = $('#calendar').fullCalendar({
    //     // numberOfWeeks: 1,
    //     // weekNumbers: false,
    //     header: {
    //         // left: 'prev,next',
    //         // center: 'title',
    //         // right: ''
    //         left: 'prev,next today',
    //         center: 'title',
    //         right: 'resourceDay,resourceWeek'
    //     },
    //
    //     defaultView: 'resourceDay',
    //     lastDay: d,
    //     // editable: true,
    //     selectable: true,
    //     selectHelper: true,
    //     resources: [{
    //         "name": "Williams, Elizabeth",
    //         "detail": "",
    //         "age": "33Y",
    //         "gender": "F",
    //         "location": "PKHospital (inpatient)",
    //         "los": "LOS:15d",
    //         "id": "resource2"
    //     }, {
    //         "name": "Hall, Allan N",
    //         "detail": "",
    //         "age": "87Y",
    //         "gender": "M",
    //         "location": "PKHospital (inpatient)",
    //         "los": "LOS:2d",
    //         "id": "resource1",
    //         "readonly": true
    //     }, {
    //         "name": "Oates, Betsy",
    //         "detail": "",
    //         "age": "88Y",
    //         "gender": "F",
    //         "location": "ICU-G.ICU1.1.\nPKHospital-Central(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource3",
    //         "readonly": true
    //     }, {
    //         "name": "Ranters, James",
    //         "detail": "",
    //         "age": "78Y",
    //         "gender": "F",
    //         "location": "5G.511.A.\n PKHospital-Central(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource4",
    //         "readonly": true
    //     }, {
    //         "name": "Walsh, Susan",
    //         "detail": "",
    //         "age": "87Y",
    //         "gender": "M",
    //         "location": "4G.404.B.\nPKHospital-Central(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Angeline, Mona E",
    //         "detail": "",
    //         "age": "88Y",
    //         "gender": "F",
    //         "location": "ICU-G.ICU1.1.\nPKHospital-East(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Oates, Betsy E",
    //         "detail": "",
    //         "age": "78Y",
    //         "gender": "F",
    //         "location": "5G.511.A.\nPKHospital-East(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Ranters, James E",
    //         "detail": "",
    //         "age": "87Y",
    //         "gender": "F",
    //         "location": "5G.511.A.\nPKHospital-East(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Walsh, Susan E",
    //         "detail": "",
    //         "age": "88Y",
    //         "gender": "F",
    //         "location": "4G.404.B.\nPKHospital-East(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Angeline, Mona E",
    //         "detail": "",
    //         "age": "88Y",
    //         "gender": "F",
    //         "location": "ICU-G.ICU1.1.\nPKHospital-East(Inpatient)",
    //         "los": "LOS:4d",
    //         "id": "resource5",
    //         "readonly": true
    //     }, {
    //         "name": "Williams, Elizabeth",
    //         "detail": "",
    //         "age": "33Y",
    //         "gender": "F",
    //         "location": "PKHospital (inpatient)",
    //         "los": "LOS:15d",
    //         "id": "resource2"
    //     }, {
    //         "name": "Hall, Allan N",
    //         "detail": "",
    //         "age": "87Y",
    //         "gender": "M",
    //         "location": "PKHospital (inpatient)",
    //         "los": "LOS:2d",
    //         "id": "resource1",
    //         "readonly": true
    //     }],
    //     events: [{
    //         title: 'Add',
    //         start: new Date(y, m, d),
    //         end: new Date(y, m, d),
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 1),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 2),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 3),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 4),
    //         allDayRow: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 5),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 6),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 7),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 8),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }, {
    //         title: 'Add',
    //         start: new Date(y, m, d - 9),
    //         allDay: true,
    //         resource: ['resource1', 'resource2', 'resource3', 'resource4', 'resource5'],
    //         // backgroundColor: '#f0f0f0',
    //         // borderColor: '#f0f0f0',
    //         // textColor: 'red'
    //     }],
    //     eventClick: function(calEvent, jsEvent, view) {
    //
    //         alert('Event: ' + calEvent.title);
    //         alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    //         alert('View: ' + view.name);
    //
    //         // change the border color just for fun
    //         $(this).css('border-color', 'red');
    //
    //     },
    //     dayClick: function(date, jsEvent, view) {
    //
    //         alert('Clicked on: ' + date.format());
    //
    //         alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    //
    //         alert('Current view: ' + view.name);
    //
    //         // change the day's background color just for fun
    //         $(this).css('background-color', 'red');
    //
    //     },
    //         select: function(start, end, allDay, ev) {
    //             console.log(start);
    //             console.log(end);
    //             console.log(ev.data);
    //         },
    //     // select: function (start, end, allDay, jsEvent, view, resource) {
    //     //     var title = prompt('event title:');
    //     //
    //     //     if (title) {
    //     //         calendar.fullCalendar('renderEvent', {
    //     //                 title: title,
    //     //                 start: start,
    //     //                 end: end,
    //     //                 allDay: allDay,
    //     //                 resource: resource.id
    //     //             },
    //     //             true // make the event "stick"
    //     //         );
    //     //     }
    //     //     calendar.fullCalendar('unselect');
    //     // },
    //     // eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
    //     //     alert('event moved to ' + event.start + ' to ' + event.resource);
    //     // },
    //     // eventResize: function (event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) {
    //     //     alert('event was resized, new endtime: ' + event.end);
    //     // },
    //     eventClick: function (event, jsEvent, view) {
    //         alert('event ' + event.title + ' was left clicked');
    //     },
    //     // windowResize: function (view) {
    //     //     calendar.fullCalendar('option', 'height', $(window).height() - 40);
    //     // }
    // });

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'resourceDay,resourceWeek'
        },
        // defaultDate: '2014-11-12',
        // editable: true,
        slotMinutes: 60,
        defaultView: 'resourceDay',
        // selectable: true,
        // selectHelper: true,
        unknownResourceTitle: 'Others',
        resources:
        //     [
        //     {id: 'room101', name: 'Room 101'},
        //     {id: 'room102', name: 'Room 102'},
        //     {id: 'room201', name: 'Room 201'},
        //     {id: 'room301', name: 'Room 301'},
        //     {id: 'room401', name: 'Room 401'},
        //     {id: 'room707', name: 'Room 707'}
        // ]
        '/rooms'
        ,
        events:
        //     [
        //     {
        //         title: 'All Day Event',
        //         start: '2016-09-24',
        //         resource: 'room101'
        //     },
        //     {
        //         title: 'Long Event',
        //         start: '2014-11-07',
        //         end: '2014-11-10',
        //         resource: 'room101'
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: '2016-09-25T16:00:00'
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: '2016-09-25T18:00:00',
        //         resource: 'room101'
        //     },
        //     {
        //         title: 'Conference',
        //         start: '2014-11-11',
        //         end: '2014-11-13',
        //         resource: 'room102'
        //     },
        //     {
        //         title: 'Meeting',
        //         start: '2014-11-12T10:30:00',
        //         end: '2014-11-12T12:30:00',
        //         resource: 'room201'
        //     },
        //     {
        //         title: 'Lunch',
        //         start: '2014-11-12T12:00:00',
        //         resource: 'room301'
        //     },
        //     {
        //         title: 'Meeting',
        //         start: '2014-11-12T14:30:00',
        //         resource: 'room707'
        //     },
        //     {
        //         title: 'Happy Hour',
        //         start: '2014-11-12T17:30:00',
        //         resource: 'room707'
        //     },
        //     {
        //         title: 'Dinner',
        //         start: '2014-11-12T20:00:00',
        //         resource: 'room707'
        //     },
        //     {
        //         title: 'Birthday Party',
        //         start: '2014-11-13T07:00:00'
        //     },
        //     {
        //         title: 'Click for Google',
        //         url: 'http://google.com/',
        //         start: '2014-11-28'
        //     }
        // ]
        '/bookings',
            // select: function (start, end, allDay, jsEvent, view, resource) {
            //     var title = prompt('event title:');
            //
            //     if (title) {
            //         calendar.fullCalendar('renderEvent', {
            //                 title: title,
            //                 start: start,
            //                 end: end,
            //                 allDay: allDay,
            //                 resource: resource.id
            //             },
            //             true // make the event "stick"
            //         );
            //     }
            //     calendar.fullCalendar('unselect');
            // },
            // eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
            //     alert('event moved to ' + event.start + ' to ' + event.resource);
            // },
            // eventResize: function (event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) {
            //     alert('event was resized, new endtime: ' + event.end);
            // },
            eventClick: function (event, jsEvent, view) {
                alert(event.title + ' has booked this room!');
            },
            // windowResize: function (view) {
            //     calendar.fullCalendar('option', 'height', $(window).height() - 40);
            // }
    });
});

