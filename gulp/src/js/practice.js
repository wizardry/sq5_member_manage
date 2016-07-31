(function(){
    var test = 1;
    function HelloWorldController($scope,ModelSearvice){
        console.log($scope);
        $scope.message = ModelSearvice;

        $scope.$watch(function(){
            return ModelSearvice
        },function(){
            $scope.message = ModelSearvice;
        });
    }
    function testlistController($scope, $localStorage){
        var model = {'list':[
            {name:'name1',text:'hogehoget'},
            {name:'name2',text:'<span>a</span>'},
            {name:'name3',text:'alert(0)'}
        ]};
        $scope.items = model.list;
    }
    function testEventController($scope, $localStorage){
        $scope.submitHundle = function(){
            console.log(0);
            // model.push({name:'name'+(model.length+1),text:$scope.newlist});
        };
        $scope.clickHundle = function(){
            test++;
            console.log(test)
        }
    }
    var app = angular.module('app',['ngStorage']);

    app.factory('ModelSearvice',function(){
        console.log('ModelSearvice');
        return test+test+test;
    });

    app.controller('HelloWorldController',HelloWorldController)
    .controller('testlistController',testlistController)
    .controller('testEventController',testEventController);

    ///-------------------------------------------------------

    function tutorialController($scope){

        $scope.changeHundle = function(){
            console.log($scope.name)
        };
        $scope.today = new Date;
        $scope.users = [
            { name: 'name',index:null},
            { name: 'name2',index:true},
            { name: 'name3',index:1},
            { name: 'name4',index:'1'},
            { name: 'name5',index:undefined}
        ]
    };
    var globalVar = 0
    function fouthTutorial1($scope){
        $scope.globalVarChange = function(){
            globalVar = $scope.t4Name
            console.log($scope.t4Name)
            console.log(globalVar)
        }
    }
    function fouthTutorial2($scope){
        $scope.t4Name2 = $scope.t4Name
    }
    app
    .controller('tutorialController',tutorialController)
    .controller('fouthTutorial1',fouthTutorial1)
    .controller('fouthTutorial2',fouthTutorial2);

}());
