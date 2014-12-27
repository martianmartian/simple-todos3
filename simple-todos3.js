Items =new Mongo.Collection("items");

if(Meteor.isClient){

  Template.here.helpers({
    items: function(){
      return Items.find({});
    }
  });

  Template.body.events({
    "submit #todo":function(e){
      var item = e.target.item.value;
      Items.insert({item:item});
      e.target.item.value="";
      return false;
    }
  })
}



























