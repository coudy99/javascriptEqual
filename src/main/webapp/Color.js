/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function (p) {
    "use strict";

    phoenix.json = phoenix.json || {};

    phoenix.json.Color = function(local){

        this.Class = phoenix.json.NodeType.Color;

        if(local) {
            this.LocalPath = new phoenix.json.property.NodePath(this.Class);
        }
        else{
            this.NodePath = new phoenix.json.property.NodePath(this.Class);
        }

        this.RGB = "0, 0, 0, 1";
        this.Density = 100;

    }

    phoenix.json.inherit(phoenix.json.Color, phoenix.json.Node);

    p = phoenix.json.Color.prototype;

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

}());

