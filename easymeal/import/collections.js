import { Mongo } from 'meteor/mongo';

generalPromotionsList = new Mongo.Collection('generalPromotions'); 
personalizedSuggestions = new Mongo.Collection('personalizedSuggestions'); // linked to customersList, purchase page
itemsSoldList = new Mongo.Collection('itemsSold'); // linked to purchase page
customersList = new Mongo.Collection('customers'); // linked to sign-up & purchase page
currentCustomer = new Mongo.Collection('customer'); // for login/sign-out
FoodList = new Mongo.Collection('food');
OrderList = new Mongo.Collection('order');