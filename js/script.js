var viewModel = {
    something: ko.observable("something")
};

var isBound = function() {
   alert(!!ko.dataFor(document.getElementById("one")));   
};
    
var bind = function() {
   ko.applyBindings(viewModel, document.getElementById("one"));    
};