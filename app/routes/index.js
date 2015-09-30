import Ember from 'ember';

// export default Ember.Route.extend({
//   model() {
//
//     ret
//     posts: return this.store.findAll('post');
//     authors: return this.store.findAll('author');
//   },
// });


export default Ember.Route.extend({
model() {
  return Ember.RSVP.hash({
    posts: this.store.findAll('post'),
    authors: this.store.findAll('author')
  });
}
})
