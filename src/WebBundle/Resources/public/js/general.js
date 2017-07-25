var ONE_SECOND = 1000,
    ONE_MINUTE = 60 * ONE_SECOND,
    ONE_HOUR = 60 * ONE_MINUTE,
    ONE_DAY = 24 * ONE_HOUR,
    ONE_WEEK = 7 * ONE_DAY,
    ONE_MONTH = 30 * ONE_DAY;
var MASEHI_MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    MASEHI_MONTH_FULL = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

var imgDefault = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4QULDSYKJf6TnwAAHq5JREFUeNrt3fmTHOWd5/H3N6tbAl2gowGBxX3bxh7Gxnhsz2Fs48Ge2Qg2djZ2Jzb2B5OpKkfsv+MuVco7sRuxMTPhmYjxxkr2MB6btWc8GAtj8AICBAghDqklhITu7qrv/vA8VV1HZh2tA7X0eUW0LfrIynzyyW8+zzef50kQERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERnOznUDWVo14JvA/SpOESlQAZ5r5PV/OtcNTZ2nHZoHTuu8iEhJwJo/HxtKVJYislxMXcBtm4pX5Irlyy1gnQEWdN5Ersgu4MrlFLAc+EUjr+/WuRO5smRp9Wbgcc5T3qrbhcxhVXTqRK5IF6znpqS7iCwbClgiooAlIqKAJSIKWCIiClgiIgpYIqKAJSKigCUiooAlIgpYIiIKWCIiClgiooAlIqKAJSKigCUil6UpFYEMk6XVtWA3AGvCd5y+5fodeM9hLs9nWyoxueICVpZWHwBuAvPFC6T///sNfP8scAQ4AX4EONbI62c+hmOpgD0MzBTsawX8ReCAYw9Z4YH5AvCvjbx+6iLu8zVgt4HfC7aJntVjrbC8DT+epdVXgT3gBxv5tuZlFrjvAT4FNBfrYefoD4I/3cjr5z1gp2k1Mfg8sL63/In1h9818tl9AAs7N/2+YbeGfaSC81zlW3NvjPM5zZ0zW8DvAWvG03u08q253yhgjcVuAO5ZrBzdJ8pKAlXpS3oc7Az4sSytvd7Cn9+e1+cv4rFYDFZbBi96EuBdsI8M7ogBrP9YzoA9A1zwgPWf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K/Qz8WnoR3HJk4/iJPBxt/8h8NOwRLOvC0HLNrK4JE48r3wIfrR821OvhlZUs6/V1ATM8zgEo5HX92Xp1nfDm6LtWsIiiJXQIvQj4XPsSPfyPo182/EsrT1ZHJmasahbfdfBNLBA2aKBl6tzTgxladUIY5Hu6Wv6/N8JmtSy5PKvrQX+Iz2vYu+c23lg+1LeHyhyDjHhduDPWZzLWgFeaOT1py7THJZM0H2+k/AEs//7CfgrClZyOVHAWsbStHoT2Be8Z1BjZyjDPGHOochlY0pFsKy6f58DvzEOZVhHyI+0rLiXP0fJy1VFFLDkYpiJI9LbcySHLKvL6428flZFJuoSysel1fXlg6OvOysinG4VzB0UUQtLLqJRE2A7E4F/vr1gcKyIApZcRCNfFgr4rxp5/TWVlShgyaUQsVq9bx/uRK33wJ9u5PV3VUyigCWXgl3gL/S3rjzMl5uL7w0UUcCSj18jnz2kUpArmZ4SiogCloiIApaIKGCJiChgiYgoYImIApaIiAKWiIgClogoYImIKGCJiFxyAUuvqRW5Ml2wV49dqMnPBtydpdWNnIdXiYnIsuGE93lekLc1XcjVGm6KXyKiVtYl3yUUEVHAEpEr0/nsEipXJSJlseG8xIdzDliNvO5ZWn0N+EDnRURKAtacikFERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERGQ5+v9NG2Q0N9zhFgAAAABJRU5ErkJggg==';


jQuery.expr.filters.offscreen = function(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.left + rect.width) < 0
        || (rect.top + rect.height) < 0
        || (rect.left > window.innerWidth || rect.top > window.innerHeight)
    );
};

/* String Prototype Collection */
String.prototype.sha1 = function () {
    var str = this.toString();
    //  discuss at: http://phpjs.org/functions/sha1/
    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // improved by: Michael White (http://getsprink.com)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    //    input by: Brett Zamir (http://brett-zamir.me)
    //  depends on: utf8_encode
    //   example 1: sha1('Kevin van Zonneveld');
    //   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'

    var rotate_left = function (n, s) {
        var t4 = (n << s) | (n >>> (32 - s));
        return t4;
    };

    /*var lsb_hex = function (val) { // Not in use; needed?
     var str="";
     var i;
     var vh;
     var vl;

     for ( i=0; i<=6; i+=2 ) {
     vh = (val>>>(i*4+4))&0x0f;
     vl = (val>>>(i*4))&0x0f;
     str += vh.toString(16) + vl.toString(16);
     }
     return str;
     };*/

    var cvt_hex = function (val) {
        var str = '';
        var i;
        var v;

        for (i = 7; i >= 0; i--) {
            v = (val >>> (i * 4)) & 0x0f;
            str += v.toString(16);
        }
        return str;
    };

    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;

    str = this.utf8_encode(str);
    var str_len = str.length;

    var word_array = [];
    for (i = 0; i < str_len - 3; i += 4) {
        j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
        word_array.push(j);
    }

    switch (str_len % 4) {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
            break;
        case 2:
            i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
            break;
        case 3:
            i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
                8 | 0x80;
            break;
    }

    word_array.push(i);

    while ((word_array.length % 16) != 14) {
        word_array.push(0);
    }

    word_array.push(str_len >>> 29);
    word_array.push((str_len << 3) & 0x0ffffffff);

    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++) {
            W[i] = word_array[blockstart + i];
        }
        for (i = 16; i <= 79; i++) {
            W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        }

        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for (i = 0; i <= 19; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }

        for (i = 20; i <= 39; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }

        for (i = 40; i <= 59; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }

        for (i = 60; i <= 79; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
};

String.prototype.strip_tags = function (allowed) {
    var input = this.toString();
    //  discuss at: http://locutus.io/php/strip_tags/
    // original by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Luke Godfrey
    // improved by: Kevin van Zonneveld (http://kvz.io)
    //    input by: Pul
    //    input by: Alex
    //    input by: Marc Palau
    //    input by: Brett Zamir (http://brett-zamir.me)
    //    input by: Bobby Drake
    //    input by: Evertjan Garretsen
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Eric Nagel
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Tomasz Wesolowski
    //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
    //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
    //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
    //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
    //   returns 2: '<p>Kevin van Zonneveld</p>'
    //   example 3: strip_tags("<a href='http://kvz.io'>Kevin van Zonneveld</a>", "<a>")
    //   returns 3: "<a href='http://kvz.io'>Kevin van Zonneveld</a>"
    //   example 4: strip_tags('1 < 5 5 > 1')
    //   returns 4: '1 < 5 5 > 1'
    //   example 5: strip_tags('1 <br/> 1')
    //   returns 5: '1  1'
    //   example 6: strip_tags('1 <br/> 1', '<br>')
    //   returns 6: '1 <br/> 1'
    //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
    //   returns 7: '1 <br/> 1'

    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')

    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
    })
};
String.prototype.parse_url = function () {
    var str = this.toString();

    var parser = document.createElement('a');
    parser.href = str;

    return parser;
};
String.prototype.html_entity_decode = function () {
    var str = this.toString();
    var decode = $("<div/>").html(str).text();

    return decode;
};
String.prototype.slugify = function () {
    var str = this.toString();
    return str.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

/* Object Prototype Collection */
Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};
Object.toQuery = function (obj) {
    var keys = Object.keys(obj),
        arrQuery = [],
        query = '';
    for (var index = 0; index < keys.length; index++) {
        arrQuery.push(keys[index] + '=' + obj[keys[index]]);
    }
    query = arrQuery.join('&');

    return query;
};
Object.refresh = function(obj){
    var tmp = obj.cloneNode(true);
    obj.parentNode.replaceChild(tmp, obj);
};

/* Array Prototype Collection */
Array.prototype.array_rand = function () {
    return this[Math.floor(Math.random() * this.length)]
};

Array.prototype.in_array = function (needle, argStrict) {
    var haystack = this;
    //  discuss at: http://locutus.io/php/in_array/
    // original by: Kevin van Zonneveld (http://kvz.io)
    // improved by: vlado houba
    // improved by: Jonas Sciangula Street (Joni2Back)
    //    input by: Billy
    // bugfixed by: Brett Zamir (http://brett-zamir.me)
    //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld'])
    //   returns 1: true
    //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'})
    //   returns 2: false
    //   example 3: in_array(1, ['1', '2', '3'])
    //   example 3: in_array(1, ['1', '2', '3'], false)
    //   returns 3: true
    //   returns 3: true
    //   example 4: in_array(1, ['1', '2', '3'], true)
    //   returns 4: false

    var key = ''
    var strict = !!argStrict

    // we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] === ndl)
    // in just one for, in order to improve the performance
    // deciding wich type of comparation will do before walk array
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) { // eslint-disable-line eqeqeq
                return true
            }
        }
    }

    return false
};

/* Date Function */
Date.prototype.customFormat = function (format) {
    var format = format || 'Y-m-d',
        time = this.getFullYear()
            + '-' + ((this.getMonth() + 1 < 10) ? '0' : '') + (this.getMonth() + 1)
            + '-' + ((this.getDate() < 10) ? '0' : '') + this.getDate();
    if (format == 'd-m-Y') {
        time = ((this.getDate() < 10) ? '0' : '') + this.getDate()
            + '-' + ((this.getMonth() + 1 < 10) ? '0' : '') + (this.getMonth() + 1)
            + '-' + this.getFullYear();
    } else if (format == 'dayofmonth') {
        time = this.getFullYear()
            + '-' + ((this.getMonth() + 1 < 10) ? '0' : '') + (this.getMonth() + 1)
            + '-01';
    }

    return time;
}
Date.prototype.timeago = function() {
    var date = this;
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return date.customFormat('d-m-Y');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return date.customFormat('d-m-Y');
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }

    return Math.floor(seconds) + " seconds ago";
}

/* MISC Collection */
function round(value, precision, mode) {
    //  discuss at: http://phpjs.org/functions/round/
    // original by: Philip Peterson
    //  revised by: Onno Marsman
    //  revised by: T.Wild
    //  revised by: Rafał Kukawski (http://blog.kukawski.pl/)
    //    input by: Greenseed
    //    input by: meo
    //    input by: William
    //    input by: Josep Sanz (http://www.ws3.es/)
    // bugfixed by: Brett Zamir (http://brett-zamir.me)
    //        note: Great work. Ideas for improvement:
    //        note: - code more compliant with developer guidelines
    //        note: - for implementing PHP constant arguments look at
    //        note: the pathinfo() function, it offers the greatest
    //        note: flexibility & compatibility possible
    //   example 1: round(1241757, -3);
    //   returns 1: 1242000
    //   example 2: round(3.6);
    //   returns 2: 4
    //   example 3: round(2.835, 2);
    //   returns 3: 2.84
    //   example 4: round(1.1749999999999, 2);
    //   returns 4: 1.17
    //   example 5: round(58551.799999999996, 2);
    //   returns 5: 58551.8

    var m, f, isHalf, sgn; // helper variables
    precision |= 0; // making sure precision is integer
    m = Math.pow(10, precision);
    value *= m;
    sgn = (value > 0) | -(value < 0); // sign of the number
    isHalf = value % 1 === 0.5 * sgn;
    f = Math.floor(value);

    if (isHalf) {
        switch (mode) {
            case 'PHP_ROUND_HALF_DOWN':
                value = f + (sgn < 0); // rounds .5 toward zero
                break;
            case 'PHP_ROUND_HALF_EVEN':
                value = f + (f % 2 * sgn); // rouds .5 towards the next even integer
                break;
            case 'PHP_ROUND_HALF_ODD':
                value = f + !(f % 2); // rounds .5 towards the next odd integer
                break;
            default:
                value = f + (sgn > 0); // rounds .5 away from zero
        }
    }

    return (isHalf ? value : Math.round(value)) / m;
}

/**
 * @source http://phpjs.org/functions/empty/
 * @param {string} mixed_var
 * @returns {Boolean}
 */
function empty(mixed_var) {
    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, '', '0', 'undefined'];

    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixed_var === emptyValues[i]) {
            return true;
        }
    }

    if (typeof mixed_var === 'object') {
        for (key in mixed_var) {
            return false;
        }
        return true;
    }

    return false;
}

document.updateMetaTitle = function (title, path) {
    if (window.location.pathname != path) {
        window.history.pushState(title, title, path);
        document.title = title;
    }
};

document.getGridSize = function(){
    return (window.innerWidth < 600) ? 2 :
        (window.innerWidth < 900) ? 3 : 4;

};
document.getParameterByName = function(name, url){
    var url = url || location.search;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function unserialize(data) {
    var $global = (typeof window !== 'undefined' ? window : global)
    var utf8Overhead = function (str) {
        var s = str.length
        for (var i = str.length - 1; i >= 0; i--) {
            var code = str.charCodeAt(i)
            if (code > 0x7f && code <= 0x7ff) {
                s++
            } else if (code > 0x7ff && code <= 0xffff) {
                s += 2
            }
            // trail surrogate
            if (code >= 0xDC00 && code <= 0xDFFF) {
                i--
            }
        }
        return s - 1
    }
    var error = function (type,
                          msg, filename, line) {
        throw new $global[type](msg, filename, line)
    }
    var readUntil = function (data, offset, stopchr) {
        var i = 2
        var buf = []
        var chr = data.slice(offset, offset + 1)
        while (chr !== stopchr) {
            if ((i + offset) > data.length) {
                error('Error', 'Invalid')
            }
            buf.push(chr)
            chr = data.slice(offset + (i - 1), offset + i)
            i += 1
        }
        return [buf.length, buf.join('')]
    }
    var readChrs = function (data, offset, length) {
        var i, chr, buf
        buf = []
        for (i = 0; i < length; i++) {
            chr = data.slice(offset + (i - 1), offset + i)
            buf.push(chr)
            length -= utf8Overhead(chr)
        }
        return [buf.length, buf.join('')]
    }

    function _unserialize(data, offset) {
        var dtype
        var dataoffset
        var keyandchrs
        var keys
        var contig
        var length
        var array
        var readdata
        var readData
        var ccount
        var stringlength
        var i
        var key
        var kprops
        var kchrs
        var vprops
        var vchrs
        var value
        var chrs = 0
        var typeconvert = function (x) {
            return x
        }
        if (!offset) {
            offset = 0
        }
        dtype = (data.slice(offset, offset + 1)).toLowerCase()
        dataoffset = offset + 2
        switch (dtype) {
            case 'i':
                typeconvert = function (x) {
                    return parseInt(x, 10)
                }
                readData = readUntil(data, dataoffset, ';')
                chrs = readData[0]
                readdata = readData[1]
                dataoffset += chrs + 1
                break
            case 'b':
                typeconvert = function (x) {
                    return parseInt(x, 10) !== 0
                }
                readData = readUntil(data, dataoffset, ';')
                chrs = readData[0]
                readdata = readData[1]
                dataoffset += chrs + 1
                break
            case 'd':
                typeconvert = function (x) {
                    return parseFloat(x)
                }
                readData = readUntil(data, dataoffset, ';')
                chrs = readData[0]
                readdata = readData[1]
                dataoffset += chrs + 1
                break
            case 'n':
                readdata = null
                break
            case 's':
                ccount = readUntil(data, dataoffset, ':')
                chrs = ccount[0]
                stringlength = ccount[1]
                dataoffset += chrs + 2
                readData = readChrs(data, dataoffset + 1, parseInt(stringlength, 10))
                chrs = readData[0]
                readdata = readData[1]
                dataoffset += chrs + 2
                if (chrs !== parseInt(stringlength, 10) && chrs !== readdata.length) {
                    error('SyntaxError', 'String length mismatch')
                }
                break
            case 'a':
                readdata = {}
                keyandchrs = readUntil(data, dataoffset, ':')
                chrs = keyandchrs[0]
                keys = keyandchrs[1]
                dataoffset += chrs + 2
                length = parseInt(keys, 10)
                contig = true
                for (i = 0; i < length; i++) {
                    kprops = _unserialize(data, dataoffset)
                    kchrs = kprops[1]
                    key = kprops[2]
                    dataoffset += kchrs
                    vprops = _unserialize(data, dataoffset)
                    vchrs = vprops[1]
                    value = vprops[2]
                    dataoffset += vchrs
                    if (key !== i) {
                        contig = false
                    }
                    readdata[key] = value
                }
                if (contig) {
                    array = new Array(length)
                    for (i = 0; i < length; i++) {
                        array[i] = readdata[i]
                    }
                    readdata = array
                }
                dataoffset += 1
                break
            default:
                error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype)
                break
        }
        return [dtype, dataoffset - offset, typeconvert(readdata)]
    }

    return _unserialize((data + ''), 0)[2]
}

var Validator = {
    object: {
        validate: function (_var, _key, _is) {
            var arrKey = _key.split('.'),
                curr;
            for (var index = 0; index < arrKey.length; index++) {
                curr = (index == 0) ? _var : curr;
                if (!curr.hasOwnProperty(arrKey[index])) {
                    return false;
                } else {
                    curr = curr[arrKey[index]];
                }
            }

            if (_is == 'number') {
            } else {
                if (empty(curr))
                    return false;
            }

            return true;
        }
    },
    array: {
        validate: function (_var, _key, _is) {

        }
    }
};
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }
        return string;
    },
    assignImage: function(src, hidden, target) {
        if (src.files && src.files[0]) {
            var FR = new FileReader();
            FR.onload = function (e) {
                var encode = e.target.result;
                var split = encode.split('base64,');
                jQuery(target).attr("src", e.target.result);
                jQuery(hidden).val(encode);
            };
            FR.readAsDataURL(src.files[0]);
        }
    }
}

var URI = {
    basename: function (path, suffix) {
        var b = path
        var lastChar = b.charAt(b.length - 1)
        if (lastChar === '/' || lastChar === '\\') {
            b = b.slice(0, -1)
        }
        b = b.replace(/^.*[/\\]/g, '')
        if (typeof suffix === 'string' && b.substr(b.length - suffix.length) === suffix) {
            b = b.substr(0, b.length - suffix.length)
        }
        return b
    },
    getProtocol: function (url) {
        return url.split('://')[0];
    },
    getDomain: function(url){
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get the hostname
        if (url.indexOf("://") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }

        //find & remove port number
        hostname = hostname.split(':')[0];

        return hostname;
    },
    getRootDomain: function(url){
        var domain = URI.getDomain(url),
            splitArr = domain.split('.'),
            arrLen = splitArr.length;

        //extracting the root domain here
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        }
        return domain;
    },
    getPathUrl: function(url) {
        var reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
        var pathname = reg.exec(url)[1];

        return pathname;
    },
    getPathInfo: function(path) {
        //  create a link in the DOM and set its href
        var link;
        try{
            link = document.createElement('a');
            link.setAttribute('href', path);
        }catch(e){}

        //  return an easy-to-use object that breaks apart the path
        return {
            host:     link.hostname,  //  'example.com'
            port:     link.port,      //  12345
            path:     link.pathname,  //  '/blog/foo/bar'
            protocol: link.protocol   //  'http:'
        }
    },
    getQuery: function(name, url) {
        var url = url || location.search;
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};
var Docs = {
    lazyLoad: function(section){
        section = section || '';
        
        if(section == ''){
            section = '.lazy-load';
        }else{
            section = '.'+section+'.lazy-load';
        }

        $(section).each(function(index, element){
            var altSrc = $(element).attr('alt-bg');
            if (typeof altSrc !== typeof undefined && altSrc !== false) {
                $.ajax({
                    url: altSrc,
                    type: 'GET',
                    success: function(data, textStatus, jqXHR){
                        if($(element).is('img')){
                            $(element).attr('src', altSrc);
                        }else{
                            $(element).css('background-image', "url(" + altSrc + ")");
                            $(element).css('background-size', "cover");
                        }
                    }
                });
            }
        });
    },
    fixCssLoad: function(fixdomain){
        console.log('init fix css load');
        var styles = document.styleSheets;
        for(var index=0;index<styles.length;index++){
            var href = styles[index].href;
            $.ajax({
                url: href,
                type: 'HEAD',
                error: function(){
                    //var info = URI.getPathInfo(href);
                    //href = href.replace(info.protocol + '//' + info.host, fixdomain)
                    href = href.replace(URI.getProtocol(href) + '://' + URI.getDomain(href), fixdomain)
                    $('head').append('<link rel="stylesheet" type="text/css" href="'+href+'" >');
                }
            });
        }
    },
    fixCssBackground: function(selection){
        console.log('init fix css url background');
        var imageURLs = $(selection);
        imageURLs.each(function(index, element){
            var imageURL = $(element).css('background-image').replace('url("', '').replace('")', '');
            if (imageURL != "none"){
                $.ajax({
                    url: imageURL,
                    type: 'HEAD',
                    error: function(){
                        $(element).css('background-image', "url(" + $(element).attr('alt-bg') + ")");
                    }
                });
            }
        });
    },
    fixJsLoad: function(fixdomain){
        var scripts = document.getElementsByTagName("script");
        for (var i=0;i<scripts.length;i++) {
            if (scripts[i].src){
                var href = scripts[i].src;
                //alert(URI.getDomain(href));

                if(URI.getDomain(href) == 'pangrango.kilatstorage.com' || URI.getDomain(href) == 'localhost'){
                    $.ajax({
                        url: scripts[i].src,
                        type: 'HEAD',
                        error: function(){
                            href = href.replace(URI.getProtocol(href) + '://' + URI.getDomain(href), fixdomain);
                            alert(href);

                            $.ajax({
                                url: href,
                                dataType: 'script',
                                success: function(){
                                    alert('js success');
                                    $('.carousel').slick({
                                        autoplay: false,
                                        pauseOnHover: false,
                                        prevArrow: false,
                                        nextArrow: false,
                                        dots: false,
                                        adaptiveHeight: true
                                    });
                                    $('#video-carousel').slick({
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: false
                                    });
                                    $(".list-item-video-thumb").click(function () {
                                        //alert('ters');
                                        var idx = $(this).attr('data-idx');
                                        $('#video-carousel').slickGoTo(idx - 1);
                                    });
                                }
                            });
                        }
                    });
                }
            }
        }
    },
    fixYoutubeEmbed: function(){
        console.log('init fix youtube embed');
        $('.op-interactive iframe').on('load', function(event){
            var youtubePlayer = new YT.Player($(this).attr('id'));
            youtubePlayer.addEventListener("onReady", "_youtubeLoaded");
        });
    }
}; 
function _youtubeLoaded(event){
    if(event.target.getDuration() <= 0){
        var id = event.target.a.id,
            youtubeId = id.split('-')[1],
            op = $('#' + id).parent(),
            img = $('<textarea />').html(op.find('noscript').html()).text();
        op.html('<a href="https://www.youtube.com/watch?v=' + youtubeId + '" target="_blank">' + img + '<div class="overlay" style="margin-left: 15px;width: 96%;height:480px;display:inherit;position: absolute; left: 0;background: none; background-image: url(/bundles/assets/img/bg-play.png);background-size: cover; background-position: center center;"></div></a>');
    }else{
        console.log(event.target.getDuration());
    }
}