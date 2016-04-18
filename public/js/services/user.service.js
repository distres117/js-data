'use  strict';

app.factory('User', function(DS) {
	
  var User = DS.defineResource({
    basePath: '/api', 
    idAttribute: '_id',
    name: 'users'
  });
  
  return User;

}).run(function(User){})

