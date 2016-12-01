/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function (p){
    "use strict";

    phoenix.json = phoenix.json || {};

    phoenix.json.Node = function(){
        this.Class = phoenix.json.NodeType.Unknown;

        this.NodePath = new phoenix.json.property.NodePath(this.Class);

        this.id = 1;

    }

    p = phoenix.json.Node.prototype;

    p.base = function(){
        return new Node();
    }

    p.getClass = function(){
        return this.Class;
    }

    p.getNodePath = function(){
        return this.NodePath;
    }

    p.getId = function(){
        return this.id;
    }

    //UTILS//

    phoenix.json.inherit = function (child, base) {
        //noinspection FunctionNamingConventionJS
        /**
         * Temp
         * @constructor
         */
        function Temp() {
            this.constructor = child;
        }

        Temp.prototype = base.prototype;
        child.prototype = new Temp();
    };

}())