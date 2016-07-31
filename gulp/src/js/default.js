(function(){

    //Angular Routings
    angular.module('sq5App',['ngRoute','ngAnimate','ngStorage']).config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'/view/tops.html',
            controller:'introController'
        }).when('/characters',{
            templateUrl:'/view/characters.html',
            controller:'charactersController'
        }).when('/parties',{
            templateUrl:'/view/parties.html',
            controller:'partiesController'
        }).when('/skill_list',{
            templateUrl:'/view/skill_list.html',
            controller:'skillListController'
        }).when('/options',{
            templateUrl:'/view/options.html',
            controller:'optionsController'
        }).otherwise({
            redirectTo:'/'
        })
    });


    // ViewControllerSettings
    angular.module('sq5App')
    .controller(
        'introController',
        ['$scope','$routeParams',
        function($scope,$routeParams){
            console.log('introController');
        }]
    )
    .controller(
        'charactersController',
        ['$scope','$routeParams','$localStorage',
        function($scope,$routeParams){
            console.log('charactersController');
            console.log($scope.models);
        }]
    )
    .controller(
        'partiesController',
        ['$scope','$routeParams',
        function($scope,$routeParams){
            console.log('partiesController');
        }]
    )
    .controller(
        'skillListController',
        ['$scope','$routeParams',
        function($scope,$routeParams){
            console.log('skillListController');

        }]
    )
    .controller(
        'optionsController',
        ['$scope','$routeParams',
        function($scope,$routeParams){
            console.log('optionsController');

        }]
    )

    angular.module('sq5App')
    .controller(
        'commonController',
        ['$scope','$localStorage',function($scope,$localStorage){
            //共通Model用Scopeの作成
            $scope.models = {};

            // saveSlotの作成・読み込み
            console.log(!$localStorage.saves)
            if(!$localStorage.saves){
                $scope.models.saves = {
                    current:1,
                    save:[{id:1}]
                }
                $localStorage.saves = $scope.models.saves;
            }else{
                $scope.models.saves = $localStorage.saves.current;
            }
            console.log($scope.models.saves)

            // saveSlotに紐づいたデータの読み込み
            if(!$localStorage.data || !$localStorage.data[$scope.models.saves.current]){
                $scope.models.characters = [];
                $scope.models.parties = [];

                $localStorage.data = [];
                $localStorage.data[$scope.models.saves.current] = {
                    characters:[],
                    parties:[]
                };
            }else{
                $scope.models.characters = $localStorage.data[$scope.models.saves.current].characters;
                $scope.models.parties = $localStorage.data[$scope.models.saves.current].parties;
            }

            // saveSlotに紐づいたパーティの読み込み
            if(!$localStorage.data[$scope.models.saves.current]){
                $scope.models.parties = []
                $localStorage.data[$scope.models.saves.current] = $scope.models.parties;
            }else{
                $scope.models.saves = $localStorage.data[$scope.models.saves.current].characters;
            }

            // 他設定の読み込み
        }]
    );
}());
