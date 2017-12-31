<template>
  <arc-card type="success">
    <div slot="header" class="text-center">
      <h1>View Classes</h1>
    </div>
    <div class="card-block px-2">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in classes"
            :key="c.classId" 
            class="course-item"
            @click="$router.push(`/classes/${c.classId}`)"
          >
            <td>{{ c.courseName }}</td>
            <td>{{ c.instructor }}</td>
            <td>{{ c.location }}</td>
            <td>{{ c.date }}</td>
            <td>{{ c.time }}</td>
            <td>{{ c.signins }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </arc-card>
</template>

<script>
import Card from '../Card'

export default {
    data: function() {
        return {
            headers: [
                'Course Name',
                'Instructor',
                'Location',
                'Date',
                'Time',
                'Sign Ins'
            ],
            classes: [
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                },
                {
                    classId: 0,
                    courseName: 'CS10',
                    instructor: 'John Pham',
                    location: 'Chung 127',
                    time: '12PM - 1PM',
                    date: '01/03/2018',
                    signins: 34
                }
            ]
        }
    },
    components: {
        arcCard: Card
    }
}
</script>

<style>
.course-item {
    cursor: pointer;
}
.card-block {
    height: 70vh;
    overflow: auto;
}
.table th {
    padding: 15px 25px;
    font-size: 11px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1;
    color: #9ba4ae;
    border: none;
}
.table-striped tbody tr:nth-of-type(2n + 1) {
    background-color: #f7f8fb;
}
</style>
