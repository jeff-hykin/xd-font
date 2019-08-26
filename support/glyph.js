'use strict';
var r1_Glyph, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16, r141_s;
var r1_isFinite = isFinite;
var r1_Point = require('./point');
var _r1_t8 = require('./transform');
var r1_Transform = _r1_t8;
var r1_tp = _r1_t8.transformPoint;
var r1_utp = _r1_t8.untransform;
var r1_inverse = _r1_t8.inverse;
var r1_Anchor = require('./anchor');
var r1_mix = function _r1_t9(r134_a, r134_b, r134_p) {
    return r134_a + (r134_b - r134_a) * r134_p;
};
var r1_ratio = function _r1_t10(r135_l, r135_r, r135_m) {
    return r135_l === r135_r ? 0 : (r135_m - r135_l) / (r135_r - r135_l);
};
var r1_byx = function _r1_t11(r136_a, r136_b) {
    return r136_a - r136_b;
};
var r1_fallback = function _r1_t12() {
    var _r137_t3;
    var _r137_t1 = arguments;
    var r137_j = 0;
    var _r137_t2 = r137_j < _r137_t1.length;
    for (; _r137_t2; _r137_t2 = r137_j < _r137_t1.length) {
        if (_r137_t1[r137_j] !== void 0)
            return _r137_t1[r137_j];
        _r137_t3 = r137_j = r137_j + 1;
    }
    return _r137_t3;
};
var r1_closepoint = function _r1_t13(r138_p, r138_q, r138_t) {
    return Math.abs(r138_p.x - r138_q.x) <= r138_t && Math.abs(r138_p.y - r138_q.y) <= r138_t;
};
var r1_oncurveRemovable = function _r1_t14(r139_a, r139_b, r139_c, r139_t) {
    var r139_xm = (r139_a.x + r139_c.x) / 2;
    var r139_ym = (r139_a.y + r139_c.y) / 2;
    return !r139_a.on && r139_b.on && !r139_c.on && !r139_a.cubic && !r139_c.cubic && (r139_a.x <= r139_b.x && r139_b.x <= r139_c.x || r139_a.x >= r139_b.x && r139_b.x >= r139_c.x) && (r139_a.y <= r139_b.y && r139_b.y <= r139_c.y || r139_a.y >= r139_b.y && r139_b.y >= r139_c.y) && Math.abs(r139_b.x - r139_xm) <= r139_t / 2 && Math.abs(r139_b.y - r139_ym) <= r139_t / 2;
};
var r1_PRECISION = 1000;
var r1_cov = function _r1_t15(r140_x) {
    if (r1_isFinite(r140_x))
        return Math.round(r140_x * r1_PRECISION) / r1_PRECISION;
    else
        return 0;
};
var r141_xs = module.exports;
module.exports = r1_Glyph = function _r1_t16(r143_Super) {
    var r143_Constructor = function _r143_t2() {
        return void 0;
    };
    var r143_Type = function _r143_t3() {
        var _r145_t0 = this;
        var _r145_t1 = arguments;
        r143_Constructor.apply(_r145_t0, _r145_t1);
        return void 0;
    };
    var r143_Symbol = Symbol;
    (function _r143_t4() {
        var r147_protectedTerms;
        var _r147_t0 = this;
        r143_Type.protectedTerms = r147_protectedTerms = Object.create(r143_Super.protectedTerms || null);
        r143_Constructor = function _r147_t2(r175_name) {
            var _r175_t0 = this;
            _r175_t0.name = r175_name;
            _r175_t0.unicode = [];
            _r175_t0.contours = [];
            _r175_t0.advanceWidth = 500;
            _r175_t0.cmpPriority = 0;
            _r175_t0.anchors = {};
            _r175_t0.gizmo = r1_Transform.Id();
            _r175_t0.dependencies = [];
            _r175_t0.defaultTag = null;
            return void 0;
        };
        r143_Type.is = {
            'unapply': function _r147_t3(r181_obj, r181_arity) {
                return r181_obj instanceof r1_Glyph ? [r181_obj] : null;
            }
        };
        r143_Type.prototype['set-width'] = function _r147_t4(r182_w) {
            var _r182_t0 = this;
            _r182_t0.advanceWidth = r182_w;
            return _r182_t0;
        };
        r143_Type.prototype['assign-unicode'] = function _r147_t5(r188_u) {
            var _r188_t0 = this;
            _r188_t0.unicode.push(typeof r188_u === 'string' ? r188_u.charCodeAt(0) : r188_u);
            return _r188_t0;
        };
        r143_Type.prototype['start-from'] = function _r147_t6(r194_x, r194_y) {
            var _r194_t0 = this;
            var r194_contour = [r1_Point.transformed(_r194_t0.gizmo, r194_x, r194_y, true)];
            r194_contour.tag = _r194_t0.defaultTag;
            _r194_t0.contours.push(r194_contour);
            return _r194_t0;
        };
        r143_Type.prototype.moveTo = _r147_t0['start-from'];
        r143_Type.prototype['line-to'] = function _r147_t7(r201_x, r201_y) {
            var _r201_t0 = this;
            _r201_t0.contours[_r201_t0.contours.length - 1].push(r1_Point.transformed(_r201_t0.gizmo, r201_x, r201_y, true));
            return _r201_t0;
        };
        r143_Type.prototype.lineTo = _r147_t0['line-to'];
        r143_Type.prototype['curve-control'] = function _r147_t8(r208_x, r208_y) {
            var _r208_t0 = this;
            _r208_t0.contours[_r208_t0.contours.length - 1].push(r1_tp(_r208_t0.gizmo, new r1_Point(r208_x, r208_y, false)));
            return _r208_t0;
        };
        r143_Type.prototype['curve-to'] = function _r147_t9(r214_xc, r214_yc, r214_x, r214_y) {
            var _r214_t0 = this;
            _r214_t0.contours[_r214_t0.contours.length - 1].push(r1_Point.transformed(_r214_t0.gizmo, r214_xc, r214_yc, false), r1_Point.transformed(_r214_t0.gizmo, r214_x, r214_y, true));
            return _r214_t0;
        };
        r143_Type.prototype.curveTo = _r147_t0['curve-to'];
        r143_Type.prototype['cubic-to'] = function _r147_t10(r221_x1, r221_y1, r221_x2, r221_y2, r221_x, r221_y) {
            var _r221_t0 = this;
            _r221_t0.contours[_r221_t0.contours.length - 1].push(r1_Point.transformed(_r221_t0.gizmo, r221_x1, r221_y1, false, true), r1_Point.transformed(_r221_t0.gizmo, r221_x2, r221_y2, false, true), r1_Point.transformed(_r221_t0.gizmo, r221_x, r221_y, true));
            return _r221_t0;
        };
        r143_Type.prototype.cubicTo = _r147_t0['cubic-to'];
        r143_Type.prototype['reverse-last'] = function _r147_t11() {
            var _r228_t0 = this;
            if (_r228_t0.contours && _r228_t0.contours[_r228_t0.contours.length - 1])
                _r228_t0.contours[_r228_t0.contours.length - 1] = _r228_t0.contours[_r228_t0.contours.length - 1].reverse();
            return _r228_t0;
        };
        r143_Type.prototype.reverseLast = _r147_t0['reverse-last'];
        r143_Type.prototype['tag-contour'] = function _r147_t12(r235_tag, r235_n) {
            var r235_lastContour;
            var _r235_t0 = this;
            if (_r235_t0.contours) {
                r235_lastContour = _r235_t0.contours[_r235_t0.contours.length - 1];
                if (r235_lastContour)
                    if (r235_tag)
                        r235_lastContour.tag = r235_tag;
            }
            return _r235_t0;
        };
        r143_Type.prototype['retag-contour'] = function _r147_t13(r241_oldtag, r241_newtag) {
            var r241_c, _r241_t0, _r241_t1, _r241_t2;
            var _r241_t3 = this;
            if (_r241_t3.contours) {
                _r241_t0 = _r241_t3.contours;
                _r241_t1 = _r241_t0.length;
                _r241_t2 = 0;
                for (; _r241_t2 < _r241_t1; _r241_t2 = _r241_t2 + 1) {
                    r241_c = _r241_t0[_r241_t2];
                    if (r241_c.tag === r241_oldtag)
                        r241_c.tag = r241_newtag;
                }
            }
            return _r241_t3;
        };
        r143_Type.prototype['eject-contour'] = function _r147_t14(r249_tag) {
            var _r249_t0 = this;
            _r249_t0.contours = _r249_t0.contours.filter(function _r249_t2(r255_c) {
                return r255_c.tag !== r249_tag;
            });
            return _r249_t0;
        };
        r143_Type.prototype['depends-on'] = function _r147_t15(r256_glyph) {
            var _r256_t0 = this;
            if (r256_glyph.name)
                _r256_t0.dependencies.push(r256_glyph.name);
            else if (r256_glyph.dependencies)
                _r256_t0.dependencies = _r256_t0.dependencies.concat(r256_glyph.dependencies);
            return _r256_t0;
        };
        r143_Type.prototype.include = function _r147_t16(r262_component, r262_copyAnchors, r262_copyWidth) {
            var r262_contours, r262_glyph, r262_markid, r262_anchorThis, r262_anchorThat, r262_newcontours, r262_contour, r262_c, r262_point, r262_k, _r262_t0, _r262_t1, _r262_t2, _r262_t3, _r262_t4, _r262_t5, _r262_t6, _r262_t7, _r262_t8, _r262_t9, _r262_t10, _r262_t11;
            var _r262_t12 = this;
            if (r262_component instanceof Function) {
                r262_t = _r262_t12.defaultTag;
                if (r262_component.tag)
                    _r262_t12.defaultTag = r262_component.tag;
                r262_component.call(_r262_t12);
                _r262_t12.defaultTag = r262_t;
                return _r262_t12;
            }
            if (r262_component instanceof r1_Transform)
                return _r262_t12['apply-transform'](r262_component, r262_copyAnchors);
            if (r262_component instanceof Array) {
                r262_contours = r262_component;
                r262_glyph = { 'contours': r262_contours };
            } else {
                r262_contours = r262_component.contours;
                r262_glyph = r262_component;
            }
            var r262_shiftx = 0;
            var r262_shifty = 0;
            var r262_t = _r262_t12;
            if (_r262_t12.anchors && r262_glyph.anchors) {
                _r262_t0 = Object.keys(_r262_t12.anchors);
                _r262_t1 = _r262_t0.length;
                _r262_t2 = 0;
                for (; _r262_t2 < _r262_t1; _r262_t2 = _r262_t2 + 1) {
                    r262_markid = _r262_t0[_r262_t2];
                    r262_anchorThis = _r262_t12.anchors[r262_markid];
                    r262_anchorThat = r262_glyph.anchors[r262_markid];
                    if (r262_anchorThis && (r262_anchorThis.type === r1_Anchor.BASE || r262_anchorThis.mbx !== void 0 && r262_anchorThis.mby !== void 0) && r262_anchorThat && r262_anchorThat.type === r1_Anchor.MARK) {
                        r262_shiftx = r1_fallback(r262_anchorThis.mbx, r262_anchorThis.x) - r262_anchorThat.x;
                        r262_shifty = r1_fallback(r262_anchorThis.mby, r262_anchorThis.y) - r262_anchorThat.y;
                        if (r262_anchorThat.mbx !== void 0 && r262_anchorThat.mby !== void 0)
                            if (r262_anchorThis.type === r1_Anchor.BASE)
                                _r262_t12.anchors[r262_markid] = new r1_Anchor(r262_anchorThis.x + r262_anchorThat.mbx - r262_anchorThat.x, r262_anchorThis.y + r262_anchorThat.mby - r262_anchorThat.y, r1_Anchor.BASE);
                            else
                                _r262_t12.anchors[r262_markid] = new r1_Anchor(r262_anchorThis.x, r262_anchorThis.y, r262_anchorThis.type, r262_anchorThis.mbx + r262_anchorThat.mbx - r262_anchorThat.x, r262_anchorThis.mby + r262_anchorThat.mby - r262_anchorThat.y);
                    }
                }
            }
            if (r262_contours) {
                r262_newcontours = [];
                _r262_t3 = r262_contours;
                _r262_t4 = _r262_t3.length;
                _r262_t5 = 0;
                for (; _r262_t5 < _r262_t4; _r262_t5 = _r262_t5 + 1) {
                    r262_contour = _r262_t3[_r262_t5];
                    r262_c = [];
                    r262_c.tag = r262_contour.tag || r262_component.tag || r262_t.defaultTag;
                    _r262_t6 = r262_contour;
                    _r262_t7 = _r262_t6.length;
                    _r262_t8 = 0;
                    for (; _r262_t8 < _r262_t7; _r262_t8 = _r262_t8 + 1) {
                        r262_point = _r262_t6[_r262_t8];
                        r262_c.push(new r1_Point(r262_point.x + r262_shiftx, r262_point.y + r262_shifty, r262_point.on, r262_point.cubic, r262_point.subdivided));
                    }
                    r262_newcontours.push(r262_c);
                }
                _r262_t12.contours = _r262_t12.contours.concat(r262_newcontours);
            }
            if ((!r262_contours || r262_copyAnchors) && r262_glyph.anchors) {
                _r262_t9 = Object.keys(r262_glyph.anchors);
                _r262_t10 = _r262_t9.length;
                _r262_t11 = 0;
                for (; _r262_t11 < _r262_t10; _r262_t11 = _r262_t11 + 1) {
                    r262_k = _r262_t9[_r262_t11];
                    _r262_t12.anchors[r262_k] = r262_glyph.anchors[r262_k];
                }
            }
            if (r262_glyph.advanceWidth >= 0 && r262_copyWidth)
                _r262_t12.advanceWidth = r262_glyph.advanceWidth;
            if (r262_glyph.name)
                _r262_t12.dependencies.push(r262_glyph.name);
            else if (r262_glyph.dependencies)
                _r262_t12.dependencies = _r262_t12.dependencies.concat(r262_glyph.dependencies);
            return _r262_t12;
        };
        r143_Type.prototype['apply-transform'] = function _r147_t17(r275_transform, r275_alsoAnchors) {
            var r275_c, r275_j, r275_key, _r275_t3, _r275_t4, _r275_t5, _r275_t6, _r275_t7;
            var _r275_t8 = this;
            var _r275_t0 = _r275_t8.contours;
            var _r275_t1 = _r275_t0.length;
            var _r275_t2 = 0;
            for (; _r275_t2 < _r275_t1; _r275_t2 = _r275_t2 + 1) {
                r275_c = _r275_t0[_r275_t2];
                _r275_t3 = 0;
                _r275_t4 = r275_c.length;
                r275_j = _r275_t3;
                for (; r275_j < _r275_t4; r275_j = r275_j + 1)
                    r275_c[r275_j] = r1_tp(r275_transform, r275_c[r275_j]);
            }
            if (r275_alsoAnchors) {
                _r275_t5 = Object.keys(_r275_t8.anchors);
                _r275_t6 = _r275_t5.length;
                _r275_t7 = 0;
                for (; _r275_t7 < _r275_t6; _r275_t7 = _r275_t7 + 1) {
                    r275_key = _r275_t5[_r275_t7];
                    _r275_t8.anchors[r275_key] = r1_Anchor.transform(r275_transform, _r275_t8.anchors[r275_key]);
                }
            }
            return _r275_t8;
        };
        r143_Type.prototype['set-anchor'] = function _r147_t18(r286_id, r286_type, r286_x, r286_y, r286_mbx, r286_mby) {
            var _r286_t1;
            var _r286_t2 = this;
            var _r286_t0 = r286_x;
            r286_x = r286_x * _r286_t2.gizmo.xx + r286_y * _r286_t2.gizmo.yx + _r286_t2.gizmo.x;
            r286_y = _r286_t0 * _r286_t2.gizmo.xy + r286_y * _r286_t2.gizmo.yy + _r286_t2.gizmo.y;
            if (r286_mbx !== void 0 && r286_mby !== void 0) {
                _r286_t1 = r286_mbx;
                r286_mbx = r286_mbx * _r286_t2.gizmo.xx + r286_mby * _r286_t2.gizmo.yx + _r286_t2.gizmo.x;
                r286_mby = _r286_t1 * _r286_t2.gizmo.xy + r286_mby * _r286_t2.gizmo.yy + _r286_t2.gizmo.y;
                _r286_t2.anchors[r286_id] = new r1_Anchor(r286_x, r286_y, r286_type, r286_mbx, r286_mby);
            } else
                _r286_t2.anchors[r286_id] = new r1_Anchor(r286_x, r286_y, r286_type);
            return _r286_t2;
        };
        r143_Type.contourToSVGPath = function _r147_t19(r294_contour, r294_delta) {
            var r294_lx, r294_ly, r294_buf, r294_j, r294_point, r294_zc, r294_zf, r294_x1, r294_y1, r294_x2, r294_y2, r294_z1, r294_z2, r294_z3, _r294_t0, _r294_t1, _r294_t2;
            if (r294_contour && r294_contour.length) {
                r294_lx = r294_contour[0].x;
                r294_ly = r294_contour[0].y;
                r294_buf = r294_delta ? '' : 'M ' + r1_cov(r294_lx) + ' ' + r1_cov(r294_ly);
                r294_j = 1;
                for (; r294_j < r294_contour.length; r294_j = r294_j + 1) {
                    r294_point = r294_contour[r294_j];
                    if (r294_point.on) {
                        if (r294_delta)
                            r294_buf = r294_buf + ('l ' + r1_cov(r294_point.x - r294_lx) + ' ' + r1_cov(r294_point.y - r294_ly));
                        else
                            r294_buf = r294_buf + ('L ' + r1_cov(r294_point.x) + ' ' + r1_cov(r294_point.y));
                        _r294_t2 = r294_point;
                        r294_lx = _r294_t2.x;
                        r294_ly = _r294_t2.y;
                    } else if (r294_point.cubic) {
                        r294_z1 = r294_point;
                        r294_z2 = r294_contour[r294_j + 1];
                        r294_z3 = r294_contour[r294_j + 2];
                        if (r294_delta)
                            r294_buf = r294_buf + ('c ' + r1_cov(r294_z1.x - r294_lx) + ' ' + r1_cov(r294_z1.y - r294_ly) + ' ' + r1_cov(r294_z2.x - r294_lx) + ' ' + r1_cov(r294_z2.y - r294_ly) + ' ' + r1_cov(r294_z3.x - r294_lx) + ' ' + r1_cov(r294_z3.y - r294_ly));
                        else
                            r294_buf = r294_buf + ('C ' + r1_cov(r294_z1.x) + ' ' + r1_cov(r294_z1.y) + ' ' + r1_cov(r294_z2.x) + ' ' + r1_cov(r294_z2.y) + ' ' + r1_cov(r294_z3.x) + ' ' + r1_cov(r294_z3.y));
                        _r294_t1 = r294_z3;
                        r294_lx = _r294_t1.x;
                        r294_ly = _r294_t1.y;
                        r294_j = r294_j + 2;
                    } else {
                        r294_zc = r294_point;
                        r294_zf = r294_contour[r294_j + 1] ? r294_contour[r294_j + 1] : r294_contour[0];
                        r294_x1 = r1_mix(r294_lx, r294_zc.x, 2 / 3);
                        r294_y1 = r1_mix(r294_ly, r294_zc.y, 2 / 3);
                        r294_x2 = r1_mix(r294_zf.x, r294_zc.x, 2 / 3);
                        r294_y2 = r1_mix(r294_zf.y, r294_zc.y, 2 / 3);
                        if (r294_delta)
                            r294_buf = r294_buf + ('c ' + r1_cov(r294_x1 - r294_lx) + ' ' + r1_cov(r294_y1 - r294_ly) + ' ' + r1_cov(r294_x2 - r294_lx) + ' ' + r1_cov(r294_y2 - r294_ly) + ' ' + r1_cov(r294_zf.x - r294_lx) + ' ' + r1_cov(r294_zf.y - r294_ly));
                        else
                            r294_buf = r294_buf + ('C ' + r1_cov(r294_x1) + ' ' + r1_cov(r294_y1) + ' ' + r1_cov(r294_x2) + ' ' + r1_cov(r294_y2) + ' ' + r1_cov(r294_zf.x) + ' ' + r1_cov(r294_zf.y));
                        _r294_t0 = r294_zf;
                        r294_lx = _r294_t0.x;
                        r294_ly = _r294_t0.y;
                        r294_j = r294_j + 1;
                    }
                }
                r294_buf = r294_buf + ' Z\n';
                return r294_buf;
            } else
                return void 0;
        };
        r143_Type.contourToStandardCubic = function _r147_t20(r295_contour) {
            var r295_point, r295_zc, r295_zf, r295_x1, r295_y1, r295_x2, r295_y2, r295_z1, r295_z2, r295_z3, _r295_t0, _r295_t1, _r295_t2;
            var r295_c = [];
            if (!r295_contour || !r295_contour.length)
                return r295_c;
            var r295_lx = r295_contour[0].x;
            var r295_ly = r295_contour[0].y;
            r295_c.push({
                'x': r295_lx,
                'y': r295_ly,
                'on': true
            });
            var r295_j = 1;
            for (; r295_j < r295_contour.length; r295_j = r295_j + 1) {
                r295_point = r295_contour[r295_j];
                if (r295_point.on) {
                    r295_c.push({
                        'x': r295_point.x,
                        'y': r295_point.y,
                        'on': true
                    });
                    _r295_t2 = r295_point;
                    r295_lx = _r295_t2.x;
                    r295_ly = _r295_t2.y;
                } else if (r295_point.cubic) {
                    r295_z1 = r295_point;
                    r295_z2 = r295_contour[r295_j + 1];
                    r295_z3 = r295_contour[r295_j + 2];
                    r295_c.push(new r1_Point(r295_z1.x, r295_z1.y, false, true, false));
                    r295_c.push(new r1_Point(r295_z2.x, r295_z2.y, false, true, false));
                    r295_c.push(new r1_Point(r295_z3.x, r295_z3.y, true, false, false));
                    _r295_t1 = r295_z3;
                    r295_lx = _r295_t1.x;
                    r295_ly = _r295_t1.y;
                    r295_j = r295_j + 2;
                } else {
                    r295_zc = r295_point;
                    r295_zf = r295_contour[r295_j + 1] ? r295_contour[r295_j + 1] : r295_contour[0];
                    r295_x1 = r1_mix(r295_lx, r295_zc.x, 2 / 3);
                    r295_y1 = r1_mix(r295_ly, r295_zc.y, 2 / 3);
                    r295_x2 = r1_mix(r295_zf.x, r295_zc.x, 2 / 3);
                    r295_y2 = r1_mix(r295_zf.y, r295_zc.y, 2 / 3);
                    r295_c.push(new r1_Point(r295_x1, r295_y1, false, true, false));
                    r295_c.push(new r1_Point(r295_x2, r295_y2, false, true, false));
                    r295_c.push(new r1_Point(r295_zf.x, r295_zf.y, true, false, false));
                    _r295_t0 = r295_zf;
                    r295_lx = _r295_t0.x;
                    r295_ly = _r295_t0.y;
                    r295_j = r295_j + 1;
                }
            }
            return r295_c;
        };
        return void 0;
    }.call(r143_Type.prototype));
    return r143_Type;
}(Object);
var _r141_t0 = Object.keys(r141_xs);
var _r141_t1 = _r141_t0.length;
var _r141_t2 = 0;
for (; _r141_t2 < _r141_t1; _r141_t2 = _r141_t2 + 1) {
    r141_s = _r141_t0[_r141_t2];
    module.exports[r141_s] = r141_xs[r141_s];
}
