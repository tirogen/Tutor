require('./bootstrap');

window.Vue = require('vue');
window.VueCookie = require('vue-cookie');
window.Vue.use(window.VueCookie);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('remove-button', require('./components/RemoveButton.vue').default);
Vue.component('new_course-component', require('./components/NewCourseComponent.vue').default);
Vue.component('cart-item', require('./components/CartItem.vue').default);
Vue.component('notification-bar',require('./components/NotificationBar.vue').default);
Vue.component('my_calendar-component', require('./components/MyCalendarComponent.vue').default);
Vue.component('payment-log-component', require('./components/paymentLog.vue').default);
Vue.component('verified-report-log-component', require('./components/VerifiedReportLog.vue').default);
Vue.component('postponement-log-component', require('./components/PostponementLog.vue').default);
Vue.component('user-log-component', require('./components/UserLog.vue').default);
Vue.component('attendance-today-component', require('./components/AttendanceTodayComponent.vue').default);
Vue.component('attendance-history-component', require('./components/AttendanceHistoryComponent.vue').default);

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.MIX_GOOGLE_MAP_API,
    libraries: "places"
  }
});

import Vuetify from 'vuetify'
Vue.use(Vuetify)



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('remove-button', require('./components/RemoveButton.vue').default);
Vue.component('new_course-component', require('./components/NewCourseComponent.vue').default);
Vue.component('search-course-component', require('./components/SearchCourseComponent.vue').default);
Vue.component('cart-item', require('./components/CartItem.vue').default);
Vue.component('cancel-button', require('./components/CancelButton.vue').default);
Vue.component('chat-button', require('./components/ChatButton.vue').default);
Vue.component('regis-now-button', require('./components/RegisNowButton.vue').default);
Vue.component('add-to-cart-button', require('./components/AddToCartButton.vue').default);
Vue.component('admin_panel-component', require('./components/AdminPanelList.vue').default);
Vue.component('suspended-user-component', require('./components/AdminSuspendedUser.vue').default);
Vue.component('tutor-payment-request', require('./components/TutorPaymentRequest.vue').default);
Vue.component('admin-payment-request', require('./components/AdminPaymentRequest.vue').default);
Vue.component('admin-attendance-logs', require('./components/AdminAttendanceLogs.vue').default);
Vue.component('admin-course-logs', require('./components/AdminCourseLogs.vue').default);
Vue.component('course-request', require('./components/CourseRequest.vue').default);
Vue.component('report-list', require('./components/ReportList.vue').default);
Vue.component('star-rating-button', require('./components/StarRatingComponent.vue').default);
Vue.component('star-rating-score', require('./components/StarRatingScoreComponent.vue').default);
Vue.component('star-display', require('./components/StarRatingDisplayComponent.vue').default);
Vue.component('tutor-search-course-component', require('./components/TutorSearchCourseComponent.vue').default);
Vue.component('courses-card', require('./components/CoursesCard.vue').default);
Vue.component('admin-refund-request', require('./components/AdminRefundRequest.vue').default);
Vue.component('chat-component', require('./components/ChatComponent.vue').default);

//according https://github.com/vuetifyjs/vuetify/issues/9999
const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
    // `trace` is the component hierarchy trace
    if (msg === ignoreWarnMessage) {
        msg = null;
        vm = null;
        trace = null;
    }
}

Vue.prototype.$eventHub = new Vue();

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
      theme: {
        disable: false,
      }
    }),
    data: {
        activeRemove: 'cancelbtn',
        activeOwn: 'ownbtn'
      },
    methods: {

    }
});
