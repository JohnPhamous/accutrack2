<template>
  <arc-card type="success">
    <div slot="header" class="text-center">
      <router-link tag="button" class="btn btn-light btn-pill float-left" to="/classes/create">
          <span class="fa fa-plus-circle"></span>
          Create Class
      </router-link>
      <h1>View Classes</h1>
    </div>

    <div class="card-block px-2">
        <div class="text-center">
            <h1 v-if="$store.state.courses.length === 0" class="loading text-center">Loading</h1>
        </div>
        
      <table class="table table-hover table-striped" v-if="$store.state.courses.length > 0">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
            <router-link 
                :to="`/classes/view/${c.id}`" 
                tag="tr" 
                v-for="c in classes"
                :key="c.classId" 
                class="course-item"
            >
                <td>{{ c.courseName }}</td>
                <td>{{ c.instructor.name }}</td>
                <td>{{ c.location }}</td>
                <td>{{ c.date }}</td>
                <td>{{ c.startTime }} - {{ c.endTime }}</td>
                <td>{{ Object.keys(c.attendance).length - 1 }}</td>
                <td><h5><span class="badge badge-pill badge-primary"><strong>{{ c.code }}</strong></span></h5></td>
            </router-link>
        </tbody>
      </table>
    </div>
  </arc-card>
</template>

<script>
import Card from "../Card";

export default {
  data: function() {
    return {
      headers: [
        "Course Name",
        "Instructor",
        "Location",
        "Date",
        "Time",
        "Sign Ins",
        "Course Code"
      ]
    };
  },
  computed: {
    classes() {
      return this.$store.state.courses
        .filter(c => {
          return c.instructor.email == this.$store.state.user.email;
        })
        .reverse();
    }
  },
  beforeCreate() {
    this.$store.dispatch("loadClasses");
  },
  components: {
    arcCard: Card
  },
  methods: {}
};
</script>

<style scoped>
.course-item {
  cursor: pointer;
}
.card-block {
  height: 70vh;
  overflow: auto;
}
mark {
  background-color: #93ebff;
}
.loading {
  position: relative;
  margin-top: 30vh;
}
</style>
