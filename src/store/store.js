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
      instructor: undefined
    },
    accessCode: 'SIRocks',
    registrationCode: '',
    courses: [
      {
        courseName: 'CS10',
        id: '0',
        section: '21',
        code: '329329',
        instructor: {
          name: 'John Pham',
          email: 'jpham035@ucr.edu'
        },
        location: 'Chung 127',
        startTime: '12PM',
        endTime: '1PM',
        date: '01/03/2018',
        attendance: [
          {
            name: 'John Doe',
            email: 'jdoe001@ucr.edu'
          },
          {
            name: 'Alice Tomson',
            email: 'atom001@ucr.edu'
          }
        ],
        notes: 'lorem ipsum'
      },
      {
        courseName: 'CS10',
        id: '2',
        section: '84',
        code: '123456',
        instructor: {
          name: 'Guthrie Price',
          email: 'gprice@ucr.edu'
        },
        location: 'Chung 127',
        startTime: '12PM',
        endTime: '1PM',
        date: '01/03/2018',
        attendance: [
          {
            name: 'John Doe',
            email: 'jdoe001@ucr.edu'
          }
        ],
        notes: 'Test Notes'
      }
    ]
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
    }
  },
  actions: {
    userSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const token = result.credential.accessToken
          const user = result.user

          this.state.user.name = user.displayName
          this.state.user.email = user.email
          this.state.user.photoURL = user.photoURL
          this.state.user.instructor = false
        })
    },
    instructorSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider()

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user

          this.state.user.name = user.displayName
          this.state.user.email = user.email
          this.state.user.photoURL = user.photoURL
          this.state.user.instructor = true
        })
    }
  },
  modules: {}
})
