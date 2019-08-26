'use strict';
var r1_mix, r1_barmixL, r1_barmixM, r1_barmixR, r1_linreg, r1_clamp, r1_fallback, r1_TempFont, r1_includeGlyphPart, r1_compsiteMarkSet, r1_suggestGC, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16, _r1_t17, _r1_t18, _r1_t19;
var r1_Anchor = require('./anchor');
var _r1_t8 = require('./transform');
var r1_Transform = _r1_t8;
var r1_tp = _r1_t8.transformPoint;
var r1_utp = _r1_t8.untransform;
var r1_inverse = _r1_t8.inverse;
exports.mix = r1_mix = function _r1_t9(r127_a, r127_b, r127_p) {
    return r127_a + (r127_b - r127_a) * r127_p;
};
exports.barmixL = r1_barmixL = function _r1_t10(r129_l, r129_r, r129_b, r129_p) {
    return r129_l > r129_r ? r1_barmixL(r129_r, r129_l, r129_b, r129_p) : r129_l + r129_b + r129_p * (r129_r - r129_l - r129_b * 3);
};
exports.barmixM = r1_barmixM = function _r1_t11(r131_l, r131_r, r131_b, r131_p) {
    return r1_barmixL(r131_l, r131_r, r131_b, r131_p) + r131_b / 2;
};
exports.barmixR = r1_barmixR = function _r1_t12(r133_l, r133_r, r133_b, r133_p) {
    return r1_barmixR(r133_l, r133_r, r133_b, r133_p) + r133_b;
};
exports.linreg = r1_linreg = function _r1_t13(r135_x0, r135_y0, r135_x1, r135_y1, r135_x) {
    return r135_y0 + (r135_x - r135_x0) * (r135_y1 - r135_y0) / (r135_x1 - r135_x0);
};
exports.clamp = r1_clamp = function _r1_t14(r137_l, r137_h, r137_x) {
    return r137_x < r137_l ? r137_l : r137_x > r137_h ? r137_h : r137_x;
};
exports.fallback = r1_fallback = function _r1_t15() {
    var _r139_t1 = arguments;
    var r139_j = 0;
    for (; r139_j < arguments.length; r139_j = r139_j + 1)
        if (_r139_t1[r139_j] !== void 0)
            return _r139_t1[r139_j];
    return void 0;
};
exports.TempFont = r1_TempFont = function _r1_t16() {
    return {
        'glyf': [],
        'head': {},
        'hhea': {},
        'OS_2': { 'panose': [] },
        'name': {},
        'post': {}
    };
};
exports.includeGlyphPart = r1_includeGlyphPart = function _r1_t17(r143_cg, r143_gs, r143_nm) {
    var _r143_t1 = arguments;
    if (!r143_gs[r143_nm])
        throw new Error('Glyph ' + r143_nm + ' is not defined, which is used for ' + r143_cg.name + '.');
    return r143_cg.include.apply(r143_cg, [r143_gs[r143_nm]].concat([].slice.call(_r143_t1, 3)));
};
exports.compsiteMarkSet = r1_compsiteMarkSet = function _r1_t18() {
    var r145_a, r145_k, _r145_t3, _r145_t4, _r145_t5;
    var _r145_t7 = arguments;
    var r145_h = {};
    var _r145_t0 = _r145_t7;
    var _r145_t1 = _r145_t0.length;
    var _r145_t2 = 0;
    for (; _r145_t2 < _r145_t1; _r145_t2 = _r145_t2 + 1) {
        r145_a = _r145_t0[_r145_t2];
        _r145_t3 = Object.keys(r145_a.anchors);
        _r145_t4 = _r145_t3.length;
        _r145_t5 = 0;
        for (; _r145_t5 < _r145_t4; _r145_t5 = _r145_t5 + 1) {
            r145_k = _r145_t3[_r145_t5];
            r145_h[r145_k] = new r1_Anchor(r145_a.anchors[r145_k].x, r145_a.anchors[r145_k].y, r145_a.anchors[r145_k].type, r145_a.anchors[r145_k].mbx, r145_a.anchors[r145_k].mby);
        }
    }
    return { 'anchors': r145_h };
};
var r1_global = global;
exports.suggestGC = r1_suggestGC = function _r1_t19() {
    if (r1_global && r1_global.gc)
        r1_global.gc();
    return void 0;
};
