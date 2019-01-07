!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define([], t)
      : typeof exports === 'object'
        ? (exports.NRTC = t())
        : (e.NRTC = t());
})(window, () => {
  return (function(e) {
    const t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      const i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const i in e)
            r.d(
              n,
              i,
              (t => {
                return e[t];
              }).bind(null, i)
            );
        return n;
      }),
      (r.n = function(e) {
        const t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 359))
    );
  })([
    ,
    function(e, t) {
      const r = (e.exports =
        typeof window !== 'undefined' && window.Math == Math
          ? window
          : typeof self !== 'undefined' && self.Math == Math
            ? self
            : Function('return this')());
      typeof __g === 'number' && (__g = r);
    },
    function(e, t, r) {
      const n = r(37)('wks');

      const i = r(27);

      const o = r(1).Symbol;

      const a = typeof o === 'function';
      (e.exports = function(e) {
        return n[e] || (n[e] = (a && o[e]) || (a ? o : i)(`Symbol.${e}`));
      }).store = n;
    },
    function(e, t) {
      const r = (e.exports = { version: '2.5.7' });
      typeof __e === 'number' && (__e = r);
    },
    function(e, t, r) {
      var n = {
        info: {
          hash: 'd75fc9e26c6472abae34a52a027f01559400411c',
          shortHash: 'd75fc9e2',
          version: '5.4.0',
          sdkVersion: '50',
          nrtcVersion: '4.1.0',
          nrtcSdkVersion: '1',
          protocolVersion: 1,
        },
        agentVersion: '2.7.0.710',
        lbsUrl: 'https://lbs.netease.im/lbs/webconf.jsp',
        roomserver: 'roomserver.netease.im',
        connectTimeout: 1e4,
        xhrTimeout: 1e4,
        socketTimeout: 1e4,
        reconnectionDelay: 800,
        reconnectionDelayMax: 1e4,
        reconnectionJitter: 0.01,
        heartbeatInterval: 3e4,
        cmdTimeout: 1e4,
        defaultReportUrl: 'https://dr.netease.im/1.gif',
        isWeixinApp: !1,
        isNodejs: !1,
        isRN: !1,
        PUSHTOKEN: '',
        PUSHCONFIG: {},
        CLIENTTYPE: 16,
        formatSocketUrl(e) {
          const t = e.url;

          const r = e.secure ? 'https' : 'http';
          return t.indexOf('http') === -1 ? `${r}://${t}` : t;
        },
        uploadUrl: 'https://nos.netease.com',
        replaceUrl: 'https://{bucket}.nosdn.127.net/{object}',
        downloadHost: 'nos.netease.com',
        downloadUrl: 'https://{bucket}.nosdn.127.net/{object}',
        httpsEnabled: !1,
        genUploadUrl(e) {
          return `${n.uploadUrl}/${e}`;
        },
        genDownloadUrl(e, t) {
          let r = n.replaceUrl;
          return (
            /^http/.test(r)
              ? n.httpsEnabled && (r = r.replace('http', 'https'))
              : (r = n.httpsEnabled ? `https://${r}` : `http://${r}`),
            r.replace('{bucket}', e).replace('{object}', t)
          );
        },
      };
      e.exports = n;
    },
    function(e, t, r) {
      t.__esModule = !0;
      const n = a(r(99));

      const i = a(r(88));

      const o =
        typeof i.default === 'function' && typeof n.default === 'symbol'
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof i.default === 'function' &&
                e.constructor === i.default &&
                e !== i.default.prototype
                ? 'symbol'
                : typeof e;
            };
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default =
        typeof i.default === 'function' && o(n.default) === 'symbol'
          ? function(e) {
              return void 0 === e ? 'undefined' : o(e);
            }
          : function(e) {
              return e &&
                typeof i.default === 'function' &&
                e.constructor === i.default &&
                e !== i.default.prototype
                ? 'symbol'
                : void 0 === e
                  ? 'undefined'
                  : o(e);
            };
    },
    function(e, t, r) {
      const n = r(9);

      const i = r(57);

      const o = r(39);

      const a = Object.defineProperty;
      t.f = r(8)
        ? Object.defineProperty
        : function(e, t, r) {
            if ((n(e), (t = o(t, !0)), n(r), i))
              try {
                return a(e, t, r);
              } catch (e) {}
            if ('get' in r || 'set' in r) throw TypeError('Accessors not supported!');
            return 'value' in r && (e[t] = r.value), e;
          };
    },
    function(e, t) {
      const r = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return r.call(e, t);
      };
    },
    function(e, t, r) {
      e.exports = !r(16)(() => {
        return (
          Object.defineProperty({}, 'a', {
            get() {
              return 7;
            },
          }).a != 7
        );
      });
    },
    function(e, t, r) {
      const n = r(11);
      e.exports = function(e) {
        if (!n(e)) throw TypeError(`${e} is not an object!`);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(6);

      const i = r(19);
      e.exports = r(8)
        ? function(e, t, r) {
            return n.f(e, t, i(1, r));
          }
        : function(e, t, r) {
            return (e[t] = r), e;
          };
    },
    function(e, t) {
      e.exports = function(e) {
        return typeof e === 'object' ? e !== null : typeof e === 'function';
      };
    },
    function(e, t, r) {
      const n = r(54);

      const i = r(40);
      e.exports = function(e) {
        return n(i(e));
      };
    },
    function(e, t, r) {
      const n = r(1);

      const i = r(3);

      const o = r(44);

      const a = r(10);

      const s = r(7);

      var c = function(e, t, r) {
        let u;

        let d;

        let l;

        const f = e & c.F;

        const p = e & c.G;

        const h = e & c.S;

        const m = e & c.P;

        const v = e & c.B;

        const g = e & c.W;

        const y = p ? i : i[t] || (i[t] = {});

        const S = y.prototype;

        const b = p ? n : h ? n[t] : (n[t] || {}).prototype;
        for (u in (p && (r = t), r))
          ((d = !f && b && void 0 !== b[u]) && s(y, u)) ||
            ((l = d ? b[u] : r[u]),
            (y[u] =
              p && typeof b[u] !== 'function'
                ? r[u]
                : v && d
                  ? o(l, n)
                  : g && b[u] == l
                    ? (function(e) {
                        const t = function(t, r, n) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, r);
                            }
                            return new e(t, r, n);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(l)
                    : m && typeof l === 'function'
                      ? o(Function.call, l)
                      : l),
            m && (((y.virtual || (y.virtual = {}))[u] = l), e & c.R && S && !S[u] && a(S, u, l)));
      };
      (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (e.exports = c);
    },
    function(e, t, r) {
      (t.__esModule = !0),
        (t.default = function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        });
    },
    function(e, t, r) {
      (function(t) {
        const n = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r(5));
        const i = (function() {
          const e = (void 0 === t ? 'undefined' : (0, n.default)(t)) === 'object' ? t : window;

          const r = Math.pow(2, 53) - 1;

          const i = /\bOpera/;

          const o = Object.prototype;

          const a = o.hasOwnProperty;

          const s = o.toString;
          function c(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
          }
          function u(e) {
            return (e = h(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e);
          }
          function d(e, t) {
            for (const r in e) a.call(e, r) && t(e[r], r, e);
          }
          function l(e) {
            return e == null ? c(e) : s.call(e).slice(8, -1);
          }
          function f(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
          }
          function p(e, t) {
            let n = null;
            return (
              (function(e, t) {
                let n = -1;

                const i = e ? e.length : 0;
                if (typeof i === 'number' && i > -1 && i <= r) for (; ++n < i; ) t(e[n], n, e);
                else d(e, t);
              })(e, (r, i) => {
                n = t(n, r, i, e);
              }),
              n
            );
          }
          function h(e) {
            return String(e).replace(/^ +| +$/g, '');
          }
          return (function t(r) {
            let o = e;

            const a =
              r &&
              (void 0 === r ? 'undefined' : (0, n.default)(r)) === 'object' &&
              l(r) != 'String';
            a && ((o = r), (r = null));
            const c = o.navigator || {};

            const m = c.userAgent || '';
            r || (r = m);
            let v;

            let g;

            const y = a
              ? !!c.likeChrome
              : /\bChrome\b/.test(r) && !/internal|\n/i.test(s.toString());

            const S = a ? 'Object' : 'ScriptBridgingProxyObject';

            const b = a ? 'Object' : 'Environment';

            const _ = a && o.java ? 'JavaPackage' : l(o.java);

            const C = a ? 'Object' : 'RuntimeObject';

            const T = /\bJava/.test(_) && o.java;

            const R = T && l(o.environment) == b;

            const w = T ? 'a' : 'α';

            const k = T ? 'b' : 'β';

            const E = o.document || {};

            let P = o.operamini || o.opera;

            var O = i.test((O = a && P ? P['[[Class]]'] : l(P))) ? O : (P = null);

            let I = r;

            let x = [];

            let M = null;

            const A = r == m;

            let D = A && P && typeof P.version === 'function' && P.version();

            let L = (function(e) {
              return p(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || f(t)}\\b`, 'i').exec(r) && (t.label || t));
              });
            })([
              { label: 'EdgeHTML', pattern: 'Edge' },
              'Trident',
              { label: 'WebKit', pattern: 'AppleWebKit' },
              'iCab',
              'Presto',
              'NetFront',
              'Tasman',
              'KHTML',
              'Gecko',
            ]);

            let j = (function(e) {
              return p(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || f(t)}\\b`, 'i').exec(r) && (t.label || t));
              });
            })([
              'Adobe AIR',
              'Arora',
              'Avant Browser',
              'Breach',
              'Camino',
              'Electron',
              'Epiphany',
              'Fennec',
              'Flock',
              'Galeon',
              'GreenBrowser',
              'iCab',
              'Iceweasel',
              'K-Meleon',
              'Konqueror',
              'Lunascape',
              'Maxthon',
              { label: 'Microsoft Edge', pattern: 'Edge' },
              'Midori',
              'Nook Browser',
              'PaleMoon',
              'PhantomJS',
              'Raven',
              'Rekonq',
              'RockMelt',
              { label: 'Samsung Internet', pattern: 'SamsungBrowser' },
              'SeaMonkey',
              { label: 'Silk', pattern: '(?:Cloud9|Silk-Accelerated)' },
              'Sleipnir',
              'SlimBrowser',
              { label: 'SRWare Iron', pattern: 'Iron' },
              'Sunrise',
              'Swiftfox',
              'Waterfox',
              'WebPositive',
              'Opera Mini',
              { label: 'Opera Mini', pattern: 'OPiOS' },
              'Opera',
              { label: 'Opera', pattern: 'OPR' },
              'Chrome',
              { label: 'Chrome Mobile', pattern: '(?:CriOS|CrMo)' },
              { label: 'Firefox', pattern: '(?:Firefox|Minefield)' },
              { label: 'Firefox for iOS', pattern: 'FxiOS' },
              { label: 'IE', pattern: 'IEMobile' },
              { label: 'IE', pattern: 'MSIE' },
              'Safari',
            ]);

            let N = F([
              { label: 'BlackBerry', pattern: 'BB10' },
              'BlackBerry',
              { label: 'Galaxy S', pattern: 'GT-I9000' },
              { label: 'Galaxy S2', pattern: 'GT-I9100' },
              { label: 'Galaxy S3', pattern: 'GT-I9300' },
              { label: 'Galaxy S4', pattern: 'GT-I9500' },
              { label: 'Galaxy S5', pattern: 'SM-G900' },
              { label: 'Galaxy S6', pattern: 'SM-G920' },
              { label: 'Galaxy S6 Edge', pattern: 'SM-G925' },
              { label: 'Galaxy S7', pattern: 'SM-G930' },
              { label: 'Galaxy S7 Edge', pattern: 'SM-G935' },
              'Google TV',
              'Lumia',
              'iPad',
              'iPod',
              'iPhone',
              'Kindle',
              { label: 'Kindle Fire', pattern: '(?:Cloud9|Silk-Accelerated)' },
              'Nexus',
              'Nook',
              'PlayBook',
              'PlayStation Vita',
              'PlayStation',
              'TouchPad',
              'Transformer',
              { label: 'Wii U', pattern: 'WiiU' },
              'Wii',
              'Xbox One',
              { label: 'Xbox 360', pattern: 'Xbox' },
              'Xoom',
            ]);

            let V = (function(e) {
              return p(e, (e, t, n) => {
                return (
                  e ||
                  ((t[N] ||
                    t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] ||
                    RegExp(`\\b${f(n)}(?:\\b|\\w*\\d)`, 'i').exec(r)) &&
                    n)
                );
              });
            })({
              Apple: { iPad: 1, iPhone: 1, iPod: 1 },
              Archos: {},
              Amazon: { Kindle: 1, 'Kindle Fire': 1 },
              Asus: { Transformer: 1 },
              'Barnes & Noble': { Nook: 1 },
              BlackBerry: { PlayBook: 1 },
              Google: { 'Google TV': 1, Nexus: 1 },
              HP: { TouchPad: 1 },
              HTC: {},
              LG: {},
              Microsoft: { Xbox: 1, 'Xbox One': 1 },
              Motorola: { Xoom: 1 },
              Nintendo: { 'Wii U': 1, Wii: 1 },
              Nokia: { Lumia: 1 },
              Samsung: { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
              Sony: { PlayStation: 1, 'PlayStation Vita': 1 },
            });

            let U = (function(e) {
              return p(e, (e, t) => {
                const n = t.pattern || f(t);
                return (
                  !e &&
                    (e = RegExp(`\\b${n}(?:/[\\d.]+|[ \\w.]*)`, 'i').exec(r)) &&
                    (e = (function(e, t, r) {
                      let n = {
                        '10.0': '10',
                        6.4: '10 Technical Preview',
                        6.3: '8.1',
                        6.2: '8',
                        6.1: 'Server 2008 R2 / 7',
                        '6.0': 'Server 2008 / Vista',
                        5.2: 'Server 2003 / XP 64-bit',
                        5.1: 'XP',
                        5.01: '2000 SP1',
                        '5.0': '2000',
                        '4.0': 'NT',
                        '4.90': 'ME',
                      };
                      return (
                        t &&
                          r &&
                          /^Win/i.test(e) &&
                          !/^Windows Phone /i.test(e) &&
                          (n = n[/[\d.]+$/.exec(e)]) &&
                          (e = `Windows ${n}`),
                        (e = String(e)),
                        t && r && (e = e.replace(RegExp(t, 'i'), r)),
                        (e = u(
                          e
                            .replace(/ ce$/i, ' CE')
                            .replace(/\bhpw/i, 'web')
                            .replace(/\bMacintosh\b/, 'Mac OS')
                            .replace(/_PowerPC\b/i, ' OS')
                            .replace(/\b(OS X) [^ \d]+/i, '$1')
                            .replace(/\bMac (OS X)\b/, '$1')
                            .replace(/\/(\d)/, ' $1')
                            .replace(/_/g, '.')
                            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                            .replace(/\bx86\.64\b/gi, 'x86_64')
                            .replace(/\b(Windows Phone) OS\b/, '$1')
                            .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                            .split(' on ')[0]
                        ))
                      );
                    })(e, n, t.label || t)),
                  e
                );
              });
            })([
              'Windows Phone',
              'Android',
              'CentOS',
              { label: 'Chrome OS', pattern: 'CrOS' },
              'Debian',
              'Fedora',
              'FreeBSD',
              'Gentoo',
              'Haiku',
              'Kubuntu',
              'Linux Mint',
              'OpenBSD',
              'Red Hat',
              'SuSE',
              'Ubuntu',
              'Xubuntu',
              'Cygwin',
              'Symbian OS',
              'hpwOS',
              'webOS ',
              'webOS',
              'Tablet OS',
              'Tizen',
              'Linux',
              'Mac OS X',
              'Macintosh',
              'Mac',
              'Windows 98;',
              'Windows ',
            ]);
            function F(e) {
              return p(e, (e, t) => {
                const n = t.pattern || f(t);
                return (
                  !e &&
                    (e =
                      RegExp(`\\b${n} *\\d+[.\\w_]*`, 'i').exec(r) ||
                      RegExp(`\\b${n} *\\w+-[\\w]*`, 'i').exec(r) ||
                      RegExp(`\\b${n}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, 'i').exec(r)) &&
                    ((e = String(t.label && !RegExp(n, 'i').test(t.label) ? t.label : e).split(
                      '/'
                    ))[1] &&
                      !/[\d.]+/.test(e[0]) &&
                      (e[0] += ` ${e[1]}`),
                    (t = t.label || t),
                    (e = u(
                      e[0]
                        .replace(RegExp(n, 'i'), t)
                        .replace(RegExp(`; *(?:${t}[_-])?`, 'i'), ' ')
                        .replace(RegExp(`(${t})[-_.]?(\\w)`, 'i'), '$1 $2')
                    ))),
                  e
                );
              });
            }
            if (
              (L && (L = [L]),
              V && !N && (N = F([V])),
              (v = /\bGoogle TV\b/.exec(N)) && (N = v[0]),
              /\bSimulator\b/i.test(r) && (N = `${N ? `${N} ` : ''}Simulator`),
              j == 'Opera Mini' &&
                /\bOPiOS\b/.test(r) &&
                x.push('running in Turbo/Uncompressed mode'),
              j == 'IE' && /\blike iPhone OS\b/.test(r)
                ? ((V = (v = t(r.replace(/like iPhone OS/, ''))).manufacturer), (N = v.product))
                : /^iP/.test(N)
                  ? (j || (j = 'Safari'),
                    (U = `iOS${
                      (v = / OS ([\d_]+)/i.exec(r)) ? ` ${v[1].replace(/_/g, '.')}` : ''
                    }`))
                  : j != 'Konqueror' || /buntu/i.test(U)
                    ? (V &&
                        V != 'Google' &&
                        ((/Chrome/.test(j) && !/\bMobile Safari\b/i.test(r)) ||
                          /\bVita\b/.test(N))) ||
                      (/\bAndroid\b/.test(U) && /^Chrome/.test(j) && /\bVersion\//i.test(r))
                      ? ((j = 'Android Browser'), (U = /\bAndroid\b/.test(U) ? U : 'Android'))
                      : j == 'Silk'
                        ? (/\bMobi/i.test(r) || ((U = 'Android'), x.unshift('desktop mode')),
                          /Accelerated *= *true/i.test(r) && x.unshift('accelerated'))
                        : j == 'PaleMoon' && (v = /\bFirefox\/([\d.]+)\b/.exec(r))
                          ? x.push(`identifying as Firefox ${v[1]}`)
                          : j == 'Firefox' && (v = /\b(Mobile|Tablet|TV)\b/i.exec(r))
                            ? (U || (U = 'Firefox OS'), N || (N = v[1]))
                            : !j ||
                              (v = !/\bMinefield\b/i.test(r) && /\b(?:Firefox|Safari)\b/.exec(j))
                              ? (j &&
                                  !N &&
                                  /[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(`${v}/`) + 8)) &&
                                  (j = null),
                                (v = N || V || U) &&
                                  (N ||
                                    V ||
                                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U)) &&
                                  (j = `${/[a-z]+(?: Hat)?/i.exec(
                                    /\bAndroid\b/.test(U) ? U : v
                                  )} Browser`))
                              : j == 'Electron' &&
                                (v = (/\bChrome\/([\d.]+)\b/.exec(r) || 0)[1]) &&
                                x.push(`Chromium ${v}`)
                    : (U = 'Kubuntu'),
              D ||
                (D = (function(e) {
                  return p(e, (e, t) => {
                    return (
                      e ||
                      (RegExp(
                        `${t}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`,
                        'i'
                      ).exec(r) || 0)[1] ||
                      null
                    );
                  });
                })([
                  '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
                  'Version',
                  f(j),
                  '(?:Firefox|Minefield|NetFront)',
                ])),
              (v =
                (L == 'iCab' && parseFloat(D) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(j) && (/\bOPR\b/.test(r) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(r) &&
                  !/^(?:Trident|EdgeHTML)$/.test(L) &&
                  'WebKit') ||
                (!L && /\bMSIE\b/i.test(r) && (U == 'Mac OS' ? 'Tasman' : 'Trident')) ||
                (L == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(j) && 'NetFront')) &&
                (L = [v]),
              j == 'IE' && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r) || 0)[1])
                ? ((j += ' Mobile'),
                  (U = `Windows Phone ${/\+$/.test(v) ? v : `${v}.x`}`),
                  x.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(r)
                  ? ((j = 'IE Mobile'),
                    (U = 'Windows Phone 8.x'),
                    x.unshift('desktop mode'),
                    D || (D = (/\brv:([\d.]+)/.exec(r) || 0)[1]))
                  : j != 'IE' &&
                    L == 'Trident' &&
                    (v = /\brv:([\d.]+)/.exec(r)) &&
                    (j && x.push(`identifying as ${j}${D ? ` ${D}` : ''}`), (j = 'IE'), (D = v[1])),
              A)
            ) {
              if (
                (function(e, t) {
                  const r = e != null ? (0, n.default)(e[t]) : 'number';
                  return !(
                    /^(?:boolean|number|string|undefined)$/.test(r) ||
                    (r == 'object' && !e[t])
                  );
                })(o, 'global')
              )
                if (
                  (T &&
                    ((I = (v = T.lang.System).getProperty('os.arch')),
                    (U = U || `${v.getProperty('os.name')} ${v.getProperty('os.version')}`)),
                  R)
                ) {
                  try {
                    (D = o.require('ringo/engine').version.join('.')), (j = 'RingoJS');
                  } catch (e) {
                    (v = o.system) &&
                      v.global.system == o.system &&
                      ((j = 'Narwhal'), U || (U = v[0].os || null));
                  }
                  j || (j = 'Rhino');
                } else
                  (0, n.default)(o.process) === 'object' &&
                    !o.process.browser &&
                    (v = o.process) &&
                    ((0, n.default)(v.versions) === 'object' &&
                      (typeof v.versions.electron === 'string'
                        ? (x.push(`Node ${v.versions.node}`),
                          (j = 'Electron'),
                          (D = v.versions.electron))
                        : typeof v.versions.nw === 'string' &&
                          (x.push(`Chromium ${D}`, `Node ${v.versions.node}`),
                          (j = 'NW.js'),
                          (D = v.versions.nw))),
                    j ||
                      ((j = 'Node.js'),
                      (I = v.arch),
                      (U = v.platform),
                      (D = (D = /[\d.]+/.exec(v.version)) ? D[0] : null)));
              else
                l((v = o.runtime)) == S
                  ? ((j = 'Adobe AIR'), (U = v.flash.system.Capabilities.os))
                  : l((v = o.phantom)) == C
                    ? ((j = 'PhantomJS'),
                      (D = (v = v.version || null) && `${v.major}.${v.minor}.${v.patch}`))
                    : typeof E.documentMode === 'number' && (v = /\bTrident\/(\d+)/i.exec(r))
                      ? ((D = [D, E.documentMode]),
                        (v = +v[1] + 4) != D[1] &&
                          (x.push(`IE ${D[1]} mode`), L && (L[1] = ''), (D[1] = v)),
                        (D = j == 'IE' ? String(D[1].toFixed(1)) : D[0]))
                      : typeof E.documentMode === 'number' &&
                        /^(?:Chrome|Firefox)\b/.test(j) &&
                        (x.push(`masking as ${j} ${D}`),
                        (j = 'IE'),
                        (D = '11.0'),
                        (L = ['Trident']),
                        (U = 'Windows'));
              U = U && u(U);
            }
            if (
              (D &&
                (v =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(`${r};${A && c.appMinorVersion}`) ||
                  (/\bMinefield\b/i.test(r) && 'a')) &&
                ((M = /b/i.test(v) ? 'beta' : 'alpha'),
                (D =
                  D.replace(RegExp(`${v}\\+?$`), '') +
                  (M == 'beta' ? k : w) +
                  (/\d+\+?/.exec(v) || ''))),
              j == 'Fennec' || (j == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(U)))
            )
              j = 'Firefox Mobile';
            else if (j == 'Maxthon' && D) D = D.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(N))
              N == 'Xbox 360' && (U = null),
                N == 'Xbox 360' && /\bIEMobile\b/.test(r) && x.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(j) && (!j || N || /Browser|Mobi/.test(j))) ||
              (U != 'Windows CE' && !/Mobi/i.test(r))
            )
              if (j == 'IE' && A)
                try {
                  o.external === null && x.unshift('platform preview');
                } catch (e) {
                  x.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(r)) &&
                (v = (RegExp(`${N.replace(/ +/g, ' *')}/([.\\d]+)`, 'i').exec(r) || 0)[1] || D)
                  ? ((U = `${
                      (v = [v, /BB10/.test(r)])[1]
                        ? ((N = null), (V = 'BlackBerry'))
                        : 'Device Software'
                    } ${v[0]}`),
                    (D = null))
                  : this != d &&
                    N != 'Wii' &&
                    ((A && P) ||
                      (/Opera/.test(j) && /\b(?:MSIE|Firefox)\b/i.test(r)) ||
                      (j == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(U)) ||
                      (j == 'IE' &&
                        ((U && !/^Win/.test(U) && D > 5.5) ||
                          (/\bWindows XP\b/.test(U) && D > 8) ||
                          (D == 8 && !/\bTrident\b/.test(r))))) &&
                    !i.test((v = t.call(d, `${r.replace(i, '')};`))) &&
                    v.name &&
                    ((v = `ing as ${v.name}${(v = v.version) ? ` ${v}` : ''}`),
                    i.test(j)
                      ? (/\bIE\b/.test(v) && U == 'Mac OS' && (U = null), (v = `identify${v}`))
                      : ((v = `mask${v}`),
                        (j = O ? u(O.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                        /\bIE\b/.test(v) && (U = null),
                        A || (D = null)),
                    (L = ['Presto']),
                    x.push(v));
            else j += ' Mobile';
            (v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(r) || 0)[1]) &&
              ((v = [parseFloat(v.replace(/\.(\d)$/, '.0$1')), v]),
              j == 'Safari' && v[1].slice(-1) == '+'
                ? ((j = 'WebKit Nightly'), (M = 'alpha'), (D = v[1].slice(0, -1)))
                : (D != v[1] && D != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(r) || 0)[1])) ||
                  (D = null),
              (v[1] = (/\bChrome\/([\d.]+)/i.exec(r) || 0)[1]),
              v[0] == 537.36 &&
                v[2] == 537.36 &&
                parseFloat(v[1]) >= 28 &&
                L == 'WebKit' &&
                (L = ['Blink']),
              A && (y || v[1])
                ? (L && (L[1] = 'like Chrome'),
                  (v =
                    v[1] ||
                    ((v = v[0]) < 530
                      ? 1
                      : v < 532
                        ? 2
                        : v < 532.05
                          ? 3
                          : v < 533
                            ? 4
                            : v < 534.03
                              ? 5
                              : v < 534.07
                                ? 6
                                : v < 534.1
                                  ? 7
                                  : v < 534.13
                                    ? 8
                                    : v < 534.16
                                      ? 9
                                      : v < 534.24
                                        ? 10
                                        : v < 534.3
                                          ? 11
                                          : v < 535.01
                                            ? 12
                                            : v < 535.02
                                              ? '13+'
                                              : v < 535.07
                                                ? 15
                                                : v < 535.11
                                                  ? 16
                                                  : v < 535.19
                                                    ? 17
                                                    : v < 536.05
                                                      ? 18
                                                      : v < 536.1
                                                        ? 19
                                                        : v < 537.01
                                                          ? 20
                                                          : v < 537.11
                                                            ? '21+'
                                                            : v < 537.13
                                                              ? 23
                                                              : v < 537.18
                                                                ? 24
                                                                : v < 537.24
                                                                  ? 25
                                                                  : v < 537.36
                                                                    ? 26
                                                                    : L != 'Blink'
                                                                      ? '27'
                                                                      : '28')))
                : (L && (L[1] = 'like Safari'),
                  (v =
                    (v = v[0]) < 400
                      ? 1
                      : v < 500
                        ? 2
                        : v < 526
                          ? 3
                          : v < 533
                            ? 4
                            : v < 534
                              ? '4+'
                              : v < 535
                                ? 5
                                : v < 537
                                  ? 6
                                  : v < 538
                                    ? 7
                                    : v < 601
                                      ? 8
                                      : '8')),
              L && (L[1] += ` ${(v += typeof v === 'number' ? '.x' : /[.+]/.test(v) ? '' : '+')}`),
              j == 'Safari' && (!D || parseInt(D) > 45) && (D = v)),
              j == 'Opera' && (v = /\bzbov|zvav$/.exec(U))
                ? ((j += ' '),
                  x.unshift('desktop mode'),
                  v == 'zvav' ? ((j += 'Mini'), (D = null)) : (j += 'Mobile'),
                  (U = U.replace(RegExp(` *${v}$`), '')))
                : j == 'Safari' &&
                  /\bChrome\b/.exec(L && L[1]) &&
                  (x.unshift('desktop mode'),
                  (j = 'Chrome Mobile'),
                  (D = null),
                  /\bOS X\b/.test(U) ? ((V = 'Apple'), (U = 'iOS 4.3+')) : (U = null)),
              D &&
                D.indexOf((v = /[\d.]+$/.exec(U))) == 0 &&
                r.indexOf(`/${v}-`) > -1 &&
                (U = h(U.replace(v, ''))),
              L &&
                !/\b(?:Avant|Nook)\b/.test(j) &&
                (/Browser|Lunascape|Maxthon/.test(j) ||
                  (j != 'Safari' && /^iOS/.test(U) && /\bSafari\b/.test(L[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    j
                  ) &&
                    L[1])) &&
                (v = L[L.length - 1]) &&
                x.push(v),
              x.length && (x = [`(${x.join('; ')})`]),
              V && N && N.indexOf(V) < 0 && x.push(`on ${V}`),
              N && x.push((/^on /.test(x[x.length - 1]) ? '' : 'on ') + N),
              U &&
                ((v = / ([\d.+]+)$/.exec(U)),
                (g = v && U.charAt(U.length - v[0].length - 1) == '/'),
                (U = {
                  architecture: 32,
                  family: v && !g ? U.replace(v[0], '') : U,
                  version: v ? v[1] : null,
                  toString() {
                    const e = this.version;
                    return (
                      this.family +
                      (e && !g ? ` ${e}` : '') +
                      (this.architecture == 64 ? ' 64-bit' : '')
                    );
                  },
                })),
              (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I)
                ? (U &&
                    ((U.architecture = 64), (U.family = U.family.replace(RegExp(` *${v}`), ''))),
                  j &&
                    (/\bWOW64\b/i.test(r) ||
                      (A &&
                        /\w(?:86|32)$/.test(c.cpuClass || c.platform) &&
                        !/\bWin64; x64\b/i.test(r))) &&
                    x.unshift('32-bit'))
                : U &&
                  /^OS X/.test(U.family) &&
                  j == 'Chrome' &&
                  parseFloat(D) >= 39 &&
                  (U.architecture = 64),
              r || (r = null);
            const B = {};
            return (
              (B.description = r),
              (B.layout = L && L[0]),
              (B.manufacturer = V),
              (B.name = j),
              (B.prerelease = M),
              (B.product = N),
              (B.ua = r),
              (B.version = j && D),
              (B.os = U || {
                architecture: null,
                family: null,
                version: null,
                toString() {
                  return 'null';
                },
              }),
              (B.parse = t),
              (B.toString = function() {
                return this.description || '';
              }),
              B.version && x.unshift(D),
              B.name && x.unshift(j),
              U &&
                j &&
                (U != String(U).split(' ')[0] || (U != j.split(' ')[0] && !N)) &&
                x.push(N ? `(${U})` : `on ${U}`),
              x.length && (B.description = x.join(' ')),
              B
            );
          })();
        })();
        e.exports = i;
      }.call(this, r(30)));
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    ,
    function(e, t) {
      e.exports = {};
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    },
    function(e, t) {
      e.exports = !0;
    },
    function(e, t, r) {
      t.__esModule = !0;
      const n = a(r(139));

      const i = a(r(135));

      const o = a(r(5));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e, t) {
        if (typeof t !== 'function' && t !== null)
          throw new TypeError(
            `Super expression must either be null or a function, not ${
              void 0 === t ? 'undefined' : (0, o.default)(t)
            }`
          );
        (e.prototype = (0, i.default)(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (n.default ? (0, n.default)(e, t) : (e.__proto__ = t));
      };
    },
    function(e, t, r) {
      t.__esModule = !0;
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(5));
      t.default = function(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t ||
          ((void 0 === t ? 'undefined' : (0, n.default)(t)) !== 'object' && typeof t !== 'function')
          ? e
          : t;
      };
    },
    ,
    function(e, t, r) {
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0);
        const n = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r(5));
        (t.getGlobal = i),
          (t.detectCSSFeature = function(e) {
            let t = !1;

            const r = 'Webkit Moz ms O'.split(' ');

            const n = document.createElement('div');

            let i = null;
            (e = e.toLowerCase()), void 0 !== n.style[e] && (t = !0);
            if (!1 === t) {
              i = e.charAt(0).toUpperCase() + e.substr(1);
              for (let o = 0; o < r.length; o++)
                if (void 0 !== n.style[r[o] + i]) {
                  t = !0;
                  break;
                }
            }
            return t;
          }),
          (t.fix = o),
          (t.getYearStr = a),
          (t.getMonthStr = s),
          (t.getDayStr = c),
          (t.getHourStr = u),
          (t.getMinuteStr = d),
          (t.getSecondStr = l),
          (t.getMillisecondStr = f),
          (t.dateFromDateTimeLocal = function(e) {
            return (e = `${e}`), new Date(e.replace(/-/g, '/').replace('T', ' '));
          }),
          (t.getClass = p),
          (t.typeOf = h),
          (t.isString = m),
          (t.isNumber = function(e) {
            return h(e) === 'number';
          }),
          (t.isBoolean = function(e) {
            return h(e) === 'boolean';
          }),
          (t.isArray = v),
          (t.isFunction = g),
          (t.isDate = y),
          (t.isRegExp = function(e) {
            return h(e) === 'regexp';
          }),
          (t.isError = function(e) {
            return h(e) === 'error';
          }),
          (t.isnull = S),
          (t.notnull = b),
          (t.undef = _),
          (t.notundef = C),
          (t.exist = T),
          (t.notexist = R),
          (t.isObject = w),
          (t.isEmpty = function(e) {
            return R(e) || ((m(e) || v(e)) && e.length === 0);
          }),
          (t.containsNode = function(e, t) {
            if (e === t) return !0;
            for (; t.parentNode; ) {
              if (t.parentNode === e) return !0;
              t = t.parentNode;
            }
            return !1;
          }),
          (t.calcHeight = function(e) {
            const t = e.parentNode || document.body;
            ((e = e.cloneNode(!0)).style.display = 'block'),
              (e.style.opacity = 0),
              (e.style.height = 'auto'),
              t.appendChild(e);
            const r = e.offsetHeight;
            return t.removeChild(e), r;
          }),
          (t.remove = function(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }),
          (t.dataset = function(e, t, r) {
            if (!T(r)) return e.getAttribute(`data-${t}`);
            e.setAttribute(`data-${t}`, r);
          }),
          (t.target = function(e) {
            return e.target || e.srcElement;
          }),
          (t.createIframe = function(e) {
            let t;
            if ((e = e || {}).name)
              try {
                (t = document.createElement(`<iframe name="${e.name}"></iframe>`)).frameBorder = 0;
              } catch (r) {
                (t = document.createElement('iframe')).name = e.name;
              }
            else t = document.createElement('iframe');
            e.visible || (t.style.display = 'none');
            g(e.onload) &&
              E(t, 'load', function r(n) {
                if (!t.src) return;
                e.multi || O(t, 'load', r);
                e.onload(n);
              });
            (e.parent || document.body).appendChild(t);
            const r = e.src || 'about:blank';
            return (
              setTimeout(() => {
                t.src = r;
              }, 0),
              t
            );
          }),
          (t.html2node = function(e) {
            const t = document.createElement('div');
            t.innerHTML = e;
            const r = [];

            let n = void 0;

            let i = void 0;
            if (t.children) for (n = 0, i = t.children.length; n < i; n++) r.push(t.children[n]);
            else
              for (n = 0, i = t.childNodes.length; n < i; n++) {
                const o = t.childNodes[n];
                o.nodeType === 1 && r.push(o);
              }
            return r.length > 1 ? t : r[0];
          }),
          (t.scrollTop = function(e) {
            T(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
            return (
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
            );
          }),
          (t.forOwn = I),
          (t.mixin = x),
          (t.isJSON = M),
          (t.parseJSON = function e(t) {
            try {
              M(t) && (t = JSON.parse(t)),
                w(t) &&
                  I(t, (r, n) => {
                    switch (h(n)) {
                      case 'string':
                      case 'object':
                        t[r] = e(n);
                    }
                  });
            } catch (e) {
              console.error(e);
            }
            return t;
          }),
          (t.simpleClone = function(e) {
            const t = [];

            const r = JSON.stringify(e, (e, r) => {
              if ((void 0 === r ? 'undefined' : (0, n.default)(r)) === 'object' && r !== null) {
                if (t.indexOf(r) !== -1) return;
                t.push(r);
              }
              return r;
            });
            return JSON.parse(r);
          }),
          (t.merge = function() {
            for (
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length,
                r = Array(t > 1 ? t - 1 : 0),
                n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return (
              r.forEach(t => {
                x(e, t);
              }),
              e
            );
          }),
          (t.fillUndef = function(e, t) {
            return (
              I(t, (t, r) => {
                _(e[t]) && (e[t] = r);
              }),
              e
            );
          }),
          (t.checkWithDefault = function(e, t, r) {
            let n = e[t] || e[t.toLowerCase()];
            R(n) && ((n = r), (e[t] = n));
            return n;
          }),
          (t.fetch = function(e, t) {
            return (
              I(e, (r, n) => {
                T(t[r]) && (e[r] = t[r]);
              }),
              e
            );
          }),
          (t.string2object = function() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';

            const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ',';

            const r = {};
            return (
              e.split(t).forEach(e => {
                const t = e.split('=');

                const n = t.shift();
                n && (r[decodeURIComponent(n)] = decodeURIComponent(t.join('=')));
              }),
              r
            );
          }),
          (t.object2string = A),
          (t.genUrlSep = function(e) {
            return e.indexOf('?') < 0 ? '?' : '&';
          }),
          (t.object2query = function(e) {
            return A(e, '&', !0);
          }),
          (t.isFileInput = D),
          (t.getKeys = function(e, t) {
            const r = Object.keys(e);
            t &&
              r.sort((t, r) => {
                const n = D(e[t]);

                const i = D(e[r]);
                return n === i ? 0 : n ? 1 : -1;
              });
            return r;
          });
        (t.o = {}),
          (t.emptyObj = {}),
          (t.f = function() {}),
          (t.emptyFunc = function() {}),
          (t.regBlank = /\s+/gi),
          (t.regWhiteSpace = /\s+/gi);
        function i() {
          return typeof window !== 'undefined' ? window : void 0 !== e ? e : {};
        }
        function o(e, t) {
          t = t || 2;
          for (var r = `${e}`; r.length < t; ) r = `0${r}`;
          return r;
        }
        function a(e) {
          return `${e.getFullYear()}`;
        }
        function s(e) {
          return o(e.getMonth() + 1);
        }
        function c(e) {
          return o(e.getDate());
        }
        function u(e) {
          return o(e.getHours());
        }
        function d(e) {
          return o(e.getMinutes());
        }
        function l(e) {
          return o(e.getSeconds());
        }
        function f(e) {
          return o(e.getMilliseconds(), 3);
        }
        t.format = (function() {
          const e = /yyyy|MM|dd|hh|mm|ss|SSS/g;

          const t = { yyyy: a, MM: s, dd: c, hh: u, mm: d, ss: l, SSS: f };
          return function(r, n) {
            return (
              (r = new Date(r)),
              isNaN(+r)
                ? 'invalid date'
                : (n = n || 'yyyy-MM-dd').replace(e, e => {
                    return t[e](r);
                  })
            );
          };
        })();
        function p(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function h(e) {
          return p(e).toLowerCase();
        }
        function m(e) {
          return h(e) === 'string';
        }
        function v(e) {
          return h(e) === 'array';
        }
        function g(e) {
          return h(e) === 'function';
        }
        function y(e) {
          return h(e) === 'date';
        }
        function S(e) {
          return e === null;
        }
        function b(e) {
          return e !== null;
        }
        function _(e) {
          return void 0 === e;
        }
        function C(e) {
          return void 0 !== e;
        }
        function T(e) {
          return C(e) && b(e);
        }
        function R(e) {
          return _(e) || S(e);
        }
        function w(e) {
          return T(e) && h(e) === 'object';
        }
        const k = (t.addEventListener = function(e, t, r) {
          e.addEventListener
            ? e.addEventListener(t, r, !1)
            : e.attachEvent && e.attachEvent(`on${t}`, r);
        });

        var E = (t.on = k);

        const P = (t.removeEventListener = function(e, t, r) {
          e.removeEventListener
            ? e.removeEventListener(t, r, !1)
            : e.detachEvent && e.detachEvent(`on${t}`, r);
        });

        var O = (t.off = P);
        function I() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};

          const r = arguments[2];
          for (const n in e) e.hasOwnProperty(n) && t.call(r, n, e[n]);
        }
        function x(e, t) {
          I(t, (t, r) => {
            e[t] = r;
          });
        }
        t.uniqueID = (function() {
          let e = 0;
          return function() {
            return `${e++}`;
          };
        })();
        function M(e) {
          return m(e) && e.indexOf('{') === 0 && e.lastIndexOf('}') === e.length - 1;
        }
        function A(e, t, r) {
          if (!e) return '';
          const n = [];
          return (
            I(e, (e, t) => {
              g(t) ||
                (y(t)
                  ? (t = t.getTime())
                  : v(t)
                    ? (t = t.join(','))
                    : w(t) && (t = JSON.stringify(t)),
                r && (t = encodeURIComponent(t)),
                n.push(`${encodeURIComponent(e)}=${t}`));
            }),
            n.join(t || ',')
          );
        }
        t.url2origin = (function() {
          const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
          return function(t) {
            return e.test(t || '') ? RegExp.$1.toLowerCase() : '';
          };
        })();
        function D(e) {
          const t = i();
          return (
            (e.tagName && e.tagName.toUpperCase() === 'INPUT') || (t.Blob && e instanceof t.Blob)
          );
        }
      }.call(this, r(30)));
    },
    function(e, t, r) {
      const n = Object.prototype.hasOwnProperty;

      let i = '~';
      function o() {}
      function a(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function s() {
        (this._events = new o()), (this._eventsCount = 0);
      }
      Object.create && ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
        (s.prototype.eventNames = function() {
          let e;

          let t;

          const r = [];
          if (this._eventsCount === 0) return r;
          for (t in (e = this._events)) n.call(e, t) && r.push(i ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
        }),
        (s.prototype.listeners = function(e, t) {
          const r = i ? i + e : e;

          const n = this._events[r];
          if (t) return !!n;
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var o = 0, a = n.length, s = new Array(a); o < a; o++) s[o] = n[o].fn;
          return s;
        }),
        (s.prototype.emit = function(e, t, r, n, o, a) {
          const s = i ? i + e : e;
          if (!this._events[s]) return !1;
          let c;

          let u;

          const d = this._events[s];

          const l = arguments.length;
          if (d.fn) {
            switch ((d.once && this.removeListener(e, d.fn, void 0, !0), l)) {
              case 1:
                return d.fn.call(d.context), !0;
              case 2:
                return d.fn.call(d.context, t), !0;
              case 3:
                return d.fn.call(d.context, t, r), !0;
              case 4:
                return d.fn.call(d.context, t, r, n), !0;
              case 5:
                return d.fn.call(d.context, t, r, n, o), !0;
              case 6:
                return d.fn.call(d.context, t, r, n, o, a), !0;
            }
            for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
            d.fn.apply(d.context, c);
          } else {
            let f;

            const p = d.length;
            for (u = 0; u < p; u++)
              switch ((d[u].once && this.removeListener(e, d[u].fn, void 0, !0), l)) {
                case 1:
                  d[u].fn.call(d[u].context);
                  break;
                case 2:
                  d[u].fn.call(d[u].context, t);
                  break;
                case 3:
                  d[u].fn.call(d[u].context, t, r);
                  break;
                case 4:
                  d[u].fn.call(d[u].context, t, r, n);
                  break;
                default:
                  if (!c) for (f = 1, c = new Array(l - 1); f < l; f++) c[f - 1] = arguments[f];
                  d[u].fn.apply(d[u].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function(e, t, r) {
          const n = new a(t, r || this);

          const o = i ? i + e : e;
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], n])
                : this._events[o].push(n)
              : ((this._events[o] = n), this._eventsCount++),
            this
          );
        }),
        (s.prototype.once = function(e, t, r) {
          const n = new a(t, r || this, !0);

          const o = i ? i + e : e;
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], n])
                : this._events[o].push(n)
              : ((this._events[o] = n), this._eventsCount++),
            this
          );
        }),
        (s.prototype.removeListener = function(e, t, r, n) {
          const a = i ? i + e : e;
          if (!this._events[a]) return this;
          if (!t)
            return (
              --this._eventsCount == 0 ? (this._events = new o()) : delete this._events[a], this
            );
          const s = this._events[a];
          if (s.fn)
            s.fn !== t ||
              (n && !s.once) ||
              (r && s.context !== r) ||
              (--this._eventsCount == 0 ? (this._events = new o()) : delete this._events[a]);
          else {
            for (var c = 0, u = [], d = s.length; c < d; c++)
              (s[c].fn !== t || (n && !s[c].once) || (r && s[c].context !== r)) && u.push(s[c]);
            u.length
              ? (this._events[a] = u.length === 1 ? u[0] : u)
              : --this._eventsCount == 0
                ? (this._events = new o())
                : delete this._events[a];
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function(e) {
          let t;
          return (
            e
              ? ((t = i ? i + e : e),
                this._events[t] &&
                  (--this._eventsCount == 0 ? (this._events = new o()) : delete this._events[t]))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prototype.setMaxListeners = function() {
          return this;
        }),
        (s.prefixed = i),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t) {
      let r = 0;

      const n = Math.random();
      e.exports = function(e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++r + n).toString(36));
      };
    },
    function(e, t, r) {
      const n = r(55);

      const i = r(36);
      e.exports =
        Object.keys ||
        function(e) {
          return n(e, i);
        };
    },
    ,
    function(e, t) {
      let r;
      r = (function() {
        return this;
      })();
      try {
        r = r || Function('return this')() || (0, eval)('this');
      } catch (e) {
        typeof window === 'object' && (r = window);
      }
      e.exports = r;
    },
    function(e, t, r) {
      const n = r(6).f;

      const i = r(7);

      const o = r(2)('toStringTag');
      e.exports = function(e, t, r) {
        e && !i((e = r ? e : e.prototype), o) && n(e, o, { configurable: !0, value: t });
      };
    },
    function(e, t) {
      const r = {}.toString;
      e.exports = function(e) {
        return r.call(e).slice(8, -1);
      };
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, r) {
      const n = r(1);

      const i = r(3);

      const o = r(20);

      const a = r(35);

      const s = r(6).f;
      e.exports = function(e) {
        const t = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
        e.charAt(0) == '_' || e in t || s(t, e, { value: a.f(e) });
      };
    },
    function(e, t, r) {
      t.f = r(2);
    },
    function(e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    function(e, t, r) {
      const n = r(3);

      const i = r(1);

      const o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
      (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: n.version,
        mode: r(20) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(e, t, r) {
      const n = r(37)('keys');

      const i = r(27);
      e.exports = function(e) {
        return n[e] || (n[e] = i(e));
      };
    },
    function(e, t, r) {
      const n = r(11);
      e.exports = function(e, t) {
        if (!n(e)) return e;
        let r;
        let i;
        if (t && typeof (r = e.toString) === 'function' && !n((i = r.call(e)))) return i;
        if (typeof (r = e.valueOf) === 'function' && !n((i = r.call(e)))) return i;
        if (!t && typeof (r = e.toString) === 'function' && !n((i = r.call(e)))) return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError(`Can't call method on  ${e}`);
        return e;
      };
    },
    function(e, t) {
      const r = Math.ceil;

      const n = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(121);
      Object.defineProperty(t, 'ajax', {
        enumerable: !0,
        get() {
          return a(n).default;
        },
      });
      const i = r(132);
      Object.defineProperty(t, 'element', {
        enumerable: !0,
        get() {
          return a(i).default;
        },
      });
      const o = r(120);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'tool', {
        enumerable: !0,
        get() {
          return a(o).default;
        },
      });
    },
    ,
    function(e, t, r) {
      const n = r(61);
      e.exports = function(e, t, r) {
        if ((n(e), void 0 === t)) return e;
        switch (r) {
          case 1:
            return function(r) {
              return e.call(t, r);
            };
          case 2:
            return function(r, n) {
              return e.call(t, r, n);
            };
          case 3:
            return function(r, n, i) {
              return e.call(t, r, n, i);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, r) {
      const n = r(9);

      const i = r(95);

      const o = r(36);

      const a = r(38)('IE_PROTO');

      const s = function() {};

      var c = function() {
        let e;

        const t = r(50)('iframe');

        let n = o.length;
        for (
          t.style.display = 'none',
            r(73).appendChild(t),
            t.src = 'javascript:',
            (e = t.contentWindow.document).open(),
            e.write('<script>document.F=Object</script>'),
            e.close(),
            c = e.F;
          n--;

        )
          delete c.prototype[o[n]];
        return c();
      };
      e.exports =
        Object.create ||
        function(e, t) {
          let r;
          return (
            e !== null
              ? ((s.prototype = n(e)), (r = new s()), (s.prototype = null), (r[a] = e))
              : (r = c()),
            void 0 === t ? r : i(r, t)
          );
        };
    },
    ,
    ,
    function(e, t, r) {
      t.__esModule = !0;
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(100));
      t.default = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const i = t[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              (0, n.default)(e, i.key, i);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
    },
    function(e, t, r) {
      const n = r(40);
      e.exports = function(e) {
        return Object(n(e));
      };
    },
    function(e, t, r) {
      const n = r(11);

      const i = r(1).document;

      const o = n(i) && n(i.createElement);
      e.exports = function(e) {
        return o ? i.createElement(e) : {};
      };
    },
    function(e, t, r) {
      const n = r(97)(!0);
      r(58)(
        String,
        'String',
        function(e) {
          (this._t = String(e)), (this._i = 0);
        },
        function() {
          let e;

          const t = this._t;

          const r = this._i;
          return r >= t.length
            ? { value: void 0, done: !0 }
            : ((e = n(t, r)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.constantBB = t.constantRtc = t.constantTool = void 0);
      let n;

      let i;

      let o;

      let a;

      const s = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(109));
      const c = { HANGUP_TYPE_NORMAL: 0, HANGUP_TYPE_TIMEOUT: -1 };

      const u = {
        NETCALL_TYPE_AUDIO: 1,
        NETCALL_TYPE_VIDEO: 2,
        DEVICE_TYPE_AUDIO_IN: 0,
        DEVICE_TYPE_AUDIO_OUT_LOCAL: 1,
        DEVICE_TYPE_AUDIO_OUT_CHAT: 2,
        DEVICE_TYPE_VIDEO: 3,
        DEVICE_TYPE_DESKTOP_SCREEN: 4,
        DEVICE_TYPE_DESKTOP_WINDOW: 5,
        DEVICE_TYPE_DESKTOP_CHROME_SCREEN: 6,
        CHAT_VIDEO_QUALITY_NORMAL: 0,
        CHAT_VIDEO_QUALITY_LOW: 1,
        CHAT_VIDEO_QUALITY_MEDIUM: 2,
        CHAT_VIDEO_QUALITY_HIGH: 3,
        CHAT_VIDEO_QUALITY_480P: 4,
        CHAT_VIDEO_QUALITY_540P: 5,
        CHAT_VIDEO_QUALITY_720P: 6,
        CHAT_VIDEO_FRAME_RATE_NORMAL: 0,
        CHAT_VIDEO_FRAME_RATE_5: 1,
        CHAT_VIDEO_FRAME_RATE_10: 2,
        CHAT_VIDEO_FRAME_RATE_15: 3,
        CHAT_VIDEO_FRAME_RATE_20: 4,
        CHAT_VIDEO_FRAME_RATE_25: 5,
        LAYOUT_SPLITBOTTOMHORFLOATING: 0,
        LAYOUT_SPLITTOPHORFLOATING: 1,
        LAYOUT_SPLITLATTICETILE: 2,
        LAYOUT_SPLITLATTICECUTTINGTILE: 3,
        LAYOUT_SPLITCUSTOM: 4,
        ROLE_PLAYER: 0,
        ROLE_AUDIENCE: 1,
      };
      (u.deviceTypeMap = ((n = {}),
      (0, s.default)(n, u.DEVICE_TYPE_AUDIO_IN, 'audioIn'),
      (0, s.default)(n, u.DEVICE_TYPE_AUDIO_OUT_CHAT, 'audioOut'),
      (0, s.default)(n, u.DEVICE_TYPE_VIDEO, 'video'),
      n)),
        (u.deviceTypeMap = ((i = {}),
        (0, s.default)(i, u.DEVICE_TYPE_AUDIO_IN, 'audioIn'),
        (0, s.default)(i, u.DEVICE_TYPE_AUDIO_OUT_LOCAL, 'audioOut'),
        (0, s.default)(i, u.DEVICE_TYPE_AUDIO_OUT_CHAT, 'audioOut'),
        (0, s.default)(i, u.DEVICE_TYPE_VIDEO, 'video'),
        i)),
        (u.videoMap = {
          frame: ((o = {}),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_NORMAL, '480x320'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_LOW, '176x144'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_MEDIUM, '352x288'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_HIGH, '480x320'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_480P, '640x480'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_540P, '960x540'),
          (0, s.default)(o, u.CHAT_VIDEO_QUALITY_720P, '1280x720'),
          o),
          frameRate: ((a = {}),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_NORMAL, 15),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_5, 5),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_10, 10),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_15, 15),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_20, 20),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_25, 25),
          a),
        });
      const d = {
        getVideoSessionConfig() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.quality;

          const r = void 0 === t ? u.CHAT_VIDEO_QUALITY_NORMAL : t;

          const n = e.frameRate;

          const i = void 0 === n ? u.CHAT_VIDEO_FRAME_RATE_NORMAL : n;

          const o = {};

          const a = u.videoMap.frame[r];
          return (
            (o.frameRate = u.videoMap.frameRate[i]),
            (o.width = +a.split('x')[0]),
            (o.height = +a.split('x')[1]),
            o
          );
        },
        getDeviceTypeStr(e) {
          return u.deviceTypeMap[e];
        },
        getDeviceTypeMap(e) {
          return u.deviceTypeMap[e];
        },
      };

      const l = Object.assign(
        u,
        {
          NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON: 1,
          NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF: 2,
          NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON: 3,
          NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF: 4,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO: 5,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_AGREE: 6,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_REJECT: 7,
          NETCALL_CONTROL_COMMAND_SWITCH_VIDEO_TO_AUDIO: 8,
          NETCALL_CONTROL_COMMAND_BUSY: 9,
          NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID: 10,
          NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID: 11,
          NETCALL_CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
          NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13,
          NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_START: 14,
          NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_STOP: 15,
        },
        c
      );

      const f = Object.assign(
        {
          WB_TYPE_TCP: 2,
          WB_TYPE_UDP: 3,
          CALL_TYPE_NONE: 0,
          CALL_TYPE_AUDIO: 1,
          HANGUP_TYPE_NORMAL: 0,
          HANGUP_TYPE_TIMEOUT: -1,
        },
        {
          CONTROL_COMMAND_BUSY: 9,
          CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
          CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13,
        },
        c
      );
      (t.constantTool = d), (t.constantRtc = l), (t.constantBB = f);
    },
    function(e, t, r) {
      const n = r(55);

      const i = r(36).concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return n(e, i);
        };
    },
    function(e, t, r) {
      const n = r(32);
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return n(e) == 'String' ? e.split('') : Object(e);
          };
    },
    function(e, t, r) {
      const n = r(7);

      const i = r(12);

      const o = r(94)(!1);

      const a = r(38)('IE_PROTO');
      e.exports = function(e, t) {
        let r;

        const s = i(e);

        let c = 0;

        const u = [];
        for (r in s) r != a && n(s, r) && u.push(r);
        for (; t.length > c; ) n(s, (r = t[c++])) && (~o(u, r) || u.push(r));
        return u;
      };
    },
    function(e, t, r) {
      e.exports = r(10);
    },
    function(e, t, r) {
      e.exports =
        !r(8) &&
        !r(16)(() => {
          return (
            Object.defineProperty(r(50)('div'), 'a', {
              get() {
                return 7;
              },
            }).a != 7
          );
        });
    },
    function(e, t, r) {
      const n = r(20);

      const i = r(13);

      const o = r(56);

      const a = r(10);

      const s = r(18);

      const c = r(96);

      const u = r(31);

      const d = r(92);

      const l = r(2)('iterator');

      const f = !([].keys && 'next' in [].keys());

      const p = function() {
        return this;
      };
      e.exports = function(e, t, r, h, m, v, g) {
        c(r, t, h);
        let y;

        let S;

        let b;

        const _ = function(e) {
          if (!f && e in w) return w[e];
          switch (e) {
            case 'keys':
            case 'values':
              return function() {
                return new r(this, e);
              };
          }
          return function() {
            return new r(this, e);
          };
        };

        const C = `${t} Iterator`;

        const T = m == 'values';

        let R = !1;

        var w = e.prototype;

        const k = w[l] || w['@@iterator'] || (m && w[m]);

        let E = k || _(m);

        const P = m ? (T ? _('entries') : E) : void 0;

        const O = (t == 'Array' && w.entries) || k;
        if (
          (O &&
            (b = d(O.call(new e()))) !== Object.prototype &&
            b.next &&
            (u(b, C, !0), n || typeof b[l] === 'function' || a(b, l, p)),
          T &&
            k &&
            k.name !== 'values' &&
            ((R = !0),
            (E = function() {
              return k.call(this);
            })),
          (n && !g) || (!f && !R && w[l]) || a(w, l, E),
          (s[t] = E),
          (s[C] = p),
          m)
        )
          if (((y = { values: T ? E : _('values'), keys: v ? E : _('keys'), entries: P }), g))
            for (S in y) S in w || o(w, S, y[S]);
          else i(i.P + i.F * (f || R), t, y);
        return y;
      };
    },
    ,
    function(e, t, r) {
      r(91);
      for (
        let n = r(1),
          i = r(10),
          o = r(18),
          a = r(2)('toStringTag'),
          s = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          c = 0;
        c < s.length;
        c++
      ) {
        const u = s[c];

        const d = n[u];

        const l = d && d.prototype;
        l && !l[a] && i(l, a, u), (o[u] = o.Array);
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
        return e;
      };
    },
    ,
    function(e, t, r) {
      let n = !0;

      let i = !0;

      const o = {
        disableLog(e) {
          return typeof e !== 'boolean'
            ? new Error(`Argument type: ${typeof e}. Please use a boolean.`)
            : ((n = e), e ? 'adapter.js logging disabled' : 'adapter.js logging enabled');
        },
        disableWarnings(e) {
          return typeof e !== 'boolean'
            ? new Error(`Argument type: ${typeof e}. Please use a boolean.`)
            : ((i = !e), `adapter.js deprecation warnings ${e ? 'disabled' : 'enabled'}`);
        },
        log() {
          if (typeof window === 'object') {
            if (n) return;
            typeof console !== 'undefined' &&
              typeof console.log === 'function' &&
              console.log(...arguments);
          }
        },
        deprecated(e, t) {
          i && console.warn(`${e} is deprecated, please use ${t} instead.`);
        },
        extractVersion(e, t, r) {
          const n = e.match(t);
          return n && n.length >= r && parseInt(n[r], 10);
        },
        detectBrowser(e) {
          const t = e && e.navigator;

          const r = { browser: null, version: null };
          if (void 0 === e || !e.navigator) return (r.browser = 'Not a browser.'), r;
          if (t.mozGetUserMedia)
            (r.browser = 'firefox'),
              (r.version = this.extractVersion(t.userAgent, /Firefox\/(\d+)\./, 1));
          else if (t.webkitGetUserMedia)
            if (e.webkitRTCPeerConnection)
              (r.browser = 'chrome'),
                (r.version = this.extractVersion(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
            else {
              if (!t.userAgent.match(/Version\/(\d+).(\d+)/))
                return (
                  (r.browser =
                    'Unsupported webkit-based browser with GUM support but no WebRTC support.'),
                  r
                );
              (r.browser = 'safari'),
                (r.version = this.extractVersion(t.userAgent, /AppleWebKit\/(\d+)\./, 1));
            }
          else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/))
            (r.browser = 'edge'),
              (r.version = this.extractVersion(t.userAgent, /Edge\/(\d+).(\d+)$/, 2));
          else {
            if (!t.mediaDevices || !t.userAgent.match(/AppleWebKit\/(\d+)\./))
              return (r.browser = 'Not a supported browser.'), r;
            (r.browser = 'safari'),
              (r.version = this.extractVersion(t.userAgent, /AppleWebKit\/(\d+)\./, 1));
          }
          return r;
        },
      };
      e.exports = {
        log: o.log,
        deprecated: o.deprecated,
        disableLog: o.disableLog,
        disableWarnings: o.disableWarnings,
        extractVersion: o.extractVersion,
        shimCreateObjectURL: o.shimCreateObjectURL,
        detectBrowser: o.detectBrowser.bind(o),
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(246);
      Object.defineProperty(t, 'RtcUtil', {
        enumerable: !0,
        get() {
          return c(n).default;
        },
      });
      const i = r(242);
      Object.defineProperty(t, 'SdpUtil', {
        enumerable: !0,
        get() {
          return c(i).default;
        },
      });
      const o = r(234);
      Object.defineProperty(t, 'RtcStats', {
        enumerable: !0,
        get() {
          return c(o).default;
        },
      });
      const a = r(233);
      Object.defineProperty(t, 'RtcStatsNew', {
        enumerable: !0,
        get() {
          return c(a).default;
        },
      });
      const s = r(157);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'RtcSupport', {
        enumerable: !0,
        get() {
          return c(s).default;
        },
      });
    },
    ,
    ,
    function(e, t, r) {
      t.__esModule = !0;
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(78));
      t.default =
        n.default ||
        function(e) {
          for (let t = 1; t < arguments.length; t++) {
            const r = arguments[t];
            for (const n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    },
    function(e, t, r) {
      const n = r(26);

      const i = r(19);

      const o = r(12);

      const a = r(39);

      const s = r(7);

      const c = r(57);

      const u = Object.getOwnPropertyDescriptor;
      t.f = r(8)
        ? u
        : function(e, t) {
            if (((e = o(e)), (t = a(t, !0)), c))
              try {
                return u(e, t);
              } catch (e) {}
            if (s(e, t)) return i(!n.f.call(e, t), e[t]);
          };
    },
    function(e, t, r) {
      const n = r(41);

      const i = Math.min;
      e.exports = function(e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0;
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let n;

      let i;

      const o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(109));
      const a = {
        CURRENT: { SDK_TYPE: null },
        SDK_TYPE: { NETCALL: 1, WEBRTC: 2, WHITEBOARD: 3, NRTC: 4 },
        SDK_NAME: { 1: 'Netcall', 2: 'WebRTC', 3: 'WhiteBoard', 4: 'NRTC' },
      };
      (a.STATS_FUN = ((n = {}),
      (0, o.default)(n, a.SDK_TYPE.NETCALL, 1),
      (0, o.default)(n, a.SDK_TYPE.WEBRTC, 1),
      (0, o.default)(n, a.SDK_TYPE.NRTC, 1),
      (0, o.default)(n, a.SDK_TYPE.WHITEBOARD, 0),
      n)),
        (a.STATS_RTC = ((i = {}),
        (0, o.default)(i, a.SDK_TYPE.WEBRTC, 1),
        (0, o.default)(i, a.SDK_TYPE.NRTC, 1),
        (0, o.default)(i, a.SDK_TYPE.WHITEBOARD, 0),
        i)),
        (t.default = a),
        (e.exports = t.default);
    },
    ,
    function(e, t) {},
    function(e, t, r) {
      const n = r(1).document;
      e.exports = n && n.documentElement;
    },
    ,
    function(e, t, r) {
      const n = r(28);

      const i = r(33);

      const o = r(26);

      const a = r(49);

      const s = r(54);

      const c = Object.assign;
      e.exports =
        !c ||
        r(16)(() => {
          const e = {};

          const t = {};

          const r = Symbol();

          const n = 'abcdefghijklmnopqrst';
          return (
            (e[r] = 7),
            n.split('').forEach(e => {
              t[e] = e;
            }),
            c({}, e)[r] != 7 || Object.keys(c({}, t)).join('') != n
          );
        })
          ? function(e, t) {
              for (var r = a(e), c = arguments.length, u = 1, d = i.f, l = o.f; c > u; )
                for (
                  var f,
                    p = s(arguments[u++]),
                    h = d ? n(p).concat(d(p)) : n(p),
                    m = h.length,
                    v = 0;
                  m > v;

                )
                  l.call(p, (f = h[v++])) && (r[f] = p[f]);
              return r;
            }
          : c;
    },
    function(e, t, r) {
      const n = r(13);
      n(n.S + n.F, 'Object', { assign: r(75) });
    },
    function(e, t, r) {
      r(76), (e.exports = r(3).Object.assign);
    },
    function(e, t, r) {
      e.exports = { default: r(77), __esModule: !0 };
    },
    ,
    function(e, t, r) {
      r(34)('observable');
    },
    function(e, t, r) {
      r(34)('asyncIterator');
    },
    function(e, t, r) {
      const n = r(12);

      const i = r(53).f;

      const o = {}.toString;

      const a =
        typeof window === 'object' && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
      e.exports.f = function(e) {
        return a && o.call(e) == '[object Window]'
          ? (function(e) {
              try {
                return i(e);
              } catch (e) {
                return a.slice();
              }
            })(e)
          : i(n(e));
      };
    },
    function(e, t, r) {
      const n = r(32);
      e.exports =
        Array.isArray ||
        function(e) {
          return n(e) == 'Array';
        };
    },
    function(e, t, r) {
      const n = r(28);

      const i = r(33);

      const o = r(26);
      e.exports = function(e) {
        const t = n(e);

        const r = i.f;
        if (r)
          for (var a, s = r(e), c = o.f, u = 0; s.length > u; )
            c.call(e, (a = s[u++])) && t.push(a);
        return t;
      };
    },
    function(e, t, r) {
      const n = r(27)('meta');

      const i = r(11);

      const o = r(7);

      const a = r(6).f;

      let s = 0;

      const c =
        Object.isExtensible ||
        function() {
          return !0;
        };

      const u = !r(16)(() => {
        return c(Object.preventExtensions({}));
      });

      const d = function(e) {
        a(e, n, { value: { i: `O${++s}`, w: {} } });
      };

      var l = (e.exports = {
        KEY: n,
        NEED: !1,
        fastKey(e, t) {
          if (!i(e)) return typeof e === 'symbol' ? e : (typeof e === 'string' ? 'S' : 'P') + e;
          if (!o(e, n)) {
            if (!c(e)) return 'F';
            if (!t) return 'E';
            d(e);
          }
          return e[n].i;
        },
        getWeak(e, t) {
          if (!o(e, n)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            d(e);
          }
          return e[n].w;
        },
        onFreeze(e) {
          return u && l.NEED && c(e) && !o(e, n) && d(e), e;
        },
      });
    },
    function(e, t, r) {
      const n = r(1);

      const i = r(7);

      const o = r(8);

      const a = r(13);

      const s = r(56);

      const c = r(85).KEY;

      const u = r(16);

      const d = r(37);

      const l = r(31);

      const f = r(27);

      const p = r(2);

      const h = r(35);

      const m = r(34);

      const v = r(84);

      const g = r(83);

      const y = r(9);

      const S = r(11);

      const b = r(12);

      const _ = r(39);

      const C = r(19);

      const T = r(45);

      const R = r(82);

      const w = r(68);

      const k = r(6);

      const E = r(28);

      const P = w.f;

      const O = k.f;

      const I = R.f;

      let x = n.Symbol;

      const M = n.JSON;

      const A = M && M.stringify;

      const D = p('_hidden');

      const L = p('toPrimitive');

      const j = {}.propertyIsEnumerable;

      const N = d('symbol-registry');

      const V = d('symbols');

      const U = d('op-symbols');

      const F = Object.prototype;

      const B = typeof x === 'function';

      const G = n.QObject;

      let W = !G || !G.prototype || !G.prototype.findChild;

      const H =
        o &&
        u(() => {
          return (
            T(
              O({}, 'a', {
                get() {
                  return O(this, 'a', { value: 7 }).a;
                },
              })
            ).a != 7
          );
        })
          ? function(e, t, r) {
              const n = P(F, t);
              n && delete F[t], O(e, t, r), n && e !== F && O(F, t, n);
            }
          : O;

      const Y = function(e) {
        const t = (V[e] = T(x.prototype));
        return (t._k = e), t;
      };

      const z =
        B && typeof x.iterator === 'symbol'
          ? function(e) {
              return typeof e === 'symbol';
            }
          : function(e) {
              return e instanceof x;
            };

      var K = function(e, t, r) {
        return (
          e === F && K(U, t, r),
          y(e),
          (t = _(t, !0)),
          y(r),
          i(V, t)
            ? (r.enumerable
                ? (i(e, D) && e[D][t] && (e[D][t] = !1), (r = T(r, { enumerable: C(0, !1) })))
                : (i(e, D) || O(e, D, C(1, {})), (e[D][t] = !0)),
              H(e, t, r))
            : O(e, t, r)
        );
      };

      const J = function(e, t) {
        y(e);
        for (var r, n = v((t = b(t))), i = 0, o = n.length; o > i; ) K(e, (r = n[i++]), t[r]);
        return e;
      };

      const Q = function(e) {
        const t = j.call(this, (e = _(e, !0)));
        return (
          !(this === F && i(V, e) && !i(U, e)) &&
          (!(t || !i(this, e) || !i(V, e) || (i(this, D) && this[D][e])) || t)
        );
      };

      const $ = function(e, t) {
        if (((e = b(e)), (t = _(t, !0)), e !== F || !i(V, t) || i(U, t))) {
          const r = P(e, t);
          return !r || !i(V, t) || (i(e, D) && e[D][t]) || (r.enumerable = !0), r;
        }
      };

      const q = function(e) {
        for (var t, r = I(b(e)), n = [], o = 0; r.length > o; )
          i(V, (t = r[o++])) || t == D || t == c || n.push(t);
        return n;
      };

      const X = function(e) {
        for (var t, r = e === F, n = I(r ? U : b(e)), o = [], a = 0; n.length > a; )
          !i(V, (t = n[a++])) || (r && !i(F, t)) || o.push(V[t]);
        return o;
      };
      B ||
        (s(
          (x = function() {
            if (this instanceof x) throw TypeError('Symbol is not a constructor!');
            const e = f(arguments.length > 0 ? arguments[0] : void 0);

            var t = function(r) {
              this === F && t.call(U, r),
                i(this, D) && i(this[D], e) && (this[D][e] = !1),
                H(this, e, C(1, r));
            };
            return o && W && H(F, e, { configurable: !0, set: t }), Y(e);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (w.f = $),
        (k.f = K),
        (r(53).f = R.f = q),
        (r(26).f = Q),
        (r(33).f = X),
        o && !r(20) && s(F, 'propertyIsEnumerable', Q, !0),
        (h.f = function(e) {
          return Y(p(e));
        })),
        a(a.G + a.W + a.F * !B, { Symbol: x });
      for (
        let Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (let te = E(p.store), re = 0; te.length > re; ) m(te[re++]);
      a(a.S + a.F * !B, 'Symbol', {
        for(e) {
          return i(N, (e += '')) ? N[e] : (N[e] = x(e));
        },
        keyFor(e) {
          if (!z(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in N) if (N[t] === e) return t;
        },
        useSetter() {
          W = !0;
        },
        useSimple() {
          W = !1;
        },
      }),
        a(a.S + a.F * !B, 'Object', {
          create(e, t) {
            return void 0 === t ? T(e) : J(T(e), t);
          },
          defineProperty: K,
          defineProperties: J,
          getOwnPropertyDescriptor: $,
          getOwnPropertyNames: q,
          getOwnPropertySymbols: X,
        }),
        M &&
          a(
            a.S +
              a.F *
                (!B ||
                  u(() => {
                    const e = x();
                    return A([e]) != '[null]' || A({ a: e }) != '{}' || A(Object(e)) != '{}';
                  })),
            'JSON',
            {
              stringify(e) {
                for (var t, r, n = [e], i = 1; arguments.length > i; ) n.push(arguments[i++]);
                if (((r = t = n[1]), (S(t) || void 0 !== e) && !z(e)))
                  return (
                    g(t) ||
                      (t = function(e, t) {
                        if ((typeof r === 'function' && (t = r.call(this, e, t)), !z(t))) return t;
                      }),
                    (n[1] = t),
                    A.apply(M, n)
                  );
              },
            }
          ),
        x.prototype[L] || r(10)(x.prototype, L, x.prototype.valueOf),
        l(x, 'Symbol'),
        l(Math, 'Math', !0),
        l(n.JSON, 'JSON', !0);
    },
    function(e, t, r) {
      r(86), r(72), r(81), r(80), (e.exports = r(3).Symbol);
    },
    function(e, t, r) {
      e.exports = { default: r(87), __esModule: !0 };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    },
    function(e, t) {
      e.exports = function() {};
    },
    function(e, t, r) {
      const n = r(90);

      const i = r(89);

      const o = r(18);

      const a = r(12);
      (e.exports = r(58)(
        Array,
        'Array',
        function(e, t) {
          (this._t = a(e)), (this._i = 0), (this._k = t);
        },
        function() {
          const e = this._t;

          const t = this._k;

          const r = this._i++;
          return !e || r >= e.length
            ? ((this._t = void 0), i(1))
            : i(0, t == 'keys' ? r : t == 'values' ? e[r] : [r, e[r]]);
        },
        'values'
      )),
        (o.Arguments = o.Array),
        n('keys'),
        n('values'),
        n('entries');
    },
    function(e, t, r) {
      const n = r(7);

      const i = r(49);

      const o = r(38)('IE_PROTO');

      const a = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = i(e)),
            n(e, o)
              ? e[o]
              : typeof e.constructor === 'function' && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                  ? a
                  : null
          );
        };
    },
    function(e, t, r) {
      const n = r(41);

      const i = Math.max;

      const o = Math.min;
      e.exports = function(e, t) {
        return (e = n(e)) < 0 ? i(e + t, 0) : o(e, t);
      };
    },
    function(e, t, r) {
      const n = r(12);

      const i = r(69);

      const o = r(93);
      e.exports = function(e) {
        return function(t, r, a) {
          let s;

          const c = n(t);

          const u = i(c.length);

          let d = o(a, u);
          if (e && r != r) {
            for (; u > d; ) if ((s = c[d++]) != s) return !0;
          } else for (; u > d; d++) if ((e || d in c) && c[d] === r) return e || d || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, r) {
      const n = r(6);

      const i = r(9);

      const o = r(28);
      e.exports = r(8)
        ? Object.defineProperties
        : function(e, t) {
            i(e);
            for (var r, a = o(t), s = a.length, c = 0; s > c; ) n.f(e, (r = a[c++]), t[r]);
            return e;
          };
    },
    function(e, t, r) {
      const n = r(45);

      const i = r(19);

      const o = r(31);

      const a = {};
      r(10)(a, r(2)('iterator'), function() {
        return this;
      }),
        (e.exports = function(e, t, r) {
          (e.prototype = n(a, { next: i(1, r) })), o(e, `${t} Iterator`);
        });
    },
    function(e, t, r) {
      const n = r(41);

      const i = r(40);
      e.exports = function(e) {
        return function(t, r) {
          let o;

          let a;

          const s = String(i(t));

          const c = n(r);

          const u = s.length;
          return c < 0 || c >= u
            ? e
              ? ''
              : void 0
            : (o = s.charCodeAt(c)) < 55296 ||
              o > 56319 ||
              c + 1 === u ||
              (a = s.charCodeAt(c + 1)) < 56320 ||
              a > 57343
              ? e
                ? s.charAt(c)
                : o
              : e
                ? s.slice(c, c + 2)
                : a - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, r) {
      r(51), r(60), (e.exports = r(35).f('iterator'));
    },
    function(e, t, r) {
      e.exports = { default: r(98), __esModule: !0 };
    },
    function(e, t, r) {
      e.exports = { default: r(131), __esModule: !0 };
    },
    ,
    ,
    function(e, t, r) {
      const n = r(32);

      const i = r(2)('toStringTag');

      const o =
        n(
          (function() {
            return arguments;
          })()
        ) == 'Arguments';
      e.exports = function(e) {
        let t;
        let r;
        let a;
        return void 0 === e
          ? 'Undefined'
          : e === null
            ? 'Null'
            : typeof (r = (function(e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), i)) === 'string'
              ? r
              : o
                ? n(t)
                : (a = n(t)) == 'Object' && typeof t.callee === 'function'
                  ? 'Arguments'
                  : a;
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      t.__esModule = !0;
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(100));
      t.default = function(e, t, r) {
        return (
          t in e
            ? (0, n.default)(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      };
    },
    ,
    function(e, t, r) {
      t.__esModule = !0;
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(260));
      t.default = function(e) {
        return function() {
          const t = e.apply(this, arguments);
          return new n.default((e, r) => {
            return (function i(o, a) {
              try {
                var s = t[o](a);

                var c = s.value;
              } catch (e) {
                return void r(e);
              }
              if (!s.done)
                return n.default.resolve(c).then(
                  e => {
                    i('next', e);
                  },
                  e => {
                    i('throw', e);
                  }
                );
              e(c);
            })('next');
          });
        };
      };
    },
    function(e, t, r) {
      e.exports = r(262);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(129);
      Object.defineProperty(t, 'Device', {
        enumerable: !0,
        get() {
          return s(n).default;
        },
      });
      const i = r(248);
      Object.defineProperty(t, 'MDevices', {
        enumerable: !0,
        get() {
          return s(i).default;
        },
      });
      const o = r(247);
      Object.defineProperty(t, 'Recorder', {
        enumerable: !0,
        get() {
          return s(o).default;
        },
      });
      const a = r(231);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'MStream', {
        enumerable: !0,
        get() {
          return s(a).default;
        },
      });
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(14));

      const i = r(42);
      const o = r(4).info.nrtcVersion;

      const a = function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, n.default)(this, e);
        const r = t.appkey;

        const i = t.platform;
        (this.apis = {}), (this.isRtc = /WebRTC/.test(i)), this.init(r, i), this.resetStatus();
      };
      t.default = a;
      const s = a.prototype;
      (s.init = function(e, t) {
        this.apis = Object.assign(this.apis, {
          ver: 2,
          platform: t,
          sdk_ver: o || 'v4.4.0',
          uid: null,
          appkey: e,
          time: null,
        });
      }),
        (s.start = function(e) {
          (this.calling = !0), (this.apis = Object.assign(this.apis, e));
        }),
        (s.resetStatus = function() {
          (this.calling = !1),
            (this.apis = Object.assign(this.apis, {
              p2p: { value: 0 },
              meeting: { value: 0 },
              bypass: { value: 0 },
              call_control_type: { value: 0 },
              self_mute: { value: -1 },
              self_mic_mute: { value: -1 },
              switch_p2p_type: { value: 0 },
              set_speaker: { value: -1 },
              net_detect: { value: this.isRtc ? -1 : 0 },
              beautify: { value: -1 },
              water_mark: { value: -1 },
              audio_samples: { value: -1 },
              video_samples: { value: -1 },
              pre_view_mirror: { value: -1 },
              code_mirror: { value: -1 },
              custom_audio: { value: -1 },
              custom_video: { value: -1 },
              audio_mix: { value: -1 },
              snap_shot: { value: -1 },
              record: { value: 0 },
              audio_record: { value: 0 },
              display: { value: 0 },
              android_compatibility: { value: -1 },
              hd_audio: { value: 0 },
              video_quality: { value: 0 },
              fps: { value: 0 },
              prefered_video_encoder: { value: -1 },
              prefered_video_decoder: { value: -1 },
              video_max_encode_bitrate: { value: this.isRtc ? -1 : 0 },
              audio_scene: { value: -1 },
              video_adaptive_strategy: { value: this.isRtc ? -1 : 0 },
              ans: { value: this.isRtc ? -1 : 0 },
              agc: { value: -1 },
              dtx: { value: -1 },
              aec: { value: this.isRtc ? -1 : 0 },
              awc: { value: this.isRtc ? -1 : 0 },
              video_crop: { value: 0 },
              set_all_user_audio_mute: { value: 0 },
              server_record_audio: { value: 0 },
              server_record_video: { value: 0 },
              server_record_single_user: { value: 0 },
              always_keep_calling: { value: 0 },
              actor: { value: 0 },
              pure_video: { value: -1 },
              screen_sharing_module: { value: 0 },
            }));
        }),
        (s.update = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments[1];

          let r = e.key;

          let n = e.ext;
          e.constructor === String && (r = e),
            (n = n || t),
            this.apis[r] &&
              ((this.apis[r].value = 1),
              void 0 !== n && (this.apis[r].ext = n),
              /(p2p|meeting)/.test(r) && (this.calling = !0));
        }),
        (s.send = function() {
          const e = this;
          this.calling &&
            ((this.calling = !1),
            (this.apis.time = Date.now()),
            (0, i.ajax)({
              type: 'post',
              url: 'https://statistic.live.126.net/statistic/realtime/sdkFunctioninfo',
              data: this.apis,
            })
              .then(t => {
                e.resetStatus();
              })
              .catch(t => {
                console.log('err', t), e.resetStatus();
              }));
        }),
        (e.exports = t.default);
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      const n = r(103);

      const i = r(2)('iterator');

      const o = r(18);
      e.exports = r(3).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e['@@iterator'] || o[n(e)];
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          merge() {
            const e = arguments;
            return (e[0] = Object.assign.apply(Object.assign, arguments)), e[0];
          },
          verifyOptions() {
            const e = arguments;
            if (e[0] && e[0].constructor === Object)
              for (let t = 1; t < arguments.length; t++) {
                let r = e[t];
                (r = r.split(' ')).map(t => {
                  if (!e[0][t]) throw Error(`参数缺失 ${t}`);
                });
              }
          },
          guid: (function() {
            const e = function() {
              return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
            };
            return function() {
              return e() + e() + e() + e() + e() + e() + e() + e();
            };
          })(),
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          if (!e.url || !e.data) return Promise.reject('参数不完整，无法发起请求');
          e.dataType = e.dataType || 'json';
          const t = new XMLHttpRequest();
          return (
            t.open(e.type || 'GET', e.url, !0),
            (t.responseType = `${e.dataType}`),
            t.setRequestHeader('Content-type', 'application/json;charset=UTF-8'),
            e.header &&
              Object.keys(e.header).map(r => {
                t.setRequestHeader(r, e.header[r]);
              }),
            new Promise((r, n) => {
              (t.onload = function() {
                const e = t.response;
                r(e);
              }),
                (t.onerror = function(e) {
                  n(e);
                }),
                t.send(JSON.stringify(e.data));
            })
          );
        });
      e.exports = t.default;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      const n = r(61);
      e.exports.f = function(e) {
        return new function(e) {
          let t;
          let r;
          (this.promise = new e((e, n) => {
            if (void 0 !== t || void 0 !== r) throw TypeError('Bad Promise constructor');
            (t = e), (r = n);
          })),
            (this.resolve = n(t)),
            (this.reject = n(r));
        }(e);
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = o(r(112));

      const i = o(r(111));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        getDevices() {
          const e = this;
          return (0, i.default)(
            n.default.mark(function t() {
              let r;
              return n.default.wrap(
                e => {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (console.log('开始获取设备列表'),
                          (r = null),
                          navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          'return',
                          Promise.reject(
                            'your browser not support this feature, see https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices'
                          )
                        );
                      case 4:
                        return (
                          (e.next = 6),
                          navigator.mediaDevices.enumerateDevices().then(e => {
                            e.length !== 0 &&
                              ((r = { video: [], audioIn: [], audioOut: [] }),
                              e.forEach(e => {
                                e.kind === 'videoinput'
                                  ? r.video.push({
                                      deviceId: e.deviceId,
                                      label: e.label ? e.label : `camera ${r.video.length + 1}`,
                                    })
                                  : e.kind === 'audioinput'
                                    ? r.audioIn.push({
                                        deviceId: e.deviceId,
                                        label: e.label
                                          ? e.label
                                          : `microphone ${r.audioIn.length + 1}`,
                                      })
                                    : e.kind === 'audiooutput' &&
                                      r.audioOut.push({
                                        deviceId: e.deviceId,
                                        label: e.label
                                          ? e.label
                                          : `speaker ${r.audioOut.length + 1}`,
                                      });
                              }));
                          })
                        );
                      case 6:
                        return e.abrupt('return', r);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                },
                t,
                e
              );
            })
          )();
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(13);
      n(n.S + n.F * !r(8), 'Object', { defineProperty: r(6).f });
    },
    function(e, t, r) {
      r(130);
      const n = r(3).Object;
      e.exports = function(e, t, r) {
        return n.defineProperty(e, t, r);
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          html2node(e) {
            const t = document.createElement('div');
            t.innerHTML = e;
            let r;

            let n;

            const i = [];
            if (t.children) for (r = 0, n = t.children.length; r < n; r++) i.push(t.children[r]);
            else
              for (r = 0, n = t.childNodes.length; r < n; r++) {
                const o = t.childNodes[r];
                o.nodeType === 1 && i.push(o);
              }
            return i.length > 1 ? t : i[0];
          },
          n2node(e) {
            return e
              ? /HTML.+Element/gi.test(e)
                ? e
                : e[0] && /HTML.+Element/gi.test(e[0])
                  ? e[0]
                  : null
              : null;
          },
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(13);
      n(n.S, 'Object', { create: r(45) });
    },
    function(e, t, r) {
      r(133);
      const n = r(3).Object;
      e.exports = function(e, t) {
        return n.create(e, t);
      };
    },
    function(e, t, r) {
      e.exports = { default: r(134), __esModule: !0 };
    },
    function(e, t, r) {
      const n = r(11);

      const i = r(9);

      const o = function(e, t) {
        if ((i(e), !n(t) && t !== null)) throw TypeError(`${t}: can't set as prototype!`);
      };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(e, t, n) {
                try {
                  (n = r(44)(Function.call, r(68).f(Object.prototype, '__proto__').set, 2))(e, []),
                    (t = !(e instanceof Array));
                } catch (e) {
                  t = !0;
                }
                return function(e, r) {
                  return o(e, r), t ? (e.__proto__ = r) : n(e, r), e;
                };
              })({}, !1)
            : void 0),
        check: o,
      };
    },
    function(e, t, r) {
      const n = r(13);
      n(n.S, 'Object', { setPrototypeOf: r(136).set });
    },
    function(e, t, r) {
      r(137), (e.exports = r(3).Object.setPrototypeOf);
    },
    function(e, t, r) {
      e.exports = { default: r(138), __esModule: !0 };
    },
    function(e, t, r) {
      const n = r(24);

      const i = r(15);

      const o = n.getGlobal();
      function a(e, t) {
        for (const r in t) e[r] = t[r];
        return e;
      }
      o.Object.assign ||
        (console.log('Object.assign polyfill'),
        (o.Object.assign = function() {
          for (var e = arguments, t = 1; t < e.length; t++) e[0] = a(e[0], e[t]);
          return e[0];
        })),
        (o.platform = i);
    },
    ,
    ,
    function(e, t, r) {
      const n = r(2)('iterator');

      let i = !1;
      try {
        const o = [7][n]();
        (o.return = function() {
          i = !0;
        }),
          Array.from(o, () => {
            throw 2;
          });
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !i) return !1;
        let r = !1;
        try {
          const o = [7];

          const a = o[n]();
          (a.next = function() {
            return { done: (r = !0) };
          }),
            (o[n] = function() {
              return a;
            }),
            e(o);
        } catch (e) {}
        return r;
      };
    },
    function(e, t, r) {
      const n = r(18);

      const i = r(2)('iterator');

      const o = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (n.Array === e || o[i] === e);
      };
    },
    function(e, t, r) {
      const n = r(9);
      e.exports = function(e, t, r, i) {
        try {
          return i ? t(n(r)[0], r[1]) : t(r);
        } catch (t) {
          const o = e.return;
          throw (void 0 !== o && n(o.call(e)), t);
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.serializeWb = {
        gateWay: {
          login: 1,
          loginAck: 2,
          join: 3,
          keep_alive: 4,
          keep_alive_ack: 5,
          keep_alive_node: 6,
          broadcast: 7,
          toUser: 8,
          logout: 9,
        },
      }),
        (t.unserializeWb = {
          gateWay: {
            1: 'login',
            2: 'loginAck',
            3: 'join',
            4: 'keep_alive',
            5: 'keep_alive_ack',
            6: 'keep_alive_node',
            7: 'broadcast',
            8: 'toUser',
            9: 'logout',
          },
        });
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = c(r(14));

      const i = c(r(22));

      const o = c(r(21));

      const a = c(r(70));

      const s = r(151);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const u = r(25);

      const d = r(15);

      const l = (function(e) {
        function t() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, n.default)(this, t);
          const r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.info = Object.assign({}, e)),
            r.init(),
            (r.logger = e.logger || window.console),
            (r.autoReconnect = e.autoReconnect || !0),
            (r.isDestroy = !1),
            (r.reConnectCount = 0),
            (r.wssUrl = null),
            r
          );
        }
        return (0, o.default)(t, e), t;
      })(u);

      const f = l.prototype;
      (f.init = function() {
        this.reset();
      }),
        (f.reset = function() {
          this.imInfo = {};
        }),
        (f.connect = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const r = t.url;

          const n = void 0 === r ? this.wssUrl : r;

          const i = t.imInfo;
          return (
            (this.imInfo = i || this.imInfo),
            n
              ? new Promise((t, r) => {
                  e.url = n;
                  let i = void 0;
                  try {
                    i = e.ws = new WebSocket(`wss://${n}`);
                    const o = e;
                    (i.onopen = function(r) {
                      (e.wssUrl = n),
                        o.initSignal(),
                        (o.signalConnected = !0),
                        console.log('signalConnected', n),
                        o.emit('signalConnected'),
                        t(o),
                        e.heartbeat();
                    }),
                      (i.onclose = i.onerror = function(e) {
                        (o.signalConnected = !1), r(e);
                      });
                  } catch (t) {
                    e.logger.error('信令连接建立失败', t), r(t);
                  }
                })
              : Promise.reject('信令地址缺失')
          );
        }),
        (f.initSignal = function() {
          const e = this;

          const t = this.ws;

          const r = t.send;
          (t.send = function(e) {
            r.call(this, JSON.stringify(e));
          }),
            (t.onmessage = function(t) {
              const r = JSON.parse(t.data || null);
              r &&
                (!e.isHeartBeating ||
                (r.type !== 'keep_alive_ack' && r.type !== s.serializeWb.gateWay.keep_alive_ack)
                  ? e.emit('message', r)
                  : e.onHeartBeat(r));
            }),
            (t.onclose = function(t) {
              (e.signalConnected = !1), e.emit('signalTimeout', t);
            }),
            (t.onerror = function(t) {
              (e.signalConnected = !1), e.emit('signalTimeout', event);
            });
        }),
        (f.send = function(e) {
          const t = this;
          e.type,
            this.ws && this.signalConnected && this.ws.readyState === this.ws.OPEN
              ? ((e.browser = {}),
                (e.browser.name = d.name),
                (e.browser.version = d.version),
                this.ws.send(e))
              : this.once('signalConnected', () => {
                  t.send(e);
                });
        }),
        (f.heartbeat = function() {
          (this.socketData = this.socketData || { uid: this.imInfo.uid, cid: this.imInfo.cid }),
            (this.heartBeatList = []),
            this.bindHearBeat(5);
        }),
        (f.onHeartBeat = function(e) {
          this.heartBeatList.shift(), this.bindHearBeat(5);
        }),
        (f.heartBeatHandler = function() {
          const e = this.socketData;

          const t = this.heartBeatList;
          if (t) {
            const r = Date.now();

            let n = r;
            if (
              (a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD &&
                (n = +r.toString().slice(0, -3)),
              t.constructor === Array && t.length === 0)
            ) {
              t.push(r);
              const i = this.getContentData(
                {
                  type: 'keep_alive',
                  uid:
                    a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
                      ? +e.uid
                      : `${e.uid}`,
                  cid:
                    a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
                      ? +e.cid
                      : `${e.cid}`,
                },
                n
              );
              return this.send(i), void this.bindHearBeat(5);
            }
            const o = Date.now() - t[0];
            if (o > 3e4)
              this.logger.error('socket error: heartbeat timeout'), this.emit('signalTimeout');
            else if (o > 2e3 && o < 3e4) {
              this.logger.warn('socket error: no response, keep heartbeat'), t.push(r);
              const s = this.getContentData({ type: 'keep_alive', uid: e.uid, cid: e.cid }, n);
              this.send(s), this.bindHearBeat(2);
            }
          }
        }),
        (f.getContentData = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments[1];
          return (
            a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
              ? ((e.version = 31),
                (e.type = s.serializeWb.gateWay[e.type]),
                (e.content = { params: { timestamp: +t } }))
              : (e.params = { content: { timestamp: `${t}` } }),
            e
          );
        }),
        (f.bindHearBeat = function(e) {
          this.isHeartBeating && clearTimeout(this.isHeartBeating),
            (this.isHeartBeating = setTimeout(this.heartBeatHandler.bind(this), 1e3 * e));
        }),
        (f.stopHeartBeat = function() {
          this.isHeartBeating &&
            (this.isHeartBeating && clearTimeout(this.isHeartBeating),
            this.heartBeatTimer && clearInterval(this.heartBeatTimer),
            (this.isHeartBeating = null),
            (this.heartBeatTimer = null),
            (this.heartBeatList = null),
            (this.heartBeatCount = 0));
        }),
        (f.logout = function() {
          const e = this.socketData;

          const t = Date.now().toString();

          const r = this.getContentData({ type: 'logout', uid: e.uid, cid: e.cid }, t);
          this.send(r);
        }),
        (f.destroy = function() {
          this.logger.log('signal close -> signal.js'),
            this.stopHeartBeat(),
            (this.isDestroy = !0),
            this.ws &&
              ((this.ws.onopen = null),
              (this.ws.onmessage = null),
              (this.ws.onerror = null),
              (this.ws.onclose = null),
              this.ws.readyState === WebSocket.OPEN && this.ws.close(),
              (this.ws = null));
        }),
        (t.default = l),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = a(r(114));

      const i = a(r(166));

      const o = a(r(165));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        DataApi(e) {
          return new n.default(e);
        },
        DataRtc(e) {
          return new i.default(e);
        },
        DataStats(e) {
          return new o.default(e);
        },
      }),
        (e.exports = t.default);
    },
    ,
    function(e, t, r) {
      const n = {
        generateIdentifier() {
          return Math.random()
            .toString(36)
            .substr(2, 10);
        },
      };
      (n.localCName = n.generateIdentifier()),
        (n.splitLines = function(e) {
          return e
            .trim()
            .split('\n')
            .map(e => {
              return e.trim();
            });
        }),
        (n.splitSections = function(e) {
          return e.split('\nm=').map((e, t) => {
            return `${(t > 0 ? `m=${e}` : e).trim()}\r\n`;
          });
        }),
        (n.getDescription = function(e) {
          const t = n.splitSections(e);
          return t && t[0];
        }),
        (n.getMediaSections = function(e) {
          const t = n.splitSections(e);
          return t.shift(), t;
        }),
        (n.matchPrefix = function(e, t) {
          return n.splitLines(e).filter(e => {
            return e.indexOf(t) === 0;
          });
        }),
        (n.parseCandidate = function(e) {
          for (
            var t,
              r = {
                foundation: (t =
                  e.indexOf('a=candidate:') === 0
                    ? e.substring(12).split(' ')
                    : e.substring(10).split(' '))[0],
                component: parseInt(t[1], 10),
                protocol: t[2].toLowerCase(),
                priority: parseInt(t[3], 10),
                ip: t[4],
                port: parseInt(t[5], 10),
                type: t[7],
              },
              n = 8;
            n < t.length;
            n += 2
          )
            switch (t[n]) {
              case 'raddr':
                r.relatedAddress = t[n + 1];
                break;
              case 'rport':
                r.relatedPort = parseInt(t[n + 1], 10);
                break;
              case 'tcptype':
                r.tcpType = t[n + 1];
                break;
              case 'ufrag':
                (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                break;
              default:
                r[t[n]] = t[n + 1];
            }
          return r;
        }),
        (n.writeCandidate = function(e) {
          const t = [];
          t.push(e.foundation),
            t.push(e.component),
            t.push(e.protocol.toUpperCase()),
            t.push(e.priority),
            t.push(e.ip),
            t.push(e.port);
          const r = e.type;
          return (
            t.push('typ'),
            t.push(r),
            r !== 'host' &&
              e.relatedAddress &&
              e.relatedPort &&
              (t.push('raddr'), t.push(e.relatedAddress), t.push('rport'), t.push(e.relatedPort)),
            e.tcpType &&
              e.protocol.toLowerCase() === 'tcp' &&
              (t.push('tcptype'), t.push(e.tcpType)),
            (e.usernameFragment || e.ufrag) &&
              (t.push('ufrag'), t.push(e.usernameFragment || e.ufrag)),
            `candidate:${t.join(' ')}`
          );
        }),
        (n.parseIceOptions = function(e) {
          return e.substr(14).split(' ');
        }),
        (n.parseRtpMap = function(e) {
          let t = e.substr(9).split(' ');

          const r = { payloadType: parseInt(t.shift(), 10) };
          return (
            (t = t[0].split('/')),
            (r.name = t[0]),
            (r.clockRate = parseInt(t[1], 10)),
            (r.channels = t.length === 3 ? parseInt(t[2], 10) : 1),
            (r.numChannels = r.channels),
            r
          );
        }),
        (n.writeRtpMap = function(e) {
          let t = e.payloadType;
          void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
          const r = e.channels || e.numChannels || 1;
          return `a=rtpmap:${t} ${e.name}/${e.clockRate}${r !== 1 ? `/${r}` : ''}\r\n`;
        }),
        (n.parseExtmap = function(e) {
          const t = e.substr(9).split(' ');
          return {
            id: parseInt(t[0], 10),
            direction: t[0].indexOf('/') > 0 ? t[0].split('/')[1] : 'sendrecv',
            uri: t[1],
          };
        }),
        (n.writeExtmap = function(e) {
          return `a=extmap:${e.id || e.preferredId}${
            e.direction && e.direction !== 'sendrecv' ? `/${e.direction}` : ''
          } ${e.uri}\r\n`;
        }),
        (n.parseFmtp = function(e) {
          for (var t, r = {}, n = e.substr(e.indexOf(' ') + 1).split(';'), i = 0; i < n.length; i++)
            r[(t = n[i].trim().split('='))[0].trim()] = t[1];
          return r;
        }),
        (n.writeFmtp = function(e) {
          let t = '';

          let r = e.payloadType;
          if (
            (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
            e.parameters && Object.keys(e.parameters).length)
          ) {
            const n = [];
            Object.keys(e.parameters).forEach(t => {
              e.parameters[t] ? n.push(`${t}=${e.parameters[t]}`) : n.push(t);
            }),
              (t += `a=fmtp:${r} ${n.join(';')}\r\n`);
          }
          return t;
        }),
        (n.parseRtcpFb = function(e) {
          const t = e.substr(e.indexOf(' ') + 1).split(' ');
          return { type: t.shift(), parameter: t.join(' ') };
        }),
        (n.writeRtcpFb = function(e) {
          let t = '';

          let r = e.payloadType;
          return (
            void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
            e.rtcpFeedback &&
              e.rtcpFeedback.length &&
              e.rtcpFeedback.forEach(e => {
                t += `a=rtcp-fb:${r} ${e.type}${
                  e.parameter && e.parameter.length ? ` ${e.parameter}` : ''
                }\r\n`;
              }),
            t
          );
        }),
        (n.parseSsrcMedia = function(e) {
          const t = e.indexOf(' ');

          const r = { ssrc: parseInt(e.substr(7, t - 7), 10) };

          const n = e.indexOf(':', t);
          return (
            n > -1
              ? ((r.attribute = e.substr(t + 1, n - t - 1)), (r.value = e.substr(n + 1)))
              : (r.attribute = e.substr(t + 1)),
            r
          );
        }),
        (n.getMid = function(e) {
          const t = n.matchPrefix(e, 'a=mid:')[0];
          if (t) return t.substr(6);
        }),
        (n.parseFingerprint = function(e) {
          const t = e.substr(14).split(' ');
          return { algorithm: t[0].toLowerCase(), value: t[1] };
        }),
        (n.getDtlsParameters = function(e, t) {
          return {
            role: 'auto',
            fingerprints: n.matchPrefix(e + t, 'a=fingerprint:').map(n.parseFingerprint),
          };
        }),
        (n.writeDtlsParameters = function(e, t) {
          let r = `a=setup:${t}\r\n`;
          return (
            e.fingerprints.forEach(e => {
              r += `a=fingerprint:${e.algorithm} ${e.value}\r\n`;
            }),
            r
          );
        }),
        (n.getIceParameters = function(e, t) {
          let r = n.splitLines(e);
          return {
            usernameFragment: (r = r.concat(n.splitLines(t)))
              .filter(e => {
                return e.indexOf('a=ice-ufrag:') === 0;
              })[0]
              .substr(12),
            password: r
              .filter(e => {
                return e.indexOf('a=ice-pwd:') === 0;
              })[0]
              .substr(10),
          };
        }),
        (n.writeIceParameters = function(e) {
          return `a=ice-ufrag:${e.usernameFragment}\r\na=ice-pwd:${e.password}\r\n`;
        }),
        (n.parseRtpParameters = function(e) {
          for (
            var t = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
              r = n.splitLines(e)[0].split(' '),
              i = 3;
            i < r.length;
            i++
          ) {
            const o = r[i];

            const a = n.matchPrefix(e, `a=rtpmap:${o} `)[0];
            if (a) {
              const s = n.parseRtpMap(a);

              const c = n.matchPrefix(e, `a=fmtp:${o} `);
              switch (
                ((s.parameters = c.length ? n.parseFmtp(c[0]) : {}),
                (s.rtcpFeedback = n.matchPrefix(e, `a=rtcp-fb:${o} `).map(n.parseRtcpFb)),
                t.codecs.push(s),
                s.name.toUpperCase())
              ) {
                case 'RED':
                case 'ULPFEC':
                  t.fecMechanisms.push(s.name.toUpperCase());
              }
            }
          }
          return (
            n.matchPrefix(e, 'a=extmap:').forEach(e => {
              t.headerExtensions.push(n.parseExtmap(e));
            }),
            t
          );
        }),
        (n.writeRtpDescription = function(e, t) {
          let r = '';
          (r += `m=${e} `),
            (r += t.codecs.length > 0 ? '9' : '0'),
            (r += ' UDP/TLS/RTP/SAVPF '),
            (r += `${t.codecs
              .map(e => {
                return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
              })
              .join(' ')}\r\n`),
            (r += 'c=IN IP4 0.0.0.0\r\n'),
            (r += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'),
            t.codecs.forEach(e => {
              (r += n.writeRtpMap(e)), (r += n.writeFmtp(e)), (r += n.writeRtcpFb(e));
            });
          let i = 0;
          return (
            t.codecs.forEach(e => {
              e.maxptime > i && (i = e.maxptime);
            }),
            i > 0 && (r += `a=maxptime:${i}\r\n`),
            (r += 'a=rtcp-mux\r\n'),
            t.headerExtensions &&
              t.headerExtensions.forEach(e => {
                r += n.writeExtmap(e);
              }),
            r
          );
        }),
        (n.parseRtpEncodingParameters = function(e) {
          let t;

          const r = [];

          const i = n.parseRtpParameters(e);

          const o = i.fecMechanisms.indexOf('RED') !== -1;

          const a = i.fecMechanisms.indexOf('ULPFEC') !== -1;

          const s = n
            .matchPrefix(e, 'a=ssrc:')
            .map(e => {
              return n.parseSsrcMedia(e);
            })
            .filter(e => {
              return e.attribute === 'cname';
            });

          const c = s.length > 0 && s[0].ssrc;

          const u = n.matchPrefix(e, 'a=ssrc-group:FID').map(e => {
            return e
              .substr(17)
              .split(' ')
              .map(e => {
                return parseInt(e, 10);
              });
          });
          u.length > 0 && u[0].length > 1 && u[0][0] === c && (t = u[0][1]),
            i.codecs.forEach(e => {
              if (e.name.toUpperCase() === 'RTX' && e.parameters.apt) {
                let n = { ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10) };
                c && t && (n.rtx = { ssrc: t }),
                  r.push(n),
                  o &&
                    (((n = JSON.parse(JSON.stringify(n))).fec = {
                      ssrc: t,
                      mechanism: a ? 'red+ulpfec' : 'red',
                    }),
                    r.push(n));
              }
            }),
            r.length === 0 && c && r.push({ ssrc: c });
          let d = n.matchPrefix(e, 'b=');
          return (
            d.length &&
              ((d =
                d[0].indexOf('b=TIAS:') === 0
                  ? parseInt(d[0].substr(7), 10)
                  : d[0].indexOf('b=AS:') === 0
                    ? 1e3 * parseInt(d[0].substr(5), 10) * 0.95 - 16e3
                    : void 0),
              r.forEach(e => {
                e.maxBitrate = d;
              })),
            r
          );
        }),
        (n.parseRtcpParameters = function(e) {
          const t = {};

          const r = n
            .matchPrefix(e, 'a=ssrc:')
            .map(e => {
              return n.parseSsrcMedia(e);
            })
            .filter(e => {
              return e.attribute === 'cname';
            })[0];
          r && ((t.cname = r.value), (t.ssrc = r.ssrc));
          const i = n.matchPrefix(e, 'a=rtcp-rsize');
          (t.reducedSize = i.length > 0), (t.compound = i.length === 0);
          const o = n.matchPrefix(e, 'a=rtcp-mux');
          return (t.mux = o.length > 0), t;
        }),
        (n.parseMsid = function(e) {
          let t;

          const r = n.matchPrefix(e, 'a=msid:');
          if (r.length === 1) return { stream: (t = r[0].substr(7).split(' '))[0], track: t[1] };
          const i = n
            .matchPrefix(e, 'a=ssrc:')
            .map(e => {
              return n.parseSsrcMedia(e);
            })
            .filter(e => {
              return e.attribute === 'msid';
            });
          return i.length > 0 ? { stream: (t = i[0].value.split(' '))[0], track: t[1] } : void 0;
        }),
        (n.generateSessionId = function() {
          return Math.random()
            .toString()
            .substr(2, 21);
        }),
        (n.writeSessionBoilerplate = function(e, t) {
          const r = void 0 !== t ? t : 2;
          return `v=0\r\no=thisisadapterortc ${e ||
            n.generateSessionId()} ${r} IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n`;
        }),
        (n.writeMediaSection = function(e, t, r, i) {
          let o = n.writeRtpDescription(e.kind, t);
          if (
            ((o += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
            (o += n.writeDtlsParameters(
              e.dtlsTransport.getLocalParameters(),
              r === 'offer' ? 'actpass' : 'active'
            )),
            (o += `a=mid:${e.mid}\r\n`),
            e.direction
              ? (o += `a=${e.direction}\r\n`)
              : e.rtpSender && e.rtpReceiver
                ? (o += 'a=sendrecv\r\n')
                : e.rtpSender
                  ? (o += 'a=sendonly\r\n')
                  : e.rtpReceiver
                    ? (o += 'a=recvonly\r\n')
                    : (o += 'a=inactive\r\n'),
            e.rtpSender)
          ) {
            const a = `msid:${i.id} ${e.rtpSender.track.id}\r\n`;
            (o += `a=${a}`),
              (o += `a=ssrc:${e.sendEncodingParameters[0].ssrc} ${a}`),
              e.sendEncodingParameters[0].rtx &&
                ((o += `a=ssrc:${e.sendEncodingParameters[0].rtx.ssrc} ${a}`),
                (o += `a=ssrc-group:FID ${e.sendEncodingParameters[0].ssrc} ${
                  e.sendEncodingParameters[0].rtx.ssrc
                }\r\n`));
          }
          return (
            (o += `a=ssrc:${e.sendEncodingParameters[0].ssrc} cname:${n.localCName}\r\n`),
            e.rtpSender &&
              e.sendEncodingParameters[0].rtx &&
              (o += `a=ssrc:${e.sendEncodingParameters[0].rtx.ssrc} cname:${n.localCName}\r\n`),
            o
          );
        }),
        (n.getDirection = function(e, t) {
          for (let r = n.splitLines(e), i = 0; i < r.length; i++)
            switch (r[i]) {
              case 'a=sendrecv':
              case 'a=sendonly':
              case 'a=recvonly':
              case 'a=inactive':
                return r[i].substr(2);
            }
          return t ? n.getDirection(t) : 'sendrecv';
        }),
        (n.getKind = function(e) {
          return n
            .splitLines(e)[0]
            .split(' ')[0]
            .substr(2);
        }),
        (n.isRejected = function(e) {
          return e.split(' ', 2)[1] === '0';
        }),
        (n.parseMLine = function(e) {
          const t = n
            .splitLines(e)[0]
            .substr(2)
            .split(' ');
          return {
            kind: t[0],
            port: parseInt(t[1], 10),
            protocol: t[2],
            fmt: t.slice(3).join(' '),
          };
        }),
        (n.parseOLine = function(e) {
          const t = n
            .matchPrefix(e, 'o=')[0]
            .substr(2)
            .split(' ');
          return {
            username: t[0],
            sessionId: t[1],
            sessionVersion: parseInt(t[2], 10),
            netType: t[3],
            addressType: t[4],
            address: t[5],
          };
        }),
        (e.exports = n);
    },
    function(e, t) {
      const r = (e.exports = {
        v: [{ name: 'version', reg: /^(\d*)$/ }],
        o: [
          {
            name: 'origin',
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
            format: '%s %s %d %s IP%d %s',
          },
        ],
        s: [{ name: 'name' }],
        i: [{ name: 'description' }],
        u: [{ name: 'uri' }],
        e: [{ name: 'email' }],
        p: [{ name: 'phone' }],
        z: [{ name: 'timezones' }],
        r: [{ name: 'repeats' }],
        t: [{ name: 'timing', reg: /^(\d*) (\d*)/, names: ['start', 'stop'], format: '%d %d' }],
        c: [
          {
            name: 'connection',
            reg: /^IN IP(\d) (\S*)/,
            names: ['version', 'ip'],
            format: 'IN IP%d %s',
          },
        ],
        b: [
          {
            push: 'bandwidth',
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: ['type', 'limit'],
            format: '%s:%s',
          },
        ],
        m: [
          {
            reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
            names: ['type', 'port', 'protocol', 'payloads'],
            format: '%s %d %s %s',
          },
        ],
        a: [
          {
            push: 'rtp',
            reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: ['payload', 'codec', 'rate', 'encoding'],
            format(e) {
              return e.encoding
                ? 'rtpmap:%d %s/%s/%s'
                : e.rate
                  ? 'rtpmap:%d %s/%s'
                  : 'rtpmap:%d %s';
            },
          },
          {
            push: 'fmtp',
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: ['payload', 'config'],
            format: 'fmtp:%d %s',
          },
          { name: 'control', reg: /^control:(.*)/, format: 'control:%s' },
          { name: 'rtcpxr', reg: /^rtcp-xr:(.*)/, format: 'rtcp-xr:%s' },
          {
            name: 'rtcp',
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: ['port', 'netType', 'ipVer', 'address'],
            format(e) {
              return e.address != null ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
            },
          },
          {
            push: 'rtcpFbTrrInt',
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: ['payload', 'value'],
            format: 'rtcp-fb:%d trr-int %d',
          },
          {
            push: 'rtcpFb',
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: ['payload', 'type', 'subtype'],
            format(e) {
              return e.subtype != null ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
            },
          },
          {
            push: 'ext',
            reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
            names: ['value', 'direction', 'uri', 'config'],
            format(e) {
              return `extmap:%d${e.direction ? '/%s' : '%v'} %s${e.config ? ' %s' : ''}`;
            },
          },
          {
            push: 'crypto',
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: ['id', 'suite', 'config', 'sessionConfig'],
            format(e) {
              return e.sessionConfig != null ? 'crypto:%d %s %s %s' : 'crypto:%d %s %s';
            },
          },
          { name: 'setup', reg: /^setup:(\w*)/, format: 'setup:%s' },
          { name: 'mid', reg: /^mid:([^\s]*)/, format: 'mid:%s' },
          { name: 'msid', reg: /^msid:(.*)/, format: 'msid:%s' },
          { name: 'ptime', reg: /^ptime:(\d*)/, format: 'ptime:%d' },
          { name: 'maxptime', reg: /^maxptime:(\d*)/, format: 'maxptime:%d' },
          { name: 'direction', reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
          { name: 'icelite', reg: /^(ice-lite)/ },
          { name: 'iceUfrag', reg: /^ice-ufrag:(\S*)/, format: 'ice-ufrag:%s' },
          { name: 'icePwd', reg: /^ice-pwd:(\S*)/, format: 'ice-pwd:%s' },
          {
            name: 'fingerprint',
            reg: /^fingerprint:(\S*) (\S*)/,
            names: ['type', 'hash'],
            format: 'fingerprint:%s %s',
          },
          {
            push: 'candidates',
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
              'foundation',
              'component',
              'transport',
              'priority',
              'ip',
              'port',
              'type',
              'raddr',
              'rport',
              'tcptype',
              'generation',
              'network-id',
              'network-cost',
            ],
            format(e) {
              let t = 'candidate:%s %d %s %d %s %d typ %s';
              return (
                (t += e.raddr != null ? ' raddr %s rport %d' : '%v%v'),
                (t += e.tcptype != null ? ' tcptype %s' : '%v'),
                e.generation != null && (t += ' generation %d'),
                (t += e['network-id'] != null ? ' network-id %d' : '%v'),
                (t += e['network-cost'] != null ? ' network-cost %d' : '%v')
              );
            },
          },
          { name: 'endOfCandidates', reg: /^(end-of-candidates)/ },
          {
            name: 'remoteCandidates',
            reg: /^remote-candidates:(.*)/,
            format: 'remote-candidates:%s',
          },
          { name: 'iceOptions', reg: /^ice-options:(\S*)/, format: 'ice-options:%s' },
          {
            push: 'ssrcs',
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: ['id', 'attribute', 'value'],
            format(e) {
              let t = 'ssrc:%d';
              return e.attribute != null && ((t += ' %s'), e.value != null && (t += ':%s')), t;
            },
          },
          {
            push: 'ssrcGroups',
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: ['semantics', 'ssrcs'],
            format: 'ssrc-group:%s %s',
          },
          {
            name: 'msidSemantic',
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: ['semantic', 'token'],
            format: 'msid-semantic: %s %s',
          },
          {
            push: 'groups',
            reg: /^group:(\w*) (.*)/,
            names: ['type', 'mids'],
            format: 'group:%s %s',
          },
          { name: 'rtcpMux', reg: /^(rtcp-mux)/ },
          { name: 'rtcpRsize', reg: /^(rtcp-rsize)/ },
          {
            name: 'sctpmap',
            reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
            names: ['sctpmapNumber', 'app', 'maxMessageSize'],
            format(e) {
              return e.maxMessageSize != null ? 'sctpmap:%s %s %s' : 'sctpmap:%s %s';
            },
          },
          { name: 'xGoogleFlag', reg: /^x-google-flag:([^\s]*)/, format: 'x-google-flag:%s' },
          {
            push: 'rids',
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: ['id', 'direction', 'params'],
            format(e) {
              return e.params ? 'rid:%s %s %s' : 'rid:%s %s';
            },
          },
          {
            push: 'imageattrs',
            reg: new RegExp(
              '^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
            ),
            names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
            format(e) {
              return `imageattr:%s %s %s${e.dir2 ? ' %s %s' : ''}`;
            },
          },
          {
            name: 'simulcast',
            reg: new RegExp(
              '^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$'
            ),
            names: ['dir1', 'list1', 'dir2', 'list2'],
            format(e) {
              return `simulcast:%s %s${e.dir2 ? ' %s %s' : ''}`;
            },
          },
          {
            name: 'simulcast_03',
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: ['value'],
            format: 'simulcast: %s',
          },
          { name: 'framerate', reg: /^framerate:(\d+(?:$|\.\d+))/, format: 'framerate:%s' },
          {
            name: 'sourceFilter',
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
            format: 'source-filter: %s %s %s %s %s',
          },
          { push: 'invalid', names: ['value'] },
        ],
      });
      Object.keys(r).forEach(e => {
        r[e].forEach(e => {
          e.reg || (e.reg = /(.*)/), e.format || (e.format = '%s');
        });
      });
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = a(r(112));

      const i = a(r(111));

      const o = a(r(129));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const s = r(15);

      const c = (navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

      const u = (window.AudioContext =
        window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.msAudioContext);

      const d = (window.RTCPeerConnection =
        window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection);

      const l = (window.RTCDataChannel = window.RTCDataChannel || window.DataChannel);

      const f = ((window.RTCSessionDescription =
        window.RTCSessionDescription || window.mozRTCSessionDescription),
      (window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate),
      (window.MediaStream = window.MediaStream || window.webkitMediaStream));
      function p(e) {
        let t = void 0;
        return (
          t || (t = document.createElement('video')),
          !!t.canPlayType(
            {
              ogg: 'video/ogg; codecs="theora"',
              h264: 'video/mp4; codecs="avc1.42E01E"',
              webm: 'video/webm; codecs="vp8, vorbis"',
              vp9: 'video/webm; codecs="vp9"',
              hls: 'application/x-mpegURL; codecs="avc1.42E01E"',
            }[e] || e
          )
        );
      }
      const h = {
        WebRTC: !!d && !!f,
        RTCPeerConnection: !!d,
        Vp8: p('webm'),
        Vp9: p('vp9'),
        H264: p('h264'),
        GetUserMedia: !!c && !!navigator.mediaDevices,
        DataChannel: !!(d && l && d.prototype && d.prototype.createDataChannel),
        WebAudio: !(!u || !u.prototype.createMediaStreamSource),
        MediaStream: !!f,
      };
      function m() {
        const e = s && s.name;

        let t = s && s.version;
        return (
          console.log('platform', s),
          { prefix: e, version: (t = (t = t && t.match(/(\d|\.)+/)[0]) && t.match(/\d+/)[0]) }
        );
      }
      (t.default = {
        checkWebAudio() {
          return { WebAudio: h.WebAudio, MediaStream: h.MediaStream };
        },
        checkCompatibility() {
          const e = Object.assign(m(), {
            system: s && `${s.os.family} ${s.os.version}`,
            browser: s && s.name,
            version: s && s.version,
          });
          return new Promise(function(t, r) {
            const a = this;
            (0, i.default)(
              n.default.mark(function r() {
                let i;
                let s;
                return n.default.wrap(
                  r => {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (i = Object.assign(e, h, { ScreenSharing: !1 })),
                            (r.next = 3),
                            o.default.getDevices().catch(e => {
                              return console.warn(e), t(i);
                            })
                          );
                        case 3:
                          return (
                            (s = r.sent),
                            (i.MicrophoneList = (s && s.audioIn) || []),
                            (i.CameraList = (s && s.video) || []),
                            (i.Microphone = (s && s.audioIn && s.audioIn.length > 0) || !1),
                            (i.Camera = (s && s.video && s.video.length > 0) || !1),
                            r.abrupt('return', t(i))
                          );
                        case 9:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  a
                );
              })
            )();
          });
        },
        checkVersion() {
          return m();
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
      const n = r(64).RtcSupport.checkWebAudio();
      function i() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

        const t = e.stream;

        const r = e.uid;

        const i = e.isAnalyze;

        const o = e.isRemote;
        (this.support = n.WebAudio && n.MediaStream),
          (this.gain = 1),
          (this.stream = t),
          this.support &&
            ((this.audioIn = {}),
            (this.uid = r || 0),
            (this.isAnalyze = i),
            (this.isRemote = o || !1),
            (this.instant = 0),
            (this.slow = 0),
            (this.clip = 0),
            this.init());
      }
      (i.ac = n.WebAudio && n.MediaStream ? new window.AudioContext() : {}),
        (i.destination = i.ac.createMediaStreamDestination
          ? i.ac.createMediaStreamDestination()
          : {});
      const o = i.prototype;
      (o.context = i.ac),
        (o.init = function() {
          this.validateInput() &&
            (this.isAnalyze && this.initMonitor(),
            this.formatStreams(),
            this.initWebAudio(),
            this.initAudioIn());
        }),
        (o.validateInput = function() {
          return /(Array|MediaStream|LocalMediaStream)/.test(this.stream.constructor);
        }),
        (o.initMonitor = function() {
          const e = this;
          (this.script = this.context.createScriptProcessor(0, 1, 1)).onaudioprocess = function(t) {
            let r;

            const n = t.inputBuffer.getChannelData(0);

            let i = 0;

            let o = 0;
            for (r = 0; r < n.length; ++r) (i += Math.abs(n[r])), Math.abs(n[r]) > 0.99 && (o += 1);
            (e.instant = Math.sqrt(i / n.length)),
              (e.slow = 0.95 * e.slow + 0.05 * e.instant),
              (e.clip = o / n.length);
          };
        }),
        (o.initWebAudio = function() {
          const e = this.context;
          (this.gainFilter = e.createGain()),
            (this.destination = this.isRemote ? i.destination : e.createMediaStreamDestination()),
            (this.gainFilter.gain.value = this.gain),
            this.gainFilter.connect(this.destination);
        }),
        (o.initAudioIn = function() {
          const e = this;

          const t = this;

          const r = this.stream;

          const n = this.context;

          let i = void 0;
          if (/(MediaStream|LocalMediaStream)/.test(r.constructor))
            return o(r), void (this.outputStream = this.destination.stream);
          function o(e) {
            if (!/(MediaStream|LocalMediaStream)/.test(e.constructor)) return null;
            if (e.getAudioTracks().length === 0) return null;
            const r = n.createMediaStreamSource(e);
            return (
              t.isAnalyze && t.script && (r.connect(t.script), t.script.connect(t.gainFilter)),
              r.connect(t.gainFilter),
              r
            );
          }
          r.constructor === Array &&
            (r.forEach(t => {
              (i = o(t)) && (e.audioIn[t.id] = i);
            }),
            (this.outputStream = this.destination.stream));
        }),
        (o.formatStreams = function() {
          const e = this.stream;

          const t = [];
          if (/(MediaStream|LocalMediaStream)/.test(e.constructor))
            return (
              e.getAudioTracks().map(e => {
                t.push(new MediaStream([e]));
              }),
              void (this.stream = t)
            );
          e.constructor === Array &&
            (e.map(e => {
              e.getAudioTracks().map(e => {
                t.push(new MediaStream([e]));
              });
            }),
            (this.stream = t));
        }),
        (o.addStream = function(e) {
          const t = this.context;
          if (e.getAudioTracks().length !== 0) {
            const r = t.createMediaStreamSource(e);
            this.isAnalyze && this.script && r.connect(this.script),
              r.connect(this.gainFilter),
              (this.audioIn[e.id] = r),
              (this.outputStream = this.destination.stream);
          }
        }),
        (o.updateStream = function(e) {
          if (this.audioIn)
            for (const t in this.audioIn)
              this.audioIn[t] && this.audioIn[t].disconnect(0), (this.audioIn[t] = null);
          (this.audioIn = {}), (this.stream = e), this.initAudioIn();
        }),
        (o.setGain = function(e) {
          this.support && ((this.gainFilter.gain.value = e), (this.gain = e));
        }),
        (o.getGain = function() {
          return this.gain;
        }),
        (o.off = function() {
          return this.setGain(0);
        }),
        (o.on = function() {
          this.setGain(1);
        }),
        (o.destroy = function() {
          if (
            ((this.instant = 0),
            (this.slow = 0),
            (this.clip = 0),
            this.gainFilter && this.gainFilter.disconnect(0),
            this.script && this.script.disconnect(0),
            this.audioIn)
          )
            for (const e in this.audioIn) this.audioIn[e] && this.audioIn[e].disconnect(0);
          this.audioIn = {};
          const t = this.stream;
          function r(e) {
            e &&
              e.getTracks().forEach(t => {
                e.removeTrack(t);
              });
          }
          /(MediaStream|LocalMediaStream)/.test(t.constructor) && r(t),
            t.constructor === Array &&
              t.forEach(e => {
                r(e);
              }),
            (this.stream = null),
            (this.outputStream = null);
        }),
        (o.getVolumeData = function() {
          return this.instant.toFixed(2);
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(9);

      const i = r(11);

      const o = r(128);
      e.exports = function(e, t) {
        if ((n(e), i(t) && t.constructor === e)) return t;
        const r = o.f(e);
        return (0, r.resolve)(t), r.promise;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return { e: !1, v: e() };
        } catch (e) {
          return { e: !0, v: e };
        }
      };
    },
    function(e, t, r) {
      let n;

      let i;

      let o;

      const a = r(44);

      const s = r(255);

      const c = r(73);

      const u = r(50);

      const d = r(1);

      const l = d.process;

      let f = d.setImmediate;

      let p = d.clearImmediate;

      const h = d.MessageChannel;

      const m = d.Dispatch;

      let v = 0;

      const g = {};

      const y = function() {
        const e = +this;
        if (g.hasOwnProperty(e)) {
          const t = g[e];
          delete g[e], t();
        }
      };

      const S = function(e) {
        y.call(e.data);
      };
      (f && p) ||
        ((f = function(e) {
          for (var t = [], r = 1; arguments.length > r; ) t.push(arguments[r++]);
          return (
            (g[++v] = function() {
              s(typeof e === 'function' ? e : Function(e), t);
            }),
            n(v),
            v
          );
        }),
        (p = function(e) {
          delete g[e];
        }),
        r(32)(l) == 'process'
          ? (n = function(e) {
              l.nextTick(a(y, e, 1));
            })
          : m && m.now
            ? (n = function(e) {
                m.now(a(y, e, 1));
              })
            : h
              ? ((o = (i = new h()).port2), (i.port1.onmessage = S), (n = a(o.postMessage, o, 1)))
              : d.addEventListener && typeof postMessage === 'function' && !d.importScripts
                ? ((n = function(e) {
                    d.postMessage(`${e}`, '*');
                  }),
                  d.addEventListener('message', S, !1))
                : (n =
                    'onreadystatechange' in u('script')
                      ? function(e) {
                          c.appendChild(u('script')).onreadystatechange = function() {
                            c.removeChild(this), y.call(e);
                          };
                        }
                      : function(e) {
                          setTimeout(a(y, e, 1), 0);
                        })),
        (e.exports = { set: f, clear: p });
    },
    function(e, t, r) {
      const n = r(9);

      const i = r(61);

      const o = r(2)('species');
      e.exports = function(e, t) {
        let r;

        const a = n(e).constructor;
        return void 0 === a || void 0 == (r = n(a)[o]) ? t : i(r);
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = d(r(14));

      const i = d(r(48));

      const o = d(r(22));

      const a = d(r(21));

      const s = d(r(152));

      const c = d(r(70));

      const u = d(r(114));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const l = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (r.info = {}), r._init(e), r._reset(), r;
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(t, [
            {
              key: '_init',
              value(e) {
                (this.info = Object.assign(this.info, e)),
                  (this.logger = e.logger || window.console),
                  c.default.STATS_RTC[c.default.CURRENT.SDK_TYPE] &&
                    (this.dataApi = (function(e) {
                      return new u.default(e);
                    })({
                      appkey: this.info.appKey,
                      platform: c.default.SDK_NAME[c.default.CURRENT.SDK_TYPE],
                    }));
              },
            },
            {
              key: '_reset',
              value() {
                this.signal && (this.signal.destroy(), (this.signal = null)),
                  (this.sessionConfig = {}),
                  (this.imInfo = {}),
                  (this.target = {}),
                  (this.userJoinTimeoutId = 0),
                  (this.remoteNodeStatus = {});
              },
            },
            {
              key: 'resetStatus',
              value() {
                this._reset();
              },
            },
            {
              key: '_startSession',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                const t = this.imInfo || e;
                (t.uid = +t.uid), (t.cid = +t.cid), this.setSessionConfig(t.sessionConfig);
                const r = t.serverMap || {};
                t.urlArray = (t.serverAddrs && JSON.parse(JSON.stringify(t.serverAddrs))) ||
                  (r.webrtcarray && JSON.parse(JSON.stringify(r.webrtcarray))) || [r.webrtc];
                return this.signal ? Promise.resolve(this.signal) : this._initSignal();
              },
            },
            {
              key: '_initSignal',
              value() {
                const e = this;
                if (this.signal) return Promise.resolve();
                const t = new s.default({ logger: this.logger });

                const r = this.imInfo.urlArray;
                if (r) {
                  const n = r.shift();
                  return n
                    ? t
                        .connect({ url: n, imInfo: this.imInfo })
                        .then(t => {
                          return (
                            (e.signal = t),
                            e._initSignalEvent(),
                            t.emit('connected'),
                            Promise.resolve(t.url)
                          );
                        })
                        .catch(t => {
                          return e._initSignal();
                        })
                    : Promise.reject(
                        '无可用的网关服务器地址, 如果当前应用是WebRTC音视频, 请确保对方打开了WebRTC兼容开关'
                      );
                }
              },
            },
            {
              key: '_initSignalEvent',
              value() {
                const e = this;

                const t = this.signal;
                t.on('signalTimeout', this.onSignalTimeout.bind(this)),
                  t.on('message', this.onSignalMessage.bind(this)),
                  t.on('connected', () => {
                    e.emit('connected');
                  }),
                  t.on('signalClosed', () => {
                    e.emit('signalClosed'), e.resetStatus();
                  }),
                  this.signal.on('signalError', t => {
                    e.emit('signalClosed'), e._stopSignal();
                  });
              },
            },
            {
              key: '_stopSignal',
              value() {
                this.signal && (this.signal.destroy(), (this.signal = null));
              },
            },
            {
              key: '_stopSession',
              value() {
                this._stopSignal(), this._reset();
              },
            },
            {
              key: '_logout',
              value() {
                this.signal && this.signal.logout();
              },
            },
            {
              key: 'setAppKey',
              value(e) {
                e && (this.info.appKey = e);
              },
            },
            {
              key: 'setSessionConfig',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sessionConfig = Object.assign(this.sessionConfig, e);
              },
            },
            { key: 'onSignalMessage', value(e) {} },
            { key: 'onSignalTimeout', value(e) {} },
            {
              key: 'uploadDataApi',
              value(e, t) {
                c.default.STATS_FUN[c.default.CURRENT.SDK_TYPE] &&
                  this.info.appKey &&
                  (e === 'start' && (t.appkey = this.info.appKey),
                  this.dataApi[e] && this.dataApi[e](t));
              },
            },
          ]),
          t
        );
      })(r(25));
      (t.default = l), (e.exports = t.default);
    },
    function(e, t, r) {
      const n = s(r(14));

      const i = s(r(22));

      const o = s(r(21));

      const a = r(42);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const c = r(25);

      const u = r(15);

      const d = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e.container = a.element.n2node(e.container)),
            (e.remoteContainer = a.element.n2node(e.remoteContainer)),
            a.tool.merge(r, e),
            r.init(),
            r
          );
        }
        return (0, o.default)(t, e), t;
      })(c);

      const l = d.prototype;
      (l.init = function() {
        const e = this;
        this.resetStatus(),
          /safari/gi.test(u.name)
            ? window.addEventListener('pagehide', this.beforeunload.bind(this))
            : window.addEventListener('beforeunload', this.beforeunload.bind(this));
        const t = (this.nim && this.nim.logger) || window.console;
        this.logger = {
          log() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.log(...arguments);
          },
          error() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.error(...arguments);
          },
          warn() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.warn(...arguments);
          },
        };
      }),
        (l.resetStatus = function() {
          (this.signalInited = !1),
            (this.channelId = null),
            (this.type = null),
            (this.target = { account: null, uid: null }),
            (this.sessionConfig = {}),
            (this.sessionMode = null),
            (this.imInfo = {}),
            (this.calling = !1),
            (this.isCaller = !1),
            (this.callee = null),
            (this.callAccepted = !1),
            (this.callerInfo = null),
            (this.beCalledInfo = null),
            this.nim &&
              (this.nim.protocol &&
                this.nim.protocol.setCurrentNetcall &&
                this.nim.protocol.setCurrentNetcall(),
              this.nim.protocol &&
                this.nim.protocol.setCurrentWhiteBoard &&
                this.nim.protocol.setCurrentWhiteBoard()),
            (this.needQueryAccountMap = {}),
            (this.accountUidMap = {}),
            (this.uidAccountMap = {}),
            (this.isOnHangup = !1);
        }),
        (l.beforeunload = function() {
          this.signalInited &&
            (this.callerInfo || this.beCalledInfo ? this.hangup() : this.leaveChannel());
        }),
        (l.baseGetAccount = function() {
          return this.nim && this.nim.account;
        }),
        (l.baseGetUid = function() {
          return (this.accountUidMap && this.accountUidMap[this.nim.account]) || '-1';
        }),
        (l.parseAccountUidMap = function(e) {
          const t = this;
          Object.keys(e).forEach(r => {
            t.addAccountUidMap({ account: r, uid: e[r] });
          });
        }),
        (l.addAccountUidMap = function(e) {
          const t = e.account;

          const r = e.uid;
          this.uidAccountMap || (this.uidAccountMap = {}),
            (this.uidAccountMap[r] = t),
            this.accountUidMap || (this.accountUidMap = {}),
            (this.accountUidMap[t] = r);
        }),
        (l.getAccountWithUid = function(e) {
          if (this.uidAccountMap) return this.uidAccountMap[e];
        }),
        (l.getUidWithAccount = function(e) {
          if (this.accountUidMap) return this.accountUidMap[e];
        }),
        (l.baseIsCurrentChannelId = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.channelId && this.channelId === e.channelId;
        }),
        (l.baseNotCurrentChannelId = function(e) {
          return !this.baseIsCurrentChannelId(e);
        }),
        (l.baseResponse = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const r = t.fn || 'calleeAck';

          const n = t.beCalledInfo || this.beCalledInfo;

          const i = (n.accepted = !1 !== t.accepted);
          return (
            i
              ? ((this.sessionMode = 'p2p'),
                (this.type = n.type),
                (this.channelId = n.channelId),
                (this.target.account = n.account),
                (this.calling = !0),
                (this.imInfo = n),
                (this.imInfo.sessionMode = this.sessionMode),
                (this.imInfo.role = 0),
                this.setSessionConfig({ signalStartTime: Date.now() }))
              : (this.logger.log('reject call', n),
                this.packNetcallRecord({
                  type: n.type,
                  channelId: n.channelId,
                  isCaller: !1,
                  target: n.account,
                  recordType: 'rejectNetcall',
                })),
            this.nim[r](n).then(
              () => {
                i &&
                  (t.sessionConfig && e.setSessionConfig(t.sessionConfig),
                  (e.beCalledInfo = n),
                  e.initSession({ beCalledInfo: n }));
              },
              t => {
                throw (e.logger.log(t), t);
              }
            )
          );
        }),
        (l.baseControl = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (((t.channelId = t.channelId || this.channelId), t.command && t.channelId)) {
            this.controller.uploadDataApi('update', { key: 'call_control_type' });
            const r = t.fn || 'netcallControl';
            return (
              (t.type = t.command),
              this.nim[r](t).catch(t => {
                e.logger.log(t);
              })
            );
          }
        }),
        (l.baseHangup = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.controller.uploadDataApi('send');
          const t = e.channelId;

          const r = void 0 === t ? this.channelId : t;

          const n = e.recordType;
          if (r) {
            const i = e.fn || 'hangup';
            this.nim[i]({ channelId: r });
          }
          r === this.channelId &&
            (this.isCaller &&
              !this.callAccepted &&
              (this.logger.log(n, { channelId: r }), this.packNetcallRecord({ recordType: n })),
            this.resetWhenHangup());
        }),
        (l.baseStartSession = function() {
          this.imInfo.cid = this.imInfo.cid || this.imInfo.channelId;
          const e = (this.sessionMode = this.sessionMode || 'p2p');
          (this.imInfo.sessionMode = e),
            (this.imInfo.sessionConfig = this.sessionConfig),
            this.imInfo.serverMap &&
              this.imInfo.serverMap.constructor === String &&
              (this.imInfo.serverMap = JSON.parse(this.imInfo.serverMap));
        }),
        (l.packNetcallRecord = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.recordType;

          const r = e.type || this.type;

          const n = e.channelId || this.channelId;

          const i = e.duration || 0;

          const o = e.isCaller || this.isCaller;

          const s = e.target || this.target.account;

          const c = this.baseGetAccount();

          const u = o ? c : s;

          const d = o ? s : c;

          const l = +new Date();
          this.nim.protocol.onMsg({
            content: {
              msg: {
                attach: JSON.stringify({
                  data: { calltype: r, channel: n, duration: i, ids: [c, s], time: l },
                  id: t,
                }),
                from: u,
                fromClientType: o ? 16 : 0,
                fromDeviceId: '',
                fromNick: '',
                idClient: a.tool.guid(),
                idServer: a.tool.guid(),
                scene: 0,
                time: l,
                to: d,
                type: 5,
              },
            },
          });
        }),
        (l.setSessionConfig = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.tool.merge(this.sessionConfig, e);
        }),
        (l.initSignal = function() {
          return Promise.resolve();
        }),
        (l.initSession = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.sessionMode = 'p2p';
          const r = this.isCaller ? this.callerInfo : t.beCalledInfo;
          this.parseAccountUidMap(r.accountUidMap),
            !r.account && r.uid && (r.account = this.getAccountWithUid(r.uid)),
            (this.callAccepted = !0),
            (this.signalInited = !0),
            this.setSessionConfig({ signalEndTime: Date.now() }),
            this.controller.uploadDataApi('start', { uid: r.uid }),
            (this.target.uid = this.getUidWithAccount(this.target.account));
          const n = {
            type: r.type,
            account: (this.target && this.target.account) || r.account,
            channelId: r.channelId,
          };
          r.netcallType && (n.netcallType = r.netcallType),
            (this.imInfo.target = this.target),
            setTimeout(() => {
              e.emit('callAccepted', n);
            }, 1);
        }),
        (l.onBeCalled = function(e) {
          (this.signalInited = !0),
            (this.channelId = e.channelId),
            (this.beCalledInfo = e),
            this.logger.log('beCalling', e),
            this.emit('beCalling', e);
        }),
        (l.onUserJoin = function(e) {
          if (
            (this.logger.log('client on userJoined', e),
            (e.type = e.type || this.type),
            (e.account = this.getAccountWithUid(e.uid)),
            (e.mode = this.sessionMode),
            e.account !== this.baseGetAccount())
          ) {
            if (e.account)
              return (
                this.logger.log('userjoin ----\x3e from signal', e),
                void this.emit('joinChannel', e)
              );
            (this.needQueryAccountMap[e.uid] = e),
              (this.nim.queryAccountUidMap || this.nim.wbQueryAccountUidMap).call(
                this.nim,
                this.channelName,
                [e.uid]
              );
          }
        }),
        (l.onUserLeft = function(e) {
          const t = this;
          this.imInfo.channelId &&
            (this.logger.log('leave channel from signal'),
            this.imInfo.sessionMode === 'p2p'
              ? (this.controller.uploadDataApi('send'),
                setTimeout(() => {
                  t.logger.log('超时处理 onUserLeft'), t.resetWhenHangup();
                }, 1e3),
                this.emit('hangup', {
                  channelId: e.channelId || e.cid,
                  account: this.target.account,
                  type: e.type || 0,
                }))
              : this.emit('leaveChannel', {
                  channelId: e.channelId || e.cid,
                  account: this.getAccountWithUid(e.uid),
                  type: e.type || 0,
                }));
        }),
        (l.onNotifyJoin = function(e) {
          if (this.logger) {
            this.logger.log('join channel from IM');
            const t = e.accountUidMap;

            const r = this.needQueryAccountMap;
            for (const n in (this.parseAccountUidMap(t), t)) {
              const i = n;

              const o = t[n];
              if (o in r) {
                const a = r[o];
                (a.account = i),
                  delete r[o],
                  this.logger.log('userjoin ----\x3e from IM', e),
                  this.emit('joinChannel', a);
              }
            }
          }
        }),
        (l.onCalleeAck = function(e) {
          if ((this.logger.log('收到被叫的通知', e), !this.baseNotCurrentChannelId(e))) {
            const t = e.account;

            const r = this.beCalledInfo || this.callerInfo;
            (this.target.account = t),
              this.setSessionConfig({ signalEndTime: Date.now() }),
              e.accepted
                ? ((this.callAccepted = !0), this.initSession())
                : (this.logger.log('call Rejected', e),
                  this.packNetcallRecord({
                    type: e.type,
                    channelId: e.channelId,
                    isCaller: !0,
                    target: e.account,
                    recordType: 'netcallRejected',
                  }),
                  this.resetWhenHangup(),
                  this.emit('callRejected', { type: r.type, account: t }));
          }
        }),
        (l.onHangup = function(e) {
          const t = this;
          this.channelId &&
            this.sessionMode === 'p2p' &&
            (this.logger.log('on hangup from IM'),
            this.controller.uploadDataApi('send'),
            setTimeout(() => {
              t.logger.log('超时处理 onHangup'), t.resetWhenHangup();
            }, 1e3),
            this.emit('hangup', { channelId: e.channelId, account: e.account, type: 0 }));
        }),
        (l.onControl = function(e) {
          this.emit('control', e);
        }),
        (l.onCalleeAckSync = function(e) {
          this.emit('callerAckSync', e), this.baseIsCurrentChannelId(e) && this.resetWhenHangup();
        }),
        (l.baseCreateChannel = function(e) {
          const t = this;

          const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            a.tool.verifyOptions(r, 'channelName'),
            (r.custom = r.custom || ''),
            this.setSessionConfig({ signalStartTime: Date.now() }),
            this.nim[e](r)
              .then(e => {
                return Promise.resolve(e);
              })
              .catch(e => {
                return t.setSessionConfig({ signalEndTime: Date.now() }), Promise.reject(e);
              })
          );
        }),
        (l.baseJoinChannel = function(e) {
          const t = this;

          const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.nim[e](r)
            .then(e => {
              return (
                t.setSessionConfig({ signalEndTime: Date.now() }),
                (t.signalInited = !0),
                (t.sessionMode = e.sessionMode = 'meeting'),
                t.parseAccountUidMap(e.accountUidMap),
                (e.uid = t.getUidWithAccount(t.nim.account)),
                Promise.resolve(e)
              );
            })
            .catch(e => {
              return t.setSessionConfig({ signalEndTime: Date.now() }), Promise.reject(e);
            });
        }),
        (l.format = function(e) {
          return (
            e.rtcServerMap &&
              ((e.rtcServerMap = JSON.parse(e.rtcServerMap)),
              (e.rtcServerMap =
                e.rtcServerMap.webrtcarray || [e.rtcServerMap.webrtc] || e.rtcServerMap)),
            e.wbServerMap &&
              ((e.wbServerMap = JSON.parse(e.wbServerMap)),
              (e.wbServerMap =
                e.wbServerMap.webrtcarray || [e.wbServerMap.webrtc] || e.wbServerMap)),
            e
          );
        }),
        (l.resetWhenHangup = function() {}),
        (e.exports = d);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = a(r(14));

      const i = a(r(48));

      const o = r(42);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const s = r(4).info.nrtcVersion;

      const c = r(15);

      const u = (function() {
        function e() {
          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, n.default)(this, e);
          const r = t.appkey;
          (this.infos = {}), this.init(r), this.resetStatus();
        }
        return (
          (0, i.default)(e, [
            { key: 'resetStatus', value() {} },
            {
              key: 'init',
              value(e) {
                this.infos = Object.assign(this.infos, {
                  interval: 30,
                  ver: 2,
                  platform: `${d.convertPlatform(c.os.family)}-${c.os.version}`,
                  browser: `${c.name}-${c.version}`,
                  sdk_ver: s || '3.6.0',
                  uid: null,
                  appkey: e,
                  time: null,
                  data: {},
                });
              },
            },
            {
              key: 'clear',
              value() {
                this.infos.data = {};
              },
            },
            {
              key: 'start',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this.infos.appkey = e.appKey || e.appkey || this.infos.appkey),
                  (this.infos.cid = e.cid),
                  (this.infos.uid = e.uid);
              },
            },
            {
              key: 'stop',
              value() {
                this.clear();
              },
            },
            {
              key: 'update',
              value(e) {
                (this.infos.data[`stat_${Date.now()}`] = e),
                  Object.keys(this.infos.data).length === this.infos.interval && this.send();
              },
            },
            {
              key: 'send',
              value() {
                const e = this;
                Object.keys(this.infos.data).length !== 0 &&
                  ((this.infos.time = Date.now()),
                  (0, o.ajax)({
                    type: 'post',
                    url: '//statistic.live.126.net/webrtc/stat',
                    data: this.infos,
                  })
                    .then(t => {
                      e.clear();
                    })
                    .catch(e => {
                      console.log('err', e);
                    }));
              },
            },
          ]),
          e
        );
      })();
      t.default = u;
      var d = {
        convertNetwork(e) {
          return { wlan: 'wifi', lan: 'ethernet' }[e] || 'unknown';
        },
        convertPlatform(e) {
          let t = void 0;
          return (t = /Windows/i.test(e) ? 'Win' : e), (t = /OS X/i.test(t) ? 'Mac' : t);
        },
      };
      e.exports = t.default;
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(14));

      const i = r(42);
      const o = r(4).info.nrtcVersion;

      const a = r(15);

      const s = function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, n.default)(this, e);
        const r = t.appkey;
        (this.infos = {}),
          (this.userlist = []),
          (this.localVolumn = 0),
          (this.local = {}),
          (this.remote = {}),
          this.init(r),
          this.resetStatus();
      };
      t.default = s;
      const c = s.prototype;
      (c.init = function(e) {
        this.infos = Object.assign(this.infos, {
          ver: 2,
          device: -1,
          isp: -1,
          platform: `${u.convertPlatform(a.os.family)}-${a.os.version}`,
          browser: `${a.name}-${a.version}`,
          sdk_ver: o || '3.6.0',
          appkey: e,
          interval: 60,
          samples: 30,
          time: null,
          qos_algorithm: -1,
          fec_algorithm: -1,
          qos_scene: -1,
          qos_strategy: -1,
        });
      }),
        (c.resetStatus = function() {
          (this.infos = Object.assign(this.infos, {
            uid: null,
            cid: null,
            push_url: null,
            turn_ip: null,
            proxy_ip: null,
            meeting: !1,
            live: !1,
          })),
            this.clearInfoData(),
            (this.uidSsrcMap = {}),
            (this.userlist = []);
        }),
        (c.initInfoData = function(e) {
          const t = {
            uid: e,
            cid: (this.imInfo && this.imInfo.cid) || -1,
            push_url: (this.sessionConfig && this.sessionConfig.rtmpUrl) || -1,
            turn_ip: (this.imInfo && this.imInfo.turnMap) || -1,
            proxy_ip: (this.imInfo && this.imInfo.turnMap) || -1,
            meeting: /^meeting$/gi.test(this.imInfo.sessionMode),
            live: (this.sessionConfig && this.sessionConfig.liveEnable) || !1,
            p2p: !1,
            isp: -1,
            net: -1,
            connect_state: (this.imInfo && this.imInfo.code) || 200,
            signalling_time:
              ((this.sessionConfig && this.sessionConfig.signalEndTime) || 0) -
              ((this.sessionConfig && this.sessionConfig.signalStartTime) || 0),
            connect_time:
              ((this.sessionConfig && this.sessionConfig.rtcEndTime) || 0) -
              ((this.sessionConfig && this.sessionConfig.rtcStartTime) || 0),
          };
          this.infos = Object.assign(this.infos, t);
        }),
        (c.clearInfoData = function() {
          (this.localVolumn = 0),
            (this.infos = Object.assign(this.infos, {
              rx: { audio: [], video: [] },
              tx: {
                a_lost: [],
                v_lost: [],
                rtt: [],
                rtt_mdev: [],
                set_v_fps: [],
                qos_v_fps: [],
                v_fps: [],
                set_v_quality: [],
                real_v_res: [],
                real_v_kbps: [],
                real_v_kbps_n: [],
                real_a_kbps: [],
                real_a_kbps_n: [],
                set_v_kbps: [],
                qos_v_kbps: [],
                tx_bw_kbps: [],
                a_volume: [],
              },
            }));
        }),
        (c.start = function(e) {
          const t = e.info;

          const r = e.imInfo;

          const n = e.sessionConfig;

          const i = e.videoConfig;
          r &&
            ((this.infos.appkey = t.appKey || this.infos.appkey),
            (this.imInfo = r || {}),
            (this.infos.cid = this.imInfo.cid),
            (this.infos.uid = this.imInfo.uid),
            (this.sessionConfig = n || {}),
            (this.videoConfig = i || {}),
            this.clearSecond(),
            this.getTurnMap(),
            this.initInfoData(this.infos.uid));
        }),
        (c.stop = function() {
          this.statsTimer &&
            (clearInterval(this.statsTimer), (this.statsTimer = null), this.resetStatus());
        }),
        (c.clearSecond = function() {
          this.paramSecond = {
            packetsLostAudio: '',
            packetsLostAudioList: [],
            packetsSentPerSecondAudio: [],
            packetsLostVideo: '',
            packetsLostVideoList: [],
            packetsSentPerSecondVideo: [],
            googInterframeDelayMaxList: [],
            vrdolr: '',
            vrdohr: '',
          };
        }),
        (c.update = function(e, t) {
          const r = [];

          const n = [];

          const i = [];

          const o = [];
          for (const a in e)
            a.indexOf('_send_') !== -1 && a.indexOf('_audio') !== -1
              ? r.push(e[a])
              : a.indexOf('_send_') !== -1 && a.indexOf('_video') !== -1
                ? n.push(e[a])
                : a.indexOf('_recv_') !== -1 && a.indexOf('_audio') !== -1
                  ? i.push(e[a])
                  : a.indexOf('_recv_') !== -1 && a.indexOf('_video') !== -1
                    ? o.push(e[a])
                    : (this.network = e[a] && e[a].network);
          if (
            (this.paramSecond.packetsLostAudioList.length === 3 &&
              this.paramSecond.packetsLostAudioList.shift(),
            this.paramSecond.packetsLostVideoList.length === 3 &&
              this.paramSecond.packetsLostVideoList.shift(),
            this.paramSecond.packetsSentPerSecondAudio.length === 3 &&
              this.paramSecond.packetsSentPerSecondAudio.shift(),
            this.paramSecond.packetsSentPerSecondVideo.length === 3 &&
              this.paramSecond.packetsSentPerSecondVideo.shift(),
            this.paramSecond.googInterframeDelayMaxList.length === 3 &&
              this.paramSecond.googInterframeDelayMaxList.shift(),
            this.paramSecond.packetsLostAudioList.push(parseFloat((r[0] && r[0].packetsLost) || 0)),
            this.paramSecond.packetsLostVideoList.push(parseFloat((n[0] && n[0].packetsLost) || 0)),
            this.paramSecond.packetsSentPerSecondAudio.push(
              parseFloat((r[0] && r[0].packetsSentPerSecond) || 0)
            ),
            this.paramSecond.packetsSentPerSecondVideo.push(
              parseFloat((n[0] && n[0].packetsSentPerSecond) || 0)
            ),
            this.paramSecond.googInterframeDelayMaxList.push(
              parseFloat((o[0] && o[0].googInterframeDelayMax) || 0)
            ),
            t !== 1)
          ) {
            if (t === 2) {
              (this.paramSecond.packetsLostAudio =
                ((this.paramSecond.packetsLostAudioList[1] -
                  this.paramSecond.packetsLostAudioList[0]) /
                  (this.paramSecond.packetsSentPerSecondAudio[0] +
                    this.paramSecond.packetsSentPerSecondAudio[1]) /
                  2) *
                100),
                (this.paramSecond.packetsLostVideo =
                  ((this.paramSecond.packetsLostVideoList[1] -
                    this.paramSecond.packetsLostVideoList[0]) /
                    (this.paramSecond.packetsSentPerSecondVideo[0] +
                      this.paramSecond.packetsSentPerSecondVideo[1]) /
                    2) *
                  100);
              let s = 0;

              let c = 0;

              let u = 0;

              let d = 0;
              this.paramSecond.googInterframeDelayMaxList[0] > 200 &&
                this.paramSecond.googInterframeDelayMaxList[0] < 400 &&
                (s = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 200 &&
                  this.paramSecond.googInterframeDelayMaxList[1] < 400 &&
                  (c = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[0] > 400 &&
                  (u = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 400 &&
                  (d = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                (this.paramSecond.vrdolr = s + c),
                (this.paramSecond.vrdohr = u + d);
            } else if (t % 2 == 1) {
              (this.paramSecond.packetsLostAudio =
                ((this.paramSecond.packetsLostAudioList[2] -
                  this.paramSecond.packetsLostAudioList[0]) /
                  (this.paramSecond.packetsSentPerSecondAudio[1] +
                    this.paramSecond.packetsSentPerSecondAudio[2]) /
                  2) *
                  100 || 0),
                (this.paramSecond.packetsLostVideo =
                  ((this.paramSecond.packetsLostVideoList[2] -
                    this.paramSecond.packetsLostVideoList[0]) /
                    (this.paramSecond.packetsSentPerSecondVideo[1] +
                      this.paramSecond.packetsSentPerSecondVideo[2]) /
                    2) *
                    100 || 0);
              let l = 0;

              let f = 0;

              let p = 0;

              let h = 0;
              this.paramSecond.googInterframeDelayMaxList[1] > 200 &&
                this.paramSecond.googInterframeDelayMaxList[1] < 400 &&
                (l = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[2] > 200 &&
                  this.paramSecond.googInterframeDelayMaxList[2] < 400 &&
                  (f = this.paramSecond.googInterframeDelayMaxList[2] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 400 &&
                  (p = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[2] > 400 &&
                  (h = this.paramSecond.googInterframeDelayMaxList[2] / 2e3),
                (this.paramSecond.vrdolr = l + f),
                (this.paramSecond.vrdohr = p + h);
            }
            t % 2 == 0 &&
              (this.updateTxMediaInfo(r, n),
              this.updateRxMediaInfo(i, o),
              Object.keys(this.infos.rx.audio).length === this.infos.interval / 2 && this.send());
          }
        }),
        (c.updateOnce = function(e) {
          const t = e.imInfo;

          const r = e.sessionConfig;

          const n = e.rtcConnection;
          t &&
            ((this.imInfo = t || {}),
            (this.sessionConfig = r || {}),
            (this.rtcConnection = n || {}),
            (this.videoConfig = e.videoConfig || {}),
            this.getTurnMap(),
            this.initInfoData(),
            this.send());
        }),
        (c.updateLocalVolumn = function(e) {
          this.localVolumn = e;
        }),
        (c.updateRxMediaInfo = function(e, t) {
          const r = this;

          const n = { u: [], g: [], c: [], bn: [], bc: [] };

          const i = { u: [], i: [], bn: [], bc: [], r: [], f: [], vrdolr: [], vrdohr: [] };
          e.map(e => {
            n.u.push(parseFloat(e.id.split('_')[1])),
              n.g.push(-1),
              n.c.push(-1),
              n.bn.push(parseFloat((e.bitsReceivedPerSecond / 1024).toFixed(1)) || 0),
              n.bc.push(-1);
          }),
            t.map(e => {
              i.u.push(parseFloat(e.id.split('_')[1])),
                i.i.push(parseFloat(e.googInterframeDelayMax)),
                i.bn.push(parseFloat((e.bitsReceivedPerSecond / 1024).toFixed(1)) || 0),
                i.bc.push(-1),
                i.r.push(`${e.googFrameWidthReceived || 0}x${e.googFrameHeightReceived || 0}`),
                i.f.push(parseFloat(e.googFrameRateReceived)),
                i.vrdolr.push(r.paramSecond.vrdolr || -1),
                i.vrdohr.push(r.paramSecond.vrdohr || -1);
            }),
            this.infos.rx.audio.push(n),
            this.infos.rx.video.push(i);
        }),
        (c.getLocalMediaStats = function(e, t) {
          return {
            a_lost: this.paramSecond.packetsLostAudio || 0,
            v_lost: this.paramSecond.packetsLostVideo || 0,
            rtt: parseFloat((e[0] && e[0].googRtt) || 0) || 0,
            rtt_mdev: -1,
            set_v_fps: this.videoConfig.frameRate || 0,
            qos_v_fps: parseFloat((t[0] && t[0].googFrameRateInput) || 0) || 0,
            v_fps: parseFloat((t[0] && t[0].googFrameRateSent) || 0) || 0,
            set_v_quality: this.sessionConfig.videoQuality,
            real_v_res: `${(t[0] && t[0].googFrameWidthSent) || 0}x${(t[0] &&
              t[0].googFrameHeightSent) ||
              0}`,
            real_v_kbps: parseFloat((t[0] && t[0].googEncodeUsagePercent) || 0) || 0,
            real_v_kbps_n:
              parseFloat((((t[0] && t[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            real_a_kbps: -1,
            real_a_kbps_n:
              parseFloat((((e[0] && e[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            set_v_kbps: -1,
            qos_v_kbps: 0,
            tx_bw_kbps:
              parseFloat((((t[0] && t[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            a_volume: parseFloat(this.localVolumn) || 0,
          };
        }),
        (c.updateTxMediaInfo = function(e, t) {
          const r = this.getLocalMediaStats(e, t);
          for (const n in r) this.infos.tx[n].push(r[n]);
          const i = ((navigator.connection || {}).type || 'unknown').toString().toLowerCase();
          this.infos.net = u.convertNetwork(this.network || i);
        }),
        (c.getTurnMap = function() {
          if (this.imInfo) {
            const e = this.imInfo;
            e.serverMap &&
              (e.serverMap.constructor === Object
                ? (e.turnMap = e.serverMap || null)
                : (e.turnMap = JSON.parse(e.serverMap || null)),
              (e.turnMap = e.turnMap && e.turnMap.turnaddrs),
              (e.turnMap = e.turnMap && e.turnMap[0]),
              (e.turnMap = e.turnMap.constructor === Array ? e.turnMap[0] : e.turnMap),
              (e.turnMap = e.turnMap && e.turnMap.match(/\d+\.\d+.\d+\.\d+/)),
              (e.turnMap = e.turnMap[0]));
          } else console.warn('尚未连接网关，不统计');
        }),
        (c.send = function() {
          const e = this;
          this.infos.uid &&
            this.infos.cid &&
            ((this.infos.time = Date.now()),
            (this.infos.samples = this.infos.rx.audio.length),
            (0, i.ajax)({
              type: 'post',
              url: 'https://statistic.live.126.net/statistic/realtime/sdkinfo',
              data: this.infos,
            })
              .then(t => {
                e.clearInfoData();
              })
              .catch(t => {
                e.clearInfoData();
              }));
        });
      var u = {
        convertNetwork(e) {
          return { wlan: 'wifi', lan: 'ethernet' }[e] || 'unknown';
        },
        convertPlatform(e) {
          let t = void 0;
          return (t = /Windows/i.test(e) ? 'Win' : e), (t = /OS X/i.test(t) ? 'Mac' : t);
        },
      };
      e.exports = t.default;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          pipe() {
            const e = [].concat(Array.prototype.slice.call(arguments));
            return this._pipe(e.length === 1 ? e[0] : e);
          },
          _pipe() {
            const e = this;

            const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];

            const r = arguments[1];

            const n = t.shift();
            return (r && r.constructor === Promise ? r : Promise.resolve(r)).then(() => {
              return t.length === 0
                ? e._pipeLast(n, r)
                : e._pipeLast(n, r).then(r => {
                    return e._pipe(t, r);
                  });
            });
          },
          _pipeLast(e, t) {
            if (!e || (e.constructor !== Function && e.constructor !== Promise))
              return Promise.resolve(e);
            if (e.constructor === Promise) return e;
            if (e.constructor === Function) {
              const r = e(t);
              return r && r.constructor === Promise ? r : Promise.resolve(r);
            }
            return Promise.resolve(e);
          },
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(52);
      (t.default = {
        getAccount() {
          return this.baseGetAccount();
        },
        getUid() {
          return this.baseGetUid();
        },
        isCurrentChannelId() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.baseIsCurrentChannelId(e);
        },
        notCurrentChannelId() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return !this.isCurrentChannelId(e);
        },
        switchVideoToAudio() {
          const e = this;
          return (
            this.controller.uploadDataApi('update', { key: 'switch_p2p_type' }),
            this.controller
              .switchVideoToAudio()
              .then(() => {
                return (e.type = n.constantRtc.NETCALL_TYPE_AUDIO), Promise.resolve();
              })
              .catch(e => {
                return Promise.resolve(e);
              })
          );
        },
        switchAudioToVideo() {
          const e = this;
          return (
            this.controller.uploadDataApi('update', { key: 'switch_p2p_type' }),
            this.controller
              .switchAudioToVideo()
              .then(() => {
                return (e.type = n.constantRtc.NETCALL_TYPE_VIDEO), Promise.resolve();
              })
              .catch(e => {
                return Promise.resolve(e);
              })
          );
        },
        changeRoleToPlayer() {
          return this.imInfo.role === 0
            ? Promise.resolve({ role: 'player' })
            : ((this.imInfo.role = 0),
              this.controller.uploadDataApi('update', { key: 'actor' }),
              this.controller.switchRole().then(() => {
                return Promise.resolve({ role: 'player' });
              }));
        },
        changeRoleToAudience() {
          return this.imInfo.role === 1
            ? Promise.resolve({ role: 'audience' })
            : ((this.imInfo.role = 1),
              this.controller.switchRole().then(() => {
                return Promise.resolve({ role: 'audience' });
              }));
        },
        updateRtmpUrl(e) {
          return (
            this.controller.setSessionConfig({ rtmpUrl: e }),
            this.controller.updateRtmpUrl(e),
            Promise.resolve()
          );
        },
        setSessionConfig() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.controller.setSessionConfig(e);
        },
        setSessionVideoQuality(e) {
          this.controller.setSessionVideoQuality(e);
        },
        setSessionVideoFrameRate(e) {
          this.controller.setSessionVideoFrameRate(e);
        },
        setSessionAudioQuality(e) {
          this.controller.setSessionAudioQuality(e);
        },
        setCaptureVolume(e) {
          return (e = void 0 === e ? 1 : e / 255), this.controller.setCaptureVolume(e);
        },
        setPlayVolume() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            e.constructor === String && (e = +e),
            e.constructor === Number && (e = { volume: e }),
            (e.volume = void 0 === e.volume ? 1 : e.volume / 255),
            (e.volume = e.volume > 1 ? 1 : e.volume),
            this.controller.setPlayVolume(e)
          );
        },
        destroyMediaStream(e) {
          this.controller.destroyMediaStream({ uid: e, type: 'remote' });
        },
        updateRtmpHostVideo(e) {
          const t = e.account;

          let r = e.uid;
          return (
            t && (r = this.getUidWithAccount(t)),
            r
              ? this.controller.updateRtmpHostVideo(r)
              : Promise.reject('账号不在房间中，无法进行操作')
          );
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          getDevicesOfType(e) {
            return this.controller.getDevicesOfType(e).then(e => {
              return { devices: e };
            });
          },
          stopDevice(e) {
            return this.controller.stopDevice(e);
          },
          startDevice() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.controller.startDevice(e);
          },
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(42);
      (t.default = {
        startRecordMp4() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            this.controller.uploadDataApi('update', { key: 'record' }),
            this.controller.startRecordMp4(e)
          );
        },
        stopRecordMp4() {
          return this.controller.stopRecord();
        },
        startRecordAac() {
          return (
            this.controller.uploadDataApi('update', { key: 'audio_record' }),
            this.controller.startRecordAac()
          );
        },
        stopRecordAac() {
          return this.controller.stopRecord();
        },
        setVideoViewSize() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            e.cut && this.controller.uploadDataApi('update', { key: 'video_crop' }),
            this.controller.setVideoViewSize(e)
          );
        },
        setVideoViewRemoteSize() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.controller.setVideoViewRemoteSize(e);
        },
        startLocalStream(e) {
          return (
            this.controller.uploadDataApi('update', { key: 'display' }),
            (e = n.element.n2node(e)),
            this.controller.startLocalStream(e)
          );
        },
        stopLocalStream() {
          return this.controller.stopLocalStream();
        },
        startRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            (e.node = n.element.n2node(e.node)),
            e.account && (e.uid = this.getUidWithAccount(e.account)),
            this.controller.startRemoteStream(e)
          );
        },
        stopRemoteStream(e) {
          return this.controller.stopRemoteStream(e);
        },
        suspendLocalStream() {
          return this.controller.suspendLocalStream();
        },
        resumeLocalStream() {
          return this.controller.resumeLocalStream();
        },
        suspendRemoteStream(e) {
          return this.controller.suspendRemoteStream(e);
        },
        resumeRemoteStream(e) {
          return this.controller.resumeRemoteStream(e);
        },
        setAudioStart(e) {
          return this.controller.setAudioStart(e);
        },
        setAudioBlack(e) {
          return this.controller.setAudioBlack(e);
        },
        setVideoBlack(e) {
          return this.controller.setVideoBlack(e);
        },
        setVideoShow(e) {
          return this.controller.setVideoShow(e);
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(70));

      const i = r(52);

      const o = r(64);

      const a = r(153);
      (t.default = {
        stopStats() {
          this.stats && this.stats.stop(),
            this.statsNew && this.statsNew.stop(),
            this.dataRtc && this.dataRtc.stop(),
            this.dataStats && this.dataStats.stop();
        },
        initStats() {
          const e = this;
          (this.stats = new o.RtcStats({ controller: this, interval: 2e3 })),
            this.stats.on('stats', e => {}),
            (this.statsNew = new o.RtcStatsNew({ controller: this, interval: 1e3 })),
            this.statsNew.on('stats', (t, r) => {
              r % 2 == 0 && e.uploadDataRtcNew(t), e.uploadDataRtc(!1, t, r);
            }),
            (this.dataRtc = (0, a.DataRtc)({ appkey: this.info.appKey })),
            (this.dataStats = (0, a.DataStats)({ appkey: this.info.appKey }));
        },
        startStats() {
          this.statsNew.start({ controller: this }),
            this.uploadDataStatsStart(),
            this.uploadDataRtcStart();
        },
        uploadDataRtcStart() {
          this.info.appKey &&
            n.default.STATS_FUN[n.default.CURRENT.SDK_TYPE] &&
            this.dataRtc &&
            this.dataRtc.start({
              info: this.info,
              controller: this,
              imInfo: this.imInfo,
              sessionConfig: this.sessionConfig,
              videoConfig: this.imInfo.videoConfig,
            });
        },
        uploadDataRtcStop() {
          n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] && this.dataRtc && this.dataRtc.stop();
        },
        uploadDataRtcOnce(e) {
          if (n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] && this.dataRtc) {
            const t = i.constantTool.getVideoSessionConfig({
              quality: this.sessionConfig.videoQuality,
              frameRate: this.sessionConfig.videoFrameRate,
            });
            this.dataRtc.updateOnce({
              info: this.info,
              imInfo: e,
              sessionConfig: this.sessionConfig,
              videoConfig: t,
            });
          }
        },
        uploadDataRtc(e, t, r) {
          n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] &&
            this.info.appKey &&
            this.dataRtc &&
            (e !== 'volume' ? this.dataRtc.update(t, r) : this.dataRtc.updateLocalVolumn(t));
        },
        uploadDataStatsStart() {
          n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] &&
            this.dataStats &&
            this.dataStats.start({ info: this.info, cid: this.imInfo.cid, uid: this.imInfo.uid });
        },
        uploadDataRtcNewStop() {
          n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] &&
            this.dataStats &&
            this.dataStats.stop();
        },
        uploadDataRtcNew(e) {
          n.default.STATS_RTC[n.default.CURRENT.SDK_TYPE] &&
            this.dataStats &&
            this.dataStats.update(e);
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(42);

      const i = r(52);

      const o = r(64);
      let a = null;

      const s = `//${
        (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r(4)).default.roomserver
      }/v1/sdk/command/rooms/`;
      (t.default = {
        switchRole() {
          return this.rtcLogined
            ? (a || (a = o.RtcSupport.checkVersion()),
              a.prefix !== 'Firefox' || (a.prefix === 'Firefox' && a.version - 0 < 59)
                ? this.updateRtc()
                : (this.imInfo.role === 0
                    ? (this.enableDevice(i.constantRtc.DEVICE_TYPE_AUDIO_IN),
                      this.enableDevice(i.constantRtc.DEVICE_TYPE_VIDEO))
                    : (this.disableDevice(i.constantRtc.DEVICE_TYPE_AUDIO_IN),
                      this.disableDevice(i.constantRtc.DEVICE_TYPE_VIDEO)),
                  this.rtcConnected
                    ? Promise.resolve()
                    : (this.imInfo.role === 0 && this.updateRtc(), Promise.resolve())))
            : Promise.resolve();
        },
        switchVideoToAudio() {
          return this.rtcLogined
            ? (this.localVideoStream && this.disableDevice(i.constantRtc.DEVICE_TYPE_VIDEO),
              Promise.resolve())
            : Promise.reject('no connection');
        },
        switchAudioToVideo() {
          return this.rtcLogined
            ? (this.localVideoStream && this.enableDevice(i.constantRtc.DEVICE_TYPE_VIDEO),
              Promise.resolve())
            : Promise.reject('no connection');
        },
        setSessionConfig() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.sessionConfig = Object.assign(this.sessionConfig, e);
        },
        setSessionVideoQuality(e) {
          void 0 !== e && this.setSessionConfig({ videoQuality: e });
        },
        setSessionVideoFrameRate(e) {
          void 0 !== e && this.setSessionConfig({ videoFrameRate: e });
        },
        setSessionAudioQuality(e) {
          this.setSessionConfig({ highAudio: !!e });
        },
        startRecordMp4() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          let t = e.account;

          let r = e.uid;
          if (t)
            if (t === this.info.client.getAccount()) r = this.imInfo.uid;
            else if (!(r = this.info.client.getUidWithAccount(t)))
              return Promise.reject('账号不在房间中，无法进行录制');
          t = t || this.info.client.getAccount();
          const n = [];
          if (r && r - this.imInfo.uid != 0) {
            const i = this.remoteNode[r];
            if (!i) return Promise.reject('需要录制的账号不正确');
            i.remoteAudioStream && n.push(i.remoteAudioStream.stream),
              i.remoteVideoStream && n.push(i.remoteVideoStream.stream);
          } else
            this.localAudioStream && n.push(this.localAudioStream.stream),
              this.localVideoStream && n.push(this.localVideoStream.stream);
          return n.length === 0
            ? Promise.reject('当前没有音视频数据，无法进行录制')
            : this.rtcRecorder.start(n, { account: t, uid: r });
        },
        stopRecord() {
          return this.rtcRecorder.stop();
        },
        startRecordAac() {
          const e = this.info.client.getAccount();

          const t = this.imInfo.uid;

          const r = [];
          this.localAudioStream && r.push(this.localAudioStream.stream);
          const n = this.remoteNode;
          for (const i in n)
            n[i].remoteAudioStream &&
              n[i].remoteAudioStream.stream &&
              r.push(n[i].remoteAudioStream.stream);
          return this.rtcRecorder.start(r, { account: e, uid: t, type: 'audio' });
        },
        updateRtmpUrl() {
          this.sendMsg('update_bypass_url', {
            params: { content: { bypass_url: this.sessionConfig.rtmpUrl } },
          });
        },
        updateRtmpHostVideo(e) {
          if (!e) return Promise.reject('账号不在房间中，无法进行操作');
          const t = s + this.imInfo.cid;

          const r = this.imInfo.turnToken || (this.imInfo.serverMap && this.imInfo.serverMap.token);
          return r
            ? (0, n.ajax)({
                type: 'post',
                url: t,
                data: { suid: this.imInfo.uid, cid: this.imInfo.cid, uid: +e, cmd: 10001 },
                header: { Token: r },
              }).then(e => {
                if (e.code === 200) return Promise.resolve();
                let t = void 0;
                switch (e.code) {
                  case 404:
                    t = '房间不存在';
                    break;
                  case 405:
                    t = '目标用户不在房间中';
                    break;
                  case 406:
                    t = '没有权限';
                    break;
                  case 417:
                    t = '请求数据不对';
                    break;
                  case 600:
                    t = '服务器内部错误';
                    break;
                  default:
                    t = '请求参数不正确';
                }
                return Promise.reject(t);
              })
            : Promise.reject('token缺失, 请检查');
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(5));

      const i = r(64);

      const o = r(113);
      const a = r(4).info.nrtcSdkVersion;

      let s = null;
      (t.default = {
        destroyRemoteNode(e) {
          if (e) return this.destroyRemoteRtc(e), void this.destroyRemoteMediaStream(e);
          const t = this.remoteNode;
          for (const r in t) this.destroyRemoteRtc(r), this.destroyRemoteMediaStream(r);
        },
        destroyRemoteRtc(e) {
          if (e && this.remoteNode && this.remoteNode[e]) {
            const t = this.remoteNode[e];
            t.rtc && t.rtc.close();
          }
        },
        createOffer() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const r = t.isUpdate;

          const n = void 0 !== r && r;

          const i = t.rtc;

          const o = void 0 === i ? this.rtc : i;

          const a = t.chromeShare;

          const s = void 0 !== a && a;
          return o
            .createOffer()
            .then(e => {
              return o.setLocalDescription(e, n);
            })
            .then(t => {
              return (
                e.sendOffer({ chromeShare: s, offer: t, isUpdate: n, targetUid: o.targetUid }),
                Promise.resolve()
              );
            });
        },
        sendOffer() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e.targetUid === this.imInfo.uid
            ? this.sendLocalMessage(e)
            : this.sendRemoteMessage(e);
        },
        sendLocalMessage() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.offer;

          const r = e.isUpdate;

          const n = e.isLogin;

          const i = void 0 !== n && n;

          const o = e.chromeShare;

          const s = void 0 !== o && o;

          const c = this.imInfo;

          const u = this.imInfo.videoConfig;

          const d = this.sessionConfig || {};

          const l = i ? 'client_login' : r ? 'sdp_update' : 'sdp_offer';

          const f = this.mediaDevices.getDeviceStatus();

          const p = {
            session_mode: c.sessionMode || 'p2p',
            record: {
              support_video_record: d.recordVideo || !1,
              support_audio_record: d.recordAudio || !1,
              single_record_in_meeting: d.recordMeeting || !1,
            },
            bypass_rtmp: {
              is_host: !!d.rtmpUrl,
              support_bypass_rtmp: d.liveEnable || !1,
              support_bypass_rtmp_record: d.rtmpRecord || !1,
              bypass_rtmp_url: d.rtmpUrl || '',
              participant_mode: `M-${d.splitMode}`,
              layout: d.layout || '',
            },
            params: {
              version: +a,
              token: c.token || `${c.cid}`,
              user_type: c.token ? 3 : 2,
              user_token_type: 0,
              content: i ? '' : t,
              streamSetting: {
                video: {
                  width: u.width,
                  height: u.height,
                  frameRate: d.liveEnable && u.frameRate > 15 ? 15 : u.frameRate,
                },
              },
              dst_id: this.imInfo.uid,
              is_multi_peerconnection: !0,
            },
            hasAudio: !i && ((this.deviceAudioStatus && f.hasAudio && !this.imInfo.role) || !1),
            hasVideo:
              !i && ((this.deviceVideoStatus && f.hasVideo && !this.imInfo.role) || s || !1),
          };
          this.sendMsg(l, p),
            d.recordAudio && this.dataApi.update({ key: 'server_record_audio' }),
            d.recordVideo && this.dataApi.update({ key: 'server_record_video' }),
            d.recordMeeting && this.dataApi.update({ key: 'server_record_single_user' });
        },
        sendRemoteMessage() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.offer;

          const r = e.targetUid;

          const n = this.imInfo;

          const i = {
            session_mode: n.sessionMode || 'p2p',
            params: {
              token: n.token || `${n.cid}`,
              user_type: n.token ? 3 : 2,
              user_token_type: 0,
              content: t,
              version: +a,
              dst_id: r,
              is_multi_peerconnection: !0,
            },
          };
          this.sendMsg('sdp_offer', i);
        },
        sendAnswer(e, t) {
          const r = { params: { content: e, streamSetting: { video: this.imInfo.videoConfig } } };
          t && (r.params.dst_id = t), this.sendMsg('sdp_answer', r);
        },
        onsdp_answer(e) {
          this.logger.log('webrtc-controller::onSdp_answer:uid -> ', e);
          const t = e.params.auth_res - 0;

          const r = e.params.dst_id || this.imInfo.uid;
          if (t !== 200)
            return (
              this.logger.error('webrtc-controller::onSdp_answer:服务器验证不通过, 断开连接'),
              this.emit('signalClosed', { code: t, error: '服务器验证不通过, 断开连接' }),
              void this.stopSession()
            );
          const n = r - this.imInfo.uid == 0 ? this.rtc : this.remoteNode[r].rtc;
          n && n.setRemoteDescription(e.params.content, 'answer');
        },
        onice_answer(e) {
          let t = e.params.content;

          const r = e.params.dst_id || this.imInfo.uid;
          (void 0 === t ? 'undefined' : (0, n.default)(t)) !== 'object' && (t = { candidate: t });
          const i = r - this.imInfo.uid == 0 ? this.rtc : this.remoteNode[r].rtc;
          i && i.addRemoteIceCandidate(t);
        },
        monitorRemoteStream(e) {
          if (this.remoteVideoStream || this.remoteAudioStream) {
            if (!e.ssrc.remote || !e.ssrc.remote.total) return;
            if (e.ssrc.remote.total.bytesReceivedRate > 0 || !this.monitorRemoteStreamStartTime)
              this.monitorRemoteStreamStartTime = Date.now();
            else
              Date.now() - this.monitorRemoteStreamStartTime > 1e4 &&
                (this.logger.warn('webrtc-controller::monitorRemoteStream:10秒内未收到音视频数据'),
                this.emit('remoteStreamNoData'),
                (this.monitorRemoteStreamStartTime = null));
          } else this.monitorRemoteStreamStartTime = null;
        },
        onRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.uid;

          const r = e.stream;

          const n = e.track;
          if (
            ((window.myRemoteStreams = this.remoteStreams),
            (window.myRemoteNode = this.remoteNode),
            this.logger.log('webrtc-controller::onRemoteStream:get remote stream', e),
            (this.remoteStreams[t] = r),
            !t)
          )
            return this.logger.warn(
              'webrtc-controller::onRemoteStream:无法找到远程流对应的uid!!,先暂存',
              r
            );
          this.doRemoteStream(r, t, n);
        },
        composeTrack(e, t, r, n) {
          if (e !== this.imInfo.uid) {
            const i = this.remoteNode[e];

            const a = new MediaStream();

            const s = r === 'audio' ? 'remoteAudioStream' : 'remoteVideoStream';
            a.addTrack(t),
              i[s]
                ? i[s].updateStream(a)
                : (i[s] = new o.MStream({
                    uid: e,
                    stream: a,
                    type: r,
                    isRemote: !0,
                    container: i.container,
                  })),
              this.logger.log('webrtc::composeTrack ', e, r, t.id, t.readyState),
              r === 'audio' && i.isAudioEnable && i[s].show(),
              r === 'video' && this.delayVideoShow(e);
          }
        },
        delayVideoShow(e) {
          const t = this;

          const r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          setTimeout(() => {
            t._delayVideoShow(e, r);
          }, 100);
        },
        _delayVideoShow(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (e && e !== this.imInfo.uid) {
            const r = this.remoteNode[e];

            const n = r.remoteVideoStream;
            if (r && n) {
              if (
                (console.log('_delayVideoShow', e, t),
                s || (s = i.RtcSupport.checkVersion()),
                s.prefix !== 'Firefox')
              ) {
                let o = {};
                r.isVideoEnable && t && (o = this.checkRemoteTrack(e, r.rtc.sdpAnswer.sdp)),
                  (t = o.video);
              }
              const a = r.isVideoEnable && t ? 'show' : 'hide';
              n[a] && n[a](),
                a === 'show' && n.resize(r.videoSizeOptions || this.videoViewRemoteSizeOptions),
                this.logger.log(`webrtc-controller::delayVideoShow: ${e} video ${a}`);
            }
          }
        },
        switchTrackEvent() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const r = t.stream;

          const n = t.uid;

          const i = t.isOn;
          if (r && n) {
            if (!(void 0 === i || i))
              return (
                (r.onaddtrack = null),
                (r.onremovetrack = null),
                this.logger.log('webrtc-controller::remove trackevent: onaddtrack', r.id),
                void this.logger.log('webrtc-controller::remove trackevent: onremovetrack', r.id)
              );
            r.onaddtrack ||
              (this.logger.log('webrtc-controller::add trackevent onaddtrack', r.id),
              (r.onaddtrack = function(t) {
                e.emit('addtrack', t);
                const i = t.track;

                const o = i.kind;
                if (
                  (e.logger.log('webrtc-controller::on add track:', r.id, o, i.id, i.readyState),
                  e.composeTrack(n, i, o),
                  e.emit('remoteTrack', { uid: n, track: i }),
                  o === 'video')
                ) {
                  const a = e.remoteNode[n].rtc;

                  const s = a.rtcConnection && a.rtcConnection.remoteDescription.sdp;
                  e.checkRemoteTrack(n, s), e.delayVideoShow(n);
                }
              })),
              r.onremovetrack ||
                (this.logger.log('webrtc-controller::add trackevent onremovetrack', r.id),
                (r.onremovetrack = function(t) {
                  const i = t.track;

                  const o = i.kind;

                  const a = e.remoteNode[n];
                  a &&
                    (e.logger.warn(
                      'webrtc-controller::on remove track:',
                      r.id,
                      o,
                      i.id,
                      i.readyState
                    ),
                    e.emit('removetrack', t),
                    o === 'video' && a.remoteVideoStream && a.remoteVideoStream.hide());
                }));
          }
        },
        doRemoteStream(e, t, r) {
          /Firefox/gi.test(navigator.userAgent)
            ? this.doRemoteStreamFirefox(e, t, r)
            : this.doRemoteStreamChrome(e, t, r);
        },
        doRemoteStreamChrome(e, t) {
          const r = this;
          this.logger.log(
            `webrtc-controller::get ${t} stream, track num: ${e.getTracks().length}`,
            e
          ),
            e &&
              e.getTracks().forEach(e => {
                r.logger.log('   > track id:', `${e.kind}:${e.id}`, e);
              });
          const n = e.getAudioTracks()[0];

          const i = e.getVideoTracks()[0];
          n && this.composeTrack(t, n, 'audio', e),
            i && this.composeTrack(t, i, 'video', e),
            this.switchTrackEvent({ stream: e, uid: t }),
            n && this.emit('remoteTrack', { uid: t, track: n }),
            i && this.emit('remoteTrack', { uid: t, track: i });
        },
        doRemoteStreamFirefox(e, t, r) {
          const n = this.remoteNode[t];
          n &&
            n.rtc &&
            (this.logger.log(`webrtc-controller::get ${t} track: `, r && r.id, r),
            s || (s = i.RtcSupport.checkVersion()),
            r &&
              (this.composeTrack(t, r, r.kind, e), this.emit('remoteTrack', { uid: t, track: r })));
        },
        onLocalIceCandidate() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.log('webrtc-controller::onLocalIceCandidate', e);
          const t = e.uid;

          const r = e.ice;
          if (!/\d tcp \d/gi.test(r.candidate)) {
            const n = { params: { content: r, dst_id: t } };
            this.sendMsg('ice_offer', n);
          }
        },
        onNegotiationNeeded(e) {
          this.rtcConnected && this.logger.log('webrtc-controller::onNegotiationNeeded', e.target);
        },
        onIceStateChange(e) {
          const t = e.rtc;

          const r = e.state;

          const n = t.targetUid;
          if (
            (this.logger.log(`webrtc-controller::${n} ice connection state change to: ${r}`),
            r === 'connected' && n === this.imInfo.uid && this.emit('sessionConnected'),
            r === 'failed')
          ) {
            if ((this.logger.error(`webrtc-controller::${n} ice failed`), n - this.imInfo.uid == 0))
              return void this.onLocalIceFail();
            this.onRemoteFail(n);
          }
        },
        onLocalIceFail() {
          this.logger.log('ice断开 触发重连 进入signal的signalTimeout'),
            this.signal.emit('signalTimeout');
        },
        onRemoteFail(e) {
          this.emit('remoteSignalClosed', e),
            this.remoteNode.hasOwnProperty(e) &&
              (this.destroyRemoteNode(e),
              this.removeRemoteUserStream(e),
              (this.remoteNode[e] = null),
              delete this.remoteNode[e],
              this.rtcRecorder && this.rtcRecorder.leave({ uid: e }));
        },
        updateRtcStream() {
          const e = this.imInfo.role === 0 || this.imInfo.sessionMode === 'p2p';
          this.logger.log('webrtc-controller::updateRtcStream:role -> ', e ? 'player' : 'audience');
          const t = [];
          if (e) {
            const r = this.localAudioStream;

            const n = this.localVideoStream;
            r && r.stream && t.push(r.stream), n && n.stream && t.push(n.stream);
          }
          this.rtc && this.rtc.updateStream(t);
        },
        removeRemoteUserStream(e) {
          this.logger.log('webrtc-controller::removeRemoteUserStream:uid -> ', e),
            delete this.remoteNode[e];
        },
        checkRemoteTrack(e, t) {
          const r = this.remoteNode[e];
          if (!r) return {};
          const n = r.remoteAudioStream && r.remoteAudioStream.audioStream;

          const i = r.remoteVideoStream && r.remoteVideoStream.stream;
          if ((!n && !i) || !r.rtc) return {};
          const o = r.rtc.checkMediaStatus({ audio: n, video: i, sdp: t, uid: e });
          return (
            this.logger.log('webrtc-controller::checkRemoteTrack:uid -> ', e, o),
            o.video || (r.remoteVideoStream && r.remoteVideoStream.hide()),
            o
          );
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(113);

      const i = r(52);

      const o = r(64);

      let a = null;

      const s = { audio: null, video: null, screen: null, debounceTime: 500 };
      (t.default = {
        getDeviceStatus() {
          return this.mediaDevices.getDeviceStatus();
        },
        getDevicesOfType(e) {
          return this.mediaDevices.getDevicesOfType(i.constantTool.getDeviceTypeMap(e)).then(e => {
            return Promise.resolve(e[0]);
          });
        },
        onDeviceStatusChange(e) {
          this.logger.log('webrtc-controller::onDeviceStatusChange:', e),
            this.emit('deviceStatus', e);
        },
        onDeviceAdd(e) {
          this.logger.log('webrtc-controller::onDeviceAdd:', e), this.emit('deviceAdd', e);
        },
        onDeviceRemove(e) {
          const t = this;
          this.logger.log('webrtc-controller::onDeviceRemove:', e),
            this.emit('deviceRemove', e),
            (this.localVideoStream || this.localAudioStream) &&
              e.forEach(e => {
                t.localVideoStream &&
                  e.deviceId === t.localVideoStream.constraint.video.deviceId &&
                  (t.localVideoStream.destroy(),
                  (t.localVideoStream = null),
                  (t.client.devices.hasVideo = !1),
                  t.rtcLogined && t.updateRtc()),
                  t.localAudioStream &&
                    e.deviceId === t.localAudioStream.constraint.audio.deviceId &&
                    (t.localAudioStream.destroy(),
                    (t.localAudioStream = null),
                    (t.client.devices.hasAudio = !1));
              });
        },
        checkDeviceStatus(e, t) {
          return e === i.constantRtc.DEVICE_TYPE_VIDEO &&
            this.localVideoStream &&
            this.localVideoStream.constraint.video.deviceId === t.deviceId
            ? (this.enableDevice(e), Promise.reject('设备已开启，重复操作'))
            : e === i.constantRtc.DEVICE_TYPE_AUDIO_IN &&
              this.localAudioStream &&
              this.localAudioStream.audioStream &&
              this.localAudioStream.constraint.audio.deviceId === t.deviceId
              ? (this.enableDevice(e), Promise.reject('设备已开启，重复操作'))
              : Promise.resolve();
        },
        stopDevice(e) {
          const t = this;
          return new Promise((r, n) => {
            if (e === i.constantRtc.DEVICE_TYPE_VIDEO) {
              if (
                ((t.deviceVideoStatus = !1),
                a || (a = o.RtcSupport.checkVersion()),
                t.localVideoStream && a.prefix === 'Firefox' && a.version - 0 >= 59)
              )
                return t.disableDevice(e).then(r, n);
              if (t.localVideoStream)
                return (
                  t.localVideoStream.destroy(),
                  (t.localVideoStream = null),
                  t.rtcLogined && t.updateRtc(),
                  r()
                );
            } else if (e === i.constantRtc.DEVICE_TYPE_AUDIO_IN) {
              if (
                ((t.deviceAudioStatus = !1),
                t.rtcLogined && t.localAudioStream && a.prefix === 'Safari')
              )
                return t.disableDevice(e).then(r, n);
              if (t.localAudioStream) return t.localAudioStream.stopDevice(), r();
            } else
              e === i.constantRtc.DEVICE_TYPE_AUDIO_OUT_LOCAL
                ? t.localAudioStream && t.localAudioStream.setMuted(!0)
                : e === i.constantRtc.DEVICE_TYPE_AUDIO_OUT_CHAT && t.setAudioBlack();
            r();
          });
        },
        destroyDevice(e) {
          this.logger.log('webrtc-controller::destroyDevice: 销毁设备', e);
          const t =
            e === i.constantRtc.DEVICE_TYPE_AUDIO_IN ? 'localAudioStream' : 'localVideoStream';
          return this[t] && this[t].destroy(), (this[t] = null), Promise.resolve();
        },
        disableDevice(e) {
          this.logger.log('webrtc-controller::disableDevice: 暂停设备', e);
          const t =
            e === i.constantRtc.DEVICE_TYPE_AUDIO_IN ? 'localAudioStream' : 'localVideoStream';
          return (
            ((this[t] && this[t].stream && this[t].stream.getTracks()) || []).forEach(e => {
              e.enabled = !1;
            }),
            Promise.resolve()
          );
        },
        enableDevice(e) {
          this.logger.log('webrtc-controller::disableDevice: 恢复设备', e);
          const t =
            e === i.constantRtc.DEVICE_TYPE_AUDIO_IN ? 'localAudioStream' : 'localVideoStream';
          return (
            ((this[t] && this[t].stream && this[t].stream.getTracks()) || []).forEach(e => {
              e.enabled = !0;
            }),
            Promise.resolve()
          );
        },
        startDevice(e) {
          const t = this;
          return new Promise((r, n) => {
            const o = e.type;

            let a = e.device;

            const s = e.account;

            const c = e.uid;
            if (
              (o === i.constantRtc.DEVICE_TYPE_VIDEO && (t.deviceVideoStatus = !0),
              o === i.constantRtc.DEVICE_TYPE_AUDIO_IN && (t.deviceAudioStatus = !0),
              o === i.constantRtc.DEVICE_TYPE_AUDIO_OUT_LOCAL)
            )
              return t.setAudioStart({ uid: -1 }), r();
            if (o === i.constantRtc.DEVICE_TYPE_AUDIO_OUT_CHAT)
              return t.setAudioStart({ account: s, uid: c }), r();
            let u = Promise.resolve();
            o !== i.constantRtc.DEVICE_TYPE_DESKTOP_SCREEN &&
              o !== i.constantRtc.DEVICE_TYPE_DESKTOP_WINDOW &&
              o !== i.constantRtc.DEVICE_TYPE_DESKTOP_CHROME_SCREEN &&
              ((a && a.deviceId) || (u = t.getDevicesOfType(o))),
              u
                .then(e => {
                  return (
                    (a = a || (e && e[0])),
                    t
                      .checkDeviceStatus(o, a)
                      .then(() => {
                        return o === i.constantRtc.DEVICE_TYPE_VIDEO
                          ? t.getStream('Video', a, r, n)
                          : o === i.constantRtc.DEVICE_TYPE_AUDIO_IN
                            ? t.getStream('Audio', a, r, n)
                            : o === i.constantRtc.DEVICE_TYPE_DESKTOP_CHROME_SCREEN
                              ? ((t.deviceAudioStatus = !0),
                                (t.deviceVideoStatus = !0),
                                t.getStream('ChromeScreen', o, r, n))
                              : o === i.constantRtc.DEVICE_TYPE_DESKTOP_SCREEN ||
                                o === i.constantRtc.DEVICE_TYPE_DESKTOP_WINDOW
                                ? ((t.deviceAudioStatus = !0),
                                  (t.deviceVideoStatus = !0),
                                  t.getStream('Screen', o, r, n))
                                : void 0;
                      })
                      .catch(e => {
                        /重复操作/.test(e) ? r() : n(e);
                      })
                  );
                })
                .then(e => {
                  r(e);
                })
                .catch(e => {
                  n(e);
                });
          });
        },
        getStream(e, t, r, n) {
          const i = `_get${e}Stream`;
          return (
            s[e] &&
              s[e].lockerTimer &&
              (this.logger.log(`webrtc-controller::destroy ${i} timer`),
              clearTimeout(s[e].lockerTimer)),
            this.logger.log(`webrtc-controller::create ${i} timer`),
            (s[e] = {}),
            this[i](t, r, n)
          );
        },
        _getVideoStream(e, t, r) {
          const s = this;

          const c = {};
          if (
            (a || (a = o.RtcSupport.checkVersion()),
            this.localVideoStream && a.prefix === 'Firefox' && a.version - 0 >= 59)
          )
            return this.enableDevice(i.constantRtc.DEVICE_TYPE_VIDEO).then(t, r);
          let u = { deviceId: {} };
          u.deviceId.exact = e.deviceId;
          const d = i.constantTool.getVideoSessionConfig({
            quality: this.sessionConfig.videoQuality,
            frameRate: this.sessionConfig.videoFrameRate,
          });
          return (
            (u = Object.assign(u, d)),
            (c.video = u),
            this.logger.log('webrtc-controller::_getVideoStream:', c),
            n.MStream.getLocalStream(c)
              .then(r => {
                s.localVideoStream && (s.localVideoStream.destroy(), (s.localVideoStream = null)),
                  (s.localVideoStream = r),
                  s.rtcLogined && s.updateRtc(),
                  t({ device: e, stream: r });
              })
              .catch(e => {
                r(e);
              })
          );
        },
        _getAudioStream(e, t, r) {
          const i = this;
          a || (a = o.RtcSupport.checkVersion());
          const s = {};
          if (a.prefix === 'Safari' && this.localAudioStream)
            return this.enableDevice('audio').then(t);
          if (this.localAudioStream && this.localAudioStream.audioStream)
            return this.enableDevice('audio').then(t);
          const c = e && e.deviceId;
          return (
            (s.audio = !c || { deviceId: c }),
            this.logger.log('webrtc-controller::_getAudioStream:', s),
            n.MStream.getLocalStream(s)
              .then(r => {
                i._initAudioStream(s, r), t({ device: e, stream: r });
              })
              .catch(e => {
                r(e);
              })
          );
        },
        _initAudioStream(e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new MediaStream();
          this.localAudioStream
            ? this.localAudioStream.updateStream(t)
            : ((this.localAudioStream = new n.MStream({
                stream: t,
                type: 'audio',
                isRemote: !1,
                constraint: e,
              })),
              this.rtcLogined && this.updateRtc());
        },
        _getScreenStream(e, t, r) {
          const o = this;
          if ((this.dataApi.update({ key: 'screen_sharing_module' }), this.localVideoStream))
            return this.enableDevice('video').then(t, r);
          const a = {
            audio: !1,
            video: {
              mediaSource: (e =
                e === i.constantRtc.DEVICE_TYPE_DESKTOP_SCREEN ? 'screen' : 'window'),
            },
          };
          return (
            this.logger.log('webrtc-controller::_getScreenStream:', a),
            n.MStream.getLocalStream(a)
              .then(e => {
                console.error('object', e), (o.localVideoStream = e), o.rtcLogined && o.updateRtc();
              })
              .catch(r)
          );
        },
        _getChromeScreenStream(e, t, r) {
          const i = this;

          const o = this.info.chromeId;
          if (o) {
            const a = { sources: ['window', 'screen', 'tab'] };

            const s = this;
            return new Promise((e, t) => {
              chrome.runtime.sendMessage(o, a, {}, r => {
                if (
                  (i.localVideoStream &&
                    (i.localVideoStream.destroy(), (i.localVideoStream = null)),
                  console.log('chrome 屏幕共享', r),
                  r && r.type === 'success')
                ) {
                  const o = {
                    video: {
                      mandatory: {
                        maxWidth: 1920,
                        maxHeight: 1080,
                        maxFrameRate: 10,
                        minFrameRate: 3,
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: r.streamId,
                      },
                    },
                  };
                  return (
                    console.log('webrtc-controller::_getScreenStream:', o),
                    n.MStream.getLocalStream(o)
                      .then(t => {
                        (s.localVideoStream = t),
                          s.rtcLogined && s.updateRtc({ chromeShare: !0 }),
                          e();
                      })
                      .catch(t)
                  );
                }
                r
                  ? (i.localVideoStream &&
                      (i.localVideoStream.destroy(), (i.localVideoStream = null)),
                    console.error('获取流失败'),
                    t({ code: 20, msg: '获取流失败' }))
                  : (i.localVideoStream &&
                      (i.localVideoStream.destroy(), (i.localVideoStream = null)),
                    console.error('未安装插件'),
                    t({ code: 404, msg: '未安装插件' }));
              });
            });
          }
          console.error('chrome屏幕共享id未设置');
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(113);

      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(70));
      (t.default = {
        destroyMediaStream() {
          const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { type: 'all' };
          if (
            (e.type !== 'local' && e.type !== 'all') ||
            (this.destroyLocalMediaStream(), e.type !== 'local')
          )
            if (e.type !== 'remote') {
              for (const t in this.remoteNode) this.destroyRemoteMediaStream(t);
              this.remoteNode = {};
            } else this.destroyRemoteMediaStream(e.uid);
        },
        destroyLocalMediaStream() {
          this.localAudioStream &&
            (this.localAudioStream.destroy(), (this.localAudioStream = null)),
            this.localVideoStream &&
              (this.localVideoStream.destroy(), (this.localVideoStream = null));
        },
        destroyRemoteMediaStream(e) {
          if (e && this.remoteNode && this.remoteNode[e]) {
            const t = this.remoteNode[e];
            t.remoteVideoStream && t.remoteVideoStream.destroy(),
              t.remoteAudioStream && t.remoteAudioStream.destroy(),
              (t.remoteVideoStream = null),
              (t.remoteAudioStream = null),
              (this.remoteNode[e] = null);
            const r = this.remoteStreams[e];
            this.switchTrackEvent({ stream: r, uid: e, isOn: !1 }), n.MStream.destroyMedia(r);
          }
        },
        setCaptureVolume(e) {
          (void 0 === e || e > 1) && (e = 1),
            this.localAudioStream && this.localAudioStream.setGain(e);
        },
        setPlayVolume() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            (e.option = { volume: e.volume }),
            this.localAudioStream && this.localAudioStream.setPlayVolume(e.volume),
            this.optionRemoteStream('setPlayVolume', e)
          );
        },
        setAudioStart(e) {
          const t = e.account;

          const r = e.uid;
          if ((console.log('setAudioStart', r), r !== -1))
            return this.optionRemoteStream('setMuted', {
              account: t,
              uid: r,
              isAudio: !0,
              option: !1,
            });
          this.localAudioStream &&
            (this.localAudioStream.show(), this.localAudioStream.setMuted(!1));
        },
        setAudioBlack(e) {
          return (
            (e && e.account) ||
              (e && e.uid) ||
              this.dataApi.update({ key: 'set_all_user_audio_mute' }),
            this.optionRemoteStream('setMuted', { account: e, isAudio: !0, option: !0 })
          );
        },
        setVideoBlack(e) {
          return this.optionRemoteStream('hide', e);
        },
        setVideoShow(e) {
          return this.optionRemoteStream('show', e);
        },
        setVideoViewSize() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.videoViewSizeOptions = e),
            this.localVideoStream && this.localVideoStream.resize(this.videoViewSizeOptions);
        },
        setVideoViewRemoteSize() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (e.option = e), this.optionRemoteStream('resize', e);
        },
        startLocalStream(e) {
          const t = this;
          if (this.localVideoStream) {
            if (
              ((this.localVideoStream.container = e || this.info.container),
              !this.localVideoStream.container)
            )
              return (
                this.logger.error(
                  'webrtc-controller::startLocalStream:开启本地视频流失败 -> video容器节点缺失'
                ),
                Promise.reject('开启本地视频流失败: video容器节点缺失')
              );
            this.localVideoStream.resize(this.videoViewSizeOptions),
              this.localVideoStream.show(),
              this.localVideoStream.on('resize', e => {
                t.emit('streamResize', e);
              }),
              this.localVideoStream.on('error', e => {
                t.emit('error', e);
              }),
              this.localVideoStream.isShown() || this.updateRtcStream();
          }
        },
        stopLocalStream() {
          this.localVideoStream && this.localVideoStream.hide();
        },
        startRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          let t = e.uid;

          let r = e.node;

          const n = e.poster;

          let i = void 0;
          if (
            this.imInfo.sessionMode === 'p2p' &&
            !t &&
            ((t = this.info.client.target.uid), !this.info.remoteContainer && !r)
          )
            return Promise.reject(
              'startRemoteStream失败：点对点模式实例化Netcall必须设置remoteContainer与target；或者参数必须包含account，node'
            );
          if (((i = this.remoteNode[t]), t && !i))
            return (
              console.error(this.remoteNode, '未收到对应账号的音视频流信息，无法播放', t, i),
              Promise.reject('未收到对应账号的音视频流信息，无法播放')
            );
          if (((r = r || this.info.remoteContainer), i))
            return (
              (i.container = (e && r) || i.container),
              i.container
                ? (s(i), Promise.resolve(i.remoteVideoStream.node))
                : Promise.reject(`${t} 开启显示远端视频画面失败: 请传递video容器`)
            );
          const o = this.remoteNode;
          for (const a in o) {
            if (((o[a].container = (e && r) || o[a].container), !o[a].container))
              return Promise.reject(`${t} 开启显示远端视频画面失败: 请传递video容器`);
            s(o[a]);
          }
          return Promise.resolve();
          function s(t) {
            (t.container = (e && r) || t.container),
              (t.isVideoEnable = !0),
              t.remoteVideoStream &&
                (t.remoteVideoStream.resize(t.videoSizeOptions),
                t.remoteVideoStream.show(t.container, n));
          }
        },
        stopRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.optionRemoteStream('hide', e);
        },
        suspendLocalStream() {
          return this.localVideoStream
            ? (this.localVideoStream.pause(), Promise.resolve())
            : Promise.reject('本地没有音视频流，无法进行操作');
        },
        resumeLocalStream() {
          return this.localVideoStream
            ? (this.localVideoStream.resume(), Promise.resolve())
            : Promise.reject('本地没有音视频流，无法进行操作');
        },
        suspendRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.optionRemoteStream('pause', e);
        },
        resumeRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.optionRemoteStream('resume', e);
        },
        optionRemoteStream(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.constructor === String && (t = { account: t }), (t.fn = e);
          const r = t.account;
          return (
            r &&
              r.constructor === Object &&
              (t = Object.assign(t, r)).account.constructor === Object &&
              delete t.account,
            t.uid ||
              i.default.CURRENT.SDK_TYPE !== i.default.SDK_TYPE.NRTC ||
              ((t.uid = t.account), delete t.account),
            this.doOptionRemoteStream(t)
          );
        },
        doOptionRemoteStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.fn;

          let r = e.uid;

          const n = e.account;

          let i = e.isAudio;

          const o = e.option;

          let a = void 0;
          if (
            ((i = i || /(setPlayVolume|setGain)/.test(t)),
            this.imInfo.sessionMode !== 'p2p' || r || (r = this.info.client.target.uid),
            !r && n && !(r = this.info.client.getUidWithAccount(n)))
          )
            return Promise.reject('目标账号不正确或者未在当前会话中');
          if (r) return (a = this.remoteNode[r]) && c(a), Promise.resolve();
          for (const s in (a = this.remoteNode)) a[s] && c(a[s]);
          return Promise.resolve();
          function c(e) {
            if (i)
              return (
                e.remoteAudioStream && e.remoteAudioStream[t] && e.remoteAudioStream[t](o),
                void (e.isAudioEnable = !0)
              );
            t === 'resize' && (e.videoSizeOptions = o || this.videoViewRemoteSizeOptions),
              e.remoteVideoStream && e.remoteVideoStream[t] && e.remoteVideoStream[t](o),
              (e.isVideoEnable = t !== 'hide');
          }
        },
        addStream(e) {
          e && this.localAudioStream;
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(155);

      const i = r(63);
      e.exports = {
        shimRTCIceCandidate(e) {
          if (!(e.RTCIceCandidate && 'foundation' in e.RTCIceCandidate.prototype)) {
            const t = e.RTCIceCandidate;
            (e.RTCIceCandidate = function(e) {
              typeof e === 'object' &&
                e.candidate &&
                e.candidate.indexOf('a=') === 0 &&
                ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2));
              const r = new t(e);

              const i = n.parseCandidate(e.candidate);

              const o = Object.assign(r, i);
              return (
                (o.toJSON = function() {
                  return {
                    candidate: o.candidate,
                    sdpMid: o.sdpMid,
                    sdpMLineIndex: o.sdpMLineIndex,
                    usernameFragment: o.usernameFragment,
                  };
                }),
                o
              );
            }),
              (function(e, t, r) {
                if (e.RTCPeerConnection) {
                  const n = e.RTCPeerConnection.prototype;

                  const i = n.addEventListener;
                  n.addEventListener = function(e, n) {
                    if (e !== t) return i.apply(this, arguments);
                    const o = function(e) {
                      n(r(e));
                    };
                    return (
                      (this._eventMap = this._eventMap || {}),
                      (this._eventMap[n] = o),
                      i.apply(this, [e, o])
                    );
                  };
                  const o = n.removeEventListener;
                  (n.removeEventListener = function(e, r) {
                    if (e !== t || !this._eventMap || !this._eventMap[r])
                      return o.apply(this, arguments);
                    const n = this._eventMap[r];
                    return delete this._eventMap[r], o.apply(this, [e, n]);
                  }),
                    Object.defineProperty(n, `on${t}`, {
                      get() {
                        return this[`_on${t}`];
                      },
                      set(e) {
                        this[`_on${t}`] &&
                          (this.removeEventListener(t, this[`_on${t}`]), delete this[`_on${t}`]),
                          e && this.addEventListener(t, (this[`_on${t}`] = e));
                      },
                    });
                }
              })(e, 'icecandidate', t => {
                return (
                  t.candidate &&
                    Object.defineProperty(t, 'candidate', {
                      value: new e.RTCIceCandidate(t.candidate),
                      writable: 'false',
                    }),
                  t
                );
              });
          }
        },
        shimCreateObjectURL(e) {
          const t = e && e.URL;
          if (
            typeof e === 'object' &&
            e.HTMLMediaElement &&
            'srcObject' in e.HTMLMediaElement.prototype &&
            t.createObjectURL &&
            t.revokeObjectURL
          ) {
            const r = t.createObjectURL.bind(t);

            const n = t.revokeObjectURL.bind(t);

            const o = new Map();

            let a = 0;
            (t.createObjectURL = function(e) {
              if ('getTracks' in e) {
                const t = `polyblob:${++a}`;
                return (
                  o.set(t, e),
                  i.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream'),
                  t
                );
              }
              return r(e);
            }),
              (t.revokeObjectURL = function(e) {
                n(e), o.delete(e);
              });
            const s = Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype, 'src');
            Object.defineProperty(e.HTMLMediaElement.prototype, 'src', {
              get() {
                return s.get.apply(this);
              },
              set(e) {
                return (this.srcObject = o.get(e) || null), s.set.apply(this, [e]);
              },
            });
            const c = e.HTMLMediaElement.prototype.setAttribute;
            e.HTMLMediaElement.prototype.setAttribute = function() {
              return (
                arguments.length === 2 &&
                  `${arguments[0]}`.toLowerCase() === 'src' &&
                  (this.srcObject = o.get(arguments[1]) || null),
                c.apply(this, arguments)
              );
            };
          }
        },
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = {
        shimLocalStreamsAPI(e) {
          if (typeof e === 'object' && e.RTCPeerConnection) {
            if (
              ('getLocalStreams' in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                  return this._localStreams || (this._localStreams = []), this._localStreams;
                }),
              'getStreamById' in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.getStreamById = function(e) {
                  let t = null;
                  return (
                    this._localStreams &&
                      this._localStreams.forEach(r => {
                        r.id === e && (t = r);
                      }),
                    this._remoteStreams &&
                      this._remoteStreams.forEach(r => {
                        r.id === e && (t = r);
                      }),
                    t
                  );
                }),
              !('addStream' in e.RTCPeerConnection.prototype))
            ) {
              const t = e.RTCPeerConnection.prototype.addTrack;
              (e.RTCPeerConnection.prototype.addStream = function(e) {
                this._localStreams || (this._localStreams = []),
                  this._localStreams.indexOf(e) === -1 && this._localStreams.push(e);
                const r = this;
                e.getTracks().forEach(n => {
                  t.call(r, n, e);
                });
              }),
                (e.RTCPeerConnection.prototype.addTrack = function(e, r) {
                  return (
                    r &&
                      (this._localStreams
                        ? this._localStreams.indexOf(r) === -1 && this._localStreams.push(r)
                        : (this._localStreams = [r])),
                    t.call(this, e, r)
                  );
                });
            }
            'removeStream' in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.removeStream = function(e) {
                this._localStreams || (this._localStreams = []);
                const t = this._localStreams.indexOf(e);
                if (t !== -1) {
                  this._localStreams.splice(t, 1);
                  const r = this;

                  const n = e.getTracks();
                  this.getSenders().forEach(e => {
                    n.indexOf(e.track) !== -1 && r.removeTrack(e);
                  });
                }
              });
          }
        },
        shimRemoteStreamsAPI(e) {
          typeof e === 'object' &&
            e.RTCPeerConnection &&
            ('getRemoteStreams' in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : [];
              }),
            'onaddstream' in e.RTCPeerConnection.prototype ||
              Object.defineProperty(e.RTCPeerConnection.prototype, 'onaddstream', {
                get() {
                  return this._onaddstream;
                },
                set(e) {
                  this._onaddstream &&
                    (this.removeEventListener('addstream', this._onaddstream),
                    this.removeEventListener('track', this._onaddstreampoly)),
                    this.addEventListener('addstream', (this._onaddstream = e)),
                    this.addEventListener(
                      'track',
                      (this._onaddstreampoly = function(e) {
                        const t = e.streams[0];
                        if (
                          (this._remoteStreams || (this._remoteStreams = []),
                          !(this._remoteStreams.indexOf(t) >= 0))
                        ) {
                          this._remoteStreams.push(t);
                          const r = new Event('addstream');
                          (r.stream = e.streams[0]), this.dispatchEvent(r);
                        }
                      }.bind(this))
                    );
                },
              }));
        },
        shimCallbacksAPI(e) {
          if (typeof e === 'object' && e.RTCPeerConnection) {
            const t = e.RTCPeerConnection.prototype;

            const r = t.createOffer;

            const n = t.createAnswer;

            const i = t.setLocalDescription;

            const o = t.setRemoteDescription;

            const a = t.addIceCandidate;
            (t.createOffer = function(e, t) {
              const n = arguments.length >= 2 ? arguments[2] : arguments[0];

              const i = r.apply(this, [n]);
              return t ? (i.then(e, t), Promise.resolve()) : i;
            }),
              (t.createAnswer = function(e, t) {
                const r = arguments.length >= 2 ? arguments[2] : arguments[0];

                const i = n.apply(this, [r]);
                return t ? (i.then(e, t), Promise.resolve()) : i;
              });
            let s = function(e, t, r) {
              const n = i.apply(this, [e]);
              return r ? (n.then(t, r), Promise.resolve()) : n;
            };
            (t.setLocalDescription = s),
              (s = function(e, t, r) {
                const n = o.apply(this, [e]);
                return r ? (n.then(t, r), Promise.resolve()) : n;
              }),
              (t.setRemoteDescription = s),
              (s = function(e, t, r) {
                const n = a.apply(this, [e]);
                return r ? (n.then(t, r), Promise.resolve()) : n;
              }),
              (t.addIceCandidate = s);
          }
        },
        shimGetUserMedia(e) {
          const t = e && e.navigator;
          t.getUserMedia ||
            (t.webkitGetUserMedia
              ? (t.getUserMedia = t.webkitGetUserMedia.bind(t))
              : t.mediaDevices &&
                t.mediaDevices.getUserMedia &&
                (t.getUserMedia = function(e, r, n) {
                  t.mediaDevices.getUserMedia(e).then(r, n);
                }));
        },
        shimRTCIceServerUrls(e) {
          const t = e.RTCPeerConnection;
          (e.RTCPeerConnection = function(e, r) {
            if (e && e.iceServers) {
              for (var i = [], o = 0; o < e.iceServers.length; o++) {
                let a = e.iceServers[o];
                !a.hasOwnProperty('urls') && a.hasOwnProperty('url')
                  ? (n.deprecated('RTCIceServer.url', 'RTCIceServer.urls'),
                    ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                    delete a.url,
                    i.push(a))
                  : i.push(e.iceServers[o]);
              }
              e.iceServers = i;
            }
            return new t(e, r);
          }),
            (e.RTCPeerConnection.prototype = t.prototype),
            'generateCertificate' in e.RTCPeerConnection &&
              Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
                get() {
                  return t.generateCertificate;
                },
              });
        },
        shimTrackEventTransceiver(e) {
          typeof e === 'object' &&
            e.RTCPeerConnection &&
            'receiver' in e.RTCTrackEvent.prototype &&
            !e.RTCTransceiver &&
            Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
              get() {
                return { receiver: this.receiver };
              },
            });
        },
        shimCreateOfferLegacy(e) {
          const t = e.RTCPeerConnection.prototype.createOffer;
          e.RTCPeerConnection.prototype.createOffer = function(e) {
            const r = this;
            if (e) {
              const n = r.getTransceivers().find(e => {
                return e.sender.track && e.sender.track.kind === 'audio';
              });
              !1 === e.offerToReceiveAudio && n
                ? n.direction === 'sendrecv'
                  ? n.setDirection('sendonly')
                  : n.direction === 'recvonly' && n.setDirection('inactive')
                : !0 !== e.offerToReceiveAudio || n || r.addTransceiver('audio');
              const i = r.getTransceivers().find(e => {
                return e.sender.track && e.sender.track.kind === 'video';
              });
              !1 === e.offerToReceiveVideo && i
                ? i.direction === 'sendrecv'
                  ? i.setDirection('sendonly')
                  : i.direction === 'recvonly' && i.setDirection('inactive')
                : !0 !== e.offerToReceiveVideo || i || r.addTransceiver('video');
            }
            return t.apply(r, arguments);
          };
        },
      };
      e.exports = {
        shimCallbacksAPI: i.shimCallbacksAPI,
        shimLocalStreamsAPI: i.shimLocalStreamsAPI,
        shimRemoteStreamsAPI: i.shimRemoteStreamsAPI,
        shimGetUserMedia: i.shimGetUserMedia,
        shimRTCIceServerUrls: i.shimRTCIceServerUrls,
        shimTrackEventTransceiver: i.shimTrackEventTransceiver,
        shimCreateOfferLegacy: i.shimCreateOfferLegacy,
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = n.log;
      e.exports = function(e) {
        const t = n.detectBrowser(e);

        const r = e && e.navigator;

        const o = e && e.MediaStreamTrack;

        const a = function(e) {
          return {
            name:
              {
                InternalError: 'NotReadableError',
                NotSupportedError: 'TypeError',
                PermissionDeniedError: 'NotAllowedError',
                SecurityError: 'NotAllowedError',
              }[e.name] || e.name,
            message:
              {
                'The operation is insecure.':
                  'The request is not allowed by the user agent or the platform in the current context.',
              }[e.message] || e.message,
            constraint: e.constraint,
            toString() {
              return this.name + (this.message && ': ') + this.message;
            },
          };
        };

        const s = function(e, n, o) {
          const s = function(e) {
            if (typeof e !== 'object' || e.require) return e;
            const t = [];
            return (
              Object.keys(e).forEach(r => {
                if (r !== 'require' && r !== 'advanced' && r !== 'mediaSource') {
                  const n = (e[r] = typeof e[r] === 'object' ? e[r] : { ideal: e[r] });
                  if (
                    ((void 0 === n.min && void 0 === n.max && void 0 === n.exact) || t.push(r),
                    void 0 !== n.exact &&
                      (typeof n.exact === 'number' ? (n.min = n.max = n.exact) : (e[r] = n.exact),
                      delete n.exact),
                    void 0 !== n.ideal)
                  ) {
                    e.advanced = e.advanced || [];
                    const i = {};
                    typeof n.ideal === 'number'
                      ? (i[r] = { min: n.ideal, max: n.ideal })
                      : (i[r] = n.ideal),
                      e.advanced.push(i),
                      delete n.ideal,
                      Object.keys(n).length || delete e[r];
                  }
                }
              }),
              t.length && (e.require = t),
              e
            );
          };
          return (
            (e = JSON.parse(JSON.stringify(e))),
            t.version < 38 &&
              (i(`spec: ${JSON.stringify(e)}`),
              e.audio && (e.audio = s(e.audio)),
              e.video && (e.video = s(e.video)),
              i(`ff37: ${JSON.stringify(e)}`)),
            r.mozGetUserMedia(e, n, e => {
              o(a(e));
            })
          );
        };
        if (
          (r.mediaDevices ||
            (r.mediaDevices = {
              getUserMedia(e) {
                return new Promise((t, r) => {
                  s(e, t, r);
                });
              },
              addEventListener() {},
              removeEventListener() {},
            }),
          (r.mediaDevices.enumerateDevices =
            r.mediaDevices.enumerateDevices ||
            function() {
              return new Promise(e => {
                e([
                  { kind: 'audioinput', deviceId: 'default', label: '', groupId: '' },
                  { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' },
                ]);
              });
            }),
          t.version < 41)
        ) {
          const c = r.mediaDevices.enumerateDevices.bind(r.mediaDevices);
          r.mediaDevices.enumerateDevices = function() {
            return c().then(void 0, e => {
              if (e.name === 'NotFoundError') return [];
              throw e;
            });
          };
        }
        if (t.version < 49) {
          const u = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
          r.mediaDevices.getUserMedia = function(e) {
            return u(e).then(
              t => {
                if (
                  (e.audio && !t.getAudioTracks().length) ||
                  (e.video && !t.getVideoTracks().length)
                )
                  throw (t.getTracks().forEach(e => {
                    e.stop();
                  }),
                  new DOMException('The object can not be found here.', 'NotFoundError'));
                return t;
              },
              e => {
                return Promise.reject(a(e));
              }
            );
          };
        }
        if (!(t.version > 55 && 'autoGainControl' in r.mediaDevices.getSupportedConstraints())) {
          const d = function(e, t, r) {
            t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
          };

          const l = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
          if (
            ((r.mediaDevices.getUserMedia = function(e) {
              return (
                typeof e === 'object' &&
                  typeof e.audio === 'object' &&
                  ((e = JSON.parse(JSON.stringify(e))),
                  d(e.audio, 'autoGainControl', 'mozAutoGainControl'),
                  d(e.audio, 'noiseSuppression', 'mozNoiseSuppression')),
                l(e)
              );
            }),
            o && o.prototype.getSettings)
          ) {
            const f = o.prototype.getSettings;
            o.prototype.getSettings = function() {
              const e = f.apply(this, arguments);
              return (
                d(e, 'mozAutoGainControl', 'autoGainControl'),
                d(e, 'mozNoiseSuppression', 'noiseSuppression'),
                e
              );
            };
          }
          if (o && o.prototype.applyConstraints) {
            const p = o.prototype.applyConstraints;
            o.prototype.applyConstraints = function(e) {
              return (
                this.kind === 'audio' &&
                  typeof e === 'object' &&
                  ((e = JSON.parse(JSON.stringify(e))),
                  d(e, 'autoGainControl', 'mozAutoGainControl'),
                  d(e, 'noiseSuppression', 'mozNoiseSuppression')),
                p.apply(this, [e])
              );
            };
          }
        }
        r.getUserMedia = function(e, i, o) {
          if (t.version < 44) return s(e, i, o);
          n.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'),
            r.mediaDevices.getUserMedia(e).then(i, o);
        };
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = {
        shimOnTrack(e) {
          typeof e !== 'object' ||
            !e.RTCPeerConnection ||
            'ontrack' in e.RTCPeerConnection.prototype ||
            Object.defineProperty(e.RTCPeerConnection.prototype, 'ontrack', {
              get() {
                return this._ontrack;
              },
              set(e) {
                this._ontrack &&
                  (this.removeEventListener('track', this._ontrack),
                  this.removeEventListener('addstream', this._ontrackpoly)),
                  this.addEventListener('track', (this._ontrack = e)),
                  this.addEventListener(
                    'addstream',
                    (this._ontrackpoly = function(e) {
                      e.stream.getTracks().forEach(t => {
                        const r = new Event('track');
                        (r.track = t),
                          (r.receiver = { track: t }),
                          (r.transceiver = { receiver: r.receiver }),
                          (r.streams = [e.stream]),
                          this.dispatchEvent(r);
                      });
                    }.bind(this))
                  );
              },
            }),
            typeof e === 'object' &&
              e.RTCTrackEvent &&
              'receiver' in e.RTCTrackEvent.prototype &&
              !('transceiver' in e.RTCTrackEvent.prototype) &&
              Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
                get() {
                  return { receiver: this.receiver };
                },
              });
        },
        shimSourceObject(e) {
          typeof e === 'object' &&
            (!e.HTMLMediaElement ||
              'srcObject' in e.HTMLMediaElement.prototype ||
              Object.defineProperty(e.HTMLMediaElement.prototype, 'srcObject', {
                get() {
                  return this.mozSrcObject;
                },
                set(e) {
                  this.mozSrcObject = e;
                },
              }));
        },
        shimPeerConnection(e) {
          const t = n.detectBrowser(e);
          if (typeof e === 'object' && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
            e.RTCPeerConnection ||
              ((e.RTCPeerConnection = function(r, n) {
                if (t.version < 38 && r && r.iceServers) {
                  for (var i = [], o = 0; o < r.iceServers.length; o++) {
                    const a = r.iceServers[o];
                    if (a.hasOwnProperty('urls'))
                      for (let s = 0; s < a.urls.length; s++) {
                        const c = { url: a.urls[s] };
                        a.urls[s].indexOf('turn') === 0 &&
                          ((c.username = a.username), (c.credential = a.credential)),
                          i.push(c);
                      }
                    else i.push(r.iceServers[o]);
                  }
                  r.iceServers = i;
                }
                return new e.mozRTCPeerConnection(r, n);
              }),
              (e.RTCPeerConnection.prototype = e.mozRTCPeerConnection.prototype),
              e.mozRTCPeerConnection.generateCertificate &&
                Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
                  get() {
                    return e.mozRTCPeerConnection.generateCertificate;
                  },
                }),
              (e.RTCSessionDescription = e.mozRTCSessionDescription),
              (e.RTCIceCandidate = e.mozRTCIceCandidate)),
              ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(t => {
                const r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function() {
                  return (
                    (arguments[0] = new (t === 'addIceCandidate'
                      ? e.RTCIceCandidate
                      : e.RTCSessionDescription)(arguments[0])),
                    r.apply(this, arguments)
                  );
                };
              });
            const r = e.RTCPeerConnection.prototype.addIceCandidate;
            e.RTCPeerConnection.prototype.addIceCandidate = function() {
              return arguments[0]
                ? r.apply(this, arguments)
                : (arguments[1] && arguments[1].apply(null), Promise.resolve());
            };
            const i = {
              inboundrtp: 'inbound-rtp',
              outboundrtp: 'outbound-rtp',
              candidatepair: 'candidate-pair',
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate',
            };

            const o = e.RTCPeerConnection.prototype.getStats;
            e.RTCPeerConnection.prototype.getStats = function(e, r, n) {
              return o
                .apply(this, [e || null])
                .then(e => {
                  if (
                    (t.version < 48 &&
                      (e = (function(e) {
                        const t = new Map();
                        return (
                          Object.keys(e).forEach(r => {
                            t.set(r, e[r]), (t[r] = e[r]);
                          }),
                          t
                        );
                      })(e)),
                    t.version < 53 && !r)
                  )
                    try {
                      e.forEach(e => {
                        e.type = i[e.type] || e.type;
                      });
                    } catch (t) {
                      if (t.name !== 'TypeError') throw t;
                      e.forEach((t, r) => {
                        e.set(r, Object.assign({}, t, { type: i[t.type] || t.type }));
                      });
                    }
                  return e;
                })
                .then(r, n);
            };
          }
        },
        shimRemoveStream(e) {
          !e.RTCPeerConnection ||
            'removeStream' in e.RTCPeerConnection.prototype ||
            (e.RTCPeerConnection.prototype.removeStream = function(e) {
              const t = this;
              n.deprecated('removeStream', 'removeTrack'),
                this.getSenders().forEach(r => {
                  r.track && e.getTracks().indexOf(r.track) !== -1 && t.removeTrack(r);
                });
            });
        },
      };
      e.exports = {
        shimOnTrack: i.shimOnTrack,
        shimSourceObject: i.shimSourceObject,
        shimPeerConnection: i.shimPeerConnection,
        shimRemoveStream: i.shimRemoveStream,
        shimGetUserMedia: r(221),
      };
    },
    function(e, t, r) {
      e.exports = function(e) {
        const t = e && e.navigator;

        const r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(e) {
          return r(e).catch(e => {
            return Promise.reject(
              (function(e) {
                return {
                  name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
                  message: e.message,
                  constraint: e.constraint,
                  toString() {
                    return this.name;
                  },
                };
              })(e)
            );
          });
        };
      };
    },
    function(e, t, r) {
      const n = r(155);
      function i(e, t, r, i, o) {
        let a = n.writeRtpDescription(e.kind, t);
        if (
          ((a += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
          (a += n.writeDtlsParameters(
            e.dtlsTransport.getLocalParameters(),
            r === 'offer' ? 'actpass' : o || 'active'
          )),
          (a += `a=mid:${e.mid}\r\n`),
          e.rtpSender && e.rtpReceiver
            ? (a += 'a=sendrecv\r\n')
            : e.rtpSender
              ? (a += 'a=sendonly\r\n')
              : e.rtpReceiver
                ? (a += 'a=recvonly\r\n')
                : (a += 'a=inactive\r\n'),
          e.rtpSender)
        ) {
          const s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
          e.rtpSender._initialTrackId = s;
          const c = `msid:${i ? i.id : '-'} ${s}\r\n`;
          (a += `a=${c}`),
            (a += `a=ssrc:${e.sendEncodingParameters[0].ssrc} ${c}`),
            e.sendEncodingParameters[0].rtx &&
              ((a += `a=ssrc:${e.sendEncodingParameters[0].rtx.ssrc} ${c}`),
              (a += `a=ssrc-group:FID ${e.sendEncodingParameters[0].ssrc} ${
                e.sendEncodingParameters[0].rtx.ssrc
              }\r\n`));
        }
        return (
          (a += `a=ssrc:${e.sendEncodingParameters[0].ssrc} cname:${n.localCName}\r\n`),
          e.rtpSender &&
            e.sendEncodingParameters[0].rtx &&
            (a += `a=ssrc:${e.sendEncodingParameters[0].rtx.ssrc} cname:${n.localCName}\r\n`),
          a
        );
      }
      function o(e, t) {
        const r = { codecs: [], headerExtensions: [], fecMechanisms: [] };

        const n = function(e, t) {
          e = parseInt(e, 10);
          for (let r = 0; r < t.length; r++)
            if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r];
        };

        const i = function(e, t, r, i) {
          const o = n(e.parameters.apt, r);

          const a = n(t.parameters.apt, i);
          return o && a && o.name.toLowerCase() === a.name.toLowerCase();
        };
        return (
          e.codecs.forEach(n => {
            for (let o = 0; o < t.codecs.length; o++) {
              let a = t.codecs[o];
              if (n.name.toLowerCase() === a.name.toLowerCase() && n.clockRate === a.clockRate) {
                if (
                  n.name.toLowerCase() === 'rtx' &&
                  n.parameters &&
                  a.parameters.apt &&
                  !i(n, a, e.codecs, t.codecs)
                )
                  continue;
                ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(
                  n.numChannels,
                  a.numChannels
                )),
                  r.codecs.push(a),
                  (a.rtcpFeedback = a.rtcpFeedback.filter(e => {
                    for (let t = 0; t < n.rtcpFeedback.length; t++)
                      if (
                        n.rtcpFeedback[t].type === e.type &&
                        n.rtcpFeedback[t].parameter === e.parameter
                      )
                        return !0;
                    return !1;
                  }));
                break;
              }
            }
          }),
          e.headerExtensions.forEach(e => {
            for (let n = 0; n < t.headerExtensions.length; n++) {
              const i = t.headerExtensions[n];
              if (e.uri === i.uri) {
                r.headerExtensions.push(i);
                break;
              }
            }
          }),
          r
        );
      }
      function a(e, t, r) {
        return (
          {
            offer: {
              setLocalDescription: ['stable', 'have-local-offer'],
              setRemoteDescription: ['stable', 'have-remote-offer'],
            },
            answer: {
              setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
              setRemoteDescription: ['have-local-offer', 'have-remote-pranswer'],
            },
          }[t][e].indexOf(r) !== -1
        );
      }
      function s(e, t) {
        const r = e.getRemoteCandidates().find(e => {
          return (
            t.foundation === e.foundation &&
            t.ip === e.ip &&
            t.port === e.port &&
            t.priority === e.priority &&
            t.protocol === e.protocol &&
            t.type === e.type
          );
        });
        return r || e.addRemoteCandidate(t), !r;
      }
      function c(e, t) {
        const r = new Error(t);
        return (
          (r.name = e),
          (r.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0,
          }[e]),
          r
        );
      }
      e.exports = function(e, t) {
        function r(t, r) {
          r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent('addtrack', { track: t }));
        }
        function u(t, r, n, i) {
          const o = new Event('track');
          (o.track = r),
            (o.receiver = n),
            (o.transceiver = { receiver: n }),
            (o.streams = i),
            e.setTimeout(() => {
              t._dispatchEvent('track', o);
            });
        }
        const d = function(r) {
          const i = this;

          const o = document.createDocumentFragment();
          if (
            (['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(e => {
              i[e] = o[e].bind(o);
            }),
            (this.canTrickleIceCandidates = null),
            (this.needNegotiation = !1),
            (this.localStreams = []),
            (this.remoteStreams = []),
            (this._localDescription = null),
            (this._remoteDescription = null),
            (this.signalingState = 'stable'),
            (this.iceConnectionState = 'new'),
            (this.connectionState = 'new'),
            (this.iceGatheringState = 'new'),
            (r = JSON.parse(JSON.stringify(r || {}))),
            (this.usingBundle = r.bundlePolicy === 'max-bundle'),
            r.rtcpMuxPolicy === 'negotiate')
          )
            throw c('NotSupportedError', "rtcpMuxPolicy 'negotiate' is not supported");
          switch ((r.rtcpMuxPolicy || (r.rtcpMuxPolicy = 'require'), r.iceTransportPolicy)) {
            case 'all':
            case 'relay':
              break;
            default:
              r.iceTransportPolicy = 'all';
          }
          switch (r.bundlePolicy) {
            case 'balanced':
            case 'max-compat':
            case 'max-bundle':
              break;
            default:
              r.bundlePolicy = 'balanced';
          }
          if (
            ((r.iceServers = (function(e, t) {
              let r = !1;
              return (e = JSON.parse(JSON.stringify(e))).filter(e => {
                if (e && (e.urls || e.url)) {
                  let n = e.urls || e.url;
                  e.url &&
                    !e.urls &&
                    console.warn('RTCIceServer.url is deprecated! Use urls instead.');
                  const i = typeof n === 'string';
                  return (
                    i && (n = [n]),
                    (n = n.filter(e => {
                      return e.indexOf('turn:') !== 0 ||
                        e.indexOf('transport=udp') === -1 ||
                        e.indexOf('turn:[') !== -1 ||
                        r
                        ? e.indexOf('stun:') === 0 &&
                            t >= 14393 &&
                            e.indexOf('?transport=udp') === -1
                        : ((r = !0), !0);
                    })),
                    delete e.url,
                    (e.urls = i ? n[0] : n),
                    !!n.length
                  );
                }
              });
            })(r.iceServers || [], t)),
            (this._iceGatherers = []),
            r.iceCandidatePoolSize)
          )
            for (let a = r.iceCandidatePoolSize; a > 0; a--)
              this._iceGatherers.push(
                new e.RTCIceGatherer({
                  iceServers: r.iceServers,
                  gatherPolicy: r.iceTransportPolicy,
                })
              );
          else r.iceCandidatePoolSize = 0;
          (this._config = r),
            (this.transceivers = []),
            (this._sdpSessionId = n.generateSessionId()),
            (this._sdpSessionVersion = 0),
            (this._dtlsRole = void 0),
            (this._isClosed = !1);
        };
        Object.defineProperty(d.prototype, 'localDescription', {
          configurable: !0,
          get() {
            return this._localDescription;
          },
        }),
          Object.defineProperty(d.prototype, 'remoteDescription', {
            configurable: !0,
            get() {
              return this._remoteDescription;
            },
          }),
          (d.prototype.onicecandidate = null),
          (d.prototype.onaddstream = null),
          (d.prototype.ontrack = null),
          (d.prototype.onremovestream = null),
          (d.prototype.onsignalingstatechange = null),
          (d.prototype.oniceconnectionstatechange = null),
          (d.prototype.onconnectionstatechange = null),
          (d.prototype.onicegatheringstatechange = null),
          (d.prototype.onnegotiationneeded = null),
          (d.prototype.ondatachannel = null),
          (d.prototype._dispatchEvent = function(e, t) {
            this._isClosed ||
              (this.dispatchEvent(t), typeof this[`on${e}`] === 'function' && this[`on${e}`](t));
          }),
          (d.prototype._emitGatheringStateChange = function() {
            const e = new Event('icegatheringstatechange');
            this._dispatchEvent('icegatheringstatechange', e);
          }),
          (d.prototype.getConfiguration = function() {
            return this._config;
          }),
          (d.prototype.getLocalStreams = function() {
            return this.localStreams;
          }),
          (d.prototype.getRemoteStreams = function() {
            return this.remoteStreams;
          }),
          (d.prototype._createTransceiver = function(e, t) {
            const r = this.transceivers.length > 0;

            const n = {
              track: null,
              iceGatherer: null,
              iceTransport: null,
              dtlsTransport: null,
              localCapabilities: null,
              remoteCapabilities: null,
              rtpSender: null,
              rtpReceiver: null,
              kind: e,
              mid: null,
              sendEncodingParameters: null,
              recvEncodingParameters: null,
              stream: null,
              associatedRemoteMediaStreams: [],
              wantReceive: !0,
            };
            if (this.usingBundle && r)
              (n.iceTransport = this.transceivers[0].iceTransport),
                (n.dtlsTransport = this.transceivers[0].dtlsTransport);
            else {
              const i = this._createIceAndDtlsTransports();
              (n.iceTransport = i.iceTransport), (n.dtlsTransport = i.dtlsTransport);
            }
            return t || this.transceivers.push(n), n;
          }),
          (d.prototype.addTrack = function(t, r) {
            if (this._isClosed)
              throw c(
                'InvalidStateError',
                'Attempted to call addTrack on a closed peerconnection.'
              );
            let n;
            if (
              this.transceivers.find(e => {
                return e.track === t;
              })
            )
              throw c('InvalidAccessError', 'Track already exists.');
            for (let i = 0; i < this.transceivers.length; i++)
              this.transceivers[i].track ||
                this.transceivers[i].kind !== t.kind ||
                (n = this.transceivers[i]);
            return (
              n || (n = this._createTransceiver(t.kind)),
              this._maybeFireNegotiationNeeded(),
              this.localStreams.indexOf(r) === -1 && this.localStreams.push(r),
              (n.track = t),
              (n.stream = r),
              (n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport)),
              n.rtpSender
            );
          }),
          (d.prototype.addStream = function(e) {
            const r = this;
            if (t >= 15025)
              e.getTracks().forEach(t => {
                r.addTrack(t, e);
              });
            else {
              const n = e.clone();
              e.getTracks().forEach((e, t) => {
                const r = n.getTracks()[t];
                e.addEventListener('enabled', e => {
                  r.enabled = e.enabled;
                });
              }),
                n.getTracks().forEach(e => {
                  r.addTrack(e, n);
                });
            }
          }),
          (d.prototype.removeTrack = function(t) {
            if (this._isClosed)
              throw c(
                'InvalidStateError',
                'Attempted to call removeTrack on a closed peerconnection.'
              );
            if (!(t instanceof e.RTCRtpSender))
              throw new TypeError(
                'Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.'
              );
            const r = this.transceivers.find(e => {
              return e.rtpSender === t;
            });
            if (!r) throw c('InvalidAccessError', 'Sender was not created by this connection.');
            const n = r.stream;
            r.rtpSender.stop(),
              (r.rtpSender = null),
              (r.track = null),
              (r.stream = null),
              this.transceivers
                .map(e => {
                  return e.stream;
                })
                .indexOf(n) === -1 &&
                this.localStreams.indexOf(n) > -1 &&
                this.localStreams.splice(this.localStreams.indexOf(n), 1),
              this._maybeFireNegotiationNeeded();
          }),
          (d.prototype.removeStream = function(e) {
            const t = this;
            e.getTracks().forEach(e => {
              const r = t.getSenders().find(t => {
                return t.track === e;
              });
              r && t.removeTrack(r);
            });
          }),
          (d.prototype.getSenders = function() {
            return this.transceivers
              .filter(e => {
                return !!e.rtpSender;
              })
              .map(e => {
                return e.rtpSender;
              });
          }),
          (d.prototype.getReceivers = function() {
            return this.transceivers
              .filter(e => {
                return !!e.rtpReceiver;
              })
              .map(e => {
                return e.rtpReceiver;
              });
          }),
          (d.prototype._createIceGatherer = function(t, r) {
            const n = this;
            if (r && t > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            const i = new e.RTCIceGatherer({
              iceServers: this._config.iceServers,
              gatherPolicy: this._config.iceTransportPolicy,
            });
            return (
              Object.defineProperty(i, 'state', { value: 'new', writable: !0 }),
              (this.transceivers[t].bufferedCandidateEvents = []),
              (this.transceivers[t].bufferCandidates = function(e) {
                const r = !e.candidate || Object.keys(e.candidate).length === 0;
                (i.state = r ? 'completed' : 'gathering'),
                  n.transceivers[t].bufferedCandidateEvents !== null &&
                    n.transceivers[t].bufferedCandidateEvents.push(e);
              }),
              i.addEventListener('localcandidate', this.transceivers[t].bufferCandidates),
              i
            );
          }),
          (d.prototype._gather = function(t, r) {
            const i = this;

            const o = this.transceivers[r].iceGatherer;
            if (!o.onlocalcandidate) {
              const a = this.transceivers[r].bufferedCandidateEvents;
              (this.transceivers[r].bufferedCandidateEvents = null),
                o.removeEventListener('localcandidate', this.transceivers[r].bufferCandidates),
                (o.onlocalcandidate = function(e) {
                  if (!(i.usingBundle && r > 0)) {
                    const a = new Event('icecandidate');
                    a.candidate = { sdpMid: t, sdpMLineIndex: r };
                    const s = e.candidate;

                    const c = !s || Object.keys(s).length === 0;
                    if (c)
                      (o.state !== 'new' && o.state !== 'gathering') || (o.state = 'completed');
                    else {
                      o.state === 'new' && (o.state = 'gathering'),
                        (s.component = 1),
                        (s.ufrag = o.getLocalParameters().usernameFragment);
                      const u = n.writeCandidate(s);
                      (a.candidate = Object.assign(a.candidate, n.parseCandidate(u))),
                        (a.candidate.candidate = u),
                        (a.candidate.toJSON = function() {
                          return {
                            candidate: a.candidate.candidate,
                            sdpMid: a.candidate.sdpMid,
                            sdpMLineIndex: a.candidate.sdpMLineIndex,
                            usernameFragment: a.candidate.usernameFragment,
                          };
                        });
                    }
                    const d = n.getMediaSections(i._localDescription.sdp);
                    (d[a.candidate.sdpMLineIndex] += c
                      ? 'a=end-of-candidates\r\n'
                      : `a=${a.candidate.candidate}\r\n`),
                      (i._localDescription.sdp =
                        n.getDescription(i._localDescription.sdp) + d.join(''));
                    const l = i.transceivers.every(e => {
                      return e.iceGatherer && e.iceGatherer.state === 'completed';
                    });
                    i.iceGatheringState !== 'gathering' &&
                      ((i.iceGatheringState = 'gathering'), i._emitGatheringStateChange()),
                      c || i._dispatchEvent('icecandidate', a),
                      l &&
                        (i._dispatchEvent('icecandidate', new Event('icecandidate')),
                        (i.iceGatheringState = 'complete'),
                        i._emitGatheringStateChange());
                  }
                }),
                e.setTimeout(() => {
                  a.forEach(e => {
                    o.onlocalcandidate(e);
                  });
                }, 0);
            }
          }),
          (d.prototype._createIceAndDtlsTransports = function() {
            const t = this;

            const r = new e.RTCIceTransport(null);
            r.onicestatechange = function() {
              t._updateIceConnectionState(), t._updateConnectionState();
            };
            const n = new e.RTCDtlsTransport(r);
            return (
              (n.ondtlsstatechange = function() {
                t._updateConnectionState();
              }),
              (n.onerror = function() {
                Object.defineProperty(n, 'state', { value: 'failed', writable: !0 }),
                  t._updateConnectionState();
              }),
              { iceTransport: r, dtlsTransport: n }
            );
          }),
          (d.prototype._disposeIceAndDtlsTransports = function(e) {
            const t = this.transceivers[e].iceGatherer;
            t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
            const r = this.transceivers[e].iceTransport;
            r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
            const n = this.transceivers[e].dtlsTransport;
            n &&
              (delete n.ondtlsstatechange,
              delete n.onerror,
              delete this.transceivers[e].dtlsTransport);
          }),
          (d.prototype._transceive = function(e, r, i) {
            const a = o(e.localCapabilities, e.remoteCapabilities);
            r &&
              e.rtpSender &&
              ((a.encodings = e.sendEncodingParameters),
              (a.rtcp = { cname: n.localCName, compound: e.rtcpParameters.compound }),
              e.recvEncodingParameters.length && (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
              e.rtpSender.send(a)),
              i &&
                e.rtpReceiver &&
                a.codecs.length > 0 &&
                (e.kind === 'video' &&
                  e.recvEncodingParameters &&
                  t < 15019 &&
                  e.recvEncodingParameters.forEach(e => {
                    delete e.rtx;
                  }),
                e.recvEncodingParameters.length
                  ? (a.encodings = e.recvEncodingParameters)
                  : (a.encodings = [{}]),
                (a.rtcp = { compound: e.rtcpParameters.compound }),
                e.rtcpParameters.cname && (a.rtcp.cname = e.rtcpParameters.cname),
                e.sendEncodingParameters.length && (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
                e.rtpReceiver.receive(a));
          }),
          (d.prototype.setLocalDescription = function(e) {
            let t;

            let r;

            const i = this;
            if (['offer', 'answer'].indexOf(e.type) === -1)
              return Promise.reject(c('TypeError', `Unsupported type "${e.type}"`));
            if (!a('setLocalDescription', e.type, i.signalingState) || i._isClosed)
              return Promise.reject(
                c('InvalidStateError', `Can not set local ${e.type} in state ${i.signalingState}`)
              );
            if (e.type === 'offer')
              (t = n.splitSections(e.sdp)),
                (r = t.shift()),
                t.forEach((e, t) => {
                  const r = n.parseRtpParameters(e);
                  i.transceivers[t].localCapabilities = r;
                }),
                i.transceivers.forEach((e, t) => {
                  i._gather(e.mid, t);
                });
            else if (e.type === 'answer') {
              (t = n.splitSections(i._remoteDescription.sdp)), (r = t.shift());
              const s = n.matchPrefix(r, 'a=ice-lite').length > 0;
              t.forEach((e, t) => {
                const a = i.transceivers[t];

                const c = a.iceGatherer;

                const u = a.iceTransport;

                const d = a.dtlsTransport;

                const l = a.localCapabilities;

                const f = a.remoteCapabilities;
                if (
                  !(n.isRejected(e) && n.matchPrefix(e, 'a=bundle-only').length === 0) &&
                  !a.rejected
                ) {
                  const p = n.getIceParameters(e, r);

                  const h = n.getDtlsParameters(e, r);
                  s && (h.role = 'server'),
                    (i.usingBundle && t !== 0) ||
                      (i._gather(a.mid, t),
                      u.state === 'new' && u.start(c, p, s ? 'controlling' : 'controlled'),
                      d.state === 'new' && d.start(h));
                  const m = o(l, f);
                  i._transceive(a, m.codecs.length > 0, !1);
                }
              });
            }
            return (
              (i._localDescription = { type: e.type, sdp: e.sdp }),
              e.type === 'offer'
                ? i._updateSignalingState('have-local-offer')
                : i._updateSignalingState('stable'),
              Promise.resolve()
            );
          }),
          (d.prototype.setRemoteDescription = function(i) {
            const o = this;
            if (['offer', 'answer'].indexOf(i.type) === -1)
              return Promise.reject(c('TypeError', `Unsupported type "${i.type}"`));
            if (!a('setRemoteDescription', i.type, o.signalingState) || o._isClosed)
              return Promise.reject(
                c('InvalidStateError', `Can not set remote ${i.type} in state ${o.signalingState}`)
              );
            const d = {};
            o.remoteStreams.forEach(e => {
              d[e.id] = e;
            });
            const l = [];

            const f = n.splitSections(i.sdp);

            const p = f.shift();

            const h = n.matchPrefix(p, 'a=ice-lite').length > 0;

            const m = n.matchPrefix(p, 'a=group:BUNDLE ').length > 0;
            o.usingBundle = m;
            const v = n.matchPrefix(p, 'a=ice-options:')[0];
            return (
              (o.canTrickleIceCandidates =
                !!v &&
                v
                  .substr(14)
                  .split(' ')
                  .indexOf('trickle') >= 0),
              f.forEach((a, c) => {
                const u = n.splitLines(a);

                const f = n.getKind(a);

                const v = n.isRejected(a) && n.matchPrefix(a, 'a=bundle-only').length === 0;

                const g = u[0].substr(2).split(' ')[2];

                const y = n.getDirection(a, p);

                const S = n.parseMsid(a);

                const b = n.getMid(a) || n.generateIdentifier();
                if (v || (f === 'application' && (g === 'DTLS/SCTP' || g === 'UDP/DTLS/SCTP')))
                  o.transceivers[c] = { mid: b, kind: f, protocol: g, rejected: !0 };
                else {
                  let _;
                  let C;
                  let T;
                  let R;
                  let w;
                  let k;
                  let E;
                  let P;
                  let O;
                  !v &&
                    o.transceivers[c] &&
                    o.transceivers[c].rejected &&
                    (o.transceivers[c] = o._createTransceiver(f, !0));
                  let I;

                  let x;

                  const M = n.parseRtpParameters(a);
                  v ||
                    ((I = n.getIceParameters(a, p)),
                    ((x = n.getDtlsParameters(a, p)).role = 'client')),
                    (E = n.parseRtpEncodingParameters(a));
                  const A = n.parseRtcpParameters(a);

                  const D = n.matchPrefix(a, 'a=end-of-candidates', p).length > 0;

                  const L = n
                    .matchPrefix(a, 'a=candidate:')
                    .map(e => {
                      return n.parseCandidate(e);
                    })
                    .filter(e => {
                      return e.component === 1;
                    });
                  if (
                    ((i.type === 'offer' || i.type === 'answer') &&
                      !v &&
                      m &&
                      c > 0 &&
                      o.transceivers[c] &&
                      (o._disposeIceAndDtlsTransports(c),
                      (o.transceivers[c].iceGatherer = o.transceivers[0].iceGatherer),
                      (o.transceivers[c].iceTransport = o.transceivers[0].iceTransport),
                      (o.transceivers[c].dtlsTransport = o.transceivers[0].dtlsTransport),
                      o.transceivers[c].rtpSender &&
                        o.transceivers[c].rtpSender.setTransport(o.transceivers[0].dtlsTransport),
                      o.transceivers[c].rtpReceiver &&
                        o.transceivers[c].rtpReceiver.setTransport(
                          o.transceivers[0].dtlsTransport
                        )),
                    i.type !== 'offer' || v)
                  )
                    i.type !== 'answer' ||
                      v ||
                      ((C = (_ = o.transceivers[c]).iceGatherer),
                      (T = _.iceTransport),
                      (R = _.dtlsTransport),
                      (w = _.rtpReceiver),
                      (k = _.sendEncodingParameters),
                      (P = _.localCapabilities),
                      (o.transceivers[c].recvEncodingParameters = E),
                      (o.transceivers[c].remoteCapabilities = M),
                      (o.transceivers[c].rtcpParameters = A),
                      L.length &&
                        T.state === 'new' &&
                        ((!h && !D) || (m && c !== 0)
                          ? L.forEach(e => {
                              s(_.iceTransport, e);
                            })
                          : T.setRemoteCandidates(L)),
                      (m && c !== 0) ||
                        (T.state === 'new' && T.start(C, I, 'controlling'),
                        R.state === 'new' && R.start(x)),
                      o._transceive(
                        _,
                        y === 'sendrecv' || y === 'recvonly',
                        y === 'sendrecv' || y === 'sendonly'
                      ),
                      !w || (y !== 'sendrecv' && y !== 'sendonly')
                        ? delete _.rtpReceiver
                        : ((O = w.track),
                          S
                            ? (d[S.stream] || (d[S.stream] = new e.MediaStream()),
                              r(O, d[S.stream]),
                              l.push([O, w, d[S.stream]]))
                            : (d.default || (d.default = new e.MediaStream()),
                              r(O, d.default),
                              l.push([O, w, d.default]))));
                  else {
                    ((_ = o.transceivers[c] || o._createTransceiver(f)).mid = b),
                      _.iceGatherer || (_.iceGatherer = o._createIceGatherer(c, m)),
                      L.length &&
                        _.iceTransport.state === 'new' &&
                        (!D || (m && c !== 0)
                          ? L.forEach(e => {
                              s(_.iceTransport, e);
                            })
                          : _.iceTransport.setRemoteCandidates(L)),
                      (P = e.RTCRtpReceiver.getCapabilities(f)),
                      t < 15019 &&
                        (P.codecs = P.codecs.filter(e => {
                          return e.name !== 'rtx';
                        })),
                      (k = _.sendEncodingParameters || [{ ssrc: 1001 * (2 * c + 2) }]);
                    let j;

                    let N = !1;
                    if (y === 'sendrecv' || y === 'sendonly') {
                      if (
                        ((N = !_.rtpReceiver),
                        (w = _.rtpReceiver || new e.RTCRtpReceiver(_.dtlsTransport, f)),
                        N)
                      )
                        (O = w.track),
                          (S && S.stream === '-') ||
                            (S
                              ? (d[S.stream] ||
                                  ((d[S.stream] = new e.MediaStream()),
                                  Object.defineProperty(d[S.stream], 'id', {
                                    get() {
                                      return S.stream;
                                    },
                                  })),
                                Object.defineProperty(O, 'id', {
                                  get() {
                                    return S.track;
                                  },
                                }),
                                (j = d[S.stream]))
                              : (d.default || (d.default = new e.MediaStream()), (j = d.default))),
                          j && (r(O, j), _.associatedRemoteMediaStreams.push(j)),
                          l.push([O, w, j]);
                    } else
                      _.rtpReceiver &&
                        _.rtpReceiver.track &&
                        (_.associatedRemoteMediaStreams.forEach(t => {
                          const r = t.getTracks().find(e => {
                            return e.id === _.rtpReceiver.track.id;
                          });
                          r &&
                            (function(t, r) {
                              r.removeTrack(t),
                                r.dispatchEvent(
                                  new e.MediaStreamTrackEvent('removetrack', { track: t })
                                );
                            })(r, t);
                        }),
                        (_.associatedRemoteMediaStreams = []));
                    (_.localCapabilities = P),
                      (_.remoteCapabilities = M),
                      (_.rtpReceiver = w),
                      (_.rtcpParameters = A),
                      (_.sendEncodingParameters = k),
                      (_.recvEncodingParameters = E),
                      o._transceive(o.transceivers[c], !1, N);
                  }
                }
              }),
              void 0 === o._dtlsRole && (o._dtlsRole = i.type === 'offer' ? 'active' : 'passive'),
              (o._remoteDescription = { type: i.type, sdp: i.sdp }),
              i.type === 'offer'
                ? o._updateSignalingState('have-remote-offer')
                : o._updateSignalingState('stable'),
              Object.keys(d).forEach(t => {
                const r = d[t];
                if (r.getTracks().length) {
                  if (o.remoteStreams.indexOf(r) === -1) {
                    o.remoteStreams.push(r);
                    const n = new Event('addstream');
                    (n.stream = r),
                      e.setTimeout(() => {
                        o._dispatchEvent('addstream', n);
                      });
                  }
                  l.forEach(e => {
                    const t = e[0];

                    const n = e[1];
                    r.id === e[2].id && u(o, t, n, [r]);
                  });
                }
              }),
              l.forEach(e => {
                e[2] || u(o, e[0], e[1], []);
              }),
              e.setTimeout(() => {
                o &&
                  o.transceivers &&
                  o.transceivers.forEach(e => {
                    e.iceTransport &&
                      e.iceTransport.state === 'new' &&
                      e.iceTransport.getRemoteCandidates().length > 0 &&
                      (console.warn(
                        'Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification'
                      ),
                      e.iceTransport.addRemoteCandidate({}));
                  });
              }, 4e3),
              Promise.resolve()
            );
          }),
          (d.prototype.close = function() {
            this.transceivers.forEach(e => {
              e.iceTransport && e.iceTransport.stop(),
                e.dtlsTransport && e.dtlsTransport.stop(),
                e.rtpSender && e.rtpSender.stop(),
                e.rtpReceiver && e.rtpReceiver.stop();
            }),
              (this._isClosed = !0),
              this._updateSignalingState('closed');
          }),
          (d.prototype._updateSignalingState = function(e) {
            this.signalingState = e;
            const t = new Event('signalingstatechange');
            this._dispatchEvent('signalingstatechange', t);
          }),
          (d.prototype._maybeFireNegotiationNeeded = function() {
            const t = this;
            this.signalingState === 'stable' &&
              !0 !== this.needNegotiation &&
              ((this.needNegotiation = !0),
              e.setTimeout(() => {
                if (t.needNegotiation) {
                  t.needNegotiation = !1;
                  const e = new Event('negotiationneeded');
                  t._dispatchEvent('negotiationneeded', e);
                }
              }, 0));
          }),
          (d.prototype._updateIceConnectionState = function() {
            let e;

            const t = {
              new: 0,
              closed: 0,
              checking: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0,
            };
            if (
              (this.transceivers.forEach(e => {
                t[e.iceTransport.state]++;
              }),
              (e = 'new'),
              t.failed > 0
                ? (e = 'failed')
                : t.checking > 0
                  ? (e = 'checking')
                  : t.disconnected > 0
                    ? (e = 'disconnected')
                    : t.new > 0
                      ? (e = 'new')
                      : t.connected > 0
                        ? (e = 'connected')
                        : t.completed > 0 && (e = 'completed'),
              e !== this.iceConnectionState)
            ) {
              this.iceConnectionState = e;
              const r = new Event('iceconnectionstatechange');
              this._dispatchEvent('iceconnectionstatechange', r);
            }
          }),
          (d.prototype._updateConnectionState = function() {
            let e;

            const t = {
              new: 0,
              closed: 0,
              connecting: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0,
            };
            if (
              (this.transceivers.forEach(e => {
                t[e.iceTransport.state]++, t[e.dtlsTransport.state]++;
              }),
              (t.connected += t.completed),
              (e = 'new'),
              t.failed > 0
                ? (e = 'failed')
                : t.connecting > 0
                  ? (e = 'connecting')
                  : t.disconnected > 0
                    ? (e = 'disconnected')
                    : t.new > 0
                      ? (e = 'new')
                      : t.connected > 0 && (e = 'connected'),
              e !== this.connectionState)
            ) {
              this.connectionState = e;
              const r = new Event('connectionstatechange');
              this._dispatchEvent('connectionstatechange', r);
            }
          }),
          (d.prototype.createOffer = function() {
            const r = this;
            if (r._isClosed)
              return Promise.reject(c('InvalidStateError', 'Can not call createOffer after close'));
            let o = r.transceivers.filter(e => {
              return e.kind === 'audio';
            }).length;

            let a = r.transceivers.filter(e => {
              return e.kind === 'video';
            }).length;

            const s = arguments[0];
            if (s) {
              if (s.mandatory || s.optional)
                throw new TypeError('Legacy mandatory/optional constraints not supported.');
              void 0 !== s.offerToReceiveAudio &&
                (o =
                  !0 === s.offerToReceiveAudio
                    ? 1
                    : !1 === s.offerToReceiveAudio
                      ? 0
                      : s.offerToReceiveAudio),
                void 0 !== s.offerToReceiveVideo &&
                  (a =
                    !0 === s.offerToReceiveVideo
                      ? 1
                      : !1 === s.offerToReceiveVideo
                        ? 0
                        : s.offerToReceiveVideo);
            }
            for (
              r.transceivers.forEach(e => {
                e.kind === 'audio'
                  ? --o < 0 && (e.wantReceive = !1)
                  : e.kind === 'video' && --a < 0 && (e.wantReceive = !1);
              });
              o > 0 || a > 0;

            )
              o > 0 && (r._createTransceiver('audio'), o--),
                a > 0 && (r._createTransceiver('video'), a--);
            let u = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
            r.transceivers.forEach((i, o) => {
              const a = i.track;

              const s = i.kind;

              const c = i.mid || n.generateIdentifier();
              (i.mid = c),
                i.iceGatherer || (i.iceGatherer = r._createIceGatherer(o, r.usingBundle));
              const u = e.RTCRtpSender.getCapabilities(s);
              t < 15019 &&
                (u.codecs = u.codecs.filter(e => {
                  return e.name !== 'rtx';
                })),
                u.codecs.forEach(e => {
                  e.name === 'H264' &&
                    void 0 === e.parameters['level-asymmetry-allowed'] &&
                    (e.parameters['level-asymmetry-allowed'] = '1'),
                    i.remoteCapabilities &&
                      i.remoteCapabilities.codecs &&
                      i.remoteCapabilities.codecs.forEach(t => {
                        e.name.toLowerCase() === t.name.toLowerCase() &&
                          e.clockRate === t.clockRate &&
                          (e.preferredPayloadType = t.payloadType);
                      });
                }),
                u.headerExtensions.forEach(e => {
                  ((i.remoteCapabilities && i.remoteCapabilities.headerExtensions) || []).forEach(
                    t => {
                      e.uri === t.uri && (e.id = t.id);
                    }
                  );
                });
              const d = i.sendEncodingParameters || [{ ssrc: 1001 * (2 * o + 1) }];
              a && t >= 15019 && s === 'video' && !d[0].rtx && (d[0].rtx = { ssrc: d[0].ssrc + 1 }),
                i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)),
                (i.localCapabilities = u),
                (i.sendEncodingParameters = d);
            }),
              r._config.bundlePolicy !== 'max-compat' &&
                (u += `a=group:BUNDLE ${r.transceivers
                  .map(e => {
                    return e.mid;
                  })
                  .join(' ')}\r\n`),
              (u += 'a=ice-options:trickle\r\n'),
              r.transceivers.forEach((e, t) => {
                (u += i(e, e.localCapabilities, 'offer', e.stream, r._dtlsRole)),
                  (u += 'a=rtcp-rsize\r\n'),
                  !e.iceGatherer ||
                    r.iceGatheringState === 'new' ||
                    (t !== 0 && r.usingBundle) ||
                    (e.iceGatherer.getLocalCandidates().forEach(e => {
                      (e.component = 1), (u += `a=${n.writeCandidate(e)}\r\n`);
                    }),
                    e.iceGatherer.state === 'completed' && (u += 'a=end-of-candidates\r\n'));
              });
            const d = new e.RTCSessionDescription({ type: 'offer', sdp: u });
            return Promise.resolve(d);
          }),
          (d.prototype.createAnswer = function() {
            const r = this;
            if (r._isClosed)
              return Promise.reject(
                c('InvalidStateError', 'Can not call createAnswer after close')
              );
            if (
              r.signalingState !== 'have-remote-offer' &&
              r.signalingState !== 'have-local-pranswer'
            )
              return Promise.reject(
                c(
                  'InvalidStateError',
                  `Can not call createAnswer in signalingState ${r.signalingState}`
                )
              );
            let a = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
            r.usingBundle &&
              (a += `a=group:BUNDLE ${r.transceivers
                .map(e => {
                  return e.mid;
                })
                .join(' ')}\r\n`);
            const s = n.getMediaSections(r._remoteDescription.sdp).length;
            r.transceivers.forEach((e, n) => {
              if (!(n + 1 > s)) {
                if (e.rejected)
                  return (
                    e.kind === 'application'
                      ? e.protocol === 'DTLS/SCTP'
                        ? (a += 'm=application 0 DTLS/SCTP 5000\r\n')
                        : (a += `m=application 0 ${e.protocol} webrtc-datachannel\r\n`)
                      : e.kind === 'audio'
                        ? (a += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n')
                        : e.kind === 'video' &&
                          (a += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n'),
                    void (a += `c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:${e.mid}\r\n`)
                  );
                let c;
                if (e.stream)
                  e.kind === 'audio'
                    ? (c = e.stream.getAudioTracks()[0])
                    : e.kind === 'video' && (c = e.stream.getVideoTracks()[0]),
                    c &&
                      t >= 15019 &&
                      e.kind === 'video' &&
                      !e.sendEncodingParameters[0].rtx &&
                      (e.sendEncodingParameters[0].rtx = {
                        ssrc: e.sendEncodingParameters[0].ssrc + 1,
                      });
                const u = o(e.localCapabilities, e.remoteCapabilities);
                !u.codecs.filter(e => {
                  return e.name.toLowerCase() === 'rtx';
                }).length &&
                  e.sendEncodingParameters[0].rtx &&
                  delete e.sendEncodingParameters[0].rtx,
                  (a += i(e, u, 'answer', e.stream, r._dtlsRole)),
                  e.rtcpParameters && e.rtcpParameters.reducedSize && (a += 'a=rtcp-rsize\r\n');
              }
            });
            const u = new e.RTCSessionDescription({ type: 'answer', sdp: a });
            return Promise.resolve(u);
          }),
          (d.prototype.addIceCandidate = function(e) {
            let t;

            const r = this;
            return e && void 0 === e.sdpMLineIndex && !e.sdpMid
              ? Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'))
              : new Promise((i, o) => {
                  if (!r._remoteDescription)
                    return o(
                      c(
                        'InvalidStateError',
                        'Can not add ICE candidate without a remote description'
                      )
                    );
                  if (e && e.candidate !== '') {
                    let a = e.sdpMLineIndex;
                    if (e.sdpMid)
                      for (let u = 0; u < r.transceivers.length; u++)
                        if (r.transceivers[u].mid === e.sdpMid) {
                          a = u;
                          break;
                        }
                    const d = r.transceivers[a];
                    if (!d) return o(c('OperationError', 'Can not add ICE candidate'));
                    if (d.rejected) return i();
                    const l =
                      Object.keys(e.candidate).length > 0 ? n.parseCandidate(e.candidate) : {};
                    if (l.protocol === 'tcp' && (l.port === 0 || l.port === 9)) return i();
                    if (l.component && l.component !== 1) return i();
                    if (
                      (a === 0 || (a > 0 && d.iceTransport !== r.transceivers[0].iceTransport)) &&
                      !s(d.iceTransport, l)
                    )
                      return o(c('OperationError', 'Can not add ICE candidate'));
                    let f = e.candidate.trim();
                    f.indexOf('a=') === 0 && (f = f.substr(2)),
                      ((t = n.getMediaSections(r._remoteDescription.sdp))[a] += `a=${
                        l.type ? f : 'end-of-candidates'
                      }\r\n`),
                      (r._remoteDescription.sdp =
                        n.getDescription(r._remoteDescription.sdp) + t.join(''));
                  } else
                    for (
                      let p = 0;
                      p < r.transceivers.length &&
                      (r.transceivers[p].rejected ||
                        (r.transceivers[p].iceTransport.addRemoteCandidate({}),
                        ((t = n.getMediaSections(r._remoteDescription.sdp))[p] +=
                          'a=end-of-candidates\r\n'),
                        (r._remoteDescription.sdp =
                          n.getDescription(r._remoteDescription.sdp) + t.join('')),
                        !r.usingBundle));
                      p++
                    );
                  i();
                });
          }),
          (d.prototype.getStats = function(t) {
            if (t && t instanceof e.MediaStreamTrack) {
              let r = null;
              if (
                (this.transceivers.forEach(e => {
                  e.rtpSender && e.rtpSender.track === t
                    ? (r = e.rtpSender)
                    : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver);
                }),
                !r)
              )
                throw c('InvalidAccessError', 'Invalid selector.');
              return r.getStats();
            }
            const n = [];
            return (
              this.transceivers.forEach(e => {
                [
                  'rtpSender',
                  'rtpReceiver',
                  'iceGatherer',
                  'iceTransport',
                  'dtlsTransport',
                ].forEach(t => {
                  e[t] && n.push(e[t].getStats());
                });
              }),
              Promise.all(n).then(e => {
                const t = new Map();
                return (
                  e.forEach(e => {
                    e.forEach(e => {
                      t.set(e.id, e);
                    });
                  }),
                  t
                );
              })
            );
          });
        [
          'RTCRtpSender',
          'RTCRtpReceiver',
          'RTCIceGatherer',
          'RTCIceTransport',
          'RTCDtlsTransport',
        ].forEach(t => {
          const r = e[t];
          if (r && r.prototype && r.prototype.getStats) {
            const n = r.prototype.getStats;
            r.prototype.getStats = function() {
              return n.apply(this).then(e => {
                const t = new Map();
                return (
                  Object.keys(e).forEach(r => {
                    (e[r].type = (function(e) {
                      return (
                        {
                          inboundrtp: 'inbound-rtp',
                          outboundrtp: 'outbound-rtp',
                          candidatepair: 'candidate-pair',
                          localcandidate: 'local-candidate',
                          remotecandidate: 'remote-candidate',
                        }[e.type] || e.type
                      );
                    })(e[r])),
                      t.set(r, e[r]);
                  }),
                  t
                );
              });
            };
          }
        });
        let l = ['createOffer', 'createAnswer'];
        return (
          l.forEach(e => {
            const t = d.prototype[e];
            d.prototype[e] = function() {
              const e = arguments;
              return typeof e[0] === 'function' || typeof e[1] === 'function'
                ? t.apply(this, [arguments[2]]).then(
                    t => {
                      typeof e[0] === 'function' && e[0].apply(null, [t]);
                    },
                    t => {
                      typeof e[1] === 'function' && e[1].apply(null, [t]);
                    }
                  )
                : t.apply(this, arguments);
            };
          }),
          (l = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']).forEach(e => {
            const t = d.prototype[e];
            d.prototype[e] = function() {
              const e = arguments;
              return typeof e[1] === 'function' || typeof e[2] === 'function'
                ? t.apply(this, arguments).then(
                    () => {
                      typeof e[1] === 'function' && e[1].apply(null);
                    },
                    t => {
                      typeof e[2] === 'function' && e[2].apply(null, [t]);
                    }
                  )
                : t.apply(this, arguments);
            };
          }),
          ['getStats'].forEach(e => {
            const t = d.prototype[e];
            d.prototype[e] = function() {
              const e = arguments;
              return typeof e[1] === 'function'
                ? t.apply(this, arguments).then(() => {
                    typeof e[1] === 'function' && e[1].apply(null);
                  })
                : t.apply(this, arguments);
            };
          }),
          d
        );
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = r(224);
      e.exports = {
        shimGetUserMedia: r(223),
        shimPeerConnection(e) {
          const t = n.detectBrowser(e);
          if (
            e.RTCIceGatherer &&
            (e.RTCIceCandidate ||
              (e.RTCIceCandidate = function(e) {
                return e;
              }),
            e.RTCSessionDescription ||
              (e.RTCSessionDescription = function(e) {
                return e;
              }),
            t.version < 15025)
          ) {
            const r = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(e.MediaStreamTrack.prototype, 'enabled', {
              set(e) {
                r.set.call(this, e);
                const t = new Event('enabled');
                (t.enabled = e), this.dispatchEvent(t);
              },
            });
          }
          !e.RTCRtpSender ||
            'dtmf' in e.RTCRtpSender.prototype ||
            Object.defineProperty(e.RTCRtpSender.prototype, 'dtmf', {
              get() {
                return (
                  void 0 === this._dtmf &&
                    (this.track.kind === 'audio'
                      ? (this._dtmf = new e.RTCDtmfSender(this))
                      : this.track.kind === 'video' && (this._dtmf = null)),
                  this._dtmf
                );
              },
            }),
            (e.RTCPeerConnection = i(e, t.version));
        },
        shimReplaceTrack(e) {
          !e.RTCRtpSender ||
            'replaceTrack' in e.RTCRtpSender.prototype ||
            (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
        },
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = n.log;
      e.exports = function(e) {
        const t = n.detectBrowser(e);

        const r = e && e.navigator;

        const o = function(e) {
          if (typeof e !== 'object' || e.mandatory || e.optional) return e;
          const t = {};
          return (
            Object.keys(e).forEach(r => {
              if (r !== 'require' && r !== 'advanced' && r !== 'mediaSource') {
                const n = typeof e[r] === 'object' ? e[r] : { ideal: e[r] };
                void 0 !== n.exact && typeof n.exact === 'number' && (n.min = n.max = n.exact);
                const i = function(e, t) {
                  return e
                    ? e + t.charAt(0).toUpperCase() + t.slice(1)
                    : t === 'deviceId'
                      ? 'sourceId'
                      : t;
                };
                if (void 0 !== n.ideal) {
                  t.optional = t.optional || [];
                  let o = {};
                  typeof n.ideal === 'number'
                    ? ((o[i('min', r)] = n.ideal),
                      t.optional.push(o),
                      ((o = {})[i('max', r)] = n.ideal),
                      t.optional.push(o))
                    : ((o[i('', r)] = n.ideal), t.optional.push(o));
                }
                void 0 !== n.exact && typeof n.exact !== 'number'
                  ? ((t.mandatory = t.mandatory || {}), (t.mandatory[i('', r)] = n.exact))
                  : ['min', 'max'].forEach(e => {
                      void 0 !== n[e] &&
                        ((t.mandatory = t.mandatory || {}), (t.mandatory[i(e, r)] = n[e]));
                    });
              }
            }),
            e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
            t
          );
        };

        const a = function(e, n) {
          if (t.version >= 61) return n(e);
          if ((e = JSON.parse(JSON.stringify(e))) && typeof e.audio === 'object') {
            const a = function(e, t, r) {
              t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
            };
            a((e = JSON.parse(JSON.stringify(e))).audio, 'autoGainControl', 'googAutoGainControl'),
              a(e.audio, 'noiseSuppression', 'googNoiseSuppression'),
              (e.audio = o(e.audio));
          }
          if (e && typeof e.video === 'object') {
            let s = e.video.facingMode;
            s = s && (typeof s === 'object' ? s : { ideal: s });
            let c;

            const u = t.version < 66;
            if (
              s &&
              (s.exact === 'user' ||
                s.exact === 'environment' ||
                s.ideal === 'user' ||
                s.ideal === 'environment') &&
              (!r.mediaDevices.getSupportedConstraints ||
                !r.mediaDevices.getSupportedConstraints().facingMode ||
                u)
            )
              if (
                (delete e.video.facingMode,
                s.exact === 'environment' || s.ideal === 'environment'
                  ? (c = ['back', 'rear'])
                  : (s.exact !== 'user' && s.ideal !== 'user') || (c = ['front']),
                c)
              )
                return r.mediaDevices.enumerateDevices().then(t => {
                  let r = (t = t.filter(e => {
                    return e.kind === 'videoinput';
                  })).find(e => {
                    return c.some(t => {
                      return e.label.toLowerCase().indexOf(t) !== -1;
                    });
                  });
                  return (
                    !r && t.length && c.indexOf('back') !== -1 && (r = t[t.length - 1]),
                    r &&
                      (e.video.deviceId = s.exact ? { exact: r.deviceId } : { ideal: r.deviceId }),
                    (e.video = o(e.video)),
                    i(`chrome: ${JSON.stringify(e)}`),
                    n(e)
                  );
                });
            e.video = o(e.video);
          }
          return i(`chrome: ${JSON.stringify(e)}`), n(e);
        };

        const s = function(e) {
          return {
            name:
              {
                PermissionDeniedError: 'NotAllowedError',
                InvalidStateError: 'NotReadableError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotReadableError',
                MediaDeviceKillSwitchOn: 'NotReadableError',
              }[e.name] || e.name,
            message: e.message,
            constraint: e.constraintName,
            toString() {
              return this.name + (this.message && ': ') + this.message;
            },
          };
        };
        r.getUserMedia = function(e, t, n) {
          a(e, e => {
            r.webkitGetUserMedia(e, t, e => {
              n && n(s(e));
            });
          });
        };
        const c = function(e) {
          return new Promise((t, n) => {
            r.getUserMedia(e, t, n);
          });
        };
        if (
          (r.mediaDevices ||
            (r.mediaDevices = {
              getUserMedia: c,
              enumerateDevices() {
                return new Promise(t => {
                  const r = { audio: 'audioinput', video: 'videoinput' };
                  return e.MediaStreamTrack.getSources(e => {
                    t(
                      e.map(e => {
                        return { label: e.label, kind: r[e.kind], deviceId: e.id, groupId: '' };
                      })
                    );
                  });
                });
              },
              getSupportedConstraints() {
                return {
                  deviceId: !0,
                  echoCancellation: !0,
                  facingMode: !0,
                  frameRate: !0,
                  height: !0,
                  width: !0,
                };
              },
            }),
          r.mediaDevices.getUserMedia)
        ) {
          const u = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
          r.mediaDevices.getUserMedia = function(e) {
            return a(e, e => {
              return u(e).then(
                t => {
                  if (
                    (e.audio && !t.getAudioTracks().length) ||
                    (e.video && !t.getVideoTracks().length)
                  )
                    throw (t.getTracks().forEach(e => {
                      e.stop();
                    }),
                    new DOMException('', 'NotFoundError'));
                  return t;
                },
                e => {
                  return Promise.reject(s(e));
                }
              );
            });
          };
        } else
          r.mediaDevices.getUserMedia = function(e) {
            return c(e);
          };
        void 0 === r.mediaDevices.addEventListener &&
          (r.mediaDevices.addEventListener = function() {
            i('Dummy mediaDevices.addEventListener called.');
          }),
          void 0 === r.mediaDevices.removeEventListener &&
            (r.mediaDevices.removeEventListener = function() {
              i('Dummy mediaDevices.removeEventListener called.');
            });
      };
    },
    function(e, t, r) {
      const n = r(63);

      const i = n.log;

      const o = {
        shimMediaStream(e) {
          e.MediaStream = e.MediaStream || e.webkitMediaStream;
        },
        shimOnTrack(e) {
          if (
            typeof e === 'object' &&
            e.RTCPeerConnection &&
            !('ontrack' in e.RTCPeerConnection.prototype)
          ) {
            Object.defineProperty(e.RTCPeerConnection.prototype, 'ontrack', {
              get() {
                return this._ontrack;
              },
              set(e) {
                this._ontrack && this.removeEventListener('track', this._ontrack),
                  this.addEventListener('track', (this._ontrack = e));
              },
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
              const r = this;
              return (
                r._ontrackpoly ||
                  ((r._ontrackpoly = function(t) {
                    t.stream.addEventListener('addtrack', n => {
                      let i;
                      i = e.RTCPeerConnection.prototype.getReceivers
                        ? r.getReceivers().find(e => {
                            return e.track && e.track.id === n.track.id;
                          })
                        : { track: n.track };
                      const o = new Event('track');
                      (o.track = n.track),
                        (o.receiver = i),
                        (o.transceiver = { receiver: i }),
                        (o.streams = [t.stream]),
                        r.dispatchEvent(o);
                    }),
                      t.stream.getTracks().forEach(n => {
                        let i;
                        i = e.RTCPeerConnection.prototype.getReceivers
                          ? r.getReceivers().find(e => {
                              return e.track && e.track.id === n.id;
                            })
                          : { track: n };
                        const o = new Event('track');
                        (o.track = n),
                          (o.receiver = i),
                          (o.transceiver = { receiver: i }),
                          (o.streams = [t.stream]),
                          r.dispatchEvent(o);
                      });
                  }),
                  r.addEventListener('addstream', r._ontrackpoly)),
                t.apply(r, arguments)
              );
            };
          }
        },
        shimGetSendersWithDtmf(e) {
          if (
            typeof e === 'object' &&
            e.RTCPeerConnection &&
            !('getSenders' in e.RTCPeerConnection.prototype) &&
            'createDTMFSender' in e.RTCPeerConnection.prototype
          ) {
            const t = function(e, t) {
              return {
                track: t,
                get dtmf() {
                  return (
                    void 0 === this._dtmf &&
                      (t.kind === 'audio'
                        ? (this._dtmf = e.createDTMFSender(t))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
                _pc: e,
              };
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
              e.RTCPeerConnection.prototype.getSenders = function() {
                return (this._senders = this._senders || []), this._senders.slice();
              };
              const r = e.RTCPeerConnection.prototype.addTrack;
              e.RTCPeerConnection.prototype.addTrack = function(e, n) {
                let i = r.apply(this, arguments);
                return i || ((i = t(this, e)), this._senders.push(i)), i;
              };
              const n = e.RTCPeerConnection.prototype.removeTrack;
              e.RTCPeerConnection.prototype.removeTrack = function(e) {
                n.apply(this, arguments);
                const t = this._senders.indexOf(e);
                t !== -1 && this._senders.splice(t, 1);
              };
            }
            const i = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function(e) {
              const r = this;
              (r._senders = r._senders || []),
                i.apply(r, [e]),
                e.getTracks().forEach(e => {
                  r._senders.push(t(r, e));
                });
            };
            const o = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function(e) {
              const t = this;
              (t._senders = t._senders || []),
                o.apply(t, [e]),
                e.getTracks().forEach(e => {
                  const r = t._senders.find(t => {
                    return t.track === e;
                  });
                  r && t._senders.splice(t._senders.indexOf(r), 1);
                });
            };
          } else if (
            typeof e === 'object' &&
            e.RTCPeerConnection &&
            'getSenders' in e.RTCPeerConnection.prototype &&
            'createDTMFSender' in e.RTCPeerConnection.prototype &&
            e.RTCRtpSender &&
            !('dtmf' in e.RTCRtpSender.prototype)
          ) {
            const a = e.RTCPeerConnection.prototype.getSenders;
            (e.RTCPeerConnection.prototype.getSenders = function() {
              const e = this;

              const t = a.apply(e, []);
              return (
                t.forEach(t => {
                  t._pc = e;
                }),
                t
              );
            }),
              Object.defineProperty(e.RTCRtpSender.prototype, 'dtmf', {
                get() {
                  return (
                    void 0 === this._dtmf &&
                      (this.track.kind === 'audio'
                        ? (this._dtmf = this._pc.createDTMFSender(this.track))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
              });
          }
        },
        shimSourceObject(e) {
          const t = e && e.URL;
          typeof e === 'object' &&
            (!e.HTMLMediaElement ||
              'srcObject' in e.HTMLMediaElement.prototype ||
              Object.defineProperty(e.HTMLMediaElement.prototype, 'srcObject', {
                get() {
                  return this._srcObject;
                },
                set(e) {
                  const r = this;
                  (this._srcObject = e),
                    this.src && t.revokeObjectURL(this.src),
                    e
                      ? ((this.src = t.createObjectURL(e)),
                        e.addEventListener('addtrack', () => {
                          r.src && t.revokeObjectURL(r.src), (r.src = t.createObjectURL(e));
                        }),
                        e.addEventListener('removetrack', () => {
                          r.src && t.revokeObjectURL(r.src), (r.src = t.createObjectURL(e));
                        }))
                      : (this.src = '');
                },
              }));
        },
        shimAddTrackRemoveTrack(e) {
          const t = n.detectBrowser(e);
          if (!(e.RTCPeerConnection.prototype.addTrack && t.version >= 64)) {
            const r = e.RTCPeerConnection.prototype.getLocalStreams;
            e.RTCPeerConnection.prototype.getLocalStreams = function() {
              const e = this;

              const t = r.apply(this);
              return (
                (e._reverseStreams = e._reverseStreams || {}),
                t.map(t => {
                  return e._reverseStreams[t.id];
                })
              );
            };
            const i = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function(t) {
              const r = this;
              if (
                ((r._streams = r._streams || {}),
                (r._reverseStreams = r._reverseStreams || {}),
                t.getTracks().forEach(e => {
                  if (
                    r.getSenders().find(t => {
                      return t.track === e;
                    })
                  )
                    throw new DOMException('Track already exists.', 'InvalidAccessError');
                }),
                !r._reverseStreams[t.id])
              ) {
                const n = new e.MediaStream(t.getTracks());
                (r._streams[t.id] = n), (r._reverseStreams[n.id] = t), (t = n);
              }
              i.apply(r, [t]);
            };
            const o = e.RTCPeerConnection.prototype.removeStream;
            (e.RTCPeerConnection.prototype.removeStream = function(e) {
              const t = this;
              (t._streams = t._streams || {}),
                (t._reverseStreams = t._reverseStreams || {}),
                o.apply(t, [t._streams[e.id] || e]),
                delete t._reverseStreams[t._streams[e.id] ? t._streams[e.id].id : e.id],
                delete t._streams[e.id];
            }),
              (e.RTCPeerConnection.prototype.addTrack = function(t, r) {
                const n = this;
                if (n.signalingState === 'closed')
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    'InvalidStateError'
                  );
                const i = [].slice.call(arguments, 1);
                if (
                  i.length !== 1 ||
                  !i[0].getTracks().find(e => {
                    return e === t;
                  })
                )
                  throw new DOMException(
                    'The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.',
                    'NotSupportedError'
                  );
                if (
                  n.getSenders().find(e => {
                    return e.track === t;
                  })
                )
                  throw new DOMException('Track already exists.', 'InvalidAccessError');
                (n._streams = n._streams || {}), (n._reverseStreams = n._reverseStreams || {});
                const o = n._streams[r.id];
                if (o)
                  o.addTrack(t),
                    Promise.resolve().then(() => {
                      n.dispatchEvent(new Event('negotiationneeded'));
                    });
                else {
                  const a = new e.MediaStream([t]);
                  (n._streams[r.id] = a), (n._reverseStreams[a.id] = r), n.addStream(a);
                }
                return n.getSenders().find(e => {
                  return e.track === t;
                });
              }),
              ['createOffer', 'createAnswer'].forEach(t => {
                const r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function() {
                  const e = this;

                  const t = arguments;
                  return arguments.length && typeof arguments[0] === 'function'
                    ? r.apply(e, [
                        function(r) {
                          const n = c(e, r);
                          t[0].apply(null, [n]);
                        },
                        function(e) {
                          t[1] && t[1].apply(null, e);
                        },
                        arguments[2],
                      ])
                    : r.apply(e, arguments).then(t => {
                        return c(e, t);
                      });
                };
              });
            const a = e.RTCPeerConnection.prototype.setLocalDescription;
            e.RTCPeerConnection.prototype.setLocalDescription = function() {
              return arguments.length && arguments[0].type
                ? ((arguments[0] = (function(e, t) {
                    let r = t.sdp;
                    return (
                      Object.keys(e._reverseStreams || []).forEach(t => {
                        const n = e._reverseStreams[t];

                        const i = e._streams[n.id];
                        r = r.replace(new RegExp(n.id, 'g'), i.id);
                      }),
                      new RTCSessionDescription({ type: t.type, sdp: r })
                    );
                  })(this, arguments[0])),
                  a.apply(this, arguments))
                : a.apply(this, arguments);
            };
            const s = Object.getOwnPropertyDescriptor(
              e.RTCPeerConnection.prototype,
              'localDescription'
            );
            Object.defineProperty(e.RTCPeerConnection.prototype, 'localDescription', {
              get() {
                const e = s.get.apply(this);
                return e.type === '' ? e : c(this, e);
              },
            }),
              (e.RTCPeerConnection.prototype.removeTrack = function(e) {
                let t;

                const r = this;
                if (r.signalingState === 'closed')
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    'InvalidStateError'
                  );
                if (!e._pc)
                  throw new DOMException(
                    'Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.',
                    'TypeError'
                  );
                if (!(e._pc === r))
                  throw new DOMException(
                    'Sender was not created by this connection.',
                    'InvalidAccessError'
                  );
                (r._streams = r._streams || {}),
                  Object.keys(r._streams).forEach(n => {
                    r._streams[n].getTracks().find(t => {
                      return e.track === t;
                    }) && (t = r._streams[n]);
                  }),
                  t &&
                    (t.getTracks().length === 1
                      ? r.removeStream(r._reverseStreams[t.id])
                      : t.removeTrack(e.track),
                    r.dispatchEvent(new Event('negotiationneeded')));
              });
          }
          function c(e, t) {
            let r = t.sdp;
            return (
              Object.keys(e._reverseStreams || []).forEach(t => {
                const n = e._reverseStreams[t];

                const i = e._streams[n.id];
                r = r.replace(new RegExp(i.id, 'g'), n.id);
              }),
              new RTCSessionDescription({ type: t.type, sdp: r })
            );
          }
        },
        shimPeerConnection(e) {
          const t = n.detectBrowser(e);
          if (e.RTCPeerConnection) {
            const r = e.RTCPeerConnection;
            (e.RTCPeerConnection = function(e, t) {
              if (e && e.iceServers) {
                for (var i = [], o = 0; o < e.iceServers.length; o++) {
                  let a = e.iceServers[o];
                  !a.hasOwnProperty('urls') && a.hasOwnProperty('url')
                    ? (n.deprecated('RTCIceServer.url', 'RTCIceServer.urls'),
                      ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                      i.push(a))
                    : i.push(e.iceServers[o]);
                }
                e.iceServers = i;
              }
              return new r(e, t);
            }),
              (e.RTCPeerConnection.prototype = r.prototype),
              Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
                get() {
                  return r.generateCertificate;
                },
              });
          } else
            (e.RTCPeerConnection = function(t, r) {
              return (
                i('PeerConnection'),
                t && t.iceTransportPolicy && (t.iceTransports = t.iceTransportPolicy),
                new e.webkitRTCPeerConnection(t, r)
              );
            }),
              (e.RTCPeerConnection.prototype = e.webkitRTCPeerConnection.prototype),
              e.webkitRTCPeerConnection.generateCertificate &&
                Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
                  get() {
                    return e.webkitRTCPeerConnection.generateCertificate;
                  },
                });
          const o = e.RTCPeerConnection.prototype.getStats;
          (e.RTCPeerConnection.prototype.getStats = function(e, t, r) {
            const n = this;

            const i = arguments;
            if (arguments.length > 0 && typeof e === 'function') return o.apply(this, arguments);
            if (o.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function'))
              return o.apply(this, []);
            const a = function(e) {
              const t = {};
              return (
                e.result().forEach(e => {
                  const r = {
                    id: e.id,
                    timestamp: e.timestamp,
                    type:
                      {
                        localcandidate: 'local-candidate',
                        remotecandidate: 'remote-candidate',
                      }[e.type] || e.type,
                  };
                  e.names().forEach(t => {
                    r[t] = e.stat(t);
                  }),
                    (t[r.id] = r);
                }),
                t
              );
            };

            const s = function(e) {
              return new Map(
                Object.keys(e).map(t => {
                  return [t, e[t]];
                })
              );
            };
            if (arguments.length >= 2) {
              return o.apply(this, [
                function(e) {
                  i[1](s(a(e)));
                },
                arguments[0],
              ]);
            }
            return new Promise((e, t) => {
              o.apply(n, [
                function(t) {
                  e(s(a(t)));
                },
                t,
              ]);
            }).then(t, r);
          }),
            t.version < 51 &&
              ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(t => {
                const r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function() {
                  const e = arguments;

                  const t = this;

                  const n = new Promise((n, i) => {
                    r.apply(t, [e[0], n, i]);
                  });
                  return e.length < 2
                    ? n
                    : n.then(
                        () => {
                          e[1].apply(null, []);
                        },
                        t => {
                          e.length >= 3 && e[2].apply(null, [t]);
                        }
                      );
                };
              }),
            t.version < 52 &&
              ['createOffer', 'createAnswer'].forEach(t => {
                const r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function() {
                  const e = this;
                  if (
                    arguments.length < 1 ||
                    (arguments.length === 1 && typeof arguments[0] === 'object')
                  ) {
                    const t = arguments.length === 1 ? arguments[0] : void 0;
                    return new Promise((n, i) => {
                      r.apply(e, [n, i, t]);
                    });
                  }
                  return r.apply(this, arguments);
                };
              }),
            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(t => {
              const r = e.RTCPeerConnection.prototype[t];
              e.RTCPeerConnection.prototype[t] = function() {
                return (
                  (arguments[0] = new (t === 'addIceCandidate'
                    ? e.RTCIceCandidate
                    : e.RTCSessionDescription)(arguments[0])),
                  r.apply(this, arguments)
                );
              };
            });
          const a = e.RTCPeerConnection.prototype.addIceCandidate;
          e.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0]
              ? a.apply(this, arguments)
              : (arguments[1] && arguments[1].apply(null), Promise.resolve());
          };
        },
      };
      e.exports = {
        shimMediaStream: o.shimMediaStream,
        shimOnTrack: o.shimOnTrack,
        shimAddTrackRemoveTrack: o.shimAddTrackRemoveTrack,
        shimGetSendersWithDtmf: o.shimGetSendersWithDtmf,
        shimSourceObject: o.shimSourceObject,
        shimPeerConnection: o.shimPeerConnection,
        shimGetUserMedia: r(226),
      };
    },
    function(e, t, r) {
      const n = r(63);
      e.exports = function(e, t) {
        const i = e && e.window;

        const o = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 };
        for (const a in t) hasOwnProperty.call(t, a) && (o[a] = t[a]);
        const s = n.log;

        const c = n.detectBrowser(i);

        const u = {
          browserDetails: c,
          extractVersion: n.extractVersion,
          disableLog: n.disableLog,
          disableWarnings: n.disableWarnings,
        };

        const d = r(227) || null;

        const l = r(225) || null;

        const f = r(222) || null;

        const p = r(220) || null;

        const h = r(219) || null;
        switch (c.browser) {
          case 'chrome':
            if (!d || !d.shimPeerConnection || !o.shimChrome)
              return s('Chrome shim is not included in this adapter release.'), u;
            s('adapter.js shimming chrome.'),
              (u.browserShim = d),
              h.shimCreateObjectURL(i),
              d.shimGetUserMedia(i),
              d.shimMediaStream(i),
              d.shimSourceObject(i),
              d.shimPeerConnection(i),
              d.shimOnTrack(i),
              d.shimAddTrackRemoveTrack(i),
              d.shimGetSendersWithDtmf(i),
              h.shimRTCIceCandidate(i);
            break;
          case 'firefox':
            if (!f || !f.shimPeerConnection || !o.shimFirefox)
              return s('Firefox shim is not included in this adapter release.'), u;
            s('adapter.js shimming firefox.'),
              (u.browserShim = f),
              h.shimCreateObjectURL(i),
              f.shimGetUserMedia(i),
              f.shimSourceObject(i),
              f.shimPeerConnection(i),
              f.shimOnTrack(i),
              f.shimRemoveStream(i),
              h.shimRTCIceCandidate(i);
            break;
          case 'edge':
            if (!l || !l.shimPeerConnection || !o.shimEdge)
              return s('MS edge shim is not included in this adapter release.'), u;
            s('adapter.js shimming edge.'),
              (u.browserShim = l),
              h.shimCreateObjectURL(i),
              l.shimGetUserMedia(i),
              l.shimPeerConnection(i),
              l.shimReplaceTrack(i);
            break;
          case 'safari':
            if (!p || !o.shimSafari)
              return s('Safari shim is not included in this adapter release.'), u;
            s('adapter.js shimming safari.'),
              (u.browserShim = p),
              h.shimCreateObjectURL(i),
              p.shimRTCIceServerUrls(i),
              p.shimCallbacksAPI(i),
              p.shimLocalStreamsAPI(i),
              p.shimRemoteStreamsAPI(i),
              p.shimTrackEventTransceiver(i),
              p.shimGetUserMedia(i),
              p.shimCreateOfferLegacy(i),
              h.shimRTCIceCandidate(i);
            break;
          default:
            s('Unsupported browser!');
        }
        return u;
      };
    },
    function(e, t, r) {
      (function(t) {
        const n = r(228);
        e.exports = n({ window: t.window });
      }.call(this, r(30)));
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = s(r(14));

      const i = s(r(22));

      const o = s(r(21));

      const a = r(64);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r(229);
      const c = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.logger = e.logger),
            (r.imInfo = e.imInfo),
            (r.sessionConfig = e.sessionConfig),
            (r.controller = e.controller),
            (r.targetUid = e.targetUid || r.imInfo.uid),
            r.init(),
            (r.isProgress = !1),
            r
          );
        }
        return (0, o.default)(t, e), t;
      })(r(25));
      t.default = c;
      const u = c.prototype;
      (u.resetStatus = function() {
        (this.sdpOffer = null),
          (this.sdpAnswer = null),
          (this.iceOffer = []),
          (this.iceAnswer = []),
          (this.offerCount = 0);
      }),
        (u.setProgress = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (this.isProgress = e),
            !1 === e && this.rtcConnection.iceConnectionState === 'completed' && this.emit('ready');
        }),
        (u.init = function() {
          const e = this;
          if ((this.resetStatus(), !this.rtcConnection)) {
            const t = /Firefox/gi.test(navigator.userAgent);

            const r = (this.rtcConnection = new RTCPeerConnection({
              iceServers: [{ url: 'stun:turn.ideasip.com' }],
            }));
            (r.uid = this.imInfo.uid),
              (r.targetUid = this.targetUid),
              (r.onicecandidate = this.onIceCandidate.bind(this)),
              (r.onnegotiationneeded = this.onNegotiationneeded.bind(this)),
              (r.oniceconnectionstatechange = this.onIceStateChange.bind(this)),
              t
                ? (r.ontrack = this.onRemoteTrack.bind(this))
                : ((r.onaddstream = this.onRemoteStream.bind(this)),
                  (r.onremovestream = function(t) {
                    e.logger.warn('webrtc-rtc::', e.targetUid, 'on remove stream:', t.stream);
                  })),
              (window.myRtc = r);
          }
        }),
        (u.doSendIce = function() {
          if (this.sdpAnswer && !this.iceCompleted && this.iceOffer.length !== 0) {
            const e = this.iceOffer.shift();
            this.emit('iceCandidate', { uid: this.targetUid, ice: e }), this.doSendIce();
          }
        }),
        (u.onIceCandidate = function(e) {
          if (e.candidate) {
            if (/ tcp /gi.test(e.candidate.candidate)) return;
            return (
              this.logger.log(
                'webrtc-rtc::',
                this.targetUid,
                'gather candidate',
                e.candidate.candidate
              ),
              this.iceOffer.push(e.candidate),
              void this.offerCount++
            );
          }
          this.logger.log('webrtc-rtc::', this.targetUid, 'onicecandidate end'), this.doSendIce();
        }),
        (u.onIceStateChange = function() {
          this.rtcConnection &&
            (this.rtcConnection.iceConnectionState === 'connected' &&
              this.iceCompleted &&
              this.setProgress(!1),
            this.emit('icestatechange', {
              rtc: this,
              state: this.rtcConnection.iceConnectionState,
            }));
        }),
        (u.onNegotiationneeded = function(e) {
          this.emit('negotiationneeded', e);
        }),
        (u.getReceivers = function() {
          return this.rtcConnection.getReceivers();
        }),
        (u.getRemoteStreams = function() {
          return this.rtcConnection.getRemoteStreams();
        }),
        (u.onRemoteStream = function(e) {
          if (this.targetUid !== this.imInfo.uid) {
            if (
              (this.logger.log('webrtc-rtc::', this.targetUid, 'on remote stream', e),
              !e.stream || (e.stream && e.stream.id === 'default'))
            )
              return this.logger.log('webrtc-rtc::remote stream is default stream, do nothing');
            this.emit('getRemoteStream', { uid: this.targetUid, stream: e.stream });
          }
        }),
        (u.onRemoteTrack = function(e) {
          if (this.targetUid !== this.imInfo.uid) {
            const t = e.streams[0];
            t && this.emit('getRemoteStream', { uid: this.targetUid, stream: t, track: e.track });
          }
        }),
        (u.getIceConnectionState = function() {
          if (this.rtcConnection) return this.rtcConnection.iceConnectionState;
        }),
        (u.checkNegotiation = function() {
          return !(this.oldTracks === 0 && this.newTracks === 0);
        }),
        (u.updateStream = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          a.RtcUtil.updateMediaStream({
            peer: this.rtcConnection,
            currStream: this.currStream,
            streams: t,
          }).then(t => {
            e.currStream || (e.currStream = t);
          });
        }),
        (u.removeTrack = function(e) {
          a.RtcUtil.removeTrack({
            peer: this.rtcConnection,
            currStream: this.currStream,
            tracks: e,
          });
        }),
        (u.createAnswer = function(e) {
          const t = this;
          return (
            this.setProgress(!0),
            this.rtcConnection
              .createAnswer()
              .then(e => {
                return (
                  (e.sdp = a.SdpUtil.maybePreferVideoReceiveCodec(e.sdp, {
                    videoRecvCodec: 'H264',
                  })),
                  (e = a.RtcUtil.formatSdp({
                    offerOrAnswer: e,
                    uid: t.imInfo.uid,
                    cid: t.imInfo.cid,
                    stream: t.currStream,
                    highAudio: t.sessionConfig.highAudio,
                    stero: t.sessionConfig.stero,
                    targetUid: t.targetUid,
                  }))
                );
              })
              .catch(e => {
                t.logger.error('webrtc-rtc::', e);
              })
          );
        }),
        (u.createOffer = function() {
          const e = this;
          return (
            this.setProgress(!0),
            a.RtcUtil.createOffer(this.rtcConnection)
              .then(t => {
                return (
                  e.logger.log(
                    '\r\nwebrtc-rtc::',
                    '---------------netease: activity start----------------\r\n'
                  ),
                  e.resetStatus(),
                  (t.sdp = a.SdpUtil.maybePreferVideoReceiveCodec(t.sdp, {
                    videoRecvCodec: 'H264',
                  })),
                  e.logger.log(
                    'webrtc-rtc::this.currentStream',
                    e.currStream && e.currStream.getTracks()
                  ),
                  (t = a.RtcUtil.formatSdp({
                    offerOrAnswer: t,
                    uid: e.imInfo.uid,
                    cid: e.imInfo.cid,
                    stream: e.currStream,
                    highAudio: e.sessionConfig.highAudio,
                    stero: e.sessionConfig.stero,
                    targetUid: e.targetUid,
                  })),
                  Promise.resolve(t)
                );
              })
              .catch(t => {
                return e.logger.error('webrtc-rtc::createOffer', t), Promise.reject(t);
              })
          );
        }),
        (u.getLocalSdp = function() {
          return this.rtcConnection.localDescription;
        }),
        (u.getRemoteSdp = function() {
          return this.rtcConnection.remoteDescription;
        }),
        (u.checkMediaStatus = function(e, t, r) {
          return a.RtcUtil.checkMediaStatus(e, t, r);
        }),
        (u.logSdp = function() {
          this.rtcConnection.remoteDescription &&
            console.log(
              'webrtc-rtc::remoteDescription after set',
              this.rtcConnection.remoteDescription.sdp
            ),
            this.rtcConnection.currentRemoteDescription &&
              console.log(
                'webrtc-rtc::currentRemoteDescription after set',
                this.rtcConnection.currentRemoteDescription.sdp
              );
        }),
        (u.setRemoteDescription = function(e, t) {
          const r = this;
          e.type === 'offer' &&
            this.logger.log(
              '\r\nwebrtc-rtc::',
              '---------------netease: activity start----------------\r\n'
            ),
            this.setProgress(e.type === 'offer'),
            this.logger.log(
              `webrtc-rtc::${this.targetUid} get remote sdp ${t} --\x3e ${e.type}\n`,
              e.sdp
            );
          const n = { sdp: e.sdp, type: e.type };
          if (e.type === 'offer' && !this.sdpAnswer) return Promise.reject();
          (n.sdp = a.SdpUtil.maybePreferVideoSendCodec(n.sdp, { videoRecvCodec: 'H264' })),
            (n.sdp = a.RtcUtil.formatSdpRemote(n.sdp, this.sdpOffer)),
            a.RtcUtil.parse(n.sdp),
            (this.sdpAnswer = e.type === 'answer' ? n : null);
          const i = this.rtcConnection;
          return i
            .setRemoteDescription(n)
            .then(() => {
              if (e.type === 'answer') {
                if (r.iceCompleted) return void r.emit('iceCompleted');
                r.doSendIce();
              }
              return Promise.resolve();
            })
            .catch(e => {
              return (
                console.error('webrtc-rtc::', i.uid, ' setRemoteDescription error: ', e),
                Promise.reject(e)
              );
            });
        }),
        (u.setLocalDescription = function(e, t) {
          const r = this;
          return (
            (this.sdpOffer = e),
            this.logger.log(`webrtc-rtc::${this.targetUid} set local sdp ${e.type}\n`, e.sdp),
            this.rtcConnection
              .setLocalDescription(e)
              .then(() => {
                return (
                  (e.sdp = a.RtcUtil.setMediaBitrates({ sdp: e.sdp })),
                  e.type === 'answer'
                    ? ((r.sdpAnswer = e),
                      r.iceCompleted && r.emit('iceCompleted'),
                      r.setProgress(!1))
                    : (r.sdpAnswer = null),
                  Promise.resolve(e)
                );
              })
              .catch(t => {
                return r.logger.warn(t), Promise.resolve(e);
              })
          );
        }),
        (u.addRemoteIceCandidate = function(e) {
          const t = this;
          this.logger.log(`webrtc-rtc::${this.targetUid} set remote ICE `, e),
            this.rtcConnection
              .addIceCandidate(new RTCIceCandidate(e))
              .then(() => {
                t.iceAnswer.push(e),
                  t.iceAnswer.length === t.offerCount &&
                    ((t.iceCompleted = !0),
                    (t.iceAnswer = []),
                    (t.offerCount = 0),
                    t.emit('iceCompleted'));
              })
              .catch(e => {
                t.logger.warn(e);
              });
        }),
        (u.close = function() {
          this.logger.log('webrtc-rtc::close rtc ', this.targetUid, this.rtcConnection),
            this.rtcConnection && this.rtcConnection.close(),
            (this.rtcConnection = null);
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = s(r(14));

      const i = s(r(48));

      const o = s(r(22));

      const a = s(r(21));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const c = r(15);

      const u = r(158);

      let d = {};

      const l = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.isRemote = !!e.isRemote),
            (r.constraint = e.constraint || {}),
            (r.stream = e.stream),
            (r.audioStream = e.stream),
            (r.container = e.container),
            (r.uid = e.uid || ''),
            (r.poster = e.poster || ''),
            (r.isAudio = e.type === 'audio'),
            r.initNode(),
            (r.videoRatioIntervalId = null),
            r.startVideoRatioMonitor(),
            r
          );
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(
            t,
            [
              {
                key: 'initNode',
                value() {
                  this.node ||
                    (this.isAudio ? this.initAudioNode() : this.initVideoNode(),
                    this.isRemote && !this.isAudio && this.initVideoEvent());
                },
              },
              {
                key: 'initAudioNode',
                value() {
                  (this.audioStream = this.stream),
                    /safari/gi.test(c.name) ||
                      ((this.webAudio = new u({
                        stream: this.audioStream,
                        uid: this.uid,
                        isAnalyze: !0,
                        isRemote: this.isRemote,
                      })),
                      (this.stream = this.webAudio.outputStream)),
                    (this.node = document.createElement('audio')),
                    (this.node.dataset.uid = this.uid);
                },
              },
              {
                key: 'initVideoNode',
                value() {
                  const e = this;

                  const t = document.createElement('div');
                  (t.style.overflow = 'hidden'),
                    (t.style.position = 'relative'),
                    (t.style.width = '400px'),
                    (t.style.height = '400px'),
                    (t.style.display = 'none');
                  const r = document.createElement('video');
                  r.setAttribute('x-webkit-airplay', 'x-webkit-airplay'),
                    r.setAttribute('playsinline', 'playsinline'),
                    r.setAttribute('webkit-playsinline', 'webkit-playsinline'),
                    this.poster && (r.poster = this.poster),
                    (r.preload = 'auto'),
                    (r.dataset.uid = this.uid),
                    (r.autoplay = 'autoplay'),
                    (r.style.position = 'absolute'),
                    (r.style.left = '50%'),
                    (r.style.top = '50%'),
                    (r.style.transform = 'translate(-50%,-50%)'),
                    t.appendChild(r),
                    (this.node = r),
                    (this.videoContainer = t),
                    setTimeout(() => {
                      e.videoContainer && (e.videoContainer.style.display = 'inline-block');
                    }, 1e3),
                    (t.style.color = '#fff');
                  const n = document.createElement('p');
                  (n.textContent = this.uid), (n.zIndex = 1), t.appendChild(n);
                },
              },
              { key: 'initVideoEvent', value() {} },
              {
                key: 'setMuted',
                value(e) {
                  (this.muted = !!e),
                    this.node && ((this.node.muted = !!e), this.setPlayVolume(), e || this.show());
                },
              },
              {
                key: 'getMuted',
                value() {
                  return !!this.muted;
                },
              },
              {
                key: 'setPlayVolume',
                value(e) {
                  let t = void 0;
                  e
                    ? (e.constructor === Number && (t = e),
                      e.constructor === Object && (t = void 0 === e.volume ? 1 : e.volume))
                    : (t = this.volume),
                    (this.volume = t),
                    this.getMuted() ||
                      (this.node && ((t = void 0 === t || t > 1 ? 1 : t), (this.node.volume = t)));
                },
              },
              {
                key: 'getPlayVolume',
                value() {
                  return void 0 !== this.volume ? this.volume : 1;
                },
              },
              {
                key: 'setGain',
                value(e) {
                  if (this.stream && !this.isRemote) {
                    if ((void 0 === e && (e = 1), this.gainOff)) return (this.gain = e), e;
                    this.webAudio && this.webAudio.setGain(e), (this.gain = e);
                  }
                },
              },
              {
                key: 'getGain',
                value() {
                  return void 0 !== this.gain ? this.gain : 1;
                },
              },
              {
                key: 'setGainOff',
                value() {
                  this.stream &&
                    !this.isRemote &&
                    (this.webAudio && this.webAudio.setGain(0), (this.gainOff = !0));
                },
              },
              {
                key: 'setGainOn',
                value() {
                  this.stream &&
                    !this.isRemote &&
                    (this.webAudio && this.webAudio.setGain(void 0 !== this.gain ? this.gain : 1),
                    (this.gainOff = !1));
                },
              },
              {
                key: 'show',
                value(e, t) {
                  if (this.node) {
                    if (this.isAudio)
                      return (
                        (this.node.srcObject = this.audioStream),
                        this.muted && this.setMuted(this.muted),
                        this.play(),
                        void (this.enable = !0)
                      );
                    this.poster = void 0 === t ? this.poster : t;
                    const r = this.videoContainer;
                    (e = this.container = e || this.container),
                      console.log('node container', r, e),
                      r &&
                        e &&
                        ((r.parentNode && r.parentNode === r) ||
                          (r.parentNode && r.parentNode.removeChild(r), e.appendChild(r)),
                        this.node.srcObject || (this.node.srcObject = this.stream),
                        this.poster && (this.node.poster = this.poster),
                        this.play(),
                        this.resizeOptions && this.resize(),
                        (this.enable = !0));
                  }
                },
              },
              {
                key: 'hide',
                value() {
                  const e = this.videoContainer;
                  e &&
                    (this.node.paused || this.node.pause(),
                    e.parentNode && e.parentNode.removeChild(e),
                    (this.enable = !1));
                },
              },
              {
                key: 'addAudioStream',
                value(e) {
                  e &&
                    this.webAudio &&
                    (this.webAudio.addStream(e),
                    (this.stream = this.webAudio.outputStream),
                    d.log('本地添加音频流:', e));
                },
              },
              {
                key: 'updateStream',
                value(e) {
                  const r = this.node;
                  if (r && e) {
                    if (this.isAudio)
                      return (
                        this.webAudio &&
                          (this.webAudio.updateStream(e),
                          (this.stream = this.webAudio.outputStream)),
                        d.log('webrtc::mediaStream::updateAudioTrack', e.getTracks()),
                        this.audioStream && t.destroyMedia(this.audioStream),
                        void (this.audioStream = e)
                      );
                    d.log('webrtc::mediaStream::updateVideoTrack', e.getTracks()),
                      t.destroyMedia(this.stream),
                      (this.stream = e),
                      (r.srcObject = this.stream);
                  }
                },
              },
              {
                key: 'isShown',
                value() {
                  return this.node && this.node.srcObject && this.enable;
                },
              },
              {
                key: 'removeTrack',
                value(e) {
                  const t = this.stream;
                  t && t.removeTrack(e);
                },
              },
              {
                key: 'resize',
                value(e) {
                  if (
                    ((e && e.width && e.height) || this.resizeOptions) &&
                    ((this.resizeOptions = e || this.resizeOptions),
                    ((e = this.resizeOptions).cut = void 0 === e.cut || e.cut),
                    this.node && this.videoContainer && !this.isAudio)
                  ) {
                    if (
                      ((this.videoContainer.style.width = `${e.width}px`),
                      (this.videoContainer.style.height = `${e.height}px`),
                      !e.cut)
                    )
                      return (
                        (this.node.style.height = '100%'), void (this.node.style.width = '100%')
                      );
                    if (this.node.videoWidth && this.node.videoHeight)
                      this.node.videoWidth / this.node.videoHeight > e.width / e.height
                        ? ((this.node.style.height = '100%'), (this.node.style.width = 'auto'))
                        : ((this.node.style.width = '100%'), (this.node.style.height = 'auto'));
                    else (this.node.width = e.width), (this.node.height = e.height);
                  }
                },
              },
              {
                key: 'startVideoRatioMonitor',
                value() {
                  const e = this;
                  this.isAudio ||
                    (this.videoRatioIntervalId === null &&
                      ((this.preVideoWidth = this.node.videoWidth),
                      (this.preVideoHeight = this.node.videoHeight),
                      (this.videoRatioIntervalId = setInterval(() => {
                        e.resizeOptions &&
                          ((e.preVideoWidth === e.node.videoWidth &&
                            e.preVideoHeight === e.node.videoHeight) ||
                            (e.resize(e.resizeOptions),
                            (e.preVideoWidth = e.node.videoWidth),
                            (e.preVideoHeight = e.node.videoHeight)));
                      }, 1e3))));
                },
              },
              {
                key: 'getAudioVolume',
                value() {
                  return (this.webAudio && this.webAudio.getVolumeData()) || 0;
                },
              },
              {
                key: 'getMetaWidth',
                value(e) {
                  if (this.node && !this.isAudio) return this.node.videoWidth;
                },
              },
              {
                key: 'getMetaHeight',
                value(e) {
                  if (this.node && !this.isAudio) return this.node.videoHeight;
                },
              },
              {
                key: 'resume',
                value() {
                  this.play();
                },
              },
              {
                key: 'pause',
                value() {
                  this.node.pause();
                },
              },
              {
                key: 'play',
                value() {
                  const e = this.node;
                  e.readyState !== 4 && e.load(), e.played.length !== 0 && e.pause();
                  const t = e.play();
                  void 0 !== t &&
                    t
                      .catch(e => {
                        d.warn(e);
                      })
                      .then(() => {
                        d.log(
                          'playing-。-',
                          e,
                          e.parentNode,
                          e.srcObject && e.srcObject.getTracks()
                        );
                      });
                },
              },
              {
                key: 'stopDevice',
                value() {
                  this.isAudio
                    ? (d.log('销毁音频流', this.uid, this.audioStream),
                      t.destroyMedia(this.audioStream),
                      (this.audioStream = null))
                    : (t.destroyMedia(this.stream), (this.stream = null));
                },
              },
              {
                key: 'destroy',
                value() {
                  this.hide(),
                    this.node && (this.node.pause(), (this.node = null)),
                    (this.videoContainer = null),
                    this.stream &&
                      (t.destroyMedia(this.audioStream),
                      this.isRemote || t.destroyMedia(this.stream),
                      (this.stream = null),
                      (this.audioStream = null),
                      this.videoRatioIntervalId !== null &&
                        (clearInterval(this.videoRatioIntervalId),
                        (this.videoRatioIntervalId = null)),
                      this.webAudio &&
                        this.webAudio.context &&
                        this.webAudio.destroy &&
                        this.webAudio.destroy());
                },
              },
            ],
            [
              {
                key: 'init',
                value(e) {
                  d = e || window.console;
                },
              },
              {
                key: 'destroyMedia',
                value(e) {
                  const t = this;
                  if (e) {
                    const r = e.getTracks();
                    r &&
                      r.length !== 0 &&
                      r.forEach(r => {
                        d.log('destroy track', t.uid || e.id, r), r.stop(), e.removeTrack(r);
                      });
                  }
                },
              },
              {
                key: 'getLocalStream',
                value() {
                  const e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { audio: !0, video: !0 };

                  const r = e.audio ? 'audio' : '';
                  return (
                    /safari/gi.test(c.name) && e.video,
                    console.log('constraint', e),
                    navigator.mediaDevices
                      .getUserMedia(e)
                      .then(n => {
                        return r === 'audio'
                          ? n
                          : new t({ stream: n, type: r, isRemote: !1, constraint: e });
                      })
                      .catch(t => {
                        const r = t.constructor === Object ? t.name : JSON.stringify(t);
                        return console.error(e, t), Promise.reject(r);
                      })
                  );
                },
              },
            ]
          ),
          t
        );
      })(r(25));
      (t.default = l), (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = {
        framesEncoded: 1,
        qpSum: 1,
        audioOutputLevel: 1,
        googDecodingCTN: 1,
        googDecodingNormal: 1,
        googAvailableSendBandwidth: 1,
        googTargetEncBitrate: 1,
        googActualEncBitrate: 1,
        googRetransmitBitrate: 1,
        googTransmitBitrate: 1,
      };

      const i = { googCaptureStartNtpTimeMs: 1 };
      (t.default = {
        getStats(e) {
          const t = this;
          if (e && !/(failed|closed)/gi.test(e.iceConnectionState))
            return navigator.mozGetUserMedia
              ? this.getStatsFirefox(e)
              : new Promise((r, n) => {
                  e.getStats(n => {
                    let i = {};

                    const o = [];

                    const a = n.result();
                    for (const s in (a.forEach(e => {
                      const t = {};
                      e.names().forEach(r => {
                        t[r] = e.stat(r);
                      }),
                        (t.id = e.id),
                        (t.type = e.type),
                        (t.timestamp = e.timestamp),
                        (i[t.id] = t);
                    }),
                    i))
                      i[s].networkType &&
                        o.indexOf(i[s].networkType) === -1 &&
                        o.push(i[s].networkType);
                    (e.lastStats = e.lastStats || {}), (i = t.format(e, i, o)), r(i);
                  });
                });
        },
        getStatsFirefox(e) {
          const t = this;
          return e.getStats(null).then(r => {
            return (e.lastStats = e.lastStats || {}), (r = t.format(e, r)), Promise.resolve(r);
          });
        },
        format(e, t, r) {
          return !e || /(failed|closed)/gi.test(e.iceConnectionState)
            ? {}
            : (t = e.uid - e.targetUid == 0 ? this.ssrcLocal(e, t, r) : this.ssrcRemote(e, t, r));
        },
        formatSSRC(e, t, r, n, i) {
          return this[navigator.mozGetUserMedia ? '_formatSSRC_F' : '_formatSSRC_G'](e, t, r, n, i);
        },
        _formatSSRC_G(e, t, r, n, i) {
          const o = this;

          const a = {};
          return (
            Object.values(t).map(t => {
              if (
                (n !== 'recv' || /^ssrc_/gi.test(t.id)) &&
                (n !== 'send' || /^(bweforvideo|ssrc_)/gi.test(t.id))
              ) {
                t = o.formatData(t);
                const r = new RegExp(`ssrc_(\\d+)_${n}`);

                const s = t.id.match(r);

                const c = t.id;
                (a[c] = t),
                  (t.network = i && i[0]),
                  s &&
                    s[1] &&
                    (n !== 'recv' || e.uid !== 0
                      ? ((t.id = `ssrc_${e.uid}_${n}_${n === 'recv' ? e.targetUid : 0}_${
                          t.mediaType
                        }`),
                        (t = o.computeData(e, t)),
                        (a[t.id] = t),
                        delete a[c])
                      : delete a[c]);
              }
            }),
            a
          );
        },
        _formatSSRC_F(e, t, r, n) {
          const i = this;

          const o = {};

          const a = new RegExp(`^${n === 'send' ? 'outbound' : 'inbound'}_`, 'i');
          return (
            Object.values(t).map(t => {
              if (a.test(t.id)) {
                const r = t.id;
                (t.id = t.id.replace(/\d+/, `${e.uid}_${n}_${n === 'recv' ? e.targetUid : 0}`)),
                  (t = i.computeData(e, t)),
                  (o[t.id] = t),
                  delete o[r];
              }
            }),
            o
          );
        },
        formatData(e) {
          return (
            Object.keys(e).map(t => {
              n[t] && (e[t] = (e[t] / 1024).toFixed(2)),
                i[t] && (e[t] = (e[t] / 1024 / 1024).toFixed(2));
            }),
            e
          );
        },
        computeData(e, t) {
          const r = { peer: e, ssrcKey: t.id, currentItem: t };
          return (
            t.bytesSent &&
              (t.bitsSentPerSecond = this.getLastStats(
                Object.assign({}, r, { valueKey: 'bytesSent' })
              )),
            t.packetsSent &&
              (t.packetsSentPerSecond = this.getLastStats(
                Object.assign({}, r, { valueKey: 'packetsSent' })
              )),
            t.bytesReceived &&
              (t.bitsReceivedPerSecond = this.getLastStats(
                Object.assign({}, r, { valueKey: 'bytesReceived' })
              )),
            t.packetsReceived &&
              (t.packetsReceivedPerSecond = this.getLastStats(
                Object.assign({}, r, { valueKey: 'packetsReceived' })
              )),
            t
          );
        },
        ssrcLocal(e, t, r) {
          const n = e.localDescription;
          return this.formatSSRC(e, t, n.sdp, 'send', r);
        },
        ssrcRemote(e, t, r) {
          const n = e.remoteDescription;
          return this.formatSSRC(e, t, n.sdp, 'recv', r);
        },
        getLastStats() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.peer;

          const r = e.ssrcKey;

          const n = e.valueKey;

          const i = e.currentItem;

          let o = null;
          return (
            (o = t.lastStats[r] && t.lastStats[r][n] ? i[n] - t.lastStats[r][n] : i[n]),
            (o = /bytes/gi.test(n)
              ? ((8 * o * 1e3) / t.interval / 1024).toFixed(2)
              : (1e3 * o) / t.interval),
            (t.lastStats[r] = i[n]),
            o
          );
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = l(r(112));

      const i = l(r(111));

      const o = l(r(14));

      const a = l(r(48));

      const s = l(r(22));

      const c = l(r(21));

      const u = l(r(25));

      const d = l(r(232));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const f = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          );
        }
        return (
          (0, c.default)(t, e),
          (0, a.default)(t, [
            {
              key: 'reset',
              value() {
                (this.times = 0),
                  this.timer && clearInterval(this.timer),
                  (this.timer = null),
                  (this.interval = 0),
                  (this.controller = null);
              },
            },
            {
              key: 'start',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                const t = e.controller;

                const r = e.interval;

                const n = void 0 === r ? 1 : r;
                (this.controller = t),
                  (this.interval = n),
                  (this.timer = setInterval(this.getStats.bind(this), 1e3 * n));
              },
            },
            {
              key: 'stop',
              value() {
                this.reset();
              },
            },
            {
              key: 'getStats',
              value: (function() {
                const e = (0, i.default)(
                  n.default.mark(function e() {
                    let t;
                    return n.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (t = {}), (e.next = 3), this.getLocalStats();
                            case 3:
                              return (t.self = e.sent), (e.next = 6), this.getRemoteStats();
                            case 6:
                              (t.other = e.sent),
                                Object.keys(t.other).map(e => {
                                  t.self = Object.assign(t.self, t.other[e]);
                                }),
                                (this.times = (this.times || 0) + 1),
                                this.emit('stats', t.self, this.times);
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'getLocalStats',
              value: (function() {
                const e = (0, i.default)(
                  n.default.mark(function e() {
                    let t;
                    return n.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((t = this.controller) && t.rtc) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt('return', {});
                            case 3:
                              return (
                                (t.rtc.rtcConnection.interval = this.interval),
                                (e.next = 6),
                                d.default.getStats(t.rtc.rtcConnection)
                              );
                            case 6:
                              return e.abrupt('return', e.sent);
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'getRemoteStats',
              value: (function() {
                const e = (0, i.default)(
                  n.default.mark(function e() {
                    let t;

                    let r;

                    let o;

                    let a;

                    let s;

                    let c;

                    let u;

                    let l;

                    let f;

                    const p = this;
                    return n.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.controller && this.controller.remoteNode) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return', {});
                            case 2:
                              (t = {}),
                                (r = this.controller.remoteNode),
                                (o = Object.keys(r).map(
                                  (function() {
                                    const e = (0, i.default)(
                                      n.default.mark(function e(i) {
                                        return n.default.wrap(
                                          e => {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (!r[i].rtc) {
                                                    e.next = 6;
                                                    break;
                                                  }
                                                  return (
                                                    (r[i].rtc.rtcConnection.interval = p.interval),
                                                    (e.next = 4),
                                                    d.default.getStats(r[i].rtc.rtcConnection)
                                                  );
                                                case 4:
                                                  return (t[i] = e.sent), e.abrupt('return', t[i]);
                                                case 6:
                                                case 'end':
                                                  return e.stop();
                                              }
                                          },
                                          e,
                                          p
                                        );
                                      })
                                    );
                                    return function(t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )),
                                (a = !0),
                                (s = !1),
                                (c = void 0),
                                (e.prev = 8),
                                (u = o[Symbol.iterator]());
                            case 10:
                              if ((a = (l = u.next()).done)) {
                                e.next = 17;
                                break;
                              }
                              return (f = l.value), (e.next = 14), f;
                            case 14:
                              (a = !0), (e.next = 10);
                              break;
                            case 17:
                              e.next = 23;
                              break;
                            case 19:
                              (e.prev = 19), (e.t0 = e.catch(8)), (s = !0), (c = e.t0);
                            case 23:
                              (e.prev = 23), (e.prev = 24), !a && u.return && u.return();
                            case 26:
                              if (((e.prev = 26), !s)) {
                                e.next = 29;
                                break;
                              }
                              throw c;
                            case 29:
                              return e.finish(26);
                            case 30:
                              return e.finish(23);
                            case 31:
                              return e.abrupt('return', t);
                            case 32:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[8, 19, 23, 31], [24, , 26, 30]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          t
        );
      })(u.default);
      (t.default = f), (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = s(r(14));

      const i = s(r(48));

      const o = s(r(22));

      const a = s(r(21));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const c = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.peer = e.peer),
            (r.mediaStreamTrack = e.mediaStreamTrack),
            (r.interval = 5e3),
            r.init(),
            r
          );
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'init',
              value() {
                this.reset(),
                  this.initStatsResult(),
                  this.initStatsParser(),
                  this.initStatsParserFn();
              },
            },
            {
              key: 'reset',
              value() {
                (this.nomore = !1),
                  (this.AUDIO_codecs = ['opus', 'isac', 'ilbc']),
                  (this.VIDEO_codecs = ['vp9', 'vp8', 'h264']),
                  (this.SSRC = { audio: { send: [], recv: [] }, video: { send: [], recv: [] } }),
                  (this.LOCAL_candidateType = []),
                  (this.LOCAL_transport = []),
                  (this.LOCAL_ipAddress = []),
                  (this.LOCAL_networkType = []),
                  (this.REMOTE_candidateType = []),
                  (this.REMOTE_transport = []),
                  (this.REMOTE_ipAddress = []),
                  (this.REMOTE_networkType = []);
              },
            },
            {
              key: 'initStatsResult',
              value() {
                const e = ((navigator.connection || {}).type || 'unknown').toString().toLowerCase();
                this.statsResult = {
                  encryption: 'sha-256',
                  audio: {
                    send: { tracks: [], codecs: [], availableBandwidth: 0, streams: 0 },
                    recv: { tracks: [], codecs: [], availableBandwidth: 0, streams: 0 },
                    bytesSent: 0,
                    bytesReceived: 0,
                  },
                  video: {
                    send: { tracks: [], codecs: [], availableBandwidth: 0, streams: 0 },
                    recv: { tracks: [], codecs: [], availableBandwidth: 0, streams: 0 },
                    bytesSent: 0,
                    bytesReceived: 0,
                  },
                  results: {},
                  connectionType: {
                    systemNetworkType: e,
                    systemIpAddress: '192.168.1.2',
                    local: { candidateType: [], transport: [], ipAddress: [], networkType: [] },
                    remote: { candidateType: [], transport: [], ipAddress: [], networkType: [] },
                  },
                  resolutions: { send: { width: 0, height: 0 }, recv: { width: 0, height: 0 } },
                  internal: {
                    audio: { send: {}, recv: {} },
                    video: { send: {}, recv: {} },
                    candidates: {},
                  },
                  nomore: (function(e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function() {
                        return e.toString();
                      }),
                      t
                    );
                  })(() => {
                    nomore = !0;
                  }),
                };
              },
            },
            {
              key: 'initStatsParser',
              value() {
                const e = this;
                this.statsParser = {
                  checkIfOfferer(t) {
                    t.type === 'googLibjingleSession' &&
                      (e.statsResult.isOfferer = t.googInitiator);
                  },
                };
              },
            },
            {
              key: 'initStatsParserFn',
              value() {
                const e = this.AUDIO_codecs;

                const t = this.VIDEO_codecs;

                const r = this.SSRC;

                const n = this.statsParser;

                const i = this.statsResult;

                const o = this.LOCAL_candidateType;

                const a = this.LOCAL_transport;

                const s = this.LOCAL_ipAddress;

                const c = this.LOCAL_networkType;

                const u = this.REMOTE_candidateType;

                const d = this.REMOTE_transport;

                const l = this.REMOTE_ipAddress;

                const f = this.REMOTE_networkType;
                (n.datachannel = function(e) {
                  e.type === 'datachannel' && (i.datachannel = { state: e.state });
                }),
                  (n.googCertificate = function(e) {
                    e.type === 'googCertificate' && (i.encryption = e.googFingerprintAlgorithm);
                  }),
                  (n.checkAudioTracks = function(t) {
                    if (
                      t.googCodecName &&
                      t.mediaType === 'audio' &&
                      e.indexOf(t.googCodecName.toLowerCase()) !== -1
                    ) {
                      const r = t.id.split('_').pop();
                      if (
                        (i.audio[r].codecs.indexOf(t.googCodecName) === -1 &&
                          i.audio[r].codecs.push(t.googCodecName),
                        t.bytesSent)
                      ) {
                        var n = 0;
                        if (t.bytesSent) {
                          i.internal.audio[r].prevBytesSent ||
                            (i.internal.audio[r].prevBytesSent = t.bytesSent);
                          var o = t.bytesSent - i.internal.audio[r].prevBytesSent;
                          (i.internal.audio[r].prevBytesSent = t.bytesSent), (n = o / 1024);
                        }
                        i.audio[r].availableBandwidth = n.toFixed(1);
                      }
                      if (t.bytesReceived) {
                        n = 0;
                        if (t.bytesReceived) {
                          i.internal.audio[r].prevBytesReceived ||
                            (i.internal.audio[r].prevBytesReceived = t.bytesReceived);
                          o = t.bytesReceived - i.internal.audio[r].prevBytesReceived;
                          (i.internal.audio[r].prevBytesReceived = t.bytesReceived), (n = o / 1024);
                        }
                        (t.availableBandwidth = n.toFixed(1)),
                          (i.audio[r].availableBandwidth = t.availableBandwidth);
                      }
                      i.audio[r].tracks.indexOf(t.googTrackId) === -1 &&
                        i.audio[r].tracks.push(t.googTrackId);
                    }
                  }),
                  (n.checkVideoTracks = function(e) {
                    if (
                      e.googCodecName &&
                      e.mediaType === 'video' &&
                      t.indexOf(e.googCodecName.toLowerCase()) !== -1
                    ) {
                      const r = e.id.split('_').pop();
                      if (
                        (i.video[r].codecs.indexOf(e.googCodecName) === -1 &&
                          i.video[r].codecs.push(e.googCodecName),
                        e.bytesSent)
                      ) {
                        var n = 0;
                        i.internal.video[r].prevBytesSent ||
                          (i.internal.video[r].prevBytesSent = e.bytesSent);
                        var o = e.bytesSent - i.internal.video[r].prevBytesSent;
                        (i.internal.video[r].prevBytesSent = e.bytesSent), (n = o / 1024);
                      }
                      if (e.bytesReceived) {
                        n = 0;
                        i.internal.video[r].prevBytesReceived ||
                          (i.internal.video[r].prevBytesReceived = e.bytesReceived);
                        o = e.bytesReceived - i.internal.video[r].prevBytesReceived;
                        (i.internal.video[r].prevBytesReceived = e.bytesReceived), (n = o / 1024);
                      }
                      (e.availableBandwidth = n.toFixed(1)),
                        (i.video[r].availableBandwidth = e.availableBandwidth),
                        e.googFrameHeightReceived &&
                          e.googFrameWidthReceived &&
                          ((i.resolutions[r].width = e.googFrameWidthReceived),
                          (i.resolutions[r].height = e.googFrameHeightReceived)),
                        e.googFrameHeightSent &&
                          e.googFrameWidthSent &&
                          ((i.resolutions[r].width = e.googFrameWidthSent),
                          (i.resolutions[r].height = e.googFrameHeightSent)),
                        i.video[r].tracks.indexOf(e.googTrackId) === -1 &&
                          i.video[r].tracks.push(e.googTrackId);
                    }
                  }),
                  (n.bweforvideo = function(e) {
                    e.type === 'VideoBwe' &&
                      (i.video.bandwidth = {
                        googActualEncBitrate: e.googActualEncBitrate,
                        googAvailableSendBandwidth: e.googAvailableSendBandwidth,
                        googAvailableReceiveBandwidth: e.googAvailableReceiveBandwidth,
                        googRetransmitBitrate: e.googRetransmitBitrate,
                        googTargetEncBitrate: e.googTargetEncBitrate,
                        googBucketDelay: e.googBucketDelay,
                        googTransmitBitrate: e.googTransmitBitrate,
                      });
                  }),
                  (n.googCandidatePair = function(e) {
                    if (
                      e.type === 'googCandidatePair' &&
                      ((i.connectionType.bitsSentPerSecond =
                        (8 * (e.bytesSent - (i.connectionType.prevBytesSent || 0))) / 1024 / 2),
                      (i.connectionType.bitsReceivedPerSecond =
                        (8 * (e.bytesReceived - (i.connectionType.prevBytesReceived || 0))) /
                        1024 /
                        2),
                      (i.connectionType.bitsSentPerSecond = i.connectionType.bitsSentPerSecond.toFixed(
                        1
                      )),
                      (i.connectionType.bitsReceivedPerSecond = i.connectionType.bitsReceivedPerSecond.toFixed(
                        1
                      )),
                      (i.connectionType.prevBytesSent = e.bytesSent),
                      (i.connectionType.prevBytesReceived = e.bytesReceived),
                      e.googActiveConnection === 'true')
                    ) {
                      (i.connectionType.local.ipAddress = e.googLocalAddress),
                        (i.connectionType.remote.ipAddress = e.googRemoteAddress),
                        (i.connectionType.transport = e.googTransportType);
                      const t = i.internal.candidates[e.localCandidateId];
                      t && t.ipAddress && (i.connectionType.systemIpAddress = t.ipAddress);
                      const r = i.internal.candidates[e.remoteCandidateId];
                      r && r.ipAddress && (i.connectionType.systemIpAddress = r.ipAddress);
                    }
                  }),
                  (n.localcandidate = function(e) {
                    e.type === 'localcandidate' &&
                      (e.candidateType &&
                        o.indexOf(e.candidateType) === -1 &&
                        o.push(e.candidateType),
                      e.transport && a.indexOf(e.transport) === -1 && a.push(e.transport),
                      e.ipAddress &&
                        s.indexOf(`${e.ipAddress}:${e.portNumber}`) === -1 &&
                        s.push(`${e.ipAddress}:${e.portNumber}`),
                      e.networkType && c.indexOf(e.networkType) === -1 && c.push(e.networkType),
                      (i.internal.candidates[e.id] = {
                        candidateType: o,
                        ipAddress: s,
                        portNumber: e.portNumber,
                        networkType: c,
                        priority: e.priority,
                        transport: a,
                        timestamp: e.timestamp,
                        id: e.id,
                        type: e.type,
                      }),
                      (i.connectionType.local.candidateType = o),
                      (i.connectionType.local.ipAddress = s),
                      (i.connectionType.local.networkType = c),
                      (i.connectionType.local.transport = a));
                  }),
                  (n.remotecandidate = function(e) {
                    e.type === 'remotecandidate' &&
                      (e.candidateType &&
                        u.indexOf(e.candidateType) === -1 &&
                        u.push(e.candidateType),
                      e.transport && d.indexOf(e.transport) === -1 && d.push(e.transport),
                      e.ipAddress &&
                        l.indexOf(`${e.ipAddress}:${e.portNumber}`) === -1 &&
                        l.push(`${e.ipAddress}:${e.portNumber}`),
                      e.networkType && f.indexOf(e.networkType) === -1 && f.push(e.networkType),
                      (i.internal.candidates[e.id] = {
                        candidateType: u,
                        ipAddress: l,
                        portNumber: e.portNumber,
                        networkType: f,
                        priority: e.priority,
                        transport: d,
                        timestamp: e.timestamp,
                        id: e.id,
                        type: e.type,
                      }),
                      (i.connectionType.remote.candidateType = u),
                      (i.connectionType.remote.ipAddress = l),
                      (i.connectionType.remote.networkType = f),
                      (i.connectionType.remote.transport = d));
                  }),
                  (n.dataSentReceived = function(e) {
                    !e.googCodecName ||
                      (e.mediaType !== 'video' && e.mediaType !== 'audio') ||
                      (e.bytesSent && (i[e.mediaType].bytesSent = parseInt(e.bytesSent)),
                      e.bytesReceived &&
                        (i[e.mediaType].bytesReceived = parseInt(e.bytesReceived)));
                  }),
                  (n.ssrc = function(e) {
                    if (
                      e.googCodecName &&
                      (e.mediaType === 'video' || e.mediaType === 'audio') &&
                      e.type === 'ssrc'
                    ) {
                      const t = e.id.split('_').pop();
                      r[e.mediaType][t].indexOf(e.ssrc) === -1 && r[e.mediaType][t].push(e.ssrc),
                        (i[e.mediaType][t].streams = r[e.mediaType][t].length);
                    }
                  });
              },
            },
            {
              key: 'start',
              value(e) {
                const t =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.interval;
                if ((this.statsTimer && clearInterval(this.statsTimer), !e))
                  throw Error('no peer for stats');
                (this.peer = e),
                  (this.interval = t),
                  (this.statsTimer = setInterval(this.getStats.bind(this), t));
              },
            },
            {
              key: 'stop',
              value() {
                this.statsTimer &&
                  (clearInterval(this.statsTimer), (this.statsTimer = null), this.reset());
              },
            },
            {
              key: 'getStats',
              value() {
                const e = this.formatResult.bind(this);

                const t = this.peer;

                const r = this.mediaStreamTrack;
                void 0 !== window.InstallTrigger
                  ? t.getStats(
                      r,
                      t => {
                        const r = [];
                        t.forEach(e => {
                          r.push(e);
                        }),
                          e(r);
                      },
                      e
                    )
                  : t.getStats(t => {
                      const r = [];
                      t.result().forEach(e => {
                        const t = {};
                        e.names().forEach(r => {
                          t[r] = e.stat(r);
                        }),
                          (t.id = e.id),
                          (t.type = e.type),
                          (t.timestamp = e.timestamp),
                          r.push(t);
                      }),
                        e(r);
                    });
              },
            },
            {
              key: 'formatResult',
              value(e) {
                const t = this.peer;

                const r = (this.mediaStreamTrack, this.statsParser);

                const n = this.statsResult;
                e.forEach(e => {
                  Object.keys(r).forEach(t => {
                    typeof r[t] === 'function' && r[t](e);
                  });
                });
                try {
                  t.iceConnectionState.search(/failed/gi) !== -1 && (this.nomore = !0);
                } catch (e) {
                  this.nomore = !0;
                }
                !0 === this.nomore &&
                  (n.datachannel && (n.datachannel.state = 'close'), (n.ended = !0)),
                  (n.results = e),
                  this.emit('stats', n);
              },
            },
          ]),
          t
        );
      })(s(r(25)).default);
      (t.default = c), (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(9);

      const i = r(119);
      e.exports = r(3).getIterator = function(e) {
        const t = i(e);
        if (typeof t !== 'function') throw TypeError(`${e} is not iterable!`);
        return n(t.call(e));
      };
    },
    function(e, t, r) {
      r(60), r(51), (e.exports = r(235));
    },
    function(e, t, r) {
      e.exports = { default: r(236), __esModule: !0 };
    },
    function(e, t, r) {
      const n = r(103);

      const i = r(2)('iterator');

      const o = r(18);
      e.exports = r(3).isIterable = function(e) {
        const t = Object(e);
        return void 0 !== t[i] || '@@iterator' in t || o.hasOwnProperty(n(t));
      };
    },
    function(e, t, r) {
      r(60), r(51), (e.exports = r(238));
    },
    function(e, t, r) {
      e.exports = { default: r(239), __esModule: !0 };
    },
    function(e, t, r) {
      t.__esModule = !0;
      const n = o(r(240));

      const i = o(r(237));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if ((0, n.default)(Object(e)))
            return (function(e, t) {
              const r = [];

              let n = !0;

              let o = !1;

              let a = void 0;
              try {
                for (
                  var s, c = (0, i.default)(e);
                  !(n = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  !n && c.return && c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return r;
            })(e, t);
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        };
      })();
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(241));
      (t.default = {
        randomSSRC() {
          const e = Math.floor(1e8 * Math.random()) + 1e7;
          return e > 1e8 ? 99999999 : e;
        },
        _createLocalDescription(e, t) {
          const r = {};

          const i = this._iceGatherer.getLocalParameters();

          const o = this._iceGatherer.getLocalCandidates();

          const a = this._dtlsTransport.getLocalParameters();

          const s = this._dtlsTransport.getRemoteParameters();

          const c = this._localCapabilities;

          const u = this._localTrackInfos;
          t === 'offer' && this._sdpGlobalFields.version++,
            (r.version = 0),
            (r.origin = {
              address: '127.0.0.1',
              ipVer: 4,
              netType: 'IN',
              sessionId: this._sdpGlobalFields.id,
              sessionVersion: this._sdpGlobalFields.version,
              username: 'jitsi-ortc-webrtc-shim',
            }),
            (r.name = '-'),
            (r.timing = { start: 0, stop: 0 }),
            (r.msidSemantic = { semantic: 'WMS', token: '*' }),
            (r.groups = [{ mids: Array.from(this._mids.keys()).join(' '), type: 'BUNDLE' }]),
            (r.media = []),
            (r.fingerprint = { hash: a.fingerprints[0].value, type: a.fingerprints[0].algorithm });
          let d = !1;

          let l = !0;

          let f = !1;

          let p = void 0;
          try {
            for (var h, m = c.codecs[Symbol.iterator](); !(l = (h = m.next()).done); l = !0) {
              const v = h.value;
              if (v.kind === 'video' && v.name === 'rtx') {
                d = !0;
                break;
              }
            }
          } catch (e) {
            (f = !0), (p = e);
          } finally {
            try {
              !l && m.return && m.return();
            } finally {
              if (f) throw p;
            }
          }
          let g = !0;

          let y = !1;

          let S = void 0;
          try {
            for (var b, _ = this._mids[Symbol.iterator](); !(g = (b = _.next()).done); g = !0) {
              const C = b.value;

              const T = (0, n.default)(C, 2);

              const R = T[0];

              const w = T[1];
              k.call(this, R, w);
            }
          } catch (e) {
            (y = !0), (S = e);
          } finally {
            try {
              !g && _.return && _.return();
            } finally {
              if (y) throw S;
            }
          }
          return new RTCSessionDescription({ type: t, _sdpObject: r });
          function k(e, n) {
            const a = {};
            switch (((a.type = n), n)) {
              case 'audio':
              case 'video':
                (a.protocol = 'RTP/SAVPF'), (a.port = 9), (a.direction = 'sendrecv');
                break;
              case 'application':
                (a.protocol = 'DTLS/SCTP'),
                  (a.port = 0),
                  (a.payloads = '0'),
                  (a.direction = 'inactive');
            }
            (a.connection = { ip: '127.0.0.1', version: 4 }),
              (a.mid = e),
              (a.iceUfrag = i.usernameFragment),
              (a.icePwd = i.password),
              (a.candidates = []);
            let l = !0;

            let f = !1;

            let p = void 0;
            try {
              for (var h, m = o[Symbol.iterator](); !(l = (h = m.next()).done); l = !0) {
                const v = h.value;

                const g = { component: 1 };
                (g.foundation = v.foundation),
                  (g.ip = v.ip),
                  (g.port = v.port),
                  (g.priority = v.priority),
                  (g.transport = v.protocol.toLowerCase()),
                  (g.type = v.type),
                  g.transport === 'tcp' && (g.tcptype = v.tcpType),
                  a.candidates.push(g);
              }
            } catch (e) {
              (f = !0), (p = e);
            } finally {
              try {
                !l && m.return && m.return();
              } finally {
                if (f) throw p;
              }
            }
            if (
              ((a.endOfCandidates = 'end-of-candidates'),
              (a.setup = t === 'offer' ? 'actpass' : s.role === 'server' ? 'active' : 'passive'),
              n === 'audio' || n === 'video')
            ) {
              (a.rtp = []), (a.rtcpFb = []), (a.fmtp = []);
              const y = [];

              let S = !0;

              let b = !1;

              let _ = void 0;
              try {
                for (var C, T = c.codecs[Symbol.iterator](); !(S = (C = T.next()).done); S = !0) {
                  const R = C.value;
                  if (!R.kind || R.kind === n) {
                    y.push(R.preferredPayloadType);
                    const w = { codec: R.name, payload: R.preferredPayloadType, rate: R.clockRate };
                    if (
                      (R.numChannels > 1 && (w.encoding = R.numChannels),
                      a.rtp.push(w),
                      R.parameters)
                    ) {
                      const k = { config: '', payload: R.preferredPayloadType };

                      let E = !0;

                      let P = !1;

                      let O = void 0;
                      try {
                        for (
                          var I, x = Object.keys(R.parameters)[Symbol.iterator]();
                          !(E = (I = x.next()).done);
                          E = !0
                        ) {
                          const M = I.value;
                          k.config && (k.config += ';'), (k.config += `${M}=${R.parameters[M]}`);
                        }
                      } catch (e) {
                        (P = !0), (O = e);
                      } finally {
                        try {
                          !E && x.return && x.return();
                        } finally {
                          if (P) throw O;
                        }
                      }
                      k.config && a.fmtp.push(k);
                    }
                    let A = !0;

                    let D = !1;

                    let L = void 0;
                    try {
                      for (
                        var j, N = (R.rtcpFeedback || [])[Symbol.iterator]();
                        !(A = (j = N.next()).done);
                        A = !0
                      ) {
                        const V = j.value;
                        a.rtcpFb.push({
                          payload: R.preferredPayloadType,
                          subtype: V.parameter || void 0,
                          type: V.type,
                        });
                      }
                    } catch (e) {
                      (D = !0), (L = e);
                    } finally {
                      try {
                        !A && N.return && N.return();
                      } finally {
                        if (D) throw L;
                      }
                    }
                  }
                }
              } catch (e) {
                (b = !0), (_ = e);
              } finally {
                try {
                  !S && T.return && T.return();
                } finally {
                  if (b) throw _;
                }
              }
              y.length === 0
                ? ((a.payloads = '9'), (a.port = 0), (a.direction = 'inactive'))
                : (a.payloads = y.join(' ')),
                (a.ssrcs = []),
                (a.ssrcGroups = []);
              let U = !0;

              let F = !1;

              let B = void 0;
              try {
                for (var G, W = u.values()[Symbol.iterator](); !(U = (G = W.next()).done); U = !0) {
                  const H = G.value;

                  const Y = H.rtpSender;

                  const z = H.stream.id;

                  const K = Y.track;
                  if (K.readyState !== 'ended' && K.kind === n) {
                    H.ssrc || (H.ssrc = this.randomSSRC());
                    const J = d && K.kind === 'video';
                    J && !H.rtxSsrc && (H.rtxSsrc = H.ssrc + 1),
                      a.ssrcs.push({ attribute: 'cname', id: H.ssrc, value: CNAME }),
                      a.ssrcs.push({ attribute: 'msid', id: H.ssrc, value: `${z} ${K.id}` }),
                      a.ssrcs.push({ attribute: 'mslabel', id: H.ssrc, value: z }),
                      a.ssrcs.push({ attribute: 'label', id: H.ssrc, value: K.id }),
                      J &&
                        (a.ssrcs.push({ attribute: 'cname', id: H.rtxSsrc, value: CNAME }),
                        a.ssrcs.push({ attribute: 'msid', id: H.rtxSsrc, value: `${z} ${K.id}` }),
                        a.ssrcs.push({ attribute: 'mslabel', id: H.rtxSsrc, value: z }),
                        a.ssrcs.push({ attribute: 'label', id: H.rtxSsrc, value: K.id }),
                        a.ssrcGroups.push({ semantics: 'FID', ssrcs: `${H.ssrc} ${H.rtxSsrc}` }));
                  }
                }
              } catch (e) {
                (F = !0), (B = e);
              } finally {
                try {
                  !U && W.return && W.return();
                } finally {
                  if (F) throw B;
                }
              }
              a.ext = [];
              let Q = !0;

              let $ = !1;

              let q = void 0;
              try {
                for (
                  var X, Z = c.headerExtensions[Symbol.iterator]();
                  !(Q = (X = Z.next()).done);
                  Q = !0
                ) {
                  const ee = X.value;
                  (ee.kind && ee.kind !== n) || a.ext.push({ value: ee.preferredId, uri: ee.uri });
                }
              } catch (e) {
                ($ = !0), (q = e);
              } finally {
                try {
                  !Q && Z.return && Z.return();
                } finally {
                  if ($) throw q;
                }
              }
              (a.rtcpMux = 'rtcp-mux'), (a.rtcpRsize = 'rtcp-rsize');
            }
            r.media.push(a);
          }
        },
        mergeConstraints(e, t) {
          if (!e || !t) return e || t;
          const r = e;
          for (const n in t) r[n] = t[n];
          return r;
        },
        iceCandidateType(e) {
          return e.split(' ')[7];
        },
        formatTypePreference(e) {
          if (/Chrome\/\d+/.test(navigator.userAgent))
            switch (e) {
              case 0:
                return 'TURN/TLS';
              case 1:
                return 'TURN/TCP';
              case 2:
                return 'TURN/UDP';
            }
          else if (/Firefox\/\d+/.test(navigator.userAgent))
            switch (e) {
              case 0:
                return 'TURN/TCP';
              case 5:
                return 'TURN/UDP';
            }
          return '';
        },
        maybeSetOpusOptions(e, t) {
          return (
            t.opusStereo === 'true'
              ? (e = this.setCodecParam(e, 'opus/48000', 'stereo', '1'))
              : t.opusStereo === 'false' && (e = this.removeCodecParam(e, 'opus/48000', 'stereo')),
            t.opusFec === 'true'
              ? (e = this.setCodecParam(e, 'opus/48000', 'useinbandfec', '1'))
              : t.opusFec === 'false' &&
                (e = this.removeCodecParam(e, 'opus/48000', 'useinbandfec')),
            t.opusDtx === 'true'
              ? (e = this.setCodecParam(e, 'opus/48000', 'usedtx', '1'))
              : t.opusDtx === 'false' && (e = this.removeCodecParam(e, 'opus/48000', 'usedtx')),
            t.opusMaxPbr &&
              (e = this.setCodecParam(e, 'opus/48000', 'maxplaybackrate', t.opusMaxPbr)),
            e
          );
        },
        maybeSetAudioSendBitRate(e, t) {
          return t.audioSendBitrate
            ? (console.log(`Prefer audio send bitrate: ${t.audioSendBitrate}`),
              this.preferBitRate(e, t.audioSendBitrate, 'audio'))
            : e;
        },
        maybeSetAudioReceiveBitRate(e, t) {
          return t.audioRecvBitrate
            ? (console.log(`Prefer audio receive bitrate: ${t.audioRecvBitrate}`),
              this.preferBitRate(e, t.audioRecvBitrate, 'audio'))
            : e;
        },
        maybeSetVideoSendBitRate(e, t) {
          return t.videoSendBitrate
            ? (console.log(`Prefer video send bitrate: ${t.videoSendBitrate}`),
              this.preferBitRate(e, t.videoSendBitrate, 'video'))
            : e;
        },
        maybeSetVideoReceiveBitRate(e, t) {
          return t.videoRecvBitrate
            ? (console.log(`Prefer video receive bitrate: ${t.videoRecvBitrate}`),
              this.preferBitRate(e, t.videoRecvBitrate, 'video'))
            : e;
        },
        preferBitRate(e, t, r) {
          const n = e.split('\r\n');

          const i = this.findLine(n, 'm=', r);
          if (i === null)
            return console.log('Failed to add bandwidth line to sdp, as no m-line found'), e;
          let o = this.findLineInRange(n, i + 1, -1, 'm=');
          o === null && (o = n.length);
          const a = this.findLineInRange(n, i + 1, o, 'c=');
          if (a === null)
            return console.log('Failed to add bandwidth line to sdp, as no c-line found'), e;
          const s = this.findLineInRange(n, a + 1, o, 'b=AS');
          s && n.splice(s, 1);
          const c = `b=AS:${t}`;
          return n.splice(a + 1, 0, c), (e = n.join('\r\n'));
        },
        maybeSetVideoSendInitialBitRate(e, t) {
          let r = t.videoSendInitialBitrate;
          if (!r) return e;
          let n = r;

          const i = t.videoSendBitrate;
          i &&
            (r > i &&
              (console.log(`Clamping initial bitrate to max bitrate of ${i} kbps.`),
              (r = i),
              (t.videoSendInitialBitrate = r)),
            (n = i));
          const o = e.split('\r\n');
          if (this.findLine(o, 'm=', 'video') === null)
            return console.log('Failed to find video m-line'), e;
          const a = t.videoRecvCodec;
          return (
            (e = this.setCodecParam(
              e,
              a,
              'x-google-min-bitrate',
              t.videoSendInitialBitrate.toString()
            )),
            (e = this.setCodecParam(e, a, 'x-google-max-bitrate', n.toString()))
          );
        },
        removePayloadTypeFromMline(e, t) {
          e = e.split(' ');
          for (let r = 0; r < e.length; ++r) e[r] === t.toString() && e.splice(r, 1);
          return e.join(' ');
        },
        removeCodecByName(e, t) {
          const r = this.findLine(e, 'a=rtpmap', t);
          if (r === null) return e;
          const n = this.getCodecPayloadTypeFromLine(e[r]);
          e.splice(r, 1);
          const i = this.findLine(e, 'm=', 'video');
          return i === null ? e : ((e[i] = this.removePayloadTypeFromMline(e[i], n)), e);
        },
        removeCodecByPayloadType(e, t) {
          const r = this.findLine(e, 'a=rtpmap', t.toString());
          if (r === null) return e;
          e.splice(r, 1);
          const n = this.findLine(e, 'm=', 'video');
          return n === null ? e : ((e[n] = this.removePayloadTypeFromMline(e[n], t)), e);
        },
        maybeRemoveVideoFec(e, t) {
          if (t.videoFec !== 'false') return e;
          let r = e.split('\r\n');

          let n = this.findLine(r, 'a=rtpmap', 'red');
          if (n === null) return e;
          const i = this.getCodecPayloadTypeFromLine(r[n]);
          if (
            ((r = this.removeCodecByPayloadType(r, i)),
            (r = this.removeCodecByName(r, 'ulpfec')),
            (n = this.findLine(r, 'a=fmtp', i.toString())) === null)
          )
            return e;
          const o = this.parseFmtpLine(r[n]).pt;
          return o === null
            ? e
            : (r.splice(n, 1), (r = this.removeCodecByPayloadType(r, o)).join('\r\n'));
        },
        maybePreferAudioSendCodec(e, t) {
          return this.maybePreferCodec(e, 'audio', 'send', t.audioSendCodec);
        },
        maybePreferAudioReceiveCodec(e, t) {
          return this.maybePreferCodec(e, 'audio', 'receive', t.audioRecvCodec);
        },
        maybePreferVideoSendCodec(e, t) {
          return this.maybePreferCodec(e, 'video', 'send', t.videoSendCodec);
        },
        maybePreferVideoReceiveCodec(e, t) {
          return this.maybePreferCodec(e, 'video', 'receive', t.videoRecvCodec);
        },
        maybePreferCodec(e, t, r, n) {
          const i = `${t} ${r} codec`;
          if (!n) return console.log(`No preference on ${i}.`), e;
          console.log(`Prefer ${i}: ${n}`);
          const o = e.split('\r\n');

          const a = this.findLine(o, 'm=', t);
          if (a === null) return e;
          const s = this.getCodecPayloadType(o, n);
          return (
            s
              ? (o[a] = this.setDefaultCodec(o[a], s))
              : console.error('no prefered codec found for ', n),
            (e = o.join('\r\n'))
          );
        },
        setCodecParam(e, t, r, n) {
          const i = e.split('\r\n');

          const o = this.findFmtpLine(i, t);

          let a = {};
          if (o === null) {
            const s = this.findLine(i, 'a=rtpmap', t);
            if (s === null) return e;
            const c = this.getCodecPayloadTypeFromLine(i[s]);
            (a.pt = c.toString()),
              (a.params = {}),
              (a.params[r] = n),
              i.splice(s + 1, 0, this.writeFmtpLine(a));
          } else ((a = this.parseFmtpLine(i[o])).params[r] = n), (i[o] = this.writeFmtpLine(a));
          return (e = i.join('\r\n'));
        },
        removeCodecParam(e, t, r) {
          const n = e.split('\r\n');

          const i = this.findFmtpLine(n, t);
          if (i === null) return e;
          const o = this.parseFmtpLine(n[i]);
          delete o.params[r];
          const a = this.writeFmtpLine(o);
          return a === null ? n.splice(i, 1) : (n[i] = a), (e = n.join('\r\n'));
        },
        parseFmtpLine(e) {
          const t = {};

          const r = e.indexOf(' ');

          const n = e.substring(r + 1).split('; ');

          const i = new RegExp('a=fmtp:(\\d+)');

          const o = e.match(i);
          if (!o || o.length !== 2) return null;
          t.pt = o[1];
          for (var a = {}, s = 0; s < n.length; ++s) {
            const c = n[s].split('=');
            c.length === 2 && (a[c[0]] = c[1]);
          }
          return (t.params = a), t;
        },
        writeFmtpLine(e) {
          if (!e.hasOwnProperty('pt') || !e.hasOwnProperty('params')) return null;
          const t = e.pt;

          const r = e.params;

          const n = [];

          let i = 0;
          for (const o in r) (n[i] = `${o}=${r[o]}`), ++i;
          return i === 0 ? null : `a=fmtp:${t.toString()} ${n.join('; ')}`;
        },
        findFmtpLine(e, t) {
          const r = this.getCodecPayloadType(e, t);
          return r ? this.findLine(e, `a=fmtp:${r.toString()}`) : null;
        },
        findLine(e, t, r) {
          return this.findLineInRange(e, 0, -1, t, r);
        },
        findLineInRange(e, t, r, n, i) {
          for (let o = r !== -1 ? r : e.length, a = t; a < o; ++a)
            if (e[a].indexOf(n) === 0 && (!i || e[a].toLowerCase().indexOf(i.toLowerCase()) !== -1))
              return a;
          return null;
        },
        getCodecPayloadType(e, t) {
          const r = this.findLine(e, 'a=rtpmap', t);
          return r ? this.getCodecPayloadTypeFromLine(e[r]) : null;
        },
        getCodecPayloadTypeFromLine(e) {
          const t = new RegExp('a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+');

          const r = e.match(t);
          return r && r.length === 2 ? r[1] : null;
        },
        setDefaultCodec(e, t) {
          const r = e.split(' ');

          const n = r.slice(0, 3);
          n.push(t);
          for (let i = 3; i < r.length; i++) r[i] !== t && n.push(r[i]);
          return n.join(' ');
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(156);

      const i = /%[sdv%]/g;

      const o = function(e, t, r) {
        const n = [
          `${e}=${t.format instanceof Function ? t.format(t.push ? r : r[t.name]) : t.format}`,
        ];
        if (t.names)
          for (let o = 0; o < t.names.length; o += 1) {
            const a = t.names[o];
            t.name ? n.push(r[t.name][a]) : n.push(r[t.names[o]]);
          }
        else n.push(r[t.name]);
        return (function(e) {
          let t = 1;

          const r = arguments;

          const n = r.length;
          return e.replace(i, e => {
            if (t >= n) return e;
            const i = r[t];
            switch (((t += 1), e)) {
              case '%%':
                return '%';
              case '%s':
                return String(i);
              case '%d':
                return Number(i);
              case '%v':
                return '';
            }
          });
        })(...n);
      };

      const a = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'];

      const s = ['i', 'c', 'b', 'a'];
      e.exports = function(e, t) {
        (t = t || {}),
          e.version == null && (e.version = 0),
          e.name == null && (e.name = ' '),
          e.media.forEach(e => {
            e.payloads == null && (e.payloads = '');
          });
        const r = t.outerOrder || a;

        const i = t.innerOrder || s;

        const c = [];
        return (
          r.forEach(t => {
            n[t].forEach(r => {
              r.name in e && e[r.name] != null
                ? c.push(o(t, r, e))
                : r.push in e &&
                  e[r.push] != null &&
                  e[r.push].forEach(e => {
                    c.push(o(t, r, e));
                  });
            });
          }),
          e.media.forEach(e => {
            c.push(o('m', n.m[0], e)),
              i.forEach(t => {
                n[t].forEach(r => {
                  r.name in e && e[r.name] != null
                    ? c.push(o(t, r, e))
                    : r.push in e &&
                      e[r.push] != null &&
                      e[r.push].forEach(e => {
                        c.push(o(t, r, e));
                      });
                });
              });
          }),
          `${c.join('\r\n')}\r\n`
        );
      };
    },
    function(e, t, r) {
      const n = function(e) {
        return String(Number(e)) === e ? Number(e) : e;
      };

      const i = function(e, t, r) {
        const i = e.name && e.names;
        e.push && !t[e.push] ? (t[e.push] = []) : i && !t[e.name] && (t[e.name] = {});
        const o = e.push ? {} : i ? t[e.name] : t;
        !(function(e, t, r, i) {
          if (i && !r) t[i] = n(e[1]);
          else for (let o = 0; o < r.length; o += 1) e[o + 1] != null && (t[r[o]] = n(e[o + 1]));
        })(r.match(e.reg), o, e.names, e.name),
          e.push && t[e.push].push(o);
      };

      const o = r(156);

      const a = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
      t.parse = function(e) {
        const t = {};

        const r = [];

        let n = t;
        return (
          e
            .split(/(\r\n|\r|\n)/)
            .filter(a)
            .forEach(e => {
              const t = e[0];

              const a = e.slice(2);
              t === 'm' && (r.push({ rtp: [], fmtp: [] }), (n = r[r.length - 1]));
              for (let s = 0; s < (o[t] || []).length; s += 1) {
                const c = o[t][s];
                if (c.reg.test(a)) return i(c, n, a);
              }
            }),
          (t.media = r),
          t
        );
      };
      const s = function(e, t) {
        const r = t.split(/=(.+)/, 2);
        return r.length === 2 && (e[r[0]] = n(r[1])), e;
      };
      (t.parseParams = function(e) {
        return e.split(/\;\s?/).reduce(s, {});
      }),
        (t.parseFmtpConfig = t.parseParams),
        (t.parsePayloads = function(e) {
          return e.split(' ').map(Number);
        }),
        (t.parseRemoteCandidates = function(e) {
          for (var t = [], r = e.split(' ').map(n), i = 0; i < r.length; i += 3)
            t.push({ component: r[i], ip: r[i + 1], port: r[i + 2] });
          return t;
        }),
        (t.parseImageAttributes = function(e) {
          return e.split(' ').map(e => {
            return e
              .substring(1, e.length - 1)
              .split(',')
              .reduce(s, {});
          });
        }),
        (t.parseSimulcastStreamList = function(e) {
          return e.split(';').map(e => {
            return e.split(',').map(e => {
              let t;

              let r = !1;
              return (
                e[0] !== '~' ? (t = n(e)) : ((t = n(e.substring(1, e.length))), (r = !0)),
                { scid: t, paused: r }
              );
            });
          });
        });
    },
    function(e, t, r) {
      const n = r(244);

      const i = r(243);
      (t.write = i),
        (t.parse = n.parse),
        (t.parseFmtpConfig = n.parseFmtpConfig),
        (t.parseParams = n.parseParams),
        (t.parsePayloads = n.parsePayloads),
        (t.parseRemoteCandidates = n.parseRemoteCandidates),
        (t.parseImageAttributes = n.parseImageAttributes),
        (t.parseSimulcastStreamList = n.parseSimulcastStreamList);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(157));
      const i = r(245);

      let o = null;

      const a = {};

      let s = {};
      (t.default = {
        init(e) {
          (o = n.default.checkVersion()), (s = e || window.console);
        },
        fnShake(e) {
          const t = this;

          let r = e.fn;

          const n = e.peer;

          const i = void 0 === n ? {} : n;
          if (r)
            return (
              i.id || (i.id = Object.keys(a).length + 1),
              (r = `_${r}`),
              a[i.id] || (a[i.id] = {}),
              a[i.id] &&
                a[i.id][r] &&
                (s.log(`destroy ${r} timer`), clearTimeout(a[i.id][r]), (a[i.id][r] = null)),
              s.log(`create ${r} timer`),
              new Promise((n, o) => {
                a[i.id][r] = setTimeout(() => {
                  (a[i.id][r] = null), n(t[r](e));
                }, 200);
              })
            );
        },
        createOffer() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.fnShake({ peer: e, fn: 'createOffer' });
        },
        _createOffer() {
          const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).peer;
          s.log('------ do createoffer ------');
          if (e.uid - e.targetUid != 0) {
            const t = e.getLocalStreams();

            const r = (t[0] && t[0].getTracks()) || !1;
            (r && r.length !== 0) ||
              (e.addTransceiver &&
                o.prefix === 'Safari' &&
                (e.addTransceiver('audio'), e.addTransceiver('video')));
          }
          return e.createOffer({ offerToReceiveVideo: 1, offerToReceiveAudio: 1 });
        },
        formatSdp() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const r = t.offerOrAnswer;

          const n = t.uid;

          const o = t.highAudio;

          const a = t.stero;

          const c = t.targetUid;

          const u = t.stream || new MediaStream();

          const d = r.sdp;

          const l = r.type;

          const f = [];

          const p = [];
          !/h264/i.test(d) && /Chrome/gi.test(navigator.userAgent) && alert('该机型不支持H264编码');
          const h = i.parse(d);
          s.log(`${c} 原始sdp ${l} \n`, d), s.log(h);
          const m = u.getAudioTracks()[0];

          const v = u.getVideoTracks()[0];
          return (
            (h.rtcpxr = 'rcvr-rtt=all:10000'),
            h.media &&
              h.media.map((t, i) => {
                if (
                  (t.candidates && delete t.candidates,
                  (t.direction =
                    c !== n ? 'recvonly' : /recvonly/.test(t.direction) ? 'recvonly' : 'sendonly'),
                  ((/audio/.test(t.type) && !m) || (/video/.test(t.type) && !v)) &&
                    delete t.ssrcs &&
                    delete t.ssrcGroups &&
                    delete t.msid,
                  t.type === 'audio' && (p.push(t.mid), t),
                  t.type === 'video' &&
                    v &&
                    t.ssrcs.map(e => {
                      /^label$/.test(e.attribute) && e.value !== v.id && f.push(e.id);
                    }),
                  t.type === 'audio' &&
                    ((t.ptime = 60), (t.maxptime = 60), t.fmtp && t.fmtp.length))
                ) {
                  let s = !1;

                  const u = o ? 48e3 : 16e3;

                  const d = { payload: '', type: 'nack' };
                  t.rtp.map(e => {
                    e.codec === 'opus' && (d.payload = e.payload);
                  }),
                    t.rtcpFb && t.rtcpFb.length ? t.rtcpFb.push(d) : (t.rtcpFb = [d]),
                    t.fmtp.map(e => {
                      e.config &&
                        e.config.indexOf('minptime=') !== -1 &&
                        (e.config = e.config.replace(/minptime=\d+/, 'minptime=60')),
                        e.config &&
                          e.config.indexOf('sprop-maxcapturerate=') !== -1 &&
                          e.config.indexOf('maxplaybackrate') !== -1 &&
                          ((s = !0),
                          (e.config = e.config.replace(
                            /sprop-maxcapturerate=\d+/,
                            `sprop-maxcapturerate=${u}`
                          )),
                          (e.config = e.config.replace(
                            /maxplaybackrate=\d+/,
                            `maxplaybackrate=${u}`
                          ))),
                        s || (e.config += `;maxplaybackrate=${u};sprop-maxcapturerate=${u}`),
                        a &&
                          (e.config += ';maxaveragebitrate=131072;stereo=1;sprop-stereo=1;cbr=1');
                    });
                }
                if (r.type === 'offer') {
                  const l = t.mid;
                  h.groups &&
                    h.groups.map(e => {
                      const r = e.mids.split(' ');
                      r.indexOf(l) !== -1 &&
                        (r.splice(r.indexOf(l), 1, t.mid), (e.mids = r.join(' ')));
                    });
                }
                t.fmtp = e.limitFrame(t.fmtp);
              }),
            (r.sdp = i.write(h)),
            f.length > 0 &&
              f.map(e => {
                const t = new RegExp(`a=ssrc:${e}.+\\r\\n`, 'gi');
                r.sdp = r.sdp.replace(t, '');
              }),
            r
          );
        },
        limitFrame(e) {
          return (
            e.map(e => {
              /42e01f/gi.test(e.config) && (e.config += ';max-fs=12288');
            }),
            e
          );
        },
        setMediaBitrates() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.sdp;

          const r = e.bit;

          const n = void 0 === r ? {} : r;

          const o = n.video;

          const a = void 0 === o ? 500 : o;

          const s = n.audio;

          const c = void 0 === s ? 500 : s;

          const u = i.parse(t);
          return (
            u.media &&
              u.media.map((e, t) => {
                e.bandwidth = [
                  {
                    type: navigator.mozGetUserMedia ? 'TIAS' : 'AS',
                    limit: e.type === 'audio' ? c : a,
                  },
                ];
              }),
            i.write(u)
          );
        },
        formatSSRCChrome(e, t, r) {
          return e.map((e, n) => {
            return (e.id = `${t}0${r}0${Math.floor(n / 4)}`), (e.id -= 0), e;
          });
        },
        formatSSRCFirefox(e, t, r) {
          return e.map((e, n) => {
            return (e.id = `${t}0${r}0${Math.floor(n / 4)}`), (e.id -= 0), e;
          });
        },
        formatSdpRemote(e, t) {
          return /Chrome/gi.test(navigator.userAgent)
            ? this.formatSdpRemoteChrome(e, t)
            : this.formatSdpRemoteFirefox(e, t);
        },
        formatSdpRemoteChrome(e) {
          return (
            (e = e.replace(/a=msid:.+\r\na=ssrc:\d+ cname:.+/gi, (e, t) => {
              const r = e.match(/a=ssrc:(\d+)/);

              const n = e.match(/a=msid:(.+) (.+)/);
              return (
                r[1] && (e = e.replace('a=msid', `a=ssrc:${r[1]} msid`)),
                n[1] && r[1] && (e = `${e}\r\na=ssrc:${r[1]} mslabel:${n[1]}`),
                n[2] && r[1] && (e = `${e}\r\na=ssrc:${r[1]} label:${n[2]}`),
                e
              );
            })),
            s.log('formated: \n', e),
            e
          );
        },
        formatSdpRemoteFirefox(e, t) {
          if (
            ((e = e.replace(/\r\na=msid:.+\r\na=ssrc:\d+ cname:.+/gi, (e, t) => {
              const r = e.match(/\r\na=ssrc:\d+ cname:.+/);
              return (e = (e = e.replace(/a=ssrc:\d+ cname:.+/, '')).replace(
                'a=msid',
                `${r[0]}\r\na=msid`
              ));
            })),
            t && t.sdp)
          ) {
            const r = i.parse(e);

            const n = i.parse(t.sdp);
            r.media.length, n.media.length;
          }
          return s.log('formated: \n', e), e;
        },
        parse(e) {
          const t = i.parse(e);
          s.log(t);
        },
        updateMediaStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (e.fn = 'updateMediaStream'), this.fnShake(e);
        },
        _updateMediaStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.peer;

          const r = e.currStream;

          const n = e.streams;

          const i = void 0 === n ? [] : n;

          const o = this.checkCurrStream(t);

          const a = {};

          const c = t;

          const u = r || new MediaStream();
          i.map(e => {
            e.getTracks().map(e => {
              console.log('_updateMediaStream newTracks', e), (a[e.id] = e);
            });
          });
          const d = Object.keys(o.tracks).filter(e => {
            return !a[e];
          });
          console.warn('webrtc-rtc::获取移除的列表', d);
          const l = Object.keys(a).filter(e => {
            return !o.tracks[e];
          });
          return (
            console.log('webrtc-rtc::获取新加的列表', l),
            d &&
              d.map(e => {
                const t = o.tracks[e].sender;

                const r = o.tracks[e].track;
                s.warn('remove old track', t, r), u.removeTrack(r), c.removeTrack(t);
              }),
            l &&
              l.map(e => {
                const t = a[e];
                s.log('add new track', t), u.addTrack(t), c.addTrack(t, u);
              }),
            this.checkCurrStream(t),
            Promise.resolve(u)
          );
        },
        removeTrack() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.peer;

          const r = e.currStream;

          const n = e.tracks;

          const i = void 0 === n ? [] : n;
          if (i.length !== 0) {
            const o = this.checkCurrStream(t);
            i.map(e => {
              o.tracks[e.id] &&
                (console.log('====remove track', e, e.readyState, o.tracks[e.id].sender),
                r.removeTrack(e),
                t.removeTrack(o.tracks[e.id].sender));
            });
          }
        },
        checkCurrStream(e) {
          const t = {};

          const r = [];

          const n = e.getSenders();
          return (
            n.map(e => {
              const n = e.track;
              n
                ? ((t[n.id] = { sender: e, track: n }),
                  s.log(' --\x3e track id:', `${n.kind}:${n.id}`))
                : r.push(e);
            }),
            { tracks: t, empty: r }
          );
        },
        checkMediaStatus() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.audio;

          const r = e.video;

          const n = e.sdp;

          const o = e.uid;

          const a = { audio: !1, video: !1 };

          const c = i.parse(n);

          const u = t && t.getAudioTracks()[0];

          const d = r && r.getVideoTracks()[0];
          return (
            s.log(`${o} checkMediaStatus ----\x3e track status`, c),
            u && s.log('webrtc::checkMediaStatus audioTrack ----\x3e ', u),
            d && s.log('webrtc::checkMediaStatus videoTrack ----\x3e ', d),
            (a.audio = u && u.readyState !== 'ended' && new RegExp(u.id).test(n)),
            (a.video = d && d.readyState !== 'ended' && new RegExp(d.id).test(n)),
            a
          );
        },
        validMediaStream() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.sdp;

          const r = e.msid;

          const n = e.trackid;
          if (!r || !n) return !1;
          let i = !1;
          return r && (i = new RegExp(r).test(t)), i ? (n && (i = new RegExp(n).test(t)), i) : i;
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = c(r(14));

      const i = c(r(48));

      const o = c(r(22));

      const a = c(r(21));

      const s = c(r(158));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let u = {};

      const d = (function(e) {
        function t() {
          (0, n.default)(this, t);
          const e = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e.recordedChunks = []),
            (e.isRecording = !1),
            (e.contentTypes = [
              'video/mp4;codecs=opus',
              'video/webm',
              'video/webm;codecs=h264',
              'video/x-matroska;codecs=opus',
              'video/invalid',
            ]),
            e
          );
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(
            t,
            [
              {
                key: 'validation',
                value(e) {
                  return e.filter(e => {
                    return MediaRecorder.isTypeSupported(e);
                  });
                },
              },
              {
                key: 'format',
                value() {
                  const e = this;

                  let t = this.stream;

                  const r = this.option;
                  return new Promise((n, i) => {
                    if (
                      (/(LocalMediaStream|MediaStream)/.test(t.constructor) && (t = [t]),
                      t.constructor !== Array)
                    )
                      return i('音视频录制输入错误');
                    if (r.type === 'audio')
                      return (
                        (e.audioController = new s.default({ stream: t, uid: e.uid })),
                        (e.opStream = e.audioController.outputStream),
                        (window.audios = e.opStream),
                        n()
                      );
                    const o = new MediaStream();
                    if (
                      (t.forEach(e => {
                        e &&
                          /(LocalMediaStream|MediaStream)/.test(e.constructor) &&
                          e.getTracks().forEach(e => {
                            o.addTrack(e);
                          });
                      }),
                      o.getTracks().length === 0)
                    )
                      return i('当前没有任何音视频数据，无法进行录制');
                    (e.opStream = o), n();
                  });
                },
              },
              {
                key: 'start',
                value(e) {
                  const t = this;

                  const r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { type: 'video' };
                  return r.uid || r.account
                    ? e
                      ? window.MediaRecorder && MediaRecorder.isTypeSupported
                        ? ((this.stream = e),
                          (this.option = r),
                          r.type === 'audio' &&
                            (this.contentTypes = [
                              'audio/wav',
                              'audio/ogg',
                              'audio/pcm',
                              'audio/webm',
                            ]),
                          (this.mimeType = this.validation(this.contentTypes)[0])
                            ? this.isRecording
                              ? Promise.reject('音视频正在录制中，请勿重复操作')
                              : this.format()
                                  .then(() => {
                                    return t._start();
                                  })
                                  .catch(e => {
                                    return Promise.reject(e);
                                  })
                            : Promise.reject('当前浏览器不支持对应格式的视频录制'))
                        : Promise.reject('当前浏览器不支持音视频录制功能')
                      : Promise.reject('获取视频流失败')
                    : Promise.reject('需要录制的帐号缺失');
                },
              },
              {
                key: '_start',
                value() {
                  const e = {
                    audioBitsPerSecond: 128e3,
                    videoBitsPerSecond: 25e5,
                    mimeType: this.mimeType,
                  };

                  const t = (this.recorder = new MediaRecorder(this.opStream, e));
                  return (
                    (t.ondataavailable = this.ondataavailable.bind(this)),
                    (t.onstop = this.onstop.bind(this)),
                    (this.isRecording = !0),
                    (this.status = 'started'),
                    this.recorder.start(),
                    this.startTimer(),
                    Promise.resolve(this.option)
                  );
                },
              },
              {
                key: 'stop',
                value(e) {
                  if (!this.isRecording || !this.recorder)
                    return Promise.reject('请先开启音视频录制');
                  if (
                    ((this.status = 'stopped'),
                    u.log('MediaRecorder: stop event', this.recorder.state),
                    this.recorder.state === 'inactive')
                  )
                    return (
                      u.warn('MediaRecorder already stopped:', this.recorder.state),
                      Promise.reject('音视频录制已结束，请勿重复操作')
                    );
                  const t = `${this.option.account || this.option.uid}--${Date.now()}--${this.option
                    .type || 'video'}`;
                  return (this.fileName = e || t), this.recorder.stop(), Promise.resolve();
                },
              },
              {
                key: 'leave',
                value() {
                  const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (this.isRecording && this.recorder) {
                    const t = e.uid;
                    t && this.option && this.option && t === +this.option.uid && this.stop();
                  }
                },
              },
              {
                key: 'ondataavailable',
                value(e) {
                  if ((u.log('MediaRecorder: data received'), !(e.data.size > 0)))
                    return this.stop(), Promise.reject('获取视频流失败');
                  this.recordedChunks.push(e.data);
                },
              },
              {
                key: 'onstop',
                value() {
                  if ((u.log('MediaRecorder: onstop'), this.status !== 'stopped'))
                    return this._start();
                  const e = new Blob(this.recordedChunks, { type: this.mimeType });

                  const t = URL.createObjectURL(e);

                  const r = document.createElement('a');
                  document.body.appendChild(r),
                    (r.style = 'display: none'),
                    (r.href = t),
                    (r.download = `${this.fileName || Date.now()}.webm`),
                    r.click(),
                    window.URL.revokeObjectURL(t),
                    this.destroy(),
                    this.clearTimer(),
                    this.emit('stopRecord');
                },
              },
              {
                key: 'pause',
                value() {
                  this.recorder && this.recorder.pause();
                },
              },
              {
                key: 'resume',
                value() {
                  this.recorder && this.recorder.resume();
                },
              },
              {
                key: 'destroy',
                value() {
                  (this.stream = null),
                    (this.recorder = null),
                    (this.recordedChunks = []),
                    (this.isRecording = !1),
                    this.audioController && this.audioController.destroy(),
                    (this.audioController = null),
                    (this.fileName = this.fileNameDefault = ''),
                    (this.option = {}),
                    (this.status = '');
                },
              },
              {
                key: 'startTimer',
                value() {
                  const e = this;
                  this.timer ||
                    (this.timer = setInterval(() => {
                      u.log(
                        `${new Date().toLocaleString()} --\x3e MediaRecorder status: ${
                          e.recorder.state
                        }`
                      );
                    }, 2e3));
                },
              },
              {
                key: 'clearTimer',
                value() {
                  this.timer && (clearInterval(this.timer), (this.timer = null));
                },
              },
            ],
            [
              {
                key: 'init',
                value(e) {
                  u = e || window.Logger;
                },
              },
            ]
          ),
          t
        );
      })(r(25));
      (t.default = d), (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = u(r(112));

      const i = u(r(111));

      const o = u(r(14));

      const a = u(r(22));

      const s = u(r(21));

      const c = u(r(129));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const d = (function(e) {
        function t() {
          (0, o.default)(this, t);
          const e = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.init(), e;
        }
        return (0, s.default)(t, e), t;
      })(r(25));
      t.default = d;
      const l = d.prototype;
      (l.init = function() {
        if (
          (this.getDevices().catch(e => {
            console.warn(e);
          }),
          navigator.mediaDevices && navigator.mediaDevices.addEventListener)
        ) {
          let e = void 0;

          const t = this;
          navigator.mediaDevices.ondevicechange = function(r) {
            e && (clearTimeout(e), (e = null));
            const n = Object.assign({}, t.devicesCache);
            e = setTimeout(() => {
              (e = null),
                t
                  .getDevices(!0)
                  .then(() => {
                    t.emit('deviceStatus', t.devicesCache), t.filterDeviceChange(t.devicesCache, n);
                  })
                  .catch(() => {});
            }, 500);
          };
        }
      }),
        (l.filterDeviceChange = function(e, t) {
          function r(e) {
            const t = {};
            return (
              Object.keys(e).forEach(r => {
                e[r].forEach(e => {
                  t[r + e.deviceId] = Object.assign({}, e, { type: r });
                });
              }),
              t
            );
          }
          const n = r(e);

          const i = r(t);

          const o = Object.keys(n);

          const a = Object.keys(i);
          if (o.length > a.length) {
            const s = [];
            o.forEach(e => {
              a.indexOf(e) === -1 && s.push(n[e]);
            }),
              s.length && this.emit('deviceAdd', s);
          } else {
            const c = [];
            a.forEach(e => {
              o.indexOf(e) === -1 && c.push(i[e]);
            }),
              c.length && this.emit('deviceRemove', c);
          }
        }),
        (l.getDevicesOfType = function(e) {
          return void 0 !== e
            ? this.getDevices().then(t => {
                return [t[e]];
              })
            : this.getDevices();
        }),
        (l.getDevices = function(e) {
          const t = this;

          let r = void 0;
          return !e && this.devicesCache
            ? Promise.resolve(this.devicesCache)
            : new Promise(function(e, o) {
                const a = this;
                (0, i.default)(
                  n.default.mark(function i() {
                    return n.default.wrap(
                      n => {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.next = 2),
                                c.default.getDevices().catch(e => {
                                  return o(e);
                                })
                              );
                            case 2:
                              if ((r = n.sent)) {
                                n.next = 5;
                                break;
                              }
                              return n.abrupt('return', o('没有找到可用设备'));
                            case 5:
                              return (t.devicesCache = r), n.abrupt('return', e(r));
                            case 7:
                            case 'end':
                              return n.stop();
                          }
                      },
                      i,
                      a
                    );
                  })
                )();
              });
        }),
        (l.getDeviceStatus = function() {
          return {
            hasAudio: (this.devicesCache && this.devicesCache.audioIn.length > 0) || !1,
            hasVideo: (this.devicesCache && this.devicesCache.video.length > 0) || !1,
          };
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      const n = r(13);

      const i = r(128);

      const o = r(160);
      n(n.S, 'Promise', {
        try(e) {
          const t = i.f(this);

          const r = o(e);
          return (r.e ? t.reject : t.resolve)(r.v), t.promise;
        },
      });
    },
    function(e, t, r) {
      const n = r(13);

      const i = r(3);

      const o = r(1);

      const a = r(162);

      const s = r(159);
      n(n.P + n.R, 'Promise', {
        finally(e) {
          const t = a(this, i.Promise || o.Promise);

          const r = typeof e === 'function';
          return this.then(
            r
              ? r => {
                  return s(t, e()).then(() => {
                    return r;
                  });
                }
              : e,
            r
              ? r => {
                  return s(t, e()).then(() => {
                    throw r;
                  });
                }
              : e
          );
        },
      });
    },
    function(e, t, r) {
      const n = r(1);

      const i = r(3);

      const o = r(6);

      const a = r(8);

      const s = r(2)('species');
      e.exports = function(e) {
        const t = typeof i[e] === 'function' ? i[e] : n[e];
        a &&
          t &&
          !t[s] &&
          o.f(t, s, {
            configurable: !0,
            get() {
              return this;
            },
          });
      };
    },
    function(e, t, r) {
      const n = r(10);
      e.exports = function(e, t, r) {
        for (const i in t) r && e[i] ? (e[i] = t[i]) : n(e, i, t[i]);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(1).navigator;
      e.exports = (n && n.userAgent) || '';
    },
    function(e, t, r) {
      const n = r(1);

      const i = r(161).set;

      const o = n.MutationObserver || n.WebKitMutationObserver;

      const a = n.process;

      const s = n.Promise;

      const c = r(32)(a) == 'process';
      e.exports = function() {
        let e;

        let t;

        let r;

        const u = function() {
          let n;
          let i;
          for (c && (n = a.domain) && n.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (n) {
              throw (e ? r() : (t = void 0), n);
            }
          }
          (t = void 0), n && n.enter();
        };
        if (c)
          r = function() {
            a.nextTick(u);
          };
        else if (!o || (n.navigator && n.navigator.standalone))
          if (s && s.resolve) {
            const d = s.resolve(void 0);
            r = function() {
              d.then(u);
            };
          } else
            r = function() {
              i.call(n, u);
            };
        else {
          let l = !0;

          const f = document.createTextNode('');
          new o(u).observe(f, { characterData: !0 }),
            (r = function() {
              f.data = l = !l;
            });
        }
        return function(n) {
          const i = { fn: n, next: void 0 };
          t && (t.next = i), e || ((e = i), r()), (t = i);
        };
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        const n = void 0 === r;
        switch (t.length) {
          case 0:
            return n ? e() : e.call(r);
          case 1:
            return n ? e(t[0]) : e.call(r, t[0]);
          case 2:
            return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
          case 3:
            return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
          case 4:
            return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
        }
        return e.apply(r, t);
      };
    },
    function(e, t, r) {
      const n = r(44);

      const i = r(145);

      const o = r(144);

      const a = r(9);

      const s = r(69);

      const c = r(119);

      const u = {};

      const d = {};
      ((t = e.exports = function(e, t, r, l, f) {
        let p;

        let h;

        let m;

        let v;

        const g = f
          ? function() {
              return e;
            }
          : c(e);

        const y = n(r, l, t ? 2 : 1);

        let S = 0;
        if (typeof g !== 'function') throw TypeError(`${e} is not iterable!`);
        if (o(g)) {
          for (p = s(e.length); p > S; S++)
            if ((v = t ? y(a((h = e[S]))[0], h[1]) : y(e[S])) === u || v === d) return v;
        } else
          for (m = g.call(e); !(h = m.next()).done; )
            if ((v = i(m, y, h.value, t)) === u || v === d) return v;
      }).BREAK = u),
        (t.RETURN = d);
    },
    function(e, t) {
      e.exports = function(e, t, r, n) {
        if (!(e instanceof t) || (void 0 !== n && n in e))
          throw TypeError(`${r}: incorrect invocation!`);
        return e;
      };
    },
    function(e, t, r) {
      let n;

      let i;

      let o;

      let a;

      const s = r(20);

      const c = r(1);

      const u = r(44);

      const d = r(103);

      const l = r(13);

      const f = r(11);

      const p = r(61);

      const h = r(257);

      const m = r(256);

      const v = r(162);

      const g = r(161).set;

      const y = r(254)();

      const S = r(128);

      const b = r(160);

      const _ = r(253);

      const C = r(159);

      const T = c.TypeError;

      const R = c.process;

      const w = R && R.versions;

      const k = (w && w.v8) || '';

      let E = c.Promise;

      const P = d(R) == 'process';

      const O = function() {};

      let I = (i = S.f);

      const x = !!(function() {
        try {
          const e = E.resolve(1);

          const t = ((e.constructor = {})[r(2)('species')] = function(e) {
            e(O, O);
          });
          return (
            (P || typeof PromiseRejectionEvent === 'function') &&
            e.then(O) instanceof t &&
            k.indexOf('6.6') !== 0 &&
            _.indexOf('Chrome/66') === -1
          );
        } catch (e) {}
      })();

      const M = function(e) {
        let t;
        return !(!f(e) || typeof (t = e.then) !== 'function') && t;
      };

      const A = function(e, t) {
        if (!e._n) {
          e._n = !0;
          const r = e._c;
          y(() => {
            for (
              var n = e._v,
                i = e._s == 1,
                o = 0,
                a = function(t) {
                  let r;

                  let o;

                  let a;

                  const s = i ? t.ok : t.fail;

                  const c = t.resolve;

                  const u = t.reject;

                  const d = t.domain;
                  try {
                    s
                      ? (i || (e._h == 2 && j(e), (e._h = 1)),
                        !0 === s
                          ? (r = n)
                          : (d && d.enter(), (r = s(n)), d && (d.exit(), (a = !0))),
                        r === t.promise
                          ? u(T('Promise-chain cycle'))
                          : (o = M(r))
                            ? o.call(r, c, u)
                            : c(r))
                      : u(n);
                  } catch (e) {
                    d && !a && d.exit(), u(e);
                  }
                };
              r.length > o;

            )
              a(r[o++]);
            (e._c = []), (e._n = !1), t && !e._h && D(e);
          });
        }
      };

      var D = function(e) {
        g.call(c, () => {
          let t;

          let r;

          let n;

          const i = e._v;

          const o = L(e);
          if (
            (o &&
              ((t = b(() => {
                P
                  ? R.emit('unhandledRejection', i, e)
                  : (r = c.onunhandledrejection)
                    ? r({ promise: e, reason: i })
                    : (n = c.console) && n.error && n.error('Unhandled promise rejection', i);
              })),
              (e._h = P || L(e) ? 2 : 1)),
            (e._a = void 0),
            o && t.e)
          )
            throw t.v;
        });
      };

      var L = function(e) {
        return e._h !== 1 && (e._a || e._c).length === 0;
      };

      var j = function(e) {
        g.call(c, () => {
          let t;
          P
            ? R.emit('rejectionHandled', e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      };

      const N = function(e) {
        let t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          A(t, !0));
      };

      var V = function(e) {
        let t;

        let r = this;
        if (!r._d) {
          (r._d = !0), (r = r._w || r);
          try {
            if (r === e) throw T("Promise can't be resolved itself");
            (t = M(e))
              ? y(() => {
                  const n = { _w: r, _d: !1 };
                  try {
                    t.call(e, u(V, n, 1), u(N, n, 1));
                  } catch (e) {
                    N.call(n, e);
                  }
                })
              : ((r._v = e), (r._s = 1), A(r, !1));
          } catch (e) {
            N.call({ _w: r, _d: !1 }, e);
          }
        }
      };
      x ||
        ((E = function(e) {
          h(this, E, 'Promise', '_h'), p(e), n.call(this);
          try {
            e(u(V, this, 1), u(N, this, 1));
          } catch (e) {
            N.call(this, e);
          }
        }),
        ((n = function(e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = r(252)(E.prototype, {
          then(e, t) {
            const r = I(v(this, E));
            return (
              (r.ok = typeof e !== 'function' || e),
              (r.fail = typeof t === 'function' && t),
              (r.domain = P ? R.domain : void 0),
              this._c.push(r),
              this._a && this._a.push(r),
              this._s && A(this, !1),
              r.promise
            );
          },
          catch(e) {
            return this.then(void 0, e);
          },
        })),
        (o = function() {
          const e = new n();
          (this.promise = e), (this.resolve = u(V, e, 1)), (this.reject = u(N, e, 1));
        }),
        (S.f = I = function(e) {
          return e === E || e === a ? new o(e) : i(e);
        })),
        l(l.G + l.W + l.F * !x, { Promise: E }),
        r(31)(E, 'Promise'),
        r(251)('Promise'),
        (a = r(3).Promise),
        l(l.S + l.F * !x, 'Promise', {
          reject(e) {
            const t = I(this);
            return (0, t.reject)(e), t.promise;
          },
        }),
        l(l.S + l.F * (s || !x), 'Promise', {
          resolve(e) {
            return C(s && this === a ? E : this, e);
          },
        }),
        l(
          l.S +
            l.F *
              !(
                x &&
                r(143)(e => {
                  E.all(e).catch(O);
                })
              ),
          'Promise',
          {
            all(e) {
              const t = this;

              const r = I(t);

              const n = r.resolve;

              const i = r.reject;

              const o = b(() => {
                const r = [];

                let o = 0;

                let a = 1;
                m(e, !1, e => {
                  const s = o++;

                  let c = !1;
                  r.push(void 0),
                    a++,
                    t.resolve(e).then(e => {
                      c || ((c = !0), (r[s] = e), --a || n(r));
                    }, i);
                }),
                  --a || n(r);
              });
              return o.e && i(o.v), r.promise;
            },
            race(e) {
              const t = this;

              const r = I(t);

              const n = r.reject;

              const i = b(() => {
                m(e, !1, e => {
                  t.resolve(e).then(r.resolve, n);
                });
              });
              return i.e && n(i.v), r.promise;
            },
          }
        );
    },
    function(e, t, r) {
      r(72), r(51), r(60), r(258), r(250), r(249), (e.exports = r(3).Promise);
    },
    function(e, t, r) {
      e.exports = { default: r(259), __esModule: !0 };
    },
    function(e, t) {
      !(function(t) {
        let r;

        const n = Object.prototype;

        const i = n.hasOwnProperty;

        const o = typeof Symbol === 'function' ? Symbol : {};

        const a = o.iterator || '@@iterator';

        const s = o.asyncIterator || '@@asyncIterator';

        const c = o.toStringTag || '@@toStringTag';

        const u = typeof e === 'object';

        let d = t.regeneratorRuntime;
        if (d) u && (e.exports = d);
        else {
          (d = t.regeneratorRuntime = u ? e.exports : {}).wrap = b;
          var l = 'suspendedStart';

          var f = 'suspendedYield';

          var p = 'executing';

          var h = 'completed';

          var m = {};

          let v = {};
          v[a] = function() {
            return this;
          };
          const g = Object.getPrototypeOf;

          const y = g && g(g(x([])));
          y && y !== n && i.call(y, a) && (v = y);
          const S = (R.prototype = C.prototype = Object.create(v));
          (T.prototype = S.constructor = R),
            (R.constructor = T),
            (R[c] = T.displayName = 'GeneratorFunction'),
            (d.isGeneratorFunction = function(e) {
              const t = typeof e === 'function' && e.constructor;
              return !!t && (t === T || (t.displayName || t.name) === 'GeneratorFunction');
            }),
            (d.mark = function(e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, R)
                  : ((e.__proto__ = R), c in e || (e[c] = 'GeneratorFunction')),
                (e.prototype = Object.create(S)),
                e
              );
            }),
            (d.awrap = function(e) {
              return { __await: e };
            }),
            w(k.prototype),
            (k.prototype[s] = function() {
              return this;
            }),
            (d.AsyncIterator = k),
            (d.async = function(e, t, r, n) {
              const i = new k(b(e, t, r, n));
              return d.isGeneratorFunction(t)
                ? i
                : i.next().then(e => {
                    return e.done ? e.value : i.next();
                  });
            }),
            w(S),
            (S[c] = 'Generator'),
            (S[a] = function() {
              return this;
            }),
            (S.toString = function() {
              return '[object Generator]';
            }),
            (d.keys = function(e) {
              const t = [];
              for (const r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    const n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (d.values = x),
            (I.prototype = {
              constructor: I,
              reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = r),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (const t in this)
                    t.charAt(0) === 't' && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r);
              },
              stop() {
                this.done = !0;
                const e = this.tryEntries[0].completion;
                if (e.type === 'throw') throw e.arg;
                return this.rval;
              },
              dispatchException(e) {
                if (this.done) throw e;
                const t = this;
                function n(n, i) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = e),
                    (t.next = n),
                    i && ((t.method = 'next'), (t.arg = r)),
                    !!i
                  );
                }
                for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                  const a = this.tryEntries[o];

                  var s = a.completion;
                  if (a.tryLoc === 'root') return n('end');
                  if (a.tryLoc <= this.prev) {
                    const c = i.call(a, 'catchLoc');

                    const u = i.call(a, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt(e, t) {
                for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                  const n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, 'finallyLoc') &&
                    this.prev < n.finallyLoc
                  ) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  (e === 'break' || e === 'continue') &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                const a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(a)
                );
              },
              complete(e, t) {
                if (e.type === 'throw') throw e.arg;
                return (
                  e.type === 'break' || e.type === 'continue'
                    ? (this.next = e.arg)
                    : e.type === 'return'
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : e.type === 'normal' && t && (this.next = t),
                  m
                );
              },
              finish(e) {
                for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                  const r = this.tryEntries[t];
                  if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), m;
                }
              },
              catch(e) {
                for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                  const r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    const n = r.completion;
                    if (n.type === 'throw') {
                      var i = n.arg;
                      O(r);
                    }
                    return i;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield(e, t, n) {
                return (
                  (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                  this.method === 'next' && (this.arg = r),
                  m
                );
              },
            });
        }
        function b(e, t, r, n) {
          const i = t && t.prototype instanceof C ? t : C;

          const o = Object.create(i.prototype);

          const a = new I(n || []);
          return (
            (o._invoke = (function(e, t, r) {
              let n = l;
              return function(i, o) {
                if (n === p) throw new Error('Generator is already running');
                if (n === h) {
                  if (i === 'throw') throw o;
                  return M();
                }
                for (r.method = i, r.arg = o; ; ) {
                  const a = r.delegate;
                  if (a) {
                    const s = E(a, r);
                    if (s) {
                      if (s === m) continue;
                      return s;
                    }
                  }
                  if (r.method === 'next') r.sent = r._sent = r.arg;
                  else if (r.method === 'throw') {
                    if (n === l) throw ((n = h), r.arg);
                    r.dispatchException(r.arg);
                  } else r.method === 'return' && r.abrupt('return', r.arg);
                  n = p;
                  const c = _(e, t, r);
                  if (c.type === 'normal') {
                    if (((n = r.done ? h : f), c.arg === m)) continue;
                    return { value: c.arg, done: r.done };
                  }
                  c.type === 'throw' && ((n = h), (r.method = 'throw'), (r.arg = c.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function _(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        function C() {}
        function T() {}
        function R() {}
        function w(e) {
          ['next', 'throw', 'return'].forEach(t => {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function k(e) {
          let t;
          this._invoke = function(r, n) {
            function o() {
              return new Promise((t, o) => {
                !(function t(r, n, o, a) {
                  const s = _(e[r], e, n);
                  if (s.type !== 'throw') {
                    const c = s.arg;

                    const u = c.value;
                    return u && typeof u === 'object' && i.call(u, '__await')
                      ? Promise.resolve(u.__await).then(
                          e => {
                            t('next', e, o, a);
                          },
                          e => {
                            t('throw', e, o, a);
                          }
                        )
                      : Promise.resolve(u).then(e => {
                          (c.value = e), o(c);
                        }, a);
                  }
                  a(s.arg);
                })(r, n, t, o);
              });
            }
            return (t = t ? t.then(o, o) : o());
          };
        }
        function E(e, t) {
          const n = e.iterator[t.method];
          if (n === r) {
            if (((t.delegate = null), t.method === 'throw')) {
              if (
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = r), E(e, t), t.method === 'throw')
              )
                return m;
              (t.method = 'throw'),
                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return m;
          }
          const i = _(n, e.iterator, t.arg);
          if (i.type === 'throw')
            return (t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), m;
          const o = i.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                t.method !== 'return' && ((t.method = 'next'), (t.arg = r)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              m);
        }
        function P(e) {
          const t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          const t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function I(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
        }
        function x(e) {
          if (e) {
            const t = e[a];
            if (t) return t.call(e);
            if (typeof e.next === 'function') return e;
            if (!isNaN(e.length)) {
              let n = -1;

              const o = function t() {
                for (; ++n < e.length; )
                  if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = r), (t.done = !0), t;
              };
              return (o.next = o);
            }
          }
          return { next: M };
        }
        function M() {
          return { value: r, done: !0 };
        }
      })(
        (function() {
          return this;
        })() || Function('return this')()
      );
    },
    function(e, t, r) {
      const n =
        (function() {
          return this;
        })() || Function('return this')();

      const i =
        n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf('regeneratorRuntime') >= 0;

      const o = i && n.regeneratorRuntime;
      if (((n.regeneratorRuntime = void 0), (e.exports = r(261)), i)) n.regeneratorRuntime = o;
      else
        try {
          delete n.regeneratorRuntime;
        } catch (e) {
          n.regeneratorRuntime = void 0;
        }
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = g(r(14));

      const i = g(r(48));

      const o = g(r(22));

      const a = g(r(21));

      const s = g(r(163));

      const c = r(113);

      const u = r(52);

      const d = r(64);

      const l = g(r(230));

      const f = g(r(218));

      const p = g(r(217));

      const h = g(r(216));

      const m = g(r(215));

      const v = g(r(214));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let y = null;

      const S = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (r.logger = e.logger || {}), r.resetStatus(), r.init(), r;
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'resetStatus',
              value() {
                this.rtc && this.rtc.signalingState !== 'closed' && this.rtc.close(),
                  this.stopStats(),
                  this.stopAudioMonitor(),
                  this.destroyLocalMediaStream(),
                  this.destroyRemoteNode(),
                  this._reset(),
                  (this.currRmoteOffer = null),
                  (this.rtc = null),
                  (this.rtcLogined = !1),
                  (this.rtcConnected = !1),
                  (this.reConnectCount = 0),
                  (this.remote_SdpOffers = []),
                  (this.remoteStreams = {}),
                  (this.remoteNode = {}),
                  (this.currRemoteTrack = {}),
                  (this.deviceVideoStatus = !1),
                  (this.deviceAudioStatus = !1),
                  (this.monitorRemoteStreamStartTime = null),
                  (this.userJoinTimeoutId = null);
              },
            },
            {
              key: 'destroy',
              value() {
                this.stopSession(),
                  this.resetStatus(),
                  (this.mediaDevices = null),
                  (this.rtcRecorder = null),
                  (this.stats = null),
                  (this.statsNew = null),
                  (this.dataStats = null),
                  (this.dataRtc = null);
              },
            },
            {
              key: 'init',
              value() {
                (this.mediaDevices = new c.MDevices()),
                  this.mediaDevices.on('deviceStatus', this.onDeviceStatusChange.bind(this)),
                  this.mediaDevices.on('deviceAdd', this.onDeviceAdd.bind(this)),
                  this.mediaDevices.on('deviceRemove', this.onDeviceRemove.bind(this)),
                  (this.rtcRecorder = new c.Recorder()),
                  this.initStats(),
                  d.RtcUtil.init(this.logger),
                  c.Recorder.init(this.logger),
                  c.MStream.init(this.logger),
                  y || (y = d.RtcSupport.checkVersion());
              },
            },
            {
              key: 'startSession',
              value() {
                const e = this;

                const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this.imInfo = t),
                  (this.sessionConfig = Object.assign(this.sessionConfig, t.sessionConfig));
                const r = u.constantTool.getVideoSessionConfig({
                  quality: this.sessionConfig.videoQuality,
                  frameRate: this.sessionConfig.videoFrameRate,
                });
                return (
                  (this.imInfo = Object.assign(this.imInfo, { videoConfig: r })),
                  this._startSession()
                    .then(t => {
                      return e.rtcLogin();
                    })
                    .then(t => {
                      e.startStats(), (e.rtcLogined = !0);
                      const r = e.mediaDevices.getDeviceStatus();

                      const n = (e.deviceAudioStatus && r.hasAudio && !e.imInfo.role) || !1;

                      const i = (e.deviceVideoStatus && r.hasVideo && !e.imInfo.role) || !1;
                      console.log('this.deviceAudioStatus', e.deviceAudioStatus),
                        console.log('deviceStatus.hasAudio', r.hasAudio),
                        console.log('this.imInfo.role', e.imInfo.role),
                        (n || i) && e.initRtc(),
                        e.startAudioMonitor();
                    })
                    .catch(e => {
                      return Promise.reject(e);
                    })
                );
              },
            },
            {
              key: 'stopSession',
              value() {
                const e = this;
                return (
                  this.stopStats(),
                  this.rtcLogout(),
                  this._stopSession(),
                  this.stopRecord().catch(t => {
                    return e.logger.warn('webrtc-controller::停止音视频录制相关工作');
                  }),
                  this.resetStatus(),
                  Promise.resolve()
                );
              },
            },
            {
              key: 'initRtcEvent',
              value(e) {
                const t = this;
                e &&
                  (e.on('sessionConnected', () => {
                    t.emit('sessionConnected');
                  }),
                  e.on('getRemoteStream', this.onRemoteStream.bind(this)),
                  e.on('iceCandidate', this.onLocalIceCandidate.bind(this)),
                  e.on('negotiationneeded', this.onNegotiationNeeded.bind(this)),
                  e.on('icestatechange', this.onIceStateChange.bind(this)),
                  this.mediaDevices.getDevices().then(e => {
                    t.emit('devices', e);
                  }));
              },
            },
            {
              key: 'rtcLogin',
              value() {
                const e = this;
                return (
                  console.log('rtcLogin'),
                  this.sendLocalMessage({ isLogin: !0 }),
                  new Promise((t, r) => {
                    e.once('LoginSuccess', r => {
                      e.logger.log('once LoginSuccess--\x3e', r), t();
                    }),
                      e.once('LoginFailed', t => {
                        e.logger.log('once LoginFailed--\x3e', t), r(t);
                      });
                  })
                );
              },
            },
            {
              key: 'rtcLogout',
              value() {
                const e = { params: { content: { timestamp: Date.now() } } };
                this.sendMsg('logout', e);
              },
            },
            {
              key: 'initRtc',
              value(e) {
                return (
                  console.log('initRtc'),
                  this.rtc
                    ? Promise.resolve()
                    : ((this.rtc = new l.default({
                        imInfo: this.imInfo,
                        logger: this.logger,
                        sessionConfig: this.sessionConfig,
                        controller: this,
                      })),
                      this.initRtcEvent(this.rtc),
                      this.uploadDataRtcStart(),
                      this.updateRtcStream(),
                      this.startRtc(e))
                );
              },
            },
            {
              key: 'updateRtc',
              value(e) {
                return this.imInfo.role === 0 || this.imInfo.sessionMode === 'p2p' || this.rtc
                  ? this.rtc
                    ? (this.updateRtcStream(),
                      this.createOffer({ isUpdate: !0, chromeShare: e && e.chromeShare }))
                    : this.initRtc({ isUpdate: !0, chromeShare: e && e.chromeShare })
                  : Promise.resolve();
              },
            },
            {
              key: 'startRtc',
              value(e) {
                const t = this;

                const r = this.imInfo.sessionMode;
                return this.createOffer(e)
                  .then(() => {
                    return new Promise((e, n) => {
                      t.once('sessionConnected', r => {
                        t.logger.log('rtc connect success'),
                          (t.rtcConnected = !0),
                          t.setSessionConfig({ rtcEndTime: Date.now() }),
                          e(r);
                      }),
                        t.once('rtcConnectError', e => {
                          t.uploadDataRtcStop(), n(e);
                        }),
                        r === 'p2p' &&
                          (t.userJoinTimeoutId = setTimeout(() => {
                            n('user join timeout');
                          }, 5e4));
                    });
                  })
                  .catch(e => {
                    return Promise.reject(e);
                  });
              },
            },
            {
              key: 'sendMsg',
              value(e, t) {
                let r = { type: e, uid: `${this.imInfo.uid}`, cid: `${this.imInfo.cid}` };
                this.sessionDuration(e),
                  (r = Object.assign(r, t)),
                  this.signal && this.logger.log(`webrtc-controller::sendMsg ---\x3e ${e}`, r),
                  this.signal && this.signal.send(r);
              },
            },
            {
              key: 'onSignalMessage',
              value(e) {
                if (
                  (e && e.cid && e.uid && ((e.cid = +e.cid), (e.uid = +e.uid)),
                  e.cid !== this.imInfo.cid)
                )
                  return this.logger.error(
                    'webrtc-controller::websocket message not belong to this session'
                  );
                const t = e.type;
                this[`on${t}`] && this[`on${t}`](e);
              },
            },
            {
              key: 'hangup',
              value() {
                this.stopSession(),
                  this.userJoinTimeoutId !== null &&
                    (clearTimeout(this.userJoinTimeoutId), (this.userJoinTimeoutId = null)),
                  this.resetStatus();
              },
            },
            {
              key: 'sessionDuration',
              value(e) {
                if (
                  (e === 'client_login' &&
                    this.imInfo.sessionMode === 'meeting' &&
                    (this.startSessionTime = this.startSessionTime
                      ? this.startSessionTime
                      : Date.now()),
                  e === 'logout')
                ) {
                  if (!this.startSessionTime) return void this.logger.log('没有通话开始时间异常');
                  this.endSessionTime = Date.now();
                  const t = this.endSessionTime - this.startSessionTime;
                  this.emit('sessionDuration', t),
                    (this.startSessionTime = 0),
                    (this.endSessionTime = 0);
                }
              },
            },
            {
              key: 'resetReconnect',
              value() {
                this._stopSignal(),
                  this.rtc && this.rtc.signalingState !== 'closed' && this.rtc.close(),
                  this.stopStats(),
                  this.stopAudioMonitor(),
                  this.destroyRemoteNode(),
                  (this.currRmoteOffer = null),
                  (this.rtc = null),
                  (this.rtcLogined = !1),
                  (this.rtcConnected = !1),
                  (this.remote_SdpOffers = []),
                  (this.remoteStreams = {}),
                  (this.remoteNode = {}),
                  (this.currRemoteTrack = {}),
                  (this.monitorRemoteStreamStartTime = null),
                  (this.userJoinTimeoutId = null);
              },
            },
            {
              key: 'onSignalTimeout',
              value(e) {
                const t = this;
                if ((this.logger.log('网络断开了!'), this.reConnectCount >= 2))
                  return (
                    this.logger.log('重连次数用尽失败!'),
                    this.emit('reconnectFailed', 0),
                    this.stopSession(),
                    void this.emit('signalClosed')
                  );
                this.reConnectCount++,
                  this.emit('willReconnect', this.reConnectCount),
                  this.resetReconnect(),
                  this.reConnectCount === 1
                    ? (this.logger.log(`立即尝试第${this.reConnectCount}次重连服务器`),
                      this.reConnectFc())
                    : (this.logger.log(`15s后尝试第${this.reConnectCount}次重连服务器`),
                      setTimeout(() => {
                        t.reConnectFc();
                      }, 15e3));
              },
            },
            {
              key: 'reConnectFc',
              value() {
                const e = this;
                return (
                  this.logger.log('开始重连'),
                  this.imInfo && this.imInfo.cid
                    ? this._startSession()
                        .then(t => {
                          return e.rtcLogin();
                        })
                        .then(t => {
                          e.startStats(), (e.rtcLogined = !0);
                          const r = e.mediaDevices.getDeviceStatus();

                          const n = (e.deviceAudioStatus && r.hasAudio && !e.imInfo.role) || !1;

                          const i = (e.deviceVideoStatus && r.hasVideo && !e.imInfo.role) || !1;
                          console.log('this.deviceAudioStatus', e.deviceAudioStatus),
                            console.log('deviceStatus.hasAudio', r.hasAudio),
                            console.log('this.imInfo.role', e.imInfo.role),
                            (n || i) && e.initRtc(),
                            e.startAudioMonitor(),
                            (e.reConnectCount = 0),
                            e.logger.log('重连成功!'),
                            e.emit('reconnectSuccess');
                        })
                        .catch(t => {
                          return (
                            e.emit('reconnectFailed', 1), e.onSignalTimeout(), Promise.reject(t)
                          );
                        })
                    : (this.logger.log('缺失imInfocid,重连失败!', this.imInfo),
                      this.stopSession(),
                      void this.emit('signalClosed'))
                );
              },
            },
            {
              key: 'onlogin_ack',
              value(e) {
                this.logger.log('onlogin_ack--\x3e', e);
                const t = e.params.auth_res - 0;
                if (t !== 200)
                  return (
                    this.logger.warn('服务器验证不通过, 断开连接'),
                    this.emit('LoginFailed', { code: t, error: '服务器验证不通过, 断开连接' }),
                    void this.stopSession()
                  );
                this.logger.log('音视频服务器登录成功', e), this.emit('LoginSuccess');
              },
            },
            {
              key: 'onclient_join',
              value(e) {
                console.log('onclient_join, ', e),
                  this.imInfo.sessionMode === 'p2p' &&
                    (this.userJoinTimeoutId && clearTimeout(this.userJoinTimeoutId),
                    (this.userJoinTimeoutId = 0),
                    (this.startSessionTime = Date.now())),
                  this.emit('userJoined', { uid: e.params.client_id, cid: this.imInfo.cid });
              },
            },
            {
              key: '_onclient_join',
              value(e) {
                if (this.remoteNode[e]) return this._onclient_update(e, !0);
                const t = new l.default({
                  imInfo: this.imInfo,
                  logger: this.logger,
                  sessionConfig: this.sessionConfig,
                  targetUid: e,
                  controller: this,
                });
                this.initRtcEvent(t),
                  (this.remoteNode[e] = {
                    isAudioEnable: !1,
                    isVideoEnable: !1,
                    container: this.info.remoteContainer,
                    rtc: t,
                  }),
                  this.createOffer({ rtc: t });
              },
            },
            {
              key: 'onclient_update',
              value(e) {
                console.log('onclient_update, ', e, this.remoteNode[t]);
                var t = e.params.client_id;

                const r = e.params;

                const n = r.has_video;

                const i = r.has_audio;
                if (
                  (this.emit('remoteStreamUpdate', { uid: t, audio: i, video: n }),
                  this.remoteNode[t])
                )
                  return y.prefix === 'Firefox' && y.version - 0 >= 59
                    ? this._delayVideoShow(t, n)
                    : this._onclient_update(t, n);
                (!i && !n) || this.remoteNode[t] || this._onclient_join(t);
              },
            },
            {
              key: '_onclient_update',
              value(e, t) {
                if (this.remoteNode[e]) {
                  const r = this.remoteNode[e].rtc;
                  r && (t ? this.createOffer({ rtc: r }) : this.delayVideoShow(e, t));
                } else this._onclient_join(e);
              },
            },
            {
              key: 'onclient_logout',
              value(e) {
                let t = e.params.content.logout_type;
                t =
                  t === 'normal'
                    ? u.constantRtc.HANGUP_TYPE_NORMAL
                    : u.constantRtc.HANGUP_TYPE_TIMEOUT;
                const r = e.uid;

                const n = e.cid;
                this.emit('leaveChannel', { uid: r, cid: n, type: t }),
                  this.remoteNode.hasOwnProperty(r) &&
                    (this.destroyRemoteNode(r),
                    this.removeRemoteUserStream(r),
                    this.rtcRecorder && this.rtcRecorder.leave({ uid: r }));
              },
            },
            {
              key: 'startAudioMonitor',
              value() {
                let e = this.audioMonitorTimer;
                e ||
                  (e = this.audioMonitorTimer = setInterval(() => {
                    const e = {};

                    let t = 0;
                    this.localAudioStream && (t = this.localAudioStream.getAudioVolume());
                    (e.self = { status: t }), this.uploadDataRtc('volume', e.self.status);
                    const r = this.remoteNode;
                    for (const n in r) {
                      const i = this.info.client.getAccountWithUid(n);
                      (t =
                        r[n] && r[n].remoteAudioStream
                          ? r[n].remoteAudioStream.getAudioVolume()
                          : 0),
                        (e[i || n] = { status: t });
                    }
                    this.emit('audioVolume', e);
                  }, 500));
              },
            },
            {
              key: 'stopAudioMonitor',
              value() {
                let e = this.audioMonitorTimer;
                e && (clearInterval(e), (e = this.audioMonitorTimer = null));
              },
            },
          ]),
          t
        );
      })(s.default);

      let b = S.prototype;
      (b = Object.assign(b, f.default)),
        (b = Object.assign(b, p.default)),
        (b = Object.assign(b, m.default)),
        (b = Object.assign(b, h.default)),
        (b = Object.assign(b, v.default)),
        (t.default = S),
        (e.exports = t.default);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = r(153);
      Object.defineProperty(t, 'monitor', {
        enumerable: !0,
        get() {
          return s(n).default;
        },
      });
      const i = r(152);
      Object.defineProperty(t, 'signal', {
        enumerable: !0,
        get() {
          return s(i).default;
        },
      });
      const o = r(70);
      Object.defineProperty(t, 'configMap', {
        enumerable: !0,
        get() {
          return s(o).default;
        },
      });
      const a = r(42);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'utils', {
        enumerable: !0,
        get() {
          return s(a).default;
        },
      });
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = m(r(14));

      const i = m(r(48));

      const o = m(r(22));

      const a = m(r(21));

      const s = r(357);

      const c = r(52);

      const u = r(42);

      const d = m(r(164));

      const l = m(r(263));

      const f = m(r(213));

      const p = m(r(212));

      const h = m(r(211));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      s.configMap.CURRENT.SDK_TYPE = s.configMap.SDK_TYPE.NRTC;
      const v = (function(e) {
        function t(e) {
          (0, n.default)(this, t);
          const r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.initNRTC(), r;
        }
        return (
          (0, a.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'initNRTC',
              value() {
                (this.devices = { hasAudio: !1, hasVideo: !1 }), this.initController();
              },
            },
            {
              key: 'initController',
              value() {
                const e = this;
                (window.myNrtcContrl = this.controller = new l.default({
                  logger: this.logger,
                  container: this.container,
                  remoteContainer: this.remoteContainer,
                  chromeId: this.chromeId,
                  client: this,
                })),
                  this.controller.on('sessionConnected', t => {
                    e.emit('sessionConnected', t);
                  }),
                  this.controller.on('signalClosed', t => {
                    e.emit('signalClosed', t);
                  }),
                  this.controller.on('remoteSignalClosed', t => {
                    e.emit('remoteSignalClosed', { uid: t });
                  }),
                  this.controller.on('userJoined', t => {
                    (t.cid = e.imInfo.cid), e.emit('joinChannel', t);
                  }),
                  this.controller.on('leaveChannel', t => {
                    e.emit('leaveChannel', t);
                  }),
                  this.controller.on('remoteTrack', t => {
                    (t.type = t.track.kind), e.emit('remoteTrack', t);
                  }),
                  this.controller.on('remoteStreamUpdate', t => {
                    e.emit('remoteStreamUpdate', t);
                  }),
                  this.controller.on('deviceStatus', t => {
                    e.emit('deviceStatus', t);
                  }),
                  this.controller.on('deviceAdd', t => {
                    e.emit('deviceAdd', t);
                  }),
                  this.controller.on('deviceRemove', t => {
                    e.emit('deviceRemove', t);
                  }),
                  this.controller.on('devices', t => {
                    e.emit('devices', t);
                  }),
                  this.controller.on('statistics', t => {
                    e.emit('statistics', t);
                  }),
                  this.controller.on('willReconnect', t => {
                    e.emit('willReconnect', t);
                  }),
                  this.controller.on('reconnectFailed', t => {
                    e.emit('reconnectFailed', t);
                  }),
                  this.controller.on('reconnectSuccess', t => {
                    e.emit('reconnectSuccess', t);
                  }),
                  this.controller.on('sessionDuration', t => {
                    e.emit('sessionDuration', t);
                  }),
                  this.controller.on('signalClosed', t => {
                    e.emit('signalClosed', t);
                  }),
                  this.controller.on('audioVolume', t => {
                    e.emit('audioVolume', t);
                  });
              },
            },
            {
              key: 'startSession',
              value() {
                const e = this;
                return (
                  u.tool.verifyOptions(this.imInfo, 'appkey cid uid token sessionMode wssArr'),
                  this.controller.startSession(this.imInfo).then(t => {
                    return (e.signalInited = !0), t;
                  })
                );
              },
            },
            {
              key: 'stopSession',
              value() {
                const e = this;
                return (
                  this.controller.uploadDataApi('send'),
                  this.controller.stopSession().then(t => {
                    return (e.signalInited = !1), t;
                  })
                );
              },
            },
            {
              key: 'startRtc',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.startSession(e);
              },
            },
            {
              key: 'joinChannel',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (e.cid += ''),
                  (e.uid += ''),
                  u.tool.verifyOptions(e, 'appkey cid uid token sessionMode wssArr'),
                  e.liveEnable && u.tool.verifyOptions(e, 'turnToken');
                const t = Object.assign({}, e.sessionConfig || {});
                if (
                  ((this.imInfo = e),
                  (this.sessionMode = e.sessionMode),
                  (this.imInfo.token = (e.token && `${e.token}`) || ''),
                  (this.imInfo.turnToken = (e.turnToken && `${e.turnToken}`) || ''),
                  (this.imInfo.role = void 0 === e.role ? 0 : e.role),
                  (t.liveEnable = e.liveEnable || t.liveEnable),
                  !e.wssArr)
                )
                  return Promise.reject('no wssArr');
                if (
                  (e.wssArr.constructor === String && (e.wssArr = [e.wssArr]),
                  e.appkey && this.controller.setAppKey(e.appkey),
                  (this.imInfo.serverAddrs = e.wssArr),
                  this.controller.uploadDataApi('start', { uid: this.imInfo.uid }),
                  this.controller.uploadDataApi('update', { key: this.sessionMode }),
                  t.highAudio && this.controller.uploadDataApi('update', { key: 'hd_audio' }),
                  void 0 !== t.videoFrameRate &&
                    this.controller.uploadDataApi('update', {
                      key: 'fps',
                      ext: +t.videoFrameRate == 0 ? 0 : +t.videoFrameRate + 1,
                    }),
                  void 0 !== t.videoQuality)
                ) {
                  let r = +t.videoQuality;
                  r === c.constantRtc.CHAT_VIDEO_QUALITY_540P
                    ? (r = c.constantRtc.CHAT_VIDEO_QUALITY_720P)
                    : r === c.constantRtc.CHAT_VIDEO_QUALITY_720P &&
                      (r = c.constantRtc.CHAT_VIDEO_QUALITY_540P),
                    this.controller.uploadDataApi('update', {
                      key: 'video_quality',
                      ext: r || 0,
                    });
                }
                return this.setSessionConfig(t), Promise.resolve(e);
              },
            },
            {
              key: 'leaveChannel',
              value() {
                return this.stopSession();
              },
            },
            {
              key: 'hangup',
              value() {
                return this.stopSession();
              },
            },
            {
              key: 'switchNetcallMode',
              value(e) {
                e && (this.imInfo.type = e);
              },
            },
            {
              key: 'destroy',
              value() {
                const e = this;
                this.controller.destroy(),
                  (this.controller = null),
                  Object.keys(this).map(t => {
                    (e[t] = null), delete e[t];
                  });
              },
            },
            { key: 'control', value() {} },
            {
              key: 'onUserJoin',
              value(e) {
                console.log('userjoin ----\x3e from signal', e), this.emit('joinChannel', e);
              },
            },
            {
              key: 'sendCustomData',
              value(e) {
                e && this.controller(e);
              },
            },
            {
              key: 'setSessionConfig',
              value() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.controller.setSessionConfig(this.sessionConfig);
              },
            },
            {
              key: 'setSessionVideoQuality',
              value(e) {
                void 0 !== e && this.controller.setSessionConfig({ videoQuality: e });
              },
            },
            {
              key: 'setSessionVideoFrameRate',
              value(e) {
                void 0 !== e && this.controller.setSessionConfig({ videoFrameRate: e });
              },
            },
            {
              key: 'setSessionAudioQuality',
              value(e) {
                this.controller.setSessionConfig({ highAudio: !!e });
              },
            },
            {
              key: 'changeRoleToPlayer',
              value() {
                return this.imInfo.role === 0
                  ? Promise.resolve({ role: 'player' })
                  : ((this.imInfo.role = 0),
                    this.controller.switchRole().then(() => {
                      return Promise.resolve({ role: 'player' });
                    }));
              },
            },
            {
              key: 'changeRoleToAudience',
              value() {
                return this.imInfo.role === 1
                  ? Promise.resolve({ role: 'audience' })
                  : ((this.imInfo.role = 1),
                    this.controller.switchRole().then(() => {
                      return Promise.resolve({ role: 'audience' });
                    }));
              },
            },
            {
              key: 'updateRtmpUrl',
              value(e) {
                return (
                  this.controller.setSessionConfig({ rtmpUrl: e }),
                  this.controller.updateRtmpUrl(),
                  Promise.resolve()
                );
              },
            },
            {
              key: 'addStream',
              value(e) {
                this.controller.addStream(e);
              },
            },
          ]),
          t
        );
      })(d.default);

      let g = v.prototype;
      (g = Object.assign(g, f.default)),
        (g = Object.assign(g, p.default)),
        (g = Object.assign(g, h.default)),
        (t.default = v),
        (e.exports = t.default);
    },
    function(e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const n = c(r(67));

      const i = c(r(358));

      const o = r(52);

      const a = r(64);

      const s = c(r(210));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r(140),
        (t.default = (0, n.default)(
          { version: '5.4.0', versionRtc: '4.1.0' },
          o.constantRtc,
          a.RtcSupport,
          s.default,
          {
            getInstance(e) {
              return new i.default(e);
            },
            destroy(e) {
              e && (e.destroy(), (e = null));
            },
          }
        )),
        (e.exports = t.default);
    },
  ]);
});
