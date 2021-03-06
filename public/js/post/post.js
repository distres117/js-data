'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically 
				populated
		*/
		resolve: {
			users : function(User){
				return User.findAll();
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function(users, $scope, $stateParams, Post) {


	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	Post.find($stateParams.postId).then(function(post){
		$scope.post = post;	
	});
	


	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/
	$scope.editPost = function(){
		
	}

})