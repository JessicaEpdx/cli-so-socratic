import Ember from 'ember';

var AnswerController = {
  needs: ['answer'],
  actions: {
    goBack: function() {
      var questionId = this.get('model.question.id');
      this.transitionToRoute('question', questionId);
    }
  }
};

export default Ember.Controller.extend(AnswerController);
