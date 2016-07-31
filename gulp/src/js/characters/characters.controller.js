(function(){
    // ViewControllerSettings
    angular.module('sq5App')
    .controller(
        'charaListController',
        ['$scope','$localStorage',
        function($scope,$localStorage){

            console.log('charaListController');
            console.log($localStorage)
            console.log($scope.models.characters)
            $scope.characters = $scope.models.characters;

            console.log($scope)
            $scope.charaRegist = function(){
                $scope.charaEditView = true;
                console.log($scope.charaEditView)
                console.log('chara regist')
            }
        }]
    )
    .controller(
        'charaEditController',
        ['$scope',
        function($scope){
            console.log('charaEditController');
        }]
    )
    .controller(
        'charaRegistController',
        ['$scope',
        function($scope){
            console.log('charaRegistController');
        }]
    )
    .controller(
        'charaSkillController',
        ['$scope',
        function($scope){
            console.log('charaSkillController');
        }]
    );
}());
