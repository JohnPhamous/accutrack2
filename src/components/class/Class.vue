<template>
  <arc-card type="primary">
    <div slot="header" class="text-center">
      <h1>{{ course.courseName }} | Section {{ course.section }}</h1>
    </div>

    <div class="card-block px-2">
      <div class="container-fluid">
      <div class="row">

        <div class="col-md-6 mx-auto">
          <div class="container">

            <arc-data>
              <span slot="icon" class="fa fa-user"></span>
              <span slot="header">Course Instructor</span>
              <span slot="body">
                <ul style="list-style: none; padding-left: 0;">
                  <li><strong>Name:</strong> {{ course.instructor.name }}</li>
                  <li><strong>Email:</strong> <a :href="`mailto:${course.instructor.email}`">{{ course.instructor.email }}</a></li>
                </ul>
              </span>
            </arc-data>

            <arc-data>
              <span slot="icon" class="fa fa-graduation-cap"></span>
              <span slot="header">Course Details</span>
              <span slot="body">
                <ul style="list-style: none; padding-left: 0;">
                  <li><strong>Location:</strong> {{ course.location }}</li>
                  <li><strong>Time:</strong> {{ course.time }}</li>
                  <li><strong>Date:</strong> {{ course.date }}</li>
                  <li><strong>Number of Students:</strong> {{ course.attendance.length }}</li>
                </ul>
              </span>
            </arc-data>

            <arc-data>
              <span slot="icon" class="fa fa-table"></span>
              <span slot="header">Course Data</span>
              <span slot="body">
                <button class="btn btn-pill btn-info" @click.prevent="downloadAttendance">
                  <i class="fa fa-download mr-1"></i>
                  Download Attendance Sheet
                </button>
                <button class="btn btn-pill btn-info mt-3">
                  <i class="fa fa-download mr-1"></i>
                  View Attendance Sheet
                </button>
              </span>
            </arc-data>

          </div>
        </div>

        <div class="attendance-list col-md-6">
          <table class="table table-striped">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in 15" :key="student.name">
                  <td>{{ student }}</td>
                  <td>{{ student }}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  </arc-card>
</template>

<script>
import Card from '../Card'
import IconText from '../IconText'

export default {
    components: {
        arcCard: Card,
        arcData: IconText
    },
    data: function() {
        return {
            course: {
                courseName: 'CS10',
                section: '14',
                instructor: {
                    name: 'John Pham',
                    email: 'jpham035@ucr.edu'
                },
                location: 'Chung 127',
                time: '12PM - 1PM',
                date: '01/12/18',
                attendance: [
                    {
                        name: 'John Doe',
                        email: 'jdoe001@ucr.edu'
                    }
                ]
            }
        }
    },
    methods: {
        downloadAttendance() {
            let csv = 'name,email\n'

            this.course.attendance.forEach(row => {
                csv += row.split(',')
                csv += '\n'
            })
            // console.log(csv)
        }
    }
}
</script>

<style scoped>
.attendance-list {
    overflow: auto;
    height: 100%;
}
.row,
.container {
    height: 100%;
}
</style>
