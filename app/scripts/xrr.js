angular.module("xrr2App",[])
  .controller("con",function($scope,$http,getdata){
	getdata.ajax('http://www.somenote.cn:1510/test','get',function(data){
		$scope.data=data
	})
	getdata.ajax('http://www.somenote.cn:1510/test2','get',function(data1){
		$scope.data1=data1
	})
	getdata.ajax('http://www.somenote.cn:1510/aut','get',function(data2){
		$scope.data2=data2
	})
	
	

})
.directive("auto",function(){
	return{
		restrict:'AEMC', 
		template:'<div class="xrr"><li ng-repeat="s in qq">{{s.title | create}}<><li ng-repeat="y in ee">{{y.title | create}}</li></div><div class="center"><img  ng-repeat="x in ww" ng-src="{{x.img}}" /></div>',
		scope:true,
		transclude: true,
		scope:{qq:"=data",ww:"=data2",ee:"=data1"},
		link:function(s,e,attr){
			s.a=attr['b']
		}
		
	}
})
.filter("create",function(){
	return function(e) {
		if(e.length>5){
			return e.substring(0,5)+'....'
		}else{
			return e
		}
	}
})
.service('getdata',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		}
	}
})
