'use strict';
var r1_apply, _r1_t1, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t12, _r1_t13, _r1_t14, _r1_t15;
var _r1_t0 = function (o) {
    var a = [];
    for (var k in o)
        a.push(k);
    return a;
};
var _r1_t2 = function _r1_t12(r256_t) {
    var r256_n, r256_i, r256_a, _r256_t3, _r256_t4, _r256_t7, _r256_t9, _r256_t10, _r256_t11, _r256_t12, _r256_t13, _r256_t16, _r256_t18, _r256_t19, _r256_t20, _r256_t21, _r256_t22, _r256_t25;
    var _r256_t0 = function () {
        _r256_t7 = function (_r256_t8) {
            _r256_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r256_t8
            };
        };
        _r256_t9 = r256_t instanceof Array;
        if (_r256_t9) {
            _r256_t10 = r256_n = r256_t.length;
            _r256_t11 = r256_i = 0;
            _r256_t12 = function (_r256_t14) {
                return _r256_t7(_r256_t14);
            };
            _r256_t13 = function (_r256_t15) {
                _r256_t16 = r256_i < r256_n;
                if (_r256_t16) {
                    _r256_t0 = function (_r256_t17) {
                        return _r256_t13(r256_i = r256_i + 1);
                    };
                    return {
                        'value': [
                            r256_i,
                            r256_t[r256_i]
                        ],
                        'done': false
                    };
                } else
                    return _r256_t12(_r256_t15);
            };
            return _r256_t13();
        } else {
            _r256_t18 = r256_a = Object.keys(r256_t);
            _r256_t19 = r256_n = r256_a.length;
            _r256_t20 = r256_i = 0;
            _r256_t21 = function (_r256_t23) {
                return _r256_t7(_r256_t23);
            };
            _r256_t22 = function (_r256_t24) {
                _r256_t25 = r256_i < r256_n;
                if (_r256_t25) {
                    _r256_t0 = function (_r256_t26) {
                        return _r256_t22(r256_i = r256_i + 1);
                    };
                    return {
                        'value': [
                            r256_a[r256_i],
                            r256_t[r256_a[r256_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r256_t21(_r256_t24);
            };
            return _r256_t22();
        }
    };
    var _r256_t1 = function (x) {
        try {
            return _r256_t0(x);
        } catch (ex) {
            return _r256_t2(ex);
        }
    };
    var _r256_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t12)
        _r256_t3 = this;
    else {
        _r256_t4 = function () {
        };
        _r256_t4.prototype = _r1_t12.prototype;
        _r256_t3 = new _r256_t4();
    }
    _r256_t3[Symbol.iterator] = function () {
        return _r256_t3;
    };
    _r256_t3.next = _r256_t1;
    _r256_t3.throw = function (x) {
        return _r256_t2(x);
    };
    return _r256_t3;
};
var _r1_t3 = function _r1_t13(r590_t) {
    var r590_a, r590_n, r590_i, _r590_t3, _r590_t4, _r590_t7, _r590_t8, _r590_t9, _r590_t10, _r590_t11, _r590_t14;
    var _r590_t0 = function () {
        _r590_t7 = r590_a = _r1_t0(r590_t);
        _r590_t8 = r590_n = r590_a.length;
        _r590_t9 = r590_i = 0;
        _r590_t10 = function (_r590_t12) {
            _r590_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r590_t12
            };
        };
        _r590_t11 = function (_r590_t13) {
            _r590_t14 = r590_i < r590_n;
            if (_r590_t14) {
                _r590_t0 = function (_r590_t15) {
                    return _r590_t11(r590_i = r590_i + 1);
                };
                return {
                    'value': [
                        r590_a[r590_i],
                        r590_t[r590_a[r590_i]]
                    ],
                    'done': false
                };
            } else
                return _r590_t10(_r590_t13);
        };
        return _r590_t11();
    };
    var _r590_t1 = function (x) {
        try {
            return _r590_t0(x);
        } catch (ex) {
            return _r590_t2(ex);
        }
    };
    var _r590_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t13)
        _r590_t3 = this;
    else {
        _r590_t4 = function () {
        };
        _r590_t4.prototype = _r1_t13.prototype;
        _r590_t3 = new _r590_t4();
    }
    _r590_t3[Symbol.iterator] = function () {
        return _r590_t3;
    };
    _r590_t3.next = _r590_t1;
    _r590_t3.throw = function (x) {
        return _r590_t2(x);
    };
    return _r590_t3;
};
var _r1_class8 = function _r1_t14(r150_x, r150_y) {
    var _r150_t0 = this;
    _r150_t0.x = r150_x;
    _r150_t0.y = r150_y;
    return void 0;
};
var _r1_t9 = require('../support/transform');
var r1_Transform = _r1_t9;
var r1_tp = _r1_t9.transformPoint;
var r1_utp = _r1_t9.untransform;
var r1_inverse = _r1_t9.inverse;
var r1_fairify = require('../support/fairify');
var _r1_t10 = require('../support/utils');
var r1_mix = _r1_t10.mix;
var r1_linreg = _r1_t10.linreg;
var r1_clamp = _r1_t10.clamp;
var r1_fallback = _r1_t10.fallback;
var _r1_t11 = require('../meta/aesthetics');
var r1_designParameters = _r1_t11.designParameters;
exports.apply = r1_apply = function _r1_t15() {
    var _r251_t3 = this;
    var r251_xn$capture$2Lrc = _r251_t3;
    var _r251_t0 = r251_xn$capture$2Lrc;
    var r251_metrics = _r251_t0.metrics;
    var r251_xn$NamedParameterPair$2Lrc9b = _r251_t0['$NamedParameterPair$'];
    var r251_xn$donothing$2Lrc0b = _r251_t0['$donothing$'];
    var r251_para = _r251_t0.para;
    var r251_recursive = _r251_t0.recursive;
    var r251_recursiveCodes = _r251_t0.recursiveCodes;
    var r251_variantSelector = _r251_t0.variantSelector;
    var r251_font = _r251_t0.font;
    var r251_glyphs = _r251_t0.glyphs;
    var r251_glyphList = _r251_t0.glyphList;
    var r251_unicodeGlyphs = _r251_t0.unicodeGlyphs;
    var r251_xn$createglyph$7Hrq = _r251_t0['create-glyph'];
    var r251_xn$save$2Lrc5 = _r251_t0['$save$'];
    var r251_xn$saveglyph$5sIl = _r251_t0['save-glyph'];
    var r251_spirofns = _r251_t0.spirofns;
    var r251_markset = _r251_t0.markset;
    var r251_MARK = _r251_t0.MARK;
    var r251_BASE = _r251_t0.BASE;
    var r251_AS_BASE = _r251_t0.AS_BASE;
    var r251_ALSO_METRICS = _r251_t0.ALSO_METRICS;
    var r251_pickHash = _r251_t0.pickHash;
    var r251_dependencyProfile = _r251_t0.dependencyProfile;
    var r251_getDependencyProfile = _r251_t0.getDependencyProfile;
    var r251_buildFont = _r251_t0.buildFont;
    var r251_newtemp = _r251_t0.newtemp;
    var r251_tagged = _r251_t0.tagged;
    var r251_TempFont = _r251_t0.TempFont;
    var r251_includeGlyphPart = _r251_t0.includeGlyphPart;
    var r251_compsiteMarkSet = _r251_t0.compsiteMarkSet;
    var r251_MarksetDiv = _r251_t0.MarksetDiv;
    var r251_DivFrame = _r251_t0.DivFrame;
    var _r251_t1 = r251_metrics;
    var r251_UPM = _r251_t1.UPM;
    var r251_WIDTH = _r251_t1.WIDTH;
    var r251_SB = _r251_t1.SB;
    var r251_CAP = _r251_t1.CAP;
    var r251_XH = _r251_t1.XH;
    var r251_DESCENDER = _r251_t1.DESCENDER;
    var r251_CONTRAST = _r251_t1.CONTRAST;
    var r251_symbolMid = _r251_t1.symbolMid;
    var r251_parenTop = _r251_t1.parenTop;
    var r251_parenBot = _r251_t1.parenBot;
    var r251_operTop = _r251_t1.operTop;
    var r251_operBot = _r251_t1.operBot;
    var r251_tackTop = _r251_t1.tackTop;
    var r251_tackBot = _r251_t1.tackBot;
    var r251_plusTop = _r251_t1.plusTop;
    var r251_plusBot = _r251_t1.plusBot;
    var r251_Italify = _r251_t1.Italify;
    var r251_Upright = _r251_t1.Upright;
    var r251_Scale = _r251_t1.Scale;
    var r251_Translate = _r251_t1.Translate;
    var r251_Rotate = _r251_t1.Rotate;
    var r251_globalTransform = _r251_t1.globalTransform;
    var r251_TANSLANT = _r251_t1.TANSLANT;
    var r251_SINSLANT = _r251_t1.SINSLANT;
    var r251_COSSLANT = _r251_t1.COSSLANT;
    var r251_HVCONTRAST = _r251_t1.HVCONTRAST;
    var r251_UPWARD = _r251_t1.UPWARD;
    var r251_DOWNWARD = _r251_t1.DOWNWARD;
    var r251_RIGHTWARD = _r251_t1.RIGHTWARD;
    var r251_LEFTWARD = _r251_t1.LEFTWARD;
    var r251_Upward = _r251_t1.Upward;
    var r251_Downward = _r251_t1.Downward;
    var r251_Leftward = _r251_t1.Leftward;
    var r251_Rightward = _r251_t1.Rightward;
    var r251_O = _r251_t1.O;
    var r251_OX = _r251_t1.OX;
    var r251_OXHOOK = _r251_t1.OXHOOK;
    var r251_HOOK = _r251_t1.HOOK;
    var r251_AHOOK = _r251_t1.AHOOK;
    var r251_SHOOK = _r251_t1.SHOOK;
    var r251_RHOOK = _r251_t1.RHOOK;
    var r251_JHOOK = _r251_t1.JHOOK;
    var r251_FHOOK = _r251_t1.FHOOK;
    var r251_HOOKX = _r251_t1.HOOKX;
    var r251_SMOOTH = _r251_t1.SMOOTH;
    var r251_SMALLSMOOTH = _r251_t1.SMALLSMOOTH;
    var r251_STROKE = _r251_t1.STROKE;
    var r251_DOTSIZE = _r251_t1.DOTSIZE;
    var r251_PERIODSIZE = _r251_t1.PERIODSIZE;
    var r251_BARPOS = _r251_t1.BARPOS;
    var r251_GBARPOS = _r251_t1.GBARPOS;
    var r251_PBARPOS = _r251_t1.PBARPOS;
    var r251_EBARPOS = _r251_t1.EBARPOS;
    var r251_OVERLAYPOS = _r251_t1.OVERLAYPOS;
    var r251_FIVEBARPOS = _r251_t1.FIVEBARPOS;
    var r251_LONGJUT = _r251_t1.LONGJUT;
    var r251_JUT = _r251_t1.JUT;
    var r251_VJUT = _r251_t1.VJUT;
    var r251_ACCENT = _r251_t1.ACCENT;
    var r251_ACCENTX = _r251_t1.ACCENTX;
    var r251_CTHIN = _r251_t1.CTHIN;
    var r251_CTHINB = _r251_t1.CTHINB;
    var r251_SLAB = _r251_t1.SLAB;
    var r251_TAILADJX = _r251_t1.TAILADJX;
    var r251_TAILADJY = _r251_t1.TAILADJY;
    var r251_LBALANCE = _r251_t1.LBALANCE;
    var r251_IBALANCE = _r251_t1.IBALANCE;
    var r251_LBALANCE2 = _r251_t1.LBALANCE2;
    var r251_IBALANCE2 = _r251_t1.IBALANCE2;
    var r251_JBALANCE = _r251_t1.JBALANCE;
    var r251_JBALANCE2 = _r251_t1.JBALANCE2;
    var r251_TBALANCE = _r251_t1.TBALANCE;
    var r251_TBALANCE2 = _r251_t1.TBALANCE2;
    var r251_RBALANCE = _r251_t1.RBALANCE;
    var r251_RBALANCE2 = _r251_t1.RBALANCE2;
    var r251_FBALANCE = _r251_t1.FBALANCE;
    var r251_ONEBALANCE = _r251_t1.ONEBALANCE;
    var r251_FULLWIDTH = _r251_t1.FULLWIDTH;
    var r251_FULLWIDTH1 = _r251_t1.FULLWIDTH1;
    var r251_FULLWIDTH2 = _r251_t1.FULLWIDTH2;
    var r251_FULLWIDTH3 = _r251_t1.FULLWIDTH3;
    var r251_OXE = _r251_t1.OXE;
    var r251_ESS = _r251_t1.ESS;
    var r251_ESSQUESTION = _r251_t1.ESSQUESTION;
    var r251_XO = _r251_t1.XO;
    var r251_CAPO = _r251_t1.CAPO;
    var r251_HALFSTROKE = _r251_t1.HALFSTROKE;
    var r251_RIGHTSB = _r251_t1.RIGHTSB;
    var r251_FWRSB = _r251_t1.FWRSB;
    var r251_MIDDLE = _r251_t1.MIDDLE;
    var r251_FWMIDDLE = _r251_t1.FWMIDDLE;
    var r251_CAPMIDDLE = _r251_t1.CAPMIDDLE;
    var r251_CAP_SMOOTH = _r251_t1.CAP_SMOOTH;
    var r251_DOTRADIUS = _r251_t1.DOTRADIUS;
    var r251_PERIODRADIUS = _r251_t1.PERIODRADIUS;
    var r251_SIDEJUT = _r251_t1.SIDEJUT;
    var r251_SMOOTHA = _r251_t1.SMOOTHA;
    var r251_SMOOTHB = _r251_t1.SMOOTHB;
    var r251_SMALLSMOOTHA = _r251_t1.SMALLSMOOTHA;
    var r251_SMALLSMOOTHB = _r251_t1.SMALLSMOOTHB;
    var r251_CORRECTION_OMIDX = _r251_t1.CORRECTION_OMIDX;
    var r251_CORRECTION_OMIDS = _r251_t1.CORRECTION_OMIDS;
    var r251_WHITENESS = _r251_t1.WHITENESS;
    var r251_adviceBlackness = _r251_t1.adviceBlackness;
    var r251_adviceBlackness2 = _r251_t1.adviceBlackness2;
    var r251_MVERTSTROKE = _r251_t1.MVERTSTROKE;
    var r251_MVERTSTROKE_D = _r251_t1.MVERTSTROKE_D;
    var r251_OVERLAYSTROKE = _r251_t1.OVERLAYSTROKE;
    var r251_OPERATORSTROKE = _r251_t1.OPERATORSTROKE;
    var r251_GEOMETRYSTROKE = _r251_t1.GEOMETRYSTROKE;
    var r251_SHOULDERFINE = _r251_t1.SHOULDERFINE;
    var r251_SUPERNESS = _r251_t1.SUPERNESS;
    var r251_superxy = _r251_t1.superxy;
    var r251_adviceSSmooth = _r251_t1.adviceSSmooth;
    var r251_adviceGlottalStopSmooth = _r251_t1.adviceGlottalStopSmooth;
    var r251_shoulderMidSlope = _r251_t1.shoulderMidSlope;
    var _r251_t2 = r251_spirofns;
    var r251_g4 = _r251_t2.g4;
    var r251_g2 = _r251_t2.g2;
    var r251_corner = _r251_t2.corner;
    var r251_flat = _r251_t2.flat;
    var r251_curl = _r251_t2.curl;
    var r251_close = _r251_t2.close;
    var r251_end = _r251_t2.end;
    var r251_straight = _r251_t2.straight;
    var r251_widths = _r251_t2.widths;
    var r251_xn$disablegizmo$3qIs = _r251_t2['disable-gizmo'];
    var r251_xn$disablecontrast$3qIs = _r251_t2['disable-contrast'];
    var r251_heading = _r251_t2.heading;
    var r251_unimportant = _r251_t2.unimportant;
    var r251_important = _r251_t2.important;
    var r251_alsothru = _r251_t2.alsothru;
    var r251_alsothruthem = _r251_t2.alsothruthem;
    var r251_bezcontrols = _r251_t2.bezcontrols;
    var r251_quadcontrols = _r251_t2.quadcontrols;
    var r251_archv = _r251_t2.archv;
    var r251_arcvh = _r251_t2.arcvh;
    var r251_complexThru = _r251_t2.complexThru;
    var r251_dispiro = _r251_t2.dispiro;
    var r251_xn$spirooutline$1aao = _r251_t2['spiro-outline'];
    var r251_union = _r251_t2.union;
    var r251_intersection = _r251_t2.intersection;
    var r251_difference = _r251_t2.difference;
    var r251_queryFeatureSelector = function _r251_t5(r253_name, r253_para, r253_alias) {
        var r253_k, r253_h, r253_tag, _r253_t2;
        var r253_fs = {};
        var r253_introduced = false;
        var _r253_t0 = _r1_t2(r253_para.variants)[Symbol.iterator]();
        var _r253_t1 = void 0;
        for (; !(_r253_t1 = _r253_t0.next()).done;) {
            _r253_t2 = _r253_t1.value;
            r253_k = _r253_t2[0];
            r253_h = _r253_t2[1];
            if (r253_h[r253_name] && r253_h['__cvmap'] && r253_h['__cvmap'][r253_name]) {
                r253_tag = r253_h['__cvmap'][r253_name];
                r253_fs[r253_tag] = r1_fallback(r253_alias, r253_name) + '.' + r253_h[r253_name];
                r253_introduced = true;
            }
        }
        return r253_introduced ? r253_fs : null;
    };
    var r251_xn$selectvariant$7Hrq = function _r251_t6() {
        var _r258_t7 = arguments;
        var _r258_t0 = [].slice.call(_r258_t7, 0);
        var _r258_t1 = [];
        var _r258_t2 = 0;
        for (; _r258_t2 < _r258_t0.length; _r258_t2 = _r258_t2 + 1)
            if (!(_r258_t0[_r258_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r258_t1.push(_r258_t0[_r258_t2]);
        var r258_name = r1_fallback(r258_name, _r258_t1[0]);
        var r258_unicode = r1_fallback(r258_unicode, _r258_t1[1]);
        var r258_xn$toname$3cah = r1_fallback(r258_xn$toname$3cah, _r258_t1[2], r258_name);
        var r258_transform = r1_fallback(r258_transform, _r258_t1[3]);
        var r258_follow = r1_fallback(r258_follow, _r258_t1[4], r258_name);
        var _r258_t3 = _r258_t0;
        var _r258_t4 = _r258_t3.length;
        var _r258_t5 = 0;
        for (; _r258_t5 < _r258_t4; _r258_t5 = _r258_t5 + 1) {
            _r258_t2 = _r258_t3[_r258_t5];
            if (_r258_t2 && _r258_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r258_t2.left === 'name')
                r258_name = _r258_t2.right;
            if (_r258_t2 && _r258_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r258_t2.left === 'unicode')
                r258_unicode = _r258_t2.right;
            if (_r258_t2 && _r258_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r258_t2.left === 'to-name')
                r258_xn$toname$3cah = _r258_t2.right;
            if (_r258_t2 && _r258_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r258_t2.left === 'transform')
                r258_transform = _r258_t2.right;
            if (_r258_t2 && _r258_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r258_t2.left === 'follow')
                r258_follow = _r258_t2.right;
        }
        if (r251_pickHash && !r251_pickHash[r258_name])
            return void 0;
        var r258_variant = r251_variantSelector[r258_follow] || r251_para.defaultVariant[r258_follow];
        if (!r258_variant)
            throw new Error('Variant for ' + r258_name + ' is not assigned.');
        if (r258_transform && r258_transform[r258_variant])
            r258_variant = r258_transform[r258_variant];
        var r258_chosenGlyph = r251_glyphs[r258_name + '.' + r258_variant];
        return r251_xn$createglyph$7Hrq(r1_fallback(r258_xn$toname$3cah, r258_name), function _r258_t8() {
            var _r263_t0 = this;
            var r263_currentGlyph = _r263_t0;
            r263_currentGlyph.include(r258_chosenGlyph, r251_AS_BASE, r251_ALSO_METRICS);
            if (r258_unicode) {
                r263_currentGlyph['assign-unicode'](r258_unicode);
                r251_unicodeGlyphs[r263_currentGlyph.unicode[r263_currentGlyph.unicode.length - 1]] = r263_currentGlyph;
            }
            r263_currentGlyph.featureSelector = r251_queryFeatureSelector(r258_name, r251_para);
            _r263_t0.cmpPriority = r258_chosenGlyph.cmpPriority;
            return void 0;
        });
    };
    var r251_xn$italicvariant$7Hrq = function _r251_t7(r266_name, r266_unicode) {
        return r251_xn$createglyph$7Hrq(r266_name, function _r266_t2() {
            var _r268_t0 = this;
            var r268_currentGlyph = _r268_t0;
            var r268_base = r251_para.isItalic ? r251_glyphs[r266_name + '.italic'] : r251_glyphs[r266_name + '.upright'];
            r268_currentGlyph.include(r268_base, r251_AS_BASE);
            r268_currentGlyph['set-width'](r268_base.advanceWidth);
            if (r266_unicode) {
                r268_currentGlyph['assign-unicode'](r266_unicode);
                r251_unicodeGlyphs[r268_currentGlyph.unicode[r268_currentGlyph.unicode.length - 1]] = r268_currentGlyph;
            }
            return void 0;
        });
    };
    var r251_alias = function _r251_t8(r272_newid, r272_unicode, r272_oldid) {
        return r251_xn$createglyph$7Hrq(r272_newid, function _r272_t2() {
            var _r274_t0 = this;
            var r274_currentGlyph = _r274_t0;
            if (r272_unicode) {
                r274_currentGlyph['assign-unicode'](r272_unicode);
                r251_unicodeGlyphs[r274_currentGlyph.unicode[r274_currentGlyph.unicode.length - 1]] = r274_currentGlyph;
            }
            r251_includeGlyphPart(r274_currentGlyph, r251_glyphs, r272_oldid, r251_AS_BASE);
            r274_currentGlyph['set-width'](r251_glyphs[r272_oldid].advanceWidth);
            _r274_t0.featureSelector = r251_glyphs[r272_oldid].featureSelector;
            _r274_t0.cmpPriority = r251_glyphs[r272_oldid].cmpPriority;
            return void 0;
        });
    };
    var r251_composite = function _r251_t9(r278__newid) {
        var _r278_t1 = arguments;
        var r278_parts = null;
        var r278_newid = null;
        if (typeof r278__newid === 'string') {
            r278_parts = [].slice.call(_r278_t1, 1);
            r278_newid = r278__newid;
        } else {
            r278_parts = [].slice.call(_r278_t1, 0);
            r278_newid = 'composite-glyph' + r251_newtemp();
        }
        return r251_xn$createglyph$7Hrq(r278_newid, function _r278_t2() {
            var r280_part;
            var _r280_t3 = this;
            var r280_currentGlyph = _r280_t3;
            var r280_first = true;
            var _r280_t0 = r278_parts;
            var _r280_t1 = _r280_t0.length;
            var _r280_t2 = 0;
            for (; _r280_t2 < _r280_t1; _r280_t2 = _r280_t2 + 1) {
                r280_part = _r280_t0[_r280_t2];
                r280_currentGlyph.include(r280_part, r280_first);
                if (r280_first)
                    r280_currentGlyph['set-width'](r280_part.advanceWidth);
                r280_first = false;
            }
            return void 0;
        });
    };
    var r251_xn$intounicode$5sIl = function _r251_t10(r285_code) {
        return function _r285_t2() {
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            if (r285_code) {
                r287_currentGlyph['assign-unicode'](r285_code);
                r251_unicodeGlyphs[r287_currentGlyph.unicode[r287_currentGlyph.unicode.length - 1]] = r287_currentGlyph;
            }
            return void 0;
        };
    };
    var r251_turned = function _r251_t11(r289_newid, r289_unicode, r289_id, r289_x, r289_y, r289_mark) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r289_newid, 'turn' + r289_id), function _r289_t2() {
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            if (r289_unicode) {
                r291_currentGlyph['assign-unicode'](r289_unicode);
                r251_unicodeGlyphs[r291_currentGlyph.unicode[r291_currentGlyph.unicode.length - 1]] = r291_currentGlyph;
            }
            r251_includeGlyphPart(r291_currentGlyph, r251_glyphs, r289_id, r289_mark ? false : r251_AS_BASE);
            r291_currentGlyph['set-width'](r251_glyphs[r289_id].advanceWidth);
            if (r289_mark)
                r291_currentGlyph.include(r289_mark);
            r291_currentGlyph.include(r251_FlipAround(r289_x, r289_y));
            return void 0;
        });
    };
    var r251_hcombine = function _r251_t12(r297_newid, r297_unicode, r297_id1, r297_id2, r297_spacing) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r297_newid, 'hcombine_' + r297_id1 + '_' + r297_id2), function _r297_t2() {
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            if (r297_unicode) {
                r299_currentGlyph['assign-unicode'](r297_unicode);
                r251_unicodeGlyphs[r299_currentGlyph.unicode[r299_currentGlyph.unicode.length - 1]] = r299_currentGlyph;
            }
            r251_includeGlyphPart(r299_currentGlyph, r251_glyphs, r297_id1, r251_AS_BASE);
            r299_currentGlyph['set-width'](r251_glyphs[r297_id1].advanceWidth);
            r299_currentGlyph['apply-transform'](r251_Translate(-r297_spacing, 0));
            r251_includeGlyphPart(r299_currentGlyph, r251_glyphs, r297_id2);
            r299_currentGlyph['apply-transform'](r251_Translate(r297_spacing / 2, 0));
            return void 0;
        });
    };
    var r251_dual = function _r251_t13(r306_newid, r306_unicode, r306_id, r306_spacing) {
        return r251_hcombine(r1_fallback(r306_newid, 'double' + r306_id), r306_unicode, r306_id, r306_id, r306_spacing);
    };
    var r251_vcombine = function _r251_t14(r307_newid, r307_unicode, r307_id1, r307_id2, r307_spacing) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r307_newid, 'vcombine_' + r307_id1 + '_' + r307_id2), function _r307_t2() {
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            if (r307_unicode) {
                r309_currentGlyph['assign-unicode'](r307_unicode);
                r251_unicodeGlyphs[r309_currentGlyph.unicode[r309_currentGlyph.unicode.length - 1]] = r309_currentGlyph;
            }
            r309_currentGlyph['set-width'](r251_glyphs[r307_id1].advanceWidth);
            r309_currentGlyph['depends-on'](r251_glyphs[r307_id1]);
            r309_currentGlyph['depends-on'](r251_glyphs[r307_id2]);
            r309_currentGlyph.include(r251_xn$createglyph$7Hrq(function _r309_t2() {
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                r251_includeGlyphPart(r316_currentGlyph, r251_glyphs, r307_id2);
                r316_currentGlyph['apply-transform'](r251_Upright());
                return void 0;
            }));
            r309_currentGlyph['apply-transform'](r251_Translate(0, -r307_spacing));
            r309_currentGlyph.include(r251_xn$createglyph$7Hrq(function _r309_t3() {
                var _r322_t0 = this;
                var r322_currentGlyph = _r322_t0;
                r251_includeGlyphPart(r322_currentGlyph, r251_glyphs, r307_id1);
                r322_currentGlyph['apply-transform'](r251_Upright());
                return void 0;
            }));
            r309_currentGlyph['apply-transform'](r251_Translate(0, r307_spacing / 2));
            r309_currentGlyph['apply-transform'](r251_Italify());
            return void 0;
        });
    };
    var r251_vdual = function _r251_t15(r327_newid, r327_unicode, r327_id, r327_spacing) {
        return r251_vcombine(r1_fallback(r327_newid, 'double' + r327_id), r327_unicode, r327_id, r327_id, r327_spacing);
    };
    var r251_fwl = function _r251_t16(r328_newid, r328_unicode, r328_id, r328_shift, r328_wk) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r328_newid, 'fwl' + r328_id), function _r328_t2() {
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            if (r328_unicode) {
                r330_currentGlyph['assign-unicode'](r328_unicode);
                r251_unicodeGlyphs[r330_currentGlyph.unicode[r330_currentGlyph.unicode.length - 1]] = r330_currentGlyph;
            }
            r251_includeGlyphPart(r330_currentGlyph, r251_glyphs, r328_id);
            r330_currentGlyph['set-width'](r1_fallback(r328_wk, r251_FULLWIDTH));
            r330_currentGlyph['apply-transform'](r251_Translate(r1_fallback(r328_shift, 0), 0));
            return void 0;
        });
    };
    var r251_fwr = function _r251_t17(r335_newid, r335_unicode, r335_id, r335_shift, r335_wk) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r335_newid, 'fwr' + r335_id), function _r335_t2() {
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            if (r335_unicode) {
                r337_currentGlyph['assign-unicode'](r335_unicode);
                r251_unicodeGlyphs[r337_currentGlyph.unicode[r337_currentGlyph.unicode.length - 1]] = r337_currentGlyph;
            }
            r251_includeGlyphPart(r337_currentGlyph, r251_glyphs, r335_id);
            r337_currentGlyph['set-width'](r1_fallback(r335_wk, r251_FULLWIDTH));
            r337_currentGlyph['apply-transform'](r251_Translate(r1_fallback(r335_wk, r251_FULLWIDTH) - r251_WIDTH + r1_fallback(r335_shift, 0), 0));
            return void 0;
        });
    };
    var r251_dwl = function _r251_t18(r342_newid, r342_unicode, r342_id, r342_shift) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r342_newid, 'dwl' + r342_id), function _r342_t2() {
            var _r344_t0 = this;
            var r344_currentGlyph = _r344_t0;
            if (r342_unicode) {
                r344_currentGlyph['assign-unicode'](r342_unicode);
                r251_unicodeGlyphs[r344_currentGlyph.unicode[r344_currentGlyph.unicode.length - 1]] = r344_currentGlyph;
            }
            r251_includeGlyphPart(r344_currentGlyph, r251_glyphs, r342_id);
            r344_currentGlyph['set-width'](r251_UPM);
            r344_currentGlyph['apply-transform'](r251_Translate(r1_fallback(r342_shift, 0), 0));
            return void 0;
        });
    };
    var r251_dwr = function _r251_t19(r349_newid, r349_unicode, r349_id, r349_shift) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r349_newid, 'dwr' + r349_id), function _r349_t2() {
            var _r351_t0 = this;
            var r351_currentGlyph = _r351_t0;
            if (r349_unicode) {
                r351_currentGlyph['assign-unicode'](r349_unicode);
                r251_unicodeGlyphs[r351_currentGlyph.unicode[r351_currentGlyph.unicode.length - 1]] = r351_currentGlyph;
            }
            r251_includeGlyphPart(r351_currentGlyph, r251_glyphs, r349_id);
            r351_currentGlyph['set-width'](r251_UPM);
            r351_currentGlyph['apply-transform'](r251_Translate(r251_UPM - r251_WIDTH + r1_fallback(r349_shift, 0), 0));
            return void 0;
        });
    };
    var r251_dwc = function _r251_t20(r356_newid, r356_unicode, r356_id, r356_shift) {
        return r251_xn$createglyph$7Hrq(r1_fallback(r356_newid, 'dwc' + r356_id), function _r356_t2() {
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            if (r356_unicode) {
                r358_currentGlyph['assign-unicode'](r356_unicode);
                r251_unicodeGlyphs[r358_currentGlyph.unicode[r358_currentGlyph.unicode.length - 1]] = r358_currentGlyph;
            }
            r251_includeGlyphPart(r358_currentGlyph, r251_glyphs, r356_id);
            r358_currentGlyph['set-width'](r251_UPM);
            r358_currentGlyph['apply-transform'](r251_Translate((r251_UPM - r251_WIDTH) / 2 + r1_fallback(r356_shift, 0), 0));
            return void 0;
        });
    };
    var r251_Rect = function _r251_t21(r363_u, r363_d, r363_l, r363_r, r363_transformShiftOnly) {
        return r251_xn$createglyph$7Hrq(function _r363_t2() {
            var r365_mx1, r365_my1, _r365_t0;
            var _r365_t1 = this;
            var r365_currentGlyph = _r365_t1;
            var r365_my = (r363_u + r363_d) / 2;
            var r365_mx = (r363_l + r363_r) / 2;
            r365_currentGlyph.gizmo = r363_transformShiftOnly ? r251_Translate(0, 0) : r251_globalTransform;
            r365_currentGlyph.include(r251_xn$spirooutline$1aao(function _r365_t3() {
                var _r367_t0 = this;
                return _r367_t0.gizmo = r365_currentGlyph.gizmo;
            }, r251_corner(r363_l, r363_d), r251_corner(r363_l, r363_u), r251_corner(r363_u, r363_u), r251_corner(r363_r, r363_d), r251_close(function _r365_t4() {
                var _r368_t0 = this;
                _r368_t0.angles = 4;
                return _r368_t0.fairGizmo = r365_currentGlyph.gizmo;
            })));
            if (r363_transformShiftOnly) {
                _r365_t0 = r1_tp(r251_globalTransform, {
                    'x': r365_mx,
                    'y': r365_my
                });
                r365_mx1 = _r365_t0.x;
                r365_my1 = _r365_t0.y;
                r365_currentGlyph['apply-transform'](r251_Translate(r365_mx1 - r365_mx, r365_my1 - r365_my));
            }
            return void 0;
        });
    };
    var r251_Ring = function _r251_t22(r370_u, r370_d, r370_l, r370_r, r370_transformShiftOnly) {
        return r251_xn$createglyph$7Hrq(function _r370_t2() {
            var r372_mx1, r372_my1, _r372_t0;
            var _r372_t1 = this;
            var r372_currentGlyph = _r372_t1;
            var r372_my = (r370_u + r370_d) / 2;
            var r372_mx = (r370_l + r370_r) / 2;
            r372_currentGlyph.gizmo = r370_transformShiftOnly ? r251_Translate(0, 0) : r251_globalTransform;
            r372_currentGlyph.include(r251_xn$spirooutline$1aao(function _r372_t3() {
                var _r374_t0 = this;
                return _r374_t0.gizmo = r372_currentGlyph.gizmo;
            }, r251_g4(r372_mx, r370_d), r251_archv(), r251_g4(r370_l, r372_my), r251_arcvh(), r251_g4(r372_mx, r370_u), r251_archv(), r251_g4(r370_r, r372_my), r251_arcvh(), r251_close(function _r372_t4() {
                var _r375_t0 = this;
                _r375_t0.angles = 4;
                return _r375_t0.fairGizmo = r372_currentGlyph.gizmo;
            })));
            if (r370_transformShiftOnly) {
                _r372_t0 = r1_tp(r251_globalTransform, {
                    'x': r372_mx,
                    'y': r372_my
                });
                r372_mx1 = _r372_t0.x;
                r372_my1 = _r372_t0.y;
                r372_currentGlyph['apply-transform'](r251_Translate(r372_mx1 - r372_mx, r372_my1 - r372_my));
            }
            return void 0;
        });
    };
    var r251_RingAt = function _r251_t23(r377_x, r377_y, r377_r) {
        return r251_Ring(r377_y + r377_r, r377_y - r377_r, r377_x - r377_r, r377_x + r377_r);
    };
    var r251_DotAt = function _r251_t24(r378_x, r378_y, r378_r) {
        return r251_Ring(r378_y + r378_r, r378_y - r378_r, r378_x - r378_r, r378_x + r378_r, true);
    };
    var r251_CircleRing = function _r251_t25(r379_u, r379_d, r379_l, r379_r, r379_transformShiftOnly) {
        return r251_xn$createglyph$7Hrq(function _r379_t2() {
            var r381_mx1, r381_my1, _r381_t0;
            var _r381_t1 = this;
            var r381_currentGlyph = _r381_t1;
            var r381_my = (r379_u + r379_d) / 2;
            var r381_mx = (r379_l + r379_r) / 2;
            r381_currentGlyph.gizmo = r379_transformShiftOnly ? r251_Translate(0, 0) : r251_globalTransform;
            r381_currentGlyph.include(r251_xn$spirooutline$1aao(function _r381_t3() {
                var _r383_t0 = this;
                return _r383_t0.gizmo = r381_currentGlyph.gizmo;
            }, r251_g4(r381_mx, r379_d), r251_g4(r379_l, r381_my), r251_g4(r381_mx, r379_u), r251_g4(r379_r, r381_my), r251_close(function _r381_t4() {
                var _r384_t0 = this;
                _r384_t0.angles = 4;
                return _r384_t0.fairGizmo = r381_currentGlyph.gizmo;
            })));
            if (r379_transformShiftOnly) {
                _r381_t0 = r1_tp(r251_globalTransform, {
                    'x': r381_mx,
                    'y': r381_my
                });
                r381_mx1 = _r381_t0.x;
                r381_my1 = _r381_t0.y;
                r381_currentGlyph['apply-transform'](r251_Translate(r381_mx1 - r381_mx, r381_my1 - r381_my));
            }
            return void 0;
        });
    };
    var r251_CircleRingAt = function _r251_t26(r386_x, r386_y, r386_r) {
        return r251_CircleRing(r386_y + r386_r, r386_y - r386_r, r386_x - r386_r, r386_x + r386_r);
    };
    var r251_CircleDotAt = function _r251_t27(r387_x, r387_y, r387_r) {
        return r251_CircleRing(r387_y + r387_r, r387_y - r387_r, r387_x - r387_r, r387_x + r387_r, true);
    };
    var r251_OShape = function _r251_t28(r388_u, r388_d, r388_l, r388_r, r388__width, r388__sma, r388__smb, r388_ai) {
        return function _r388_t2() {
            var r390_ymiddlea, r390_ymiddleb;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            var r390_middle = (r388_l + r388_r) / 2;
            var r390_width = r1_fallback(r388__width, r251_STROKE);
            var r390_sma = r1_fallback(r388__sma, r251_SMALLSMOOTHA);
            var r390_smb = r1_fallback(r388__smb, r251_SMALLSMOOTHB);
            var r390_mc = r251_CORRECTION_OMIDX * r390_width;
            if (r388_u - r388_d > r390_sma + r390_smb)
                r390_currentGlyph.include(r251_dispiro(r251_widths(r390_width, 0), r251_g4(r390_middle - r390_mc, r388_u - r251_O), r251_archv(), (r388_ai ? r251_flat.ai : r251_flat)(r388_l + r251_OX, r388_u - r390_sma), (r388_ai ? r251_curl.ai : r251_curl)(r388_l + r251_OX, r388_d + r390_smb), r251_arcvh(), r251_g4(r390_middle + r390_mc, r388_d + r251_O), r251_archv(), (r388_ai ? r251_flat.ai : r251_flat)(r388_r - r251_OX, r388_d + r390_sma), (r388_ai ? r251_curl.ai : r251_curl)(r388_r - r251_OX, r388_u - r390_smb), r251_arcvh(), r251_close()));
            else {
                r390_ymiddlea = r1_mix(r388_d, r388_u, r390_smb / (r390_sma + r390_smb));
                r390_ymiddleb = r1_mix(r388_d, r388_u, r390_sma / (r390_sma + r390_smb));
                r390_currentGlyph.include(r251_dispiro(r251_widths(r390_width, 0), r251_g4(r390_middle - r390_mc, r388_u - r251_O), r251_archv(), r251_g4(r388_l + r251_OX, r390_ymiddlea), r251_arcvh(), r251_g4(r390_middle + r390_mc, r388_d + r251_O), r251_archv(), r251_g4(r388_r - r251_OX, r390_ymiddleb), r251_arcvh(), r251_close()));
            }
            return void 0;
        };
    };
    var r251_OShapeOutline = function _r251_t29(r393_u, r393_d, r393_l, r393_r, r393__width, r393__sma, r393__smb, r393_ai) {
        return function _r393_t2() {
            var r395_ymiddlea, r395_ymiddleb;
            var _r395_t0 = this;
            var r395_currentGlyph = _r395_t0;
            var r395_middle = (r393_l + r393_r) / 2;
            var r395_width = r1_fallback(r393__width, r251_STROKE);
            var r395_sma = r1_fallback(r393__sma, r251_SMALLSMOOTHA);
            var r395_smb = r1_fallback(r393__smb, r251_SMALLSMOOTHB);
            var r395_mc = r251_CORRECTION_OMIDX * r395_width;
            if (r393_u - r393_d > r395_sma + r395_smb)
                r395_currentGlyph.include(r251_xn$spirooutline$1aao(r251_g4(r395_middle - r395_mc, r393_u - r251_O), r251_archv(), (r393_ai ? r251_flat.ai : r251_flat)(r393_l + r251_OX, r393_u - r395_sma), (r393_ai ? r251_curl.ai : r251_curl)(r393_l + r251_OX, r393_d + r395_smb), r251_arcvh(), r251_g4(r395_middle + r395_mc, r393_d + r251_O), r251_archv(), (r393_ai ? r251_flat.ai : r251_flat)(r393_r - r251_OX, r393_d + r395_sma), (r393_ai ? r251_curl.ai : r251_curl)(r393_r - r251_OX, r393_u - r395_smb), r251_arcvh(), r251_close()));
            else {
                r395_ymiddlea = r1_mix(r393_d, r393_u, r395_smb / (r395_sma + r395_smb));
                r395_ymiddleb = r1_mix(r393_d, r393_u, r395_sma / (r395_sma + r395_smb));
                r395_currentGlyph.include(r251_xn$spirooutline$1aao(r251_g4(r395_middle - r395_mc, r393_u - r251_O), r251_archv(), r251_g4(r393_l + r251_OX, r395_ymiddlea), r251_arcvh(), r251_g4(r395_middle + r395_mc, r393_d + r251_O), r251_archv(), r251_g4(r393_r - r251_OX, r395_ymiddleb), r251_arcvh(), r251_close()));
            }
            return void 0;
        };
    };
    var r251_OBarLeftShape = function _r251_t30(r398__top, r398__left) {
        return function _r398_t2() {
            var _r400_t0 = this;
            var r400_currentGlyph = _r400_t0;
            var r400_top = r1_fallback(r398__top, r251_XH);
            var r400_left = r1_fallback(r398__left, r251_SB);
            var r400_fine = r251_SHOULDERFINE;
            var r400_st = r251_shoulderMidSlope(r400_fine, void 0, 1);
            var r400_sb = r251_shoulderMidSlope(r400_fine, void 0, -1);
            var r400_mt = r1_mix(r400_left, r251_RIGHTSB, 0.5) + (r400_st - r251_CORRECTION_OMIDX) * r251_STROKE;
            var r400_mb = r1_mix(r400_left, r251_RIGHTSB, 0.5) + (r400_sb + r251_CORRECTION_OMIDX) * r251_STROKE;
            r400_currentGlyph.include(r251_dispiro(r251_flat(r400_left + (r251_STROKE - r400_fine) * r251_HVCONTRAST, r400_top - r251_SMALLSMOOTHA - 0.01, r251_widths(r400_fine, 0)), r251_curl(r400_left + (r251_STROKE - r400_fine) * r251_HVCONTRAST, 0 + r251_SMALLSMOOTHB, r251_widths(r400_fine, 0)), r251_arcvh(), r251_g4(r400_mb, r251_O, r251_widths.heading(r251_STROKE, 0, {
                'y': 1,
                'x': -r400_sb
            })), r251_archv(), ((r251_SMALLSMOOTHA + r251_SMALLSMOOTHB) / r400_top > 0.75 ? r251_flat.ai : r251_flat)(r251_RIGHTSB - r251_OX, 0 + r251_SMALLSMOOTHA), ((r251_SMALLSMOOTHA + r251_SMALLSMOOTHB) / r400_top > 0.75 ? r251_curl.ai : r251_curl)(r251_RIGHTSB - r251_OX, r400_top - r251_SMALLSMOOTHB), r251_arcvh(), r251_g4(r400_mt, r400_top - r251_O, r251_widths.heading(r251_STROKE, 0, {
                'y': -1,
                'x': -r400_st
            })), r251_archv(), r251_flat(r400_left + (r251_STROKE - r400_fine) * r251_HVCONTRAST, r400_top - r251_SMALLSMOOTHA, r251_widths(r400_fine, 0)), r251_curl(r400_left + (r251_STROKE - r400_fine) * r251_HVCONTRAST, r400_top - r251_SMALLSMOOTHA - 0.01, r251_widths(r400_fine, 0))));
            return void 0;
        };
    };
    var r251_OBarRightShape = function _r251_t31(r402_top, r402_right) {
        return function _r402_t2() {
            var _r404_t0 = this;
            var r404_currentGlyph = _r404_t0;
            r404_currentGlyph.include(r251_xn$createglyph$7Hrq(r251_OBarLeftShape(r402_top, r251_WIDTH - r1_fallback(r402_right, r251_RIGHTSB))));
            r404_currentGlyph.include(r251_FlipAround(r251_MIDDLE, r1_fallback(r402_top, r251_XH) / 2));
            return void 0;
        };
    };
    var r251_SERIF_SHIFT_X = 0.6;
    var r251_LeftwardTopSerif = function _r251_t32(r407_x, r407_y, r407_length, r407__sw) {
        return function _r407_t2() {
            var _r409_t0 = this;
            var r409_currentGlyph = _r409_t0;
            var r409_sw = r1_fallback(r407__sw, r251_STROKE);
            r409_currentGlyph.include(r251_dispiro(r251_flat(r407_x + r409_sw / 2 * r251_HVCONTRAST, r407_y, r251_widths.heading(r409_sw, 0, r251_LEFTWARD)), r251_curl(r407_x - r407_length - r251_TANSLANT * (r409_sw * r251_SERIF_SHIFT_X), r407_y)));
            return void 0;
        };
    };
    var r251_LeftwardBottomSerif = function _r251_t33(r411_x, r411_y, r411_length, r411__sw) {
        return function _r411_t2() {
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            var r413_sw = r1_fallback(r411__sw, r251_STROKE);
            r413_currentGlyph.include(r251_dispiro(r251_flat(r411_x + r413_sw / 2 * r251_HVCONTRAST, r411_y, r251_widths.heading(0, r413_sw, r251_LEFTWARD)), r251_curl(r411_x - r411_length + r251_TANSLANT * (r413_sw * r251_SERIF_SHIFT_X), r411_y)));
            return void 0;
        };
    };
    var r251_RightwardTopSerif = function _r251_t34(r415_x, r415_y, r415_length, r415__sw) {
        return function _r415_t2() {
            var _r417_t0 = this;
            var r417_currentGlyph = _r417_t0;
            var r417_sw = r1_fallback(r415__sw, r251_STROKE);
            r417_currentGlyph.include(r251_dispiro(r251_flat(r415_x - r417_sw / 2 * r251_HVCONTRAST, r415_y, r251_widths.heading(0, r417_sw, r251_RIGHTWARD)), r251_curl(r415_x + r415_length - r251_TANSLANT * (r417_sw * r251_SERIF_SHIFT_X), r415_y)));
            return void 0;
        };
    };
    var r251_RightwardBottomSerif = function _r251_t35(r419_x, r419_y, r419_length, r419__sw) {
        return function _r419_t2() {
            var _r421_t0 = this;
            var r421_currentGlyph = _r421_t0;
            var r421_sw = r1_fallback(r419__sw, r251_STROKE);
            r421_currentGlyph.include(r251_dispiro(r251_flat(r419_x - r421_sw / 2 * r251_HVCONTRAST, r419_y, r251_widths.heading(r421_sw, 0, r251_RIGHTWARD)), r251_curl(r419_x + r419_length + r251_TANSLANT * (r421_sw * r251_SERIF_SHIFT_X), r419_y)));
            return void 0;
        };
    };
    var r251_CenterTopSerif = function _r251_t36(r423_x, r423_y, r423_length, r423__sw) {
        return function _r423_t2() {
            var _r425_t0 = this;
            var r425_currentGlyph = _r425_t0;
            var r425_sw = r1_fallback(r423__sw, r251_STROKE);
            r425_currentGlyph.include(r251_dispiro(r251_flat(r423_x + r423_length - r251_TANSLANT * (r425_sw * r251_SERIF_SHIFT_X), r423_y, r251_widths(r425_sw, 0)), r251_curl(r423_x - r423_length - r251_TANSLANT * (r425_sw * r251_SERIF_SHIFT_X), r423_y)));
            return void 0;
        };
    };
    var r251_CenterBottomSerif = function _r251_t37(r427_x, r427_y, r427_length, r427__sw) {
        return function _r427_t2() {
            var _r429_t0 = this;
            var r429_currentGlyph = _r429_t0;
            var r429_sw = r1_fallback(r427__sw, r251_STROKE);
            r429_currentGlyph.include(r251_dispiro(r251_flat(r427_x + r427_length + r251_TANSLANT * (r429_sw * r251_SERIF_SHIFT_X), r427_y, r251_widths(0, r429_sw)), r251_curl(r427_x - r427_length + r251_TANSLANT * (r429_sw * r251_SERIF_SHIFT_X), r427_y)));
            return void 0;
        };
    };
    var r251_DownwardRightSerif = function _r251_t38(r431_x, r431_y, r431_length, r431_sw) {
        return function _r431_t2() {
            var _r433_t0 = this;
            var r433_currentGlyph = _r433_t0;
            r433_currentGlyph.include(r251_dispiro(r251_widths.rhs(r431_sw), r251_flat(r431_x, r431_y, r251_heading(r251_DOWNWARD)), r251_curl(r431_x, r431_y - r431_length, r251_heading(r251_DOWNWARD))));
            return void 0;
        };
    };
    var r251_UpwardRightSerif = function _r251_t39(r435_x, r435_y, r435_length, r435_sw) {
        return function _r435_t2() {
            var _r437_t0 = this;
            var r437_currentGlyph = _r437_t0;
            r437_currentGlyph.include(r251_dispiro(r251_widths.lhs(r435_sw), r251_flat(r435_x, r435_y, r251_heading(r251_UPWARD)), r251_curl(r435_x, r435_y + r435_length, r251_heading(r251_UPWARD))));
            return void 0;
        };
    };
    var r251_DownwardLeftSerif = function _r251_t40(r439_x, r439_y, r439_length, r439_sw) {
        return function _r439_t2() {
            var _r441_t0 = this;
            var r441_currentGlyph = _r441_t0;
            r441_currentGlyph.include(r251_dispiro(r251_widths.lhs(r439_sw), r251_flat(r439_x, r439_y, r251_heading(r251_DOWNWARD)), r251_curl(r439_x, r439_y - r439_length, r251_heading(r251_DOWNWARD))));
            return void 0;
        };
    };
    var r251_UpwardLeftSerif = function _r251_t41(r443_x, r443_y, r443_length, r443_sw) {
        return function _r443_t2() {
            var _r445_t0 = this;
            var r445_currentGlyph = _r445_t0;
            r445_currentGlyph.include(r251_dispiro(r251_widths.rhs(r443_sw), r251_flat(r443_x, r443_y, r251_heading(r251_UPWARD)), r251_curl(r443_x, r443_y + r443_length, r251_heading(r251_UPWARD))));
            return void 0;
        };
    };
    var r251_sideSerifK = 0.5;
    var r251_AIVSerifs = function _r251_t42(r447_top, r447__left, r447__right) {
        return function _r447_t2() {
            var _r449_t0 = this;
            var r449_currentGlyph = _r449_t0;
            var r449_left = r1_fallback(r447__left, r251_SB);
            var r449_right = r1_fallback(r447__right, r251_RIGHTSB);
            if (r251_SLAB) {
                r449_currentGlyph.include(r251_CenterTopSerif(r449_left + r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, r447_top, r251_JUT));
                r449_currentGlyph['tag-contour']('serifLT');
                r449_currentGlyph.include(r251_CenterTopSerif(r449_right - r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, r447_top, r251_JUT));
                r449_currentGlyph['tag-contour']('serifRT');
            }
            return void 0;
        };
    };
    var r251_AIHSerifs = function _r251_t43(r454_top, r454__left, r454__right) {
        return function _r454_t2() {
            var _r456_t0 = this;
            var r456_currentGlyph = _r456_t0;
            var r456_left = r1_fallback(r454__left, r251_SB);
            var r456_right = r1_fallback(r454__right, r251_RIGHTSB);
            if (r251_SLAB) {
                r456_currentGlyph.include(r251_AIVSerifs(r454_top, r454__left, r454__right));
                r456_currentGlyph.include(r251_CenterBottomSerif(r456_left + r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, 0, r251_JUT));
                r456_currentGlyph.include(r251_CenterBottomSerif(r456_right - r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, 0, r251_JUT));
            }
            return void 0;
        };
    };
    var r251_AINSerifs = function _r251_t44(r460_top, r460__left, r460__right, r460_sw, r460_xn) {
        return function _r460_t2() {
            var _r462_t0 = this;
            var r462_currentGlyph = _r462_t0;
            var r462_left = r1_fallback(r460__left, r251_SB);
            var r462_right = r1_fallback(r460__right, r251_RIGHTSB);
            var r462_jut = r251_JUT * r1_fallback(r460_xn, 1);
            if (r251_SLAB) {
                r462_currentGlyph.include(r251_LeftwardTopSerif(r462_left + r460_sw * (r251_sideSerifK - 0.5) * r251_HVCONTRAST, r460_top, r462_jut - r460_sw / 2 * r251_HVCONTRAST));
                r462_currentGlyph.include(r251_CenterTopSerif(r462_right - r460_sw * r251_sideSerifK * r251_HVCONTRAST, r460_top, r462_jut));
                r462_currentGlyph.include(r251_CenterBottomSerif(r462_left + r460_sw * r251_sideSerifK * r251_HVCONTRAST, 0, r462_jut));
                r462_currentGlyph['tag-contour']('serifLB');
            }
            return void 0;
        };
    };
    var r251_AICyrISerifs = function _r251_t45(r467_top, r467__left, r467__right) {
        return function _r467_t2() {
            var _r469_t0 = this;
            var r469_currentGlyph = _r469_t0;
            var r469_left = r1_fallback(r467__left, r251_SB);
            var r469_right = r1_fallback(r467__right, r251_RIGHTSB);
            if (r251_SLAB) {
                r469_currentGlyph.include(r251_LeftwardBottomSerif(r469_left, 0, r251_SIDEJUT));
                r469_currentGlyph.include(r251_RightwardTopSerif(r469_right, r467_top, r251_SIDEJUT));
                r469_currentGlyph.include(r251_CenterTopSerif(r469_left + r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, r467_top, r251_JUT));
                r469_currentGlyph.include(r251_CenterBottomSerif(r469_right - r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, 0, r251_JUT));
                r469_currentGlyph['tag-contour']('serifRB');
            }
            return void 0;
        };
    };
    var r251_AIMSerifs = function _r251_t46(r475_top, r475__left, r475__right) {
        return function _r475_t2() {
            var _r477_t0 = this;
            var r477_currentGlyph = _r477_t0;
            var r477_left = r1_fallback(r475__left, r251_SB);
            var r477_right = r1_fallback(r475__right, r251_RIGHTSB);
            if (r251_SLAB) {
                r477_currentGlyph.include(r251_LeftwardTopSerif(r477_left + r251_STROKE * (r251_sideSerifK - 0.5) * r251_HVCONTRAST, r475_top, r251_SIDEJUT));
                r477_currentGlyph.include(r251_RightwardTopSerif(r477_right - r251_STROKE * (r251_sideSerifK - 0.5) * r251_HVCONTRAST, r475_top, r251_SIDEJUT));
                r477_currentGlyph.include(r251_CenterBottomSerif(r477_left + r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, 0, r251_JUT));
                r477_currentGlyph.include(r251_CenterBottomSerif(r477_right - r251_STROKE * r251_sideSerifK * r251_HVCONTRAST, 0, r251_JUT));
            }
            return void 0;
        };
    };
    var r251_diagCor = function _r251_t47(r482_dy, r482_dx, r482_dyt, r482_dxt) {
        var r482_ay = Math.max(0, Math.abs(r482_dy) - r1_fallback(r482_dyt, 0));
        var r482_ax = Math.max(0, Math.abs(r482_dx) - r1_fallback(r482_dxt, 0));
        return Math.hypot(r482_ay, r482_ax) / r482_ay;
    };
    var r251_halfXStrand = function _r251_t48(r483__leftx, r483_lefty, r483_rightx, r483_righty, r483_turn, r483_straight, r483_tension, r483__fine) {
        return function _r483_t2() {
            var r485_cor, r485_hst, r485_hse;
            var _r485_t0 = this;
            var r485_currentGlyph = _r485_t0;
            var r485_sbCor = r251_para.straightBar ? r251_OX * 4 * (Math.abs(r483_lefty - r483_righty) / r251_CAP) : 0;
            var r485_leftx = r483__leftx + (r251_HALFSTROKE * r251_HVCONTRAST + r485_sbCor) * (r483_rightx > r483__leftx ? 1 : -1);
            var r485_fine = (r483__fine || r251_STROKE) * 0.5;
            var r485_turnyleft = r1_mix(r483_lefty, r483_righty, r483_turn);
            var r485_cyleft = r1_mix(r485_turnyleft, r483_righty, r483_tension);
            var r485_straightxleft = r1_mix(r485_leftx, r483_rightx, r483_straight);
            var r485_straightyleft = r1_mix(r485_cyleft, r483_righty, r483_straight);
            if (r251_para.straightBar) {
                r485_cor = r251_diagCor(r483_righty - r483_lefty, r483_rightx - r485_leftx);
                r485_hst = r251_HALFSTROKE * r1_mix(1, r485_cor, r1_linreg(18, 1, 126, 0, r251_STROKE));
                r485_hse = r251_HALFSTROKE * (r251_adviceBlackness(3) / r251_STROKE);
                r485_currentGlyph.include(r251_dispiro(r251_widths.center(), r251_corner(r485_leftx, r483_lefty, r251_widths.heading(r485_hst, r485_hst, r483_lefty < r483_righty ? r251_UPWARD : r251_DOWNWARD)), r251_corner(r483_rightx, r483_righty, r251_widths(r485_hse, r485_hse)), r251_end(function _r485_t3() {
                    var _r487_t0 = this;
                    return _r487_t0.cleanmore = true;
                })));
            } else
                r485_currentGlyph.include(r251_dispiro(r251_widths.center(), r251_flat(r485_leftx, r483_lefty, r251_heading(r483_lefty < r483_righty ? r251_UPWARD : r251_DOWNWARD)), r251_curl(r485_leftx, r485_turnyleft, r251_heading(r483_lefty < r483_righty ? r251_UPWARD : r251_DOWNWARD)), r251_quadcontrols(0, (r485_cyleft - r485_turnyleft) / (r485_straightyleft - r485_turnyleft), 24), r251_flat(r485_straightxleft, r485_straightyleft), r251_curl(r483_rightx, r483_righty), r251_end(function _r485_t2() {
                    var _r489_t0 = this;
                    return _r489_t0.cleanmore = true;
                })));
            return void 0;
        };
    };
    var r251_xStrand = function _r251_t49(r490__leftx, r490_lefty, r490__rightx, r490_righty, r490_turn, r490_straight, r490_tension) {
        return function _r490_t2() {
            var _r492_t0 = this;
            var r492_currentGlyph = _r492_t0;
            var r492_middlex = r1_mix(r490__leftx, r490__rightx, 0.5);
            var r492_middley = r1_mix(r490_lefty, r490_righty, 0.5);
            r492_currentGlyph.include(r251_halfXStrand(r490__leftx, r490_lefty, r492_middlex, r492_middley, r490_turn, r490_straight, r490_tension));
            r492_currentGlyph.include(r251_halfXStrand(r490__rightx, r490_righty, r492_middlex, r492_middley, r490_turn, r490_straight, r490_tension));
            return void 0;
        };
    };
    var r251_nShoulderKnots = function _r251_t50() {
        var _r495_t7 = arguments;
        var _r495_t0 = [].slice.call(_r495_t7, 0);
        var _r495_t1 = [];
        var _r495_t2 = 0;
        for (; _r495_t2 < _r495_t0.length; _r495_t2 = _r495_t2 + 1)
            if (!(_r495_t0[_r495_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r495_t1.push(_r495_t0[_r495_t2]);
        var r495_left = r1_fallback(r495_left, _r495_t1[0]);
        var r495_right = r1_fallback(r495_right, _r495_t1[1]);
        var r495_fine = r1_fallback(r495_fine, _r495_t1[2], r251_SHOULDERFINE);
        var r495_top = r1_fallback(r495_top, _r495_t1[3], r251_XH);
        var r495_bottom = r1_fallback(r495_bottom, _r495_t1[4], 0);
        var r495_sma = r1_fallback(r495_sma, _r495_t1[5], r251_SMALLSMOOTHA);
        var r495_smb = r1_fallback(r495_smb, _r495_t1[6], r251_SMALLSMOOTHB);
        var r495_stroke = r1_fallback(r495_stroke, _r495_t1[7], r251_STROKE);
        var _r495_t3 = _r495_t0;
        var _r495_t4 = _r495_t3.length;
        var _r495_t5 = 0;
        for (; _r495_t5 < _r495_t4; _r495_t5 = _r495_t5 + 1) {
            _r495_t2 = _r495_t3[_r495_t5];
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'left')
                r495_left = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'right')
                r495_right = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'fine')
                r495_fine = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'top')
                r495_top = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'bottom')
                r495_bottom = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'sma')
                r495_sma = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'smb')
                r495_smb = _r495_t2.right;
            if (_r495_t2 && _r495_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r495_t2.left === 'stroke')
                r495_stroke = _r495_t2.right;
        }
        var r495_slope = r251_shoulderMidSlope(r495_fine, r495_stroke);
        var r495_middle = r1_mix(r495_left - r495_stroke * r251_HVCONTRAST, r495_right, 0.5) + (r495_slope - r251_CORRECTION_OMIDX) * r495_stroke;
        return [
            r251_flat(r495_left, r495_top - r495_sma - 2, r251_widths(r495_fine, 0)),
            r251_curl(r495_left, r495_top - r495_sma),
            r251_arcvh(),
            r251_g4(r495_middle, r495_top - r251_O, r251_widths.heading(0, r495_stroke, {
                'y': 1,
                'x': r495_slope
            })),
            r251_archv(),
            r251_flat(r495_right, r495_top - r495_smb),
            r251_curl(r495_right, r495_bottom, r251_heading(r251_DOWNWARD))
        ];
    };
    var r251_nShoulder = function _r251_t51() {
        var _r499_t1 = arguments;
        var r499_a = _r499_t1;
        return function _r499_t2() {
            var _r501_t0 = this;
            var r501_currentGlyph = _r501_t0;
            r501_currentGlyph.include(r251_dispiro(r251_nShoulderKnots.apply(null, r499_a)));
            return void 0;
        };
    };
    var r251_mShoulderSpiro = function _r251_t52() {
        var _r503_t7 = arguments;
        var _r503_t0 = [].slice.call(_r503_t7, 0);
        var _r503_t1 = [];
        var _r503_t2 = 0;
        for (; _r503_t2 < _r503_t0.length; _r503_t2 = _r503_t2 + 1)
            if (!(_r503_t0[_r503_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r503_t1.push(_r503_t0[_r503_t2]);
        var r503_left = r1_fallback(r503_left, _r503_t1[0]);
        var r503_right = r1_fallback(r503_right, _r503_t1[1]);
        var r503_top = r1_fallback(r503_top, _r503_t1[2]);
        var r503_bottom = r1_fallback(r503_bottom, _r503_t1[3]);
        var r503_width = r1_fallback(r503_width, _r503_t1[4]);
        var r503_fine = r1_fallback(r503_fine, _r503_t1[5]);
        var r503_diversity = r1_fallback(r503_diversity, _r503_t1[6]);
        var _r503_t3 = _r503_t0;
        var _r503_t4 = _r503_t3.length;
        var _r503_t5 = 0;
        for (; _r503_t5 < _r503_t4; _r503_t5 = _r503_t5 + 1) {
            _r503_t2 = _r503_t3[_r503_t5];
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'left')
                r503_left = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'right')
                r503_right = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'top')
                r503_top = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'bottom')
                r503_bottom = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'width')
                r503_width = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'fine')
                r503_fine = _r503_t2.right;
            if (_r503_t2 && _r503_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'diversity')
                r503_diversity = _r503_t2.right;
        }
        return function _r503_t8() {
            var _r508_t0 = this;
            var r508_currentGlyph = _r508_t0;
            var r508_fix = r251_TANSLANT * r251_STROKE * r251_HVCONTRAST * r503_width / r251_STROKE;
            var r508_sm = r251_SMALLSMOOTH * 0.7 * r1_fallback(r503_diversity, 1);
            r508_currentGlyph.include(r251_xn$spirooutline$1aao(r251_corner(r503_right - r503_width * r251_HVCONTRAST, r503_bottom), r251_curl(r503_right - r503_width * r251_HVCONTRAST, r503_top - r508_sm + r508_fix), r251_arcvh(8, 'no-tiny'), r251_g2(r1_mix(r503_left, r503_right - r503_width * r251_HVCONTRAST, 0.5), r503_top - r251_O - r503_width), r251_archv(8, 'no-tiny'), r251_flat(r503_left, r503_top - r508_sm - r508_fix), r251_corner(r503_left, r503_top - r508_sm - r508_fix - 1), r251_corner(r503_left - r503_fine, r503_top - r508_sm - 1), r251_curl(r503_left - r503_fine, r503_top - r508_sm), r251_arcvh(8, 'no-tiny'), r251_g2(r1_mix(r503_left - r503_fine * r251_HVCONTRAST, r503_right, 0.5), r503_top - r251_O), r251_archv(8, 'no-tiny'), r251_flat(r503_right, r503_top - r508_sm), r251_corner(r503_right, r503_bottom), r251_close()));
            return void 0;
        };
    };
    var r251_HBar = function _r251_t53(r510_xleft, r510_xright, r510_y, r510__fine) {
        return function _r510_t2() {
            var _r512_t0 = this;
            var r512_currentGlyph = _r512_t0;
            r512_currentGlyph.include(r251_dispiro(r251_widths.center(r1_fallback(r510__fine, r251_STROKE)), r251_flat(r510_xleft, r510_y, r251_heading(r251_Rightward.call(_r512_t0))), r251_curl(r510_xright, r510_y, r251_heading(r251_Rightward.call(_r512_t0)))));
            return void 0;
        };
    };
    var r251_HBarTop = function _r251_t54(r514_xl, r514_xr, r514_y, r514__fine) {
        return r251_HBar(r514_xl, r514_xr, r514_y - r1_fallback(r514__fine, r251_STROKE) * 0.5, r514__fine);
    };
    var r251_HBarBottom = function _r251_t55(r515_xl, r515_xr, r515_y, r515__fine) {
        return r251_HBar(r515_xl, r515_xr, r515_y + r1_fallback(r515__fine, r251_STROKE) * 0.5, r515__fine);
    };
    var r251_HOverlayBar = function _r251_t56(r516_xleft, r516_xright, r516_y, r516_s) {
        return r251_dispiro(r251_widths.center(r1_fallback(r516_s, r251_OVERLAYSTROKE)), r251_flat(r516_xleft, r516_y), r251_curl(r516_xright, r516_y));
    };
    var r251_VBar = function _r251_t57(r517_x, r517_ydown, r517_yup, r517__fine) {
        return function _r517_t2() {
            var _r519_t0 = this;
            var r519_currentGlyph = _r519_t0;
            var r519_fine = r1_fallback(r517__fine, r251_STROKE);
            r519_currentGlyph.include(r251_dispiro(r251_widths.center(r519_fine), r251_flat(r517_x, r517_ydown, r251_heading((r517_ydown < r517_yup ? r251_Upward : r251_Downward).call(_r519_t0))), r251_curl(r517_x, r517_yup, r251_heading((r517_ydown < r517_yup ? r251_Upward : r251_Downward).call(_r519_t0)))));
            return void 0;
        };
    };
    var r251_VBarLeft = function _r251_t58(r521_x, r521_yd, r521_yu, r521__fine) {
        return r251_VBar(r521_x + r1_fallback(r521__fine, r251_STROKE) * 0.5 * r251_HVCONTRAST, r521_yd, r521_yu, r521__fine);
    };
    var r251_VBarRight = function _r251_t59(r522_x, r522_yd, r522_yu, r522__fine) {
        return r251_VBar(r522_x - r1_fallback(r522__fine, r251_STROKE) * 0.5 * r251_HVCONTRAST, r522_yd, r522_yu, r522__fine);
    };
    var r251_VerticalHook = function _r251_t60(r523_x, r523_y, r523_extend, r523_depth, r523_fine, r523_strg) {
        return function _r523_t2() {
            var _r525_t0 = this;
            var r525_currentGlyph = _r525_t0;
            r525_currentGlyph.include(r251_dispiro(r251_widths.center(r1_fallback(r523_fine, r251_STROKE)), r251_flat(r523_x, r523_y + r1_fallback(r523_strg, 0), r251_heading(r523_depth > 0 ? r251_DOWNWARD : r251_UPWARD)), r251_curl(r523_x, r523_y - (r523_depth > 0 ? 0.01 : -0.01), r251_heading(r523_depth > 0 ? r251_DOWNWARD : r251_UPWARD)), r251_arcvh(), r251_flat(r523_x + r523_extend - (r523_extend > 0 ? 0.01 : -0.01), r523_y - r523_depth), r251_curl(r523_x + r523_extend, r523_y - r523_depth)));
            return void 0;
        };
    };
    var r251_LegShape = function _r251_t61() {
        var _r527_t9 = arguments;
        var _r527_t0 = [].slice.call(_r527_t9, 0);
        var _r527_t1 = [];
        var _r527_t2 = 0;
        for (; _r527_t2 < _r527_t0.length; _r527_t2 = _r527_t2 + 1)
            if (!(_r527_t0[_r527_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r527_t1.push(_r527_t0[_r527_t2]);
        var r527_ztop = r1_fallback(r527_ztop, _r527_t1[0], void 0);
        var r527_zbot = r1_fallback(r527_zbot, _r527_t1[1], void 0);
        var r527_xb = r1_fallback(r527_xb, _r527_t1[2]);
        var r527_fine = r1_fallback(r527_fine, _r527_t1[3], r251_STROKE);
        var _r527_t3 = _r527_t0;
        var _r527_t4 = _r527_t3.length;
        var _r527_t5 = 0;
        for (; _r527_t5 < _r527_t4; _r527_t5 = _r527_t5 + 1) {
            _r527_t2 = _r527_t3[_r527_t5];
            if (_r527_t2 && _r527_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'ztop')
                r527_ztop = _r527_t2.right;
            if (_r527_t2 && _r527_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'zbot')
                r527_zbot = _r527_t2.right;
            if (_r527_t2 && _r527_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'xb')
                r527_xb = _r527_t2.right;
            if (_r527_t2 && _r527_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'fine')
                r527_fine = _r527_t2.right;
        }
        var _r527_t6 = r527_ztop;
        var r527_xt = _r527_t6.x;
        var r527_top = _r527_t6.y;
        var _r527_t7 = r527_zbot;
        var r527_xs = _r527_t7.x;
        var r527_bottom = _r527_t7.y;
        return function _r527_t10() {
            var _r532_t0 = this;
            var r532_currentGlyph = _r532_t0;
            r532_currentGlyph.include(r251_dispiro(r251_widths.lhs(r527_fine), r251_flat(r527_xt, r527_top, r251_heading(r251_DOWNWARD)), r251_curl(r527_xb, r527_bottom + r251_LONGJUT), r251_alsothruthem([[
                    0.5,
                    0.94
                ]]), r251_g4.left.end(r527_xs, r527_bottom + r527_fine, r251_heading(r251_LEFTWARD))));
            return void 0;
        };
    };
    var r251_LeftHook = function _r251_t62(r534_x, r534_y, r534_xextend) {
        return function _r534_t2() {
            var _r536_t0 = this;
            var r536_currentGlyph = _r536_t0;
            var r536_fine = r251_adviceBlackness(4.25);
            r536_currentGlyph.include(r251_dispiro(r251_widths.lhs(r536_fine), r251_flat(r1_fallback(r534_xextend, r534_x + 1), r534_y), r251_curl(r534_x, r534_y), r251_archv(8), r251_g4.down.end(r534_x - r251_LeftHook.extension, r534_y - r251_HOOKX, r251_heading(r251_DOWNWARD))));
            return void 0;
        };
    };
    r251_LeftHook.extension = Math.max(r251_WIDTH * 0.15, r251_adviceBlackness(4.25) * 1.5);
    var r251_HooktopLeftBar = function _r251_t63(r538_stroke, r538_bottom) {
        return function _r538_t2() {
            var _r540_t0 = this;
            var r540_currentGlyph = _r540_t0;
            r540_currentGlyph.include(r251_dispiro(r251_widths.lhs(r1_fallback(r538_stroke, r251_STROKE)), r251_g4(r251_RIGHTSB, r251_CAP - r251_HOOK), r251_hookstart(r251_CAPO), r251_flat(r251_SB, r251_CAP - r251_SMALLSMOOTHA), r251_curl(r251_SB, r1_fallback(r538_bottom, 0), r251_heading(r251_DOWNWARD))));
            return void 0;
        };
    };
    var r251_CurlyTail = function _r251_t64() {
        var _r542_t7 = arguments;
        var _r542_t0 = [].slice.call(_r542_t7, 0);
        var _r542_t1 = [];
        var _r542_t2 = 0;
        for (; _r542_t2 < _r542_t0.length; _r542_t2 = _r542_t2 + 1)
            if (!(_r542_t0[_r542_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r542_t1.push(_r542_t0[_r542_t2]);
        var r542_fine = r1_fallback(r542_fine, _r542_t1[0]);
        var r542_rinner = r1_fallback(r542_rinner, _r542_t1[1]);
        var r542_xleft = r1_fallback(r542_xleft, _r542_t1[2]);
        var r542_bottom = r1_fallback(r542_bottom, _r542_t1[3]);
        var r542_right = r1_fallback(r542_right, _r542_t1[4]);
        var r542_x2 = r1_fallback(r542_x2, _r542_t1[5]);
        var r542_y2 = r1_fallback(r542_y2, _r542_t1[6]);
        var r542_adj = r1_fallback(r542_adj, _r542_t1[7], 0.4);
        var r542_adj2 = r1_fallback(r542_adj2, _r542_t1[8], 0.4);
        var r542_adj3 = r1_fallback(r542_adj3, _r542_t1[9], 0);
        var _r542_t3 = _r542_t0;
        var _r542_t4 = _r542_t3.length;
        var _r542_t5 = 0;
        for (; _r542_t5 < _r542_t4; _r542_t5 = _r542_t5 + 1) {
            _r542_t2 = _r542_t3[_r542_t5];
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'fine')
                r542_fine = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'rinner')
                r542_rinner = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'xleft')
                r542_xleft = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'bottom')
                r542_bottom = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'right')
                r542_right = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'x2')
                r542_x2 = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'y2')
                r542_y2 = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'adj')
                r542_adj = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'adj2')
                r542_adj2 = _r542_t2.right;
            if (_r542_t2 && _r542_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r542_t2.left === 'adj3')
                r542_adj3 = _r542_t2.right;
        }
        var r542_ltr = r542_right > r542_xleft;
        r542_right = r542_right - r542_fine * (r542_ltr ? 1 : -1);
        var r542_mid = r1_mix(r1_mix(r542_xleft, r542_right, 0.5), r542_right - r542_rinner * (r542_ltr ? 1 : -1), r542_adj);
        var r542_midu = r1_mix(r1_mix(r542_xleft, r542_right, 0.5), r542_right - r542_rinner * (r542_ltr ? 1 : -1), r542_adj2);
        return [
            r251_g4[r542_ltr ? 'right' : 'left'].mid(r542_mid + r251_CORRECTION_OMIDX * r542_fine * r542_adj3 * (r542_ltr ? 1 : -1), r542_bottom + r542_fine + r251_O, r251_widths(r542_ltr ? 0 : r542_fine, r542_ltr ? r542_fine : 0)),
            r251_archv(2),
            r251_g4(r542_right, r542_bottom + r542_fine + r542_rinner - 0.1),
            r251_g4(r542_right, r542_bottom + r542_fine + r542_rinner + 0.1),
            r251_arcvh(2),
            r251_g4(r542_mid, r542_bottom + r542_fine + r542_rinner * 2 - r251_O),
            r251_alsothruthem([
                [
                    0.25,
                    0.06
                ],
                [
                    0.52,
                    0.25
                ]
            ], r251_important),
            r251_g4(r542_x2, r542_y2)
        ];
    };
    var r251_HCurlyTail = function _r251_t65(r546_fine, r546_wide, r546_rinner, r546_left, r546_m1, r546__right, r546_x1, r546_x2, r546_y2) {
        return function _r546_t2() {
            var _r548_t0 = this;
            var r548_currentGlyph = _r548_t0;
            var r548_right = r546__right - r546_fine;
            var r548_mid = r548_right - r546_rinner + r251_O;
            r548_currentGlyph.include(r251_dispiro(r251_widths.rhs(r546_wide), r251_flat(r546_left, r546_wide, r251_heading(r251_RIGHTWARD)), r251_curl(r546_m1, r546_wide, r251_heading(r251_RIGHTWARD)), r251_archv(8), r251_g4(r548_right, r546_wide + r546_rinner - r251_O / 2, r251_widths.heading(0, r546_fine, {
                'x': -r251_HVCONTRAST,
                'y': (r546_wide - r546_fine) / (r546_wide + r546_rinner * 2 - r251_O)
            })), r251_arcvh(8), r251_g4.left.mid(r548_mid, r546_wide + r546_rinner * 2 - r251_O, r251_heading(r251_LEFTWARD)), r251_quadcontrols((r546_x1 - r548_mid) / (r546_x2 - r548_mid), 0, 8), r251_g4(r546_x2, r546_y2)));
            return void 0;
        };
    };
    var r251_FlatSlashShape = function _r251_t66(r550_middlex, r550_middle, r550_fine, r550_kx, r550_ky) {
        return function _r550_t2() {
            var _r552_t0 = this;
            var r552_currentGlyph = _r552_t0;
            r552_currentGlyph.include(r251_dispiro(r251_flat(r550_middlex - r251_LONGJUT * r1_fallback(r550_kx, 0.8), r550_middle - r251_LONGJUT * r1_fallback(r550_ky, 0.4), r251_widths(r550_fine, r550_fine)), r251_curl(r550_middlex + r251_LONGJUT * r1_fallback(r550_kx, 0.8), r550_middle + r251_LONGJUT * r1_fallback(r550_ky, 0.4))));
            return void 0;
        };
    };
    var r251_determineMixR = function _r251_t67(r554_w, r554_v, r554_u, r554_sw) {
        var r554_adjust;
        var r554_r = r554_w <= r554_v ? 0.5 : 1 / (Math.pow(1 - Math.pow(1 - r554_v / r554_w, r251_SUPERNESS), 1 / r251_SUPERNESS) + 1);
        var r554_idepth = r554_w - r554_sw;
        var r554_iwidth = r554_u * r554_r - r554_sw;
        if (r554_iwidth > 0 && r554_idepth > 0 && r554_iwidth / r554_idepth >= 2) {
            r554_adjust = r1_clamp(0.975, 1, 1 - (r554_iwidth / r554_idepth - 2) * 0.0125);
            r554_r = r554_r * r554_adjust;
        }
        if (r554_r < 0.5)
            r554_r = 0.5;
        return r554_r;
    };
    var r251_nHookSegments = 12;
    var r251_HookShape = function _r251_t68(r555_toStraight, r555_toFinish, r555_isStart, r555_y, r555_tight, r555_s, r555_kkaf, r555_dontadjust) {
        var r555_fraction, r555_fractionAfter, r555_myfinal, _r555_t11, _r555_t12;
        var r555_atBottom = r555_toStraight.y > r555_y;
        var r555_sw = r1_fallback(r555_s, r251_STROKE);
        var r555_ltr = r555_isStart ? r555_toFinish.x < r555_toStraight.x : r555_toFinish.x > r555_toStraight.x;
        var r555_dtu = r555_isStart ? r555_y > r555_toFinish.y : r555_y < r555_toFinish.y;
        if (!r555_dontadjust) {
            r555_toFinish.x = r555_toFinish.x + r251_OXHOOK * (r555_ltr ? -1 : 1) * (r555_isStart ? -1 : 1);
            if (r555_atBottom && r555_ltr && !r555_isStart) {
                r555_toFinish.x = r555_toFinish.x + r251_TAILADJX * r251_TANSLANT;
                r555_toFinish.y = r555_toFinish.y - r251_TAILADJY * r251_TANSLANT;
            }
        }
        var r555_w = Math.abs(r555_toStraight.y - r555_y);
        var r555_v = Math.abs(r555_toFinish.y - r555_y);
        var r555_u = Math.abs(r555_toFinish.x - r555_toStraight.x);
        var r555_mixr = r251_determineMixR(r555_w, r555_v, r555_u, r555_sw);
        var r555_mx = r1_mix(r555_toStraight.x, r555_toFinish.x, r555_mixr) + (r555_tight && r555_tight.shift ? r555_tight.shift : 1 - (r555_tight || 0)) * (r555_atBottom ? 1 : -1) * r251_CORRECTION_OMIDX * r555_sw;
        var _r555_t5 = r251_g4[r555_ltr ? 'right' : 'left'];
        var _r555_t6 = _r555_t5.mid;
        var _r555_t7 = r555_mx;
        var _r555_t8 = r555_y;
        var _r555_t9 = r1_fallback;
        var _r555_t10 = r555_kkaf;
        if (r555_tight) {
            _r555_t12 = r555_ltr ? r251_RIGHTWARD : r251_LEFTWARD;
            _r555_t11 = function (_r555_leti0) {
                var r556_s = _r555_leti0;
                return r251_heading({
                    'x': r556_s.x * r1_fallback(r555_tight.skew, 1),
                    'y': r556_s.y
                });
            }(_r555_t12);
        } else
            _r555_t11 = void 0;
        var _r555_t15 = _r555_t9(_r555_t10, _r555_t11);
        var r555_keyKnot = _r555_t6.call(_r555_t5, _r555_t7, _r555_t8, _r555_t15);
        var r555_faf = r555_toFinish.af;
        r555_toFinish.af = function _r555_t16() {
            var _r557_t0 = this;
            var _r557_t1 = arguments;
            var r557_rad = Math.min(r555_w, r555_mixr * r555_u);
            var r557_skew0 = r1_clamp(0, r555_w, r555_w - r555_v) / r557_rad + (r1_clamp(1, 1.5, r555_mixr * r555_u / r555_w) - 1) * 0.5;
            var r557_depth = r555_v + r557_skew0 * r555_sw - r555_sw;
            var r557_shallowLimit = r555_sw * 0.5;
            var r557_skew = r1_clamp(0, 1 / 2, r557_skew0 + r1_clamp(0, r557_shallowLimit, r557_shallowLimit - r557_depth) / r557_rad);
            if (r555_faf)
                r555_faf.apply(_r557_t0, _r557_t1);
            return _r557_t0['heads-to']({
                'x': r251_CONTRAST / Math.sqrt(1 + r557_skew * r557_skew) * (r555_dtu ? -1 : 1),
                'y': r557_skew / Math.sqrt(1 + r557_skew * r557_skew) * (r555_ltr ? 1 : -1)
            });
        };
        var r555_segBefore = [];
        var r555_segAfter = [];
        var _r555_t1 = 1;
        var _r555_t2 = r251_nHookSegments;
        var r555_j = _r555_t1;
        for (; r555_j < _r555_t2; r555_j = r555_j + 1) {
            r555_fraction = r555_j / r251_nHookSegments;
            r555_fractionAfter = r555_fraction * (1 - r555_mixr) / r555_mixr;
            r555_myfinal = r251_superxy((1 - r555_mixr) / r555_mixr);
            r555_segBefore.push(r251_g4(r1_mix(r555_mx, r555_toStraight.x, r555_fraction), r1_mix(r555_y, r555_toStraight.y, 1 - r251_superxy(r555_fraction)), r251_unimportant));
            r555_segAfter.push(r251_g4(r1_mix(r555_mx, r555_toFinish.x, r555_fraction), r1_mix(r555_y, r555_toFinish.y, (1 - r251_superxy(r555_fractionAfter)) / (1 - r555_myfinal)), r251_unimportant));
            if (!r555_tight && r555_w < r555_u * r555_mixr)
                r555_segAfter = [];
        }
        if (r555_isStart)
            return [
                r555_segAfter.reverse(),
                r555_keyKnot,
                r555_segBefore
            ];
        else
            return [
                r555_segBefore.reverse(),
                r555_keyKnot,
                r555_segAfter
            ];
    };
    var r251_hookstart = function _r251_t69() {
        var _r560_t7 = arguments;
        var _r560_t0 = [].slice.call(_r560_t7, 0);
        var _r560_t1 = [];
        var _r560_t2 = 0;
        for (; _r560_t2 < _r560_t0.length; _r560_t2 = _r560_t2 + 1)
            if (!(_r560_t0[_r560_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r560_t1.push(_r560_t0[_r560_t2]);
        var r560_y = r1_fallback(r560_y, _r560_t1[0]);
        var r560_tight = r1_fallback(r560_tight, _r560_t1[1]);
        var r560_sw = r1_fallback(r560_sw, _r560_t1[2]);
        var r560_kkaf = r1_fallback(r560_kkaf, _r560_t1[3]);
        var r560_dontadjust = r1_fallback(r560_dontadjust, _r560_t1[4]);
        var _r560_t3 = _r560_t0;
        var _r560_t4 = _r560_t3.length;
        var _r560_t5 = 0;
        for (; _r560_t5 < _r560_t4; _r560_t5 = _r560_t5 + 1) {
            _r560_t2 = _r560_t3[_r560_t5];
            if (_r560_t2 && _r560_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r560_t2.left === 'y')
                r560_y = _r560_t2.right;
            if (_r560_t2 && _r560_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r560_t2.left === 'tight')
                r560_tight = _r560_t2.right;
            if (_r560_t2 && _r560_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r560_t2.left === 'sw')
                r560_sw = _r560_t2.right;
            if (_r560_t2 && _r560_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r560_t2.left === 'kkaf')
                r560_kkaf = _r560_t2.right;
            if (_r560_t2 && _r560_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r560_t2.left === 'dontadjust')
                r560_dontadjust = _r560_t2.right;
        }
        return {
            'type': 'interpolate',
            'af': function _r560_t8(r564_before, r564_after) {
                return r251_HookShape(r564_after, r564_before, true, r560_y, r560_tight, r560_sw, r560_kkaf, r560_dontadjust);
            }
        };
    };
    var r251_hookend = function _r251_t70() {
        var _r565_t7 = arguments;
        var _r565_t0 = [].slice.call(_r565_t7, 0);
        var _r565_t1 = [];
        var _r565_t2 = 0;
        for (; _r565_t2 < _r565_t0.length; _r565_t2 = _r565_t2 + 1)
            if (!(_r565_t0[_r565_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r565_t1.push(_r565_t0[_r565_t2]);
        var r565_y = r1_fallback(r565_y, _r565_t1[0]);
        var r565_tight = r1_fallback(r565_tight, _r565_t1[1]);
        var r565_sw = r1_fallback(r565_sw, _r565_t1[2]);
        var r565_kkaf = r1_fallback(r565_kkaf, _r565_t1[3]);
        var r565_dontadjust = r1_fallback(r565_dontadjust, _r565_t1[4]);
        var _r565_t3 = _r565_t0;
        var _r565_t4 = _r565_t3.length;
        var _r565_t5 = 0;
        for (; _r565_t5 < _r565_t4; _r565_t5 = _r565_t5 + 1) {
            _r565_t2 = _r565_t3[_r565_t5];
            if (_r565_t2 && _r565_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r565_t2.left === 'y')
                r565_y = _r565_t2.right;
            if (_r565_t2 && _r565_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r565_t2.left === 'tight')
                r565_tight = _r565_t2.right;
            if (_r565_t2 && _r565_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r565_t2.left === 'sw')
                r565_sw = _r565_t2.right;
            if (_r565_t2 && _r565_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r565_t2.left === 'kkaf')
                r565_kkaf = _r565_t2.right;
            if (_r565_t2 && _r565_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r565_t2.left === 'dontadjust')
                r565_dontadjust = _r565_t2.right;
        }
        return {
            'type': 'interpolate',
            'af': function _r565_t8(r569_before, r569_after) {
                return r251_HookShape(r569_before, r569_after, false, r565_y, r565_tight, r565_sw, r565_kkaf, r565_dontadjust);
            }
        };
    };
    var r251_CyrDescender = function _r251_t71(r570_x, r570_shift, r570_connex) {
        return function _r570_t2() {
            var _r572_t0 = this;
            var r572_currentGlyph = _r572_t0;
            var r572_descenderOverflow = r251_SLAB ? r251_SIDEJUT : (r251_RIGHTSB - r251_SB) * r1_fallback(r570_shift, 0.1);
            r572_currentGlyph.include(r251_VBarRight(r570_x + r572_descenderOverflow + 0.25 * r251_STROKE, r251_HALFSTROKE - r251_LONGJUT, r251_STROKE));
            if (!r251_SLAB && r572_descenderOverflow > r251_STROKE * 0.75 || r570_connex)
                r572_currentGlyph.include(r251_HBarTop(r570_x - r251_HALFSTROKE * r251_HVCONTRAST, r570_x + r572_descenderOverflow, r251_STROKE));
            return void 0;
        };
    };
    var r251_refair = function _r251_t72(r575_g) {
        var _r575_t0 = 0;
        var _r575_t1 = r575_g.contours.length;
        var r575_j = _r575_t0;
        for (; r575_j < _r575_t1; r575_j = r575_j + 1)
            r575_g.contours[r575_j] = r1_fairify(r575_g.contours[r575_j], r251_globalTransform);
        return void 0;
    };
    var r251_Fork = function _r251_t73(r578_gs, r578_ps) {
        var r578_glyphid, r578_k, r578_v, r578_forkFont, _r578_t3, _r578_t4, _r578_t5, _r578_t6, _r578_t7, _r578_t8, _r578_t11;
        var r578_sbh = {};
        var r578_found = true;
        var r578_PENDING = 1;
        var r578_CHECKED = 2;
        var _r578_t0 = r578_gs;
        var _r578_t1 = _r578_t0.length;
        var _r578_t2 = 0;
        for (; _r578_t2 < _r578_t1; _r578_t2 = _r578_t2 + 1) {
            r578_glyphid = _r578_t0[_r578_t2];
            r578_sbh[r578_glyphid] = r578_PENDING;
        }
        for (; r578_found;) {
            r578_found = false;
            _r578_t3 = Object.keys(r578_sbh);
            _r578_t4 = _r578_t3.length;
            _r578_t5 = 0;
            for (; _r578_t5 < _r578_t4; _r578_t5 = _r578_t5 + 1) {
                r578_glyphid = _r578_t3[_r578_t5];
                if (r578_sbh[r578_glyphid] === r578_PENDING) {
                    r578_sbh[r578_glyphid] = r578_CHECKED;
                    if (r251_dependencyProfile[r578_glyphid]) {
                        _r578_t6 = r251_dependencyProfile[r578_glyphid];
                        _r578_t7 = _r578_t6.length;
                        _r578_t8 = 0;
                        for (; _r578_t8 < _r578_t7; _r578_t8 = _r578_t8 + 1) {
                            r578_k = _r578_t6[_r578_t8];
                            if (!r578_sbh[r578_k]) {
                                r578_sbh[r578_k] = r578_PENDING;
                                r578_found = true;
                            }
                        }
                    }
                }
            }
        }
        var r578_shouldBuildList = Object.keys(r578_sbh).filter(function _r578_t14(r585_x) {
            return !!r585_x;
        });
        var r578_shouldBuildUnicodes = r578_shouldBuildList.map(function _r578_t15(r586_x) {
            return r251_glyphs[r586_x] && r251_glyphs[r586_x].unicode ? r251_glyphs[r586_x].unicode[0] : void 0;
        }).filter(function _r578_t16(r587_x) {
            return !!r587_x;
        });
        var r578_p = {};
        var _r578_t9 = _r1_t3(r578_ps)[Symbol.iterator]();
        var _r578_t10 = void 0;
        for (; !(_r578_t10 = _r578_t9.next()).done; r578_p[r578_k] = r578_v) {
            _r578_t11 = _r578_t10.value;
            r578_k = _r578_t11[0];
            r578_v = _r578_t11[1];
        }
        try {
            r578_forkFont = r251_buildFont.call(r251_TempFont(), r578_p, r578_shouldBuildList, r578_shouldBuildUnicodes);
        } catch (r578_ex) {
            if (r578_ex.glyfMap)
                return r578_ex.glyfMap;
            else
                throw r578_ex;
        }
        return r578_forkFont.glyfMap;
    };
    var r251_Miniature = function _r251_t74() {
        var _r593_t7 = arguments;
        var _r593_t0 = [].slice.call(_r593_t7, 0);
        var _r593_t1 = [];
        var _r593_t2 = 0;
        for (; _r593_t2 < _r593_t0.length; _r593_t2 = _r593_t2 + 1)
            if (!(_r593_t0[_r593_t2] instanceof r251_xn$NamedParameterPair$2Lrc9b))
                _r593_t1.push(_r593_t0[_r593_t2]);
        var r593_glyphs = r1_fallback(r593_glyphs, _r593_t1[0]);
        var r593_crowd = r1_fallback(r593_crowd, _r593_t1[1]);
        var r593_scale = r1_fallback(r593_scale, _r593_t1[2]);
        var r593_slantAngle = r1_fallback(r593_slantAngle, _r593_t1[3], r251_para.slantAngle);
        var r593_unfair = r1_fallback(r593_unfair, _r593_t1[4]);
        var r593_sbscale = r1_fallback(r593_sbscale, _r593_t1[5], r251_WIDTH / r251_UPM);
        var r593_mono = r1_fallback(r593_mono, _r593_t1[6], false);
        var _r593_t3 = _r593_t0;
        var _r593_t4 = _r593_t3.length;
        var _r593_t5 = 0;
        for (; _r593_t5 < _r593_t4; _r593_t5 = _r593_t5 + 1) {
            _r593_t2 = _r593_t3[_r593_t5];
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'glyphs')
                r593_glyphs = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'crowd')
                r593_crowd = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'scale')
                r593_scale = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'slantAngle')
                r593_slantAngle = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'unfair')
                r593_unfair = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'sbscale')
                r593_sbscale = _r593_t2.right;
            if (_r593_t2 && _r593_t2 instanceof r251_xn$NamedParameterPair$2Lrc9b && _r593_t2.left === 'mono')
                r593_mono = _r593_t2.right;
        }
        var r593_forkedPara = Object.create(r251_para);
        r593_forkedPara.stroke = r251_adviceBlackness(r593_crowd) / r593_scale;
        r593_forkedPara.ess = r251_para.ess * r593_forkedPara.stroke / r251_para.stroke;
        r593_forkedPara.dotsize = r251_para.dotsize * r593_forkedPara.stroke / r251_para.stroke;
        r593_forkedPara.periodsize = r251_para.periodsize * r593_forkedPara.stroke / r251_para.stroke;
        r593_forkedPara.sb = r251_SB * r593_sbscale;
        r593_forkedPara.slantAngle = r593_slantAngle;
        r593_forkedPara.unfair = r593_unfair;
        if (r593_mono)
            r593_forkedPara.diversityM = 1;
        return r251_Fork(r593_glyphs, r593_forkedPara);
    };
    var r251_Thinner = function _r251_t75(r597_glyphs, r597_p) {
        var r597_forkedPara = Object.create(r251_para);
        r597_forkedPara.width = r251_WIDTH * r597_p;
        r597_forkedPara.accentx = r251_ACCENTX * r597_p;
        r597_forkedPara.jut = r251_JUT * r597_p;
        r597_forkedPara.longjut = r251_LONGJUT * r597_p;
        r597_forkedPara.diversityM = 1;
        return r251_Fork(r597_glyphs, r597_forkedPara);
    };
    var r251_Widen = function _r251_t76(r598_glyphs, r598_p, r598_psb) {
        var r598_forkedPara = Object.create(r251_para);
        r598_forkedPara.width = r251_WIDTH * r598_p;
        r598_forkedPara.sb = r251_SB * r1_fallback(r598_psb, r598_p);
        r598_forkedPara.accentx = r251_ACCENTX * r598_p;
        r598_forkedPara.jut = r251_JUT * r598_p;
        r598_forkedPara.longjut = r251_LONGJUT * r598_p;
        r598_forkedPara.hookx = r251_HOOKX * r598_p;
        r598_forkedPara.smoothadjust = r251_para.smoothadjust * r598_p;
        return r251_Fork(r598_glyphs, r598_forkedPara);
    };
    var r251_FlipAround = function _r251_t77(r599_x, r599_y, r599_sx, r599_sy) {
        return function _r599_t2() {
            var _r601_t0 = this;
            var r601_currentGlyph = _r601_t0;
            r601_currentGlyph['apply-transform'](r251_Upright());
            r601_currentGlyph['apply-transform'](r251_Translate(-r599_x, -r599_y));
            r601_currentGlyph['apply-transform'](r251_Scale(r1_fallback(r599_sx, -1), r1_fallback(r599_sy, r599_sx, -1)));
            r601_currentGlyph['apply-transform'](r251_Translate(r599_x, r599_y));
            r601_currentGlyph['apply-transform'](r251_Italify());
            return void 0;
        };
    };
    var r251_ScaleAround = r251_FlipAround;
    var r251_Realign = function _r251_t78(r607_x, r607_y, r607_sx, r607_sy) {
        return function _r607_t2() {
            var _r609_t0 = this;
            var r609_currentGlyph = _r609_t0;
            r609_currentGlyph['apply-transform'](r251_Upright());
            r609_currentGlyph['apply-transform'](r251_Translate(-r607_x, -r607_y));
            r609_currentGlyph['apply-transform'](r251_Translate(r607_sx, r607_sy));
            r609_currentGlyph['apply-transform'](r251_Italify());
            return void 0;
        };
    };
    var r251_ForceUpright = function _r251_t79() {
        return function _r614_t2() {
            var _r616_t0 = this;
            _r616_t0.gizmo = r251_Translate(0, 0);
            return void 0;
        };
    };
    var r251_Overlay = function _r251_t80(r617_overlay, r617_background) {
        return function _r617_t2() {
            var r619_c, r619_z, _r619_t2, _r619_t3, _r619_t7, _r619_t8, _r619_t9;
            var _r619_t10 = this;
            var r619_currentGlyph = _r619_t10;
            var r619_sw = r251_adviceBlackness(6) / 2;
            var r619_candidates = [];
            var r619_segs = 3;
            if (r617_background.anchors)
                r619_currentGlyph.include({ 'anchors': r617_background.anchors });
            var _r619_t0 = 0 - r619_segs;
            var _r619_t1 = r619_segs;
            var r619_r = _r619_t0;
            for (; r619_r <= _r619_t1; r619_r = r619_r + 1) {
                _r619_t2 = 0 - r619_segs;
                _r619_t3 = r619_segs;
                r619_c = _r619_t2;
                for (; r619_c <= _r619_t3; r619_c = r619_c + 1)
                    (function () {
                        var r626_dx = r619_r / r619_segs * r619_sw;
                        var r626_dy = r619_c / r619_segs * r619_sw;
                        return r619_candidates.push(function _r626_t0() {
                            var _r628_t0 = this;
                            var r628_currentGlyph = _r628_t0;
                            if (r617_background.anchors)
                                r628_currentGlyph.include({ 'anchors': r617_background.anchors });
                            r628_currentGlyph.include(r617_overlay);
                            r628_currentGlyph['apply-transform'](r251_Translate(r626_dx, r626_dy));
                            return void 0;
                        });
                    }());
            }
            var _r619_t4 = r617_overlay.contours;
            var _r619_t5 = _r619_t4.length;
            var _r619_t6 = 0;
            for (; _r619_t6 < _r619_t5; _r619_t6 = _r619_t6 + 1) {
                r619_c = _r619_t4[_r619_t6];
                _r619_t7 = r619_c;
                _r619_t8 = _r619_t7.length;
                _r619_t9 = 0;
                for (; _r619_t9 < _r619_t8; _r619_t9 = _r619_t9 + 1) {
                    r619_z = _r619_t7[_r619_t9];
                    if (r619_z.on)
                        (function () {
                            var r637_x = r619_z.x;
                            var r637_y = r619_z.y;
                            return r619_candidates.push(function _r637_t0() {
                                var _r639_t0 = this;
                                var r639_currentGlyph = _r639_t0;
                                _r639_t0.gizmo = r251_Translate(0, 0);
                                r639_currentGlyph['start-from'](r637_x - r619_sw, r637_y - r619_sw);
                                r639_currentGlyph['line-to'](r637_x + r619_sw, r637_y - r619_sw);
                                r639_currentGlyph['line-to'](r637_x + r619_sw, r637_y + r619_sw);
                                r639_currentGlyph['line-to'](r637_x - r619_sw, r637_y + r619_sw);
                                return void 0;
                            });
                        }());
                }
            }
            r619_currentGlyph.include(r251_difference(r617_background, r251_union.apply(null, r619_candidates)));
            r619_currentGlyph.include(r617_overlay);
            return void 0;
        };
    };
    return {
        'queryFeatureSelector': r251_queryFeatureSelector,
        'select-variant': r251_xn$selectvariant$7Hrq,
        'italic-variant': r251_xn$italicvariant$7Hrq,
        'alias': r251_alias,
        'composite': r251_composite,
        'into-unicode': r251_xn$intounicode$5sIl,
        'turned': r251_turned,
        'dual': r251_dual,
        'hcombine': r251_hcombine,
        'vdual': r251_vdual,
        'vcombine': r251_vcombine,
        'fwl': r251_fwl,
        'fwr': r251_fwr,
        'dwl': r251_dwl,
        'dwr': r251_dwr,
        'dwc': r251_dwc,
        'Rect': r251_Rect,
        'Ring': r251_Ring,
        'RingAt': r251_RingAt,
        'DotAt': r251_DotAt,
        'CircleRing': r251_CircleRing,
        'CircleRingAt': r251_CircleRingAt,
        'CircleDotAt': r251_CircleDotAt,
        'OShape': r251_OShape,
        'OShapeOutline': r251_OShapeOutline,
        'OBarLeftShape': r251_OBarLeftShape,
        'OBarRightShape': r251_OBarRightShape,
        'LeftwardTopSerif': r251_LeftwardTopSerif,
        'LeftwardBottomSerif': r251_LeftwardBottomSerif,
        'RightwardTopSerif': r251_RightwardTopSerif,
        'RightwardBottomSerif': r251_RightwardBottomSerif,
        'CenterTopSerif': r251_CenterTopSerif,
        'CenterBottomSerif': r251_CenterBottomSerif,
        'DownwardRightSerif': r251_DownwardRightSerif,
        'UpwardRightSerif': r251_UpwardRightSerif,
        'DownwardLeftSerif': r251_DownwardLeftSerif,
        'UpwardLeftSerif': r251_UpwardLeftSerif,
        'AIVSerifs': r251_AIVSerifs,
        'AIHSerifs': r251_AIHSerifs,
        'AINSerifs': r251_AINSerifs,
        'AICyrISerifs': r251_AICyrISerifs,
        'AIMSerifs': r251_AIMSerifs,
        'halfXStrand': r251_halfXStrand,
        'xStrand': r251_xStrand,
        'nShoulderKnots': r251_nShoulderKnots,
        'nShoulder': r251_nShoulder,
        'mShoulderSpiro': r251_mShoulderSpiro,
        'HBar': r251_HBar,
        'HBarTop': r251_HBarTop,
        'HBarBottom': r251_HBarBottom,
        'HOverlayBar': r251_HOverlayBar,
        'VBar': r251_VBar,
        'VBarLeft': r251_VBarLeft,
        'VBarRight': r251_VBarRight,
        'VerticalHook': r251_VerticalHook,
        'LegShape': r251_LegShape,
        'LeftHook': r251_LeftHook,
        'HooktopLeftBar': r251_HooktopLeftBar,
        'CurlyTail': r251_CurlyTail,
        'HCurlyTail': r251_HCurlyTail,
        'FlatSlashShape': r251_FlatSlashShape,
        'determineMixR': r251_determineMixR,
        'HookShape': r251_HookShape,
        'hookstart': r251_hookstart,
        'hookend': r251_hookend,
        'CyrDescender': r251_CyrDescender,
        'refair': r251_refair,
        'Fork': r251_Fork,
        'Miniature': r251_Miniature,
        'Thinner': r251_Thinner,
        'Widen': r251_Widen,
        'FlipAround': r251_FlipAround,
        'ScaleAround': r251_ScaleAround,
        'Realign': r251_Realign,
        'ForceUpright': r251_ForceUpright,
        'Overlay': r251_Overlay,
        'diagCor': r251_diagCor
    };
};
