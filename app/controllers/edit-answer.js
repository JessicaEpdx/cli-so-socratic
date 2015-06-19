import Ember from 'ember';

var AnswerController = {
  needs: ['answer'],
  actions: {
    delete: function() {
      if(confirm('Are you sure?')) {
        var answer = this.get('model').destroyRecord();
        this.transitionToRoute('answers');
      };
    },
    goBack: function() {
      var questionId = this.get('model.question.id');
      this.transitionToRoute('question', questionId);
    }
  }
};

export default Ember.Controller.extend(AnswerController);
