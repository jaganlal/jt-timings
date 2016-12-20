'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPlaygroundApp
 */
angular.module('jtTimingsApp')
  .controller('TimingsCtrl', function () {
    this.timeAdded = null;
    this.classTimings = [];
    
    var now = moment();
    this.timeAdded = moment(now);

    this.constructClassTimingsToDisplay = function(classtime, status) {
      var timeselected = moment(classtime);
      timeselected.minutes(0);
      var hr = timeselected.format('h:mm A');
      var hrplus1 = timeselected.add(1, 'h').format('h:mm A');

      var ct = {
        timing: hr + " - " + hrplus1,
        status: status || 'Schedule'
      }

      this.timeAdded = moment(timeselected);

      return ct;
    }

    this.add = function() {
      var ct = this.constructClassTimingsToDisplay(this.timeAdded);

      this.classTimings.push(ct);
    }
  });
