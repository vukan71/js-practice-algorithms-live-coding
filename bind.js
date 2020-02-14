// Implement Function.prototype.bind

/*

    var foo = function() {
        console.log(this.param)
    }
    var bar = foo.bind({param: 'Hello world!'})

    console.log( 'Result: ', bar());

 */


// Solution 1
    Function.prototype.bind = function(context){
        var _this = this;

        return function(){
            _this.call(context);
        }
    }

// Solution 2
    function bind (fn, context){

        return function(){
            fn.call(context);
        }
    }
