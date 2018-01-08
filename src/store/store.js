import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      photoURL: '',
      instructor: undefined,
      token: ''
    },
    accessCode: 'SIRocks',
    registrationCode: '',
    courses: []
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    createClass(state, newClass) {
      state.courses.push(newClass)
    },
    setUser({ commit }, payload) {
      console.log('set user')
    },
    setLoadedCourses(state, courses) {
      console.log(courses)
      state.courses = courses
    }
  },
  actions: {
    userSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider()
      this.state.user.instructor = false
      firebase.auth().signInWithRedirect(provider)
    },
    instructorSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider()
      this.state.user.instructor = true
      firebase.auth().signInWithRedirect(provider)
    },
    getAuth({ commit }, payload) {
      firebase
        .auth()
        .getRedirectResult()
        .then(result => {
          if (result.credential) {
            const token = result.credential.accessToken
            const user = result.user

            this.state.user.name = user.displayName
            this.state.user.email = user.email
            this.state.user.photoURL = user.photoURL
            this.state.user.token = token
            this.state.user.instructor = payload.instructor

            console.log('authenticated')
          }
        })
    },
    createClassFirebase({ commit }, newClass) {
      firebase
        .database()
        .ref('courses')
        .push(newClass)
        .then(data => {
          console.log(data)
          commit('createClass', newClass)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadClasses({ commit }, instructor) {
      firebase
        .database()
        .ref('courses')
        .on('value', data => {
          const courses = []
          const obj = data.val()
          for (let key in obj) {
            let currentAttendance = []

            if (obj[key].attendance !== undefined) {
              currentAttendance = obj[key].attendance
            }
            courses.push({
              id: key,
              courseName: obj[key].courseName,
              section: obj[key].section,
              code: obj[key].code,
              instructor: {
                name: obj[key].instructor.name,
                email: obj[key].instructor.email
              },
              location: obj[key].location,
              startTime: obj[key].startTime,
              endTime: obj[key].endTime,
              date: obj[key].date,
              attendance: currentAttendance,
              notes: obj[key].notes
            })
          }

          commit('setLoadedCourses', courses)
        })
    }
  },
  modules: {}
})
