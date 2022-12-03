import Vue from 'vue';

export default {
    name: '#my-container',
  
    data: {
      isActive: false
    },
  
    methods: {
      myFilter: function() {
        this.isActive = !this.isActive;
      }
    }
  }