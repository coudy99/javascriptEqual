/**
 * Created by j.parenica on 1. 12. 2016.
 */
(function(p){
    "use strict";

    Node = function(){
        this.Class = NodeType.Unknown;

        this.NodePath = new property.NodePath(this.Class);

        this.id = 1;

    }

    p = Node.prototype;

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

    inherit = function (child, base) {
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

})