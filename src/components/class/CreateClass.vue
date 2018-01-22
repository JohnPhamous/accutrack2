<template>
  <div>
    <arc-card type="success" v-if="!confirmingClass">
      <div slot="header" class="text-center">
        <span
          class="float-left fa fa-arrow-circle-o-left back"
          @click="cancelCreate"
        ></span>
        <h1>Create Class</h1>
      </div>

      <div class="card-block px-2">
        <div class="container pt-4">
          <div class="row justify-content-md-center px-4">
            <div class="col-md-12 p-4 mb-4">
              <form>
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="name">Instructor's Name</label>
                      <input 
                        type="text"
                        class="form-control"
                        placeholder="Instructor's Name"
                        v-model="user.name"
                        disabled
                        id="name"
                      >
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="email">Instructor's Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Instructor's Email"
                        v-model="user.email"
                        disabled
                        id="email"
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="courseName">Course Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="CS010"
                        v-model="courseName"
                        id="courseName"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="courseSection">Course Section</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="21"
                        v-model="section"
                        id="courseSection"
                        required
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="courseLocation">Course Location</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Chung 127"
                        v-model="location"
                        id="courseLocation"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="courseDate">Course Date</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="21"
                        v-model="date"
                        id="courseDate"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="courseStartTime">Course Start Time</label>
                      <input
                        type="time"
                        class="form-control"
                        v-model="startTime"
                        id="courseStartTime"
                        required
                      >
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="courseEndTime">Course End Time</label>
                      <input
                        type="time"
                        class="form-control"
                        v-model="endTime"
                        id="courseEndTime"
                        required
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <label for="notes">Notes</label>
                    <textarea
                      class="form-control"
                      id="notes"
                      placeholder="Agenda, course plan, points to cover, etc."
                      v-model="notes"
                    ></textarea>
                  </div>
                </div>

                <div class="actions-container mt-3">
                  <input class="btn btn-secondary btn-pill btn-confirm" type="submit" value="Create Course" @click.prevent="confirmInformation">
                  <button tag="button" class="btn btn-danger btn-pill btn-confirm" to="/classes" @click="cancelCreate">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </arc-card>
    <confirm-class
      v-if="confirmingClass"
      :name="user.name"
      :email="user.email"
      :courseName="courseName"
      :section="section"
      :location="location"
      :date="date"
      :time="`${startTime} - ${endTime}`"
      :notes="notes"
    >
      <div class="actions-container">
        <button class="btn btn-warning btn-pill btn-confirm" @click="confirmingClass = false">Go Back</button>
        <button class="btn btn-primary btn-pill btn-confirm" @click="createClass">Confirm Class</button>
      </div>
    </confirm-class>
  </div>
</template>

<script>
import Card from '../Card'
import Confirm from './CreateClassConfirm'

export default {
  components: {
    arcCard: Card,
    confirmClass: Confirm
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    confirmInformation() {
      this.confirmingClass = true
    },
    cancelCreate() {
      let cancel = confirm('Are you sure you want to cancel?')
      if (cancel) {
        this.$router.push('/classes')
      }
    },
    createClass() {
      let newDate = ''
      newDate += this.date.substr(5, 2) + '/'
      newDate += this.date.substr(8, 2) + '/'
      newDate += this.date.substr(0, 4)

      let newID = this.createHashID()

      let newCode = this.createCode()

      const newClass = {
        courseName: this.courseName,
        id: newID,
        section: this.section,
        code: newCode,
        instructor: {
          name: this.user.name,
          email: this.user.email
        },
        location: this.location,
        startTime: this.startTime,
        endTime: this.endTime,
        date: newDate,
        attendance: [{ name: '', email: '' }],
        notes: this.notes
      }

      this.$store.dispatch('createClassFirebase', newClass)

      alert('Class has been created')
      this.$router.push('/classes')
    },
    createHashID() {
      let key =
        this.courseName +
        this.section +
        this.user.name +
        this.user.email +
        this.location +
        Date()

      let hash = 0
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
      }
      return hash
    },
    createCode() {
      // Creates a 6 digit number

      let code =
        this.courseName +
        this.section +
        this.user.name +
        this.user.email +
        this.location +
        this.notes +
        Date()

      let numericalCode = 0

      for (let i = 0; i < code.length; i++) {
        numericalCode += code.charCodeAt(i)
      }

      while (numericalCode < 100000) {
        numericalCode *= 2
      }

      return numericalCode % 1000000
    }
  },
  data: function() {
    return {
      // instructorName: 'John Pham',
      // instructorEmail: 'jpham035@ucr.edu',
      courseName: '',
      section: '',
      location: '',
      date: '',
      startTime: '',
      endTime: '',
      notes: '',
      confirmingClass: false
    }
  }
}
</script>

<style scoped>
.back {
  cursor: pointer;
}
.actions-container {
  display: flex;
  justify-content: center;
}
.btn-confirm {
  margin: 0 10px;
}
</style>
