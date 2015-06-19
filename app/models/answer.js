import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  answerName: DS.attr('string'),
  answerTitle: DS.attr('string'),
  answerDescription: DS.attr('string'),
  answerImage: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
