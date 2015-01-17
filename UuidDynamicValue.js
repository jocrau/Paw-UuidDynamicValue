var UuidDynamicValue = function() {
    this.evaluate = function(context) {
		// See answer by http://stackoverflow.com/users/508537/briguy37
		// for http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  	  var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    }
}

UuidDynamicValue.identifier = "com.functional-thinking.UuidDynamicValue";

UuidDynamicValue.title = "UUID Dynamic Value";

registerDynamicValueClass(UuidDynamicValue);
