import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
