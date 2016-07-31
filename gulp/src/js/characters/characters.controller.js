(function(){
    // ViewControllerSettings
    angular.module('sq5App')
    .controller(
        'charactorController',
        ['$scope',
        function($scope){
            console.log('charactorController');
            $scope.viewList = true;
            $scope.viewEdit = false;
            $scope.viewSkill = false;
            $scope.registMode = false;

            $scope.races = CONST.race;
            $scope.jobs = CONST.job;
            $scope.nicknames = CONST.nickName;
            $scope.skills = CONST.skills;


            $scope.charaRegist = function(){
                console.log($scope.viewList)
                $scope.viewEdit = true;
                console.log('chara regist')
            }

        }]
    )
    .controller(
        'charaListController',
        ['$scope','$localStorage',
        function($scope,$localStorage){

            console.log('charaListController');
            console.log($localStorage)
            console.log($scope.models.characters)
            $scope.characters = $scope.models.characters;

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
