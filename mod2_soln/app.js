//Please Note that I have used the alternative method which sir mentioned 
//so my solution might not look the way sir did
//Thank You

(function () {
    'use strict';
    
    var app=angular.module("ShoppingListCheckOff",[]);
    
    app.controller("ToBuyController",["ShoppingListCheckOffService",function(ShoppingListCheckOffService){
        var buy=this;
        buy.items= ShoppingListCheckOffService.getBuyList();
        buy.checkList=function(itemIndex){
            ShoppingListCheckOffService.checkList(itemIndex);
        }
    }]);
    
    app.controller("AlreadyBoughtController",["ShoppingListCheckOffService",function(ShoppingListCheckOffService){
        var bought=this;
        bought.items=ShoppingListCheckOffService.getBoughtList();
    }]);

    app.service("ShoppingListCheckOffService",function(){
        var service=this;
        var buyList=[
            {name:"Milk", quantity:"12 cartons"},
            {name:"Maggi", quantity:"10 packets"}, 
            {name:"Chocos", quantity:"2 packets"},
            {name:"Parle-G", quantity:"1 Packet"},
            {name:"Glucon-D", quantity:"2 packets"},           
            {name:"Coffee Powder", quantity:"1 Packet"}, 
            {name:"Soap", quantity:"1 box"},            
            {name:"Shampoo", quantity:"2 bottle"}, 
            {name:"Conditioner", quantity:"1 bottle"},        
            {name:"Bathroom Slippers", quantity:"1 pair"}              
        ];
        
        var boughtList=[];

        service.checkList=function(itemIndex){
            var item= buyList[itemIndex];
            boughtList.push(item);
            buyList.splice(itemIndex,1);          
        };

        service.getBuyList=function() {
            return buyList;
        };

        service.getBoughtList=function(){
            return boughtList;
        };       
        
    });
    
    
})()