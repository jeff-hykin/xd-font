'use strict';
var r1_Point, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, r124_s;
var r124_xs = module.exports;
module.exports = r1_Point = function _r1_t8(r126_Super) {
    var r126_Constructor = function _r126_t2() {
        return void 0;
    };
    var r126_Type = function _r126_t3() {
        var _r128_t0 = this;
        var _r128_t1 = arguments;
        r126_Constructor.apply(_r128_t0, _r128_t1);
        return void 0;
    };
    var r126_Symbol = Symbol;
    (function _r126_t4() {
        var r130_protectedTerms;
        r126_Type.protectedTerms = r130_protectedTerms = Object.create(r126_Super.protectedTerms || null);
        r126_Constructor = function _r130_t2(r158_x, r158_y, r158_on, r158_cubic, r158_subdivided) {
            var _r158_t0 = this;
            _r158_t0.x = r158_x;
            _r158_t0.y = r158_y;
            _r158_t0.on = r158_on || false;
            _r158_t0.subdivided = r158_subdivided || false;
            _r158_t0.cubic = r158_cubic || false;
            return void 0;
        };
        r126_Type.transformed = function _r130_t3(r164_tfm, r164_x, r164_y, r164_on, r164_cubic, r164_subdivided) {
            return new r1_Point(r164_x * r164_tfm.xx + r164_y * r164_tfm.yx + r164_tfm.x, r164_x * r164_tfm.xy + r164_y * r164_tfm.yy + r164_tfm.y, r164_on, r164_cubic, r164_subdivided);
        };
        return void 0;
    }.call(r126_Type.prototype));
    return r126_Type;
}(Object);
var _r124_t0 = Object.keys(r124_xs);
var _r124_t1 = _r124_t0.length;
var _r124_t2 = 0;
for (; _r124_t2 < _r124_t1; _r124_t2 = _r124_t2 + 1) {
    r124_s = _r124_t0[_r124_t2];
    module.exports[r124_s] = r124_xs[r124_s];
}
