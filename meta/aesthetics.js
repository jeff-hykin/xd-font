'use strict';
var r1_calculateMetrics, r1_setFontMetrics, r1_designParameters, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10, _r1_t11;
var r1_Point = require('../support/point');
var _r1_t8 = require('../support/transform');
var r1_Transform = _r1_t8;
var r1_tp = _r1_t8.transformPoint;
var r1_utp = _r1_t8.untransform;
var r1_inverse = _r1_t8.inverse;
var _r1_t9 = require('../support/utils');
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
exports.calculateMetrics = r1_calculateMetrics = function _r1_t10(r128_para) {
    var r128_UPM = 1000;
    var r128_WIDTH = r128_para.width;
    var r128_SB = r128_para.sb;
    var r128_CAP = r128_para.cap;
    var r128_XH = r128_para.xheight;
    var r128_DESCENDER = r1_fallback(r128_para.descender, r128_XH - r128_CAP);
    var r128_CONTRAST = r1_fallback(r128_para.contrast, 1);
    var r128_symbolMid = r1_fallback(r128_para.symbolMid, r128_XH * 0.65);
    var r128_parenTop = r128_symbolMid + r128_para.parenSize / 2;
    var r128_parenBot = r128_symbolMid - r128_para.parenSize / 2;
    var r128_operTop = r128_symbolMid + r128_para.operSize / 2;
    var r128_operBot = r128_symbolMid - r128_para.operSize / 2;
    var r128_tackTop = r128_symbolMid + r128_para.tackSize / 2;
    var r128_tackBot = r128_symbolMid - r128_para.tackSize / 2;
    var r128_plusTop = r128_symbolMid + (r128_WIDTH - r128_SB * 2) * 0.55;
    var r128_plusBot = r128_symbolMid - (r128_WIDTH - r128_SB * 2) * 0.55;
    var r128_Italify = function _r128_t2(r129_angle, r129_shift) {
        var r129_slope = Math.tan(r1_fallback(r129_angle, r128_para.slantAngle) / 180 * Math.PI);
        return new r1_Transform(1, r129_slope, 0, 1, r1_fallback(r129_shift, -r129_slope * r128_symbolMid), 0);
    };
    var r128_Upright = function _r128_t3(r130_angle, r130_shift) {
        return r128_Italify(r130_angle, r130_shift).inverse();
    };
    var r128_Scale = function _r128_t4(r131_sx, r131_sy) {
        return new r1_Transform(r131_sx, 0, 0, r1_fallback(r131_sy, r131_sx), 0, 0);
    };
    var r128_Translate = function _r128_t5(r132_x, r132_y) {
        return new r1_Transform(1, 0, 0, 1, r132_x, r132_y);
    };
    var r128_Rotate = function _r128_t6(r133_angle) {
        return new r1_Transform(Math.cos(r133_angle), -Math.sin(r133_angle), Math.sin(r133_angle), Math.cos(r133_angle), 0, 0);
    };
    var r128_globalTransform = r128_Italify(r128_para.slantAngle);
    var r128_TANSLANT = r128_globalTransform.yx;
    var r128_SINSLANT = Math.sin(r128_para.slantAngle / 180 * Math.PI);
    var r128_COSSLANT = Math.cos(r128_para.slantAngle / 180 * Math.PI);
    var r128_HVCONTRAST = r128_CONTRAST * r128_COSSLANT + r128_SINSLANT * r128_TANSLANT;
    var r128_UPWARD = new r1_Point(-r128_HVCONTRAST, 0);
    var r128_DOWNWARD = new r1_Point(r128_HVCONTRAST, 0);
    var r128_RIGHTWARD = new r1_Point(r128_TANSLANT, 1);
    var r128_LEFTWARD = new r1_Point(-r128_TANSLANT, -1);
    var r128_Upward = function _r128_t7() {
        return new r1_Point(-r128_HVCONTRAST, 0);
    };
    var r128_Downward = function _r128_t8() {
        return new r1_Point(r128_HVCONTRAST, 0);
    };
    var r128_Rightward = function _r128_t9() {
        var _r136_t0 = this;
        return new r1_Point(_r136_t0.gizmo.yx, 1);
    };
    var r128_Leftward = function _r128_t10() {
        var _r137_t0 = this;
        return new r1_Point(-_r137_t0.gizmo.yx, -1);
    };
    var r128_O = r128_para.overshoot;
    var r128_OX = r128_para.overshootx;
    var r128_OXHOOK = r128_para.oxhook;
    var r128_HOOK = r128_para.hook;
    var r128_AHOOK = r128_para.ahook;
    var r128_SHOOK = r128_para.shook;
    var r128_RHOOK = r128_para.rhook;
    var r128_JHOOK = r128_para.jhook;
    var r128_FHOOK = r128_para.fhook;
    var r128_HOOKX = r128_para.hookx;
    var r128_SMOOTH = r128_para.smooth;
    var r128_SMALLSMOOTH = r128_para.smallsmooth;
    var r128_STROKE = r128_para.stroke;
    var r128_DOTSIZE = r1_fallback(r128_para.dotsize, r128_STROKE);
    var r128_PERIODSIZE = r1_fallback(r128_para.periodsize, r128_DOTSIZE);
    var r128_BARPOS = r1_fallback(r128_para.barpos, 0.5);
    var r128_GBARPOS = r1_fallback(r128_para.gbarpos, 0.5);
    var r128_PBARPOS = r1_fallback(r128_para.pbarpos, 0.5);
    var r128_EBARPOS = r1_fallback(r128_para.ebarpos, r128_BARPOS);
    var r128_OVERLAYPOS = r128_para.overlaypos;
    var r128_FIVEBARPOS = r128_para.fivebarpos;
    var r128_LONGJUT = r128_para.longjut;
    var r128_JUT = r128_para.jut;
    var r128_VJUT = r128_para.vjut;
    var r128_ACCENT = r128_para.accent;
    var r128_ACCENTX = r128_para.accentx;
    var r128_CTHIN = r1_fallback(r128_para.cthin, 0.75);
    var r128_CTHINB = r1_fallback(r128_para.cthinb, 0.5);
    var r128_SLAB = r128_para.slab;
    var r128_TAILADJX = r128_WIDTH * 0.2;
    var r128_TAILADJY = r128_XH * 0.25;
    var r128_LBALANCE = r128_LONGJUT * 0.04;
    var r128_IBALANCE = r1_fallback(r128_para.ibalance, r128_LONGJUT * 0.04);
    var r128_LBALANCE2 = r128_LONGJUT * 0.14;
    var r128_IBALANCE2 = r1_fallback(r128_para.ibalance, r128_LONGJUT * 0.14);
    var r128_JBALANCE = r1_fallback(r128_para.jbalance, 0);
    var r128_JBALANCE2 = r1_fallback(r128_para.jbalance2, r128_STROKE * 0.25 + r128_LBALANCE);
    var r128_TBALANCE = r1_fallback(r128_para.tbalance, r128_JBALANCE);
    var r128_TBALANCE2 = r1_fallback(r128_para.tbalance2, r128_TBALANCE);
    var r128_RBALANCE = r1_fallback(r128_para.rbalance, r128_JBALANCE * 0.3);
    var r128_RBALANCE2 = r1_fallback(r128_para.rbalance2, 0);
    var r128_FBALANCE = r1_fallback(r128_para.fbalance, 0);
    var r128_ONEBALANCE = r1_fallback(r128_para.onebalance, 0);
    var r128_NO_DIVERSITY = r128_para.diversityM === 1 && r128_para.diversityF === 1 && r128_para.diversityI === 1 && r128_para.diversityII === 1;
    var r128_fullWidthRaw = r128_NO_DIVERSITY ? r128_WIDTH * 2 : r128_UPM;
    var r128_FULLWIDTH = r128_para.spacing >= 2 ? r128_fullWidthRaw : r128_WIDTH;
    var r128_FULLWIDTH1 = r128_para.spacing >= 1 ? r128_fullWidthRaw : r128_WIDTH;
    var r128_FULLWIDTH2 = r128_para.spacing >= 2 ? r128_fullWidthRaw : r128_WIDTH;
    var r128_FULLWIDTH3 = r128_para.spacing >= 3 ? r128_fullWidthRaw : r128_WIDTH;
    var r128_OXE = r128_OX - r128_O;
    var r128_ESS = r128_STROKE * r1_fallback(r128_para.essx, r128_CONTRAST);
    var r128_ESSQUESTION = r128_STROKE * r1_fallback(r128_para.essxq, r128_CONTRAST);
    var r128_XO = r128_XH - r128_O;
    var r128_CAPO = r128_CAP - r128_O;
    var r128_HALFSTROKE = r128_STROKE / 2;
    var r128_RIGHTSB = r128_WIDTH - r128_SB;
    var r128_FWRSB = r128_FULLWIDTH - r128_SB;
    var r128_MIDDLE = r128_WIDTH / 2;
    var r128_FWMIDDLE = r128_FULLWIDTH / 2;
    var r128_CAPMIDDLE = r128_CAP / 2;
    var r128_CAP_SMOOTH = r128_CAP - r128_SMOOTH;
    var r128_DOTRADIUS = r128_DOTSIZE / 2;
    var r128_PERIODRADIUS = r128_PERIODSIZE / 2;
    var r128_SIDEJUT = r128_JUT - r128_HALFSTROKE * r128_HVCONTRAST;
    var r128_SMOOTHA = r128_SMOOTH - r128_TANSLANT * r128_para.smoothadjust;
    var r128_SMOOTHB = r128_SMOOTH + r128_TANSLANT * r128_para.smoothadjust;
    var r128_SMALLSMOOTHA = r128_SMALLSMOOTH - r128_TANSLANT * r128_para.smoothadjust;
    var r128_SMALLSMOOTHB = r128_SMALLSMOOTH + r128_TANSLANT * r128_para.smoothadjust;
    var r128_CORRECTION_OMIDX = r128_TANSLANT * r1_linreg(18, 1.3, 126, 0.9, r128_STROKE);
    var r128_CORRECTION_OMIDS = r128_STROKE * r128_CORRECTION_OMIDX;
    var r128_WHITENESS = (r128_XH - r128_STROKE * 3) * (r128_RIGHTSB - r128_SB) * (1 / 3) / (r128_XH * (r128_RIGHTSB - r128_SB));
    var r128_adviceBlackness = function _r128_t11(r138_crowdedness, r138_div) {
        return Math.min(r128_STROKE, (r128_WIDTH * r1_fallback(r138_div, 1) - r128_SB * 2) * (1 - r128_WHITENESS) / (r138_crowdedness * r128_HVCONTRAST));
    };
    var r128_adviceBlackness2 = function _r128_t12(r139_cowX, r139_cowY, r139_refH, r139_div) {
        return Math.min(r128_adviceBlackness(r139_cowX, r139_refH / r128_WIDTH), r128_adviceBlackness(r139_cowY, r139_div));
    };
    var r128_MVERTSTROKE_D = function _r128_t13(r140_div) {
        return r128_adviceBlackness(r1_fallback(r128_para.lllcrowdedness, 3 + 1 / 3), r140_div);
    };
    var r128_MVERTSTROKE = r128_MVERTSTROKE_D(1);
    var r128_OVERLAYSTROKE = r128_adviceBlackness(3.75);
    var r128_OPERATORSTROKE = r128_adviceBlackness(3.2);
    var r128_GEOMETRYSTROKE = r128_adviceBlackness(4.5);
    var r128_SHOULDERFINE = r128_para.shoulderfine ? r128_STROKE * r128_para.shoulderfine : r128_adviceBlackness(10);
    var r128_SUPERNESS = r1_fallback(r128_para.superness, 2);
    var r128_superxy = function _r128_t14(r141_x) {
        return Math.pow(1 - Math.pow(r141_x, r128_SUPERNESS), 1 / r128_SUPERNESS);
    };
    var r128_adviceSSmooth = function _r128_t15(r142_y, r142_sign, r142__stroke) {
        var r142_stroke = r1_fallback(r142__stroke, r128_STROKE);
        var r142_ss = r142_y * 0.21 + r142_stroke * 0.22 * r1_clamp(1, 2, r1_linreg(126, 1, 137, 1.025, r142_stroke)) + 0.035 * (r128_RIGHTSB - r128_SB);
        return r142_ss + r142_sign * r128_TANSLANT * r128_para.smoothadjust * (r142_ss / r128_SMALLSMOOTH);
    };
    var r128_adviceGlottalStopSmooth = function _r128_t16(r143_y, r143_sign) {
        return (r143_y - r128_STROKE) * 0.24 + r128_STROKE * 0.625 + r143_sign * r128_TANSLANT * r128_para.smoothadjust;
    };
    var r128_shoulderMidSlope = function _r128_t17(r144__fine, r144__stroke, r144__dir) {
        return 0.5 * r128_HVCONTRAST * (r1_fallback(r144__stroke, r128_STROKE) - r1_fallback(r144__fine, r128_SHOULDERFINE)) / r1_fallback(r144__stroke, r128_STROKE) + r1_fallback(r144__dir, 1) * r128_TANSLANT;
    };
    return {
        'UPM': r128_UPM,
        'WIDTH': r128_WIDTH,
        'SB': r128_SB,
        'CAP': r128_CAP,
        'XH': r128_XH,
        'DESCENDER': r128_DESCENDER,
        'CONTRAST': r128_CONTRAST,
        'symbolMid': r128_symbolMid,
        'parenTop': r128_parenTop,
        'parenBot': r128_parenBot,
        'operTop': r128_operTop,
        'operBot': r128_operBot,
        'tackTop': r128_tackTop,
        'tackBot': r128_tackBot,
        'plusTop': r128_plusTop,
        'plusBot': r128_plusBot,
        'Italify': r128_Italify,
        'Upright': r128_Upright,
        'Scale': r128_Scale,
        'Translate': r128_Translate,
        'Rotate': r128_Rotate,
        'globalTransform': r128_globalTransform,
        'TANSLANT': r128_TANSLANT,
        'SINSLANT': r128_SINSLANT,
        'COSSLANT': r128_COSSLANT,
        'HVCONTRAST': r128_HVCONTRAST,
        'UPWARD': r128_UPWARD,
        'DOWNWARD': r128_DOWNWARD,
        'RIGHTWARD': r128_RIGHTWARD,
        'LEFTWARD': r128_LEFTWARD,
        'Upward': r128_Upward,
        'Downward': r128_Downward,
        'Leftward': r128_Leftward,
        'Rightward': r128_Rightward,
        'O': r128_O,
        'OX': r128_OX,
        'OXHOOK': r128_OXHOOK,
        'HOOK': r128_HOOK,
        'AHOOK': r128_AHOOK,
        'SHOOK': r128_SHOOK,
        'RHOOK': r128_RHOOK,
        'JHOOK': r128_JHOOK,
        'FHOOK': r128_FHOOK,
        'HOOKX': r128_HOOKX,
        'SMOOTH': r128_SMOOTH,
        'SMALLSMOOTH': r128_SMALLSMOOTH,
        'STROKE': r128_STROKE,
        'DOTSIZE': r128_DOTSIZE,
        'PERIODSIZE': r128_PERIODSIZE,
        'BARPOS': r128_BARPOS,
        'GBARPOS': r128_GBARPOS,
        'PBARPOS': r128_PBARPOS,
        'EBARPOS': r128_EBARPOS,
        'OVERLAYPOS': r128_OVERLAYPOS,
        'FIVEBARPOS': r128_FIVEBARPOS,
        'LONGJUT': r128_LONGJUT,
        'JUT': r128_JUT,
        'VJUT': r128_VJUT,
        'ACCENT': r128_ACCENT,
        'ACCENTX': r128_ACCENTX,
        'CTHIN': r128_CTHIN,
        'CTHINB': r128_CTHINB,
        'SLAB': r128_SLAB,
        'TAILADJX': r128_TAILADJX,
        'TAILADJY': r128_TAILADJY,
        'LBALANCE': r128_LBALANCE,
        'IBALANCE': r128_IBALANCE,
        'LBALANCE2': r128_LBALANCE2,
        'IBALANCE2': r128_IBALANCE2,
        'JBALANCE': r128_JBALANCE,
        'JBALANCE2': r128_JBALANCE2,
        'TBALANCE': r128_TBALANCE,
        'TBALANCE2': r128_TBALANCE2,
        'RBALANCE': r128_RBALANCE,
        'RBALANCE2': r128_RBALANCE2,
        'FBALANCE': r128_FBALANCE,
        'ONEBALANCE': r128_ONEBALANCE,
        'FULLWIDTH': r128_FULLWIDTH,
        'FULLWIDTH1': r128_FULLWIDTH1,
        'FULLWIDTH2': r128_FULLWIDTH2,
        'FULLWIDTH3': r128_FULLWIDTH3,
        'OXE': r128_OXE,
        'ESS': r128_ESS,
        'ESSQUESTION': r128_ESSQUESTION,
        'XO': r128_XO,
        'CAPO': r128_CAPO,
        'HALFSTROKE': r128_HALFSTROKE,
        'RIGHTSB': r128_RIGHTSB,
        'FWRSB': r128_FWRSB,
        'MIDDLE': r128_MIDDLE,
        'FWMIDDLE': r128_FWMIDDLE,
        'CAPMIDDLE': r128_CAPMIDDLE,
        'CAP_SMOOTH': r128_CAP_SMOOTH,
        'DOTRADIUS': r128_DOTRADIUS,
        'PERIODRADIUS': r128_PERIODRADIUS,
        'SIDEJUT': r128_SIDEJUT,
        'SMOOTHA': r128_SMOOTHA,
        'SMOOTHB': r128_SMOOTHB,
        'SMALLSMOOTHA': r128_SMALLSMOOTHA,
        'SMALLSMOOTHB': r128_SMALLSMOOTHB,
        'CORRECTION_OMIDX': r128_CORRECTION_OMIDX,
        'CORRECTION_OMIDS': r128_CORRECTION_OMIDS,
        'WHITENESS': r128_WHITENESS,
        'adviceBlackness': r128_adviceBlackness,
        'adviceBlackness2': r128_adviceBlackness2,
        'MVERTSTROKE': r128_MVERTSTROKE,
        'MVERTSTROKE_D': r128_MVERTSTROKE_D,
        'OVERLAYSTROKE': r128_OVERLAYSTROKE,
        'OPERATORSTROKE': r128_OPERATORSTROKE,
        'GEOMETRYSTROKE': r128_GEOMETRYSTROKE,
        'SHOULDERFINE': r128_SHOULDERFINE,
        'SUPERNESS': r128_SUPERNESS,
        'superxy': r128_superxy,
        'adviceSSmooth': r128_adviceSSmooth,
        'adviceGlottalStopSmooth': r128_adviceGlottalStopSmooth,
        'shoulderMidSlope': r128_shoulderMidSlope
    };
};
exports.setFontMetrics = r1_setFontMetrics = function _r1_t11(r146_para, r146_metrics, r146_font) {
    var _r146_t0 = r146_metrics;
    var r146_CAP = _r146_t0.CAP;
    var r146_DESCENDER = _r146_t0.DESCENDER;
    var r146_XH = _r146_t0.XH;
    var r146_WIDTH = _r146_t0.WIDTH;
    var r146_asc = r146_para.leading * r146_CAP / (r146_CAP - r146_DESCENDER);
    var r146_desc = r146_para.leading * r146_DESCENDER / (r146_CAP - r146_DESCENDER);
    var r146_descenderPad = r1_fallback(r146_para.descenderPad, 0);
    var r146_winMetricPad = r1_fallback(r146_para.winMetricPad, 0);
    r146_font.OS_2.xAvgCharWidth = r146_WIDTH;
    r146_font.head.unitsPerEm = 1000;
    r146_font.hhea.ascender = r146_asc;
    r146_font.OS_2.usWinAscent = r146_asc;
    r146_font.OS_2.sTypoAscender = r146_asc;
    r146_font.hhea.descender = r146_DESCENDER - r146_descenderPad;
    r146_font.OS_2.usWinDescent = Math.abs(r146_desc) + r146_descenderPad + r146_winMetricPad;
    r146_font.OS_2.sTypoDescender = r146_desc - r146_descenderPad + r146_winMetricPad;
    r146_font.hhea.lineGap = 0;
    r146_font.OS_2.sTypoLineGap = 0;
    r146_font.OS_2.sxHeight = r146_XH;
    r146_font.OS_2.sCapHeight = r146_CAP;
    return r146_font.post.italicAngle = 0 - r146_para.slantAngle;
};
exports.designParameters = r1_designParameters = {
    'equal_wideness': 0.1,
    'logic_narrow_shrink': 0.75,
    'geometric_large_x': 1 + 2 / 3,
    'geometric_small_x': 3 / 5,
    'arrow_size': 3 / 8,
    'parenOutside': 0.2,
    'parenInside': 0.9,
    'parenCurliness': 0.7,
    'parenOvershoot': 0.0375,
    'bracketOutside': 0.1,
    'bracketInside': 0.95,
    'braceOutside': 0.05,
    'braceInside': 0.95,
    'braceCurlyM1': 0.6,
    'braceCurlyM2': 0.45,
    'braceOvershoot': 0.02
};
