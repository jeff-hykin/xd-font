'use strict';
var r1_build, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8;
exports.build = r1_build = function _r1_t8(r125_parametersData, r125_styles) {
    var r125_style;
    var r125_param = {};
    var r125_introStyle = function _r125_t5(r126_style) {
        var r126_h, r126_k, _r126_t0, _r126_t1, _r126_t2, _r126_t6, _r126_t7, _r126_t8, _r126_t9, _r126_t10, _r126_t11, _r126_t12, _r126_t13, _r126_t14, _r126_t18, _r126_t19;
        var r126_hive = r125_parametersData[r126_style];
        if (!r126_hive)
            return void 0;
        if (r126_hive.inherits) {
            _r126_t0 = r126_hive.inherits;
            _r126_t1 = _r126_t0.length;
            _r126_t2 = 0;
            for (; _r126_t2 < _r126_t1; _r126_t2 = _r126_t2 + 1) {
                r126_h = _r126_t0[_r126_t2];
                r125_introStyle(r126_h);
            }
        }
        var _r126_t3 = Object.keys(r126_hive);
        var _r126_t4 = _r126_t3.length;
        var _r126_t5 = 0;
        for (; _r126_t5 < _r126_t4; _r126_t5 = _r126_t5 + 1) {
            r126_k = _r126_t3[_r126_t5];
            r125_param[r126_k] = r126_hive[r126_k];
        }
        if (r126_hive.multiplies) {
            _r126_t6 = Object.keys(r126_hive.multiplies);
            _r126_t7 = _r126_t6.length;
            _r126_t8 = 0;
            for (; _r126_t8 < _r126_t7; _r126_t8 = _r126_t8 + 1) {
                r126_k = _r126_t6[_r126_t8];
                r125_param[r126_k] = r125_param[r126_k] * r126_hive.multiplies[r126_k];
            }
        }
        if (r126_hive.adds) {
            _r126_t9 = Object.keys(r126_hive.adds);
            _r126_t10 = _r126_t9.length;
            _r126_t11 = 0;
            for (; _r126_t11 < _r126_t10; _r126_t11 = _r126_t11 + 1) {
                r126_k = _r126_t9[_r126_t11];
                r125_param[r126_k] = r125_param[r126_k] + r126_hive.adds[r126_k];
            }
        }
        if (r126_hive.appends) {
            _r126_t12 = Object.keys(r126_hive.appends);
            _r126_t13 = _r126_t12.length;
            _r126_t14 = 0;
            _r126_t18 = _r126_t14 < _r126_t13;
            for (; _r126_t18; _r126_t18 = _r126_t14 < _r126_t13)
                _r126_t19 = (r126_k = _r126_t12[_r126_t14], r125_param[r126_k] = (r125_param[r126_k] || []).concat(r126_hive.appends[r126_k]), _r126_t14 = _r126_t14 + 1);
            return _r126_t19;
        } else
            return void 0;
    };
    var _r125_t0 = r125_styles;
    var _r125_t1 = _r125_t0.length;
    var _r125_t2 = 0;
    for (; _r125_t2 < _r125_t1; _r125_t2 = _r125_t2 + 1) {
        r125_style = _r125_t0[_r125_t2];
        r125_introStyle(r125_style);
    }
    return r125_param;
};
