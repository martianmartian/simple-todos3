if(Meteor.isClient){
  Session.setDefault("counter",4);

  Template.here.helpers({
    counter:function(){
      return Session.get("counter");
    }
  });
  Template.here.events({
    "click #what": function(){
      var temp = Session.get("counter");
      Session.set("counter", temp+1);
    }
  });
}