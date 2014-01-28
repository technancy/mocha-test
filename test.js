/*var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});*/

var assert = require('assert');

test('When I scan nothing I should get 0', function(){
	var total = calculatePrice();
	assert.equal(total, 0);
});

var calculatePrice = function (item){
   total = 0;
   var priceList = {A:50, B:30, C:60}

   if( item  === "apple"){
   	return 50;
   }
   else if( item  === "berry"){
   	return 30;
   }
   else if(item === "coconut"){
    return 60;
   }
   else
   {
   	return total;
   }
   
};

test('When I scan 1 apple I should get apple price', function(){
	var product = "apple";
	var total = calculatePrice(product);
	assert.equal(total,50);
});


test('When I scan 1 berry I should get berry price', function(){
	var product = "berry";
	var total = calculatePrice(product);
	assert.equal(total,30);
});

test('When I scan 1 coconut I shoule get coconut price', function(){
	var product = "coconut";
	var total = calculatePrice(product);
  assert.equal(total,60);
});



