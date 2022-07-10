import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar-index',
  templateUrl: './calendar-index.component.html',
  styleUrls: ['./calendar-index.component.sass']
})
export class CalendarIndexComponent implements OnInit {


  calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: this.handleDateSelect,
    eventClick: this.handleEventClick,
    eventsSet: this.handleEvents,
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: [] = []
 


  constructor(private router: Router) {
    const name = Calendar.name; // add this line in your constructor
  }


  ngOnInit() {

    this.calendarOptions
  }

  handleWeekendsToggle() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
  }

  handleDateSelect(selectInfo: any) {

    console.log(selectInfo)

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    // let title = prompt("Please enter a new title for your event");

    Swal.fire({
      title: 'Please enter your event',
      input: 'text',
      inputLabel: 'Start Date : ' + selectInfo.startStr,
      // inputValue: selectInfo.value,
      showCancelButton: true,
      // inputValidator: (value) => {
      //   if (!value) {
      //     return 'You need to write something!'
      //   }
      // }
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
      cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {
      if (result.value) {
        calendarApi.addEvent({
          // id: this.handleEvents,
          title: result.value,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          
        });
      }
      console.log('////',result.value)
      console.log('555',this.handleEvents)
    })

    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;
    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     // id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  }
   

  handleEventClick(selectInfo: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete it?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
      cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        selectInfo.event.remove();
        console.log(selectInfo.title);
        Swal.fire(
          'Deleted!',
          'Your event has been deleted.',
          'success'
        )
      }
    })
    
    // console.log('*****',selectInfo)
    
    // Swal.fire({
    //   title: 'Do you want to edit or delete?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   // confirmButtonText: 'Edit',
    //   // confirmButtonColor:'btn btn-success',
    //   denyButtonText: '<i class="vp-ban-solid"></i><a style="margin-left:20px;margin-right:20px">Delete</a>',
    //   confirmButtonColor: '#112d4e',
    //   cancelButtonColor: '#ffc107',
    //   confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">Edit</a>',
    //   cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */

    //   if (result.isConfirmed) {
        
        
    //     let calendarApi = selectInfo.view.calendar;
    //     calendarApi.unselect(); // clear date selection
    //     console.log(selectInfo.title);

    //     Swal.fire({
    //       title: 'Please edit your event',
    //       input: 'text',
    //       inputLabel: 'Start Date : ' + selectInfo.startStr,
    //       inputValue: selectInfo.title,
    //       showCancelButton: true,
          
    //       // inputValidator: (value) => {
    //       //   if (!value) {
    //       //     return 'You need to write something!'
    //       //   }
    //       // }
    //       confirmButtonColor: '#112d4e',
    //       cancelButtonColor: '#ffc107',
    //       confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
    //       cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    //     }).then((result) => {
    //       if (result.value) {
    //         calendarApi.addEvent({
    //           // id: this.handleEvents,
    //           title: result.value,
    //           start: selectInfo.startStr,
    //           end: selectInfo.endStr,
    //           allDay: selectInfo.allDay,
    //         });
    //         console.log(selectInfo.allDay);
    //         console.log(selectInfo.startStr);
    //         console.log(selectInfo.endStr);
    //         console.log(result.value);
    //       }
    //       console.log(result.value)
    //     })
    //     // this.handleEventClick(clickInfo.event.title)
    //   } else if (result.isDenied) {
    //     Swal.fire('Delete complete', '', 'success').then((result) => {
    //       selectInfo.event.remove();
    //     })
        
    //   }
    // })

  }
  handleEvents(events: any) {
    this.currentEvents = events;
    // console.log('+-+-+-+',this.currentEvents)
  }


  


}
