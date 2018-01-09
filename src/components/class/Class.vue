<template>
  <arc-card type="primary" class="card-height">
    <div slot="header" class="text-center">
      <router-link
        class="float-left fa fa-arrow-circle-o-left back"
        to="/classes"
        tag="span"
      ></router-link>
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
                    <li><strong>Time:</strong> {{ course.startTime }} - {{ course.endTime }}</li>
                    <li><strong>Date:</strong> {{ course.date }}</li>
                    <li><strong>Number of Students:</strong> {{ Object.keys(course.attendance).length - 1 }}</li>
                    <li><strong>Course Code:</strong> <span class="badge badge-pill badge-primary">{{ course.code }}</span></li>
                    <li><strong>Notes:</strong> {{ course.notes }}</li>
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
                  <p><small>This will download the attendance sheet in a .csv file. The file can be imported in Excel/Spreadsheets.</small></p>
                  
                  <!-- <button class="btn btn-pill btn-danger" @click.prevent="deleteCourse" :disabled="downloadDisabled">
                    <i class="fa fa-trash mr-1"></i>
                    Delete Course
                  </button>

                  <div class="alert alert-danger mt-3" role="alert" v-if="downloadDisabled">
                    You cannot delete a course after the course has taken place. Contact your manager if you need further assistance.
                  </div> -->
                  
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
                  <tr v-for="student in course.attendance" :key="student.email" v-if="student.name.length > 0">
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
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
    computed: {
        course() {
            return this.$store.state.courses.find(i => {
                return i.id == this.$route.params.id
            })
        }
    },
    data: function() {
        return {
            downloadDisabled: false
        }
    },
    methods: {
        downloadAttendance() {
            let csv = `data:text/csv;charset=utf-8,name,email,,instructor,instructor email,course,section,date,\n,,,${this
                .course.instructor.name},${this.course.instructor.email},${this
                .course.courseName},${this.course.section},${this.course
                .date},\n`

            Object.keys(this.course.attendance).forEach(key => {
                console.log(this.course.attendance[key].name)
                console.log(this.course.attendance[key].email)

                csv += this.course.attendance[key].name
                csv += ','
                csv += this.course.attendance[key].email
                csv += ',,,,,,\n'
            })

            let csvExport = encodeURI(csv)

            let download = document.createElement('a')
            let instructorName = this.course.instructor.name
                .split(' ')
                .join('_')
            let date = this.course.date.split('/').join('-')

            let downloadName = `${instructorName}_${this.course
                .courseName}_section${this.course
                .section}_${date}_attendance.csv`.toLowerCase()

            download.setAttribute('href', csvExport)
            download.setAttribute('download', downloadName)
            document.body.appendChild(download)
            download.click()
        },
        deleteCourse() {
            // if (this.course.attendance.length > 0) {
            //     this.downloadDisabled = true
            //     return
            // }
            console.log('Delete course')
        },
        goBack() {
            this.$router.push('/classes')
        }
    }
}
</script>

<style scoped>
.attendance-list {
    overflow: auto;
    height: 70vh;
}
.row,
.container-fluid {
    height: 100%;
}
.back {
    cursor: pointer;
}
mark {
    background-color: #93ebff;
}
</style>