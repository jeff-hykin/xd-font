'use strict';
var r1_SetupBuilders, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12;
var r1_libspiro = require('libspiro-js');
var r1_SpiroExpansionContext = require('./spiroexpand');
var r1_fairify = require('./fairify');
var r1_ShapeOps = require('caryll-shapeops');
var r1_Transform = require('./transform');
var r1_fallback = function _r1_t8() {
    var _r129_t3;
    var _r129_t1 = arguments;
    var r129_j = 0;
    var _r129_t2 = r129_j < _r129_t1.length;
    for (; _r129_t2; _r129_t2 = r129_j < _r129_t1.length) {
        if (_r129_t1[r129_j] !== void 0)
            return _r129_t1[r129_j];
        _r129_t3 = r129_j = r129_j + 1;
    }
    return _r129_t3;
};
var r1_mix = function _r1_t9(r130_a, r130_b, r130_p) {
    return r130_a + (r130_b - r130_a) * r130_p;
};
var r1_bez2 = function _r1_t10(r131_a, r131_b, r131_c, r131_t) {
    return (1 - r131_t) * (1 - r131_t) * r131_a + 2 * (1 - r131_t) * r131_t * r131_b + r131_t * r131_t * r131_c;
};
var r1_bez3 = function _r1_t11(r132_a, r132_b, r132_c, r132_d, r132_t) {
    return (1 - r132_t) * (1 - r132_t) * (1 - r132_t) * r132_a + 3 * (1 - r132_t) * (1 - r132_t) * r132_t * r132_b + 3 * r132_t * r132_t * (1 - r132_t) * r132_c + r132_t * r132_t * r132_t * r132_d;
};
exports.SetupBuilders = r1_SetupBuilders = function _r1_t12(r134_args) {
    var _r134_t0 = r134_args;
    var r134_para = _r134_t0.para;
    var r134_Glyph = _r134_t0.Glyph;
    var r134_CONTRAST = _r134_t0.CONTRAST;
    var r134_globalTransform = _r134_t0.globalTransform;
    var r134_STROKE = _r134_t0.STROKE;
    var r134_SUPERNESS = _r134_t0.SUPERNESS;
    var r134_g4 = function _r134_t8(r135_x, r135_y, r135_f) {
        return {
            'x': r135_x,
            'y': r135_y,
            'type': 'g4',
            'af': r135_f
        };
    };
    var r134_g2 = function _r134_t9(r136_x, r136_y, r136_f) {
        return {
            'x': r136_x,
            'y': r136_y,
            'type': 'g2',
            'af': r136_f
        };
    };
    var r134_corner = function _r134_t10(r137_x, r137_y, r137_f) {
        return {
            'x': r137_x,
            'y': r137_y,
            'type': 'corner',
            'af': r137_f
        };
    };
    var r134_flat = function _r134_t11(r138_x, r138_y, r138_f) {
        return {
            'x': r138_x,
            'y': r138_y,
            'type': 'left',
            'af': r138_f
        };
    };
    var r134_curl = function _r134_t12(r139_x, r139_y, r139_f) {
        return {
            'x': r139_x,
            'y': r139_y,
            'type': 'right',
            'af': r139_f
        };
    };
    var r134_close = function _r134_t13(r140_f) {
        return {
            'type': 'close',
            'af': r140_f
        };
    };
    var r134_end = function _r134_t14(r141_f) {
        return {
            'type': 'end',
            'af': r141_f
        };
    };
    var r134_straight = {
        'l': r134_flat,
        'r': r134_curl
    };
    r134_flat.ai = r134_para.isItalic ? r134_g4 : r134_flat;
    r134_curl.ai = r134_para.isItalic ? r134_g4 : r134_curl;
    var _r134_t15 = [
        {
            'name': 'up',
            'x': 0,
            'y': 1
        },
        {
            'name': 'down',
            'x': 0,
            'y': -1
        },
        {
            'name': 'left',
            'x': -1,
            'y': 0
        },
        {
            'name': 'right',
            'x': 1,
            'y': 0
        }
    ];
    var _r134_t16 = [
        {
            'name': 'start',
            'l': 0,
            'r': 0.01
        },
        {
            'name': 'mid',
            'l': -0.005,
            'r': 0.005
        },
        {
            'name': 'end',
            'l': -0.01,
            'r': 0
        }
    ];
    var _r134_t17 = [
        r134_g4,
        r134_g2,
        r134_corner,
        r134_straight
    ];
    (function (_r134_leti1, _r134_leti2, _r134_leti3) {
        var r142_direction, _r142_t5, _r142_t6;
        var r142_directions = _r134_leti1;
        var r142_adhensions = _r134_leti2;
        var r142_knottypes = _r134_leti3;
        var _r142_t0 = r142_directions;
        var _r142_t1 = _r142_t0.length;
        var _r142_t2 = 0;
        var _r142_t4 = _r142_t2 < _r142_t1;
        for (; _r142_t4; _r142_t4 = _r142_t2 < _r142_t1) {
            r142_direction = _r142_t0[_r142_t2];
            _r142_t6 = r142_direction;
            (function (_r142_leti3) {
                var r145_knottype, _r145_t5, _r145_t6;
                var r145_d = _r142_leti3;
                var _r145_t0 = r142_knottypes;
                var _r145_t1 = _r145_t0.length;
                var _r145_t2 = 0;
                var _r145_t4 = _r145_t2 < _r145_t1;
                for (; _r145_t4; _r145_t4 = _r145_t2 < _r145_t1) {
                    r145_knottype = _r145_t0[_r145_t2];
                    _r145_t6 = r145_knottype;
                    (function (_r145_leti3) {
                        var r148_adh, _r148_t5, _r148_t6;
                        var r148_kt = _r145_leti3;
                        r148_kt[r145_d.name] = {};
                        var _r148_t0 = r142_adhensions;
                        var _r148_t1 = _r148_t0.length;
                        var _r148_t2 = 0;
                        var _r148_t4 = _r148_t2 < _r148_t1;
                        for (; _r148_t4; _r148_t4 = _r148_t2 < _r148_t1) {
                            r148_adh = _r148_t0[_r148_t2];
                            _r148_t6 = r148_adh;
                            (function (_r148_leti3) {
                                var r151_a = _r148_leti3;
                                return r148_kt[r145_d.name][r151_a.name] = function _r151_t0(r152_x, r152_y, r152_f) {
                                    return [
                                        r1_fallback(r148_kt.l, r148_kt)(r152_x + r145_d.x * r151_a.l, r152_y + r145_d.y * r151_a.l, r152_f),
                                        r1_fallback(r148_kt.r, r148_kt)(r152_x + r145_d.x * r151_a.r, r152_y + r145_d.y * r151_a.r, r152_f)
                                    ];
                                };
                            }(_r148_t6));
                            _r148_t5 = _r148_t2 = _r148_t2 + 1;
                        }
                        return _r148_t5;
                    }(_r145_t6));
                    _r145_t5 = _r145_t2 = _r145_t2 + 1;
                }
                return _r145_t5;
            }(_r142_t6));
            _r142_t5 = _r142_t2 = _r142_t2 + 1;
        }
        return _r142_t5;
    }(_r134_t15, _r134_t16, _r134_t17));
    var r134_widths = function _r134_t20(r153_l, r153_r) {
        return function _r153_t2() {
            var _r154_t0 = this;
            return _r154_t0['set-width'](r153_l, r153_r);
        };
    };
    r134_widths.lhs = function _r134_t21(r155_w) {
        return r134_widths(r1_fallback(r155_w, r134_STROKE), 0);
    };
    r134_widths.rhs = function _r134_t22(r156_w) {
        return r134_widths(0, r1_fallback(r156_w, r134_STROKE));
    };
    r134_widths.center = function _r134_t23(r157_w) {
        return r134_widths(r1_fallback(r157_w, r134_STROKE) / 2, r1_fallback(r157_w, r134_STROKE) / 2);
    };
    var r134_xn$disablegizmo$3qIs = function _r134_t24() {
        return function _r158_t2() {
            var _r159_t0 = this;
            return _r159_t0.gizmo = r1_Transform.Id();
        };
    };
    var r134_xn$disablecontrast$3qIs = function _r134_t25() {
        return function _r160_t2() {
            var _r161_t0 = this;
            return _r161_t0.contrast = 1;
        };
    };
    var r134_heading = function _r134_t26(r162_d) {
        return function _r162_t2() {
            var _r163_t0 = this;
            return _r163_t0['heads-to'](r162_d);
        };
    };
    r134_widths.heading = function _r134_t27(r164_l, r164_r, r164_d) {
        return function _r164_t2() {
            var _r165_t0 = this;
            _r165_t0['set-width'](r164_l, r164_r);
            return _r165_t0['heads-to'](r164_d);
        };
    };
    r134_widths.lhs.heading = function _r134_t28(r166_w, r166_d) {
        return function _r166_t2() {
            var _r167_t0 = this;
            _r167_t0['set-width'](r1_fallback(r166_w, r134_STROKE), 0);
            return _r167_t0['heads-to'](r166_d);
        };
    };
    r134_widths.rhs.heading = function _r134_t29(r168_w, r168_d) {
        return function _r168_t2() {
            var _r169_t0 = this;
            _r169_t0['set-width'](0, r1_fallback(r168_w, r134_STROKE));
            return _r169_t0['heads-to'](r168_d);
        };
    };
    r134_widths.center.heading = function _r134_t30(r170_w, r170_d) {
        return function _r170_t2() {
            var _r171_t0 = this;
            _r171_t0['set-width'](r1_fallback(r170_w, r134_STROKE) / 2, r1_fallback(r170_w, r134_STROKE) / 2);
            return _r171_t0['heads-to'](r170_d);
        };
    };
    var r134_unimportant = function _r134_t31() {
        var _r172_t0 = this;
        if (_r172_t0.points && _r172_t0.points.length && _r172_t0.points[_r172_t0.points.length - 1])
            _r172_t0.points[_r172_t0.points.length - 1].subdivided = true;
        return _r172_t0.controlKnots && _r172_t0.controlKnots.length && _r172_t0.controlKnots[_r172_t0.controlKnots.length - 1] ? _r172_t0.controlKnots[_r172_t0.controlKnots.length - 1].unimportant = true : void 0;
    };
    var r134_important = function _r134_t32() {
        return void 0;
    };
    var r134_afInterpolate = function _r134_t33(r174_before, r174_after, r174_args) {
        return r134_g4(r1_mix(r174_before.x, r174_after.x, r174_args.rx), r1_mix(r174_before.y, r174_after.y, r174_args.ry), r1_fallback(r174_args.raf, r134_unimportant));
    };
    var r134_afInterpolateThem = function _r134_t34(r175_before, r175_after, r175_args) {
        var r175_rx, r175_ry, r175_preserve, _r175_t3, _r175_t4;
        var r175_knots = [];
        var _r175_t0 = r175_args.rs;
        var _r175_t1 = _r175_t0.length;
        var _r175_t2 = 0;
        for (; _r175_t2 < _r175_t1; _r175_t2 = _r175_t2 + 1) {
            _r175_t3 = _r175_t0[_r175_t2];
            r175_rx = _r175_t3[0];
            r175_ry = _r175_t3[1];
            r175_preserve = _r175_t3[2];
            r175_knots.push(r1_fallback(r175_args.ty, r134_g2)(r1_mix(r175_before.x, r175_after.x, r175_rx), r1_mix(r175_before.y, r175_after.y, r175_ry), r1_fallback(r175_args.raf, (_r175_t4 = r175_preserve, 1 === _r175_t4 ? r175_before.af : 2 === _r175_t4 ? r175_after.af : r134_unimportant))));
        }
        return r175_knots;
    };
    var r134_alsothru = function _r134_t35(r177_rx, r177_ry, r177_raf) {
        return {
            'type': 'interpolate',
            'rx': r177_rx,
            'ry': r177_ry,
            'raf': r177_raf,
            'af': r134_afInterpolate
        };
    };
    var r134_alsothruthem = function _r134_t36(r178_rs, r178_raf, r178_ty) {
        return {
            'type': 'interpolate',
            'rs': r178_rs,
            'raf': r178_raf,
            'ty': r178_ty,
            'af': r134_afInterpolateThem
        };
    };
    var r134_bezcontrols = function _r134_t37(r179_x1, r179_y1, r179_x2, r179_y2, r179__samples, r179_raf, r179_ty) {
        var r179_samples = r1_fallback(r179__samples, 3);
        var r179_rs = [];
        var _r179_t0 = 1;
        var _r179_t1 = r179_samples;
        var r179_j = _r179_t0;
        for (; r179_j < _r179_t1; r179_j = r179_j + 1)
            r179_rs.push([
                r1_bez3(0, r179_x1, r179_x2, 1, r179_j / r179_samples),
                r1_bez3(0, r179_y1, r179_y2, 1, r179_j / r179_samples)
            ]);
        return r134_alsothruthem(r179_rs, r179_raf, r179_ty);
    };
    var r134_quadcontrols = function _r134_t38(r181_x1, r181_y1, r181_samples, r181_raf, r181_ty) {
        return r134_bezcontrols(r181_x1 * 2 / 3, r181_y1 * 2 / 3, r1_mix(1, r181_x1, 2 / 3), r1_mix(1, r181_y1, 2 / 3), r181_samples, r181_raf, r181_ty);
    };
    r134_bezcontrols.absolute = function _r134_t39(r182_x1, r182_y1, r182_x2, r182_y2, r182__samples, r182_raf, r182_ty) {
        return {
            'type': 'interpolate',
            'af': function _r182_t2(r183_before, r183_after) {
                var r183_samples = r1_fallback(r182__samples, 3);
                var r183_rs = [];
                var _r183_t0 = 1;
                var _r183_t1 = r183_samples;
                var r183_j = _r183_t0;
                for (; r183_j < _r183_t1; r183_j = r183_j + 1)
                    r183_rs.push(r1_fallback(r182_ty, r134_g4)(r1_bez3(r183_before.x, r182_x1, r182_x2, r183_after.x, r183_j / r183_samples), r1_bez3(r183_before.y, r182_y1, r182_y2, r183_after.y, r183_j / r183_samples), r1_fallback(r182_raf, r134_unimportant)));
                return r183_rs;
            }
        };
    };
    var r134_DEFAULT_STEPS = 6;
    var _r134_t40 = [];
    var _r134_t4 = function (_r134_leti5) {
        var r185_cache = _r134_leti5;
        var r185_build = function _r185_t0(r186_samples) {
            var r186_theta, r186_c, r186_s;
            var r186_hv = [];
            var r186_vh = [];
            var _r186_t0 = 1;
            var _r186_t1 = r186_samples;
            var r186_j = _r186_t0;
            for (; r186_j < _r186_t1; r186_j = r186_j + 1) {
                r186_theta = r186_j / r186_samples * Math.PI / 2;
                r186_c = Math.pow(Math.cos(r186_theta), 2 / r134_SUPERNESS);
                r186_s = Math.pow(Math.sin(r186_theta), 2 / r134_SUPERNESS);
                r186_hv.push([
                    r186_s,
                    1 - r186_c
                ]);
                r186_vh.push([
                    1 - r186_c,
                    r186_s
                ]);
            }
            return r185_cache[r186_samples] = {
                'hv': r186_hv,
                'vh': r186_vh
            };
        };
        var r185_hv = function _r185_t1(r189_samples) {
            if (!r185_cache[r189_samples])
                r185_build(r189_samples);
            return r185_cache[r189_samples].hv;
        };
        var r185_vh = function _r185_t2(r190_samples) {
            if (!r185_cache[r190_samples])
                r185_build(r190_samples);
            return r185_cache[r190_samples].vh;
        };
        return [
            r185_hv,
            r185_vh
        ];
    }(_r134_t40);
    var r134_jhv = _r134_t4[0];
    var r134_jvh = _r134_t4[1];
    var r134_archv = function _r134_t43(r191_samples, r191_notiny, r191_k, r191_raf) {
        return r134_alsothruthem(r134_jhv(r1_fallback(r191_samples, r134_DEFAULT_STEPS)), r191_raf);
    };
    var r134_arcvh = function _r134_t44(r192_samples, r192_notiny, r192_k, r192_raf) {
        return r134_alsothruthem(r134_jvh(r1_fallback(r192_samples, r134_DEFAULT_STEPS)), r192_raf);
    };
    var r134_complexThru = function _r134_t45() {
        var _r193_t1 = arguments;
        var r193_a = [].slice.call(_r193_t1);
        return {
            'type': 'interpolate',
            'af': function _r193_t2(r194_before, r194_after, r194_args) {
                var r194_knot;
                var _r194_t3 = this;
                var r194_ks = [];
                var _r194_t0 = r193_a;
                var _r194_t1 = _r194_t0.length;
                var _r194_t2 = 0;
                for (; _r194_t2 < _r194_t1; _r194_t2 = _r194_t2 + 1) {
                    r194_knot = _r194_t0[_r194_t2];
                    r194_ks.push(r194_knot.af.call(_r194_t3, r194_before, r194_after, r194_knot));
                }
                return r194_ks;
            }
        };
    };
    var r134_flatten = function _r134_t46(r196_knots) {
        var r196_p;
        var r196_a = [];
        var _r196_t0 = r196_knots;
        var _r196_t1 = _r196_t0.length;
        var _r196_t2 = 0;
        for (; _r196_t2 < _r196_t1; _r196_t2 = _r196_t2 + 1) {
            r196_p = _r196_t0[_r196_t2];
            if (r196_p instanceof Array)
                r196_a = r196_a.concat(r134_flatten(r196_p));
            else
                r196_a.push(r196_p);
        }
        return r196_a;
    };
    var r134_prepareSpiroKnots = function _r134_t47(r198__knots, r198_s) {
        var r198_closed = false;
        var r198_lastafs = [];
        var r198_knots = r198__knots;
        for (; r198_knots[0] && r198_knots[0] instanceof Function; r198_knots = r198_knots.slice(1))
            r198_knots[0].call(r198_s);
        for (; r198_knots[r198_knots.length - 1] && (r198_knots[r198_knots.length - 1].type === 'close' || r198_knots[r198_knots.length - 1].type === 'end'); r198_knots = r198_knots.slice(0, -1)) {
            r198_closed = r198_knots[r198_knots.length - 1].type === 'close';
            r198_lastafs.push(r198_knots[r198_knots.length - 1].af);
        }
        r198_knots = r134_flatten(r198_knots);
        if (r198_closed)
            r198_knots.push(r198_knots[0]);
        var _r198_t0 = 0;
        var _r198_t1 = r198_knots.length;
        var r198_j = _r198_t0;
        for (; r198_j < _r198_t1; r198_j = r198_j + 1)
            if (r198_knots[r198_j] && r198_knots[r198_j].type === 'interpolate')
                r198_knots[r198_j] = r198_knots[r198_j].af.call(r198_s, r198_knots[r198_j - 1], r198_knots[r198_j + 1], r198_knots[r198_j]);
        if (r198_closed)
            r198_knots.pop();
        return {
            'knots': r134_flatten(r198_knots),
            'closed': r198_closed,
            'lastafs': r198_lastafs
        };
    };
    var r134_QUAD = false;
    var r134_PRECISION = 0.5;
    var r134_dispiro = function _r134_t48() {
        var _r200_t2 = arguments;
        var _r200_t3 = [].slice.call(_r200_t2, 0);
        return function (_r200_leti0) {
            var r201_args = _r200_leti0;
            return function _r201_t0(r202_dontinc) {
                var r202_knot, r202_af, r202_g, r202_lhsContour, r202_rhsContour, r202_j, _r202_t10, _r202_t11, _r202_t14, _r202_t15;
                var _r202_t12 = this;
                var r202_s = new r1_SpiroExpansionContext();
                r202_s.gizmo = _r202_t12.gizmo || r134_globalTransform;
                var _r202_t0 = r134_prepareSpiroKnots([].slice.call(r201_args, 0), r202_s);
                var r202_knots = _r202_t0.knots;
                var r202_closed = _r202_t0.closed;
                var r202_lastafs = _r202_t0.lastafs;
                var _r202_t1 = r202_knots;
                var _r202_t2 = _r202_t1.length;
                var _r202_t3 = 0;
                for (; _r202_t3 < _r202_t2; _r202_t3 = _r202_t3 + 1) {
                    r202_knot = _r202_t1[_r202_t3];
                    _r202_t14 = r202_knot.type;
                    _r202_t15 = r202_knot.af;
                    (function (_r202_leti4, _r202_leti5) {
                        var r204_ty = _r202_leti4;
                        var r204_af = _r202_leti5;
                        return r202_knot.af = function _r204_t0() {
                            var _r205_t0 = this;
                            _r205_t0['set-type'](r204_ty);
                            return r204_af ? r204_af.apply(_r205_t0, r201_args) : void 0;
                        };
                    }(_r202_t14, _r202_t15));
                }
                r1_libspiro.spiroToBezierOnContext(r202_knots, r202_closed, r202_s);
                var _r202_t6 = r202_lastafs;
                var _r202_t7 = _r202_t6.length;
                var _r202_t8 = 0;
                for (; _r202_t8 < _r202_t7; _r202_t8 = _r202_t8 + 1) {
                    r202_af = _r202_t6[_r202_t8];
                    if (r202_af)
                        r202_af.call(r202_s);
                }
                var _r202_t9 = r202_s.expand(r1_fallback(r202_s.contrast, r134_CONTRAST));
                var r202_lhs = _r202_t9.lhs;
                var r202_rhs = _r202_t9.rhs;
                if (r202_closed) {
                    r202_g = new r134_Glyph();
                    r1_libspiro.spiroToBezierOnContext(r202_lhs.slice(0, -1), true, r202_g, r134_QUAD, r134_PRECISION);
                    r202_lhsContour = r202_g.contours[0];
                    r202_g.contours = [];
                    r1_libspiro.spiroToBezierOnContext(r202_rhs.reverse().slice(0, -1), true, r202_g, r134_QUAD, r134_PRECISION);
                    r202_rhsContour = r202_g.contours[0];
                    r202_g.contours = [r202_lhsContour.concat(r202_rhsContour)];
                } else {
                    r202_g = new r134_Glyph();
                    r202_lhs[0].type = r202_rhs[0].type = r202_lhs[r202_lhs.length - 1].type = r202_rhs[r202_rhs.length - 1].type = 'corner';
                    r1_libspiro.spiroToBezierOnContext(r202_lhs.concat(r202_rhs.reverse()), true, r202_g, r134_QUAD, r134_PRECISION);
                }
                if (!r202_s.unfair && !r134_para.unfair) {
                    _r202_t10 = 0;
                    _r202_t11 = r202_g.contours.length;
                    r202_j = _r202_t10;
                    for (; r202_j < _r202_t11; r202_j = r202_j + 1)
                        r202_g.contours[r202_j] = r1_fairify(r202_g.contours[r202_j], r134_globalTransform);
                }
                r202_g.knots = r202_knots;
                r202_g.lhsknots = r202_lhs;
                r202_g.rhsknots = r202_rhs;
                if (!r202_dontinc)
                    _r202_t12.include(r202_g);
                return r202_g;
            };
        }(_r200_t3);
    };
    var r134_xn$spirooutline$1aao = function _r134_t49() {
        var _r209_t2 = arguments;
        var _r209_t3 = [].slice.call(_r209_t2, 0);
        return function (_r209_leti0) {
            var r210_k = _r209_leti0;
            return function _r210_t0(r211_dontinc) {
                var r211_af, r211_j, _r211_t4, _r211_t5;
                var _r211_t6 = this;
                var r211_g = new r134_Glyph();
                r211_g.gizmo = _r211_t6.gizmo || r134_globalTransform;
                var _r211_t0 = r134_prepareSpiroKnots(r210_k, r211_g);
                var r211_knots = _r211_t0.knots;
                var r211_closed = _r211_t0.closed;
                var r211_lastafs = _r211_t0.lastafs;
                r1_libspiro.spiroToBezierOnContext(r211_knots, r211_closed, r211_g, r134_QUAD, r134_PRECISION);
                var _r211_t1 = r211_lastafs;
                var _r211_t2 = _r211_t1.length;
                var _r211_t3 = 0;
                for (; _r211_t3 < _r211_t2; _r211_t3 = _r211_t3 + 1) {
                    r211_af = _r211_t1[_r211_t3];
                    if (r211_af)
                        r211_af.call(r211_g);
                }
                if (!r134_para.unfair) {
                    _r211_t4 = 0;
                    _r211_t5 = r211_g.contours.length;
                    r211_j = _r211_t4;
                    for (; r211_j < _r211_t5; r211_j = r211_j + 1)
                        r211_g.contours[r211_j] = r1_fairify(r211_g.contours[r211_j], r211_g.fairGizmo || r211_g.gizmo);
                }
                if (!r211_dontinc)
                    _r211_t6.include(r211_g);
                return r211_g;
            };
        }(_r209_t3);
    };
    var r134_Boole = function _r134_t50(r215_operator) {
        return function _r215_t2() {
            var _r216_t2 = arguments;
            var _r216_t3 = [].slice.call(_r216_t2, 0);
            return function (_r216_leti0) {
                var r217_k = _r216_leti0;
                return function _r217_t0(r218_dontinc) {
                    var r218_item, r218_g1, r218_c1;
                    var _r218_t3 = this;
                    var r218_g = new r134_Glyph();
                    r218_g.gizmo = _r218_t3.gizmo || r134_globalTransform;
                    if (r217_k.length === 0)
                        return r218_g;
                    r218_g.include(r217_k[0]);
                    r218_g.contours = r218_g.contours.map(r134_Glyph.contourToStandardCubic);
                    var _r218_t0 = r217_k.slice(1);
                    var _r218_t1 = _r218_t0.length;
                    var _r218_t2 = 0;
                    for (; _r218_t2 < _r218_t1; _r218_t2 = _r218_t2 + 1) {
                        r218_item = _r218_t0[_r218_t2];
                        r218_g1 = new r134_Glyph();
                        r218_g1.gizmo = _r218_t3.gizmo || r134_globalTransform;
                        r218_g1.include(r218_item);
                        r218_g1.contours = r218_g1.contours.map(r134_Glyph.contourToStandardCubic);
                        r218_c1 = r1_ShapeOps.boole(r215_operator, r218_g.contours, r218_g1.contours, r1_ShapeOps.fillRules.nonzero, r1_ShapeOps.fillRules.nonzero, 16384);
                        r218_g.contours = r218_c1.map(function _r218_t5(r221_c) {
                            return r134_Glyph.contourToStandardCubic(r221_c).reverse();
                        });
                    }
                    if (!r218_dontinc)
                        _r218_t3.include(r218_g);
                    return r218_g;
                };
            }(_r216_t3);
        };
    };
    var r134_union = r134_Boole(r1_ShapeOps.ops.union);
    var r134_intersection = r134_Boole(r1_ShapeOps.ops.intersection);
    var r134_difference = r134_Boole(r1_ShapeOps.ops.difference);
    return {
        'g4': r134_g4,
        'g2': r134_g2,
        'corner': r134_corner,
        'flat': r134_flat,
        'curl': r134_curl,
        'close': r134_close,
        'end': r134_end,
        'straight': r134_straight,
        'widths': r134_widths,
        'disable-gizmo': r134_xn$disablegizmo$3qIs,
        'disable-contrast': r134_xn$disablecontrast$3qIs,
        'heading': r134_heading,
        'unimportant': r134_unimportant,
        'important': r134_important,
        'alsothru': r134_alsothru,
        'alsothruthem': r134_alsothruthem,
        'bezcontrols': r134_bezcontrols,
        'quadcontrols': r134_quadcontrols,
        'archv': r134_archv,
        'arcvh': r134_arcvh,
        'complexThru': r134_complexThru,
        'dispiro': r134_dispiro,
        'spiro-outline': r134_xn$spirooutline$1aao,
        'union': r134_union,
        'intersection': r134_intersection,
        'difference': r134_difference
    };
};
