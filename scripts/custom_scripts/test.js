(function() {

    console.log('Message from custom script');


    App.controller('hello_controller', ['$scope', '$location', function() {
        console.log(22);
    }]);

    return {
        ss:44,
        hello: function() {}
    }
})();