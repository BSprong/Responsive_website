'use strict';
angular.module('gallery', ['ngAnimate', 'ngTouch'])
.controller('MainCtrl', function ($scope) {

$scope.photos = [
{src: '../images/design opdracht week 5 sneeuw1.jpg', desc: 'sneeuw afbeelding'},
{src: '../images/design opdracht week 5 sneeuw6.jpg ', desc: 'sneeuw afbeelding'},
{src: '../images/design opdracht week 5 sneeuw7.jpg', desc: 'sneeuw afbeelding'},
{src: '../images/design opdracht week 5 sneeuw2.jpg', desc: 'sneeuw afbeelding'},
{src: '../images/design opdracht week 5 sneeuw3.jpg', desc: 'sneeuw afbeelding'}
];
// initial image index
$scope._Index = 0;
// if a current image is the same as requested image
$scope.isActive = function (index) {
return $scope._Index === index;
};
// show prev image
$scope.showPrev = function () {
$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
};
// show next image
$scope.showNext = function () {
$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
};
// show a certain image
$scope.showPhoto = function (index) {
$scope._Index = index;
};
});
