import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      photoURL: "",
      instructor: undefined,
      token: ""
    },
    accessCode: "SIRocks",
    registrationCode: "",
    courses: [],
    loading: false
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    createClass(state, newClass) {
      state.courses.push(newClass);
    },
    setUser(state, result) {
      // console.log('set user')
    },
    setLoadedCourses(state, courses) {
      state.courses = courses;
    },
    setLoading(state, val) {
      state.loading = val;
    }
  },
  actions: {
    userSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.state.user.instructor = false;
      firebase.auth().signInWithRedirect(provider);
    },
    instructorSignIn({ commit }) {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.state.user.instructor = true;
      firebase.auth().signInWithRedirect(provider);
    },
    autoSignIn({ commit }, payload) {
      // console.log(payload);
      this.state.user.name = payload.displayName;
      this.state.user.email = payload.email;
      this.state.user.instructor = true;
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.state.user = {
            name: "",
            email: "",
            photoURL: "",
            instructor: undefined,
            token: ""
          };
        });
    },
    getAuth({ commit }, payload) {
      firebase
        .auth()
        .getRedirectResult()
        .then(result => {
          if (result.credential) {
            const token = result.credential.accessToken;
            const user = result.user;

            this.state.user.name = user.displayName;
            this.state.user.email = user.email;
            this.state.user.photoURL = user.photoURL;
            this.state.user.token = token;
            this.state.user.instructor = payload.instructor;
          }
        });
    },
    createClassFirebase({ commit }, newClass) {
      firebase
        .database()
        .ref("courses")
        .push(newClass)
        .then(data => {
          // console.log(data);
          commit("createClass", newClass);
        })
        .catch(error => {
          // console.log(error);
        });
    },
    loadClasses({ commit }, instructor) {
      firebase
        .database()
        .ref("courses")
        .on("value", data => {
          const courses = [];
          const obj = data.val();
          for (let key in obj) {
            let currentAttendance = [];

            if (obj[key].attendance !== undefined) {
              currentAttendance = obj[key].attendance;
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
            });
          }

          commit("setLoadedCourses", courses);
        });
    },
    studentCheckIn({ commit }, classCode) {
      return new Promise((resolve, reject) => {
        let newStudent = {
          name: store.state.user.name,
          email: store.state.user.email,
          time: Date()
        };

        let courseRef = "";

        store.state.courses.some(el => {
          if (el.code == classCode) {
            courseRef = el.id;
            return true;
          }
        });

        if (courseRef.length > 5) {
          firebase
            .database()
            .ref(`courses/${courseRef}/attendance`)
            .push(newStudent);

          resolve(true);
        } else {
          resolve(false);
        }
      });
    }
  },
  modules: {}
});
