/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function (args) {
        var n = 19;
        var maxDepth = (Main.minDepth + 2 > n) ? Main.minDepth + 2 : n;
        var stretchDepth = maxDepth + 1;
        var check = (Main.TreeNode.bottomUpTree(stretchDepth)).itemCheck();
        console.info("stretch tree of depth " + stretchDepth + "\t check: " + check);
        var longLivedTree = Main.TreeNode.bottomUpTree(maxDepth);
        for (var depth = Main.minDepth; depth <= maxDepth; depth += 2) {
            var iterations = 1 << (maxDepth - depth + Main.minDepth);
            check = 0;
            for (var i = 1; i <= iterations; i++) {
                check += (Main.TreeNode.bottomUpTree(depth)).itemCheck();
            }
            ;
            console.info(iterations + "\t trees of depth " + depth + "\t check: " + check);
        }
        ;
        console.info("long lived tree of depth " + maxDepth + "\t check: " + longLivedTree.itemCheck());
    };
    Main.minDepth = 4;
    return Main;
}());
Main["__class"] = "Main";
(function (Main) {
    var TreeNode = /** @class */ (function () {
        function TreeNode(left, right) {
            this.left = null;
            this.right = null;
            this.left = left;
            this.right = right;
        }
        TreeNode.bottomUpTree = function (depth) {
            if (depth > 0) {
                return new Main.TreeNode(TreeNode.bottomUpTree(depth - 1), TreeNode.bottomUpTree(depth - 1));
            }
            else {
                return new Main.TreeNode(null, null);
            }
        };
        TreeNode.prototype.itemCheck = function () {
            if (this.left == null)
                return 1;
            else
                return 1 + this.left.itemCheck() + this.right.itemCheck();
        };
        return TreeNode;
    }());
    Main.TreeNode = TreeNode;
    TreeNode["__class"] = "Main.TreeNode";
})(Main || (Main = {}));
Main.main(null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0lBQUE7SUFvQkEsQ0FBQztJQWpCaUIsU0FBSSxHQUFsQixVQUFtQixJQUFlO1FBQzlCLElBQUksQ0FBQyxHQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFlBQVksR0FBWSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1RSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxhQUFhLEdBQW1CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pFLEdBQUcsQ0FBQSxDQUFDLElBQUksS0FBSyxHQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDcEUsSUFBSSxVQUFVLEdBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEUsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFZLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0QsQ0FBQztZQUFBLENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFBQSxDQUFDO1FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxRQUFRLEdBQUcsWUFBWSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFsQk0sYUFBUSxHQUFZLENBQUMsQ0FBQztJQW1CakMsV0FBQztDQUFBLEFBcEJELElBb0JDO0FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUd6QixXQUFVLElBQUk7SUFFVjtRQWFJLGtCQUFZLElBQW9CLEVBQUUsS0FBcUI7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztRQWJNLHFCQUFZLEdBQW5CLFVBQW9CLEtBQWM7WUFDOUIsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQVNELDRCQUFTLEdBQVQ7WUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSTtnQkFBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRyxDQUFDO1FBQ0wsZUFBQztJQUFELENBQUMsQUF2QkQsSUF1QkM7SUF2QlksYUFBUSxXQXVCcEIsQ0FBQTtJQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxlQUFlLENBQUM7QUFFMUMsQ0FBQyxFQTVCUyxJQUFJLEtBQUosSUFBSSxRQTRCYjtBQUtELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMifQ==