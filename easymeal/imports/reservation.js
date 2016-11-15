import { Mongo } from 'meteor/mongo';
 
Reservation = new Mongo.Collection('reservation');

/*Meteor.methods({
  'reservation.insert'(name, type, date, time, pax, store) {
    Reservation.insert({
      custName: name,
      resType: type,
      resDate: date,
      resTime: time,
      totPax: pax,
      resStore: store,
    });
  },

  'reservation.removeall'() {
  	while(reservation.find().count() != 0) {
		var id = reservation.find().fetch()[0]._id;
		Reservation.remove(id);
    }
  },
});*/