(function(){
    
    var app = angular.module('addition', []);
    app.controller("EditController", function(){
        //this.product = info;
        
        
        this.onSubmit = function(){
            if (this.log == "admin" && this.pass == "admin"){
                 console.log("wow");
            };
               
        };
        
    });
    
})();