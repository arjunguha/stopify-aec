/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
/**
 * Initializes a sequence of uniformly distributed quasi random numbers
 * with a given seed on a given half-open interval [left,right).
 *
 * @param <B>seed</B> (int)<BR>
 *
 * The seed of the random number generator.  Two sequences with the same
 * seed will be identical.
 *
 * @param <B>left</B> (double)<BR>
 *
 * The left endpoint of the half-open interval [left,right).
 *
 * @param <B>right</B> (double)<BR>
 *
 * The right endpoint of the half-open interval [left,right).
 * @param {number} seed
 * @param {number} left
 * @param {number} right
 * @class
 */
var Random = /** @class */ (function () {
    function Random(seed, left, right) {
        var _this = this;
        this.seed = 0;
        /*private*/ this.i = 4;
        /*private*/ this.j = 16;
        /*private*/ this.mdig = 32;
        /*private*/ this.one = 1;
        /*private*/ this.m1 = (this.one << this.mdig - 2) + ((this.one << this.mdig - 2) - this.one);
        /*private*/ this.m2 = this.one << (this.mdig / 2 | 0);
        /*private*/ this.dm1 = 1.0 / this.m1;
        /*private*/ this.haveRange = false;
        /*private*/ this.left = 0.0;
        /*private*/ this.right = 1.0;
        /*private*/ this.width = 1.0;
        if (((typeof seed === 'number') || seed === null) && ((typeof left === 'number') || left === null) && ((typeof right === 'number') || right === null)) {
            var __args = Array.prototype.slice.call(arguments);
            this.m = null;
            this.seed = 0;
            this.i = 4;
            this.j = 16;
            this.mdig = 32;
            this.one = 1;
            this.m1 = (this.one << this.mdig - 2) + ((this.one << this.mdig - 2) - this.one);
            this.m2 = this.one << (this.mdig / 2 | 0);
            this.dm1 = 1.0 / this.m1;
            this.haveRange = false;
            this.left = 0.0;
            this.right = 1.0;
            this.width = 1.0;
            this.m = null;
            (function () {
                _this.initialize(seed);
                _this.left = left;
                _this.right = right;
                _this.width = right - left;
                _this.haveRange = true;
            })();
        }
        else if (((typeof seed === 'number') || seed === null) && ((typeof left === 'number') || left === null) && right === undefined) {
            var __args = Array.prototype.slice.call(arguments);
            var left_1 = __args[0];
            var right_1 = __args[1];
            this.m = null;
            this.seed = 0;
            this.i = 4;
            this.j = 16;
            this.mdig = 32;
            this.one = 1;
            this.m1 = (this.one << this.mdig - 2) + ((this.one << this.mdig - 2) - this.one);
            this.m2 = this.one << (this.mdig / 2 | 0);
            this.dm1 = 1.0 / this.m1;
            this.haveRange = false;
            this.left = 0.0;
            this.right = 1.0;
            this.width = 1.0;
            this.m = null;
            (function () {
                _this.initialize((Date.now() | 0));
                _this.left = left_1;
                _this.right = right_1;
                _this.width = right_1 - left_1;
                _this.haveRange = true;
            })();
        }
        else if (((typeof seed === 'number') || seed === null) && left === undefined && right === undefined) {
            var __args = Array.prototype.slice.call(arguments);
            this.m = null;
            this.seed = 0;
            this.i = 4;
            this.j = 16;
            this.mdig = 32;
            this.one = 1;
            this.m1 = (this.one << this.mdig - 2) + ((this.one << this.mdig - 2) - this.one);
            this.m2 = this.one << (this.mdig / 2 | 0);
            this.dm1 = 1.0 / this.m1;
            this.haveRange = false;
            this.left = 0.0;
            this.right = 1.0;
            this.width = 1.0;
            this.m = null;
            (function () {
                _this.initialize(seed);
            })();
        }
        else if (seed === undefined && left === undefined && right === undefined) {
            var __args = Array.prototype.slice.call(arguments);
            this.m = null;
            this.seed = 0;
            this.i = 4;
            this.j = 16;
            this.mdig = 32;
            this.one = 1;
            this.m1 = (this.one << this.mdig - 2) + ((this.one << this.mdig - 2) - this.one);
            this.m2 = this.one << (this.mdig / 2 | 0);
            this.dm1 = 1.0 / this.m1;
            this.haveRange = false;
            this.left = 0.0;
            this.right = 1.0;
            this.width = 1.0;
            this.m = null;
            (function () {
                _this.initialize((Date.now() | 0));
            })();
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Returns the next random number in the sequence.
     * @return {number}
     */
    Random.prototype.nextDouble = function () {
        var k;
        var nextValue;
        k = this.m[this.i] - this.m[this.j];
        if (k < 0)
            k += this.m1;
        this.m[this.j] = k;
        if (this.i === 0)
            this.i = 16;
        else
            this.i--;
        if (this.j === 0)
            this.j = 16;
        else
            this.j--;
        if (this.haveRange)
            return this.left + this.dm1 * k * this.width;
        else
            return this.dm1 * k;
    };
    /**
     * Returns the next N random numbers in the sequence, as
     * a vector.
     * @param {Array} x
     */
    Random.prototype.nextDoubles = function (x) {
        var N = x.length;
        var remainder = N & 3;
        if (this.haveRange) {
            for (var count = 0; count < N; count++) {
                var k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count] = this.left + this.dm1 * k * this.width;
            }
            ;
        }
        else {
            for (var count = 0; count < remainder; count++) {
                var k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count] = this.dm1 * k;
            }
            ;
            for (var count = remainder; count < N; count += 4) {
                var k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count] = this.dm1 * k;
                k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count + 1] = this.dm1 * k;
                k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count + 2] = this.dm1 * k;
                k = this.m[this.i] - this.m[this.j];
                if (this.i === 0)
                    this.i = 16;
                else
                    this.i--;
                if (k < 0)
                    k += this.m1;
                this.m[this.j] = k;
                if (this.j === 0)
                    this.j = 16;
                else
                    this.j--;
                x[count + 3] = this.dm1 * k;
            }
            ;
        }
    };
    /*private*/ Random.prototype.initialize = function (seed) {
        var jseed;
        var k0;
        var k1;
        var j0;
        var j1;
        var iloop;
        this.seed = seed;
        this.m = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(17);
        jseed = Math.min(Math.abs(seed), this.m1);
        if (jseed % 2 === 0)
            --jseed;
        k0 = 9069 % this.m2;
        k1 = (9069 / this.m2 | 0);
        j0 = jseed % this.m2;
        j1 = (jseed / this.m2 | 0);
        for (iloop = 0; iloop < 17; ++iloop) {
            jseed = j0 * k0;
            j1 = ((jseed / this.m2 | 0) + j0 * k1 + j1 * k0) % ((this.m2 / 2 | 0));
            j0 = jseed % this.m2;
            this.m[iloop] = j0 + this.m2 * j1;
        }
        ;
        this.i = 4;
        this.j = 16;
    };
    return Random;
}());
Random["__class"] = "Random";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvUmFuZG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQUNuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSDtJQTJCSSxnQkFBbUIsSUFBVyxFQUFFLElBQVcsRUFBRSxLQUFZO1FBQXpELGlCQXdGQztRQWxIRCxTQUFJLEdBQVksQ0FBQyxDQUFDO1FBSWxCLFdBQVcsQ0FBQyxNQUFDLEdBQVksQ0FBQyxDQUFDO1FBRTNCLFdBQVcsQ0FBQyxNQUFDLEdBQVksRUFBRSxDQUFDO1FBRTVCLFdBQVcsQ0FBQyxTQUFJLEdBQVksRUFBRSxDQUFDO1FBRS9CLFdBQVcsQ0FBQyxRQUFHLEdBQVksQ0FBQyxDQUFDO1FBRTdCLFdBQVcsQ0FBQyxPQUFFLEdBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakcsV0FBVyxDQUFDLE9BQUUsR0FBWSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEQsV0FBVyxDQUFDLFFBQUcsR0FBWSxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUVqRCxXQUFXLENBQUMsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUV4QyxXQUFXLENBQUMsU0FBSSxHQUFZLEdBQUcsQ0FBQztRQUVoQyxXQUFXLENBQUMsVUFBSyxHQUFZLEdBQUcsQ0FBQztRQUVqQyxXQUFXLENBQUMsVUFBSyxHQUFZLEdBQUcsQ0FBQztRQUc3QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLElB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QUFDLENBQUM7WUFDbkcsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNkLENBQUM7Z0JBQ0csS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1QsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNkLENBQUM7Z0JBQ0cs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Q0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUFDLElBQUk7b0JBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUFDLElBQUk7b0JBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM1QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUFDLElBQUk7b0JBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLEtB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/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
/**
 * Initalize LU factorization from matrix.
 *
 * @param {Array} A (in) the matrix to associate with this
 * factorization.
 * @class
 */
var Main = /** @class */ (function () {
    function Main(A) {
        this.LU_ = null;
        this.pivot_ = null;
        var M = A.length;
        var N = A[0].length;
        this.LU_ = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([M, N]);
        Main.insert_copy(this.LU_, A);
        this.pivot_ = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(M);
        Main.factor(this.LU_, this.pivot_);
    }
    /*private*/ Main.CopyMatrix = function (B, A) {
        var M = A.length;
        var N = A[0].length;
        var remainder = N & 3;
        for (var i = 0; i < M; i++) {
            var Bi = B[i];
            var Ai = A[i];
            for (var j = 0; j < remainder; j++)
                Bi[j] = Ai[j];
            for (var j = remainder; j < N; j += 4) {
                Bi[j] = Ai[j];
                Bi[j + 1] = Ai[j + 1];
                Bi[j + 2] = Ai[j + 2];
                Bi[j + 3] = Ai[j + 3];
            }
            ;
        }
        ;
    };
    /*private*/ Main.RandomMatrix = function (M, N, R) {
        var A = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([M, N]);
        for (var i = 0; i < N; i++)
            for (var j = 0; j < N; j++)
                A[i][j] = R.nextDouble();
        ;
        return A;
    };
    Main.main = function (args) {
        var R = new Random(113);
        var N = 10;
        var A = Main.RandomMatrix(N, N, R);
        var lu = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([N, N]);
        var pivot = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(N);
        var cycles = 1;
        for (var j = 0; j < 18; j++) {
            for (var i = 0; i < cycles; i++) {
                Main.CopyMatrix(lu, A);
                Main.factor(lu, pivot);
            }
            ;
            cycles *= 2;
        }
        ;
    };
    /**
     * Returns a <em>copy</em> of the compact LU factorization.
     * (useful mainly for debugging.)
     *
     * @return {number} the compact LU factorization.  The U factor
     * is stored in the upper triangular portion, and the L
     * factor is stored in the lower triangular portion.
     * The main diagonal of L consists (by convention) of
     * ones, and is not explicitly stored.
     * @param {number} N
     */
    Main.num_flops = function (N) {
        var Nd = N;
        return (2.0 * Nd * Nd * Nd / 3.0);
    };
    Main.new_copy$double_A = function (x) {
        var N = x.length;
        var T = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(N);
        for (var i = 0; i < N; i++)
            T[i] = x[i];
        return T;
    };
    Main.new_copy = function (x) {
        if (((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'number'))) || x === null)) {
            return Main.new_copy$double_A(x);
        }
        else if (((x != null && x instanceof Array && (x.length == 0 || x[0] == null || x[0] instanceof Array)) || x === null)) {
            return Main.new_copy$double_A_A(x);
        }
        else if (((x != null && x instanceof Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'number'))) || x === null)) {
            return Main.new_copy$int_A(x);
        }
        else
            throw new Error('invalid overload');
    };
    Main.new_copy$double_A_A = function (A) {
        var M = A.length;
        var N = A[0].length;
        var T = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([M, N]);
        for (var i = 0; i < M; i++) {
            var Ti = T[i];
            var Ai = A[i];
            for (var j = 0; j < N; j++)
                Ti[j] = Ai[j];
        }
        ;
        return T;
    };
    Main.new_copy$int_A = function (x) {
        var N = x.length;
        var T = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(N);
        for (var i = 0; i < N; i++)
            T[i] = x[i];
        return T;
    };
    Main.insert_copy = function (B, A) {
        var M = A.length;
        var N = A[0].length;
        var remainder = N & 3;
        for (var i = 0; i < M; i++) {
            var Bi = B[i];
            var Ai = A[i];
            for (var j = 0; j < remainder; j++)
                Bi[j] = Ai[j];
            for (var j = remainder; j < N; j += 4) {
                Bi[j] = Ai[j];
                Bi[j + 1] = Ai[j + 1];
                Bi[j + 2] = Ai[j + 2];
                Bi[j + 3] = Ai[j + 3];
            }
            ;
        }
        ;
    };
    Main.prototype.getLU = function () {
        return Main.new_copy$double_A_A(this.LU_);
    };
    /**
     * Returns a <em>copy</em> of the pivot vector.
     *
     * @return {Array} the pivot vector used in obtaining the
     * LU factorzation.  Subsequent solutions must
     * permute the right-hand side by this vector.
     */
    Main.prototype.getPivot = function () {
        return Main.new_copy$int_A(this.pivot_);
    };
    /**
     * Solve a linear system, with pre-computed factorization.
     *
     * @param {Array} b (in) the right-hand side.
     * @return {Array} solution vector.
     */
    Main.prototype.solve = function (b) {
        var x = Main.new_copy$double_A(b);
        Main.solve(this.LU_, this.pivot_, x);
        return x;
    };
    /**
     * LU factorization (in place).
     *
     * @param {Array} A (in/out) On input, the matrix to be factored.
     * On output, the compact LU factorization.
     *
     * @param pivit (out) The pivot vector records the
     * reordering of the rows of A during factorization.
     *
     * @return {number} 0, if OK, nozero value, othewise.
     * @param {Array} pivot
     */
    Main.factor = function (A, pivot) {
        var N = A.length;
        var M = A[0].length;
        var minMN = Math.min(M, N);
        for (var j = 0; j < minMN; j++) {
            var jp = j;
            var t = Math.abs(A[j][j]);
            for (var i = j + 1; i < M; i++) {
                var ab = Math.abs(A[i][j]);
                if (ab > t) {
                    jp = i;
                    t = ab;
                }
            }
            ;
            pivot[j] = jp;
            if (A[jp][j] === 0)
                return 1;
            if (jp !== j) {
                var tA = A[j];
                A[j] = A[jp];
                A[jp] = tA;
            }
            if (j < M - 1) {
                var recp = 1.0 / A[j][j];
                for (var k = j + 1; k < M; k++)
                    A[k][j] *= recp;
            }
            if (j < minMN - 1) {
                for (var ii = j + 1; ii < M; ii++) {
                    var Aii = A[ii];
                    var Aj = A[j];
                    var AiiJ = Aii[j];
                    for (var jj = j + 1; jj < N; jj++)
                        Aii[jj] -= AiiJ * Aj[jj];
                }
                ;
            }
        }
        ;
        return 0;
    };
    /**
     * Solve a linear system, using a prefactored matrix
     * in LU form.
     *
     *
     * @param {Array} LU (in) the factored matrix in LU form.
     * @param pivot (in) the pivot vector which lists
     * the reordering used during the factorization
     * stage.
     * @param {Array} b    (in/out) On input, the right-hand side.
     * On output, the solution vector.
     * @param {Array} pvt
     */
    Main.solve = function (LU, pvt, b) {
        var M = LU.length;
        var N = LU[0].length;
        var ii = 0;
        for (var i = 0; i < M; i++) {
            var ip = pvt[i];
            var sum = b[ip];
            b[ip] = b[i];
            if (ii === 0)
                for (var j = ii; j < i; j++)
                    sum -= LU[i][j] * b[j];
            else if (sum === 0.0)
                ii = i;
            b[i] = sum;
        }
        ;
        for (var i = N - 1; i >= 0; i--) {
            var sum = b[i];
            for (var j = i + 1; j < N; j++)
                sum -= LU[i][j] * b[j];
            b[i] = sum / LU[i][i];
        }
        ;
    };
    return Main;
}());
Main["__class"] = "Main";
Main.main(null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FOzs7Ozs7R0FNRztBQUNIO0lBNEhJLGNBQW1CLENBQWM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQVMsQ0FBQyxVQUFTLElBQUksSUFBSSxJQUFJLFFBQVEsR0FBRyxVQUFTLElBQUksSUFBSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQUMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hQLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsVUFBQSxDQUFDLElBQU0sSUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEVBQUUsR0FBQyxDQUFDO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFwSUQsV0FBVyxDQUFRLGVBQVUsR0FBakIsVUFBa0IsQ0FBYyxFQUFFLENBQWM7UUFDeEQsSUFBSSxDQUFDLEdBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQyxJQUFJLEVBQUUsR0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxFQUFFLEdBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRTtnQkFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFZLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFBQSxDQUFDO1FBQ04sQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVyxDQUFRLGlCQUFZLEdBQW5CLFVBQW9CLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVTtRQUM5RCxJQUFJLENBQUMsR0FBc0IsQ0FBQyxVQUFTLElBQUksSUFBSSxJQUFJLFFBQVEsR0FBRyxVQUFTLElBQUksSUFBSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQUMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENB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