/* /controllers/userController.js 
*/
App.UserController = Ember.ObjectController.extend({
  
  deleteMode: false,	

  actions: {
    edit: function(){
      this.transitionToRoute('user.edit');
    },
    
    delete: function(){
      // our delete method now only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      // this tells Ember-Data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      // and then go to the users route
      this.transitionToRoute('users');
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    // the edit method remains the same
    edit: function(){ 
      this.transitionToRoute('user.edit');
    }
  }
});