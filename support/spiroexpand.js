'use strict';
var r1_SpiroExpansionContext, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, r136_s;
var r1_smooth = require('./monotonic-interpolate');
var _r1_t8 = require('./transform');
var r1_Transform = _r1_t8;
var r1_tp = _r1_t8.transformPoint;
var r1_utp = _r1_t8.untransform;
var r1_inverse = _r1_t8.inverse;
var r1_fallback = function _r1_t9() {
    var _r126_t3;
    var _r126_t1 = arguments;
    var r126_j = 0;
    var _r126_t2 = r126_j < _r126_t1.length;
    for (; _r126_t2; _r126_t2 = r126_j < _r126_t1.length) {
        if (_r126_t1[r126_j] !== void 0)
            return _r126_t1[r126_j];
        _r126_t3 = r126_j = r126_j + 1;
    }
    return _r126_t3;
};
var r1_linreg = function _r1_t10(r127_x0, r127_y0, r127_x1, r127_y1, r127_x) {
    return r127_y0 + (r127_x - r127_x0) * (r127_y1 - r127_y0) / (r127_x1 - r127_x0);
};
var r1_normalY = function _r1_t11(r134_angle) {
    return Math.sin(r134_angle);
};
var r1_normalX = function _r1_t12(r135_angle, r135_vex) {
    return Math.cos(r135_angle) * r135_vex;
};
var r136_xs = module.exports;
module.exports = r1_SpiroExpansionContext = function _r1_t13(r138_Super) {
    var r138_Constructor = function _r138_t2() {
        return void 0;
    };
    var r138_Type = function _r138_t3() {
        var _r140_t0 = this;
        var _r140_t1 = arguments;
        r138_Constructor.apply(_r140_t0, _r140_t1);
        return void 0;
    };
    var r138_Symbol = Symbol;
    (function _r138_t4() {
        var r142_protectedTerms;
        r138_Type.protectedTerms = r142_protectedTerms = Object.create(r138_Super.protectedTerms || null);
        r138_Constructor = function _r142_t2() {
            var _r170_t0 = this;
            _r170_t0.gizmo = r1_Transform.Id();
            _r170_t0.controlKnots = [];
            _r170_t0.defaultd1 = 0;
            _r170_t0.defaultd2 = 0;
            return void 0;
        };
        r138_Type.prototype.moveTo = function _r142_t3(r176_x, r176_y, r176_unimportant) {
            var _r176_t1 = this;
            if (r176_unimportant)
                return void 0;
            var _r176_t0 = r176_x;
            r176_x = r176_x * _r176_t1.gizmo.xx + r176_y * _r176_t1.gizmo.yx + _r176_t1.gizmo.x;
            r176_y = _r176_t0 * _r176_t1.gizmo.xy + r176_y * _r176_t1.gizmo.yy + _r176_t1.gizmo.y;
            return _r176_t1.controlKnots.push({
                'x': r176_x,
                'y': r176_y,
                'type': 'g4',
                'd1': _r176_t1.defaultd1,
                'd2': _r176_t1.defaultd2
            });
        };
        r138_Type.prototype.lineTo = function _r142_t4(r183_x, r183_y, r183_unimportant) {
            var r183_normalAngle;
            var _r183_t1 = this;
            var r183_lastKnot = _r183_t1.controlKnots[_r183_t1.controlKnots.length - 1];
            var _r183_t0 = r183_x;
            r183_x = r183_x * _r183_t1.gizmo.xx + r183_y * _r183_t1.gizmo.yx + _r183_t1.gizmo.x;
            r183_y = _r183_t0 * _r183_t1.gizmo.xy + r183_y * _r183_t1.gizmo.yy + _r183_t1.gizmo.y;
            var r183_thisKnot = {
                'x': r183_x,
                'y': r183_y,
                'type': 'g4',
                'd1': r183_lastKnot.d1,
                'd2': r183_lastKnot.d2
            };
            if (r183_lastKnot) {
                r183_normalAngle = Math.PI / 2 + Math.atan2(r183_y - r183_lastKnot.y, r183_x - r183_lastKnot.x);
                r183_thisKnot.normalAngle = r183_normalAngle;
                if (r183_lastKnot.normalAngle === void 0)
                    r183_lastKnot.normalAngle = r183_normalAngle;
            }
            return !r183_unimportant ? _r183_t1.controlKnots.push(r183_thisKnot) : void 0;
        };
        r138_Type.prototype.cubicTo = function _r142_t5(r190_x1, r190_y1, r190_x2, r190_y2, r190_x, r190_y, r190_unimportant) {
            var r190_normalAngle;
            var _r190_t3 = this;
            var r190_lastKnot = _r190_t3.controlKnots[_r190_t3.controlKnots.length - 1];
            var _r190_t0 = r190_x1;
            r190_x1 = r190_x1 * _r190_t3.gizmo.xx + r190_y1 * _r190_t3.gizmo.yx + _r190_t3.gizmo.x;
            r190_y1 = _r190_t0 * _r190_t3.gizmo.xy + r190_y1 * _r190_t3.gizmo.yy + _r190_t3.gizmo.y;
            var _r190_t1 = r190_x2;
            r190_x2 = r190_x2 * _r190_t3.gizmo.xx + r190_y2 * _r190_t3.gizmo.yx + _r190_t3.gizmo.x;
            r190_y2 = _r190_t1 * _r190_t3.gizmo.xy + r190_y2 * _r190_t3.gizmo.yy + _r190_t3.gizmo.y;
            var _r190_t2 = r190_x;
            r190_x = r190_x * _r190_t3.gizmo.xx + r190_y * _r190_t3.gizmo.yx + _r190_t3.gizmo.x;
            r190_y = _r190_t2 * _r190_t3.gizmo.xy + r190_y * _r190_t3.gizmo.yy + _r190_t3.gizmo.y;
            var r190_thisKnot = {
                'x': r190_x,
                'y': r190_y,
                'type': 'g4',
                'd1': r190_lastKnot.d1,
                'd2': r190_lastKnot.d2
            };
            if (r190_lastKnot && r190_lastKnot.normalAngle === void 0) {
                r190_normalAngle = Math.PI / 2 + Math.atan2(r190_y1 - r190_lastKnot.y, r190_x1 - r190_lastKnot.x);
                if (r190_lastKnot.normalAngle === void 0)
                    r190_lastKnot.normalAngle = r190_normalAngle;
            }
            return !r190_unimportant ? (r190_normalAngle = Math.PI / 2 + Math.atan2(r190_y - r190_y2, r190_x - r190_x2), r190_thisKnot.normalAngle = r190_normalAngle, _r190_t3.controlKnots.push(r190_thisKnot)) : void 0;
        };
        r138_Type.prototype['set-width'] = function _r142_t6(r199_l, r199_r) {
            var _r199_t0 = this;
            var r199_lastKnot = _r199_t0.controlKnots[_r199_t0.controlKnots.length - 1];
            return r199_lastKnot ? (r199_lastKnot.d1 = r199_l, r199_lastKnot.d2 = r199_r) : (_r199_t0.defaultd1 = r199_l, _r199_t0.defaultd2 = r199_r);
        };
        r138_Type.prototype['heads-to'] = function _r142_t7(r205_direction) {
            var _r205_t0 = this;
            var r205_lastKnot = _r205_t0.controlKnots[_r205_t0.controlKnots.length - 1];
            return r205_lastKnot ? r205_lastKnot.proposedNormal = r205_direction : void 0;
        };
        r138_Type.prototype['set-type'] = function _r142_t8(r211_type) {
            var _r211_t0 = this;
            var r211_lastKnot = _r211_t0.controlKnots[_r211_t0.controlKnots.length - 1];
            return r211_lastKnot ? r211_lastKnot.type = r211_type : void 0;
        };
        r138_Type.prototype.expand = function _r142_t9(r217_contrast) {
            var r217_knot, r217_type, r217_jBefore, r217_jAfter, r217_knotBefore, r217_knotAfter, r217_ref, r217_lhsBefore, r217_lhsAfter, r217_rhsBefore, r217_rhsAfter, r217_kLHS, r217_kRHS, _r217_t4, _r217_t7;
            var _r217_t8 = this;
            var r217_lhs = [];
            var r217_rhs = [];
            r217_contrast = r1_fallback(r217_contrast, 1 / 0.9);
            var r217_d1s = [];
            var r217_d2s = [];
            var r217_dxs = [];
            var r217_dys = [];
            var r217_js = [];
            var _r217_t0 = 0;
            var _r217_t1 = _r217_t8.controlKnots.length;
            var r217_j = _r217_t0;
            for (; r217_j < _r217_t1; r217_j = r217_j + 1)
                if (!_r217_t8.controlKnots[r217_j].unimportant) {
                    r217_knot = _r217_t8.controlKnots[r217_j];
                    r217_js.push(r217_j);
                    r217_d1s.push(r217_knot.d1);
                    r217_d2s.push(r217_knot.d2);
                    if (r217_knot.proposedNormal) {
                        r217_dxs.push(r217_knot.proposedNormal.x - r1_normalX(r217_knot.normalAngle, r217_contrast));
                        r217_dys.push(r217_knot.proposedNormal.y - r1_normalY(r217_knot.normalAngle, r217_contrast));
                    } else {
                        r217_dxs.push(0);
                        r217_dys.push(0);
                    }
                }
            var r217_fd1 = r1_smooth(r217_js, r217_d1s);
            var r217_fd2 = r1_smooth(r217_js, r217_d2s);
            var r217_fdx = r1_smooth(r217_js, r217_dxs);
            var r217_fdy = r1_smooth(r217_js, r217_dys);
            var _r217_t2 = 0;
            var _r217_t3 = _r217_t8.controlKnots.length;
            r217_j = _r217_t2;
            for (; r217_j < _r217_t3; r217_j = r217_j + 1) {
                r217_knot = _r217_t8.controlKnots[r217_j];
                if (!r217_knot.unimportant) {
                    r217_lhs[r217_j] = {
                        'x': r217_knot.x + (r217_fdx(r217_j) + r1_normalX(r217_knot.normalAngle, r217_contrast)) * r217_fd1(r217_j),
                        'y': r217_knot.y + (r217_fdy(r217_j) + r1_normalY(r217_knot.normalAngle, r217_contrast)) * r217_fd1(r217_j),
                        'type': r217_knot.type
                    };
                    r217_rhs[r217_j] = {
                        'x': r217_knot.x - (r217_fdx(r217_j) + r1_normalX(r217_knot.normalAngle, r217_contrast)) * r217_fd2(r217_j),
                        'y': r217_knot.y - (r217_fdy(r217_j) + r1_normalY(r217_knot.normalAngle, r217_contrast)) * r217_fd2(r217_j),
                        'type': (_r217_t4 = r217_knot.type, 'left' === _r217_t4 ? 'right' : 'right' === _r217_t4 ? 'left' : (r217_type = _r217_t4, r217_type))
                    };
                }
            }
            var _r217_t5 = 0;
            var _r217_t6 = _r217_t8.controlKnots.length;
            r217_j = _r217_t5;
            for (; r217_j < _r217_t6; r217_j = r217_j + 1) {
                r217_knot = _r217_t8.controlKnots[r217_j];
                if (r217_knot.unimportant) {
                    r217_jBefore = r217_j - 1;
                    for (; this.controlKnots[r217_jBefore].unimportant;)
                        r217_jBefore = r217_jBefore - 1;
                    r217_jAfter = r217_j + 1;
                    for (; this.controlKnots[r217_jAfter].unimportant;)
                        r217_jAfter = r217_jAfter + 1;
                    r217_knotBefore = r1_utp(_r217_t8.gizmo, _r217_t8.controlKnots[r217_jBefore]);
                    r217_knotAfter = r1_utp(_r217_t8.gizmo, _r217_t8.controlKnots[r217_jAfter]);
                    r217_ref = r1_utp(_r217_t8.gizmo, r217_knot);
                    r217_lhsBefore = r1_utp(_r217_t8.gizmo, r217_lhs[r217_jBefore]);
                    r217_lhsAfter = r1_utp(_r217_t8.gizmo, r217_lhs[r217_jAfter]);
                    r217_rhsBefore = r1_utp(_r217_t8.gizmo, r217_rhs[r217_jBefore]);
                    r217_rhsAfter = r1_utp(_r217_t8.gizmo, r217_rhs[r217_jAfter]);
                    r217_kLHS = r1_tp(_r217_t8.gizmo, {
                        'x': r1_linreg(r217_knotBefore.x, r217_lhsBefore.x, r217_knotAfter.x, r217_lhsAfter.x, r217_ref.x),
                        'y': r1_linreg(r217_knotBefore.y, r217_lhsBefore.y, r217_knotAfter.y, r217_lhsAfter.y, r217_ref.y)
                    });
                    r217_kRHS = r1_tp(_r217_t8.gizmo, {
                        'x': r1_linreg(r217_knotBefore.x, r217_rhsBefore.x, r217_knotAfter.x, r217_rhsAfter.x, r217_ref.x),
                        'y': r1_linreg(r217_knotBefore.y, r217_rhsBefore.y, r217_knotAfter.y, r217_rhsAfter.y, r217_ref.y)
                    });
                    r217_lhs[r217_j] = {
                        'x': r217_kLHS.x,
                        'y': r217_kLHS.y,
                        'type': r217_knot.type
                    };
                    r217_rhs[r217_j] = {
                        'x': r217_kRHS.x,
                        'y': r217_kRHS.y,
                        'type': (_r217_t7 = r217_knot.type, 'left' === _r217_t7 ? 'right' : 'right' === _r217_t7 ? 'left' : (r217_type = _r217_t7, r217_type))
                    };
                }
            }
            return {
                'lhs': r217_lhs,
                'rhs': r217_rhs
            };
        };
        return void 0;
    }.call(r138_Type.prototype));
    return r138_Type;
}(Object);
var _r136_t0 = Object.keys(r136_xs);
var _r136_t1 = _r136_t0.length;
var _r136_t2 = 0;
for (; _r136_t2 < _r136_t1; _r136_t2 = _r136_t2 + 1) {
    r136_s = _r136_t0[_r136_t2];
    module.exports[r136_s] = r136_xs[r136_s];
}
