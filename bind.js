// Implement Function.prototype.bind

/*

    var foo = function() {
        console.log(this.param)
    }
    var bar = foo.bind({param: 'Hello world!'})

    console.log( 'Result: ', bar());

 */

Function.prototype.bind = function(context){
    var _this = this;

    return function(){
        _this.call(context);
    }
}

