import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'});
  this.resource('edit-questions');
  this.resource('edit-question', {path: 'edit-questions/:question_id'});
  this.resource('answer', {path: 'answers/:answer_id'});;
  this.resource('answers');
  this.resource('edit-answer', {path: 'edit-answers/:answer_id'});;

});

export default Router;
