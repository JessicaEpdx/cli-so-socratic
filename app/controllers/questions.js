import Ember from 'ember';

var QuestionsController = {


  isQuestioning: false,
  isViewing: false,
  actions: {
    addQuestion: function(){
      this.set('isQuestioning', true);
      this.set('isViewing', false);
    },
    hideForm: function(){
      this.set('isQuestioning', false);
    },
    seeQuestions: function(){
      this.set('isViewing', true);
      this.set('isQuestioning', false);
    },
    hideQuestions: function(){
      this.set('isViewing', false);
    },
    saveQuestion: function(){
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image')
      });
      newQuestion.save();
      this.set('isQuestioning', false);
      this.set('name', "")
      this.set('description', "")
      this.set('image', "")
      this.set('title', "")


      this.set('isViewing', true);


    }
  }
};

export default Ember.Controller.extend(QuestionsController);
