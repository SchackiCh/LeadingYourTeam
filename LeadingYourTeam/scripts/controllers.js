﻿(function () {
    'use strict';
    angular.module("mainLeader.controllers")
        .controller('announcement', ['$scope', function ($scope) {
            var refresh = function () {
                $scope.newAnnouncementModel = storage.getAll();
            }

            $scope.addAnnouncement = function () {
                var text = $scope.newAnnouncementModel;

                if (!text) {
                    return;
                };
            }
        }]);
})();