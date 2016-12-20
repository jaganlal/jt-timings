'use strict';

angular.module('jtTimingsApp')
  .directive('jtTimings', ['$uibModal', function($uibModal) {
    return {
      scope: {
        // classTimings:'=classTimings'
      },
      bindToController: {
        classTimings: '='
      },
      templateUrl: '../app/directives/timings/timings.html',
      controller: function () {
        this.toggleStatus = function(element, index, item) {
          if (item.status === 'Schedule') {
            item.status = "Scheduled";
            element.style.backgroundColor = '#3E7E00';
          }
          else if (item.status === 'Scheduled') {
            item.status = "Schedule";
            element.style.backgroundColor = 'darkslategrey';
          }
        },

        this.showPopover = function($event, index, item) {
          var element = $event.currentTarget;
          this.toggleStatus(element, index, item);
        }, 

        this.removeTime = function($event, index, item) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/app/views/timingsModalContent.html',
            controller: 'TimingsModalCtrl as tm',
            size: 'sm',
            resolve: {
            }
          });

          var me = this;
          modalInstance.result.then(function (selectedItem) {
            switch(selectedItem) {
              case 1: //clicked yes
              me.classTimings.splice(index, 1);
              break;

              case -1: //clicked no
              break;
            }
          }, function () {
            console.log('Modal dismissed');
          });
        }
      },
      controllerAs: 'td',
      link: function (scope, element, attrs, ngModel) {
      }
    };
  }])
  .name;