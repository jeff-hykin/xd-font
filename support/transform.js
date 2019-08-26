'use strict';
var r1_Transform, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, r125_s;
var r1_Point = require('./point');
var r125_xs = module.exports;
module.exports = r1_Transform = function _r1_t8(r127_Super) {
    var r127_Constructor = function _r127_t2() {
        return void 0;
    };
    var r127_Type = function _r127_t3() {
        var _r129_t0 = this;
        var _r129_t1 = arguments;
        r127_Constructor.apply(_r129_t0, _r129_t1);
        return void 0;
    };
    var r127_Symbol = Symbol;
    (function _r127_t4() {
        var r131_protectedTerms;
        r127_Type.protectedTerms = r131_protectedTerms = Object.create(r127_Super.protectedTerms || null);
        r127_Constructor = function _r131_t2(r159_xx, r159_yx, r159_xy, r159_yy, r159_x, r159_y) {
            var _r159_t0 = this;
            _r159_t0.xx = r159_xx;
            _r159_t0.yx = r159_yx;
            _r159_t0.xy = r159_xy;
            _r159_t0.yy = r159_yy;
            _r159_t0.x = r159_x;
            _r159_t0.y = r159_y;
            return void 0;
        };
        r127_Type.prototype.inverse = function _r131_t3() {
            var _r165_t0 = this;
            return r1_Transform.inverse(_r165_t0);
        };
        r127_Type.Id = function _r131_t4() {
            return new r1_Transform(1, 0, 0, 1, 0, 0);
        };
        r127_Type.transformPoint = function _r131_t5(r172_tfm, r172_pt) {
            return new r1_Point(r172_pt.x * r172_tfm.xx + r172_pt.y * r172_tfm.yx + r172_tfm.x, r172_pt.x * r172_tfm.xy + r172_pt.y * r172_tfm.yy + r172_tfm.y, r172_pt.on, r172_pt.cubic, r172_pt.subdivided);
        };
        r127_Type.inverse = function _r131_t6(r173_tfm) {
            var r173_denom = r173_tfm.xx * r173_tfm.yy - r173_tfm.xy * r173_tfm.yx;
            return new r1_Transform(r173_tfm.yy / r173_denom, -r173_tfm.yx / r173_denom, -r173_tfm.xy / r173_denom, r173_tfm.xx / r173_denom, -(r173_tfm.x * r173_tfm.yy - r173_tfm.y * r173_tfm.yx) / r173_denom, -(-r173_tfm.x * r173_tfm.xy + r173_tfm.y * r173_tfm.xx) / r173_denom);
        };
        r127_Type.untransform = function _r131_t7(r174_tfm, r174_pt) {
            var r174_xx = r174_pt.x - r174_tfm.x;
            var r174_yy = r174_pt.y - r174_tfm.y;
            var r174_denom = r174_tfm.xx * r174_tfm.yy - r174_tfm.xy * r174_tfm.yx;
            return new r1_Point((r174_xx * r174_tfm.yy - r174_yy * r174_tfm.yx) / r174_denom, (r174_yy * r174_tfm.xx - r174_xx * r174_tfm.xy) / r174_denom, r174_pt.on, r174_pt.cubic, r174_pt.subdivided);
        };
        return void 0;
    }.call(r127_Type.prototype));
    return r127_Type;
}(Object);
var _r125_t0 = Object.keys(r125_xs);
var _r125_t1 = _r125_t0.length;
var _r125_t2 = 0;
for (; _r125_t2 < _r125_t1; _r125_t2 = _r125_t2 + 1) {
    r125_s = _r125_t0[_r125_t2];
    module.exports[r125_s] = r125_xs[r125_s];
}
