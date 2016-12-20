'use strict';

angular.module('jtTimingsApp')
  .controller('TimingsModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
    this.ok = function() {
      $uibModalInstance.close(1);
    }, 

    this.cancel = function() {
      $uibModalInstance.close(-1);
    }
  }]);
