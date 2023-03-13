/**
 * vuejs 示例
 */
import Vue from "vue"
import axios from "axios"
new Vue({
    el: '#app',
    data: function() {
      return {
          message: 'hello vue'
      }
    }
})
axios({
  url: process.env.BASE_URL + '/nyapp/policy/policy/getHomePageStatistics',
  method: 'get'
}).then((res) => {
  console.log('axios', res)
})

/**
 * jquery 示例
 */
import $ from "jquery"
$("#app").append('<h1>hello jquery</h1>')

$.ajax({
  type: "GET",
  url: process.env.BASE_URL + '/nyapp/policy/policy/getHomePageStatistics',
  dataType: "json",
  success: (res) => {
    console.log('ajax', res)
  }
})