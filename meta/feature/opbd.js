'use strict';
var r1_buildOPBD, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, r134_s;
var r1_flatten = function _r1_t8() {
    var r131_term;
    var _r131_t4 = arguments;
    var r131_ans = [];
    var _r131_t0 = [].slice.call(_r131_t4, 0);
    var _r131_t1 = _r131_t0.length;
    var _r131_t2 = 0;
    for (; _r131_t2 < _r131_t1; _r131_t2 = _r131_t2 + 1) {
        r131_term = _r131_t0[_r131_t2];
        if (r131_term instanceof Array)
            r131_ans = r131_ans.concat(r131_term);
        else
            r131_ans.push(r131_term);
    }
    return r131_ans;
};
var r134_xs = module.exports;
module.exports = r1_buildOPBD = function _r1_t9(r135_xn$chainrule$1aao, r135_lookupOrder, r135_commonList, r135_features, r135_lookups) {
    var r135_fwclose = [
        'fwlcloseDoubleQuote',
        'fwlcloseSingleQuote',
        'dwlcjkSingleQuoteRight',
        'dwlcjkDoubleQuoteRight',
        'dwlparenRight'
    ];
    var r135_hwclose = [
        'closeDoubleQuote',
        'closeSingleQuote',
        'cjkSingleQuoteRight',
        'cjkDoubleQuoteRight',
        'opbdParenRight'
    ];
    var r135_fwopen = [
        'fwropenDoubleQuote',
        'fwropenSingleQuote',
        'dwrcjkSingleQuoteLeft',
        'dwrcjkDoubleQuoteLeft',
        'dwrparenLeft'
    ];
    var r135_hwopen = [
        'openDoubleQuote',
        'openSingleQuote',
        'cjkSingleQuoteLeft',
        'cjkDoubleQuoteLeft',
        'opbdParenLeft'
    ];
    var r135_fwtrail = [
        'dwlperiod',
        'dwlcomma',
        'dwlcjkperiod',
        'dwlcjkcomma'
    ];
    var r135_hwtrail = [
        'period',
        'comma',
        'cjkperiod',
        'cjkcomma'
    ];
    var r135_fwmid = [
        'dwccolon',
        'dwcsemicolon'
    ];
    var r135_hwmid = [
        'colon',
        'semicolon'
    ];
    r135_commonList.push('opbd');
    r135_features.opbd = ['opbd1'];
    return r135_lookups.opbd1 = {
        'type': 'gsub_chaining',
        'subtables': [
            r135_xn$chainrule$1aao(r1_flatten(r135_fwtrail, r135_hwtrail, r135_fwopen, r135_hwopen, r135_fwmid, r135_hwmid), {
                'left': r135_fwopen,
                'right': r135_hwopen
            }),
            r135_xn$chainrule$1aao({
                'left': r135_fwclose,
                'right': r135_hwclose
            }, r1_flatten(r135_fwtrail, r135_hwtrail, r135_fwclose, r135_hwclose, r135_fwopen, r135_hwopen, r135_fwmid, r135_hwmid))
        ]
    };
};
var _r134_t0 = Object.keys(r134_xs);
var _r134_t1 = _r134_t0.length;
var _r134_t2 = 0;
for (; _r134_t2 < _r134_t1; _r134_t2 = _r134_t2 + 1) {
    r134_s = _r134_t0[_r134_t2];
    module.exports[r134_s] = r134_xs[r134_s];
}
