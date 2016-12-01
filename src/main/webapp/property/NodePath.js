/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function(p){
    
    "use strict";
    
    property.NodePath = function (path) {
        this.path = path;
    }

    p = property.NodePath.prototype;

    p.getName = function(){
        var length = this.path.length;

        return this.path[length - 1];
    }
    
})