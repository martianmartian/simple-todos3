Items =new Mongo.Collection("items");

if(Meteor.isClient){
  // Template.here.helpers({
  //   items:[
  //     {item:"match the name 'item' is vip"},
  //     {item:"yup"},
  //     {item:"what if not"}
  //     ]    
  // });
  Template.here.helpers({
    items: function(){
      return Items.find({});
    }
  });
}



























