/* /routes/usersRoute.js 
*/
App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});