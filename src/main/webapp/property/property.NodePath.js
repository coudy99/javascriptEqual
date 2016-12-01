/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function(p){
    "use strict";

    phoenix.json = phoenix.json || {};
    phoenix.json.property = phoenix.json.property || {};

    phoenix.json.property.NodePath = function (path) {
        this.path = path;
    }

    p = phoenix.json.property.NodePath.prototype;

    p.getPath = function(){
        var length = this.path.length;

        return this.path[length - 1];
    }

    p.setPath = function(path){
        this.path = path;
    }
    
}())