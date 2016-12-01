/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function(p) {
    "use strict";

    Color = function(local){

        this.Class = NodeType.Color;

        if(local) {
            this.LocalPath = property.NodePath(this.Class);
        }
        else{
            this.NodePath = property.NodePath(this.Class);
        }

        this.RGB = "0, 0, 0, 1";
        this.Density = 100;

    }

    inherit(Color, Node);

    p = Color.prototype;

    p.getRGB = function(){
        return this.RGB;
    }

    p.getDensity = function(){
        return this.Density;
    }

    p.getNodePath = function(){
        return this.NodePath;
    }

    p.getLocalPath = function(){
        return this.LocalPath;
    }

})

