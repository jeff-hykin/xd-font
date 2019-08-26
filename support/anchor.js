'use strict';
var r1_Anchor, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, r124_s;
var r124_xs = module.exports;
module.exports = r1_Anchor = function _r1_t8(r126_Super) {
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
        r126_Constructor = function _r130_t2(r158_x, r158_y, r158_type, r158_mbx, r158_mby) {
            var _r158_t0 = this;
            _r158_t0.x = r158_x;
            _r158_t0.y = r158_y;
            _r158_t0.type = r158_type;
            _r158_t0.mbx = r158_mbx;
            _r158_t0.mby = r158_mby;
            return void 0;
        };
        r126_Type.BASE = 'base';
        r126_Type.MARK = 'mark';
        r126_Type.transform = function _r130_t3(r164_tfm, r164_a) {
            var r164_mbx, r164_mby;
            var r164_x = r164_a.x * r164_tfm.xx + r164_a.y * r164_tfm.yx + r164_tfm.x;
            var r164_y = r164_a.x * r164_tfm.xy + r164_a.y * r164_tfm.yy + r164_tfm.y;
            if (r164_a.mbx !== void 0 && r164_a.mby !== void 0) {
                r164_mbx = r164_a.mbx * r164_tfm.xx + r164_a.mby * r164_tfm.yx + r164_tfm.x;
                r164_mby = r164_a.mbx * r164_tfm.xy + r164_a.mby * r164_tfm.yy + r164_tfm.y;
                return new r1_Anchor(r164_x, r164_y, r164_a.type, r164_mbx, r164_mby);
            } else
                return new r1_Anchor(r164_x, r164_y, r164_a.type);
        };
        r126_Type.prototype.transform = function _r130_t4(r165_tfm) {
            var _r165_t0 = this;
            return r1_Anchor.transform(r165_tfm, _r165_t0);
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
