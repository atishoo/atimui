!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define([], t)
      : typeof exports === 'object'
        ? (exports.Chatroom = t())
        : (e.Chatroom = t());
})(window, () => {
  return (function(e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const o in e)
            n.d(
              r,
              o,
              (t => {
                return e[t];
              }).bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        const t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 286))
    );
  })([
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      n(15);
      const o = n(127);

      const i = n(110);
      n(206);
      const s = n(24);

      const a = s.getGlobal();

      const c = /\s+/;
      (s.deduplicate = function(e) {
        const t = [];
        return (
          e.forEach(e => {
            t.indexOf(e) === -1 && t.push(e);
          }),
          t
        );
      }),
        (s.capFirstLetter = function(e) {
          return e ? (e = `${e}`).slice(0, 1).toUpperCase() + e.slice(1) : '';
        }),
        (s.guid = (function() {
          const e = function() {
            return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
          };
          return function() {
            return e() + e() + e() + e() + e() + e() + e() + e();
          };
        })()),
        (s.extend = function(e, t, n) {
          for (const r in t) (void 0 !== e[r] && !0 !== n) || (e[r] = t[r]);
        }),
        (s.filterObj = function(e, t) {
          const n = {};
          return (
            s.isString(t) && (t = t.split(c)),
            t.forEach(t => {
              e.hasOwnProperty(t) && (n[t] = e[t]);
            }),
            n
          );
        }),
        (s.copy = function(e, t) {
          return (
            (t = t || {}),
            e
              ? (Object.keys(e).forEach(n => {
                  s.exist(e[n]) && (t[n] = e[n]);
                }),
                t)
              : t
          );
        }),
        (s.copyWithNull = function(e, t) {
          return (
            (t = t || {}),
            e
              ? (Object.keys(e).forEach(n => {
                  (s.exist(e[n]) || s.isnull(e[n])) && (t[n] = e[n]);
                }),
                t)
              : t
          );
        }),
        (s.findObjIndexInArray = function(e, t) {
          e = e || [];
          const n = t.keyPath || 'id';

          let r = -1;
          return (
            e.some((e, o) => {
              if (i(e, n) === t.value) return (r = o), !0;
            }),
            r
          );
        }),
        (s.findObjInArray = function(e, t) {
          const n = s.findObjIndexInArray(e, t);
          return n === -1 ? null : e[n];
        }),
        (s.mergeObjArray = function() {
          let e = [];

          const t = [].slice.call(arguments, 0, -1);

          let n = arguments[arguments.length - 1];
          s.isArray(n) && (t.push(n), (n = {}));
          let r;

          const o = (n.keyPath = n.keyPath || 'id');
          for (n.sortPath = n.sortPath || o; !e.length && t.length; )
            e = (e = t.shift() || []).slice(0);
          return (
            t.forEach(t => {
              t &&
                t.forEach(t => {
                  (r = s.findObjIndexInArray(e, { keyPath: o, value: i(t, o) })) !== -1
                    ? (e[r] = s.merge({}, e[r], t))
                    : e.push(t);
                });
            }),
            n.notSort || (e = s.sortObjArray(e, n)),
            e
          );
        }),
        (s.cutObjArray = function(e) {
          const t = e.slice(0);

          const n = arguments.length;

          const r = [].slice.call(arguments, 1, n - 1);

          let o = arguments[n - 1];
          s.isObject(o) || (r.push(o), (o = {}));
          let a;

          const c = (o.keyPath = o.keyPath || 'id');
          return (
            r.forEach(e => {
              s.isArray(e) || (e = [e]),
                e.forEach(e => {
                  e &&
                    ((o.value = i(e, c)),
                    (a = s.findObjIndexInArray(t, o)) !== -1 && t.splice(a, 1));
                });
            }),
            t
          );
        }),
        (s.sortObjArray = function(e, t) {
          const n = (t = t || {}).sortPath || 'id';
          o.insensitive = !!t.insensitive;
          let r;

          let a;

          let c;

          const u = !!t.desc;
          return (
            (c = s.isFunction(t.compare)
              ? t.compare
              : function(e, t) {
                  return (r = i(e, n)), (a = i(t, n)), u ? o(a, r) : o(r, a);
                }),
            e.sort(c)
          );
        }),
        (s.emptyFunc = function() {}),
        (s.isEmptyFunc = function(e) {
          return e === s.emptyFunc;
        }),
        (s.notEmptyFunc = function(e) {
          return e !== s.emptyFunc;
        }),
        (s.splice = function(e, t, n) {
          return [].splice.call(e, t, n);
        }),
        (s.reshape2d = function(e, t) {
          if (Array.isArray(e)) {
            s.verifyParamType('type', t, 'number', 'util::reshape2d');
            const n = e.length;
            if (n <= t) return [e];
            for (var r = Math.ceil(n / t), o = [], i = 0; i < r; i++)
              o.push(e.slice(i * t, (i + 1) * t));
            return o;
          }
          return e;
        }),
        (s.flatten2d = function(e) {
          if (Array.isArray(e)) {
            let t = [];
            return (
              e.forEach(e => {
                t = t.concat(e);
              }),
              t
            );
          }
          return e;
        }),
        (s.dropArrayDuplicates = function(e) {
          if (Array.isArray(e)) {
            for (var t = {}, n = []; e.length > 0; ) {
              t[e.shift()] = !0;
            }
            for (const r in t) !0 === t[r] && n.push(r);
            return n;
          }
          return e;
        }),
        (s.onError = function(e) {
          throw new function(e) {
            (void 0 === e ? 'undefined' : (0, r.default)(e)) === 'object'
              ? ((this.callFunc = e.callFunc || null), (this.message = e.message || 'UNKNOW ERROR'))
              : (this.message = e),
              (this.time = new Date()),
              (this.timetag = +this.time);
          }(e);
        }),
        (s.verifyParamPresent = function(e, t, n, r) {
          n = n || '';
          let o = !1;
          switch (s.typeOf(t)) {
            case 'undefined':
            case 'null':
              o = !0;
              break;
            case 'string':
              t === '' && (o = !0);
              break;
            case 'object':
              Object.keys(t).length || (o = !0);
              break;
            case 'array':
              t.length
                ? t.some(e => {
                    if (s.notexist(e)) return (o = !0), !0;
                  })
                : (o = !0);
          }
          o && s.onParamAbsent(n + e, r);
        }),
        (s.onParamAbsent = function(e, t) {
          s.onParamError(
            `缺少参数 ${e}, 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined`,
            t
          );
        }),
        (s.verifyParamAbsent = function(e, t, n, r) {
          (n = n || ''), void 0 !== t && s.onParamPresent(n + e, r);
        }),
        (s.onParamPresent = function(e, t) {
          s.onParamError(`多余的参数 ${e}`, t);
        }),
        (s.verifyParamType = function(e, t, n, r) {
          const o = s.typeOf(t).toLowerCase();
          s.isArray(n) || (n = [n]);
          let i = !0;
          switch (
            ((n = n.map(e => {
              return e.toLowerCase();
            })).indexOf(o) === -1 && (i = !1),
            o)
          ) {
            case 'number':
              isNaN(t) && (i = !1);
          }
          i || s.onParamInvalidType(e, n, '', r);
        }),
        (s.onParamInvalidType = function(e, t, n, r) {
          (n = n || ''),
            (t = s.isArray(t)
              ? (t = t.map(e => {
                  return `"${e}"`;
                })).join(', ')
              : `"${t}"`),
            s.onParamError(`参数"${n}${e}"类型错误, 合法的类型包括: [${t}]`, r);
        }),
        (s.verifyParamValid = function(e, t, n, r) {
          s.isArray(n) || (n = [n]), n.indexOf(t) === -1 && s.onParamInvalidValue(e, n, r);
        }),
        (s.onParamInvalidValue = function(e, t, n) {
          s.isArray(t) || (t = [t]),
            (t = t.map(e => {
              return `"${e}"`;
            })),
            s.isArray(t) && (t = t.join(', ')),
            s.onParamError(`参数 ${e}值错误, 合法的值包括: [${JSON.stringify(t)}]`, n);
        }),
        (s.verifyParamMin = function(e, t, n, r) {
          t < n && s.onParamError(`参数${e}的值不能小于${n}`, r);
        }),
        (s.verifyParamMax = function(e, t, n, r) {
          t > n && s.onParamError(`参数${e}的值不能大于${n}`, r);
        }),
        (s.verifyArrayMax = function(e, t, n, r) {
          t.length > n && s.onParamError(`参数${e}的长度不能大于${n}`, r);
        }),
        (s.verifyEmail = (function() {
          const e = /^\S+@\S+$/;
          return function(t, n, r) {
            e.test(n) ||
              s.onParamError(
                `参数${t}邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符`,
                r
              );
          };
        })()),
        (s.verifyTel = (function() {
          const e = /^[+\-()\d]+$/;
          return function(t, n, r) {
            e.test(n) ||
              s.onParamError(`参数${t}电话号码格式错误, 合法字符包括+、-、英文括号和数字`, r);
          };
        })()),
        (s.verifyBirth = (function() {
          const e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
          return function(t, n, r) {
            e.test(n) || s.onParamError(`参数${t}生日格式错误, 合法为"yyyy-MM-dd"`, r);
          };
        })()),
        (s.onParamError = function(e, t) {
          s.onError({ message: e, callFunc: t });
        }),
        (s.verifyOptions = function(e, t, n, r, o) {
          if (((e = e || {}), t && (s.isString(t) && (t = t.split(c)), s.isArray(t)))) {
            typeof n !== 'boolean' && ((o = n || null), (n = !0), (r = ''));
            const i = n ? s.verifyParamPresent : s.verifyParamAbsent;
            t.forEach(t => {
              i.call(s, t, e[t], r, o);
            });
          }
          return e;
        }),
        (s.verifyParamAtLeastPresentOne = function(e, t, n) {
          t &&
            (s.isString(t) && (t = t.split(c)),
            s.isArray(t) &&
              (t.some(t => {
                return s.exist(e[t]);
              }) ||
                s.onParamError(`以下参数[${t.join(', ')}]至少需要传入一个`, n)));
        }),
        (s.verifyParamPresentJustOne = function(e, t, n) {
          t &&
            (s.isString(t) && (t = t.split(c)),
            s.isArray(t) &&
              t.reduce((t, n) => {
                return s.exist(e[n]) && t++, t;
              }, 0) !== 1 &&
              s.onParamError(`以下参数[${t.join(', ')}]必须且只能传入一个`, n));
        }),
        (s.verifyBooleanWithDefault = function(e, t, n, r, o) {
          s.undef(n) && (n = !0),
            c.test(t) && (t = t.split(c)),
            s.isArray(t)
              ? t.forEach(t => {
                  s.verifyBooleanWithDefault(e, t, n, r, o);
                })
              : void 0 === e[t]
                ? (e[t] = n)
                : s.isBoolean(e[t]) || s.onParamInvalidType(t, 'boolean', r, o);
        }),
        (s.verifyFileInput = function(e, t) {
          return (
            s.verifyParamPresent('fileInput', e, '', t),
            s.isString(e) &&
              ((e = document.getElementById(e)) ||
                s.onParamError(`找不到要上传的文件对应的input, 请检查fileInput id ${e}`, t)),
            (e.tagName && e.tagName.toLowerCase() === 'input' && e.type.toLowerCase() === 'file') ||
              s.onParamError(
                `请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:${
                  e.tagName
                }, filetype:${e.type}`,
                t
              ),
            e
          );
        }),
        (s.verifyFileType = function(e, t) {
          s.verifyParamValid('type', e, s.validFileTypes, t);
        }),
        (s.verifyCallback = function(e, t, n) {
          c.test(t) && (t = t.split(c)),
            s.isArray(t)
              ? t.forEach(t => {
                  s.verifyCallback(e, t, n);
                })
              : e[t]
                ? s.isFunction(e[t]) || s.onParamInvalidType(t, 'function', '', n)
                : (e[t] = s.emptyFunc);
        }),
        (s.verifyFileUploadCallback = function(e, t) {
          s.verifyCallback(e, 'uploadprogress uploaddone uploaderror uploadcancel', t);
        }),
        (s.validFileTypes = ['image', 'audio', 'video', 'file']),
        (s.validFileExts = {
          image: ['bmp', 'gif', 'jpg', 'jpeg', 'jng', 'png', 'webp'],
          audio: ['mp3', 'wav', 'aac', 'wma', 'wmv', 'amr', 'mp2', 'flac', 'vorbis', 'ac3'],
          video: ['mp4', 'rm', 'rmvb', 'wmv', 'avi', 'mpg', 'mpeg'],
        }),
        (s.filterFiles = function(e, t) {
          let n;

          let r;

          const o = (t = t.toLowerCase()) === 'file';

          const i = [];
          return (
            [].forEach.call(e, e => {
              if (o) i.push(e);
              else if (
                ((n = e.name.slice(e.name.lastIndexOf('.') + 1)),
                (r = e.type.split('/'))[0] && r[1])
              ) {
                (r[0].toLowerCase() === t || s.validFileExts[t].indexOf(n) !== -1) && i.push(e);
              }
            }),
            i
          );
        });
      const u = (s.supportFormData = s.notundef(a.FormData));
      (s.getFileName = function(e) {
        return (
          (e = s.verifyFileInput(e)),
          u ? e.files[0].name : e.value.slice(e.value.lastIndexOf('\\') + 1)
        );
      }),
        (s.getFileInfo = (function() {
          const e = { ppt: 1, pptx: 2, pdf: 3 };
          return function(t) {
            const n = {};
            if (!(t = s.verifyFileInput(t)).files) return n;
            const r = t.files[0];
            return (
              u &&
                ((n.name = r.name),
                (n.size = r.size),
                (n.type = r.name.match(/\.(\w+)$/)),
                (n.type = n.type && n.type[1].toLowerCase()),
                (n.transcodeType = e[n.type] || 0)),
              n
            );
          };
        })()),
        (s.sizeText = (function() {
          const e = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'BB'];
          return function(t) {
            let n;

            let r = 0;
            do {
              (n = (t = Math.floor(100 * t) / 100) + e[r]), (t /= 1024), r++;
            } while (t > 1);
            return n;
          };
        })()),
        (s.promises2cmds = function(e) {
          return e.map(e => {
            return e.cmd;
          });
        }),
        (s.objs2accounts = function(e) {
          return e.map(e => {
            return e.account;
          });
        }),
        (s.teams2ids = function(e) {
          return e.map(e => {
            return e.teamId;
          });
        }),
        (s.objs2ids = function(e) {
          return e.map(e => {
            return e.id;
          });
        }),
        (s.getMaxUpdateTime = function(e) {
          const t = e.map(e => {
            return +e.updateTime;
          });
          return Math.max(...t);
        }),
        (s.genCheckUniqueFunc = function(e, t) {
          return (
            (e = e || 'id'),
            (t = t || 1e3),
            function(t) {
              (this.uniqueSet = this.uniqueSet || {}),
                (this.uniqueSet[e] = this.uniqueSet[e] || {});
              const n = this.uniqueSet[e];

              const r = t[e];
              return !n[r] && ((n[r] = !0), !0);
            }
          );
        }),
        (s.fillPropertyWithDefault = function(e, t, n) {
          return !!s.undef(e[t]) && ((e[t] = n), !0);
        }),
        (e.exports = s);
    },
    function(e, t) {
      const n = (e.exports =
        typeof window !== 'undefined' && window.Math == Math
          ? window
          : typeof self !== 'undefined' && self.Math == Math
            ? self
            : Function('return this')());
      typeof __g === 'number' && (__g = n);
    },
    function(e, t, n) {
      const r = n(37)('wks');

      const o = n(27);

      const i = n(1).Symbol;

      const s = typeof i === 'function';
      (e.exports = function(e) {
        return r[e] || (r[e] = (s && i[e]) || (s ? i : o)(`Symbol.${e}`));
      }).store = r;
    },
    function(e, t) {
      const n = (e.exports = { version: '2.5.7' });
      typeof __e === 'number' && (__e = n);
    },
    function(e, t, n) {
      var r = {
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

          const n = e.secure ? 'https' : 'http';
          return t.indexOf('http') === -1 ? `${n}://${t}` : t;
        },
        uploadUrl: 'https://nos.netease.com',
        replaceUrl: 'https://{bucket}.nosdn.127.net/{object}',
        downloadHost: 'nos.netease.com',
        downloadUrl: 'https://{bucket}.nosdn.127.net/{object}',
        httpsEnabled: !1,
        genUploadUrl(e) {
          return `${r.uploadUrl}/${e}`;
        },
        genDownloadUrl(e, t) {
          let n = r.replaceUrl;
          return (
            /^http/.test(n)
              ? r.httpsEnabled && (n = n.replace('http', 'https'))
              : (n = r.httpsEnabled ? `https://${n}` : `http://${n}`),
            n.replace('{bucket}', e).replace('{object}', t)
          );
        },
      };
      e.exports = r;
    },
    function(e, t, n) {
      t.__esModule = !0;
      const r = s(n(99));

      const o = s(n(88));

      const i =
        typeof o.default === 'function' && typeof r.default === 'symbol'
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof o.default === 'function' &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : typeof e;
            };
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default =
        typeof o.default === 'function' && i(r.default) === 'symbol'
          ? function(e) {
              return void 0 === e ? 'undefined' : i(e);
            }
          : function(e) {
              return e &&
                typeof o.default === 'function' &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : void 0 === e
                  ? 'undefined'
                  : i(e);
            };
    },
    function(e, t, n) {
      const r = n(9);

      const o = n(57);

      const i = n(39);

      const s = Object.defineProperty;
      t.f = n(8)
        ? Object.defineProperty
        : function(e, t, n) {
            if ((r(e), (t = i(t, !0)), r(n), o))
              try {
                return s(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e;
          };
    },
    function(e, t) {
      const n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t);
      };
    },
    function(e, t, n) {
      e.exports = !n(16)(() => {
        return (
          Object.defineProperty({}, 'a', {
            get() {
              return 7;
            },
          }).a != 7
        );
      });
    },
    function(e, t, n) {
      const r = n(11);
      e.exports = function(e) {
        if (!r(e)) throw TypeError(`${e} is not an object!`);
        return e;
      };
    },
    function(e, t, n) {
      const r = n(6);

      const o = n(19);
      e.exports = n(8)
        ? function(e, t, n) {
            return r.f(e, t, o(1, n));
          }
        : function(e, t, n) {
            return (e[t] = n), e;
          };
    },
    function(e, t) {
      e.exports = function(e) {
        return typeof e === 'object' ? e !== null : typeof e === 'function';
      };
    },
    function(e, t, n) {
      const r = n(54);

      const o = n(40);
      e.exports = function(e) {
        return r(o(e));
      };
    },
    function(e, t, n) {
      const r = n(1);

      const o = n(3);

      const i = n(44);

      const s = n(10);

      const a = n(7);

      var c = function(e, t, n) {
        let u;

        let l;

        let p;

        const m = e & c.F;

        const d = e & c.G;

        const f = e & c.S;

        const h = e & c.P;

        const y = e & c.B;

        const g = e & c.W;

        const v = d ? o : o[t] || (o[t] = {});

        const b = v.prototype;

        const k = d ? r : f ? r[t] : (r[t] || {}).prototype;
        for (u in (d && (n = t), n))
          ((l = !m && k && void 0 !== k[u]) && a(v, u)) ||
            ((p = l ? k[u] : n[u]),
            (v[u] =
              d && typeof k[u] !== 'function'
                ? n[u]
                : y && l
                  ? i(p, r)
                  : g && k[u] == p
                    ? (function(e) {
                        const t = function(t, n, r) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, r);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(p)
                    : h && typeof p === 'function'
                      ? i(Function.call, p)
                      : p),
            h && (((v.virtual || (v.virtual = {}))[u] = p), e & c.R && b && !b[u] && s(b, u, p)));
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
    ,
    function(e, t, n) {
      (function(t) {
        const r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        const o = (function() {
          const e = (void 0 === t ? 'undefined' : (0, r.default)(t)) === 'object' ? t : window;

          const n = Math.pow(2, 53) - 1;

          const o = /\bOpera/;

          const i = Object.prototype;

          const s = i.hasOwnProperty;

          const a = i.toString;
          function c(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
          }
          function u(e) {
            return (e = f(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e);
          }
          function l(e, t) {
            for (const n in e) s.call(e, n) && t(e[n], n, e);
          }
          function p(e) {
            return e == null ? c(e) : a.call(e).slice(8, -1);
          }
          function m(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
          }
          function d(e, t) {
            let r = null;
            return (
              (function(e, t) {
                let r = -1;

                const o = e ? e.length : 0;
                if (typeof o === 'number' && o > -1 && o <= n) for (; ++r < o; ) t(e[r], r, e);
                else l(e, t);
              })(e, (n, o) => {
                r = t(r, n, o, e);
              }),
              r
            );
          }
          function f(e) {
            return String(e).replace(/^ +| +$/g, '');
          }
          return (function t(n) {
            let i = e;

            const s =
              n &&
              (void 0 === n ? 'undefined' : (0, r.default)(n)) === 'object' &&
              p(n) != 'String';
            s && ((i = n), (n = null));
            const c = i.navigator || {};

            const h = c.userAgent || '';
            n || (n = h);
            let y;

            let g;

            const v = s
              ? !!c.likeChrome
              : /\bChrome\b/.test(n) && !/internal|\n/i.test(a.toString());

            const b = s ? 'Object' : 'ScriptBridgingProxyObject';

            const k = s ? 'Object' : 'Environment';

            const T = s && i.java ? 'JavaPackage' : p(i.java);

            const M = s ? 'Object' : 'RuntimeObject';

            const S = /\bJava/.test(T) && i.java;

            const x = S && p(i.environment) == k;

            const w = S ? 'a' : 'α';

            const C = S ? 'b' : 'β';

            const _ = i.document || {};

            let O = i.operamini || i.opera;

            var P = o.test((P = s && O ? O['[[Class]]'] : p(O))) ? P : (O = null);

            let I = n;

            let E = [];

            let A = null;

            const j = n == h;

            let N = j && O && typeof O.version === 'function' && O.version();

            let F = (function(e) {
              return d(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || m(t)}\\b`, 'i').exec(n) && (t.label || t));
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

            let R = (function(e) {
              return d(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || m(t)}\\b`, 'i').exec(n) && (t.label || t));
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

            let L = q([
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

            let D = (function(e) {
              return d(e, (e, t, r) => {
                return (
                  e ||
                  ((t[L] ||
                    t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(L)] ||
                    RegExp(`\\b${m(r)}(?:\\b|\\w*\\d)`, 'i').exec(n)) &&
                    r)
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
              return d(e, (e, t) => {
                const r = t.pattern || m(t);
                return (
                  !e &&
                    (e = RegExp(`\\b${r}(?:/[\\d.]+|[ \\w.]*)`, 'i').exec(n)) &&
                    (e = (function(e, t, n) {
                      let r = {
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
                          n &&
                          /^Win/i.test(e) &&
                          !/^Windows Phone /i.test(e) &&
                          (r = r[/[\d.]+$/.exec(e)]) &&
                          (e = `Windows ${r}`),
                        (e = String(e)),
                        t && n && (e = e.replace(RegExp(t, 'i'), n)),
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
                    })(e, r, t.label || t)),
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
            function q(e) {
              return d(e, (e, t) => {
                const r = t.pattern || m(t);
                return (
                  !e &&
                    (e =
                      RegExp(`\\b${r} *\\d+[.\\w_]*`, 'i').exec(n) ||
                      RegExp(`\\b${r} *\\w+-[\\w]*`, 'i').exec(n) ||
                      RegExp(`\\b${r}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, 'i').exec(n)) &&
                    ((e = String(t.label && !RegExp(r, 'i').test(t.label) ? t.label : e).split(
                      '/'
                    ))[1] &&
                      !/[\d.]+/.test(e[0]) &&
                      (e[0] += ` ${e[1]}`),
                    (t = t.label || t),
                    (e = u(
                      e[0]
                        .replace(RegExp(r, 'i'), t)
                        .replace(RegExp(`; *(?:${t}[_-])?`, 'i'), ' ')
                        .replace(RegExp(`(${t})[-_.]?(\\w)`, 'i'), '$1 $2')
                    ))),
                  e
                );
              });
            }
            if (
              (F && (F = [F]),
              D && !L && (L = q([D])),
              (y = /\bGoogle TV\b/.exec(L)) && (L = y[0]),
              /\bSimulator\b/i.test(n) && (L = `${L ? `${L} ` : ''}Simulator`),
              R == 'Opera Mini' &&
                /\bOPiOS\b/.test(n) &&
                E.push('running in Turbo/Uncompressed mode'),
              R == 'IE' && /\blike iPhone OS\b/.test(n)
                ? ((D = (y = t(n.replace(/like iPhone OS/, ''))).manufacturer), (L = y.product))
                : /^iP/.test(L)
                  ? (R || (R = 'Safari'),
                    (U = `iOS${
                      (y = / OS ([\d_]+)/i.exec(n)) ? ` ${y[1].replace(/_/g, '.')}` : ''
                    }`))
                  : R != 'Konqueror' || /buntu/i.test(U)
                    ? (D &&
                        D != 'Google' &&
                        ((/Chrome/.test(R) && !/\bMobile Safari\b/i.test(n)) ||
                          /\bVita\b/.test(L))) ||
                      (/\bAndroid\b/.test(U) && /^Chrome/.test(R) && /\bVersion\//i.test(n))
                      ? ((R = 'Android Browser'), (U = /\bAndroid\b/.test(U) ? U : 'Android'))
                      : R == 'Silk'
                        ? (/\bMobi/i.test(n) || ((U = 'Android'), E.unshift('desktop mode')),
                          /Accelerated *= *true/i.test(n) && E.unshift('accelerated'))
                        : R == 'PaleMoon' && (y = /\bFirefox\/([\d.]+)\b/.exec(n))
                          ? E.push(`identifying as Firefox ${y[1]}`)
                          : R == 'Firefox' && (y = /\b(Mobile|Tablet|TV)\b/i.exec(n))
                            ? (U || (U = 'Firefox OS'), L || (L = y[1]))
                            : !R ||
                              (y = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(R))
                              ? (R &&
                                  !L &&
                                  /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(`${y}/`) + 8)) &&
                                  (R = null),
                                (y = L || D || U) &&
                                  (L ||
                                    D ||
                                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U)) &&
                                  (R = `${/[a-z]+(?: Hat)?/i.exec(
                                    /\bAndroid\b/.test(U) ? U : y
                                  )} Browser`))
                              : R == 'Electron' &&
                                (y = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) &&
                                E.push(`Chromium ${y}`)
                    : (U = 'Kubuntu'),
              N ||
                (N = (function(e) {
                  return d(e, (e, t) => {
                    return (
                      e ||
                      (RegExp(
                        `${t}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`,
                        'i'
                      ).exec(n) || 0)[1] ||
                      null
                    );
                  });
                })([
                  '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
                  'Version',
                  m(R),
                  '(?:Firefox|Minefield|NetFront)',
                ])),
              (y =
                (F == 'iCab' && parseFloat(N) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(R) && (/\bOPR\b/.test(n) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(n) &&
                  !/^(?:Trident|EdgeHTML)$/.test(F) &&
                  'WebKit') ||
                (!F && /\bMSIE\b/i.test(n) && (U == 'Mac OS' ? 'Tasman' : 'Trident')) ||
                (F == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(R) && 'NetFront')) &&
                (F = [y]),
              R == 'IE' && (y = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1])
                ? ((R += ' Mobile'),
                  (U = `Windows Phone ${/\+$/.test(y) ? y : `${y}.x`}`),
                  E.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(n)
                  ? ((R = 'IE Mobile'),
                    (U = 'Windows Phone 8.x'),
                    E.unshift('desktop mode'),
                    N || (N = (/\brv:([\d.]+)/.exec(n) || 0)[1]))
                  : R != 'IE' &&
                    F == 'Trident' &&
                    (y = /\brv:([\d.]+)/.exec(n)) &&
                    (R && E.push(`identifying as ${R}${N ? ` ${N}` : ''}`), (R = 'IE'), (N = y[1])),
              j)
            ) {
              if (
                (function(e, t) {
                  const n = e != null ? (0, r.default)(e[t]) : 'number';
                  return !(
                    /^(?:boolean|number|string|undefined)$/.test(n) ||
                    (n == 'object' && !e[t])
                  );
                })(i, 'global')
              )
                if (
                  (S &&
                    ((I = (y = S.lang.System).getProperty('os.arch')),
                    (U = U || `${y.getProperty('os.name')} ${y.getProperty('os.version')}`)),
                  x)
                ) {
                  try {
                    (N = i.require('ringo/engine').version.join('.')), (R = 'RingoJS');
                  } catch (e) {
                    (y = i.system) &&
                      y.global.system == i.system &&
                      ((R = 'Narwhal'), U || (U = y[0].os || null));
                  }
                  R || (R = 'Rhino');
                } else
                  (0, r.default)(i.process) === 'object' &&
                    !i.process.browser &&
                    (y = i.process) &&
                    ((0, r.default)(y.versions) === 'object' &&
                      (typeof y.versions.electron === 'string'
                        ? (E.push(`Node ${y.versions.node}`),
                          (R = 'Electron'),
                          (N = y.versions.electron))
                        : typeof y.versions.nw === 'string' &&
                          (E.push(`Chromium ${N}`, `Node ${y.versions.node}`),
                          (R = 'NW.js'),
                          (N = y.versions.nw))),
                    R ||
                      ((R = 'Node.js'),
                      (I = y.arch),
                      (U = y.platform),
                      (N = (N = /[\d.]+/.exec(y.version)) ? N[0] : null)));
              else
                p((y = i.runtime)) == b
                  ? ((R = 'Adobe AIR'), (U = y.flash.system.Capabilities.os))
                  : p((y = i.phantom)) == M
                    ? ((R = 'PhantomJS'),
                      (N = (y = y.version || null) && `${y.major}.${y.minor}.${y.patch}`))
                    : typeof _.documentMode === 'number' && (y = /\bTrident\/(\d+)/i.exec(n))
                      ? ((N = [N, _.documentMode]),
                        (y = +y[1] + 4) != N[1] &&
                          (E.push(`IE ${N[1]} mode`), F && (F[1] = ''), (N[1] = y)),
                        (N = R == 'IE' ? String(N[1].toFixed(1)) : N[0]))
                      : typeof _.documentMode === 'number' &&
                        /^(?:Chrome|Firefox)\b/.test(R) &&
                        (E.push(`masking as ${R} ${N}`),
                        (R = 'IE'),
                        (N = '11.0'),
                        (F = ['Trident']),
                        (U = 'Windows'));
              U = U && u(U);
            }
            if (
              (N &&
                (y =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(`${n};${j && c.appMinorVersion}`) ||
                  (/\bMinefield\b/i.test(n) && 'a')) &&
                ((A = /b/i.test(y) ? 'beta' : 'alpha'),
                (N =
                  N.replace(RegExp(`${y}\\+?$`), '') +
                  (A == 'beta' ? C : w) +
                  (/\d+\+?/.exec(y) || ''))),
              R == 'Fennec' || (R == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(U)))
            )
              R = 'Firefox Mobile';
            else if (R == 'Maxthon' && N) N = N.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(L))
              L == 'Xbox 360' && (U = null),
                L == 'Xbox 360' && /\bIEMobile\b/.test(n) && E.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(R) && (!R || L || /Browser|Mobi/.test(R))) ||
              (U != 'Windows CE' && !/Mobi/i.test(n))
            )
              if (R == 'IE' && j)
                try {
                  i.external === null && E.unshift('platform preview');
                } catch (e) {
                  E.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(L) || /\bBB10\b/.test(n)) &&
                (y = (RegExp(`${L.replace(/ +/g, ' *')}/([.\\d]+)`, 'i').exec(n) || 0)[1] || N)
                  ? ((U = `${
                      (y = [y, /BB10/.test(n)])[1]
                        ? ((L = null), (D = 'BlackBerry'))
                        : 'Device Software'
                    } ${y[0]}`),
                    (N = null))
                  : this != l &&
                    L != 'Wii' &&
                    ((j && O) ||
                      (/Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(n)) ||
                      (R == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(U)) ||
                      (R == 'IE' &&
                        ((U && !/^Win/.test(U) && N > 5.5) ||
                          (/\bWindows XP\b/.test(U) && N > 8) ||
                          (N == 8 && !/\bTrident\b/.test(n))))) &&
                    !o.test((y = t.call(l, `${n.replace(o, '')};`))) &&
                    y.name &&
                    ((y = `ing as ${y.name}${(y = y.version) ? ` ${y}` : ''}`),
                    o.test(R)
                      ? (/\bIE\b/.test(y) && U == 'Mac OS' && (U = null), (y = `identify${y}`))
                      : ((y = `mask${y}`),
                        (R = P ? u(P.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                        /\bIE\b/.test(y) && (U = null),
                        j || (N = null)),
                    (F = ['Presto']),
                    E.push(y));
            else R += ' Mobile';
            (y = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) &&
              ((y = [parseFloat(y.replace(/\.(\d)$/, '.0$1')), y]),
              R == 'Safari' && y[1].slice(-1) == '+'
                ? ((R = 'WebKit Nightly'), (A = 'alpha'), (N = y[1].slice(0, -1)))
                : (N != y[1] && N != (y[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) ||
                  (N = null),
              (y[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1]),
              y[0] == 537.36 &&
                y[2] == 537.36 &&
                parseFloat(y[1]) >= 28 &&
                F == 'WebKit' &&
                (F = ['Blink']),
              j && (v || y[1])
                ? (F && (F[1] = 'like Chrome'),
                  (y =
                    y[1] ||
                    ((y = y[0]) < 530
                      ? 1
                      : y < 532
                        ? 2
                        : y < 532.05
                          ? 3
                          : y < 533
                            ? 4
                            : y < 534.03
                              ? 5
                              : y < 534.07
                                ? 6
                                : y < 534.1
                                  ? 7
                                  : y < 534.13
                                    ? 8
                                    : y < 534.16
                                      ? 9
                                      : y < 534.24
                                        ? 10
                                        : y < 534.3
                                          ? 11
                                          : y < 535.01
                                            ? 12
                                            : y < 535.02
                                              ? '13+'
                                              : y < 535.07
                                                ? 15
                                                : y < 535.11
                                                  ? 16
                                                  : y < 535.19
                                                    ? 17
                                                    : y < 536.05
                                                      ? 18
                                                      : y < 536.1
                                                        ? 19
                                                        : y < 537.01
                                                          ? 20
                                                          : y < 537.11
                                                            ? '21+'
                                                            : y < 537.13
                                                              ? 23
                                                              : y < 537.18
                                                                ? 24
                                                                : y < 537.24
                                                                  ? 25
                                                                  : y < 537.36
                                                                    ? 26
                                                                    : F != 'Blink'
                                                                      ? '27'
                                                                      : '28')))
                : (F && (F[1] = 'like Safari'),
                  (y =
                    (y = y[0]) < 400
                      ? 1
                      : y < 500
                        ? 2
                        : y < 526
                          ? 3
                          : y < 533
                            ? 4
                            : y < 534
                              ? '4+'
                              : y < 535
                                ? 5
                                : y < 537
                                  ? 6
                                  : y < 538
                                    ? 7
                                    : y < 601
                                      ? 8
                                      : '8')),
              F && (F[1] += ` ${(y += typeof y === 'number' ? '.x' : /[.+]/.test(y) ? '' : '+')}`),
              R == 'Safari' && (!N || parseInt(N) > 45) && (N = y)),
              R == 'Opera' && (y = /\bzbov|zvav$/.exec(U))
                ? ((R += ' '),
                  E.unshift('desktop mode'),
                  y == 'zvav' ? ((R += 'Mini'), (N = null)) : (R += 'Mobile'),
                  (U = U.replace(RegExp(` *${y}$`), '')))
                : R == 'Safari' &&
                  /\bChrome\b/.exec(F && F[1]) &&
                  (E.unshift('desktop mode'),
                  (R = 'Chrome Mobile'),
                  (N = null),
                  /\bOS X\b/.test(U) ? ((D = 'Apple'), (U = 'iOS 4.3+')) : (U = null)),
              N &&
                N.indexOf((y = /[\d.]+$/.exec(U))) == 0 &&
                n.indexOf(`/${y}-`) > -1 &&
                (U = f(U.replace(y, ''))),
              F &&
                !/\b(?:Avant|Nook)\b/.test(R) &&
                (/Browser|Lunascape|Maxthon/.test(R) ||
                  (R != 'Safari' && /^iOS/.test(U) && /\bSafari\b/.test(F[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    R
                  ) &&
                    F[1])) &&
                (y = F[F.length - 1]) &&
                E.push(y),
              E.length && (E = [`(${E.join('; ')})`]),
              D && L && L.indexOf(D) < 0 && E.push(`on ${D}`),
              L && E.push((/^on /.test(E[E.length - 1]) ? '' : 'on ') + L),
              U &&
                ((y = / ([\d.+]+)$/.exec(U)),
                (g = y && U.charAt(U.length - y[0].length - 1) == '/'),
                (U = {
                  architecture: 32,
                  family: y && !g ? U.replace(y[0], '') : U,
                  version: y ? y[1] : null,
                  toString() {
                    const e = this.version;
                    return (
                      this.family +
                      (e && !g ? ` ${e}` : '') +
                      (this.architecture == 64 ? ' 64-bit' : '')
                    );
                  },
                })),
              (y = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I)
                ? (U &&
                    ((U.architecture = 64), (U.family = U.family.replace(RegExp(` *${y}`), ''))),
                  R &&
                    (/\bWOW64\b/i.test(n) ||
                      (j &&
                        /\w(?:86|32)$/.test(c.cpuClass || c.platform) &&
                        !/\bWin64; x64\b/i.test(n))) &&
                    E.unshift('32-bit'))
                : U &&
                  /^OS X/.test(U.family) &&
                  R == 'Chrome' &&
                  parseFloat(N) >= 39 &&
                  (U.architecture = 64),
              n || (n = null);
            const B = {};
            return (
              (B.description = n),
              (B.layout = F && F[0]),
              (B.manufacturer = D),
              (B.name = R),
              (B.prerelease = A),
              (B.product = L),
              (B.ua = n),
              (B.version = R && N),
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
              B.version && E.unshift(N),
              B.name && E.unshift(R),
              U &&
                R &&
                (U != String(U).split(' ')[0] || (U != R.split(' ')[0] && !L)) &&
                E.push(L ? `(${U})` : `on ${U}`),
              E.length && (B.description = E.join(' ')),
              B
            );
          })();
        })();
        e.exports = o;
      }.call(this, n(30)));
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
    ,
    ,
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      function o(e, t) {
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.message = e || n.message || ''),
          (void 0 === t ? 'undefined' : (0, r.default)(t)) === 'object'
            ? ((this.event = t), (this.code = 'Other_Error'))
            : void 0 !== t && (this.code = t),
          (this.timetag = +new Date()),
          void 0 !== n && (this.event = n),
          this.event && ((this.callFunc = this.event.callFunc || null), delete this.event.callFunc);
      }
      (o.prototype = Object.create(Error.prototype)), (o.prototype.name = 'NIMError');
      const i = {
        201: '客户端版本不对, 需升级sdk',
        302: '用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配',
        403: '非法操作或没有权限',
        404: '对象(用户/群/聊天室)不存在',
        405: '参数长度过长',
        408: '客户端请求超时',
        414: '参数错误',
        415: '服务不可用/没有聊天室服务器可分配',
        416: '频率控制',
        417: '重复操作',
        422: '帐号被禁用',
        500: '服务器内部错误',
        501: '数据库操作失败',
        503: '服务器繁忙',
        508: '删除有效期过了',
        509: '已失效',
        7101: '被拉黑',
        801: '群人数达到上限',
        802: '没有权限',
        803: '群不存在或未发生变化',
        804: '用户不在群里面',
        805: '群类型不匹配',
        806: '创建群数量达到限制',
        807: '群成员状态不对',
        809: '已经在群里',
        811: '强推列表中帐号数量超限',
        812: '群被禁言',
        813: '因群数量限制，部分拉人成功',
        997: '协议已失效',
        998: '解包错误',
        999: '打包错误',
        9102: '通道失效',
        9103: '已经在其他端接听/拒绝过这通电话',
        11001: '对方离线, 通话不可送达',
        13002: '聊天室状态异常',
        13003: '在黑名单中',
        13004: '在禁言名单中',
        13006: '聊天室处于整体禁言状态,只有管理员能发言',
        Connect_Failed:
          '无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下',
        Error_Internet_Disconnected: '网断了',
        Error_Connection_is_not_Established: '连接未建立',
        Error_Connection_Socket_State_not_Match: 'socket状态不对',
        Error_Timeout: '超时',
        Param_Error: '参数错误',
        No_File_Selected: '请选择文件',
        Wrong_File_Type: '文件类型错误',
        File_Too_Large: '文件过大',
        Cross_Origin_Iframe: '不能获取跨域Iframe的内容',
        Not_Support: '不支持',
        NO_DB: '无数据库',
        DB: '数据库错误',
        Still_In_Team: '还在群里',
        Session_Exist: '会话已存在',
        Session_Not_Exist: '会话不存在',
        Error_Unknown: '未知错误',
        Operation_Canceled: '操作取消',
      };
      [200, 406, 808, 810].forEach(e => {
        i[e] = null;
      }),
        (o.genError = function(e) {
          let t = i[e];
          return void 0 === t && (t = '操作失败'), t === null ? null : new o(t, e);
        }),
        (o.multiInstance = function(e) {
          return new o('不允许初始化多个实例', 'Not_Allow_Multi_Instance', e);
        }),
        (o.newNetworkError = function(e) {
          const t = 'Error_Internet_Disconnected';
          return new o(i[t], t, e);
        }),
        (o.newConnectError = function(e) {
          const t = 'Connect_Failed';
          return new o(i[t] || null, t, e);
        }),
        (o.newConnectionError = function(e) {
          const t = 'Error_Connection_is_not_Established';
          return new o(i[t], t, e);
        }),
        (o.newSocketStateError = function(e) {
          const t = 'Error_Connection_Socket_State_not_Match';
          return new o(i[t], t, e);
        }),
        (o.newTimeoutError = function(e) {
          const t = 'Error_Timeout';
          return new o(i[t], t, e);
        }),
        (o.newFrequencyControlError = function(e) {
          const t = new o(i[416], 416, e);
          return (t.from = 'local'), t;
        }),
        (o.newParamError = function(e, t) {
          return new o(e || i.Param_Error, 'Param_Error', t);
        }),
        (o.newNoFileError = function(e, t) {
          const n = 'No_File_Selected';
          return new o(e || i[n], n, t);
        }),
        (o.newWrongFileTypeError = function(e, t) {
          const n = 'Wrong_File_Type';
          return new o(e || i[n], n, t);
        }),
        (o.newFileTooLargeError = function(e, t) {
          const n = 'File_Too_Large';
          return new o(e || i[n], n, t);
        }),
        (o.newCORSIframeError = function(e) {
          const t = 'Cross_Origin_Iframe';
          return new o(i[t], t, e);
        }),
        (o.newSupportError = function(e, t, n) {
          return new o(`不支持${e}`, `Not_Support_${t}`, n);
        }),
        (o.newSupportDBError = function(e) {
          return o.newSupportError('数据库', 'DB', e);
        }),
        (o.noDBError = function(e) {
          return new o(i.NO_DB, 'NO_DB', e);
        }),
        (o.newDBError = function(e) {
          return new o(i.DB, 'DB', e);
        }),
        (o.newUnknownError = function(e) {
          const t = 'Error_Unknown';
          return new o(i[t], t, e);
        }),
        (o.stillInTeamError = function(e) {
          const t = 'Still_In_Team';
          return new o(i[t], t, e);
        }),
        (o.sessionExist = function(e) {
          const t = 'Session_Exist';
          return new o(i[t], t, e);
        }),
        (o.sessionNotExist = function(e) {
          const t = 'Session_Not_Exist';
          return new o(i[t], t, e);
        }),
        (o.cancel = function(e) {
          const t = 'Operation_Canceled';
          return new o(i[t], t, e);
        }),
        (o.customError = function(e, t) {
          e = e || 'Other_Error';
          let n = '';
          return (
            (t = t || {}).message || (n = i[e] || e),
            (void 0 === e ? 'undefined' : (0, r.default)(e)) !== 'object'
              ? new o(n, e, t)
              : new o(n, 'Other_Error', void 0 === t ? e : t)
          );
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0);
        const r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        (t.getGlobal = o),
          (t.detectCSSFeature = function(e) {
            let t = !1;

            const n = 'Webkit Moz ms O'.split(' ');

            const r = document.createElement('div');

            let o = null;
            (e = e.toLowerCase()), void 0 !== r.style[e] && (t = !0);
            if (!1 === t) {
              o = e.charAt(0).toUpperCase() + e.substr(1);
              for (let i = 0; i < n.length; i++)
                if (void 0 !== r.style[n[i] + o]) {
                  t = !0;
                  break;
                }
            }
            return t;
          }),
          (t.fix = i),
          (t.getYearStr = s),
          (t.getMonthStr = a),
          (t.getDayStr = c),
          (t.getHourStr = u),
          (t.getMinuteStr = l),
          (t.getSecondStr = p),
          (t.getMillisecondStr = m),
          (t.dateFromDateTimeLocal = function(e) {
            return (e = `${e}`), new Date(e.replace(/-/g, '/').replace('T', ' '));
          }),
          (t.getClass = d),
          (t.typeOf = f),
          (t.isString = h),
          (t.isNumber = function(e) {
            return f(e) === 'number';
          }),
          (t.isBoolean = function(e) {
            return f(e) === 'boolean';
          }),
          (t.isArray = y),
          (t.isFunction = g),
          (t.isDate = v),
          (t.isRegExp = function(e) {
            return f(e) === 'regexp';
          }),
          (t.isError = function(e) {
            return f(e) === 'error';
          }),
          (t.isnull = b),
          (t.notnull = k),
          (t.undef = T),
          (t.notundef = M),
          (t.exist = S),
          (t.notexist = x),
          (t.isObject = w),
          (t.isEmpty = function(e) {
            return x(e) || ((h(e) || y(e)) && e.length === 0);
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
            const n = e.offsetHeight;
            return t.removeChild(e), n;
          }),
          (t.remove = function(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }),
          (t.dataset = function(e, t, n) {
            if (!S(n)) return e.getAttribute(`data-${t}`);
            e.setAttribute(`data-${t}`, n);
          }),
          (t.target = function(e) {
            return e.target || e.srcElement;
          }),
          (t.createIframe = function(e) {
            let t;
            if ((e = e || {}).name)
              try {
                (t = document.createElement(`<iframe name="${e.name}"></iframe>`)).frameBorder = 0;
              } catch (n) {
                (t = document.createElement('iframe')).name = e.name;
              }
            else t = document.createElement('iframe');
            e.visible || (t.style.display = 'none');
            g(e.onload) &&
              _(t, 'load', function n(r) {
                if (!t.src) return;
                e.multi || P(t, 'load', n);
                e.onload(r);
              });
            (e.parent || document.body).appendChild(t);
            const n = e.src || 'about:blank';
            return (
              setTimeout(() => {
                t.src = n;
              }, 0),
              t
            );
          }),
          (t.html2node = function(e) {
            const t = document.createElement('div');
            t.innerHTML = e;
            const n = [];

            let r = void 0;

            let o = void 0;
            if (t.children) for (r = 0, o = t.children.length; r < o; r++) n.push(t.children[r]);
            else
              for (r = 0, o = t.childNodes.length; r < o; r++) {
                const i = t.childNodes[r];
                i.nodeType === 1 && n.push(i);
              }
            return n.length > 1 ? t : n[0];
          }),
          (t.scrollTop = function(e) {
            S(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
            return (
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
            );
          }),
          (t.forOwn = I),
          (t.mixin = E),
          (t.isJSON = A),
          (t.parseJSON = function e(t) {
            try {
              A(t) && (t = JSON.parse(t)),
                w(t) &&
                  I(t, (n, r) => {
                    switch (f(r)) {
                      case 'string':
                      case 'object':
                        t[n] = e(r);
                    }
                  });
            } catch (e) {
              console.error(e);
            }
            return t;
          }),
          (t.simpleClone = function(e) {
            const t = [];

            const n = JSON.stringify(e, (e, n) => {
              if ((void 0 === n ? 'undefined' : (0, r.default)(n)) === 'object' && n !== null) {
                if (t.indexOf(n) !== -1) return;
                t.push(n);
              }
              return n;
            });
            return JSON.parse(n);
          }),
          (t.merge = function() {
            for (
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length,
                n = Array(t > 1 ? t - 1 : 0),
                r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return (
              n.forEach(t => {
                E(e, t);
              }),
              e
            );
          }),
          (t.fillUndef = function(e, t) {
            return (
              I(t, (t, n) => {
                T(e[t]) && (e[t] = n);
              }),
              e
            );
          }),
          (t.checkWithDefault = function(e, t, n) {
            let r = e[t] || e[t.toLowerCase()];
            x(r) && ((r = n), (e[t] = r));
            return r;
          }),
          (t.fetch = function(e, t) {
            return (
              I(e, (n, r) => {
                S(t[n]) && (e[n] = t[n]);
              }),
              e
            );
          }),
          (t.string2object = function() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';

            const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ',';

            const n = {};
            return (
              e.split(t).forEach(e => {
                const t = e.split('=');

                const r = t.shift();
                r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join('=')));
              }),
              n
            );
          }),
          (t.object2string = j),
          (t.genUrlSep = function(e) {
            return e.indexOf('?') < 0 ? '?' : '&';
          }),
          (t.object2query = function(e) {
            return j(e, '&', !0);
          }),
          (t.isFileInput = N),
          (t.getKeys = function(e, t) {
            const n = Object.keys(e);
            t &&
              n.sort((t, n) => {
                const r = N(e[t]);

                const o = N(e[n]);
                return r === o ? 0 : r ? 1 : -1;
              });
            return n;
          });
        (t.o = {}),
          (t.emptyObj = {}),
          (t.f = function() {}),
          (t.emptyFunc = function() {}),
          (t.regBlank = /\s+/gi),
          (t.regWhiteSpace = /\s+/gi);
        function o() {
          return typeof window !== 'undefined' ? window : void 0 !== e ? e : {};
        }
        function i(e, t) {
          t = t || 2;
          for (var n = `${e}`; n.length < t; ) n = `0${n}`;
          return n;
        }
        function s(e) {
          return `${e.getFullYear()}`;
        }
        function a(e) {
          return i(e.getMonth() + 1);
        }
        function c(e) {
          return i(e.getDate());
        }
        function u(e) {
          return i(e.getHours());
        }
        function l(e) {
          return i(e.getMinutes());
        }
        function p(e) {
          return i(e.getSeconds());
        }
        function m(e) {
          return i(e.getMilliseconds(), 3);
        }
        t.format = (function() {
          const e = /yyyy|MM|dd|hh|mm|ss|SSS/g;

          const t = { yyyy: s, MM: a, dd: c, hh: u, mm: l, ss: p, SSS: m };
          return function(n, r) {
            return (
              (n = new Date(n)),
              isNaN(+n)
                ? 'invalid date'
                : (r = r || 'yyyy-MM-dd').replace(e, e => {
                    return t[e](n);
                  })
            );
          };
        })();
        function d(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function f(e) {
          return d(e).toLowerCase();
        }
        function h(e) {
          return f(e) === 'string';
        }
        function y(e) {
          return f(e) === 'array';
        }
        function g(e) {
          return f(e) === 'function';
        }
        function v(e) {
          return f(e) === 'date';
        }
        function b(e) {
          return e === null;
        }
        function k(e) {
          return e !== null;
        }
        function T(e) {
          return void 0 === e;
        }
        function M(e) {
          return void 0 !== e;
        }
        function S(e) {
          return M(e) && k(e);
        }
        function x(e) {
          return T(e) || b(e);
        }
        function w(e) {
          return S(e) && f(e) === 'object';
        }
        const C = (t.addEventListener = function(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent && e.attachEvent(`on${t}`, n);
        });

        var _ = (t.on = C);

        const O = (t.removeEventListener = function(e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent && e.detachEvent(`on${t}`, n);
        });

        var P = (t.off = O);
        function I() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};

          const n = arguments[2];
          for (const r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
        }
        function E(e, t) {
          I(t, (t, n) => {
            e[t] = n;
          });
        }
        t.uniqueID = (function() {
          let e = 0;
          return function() {
            return `${e++}`;
          };
        })();
        function A(e) {
          return h(e) && e.indexOf('{') === 0 && e.lastIndexOf('}') === e.length - 1;
        }
        function j(e, t, n) {
          if (!e) return '';
          const r = [];
          return (
            I(e, (e, t) => {
              g(t) ||
                (v(t)
                  ? (t = t.getTime())
                  : y(t)
                    ? (t = t.join(','))
                    : w(t) && (t = JSON.stringify(t)),
                n && (t = encodeURIComponent(t)),
                r.push(`${encodeURIComponent(e)}=${t}`));
            }),
            r.join(t || ',')
          );
        }
        t.url2origin = (function() {
          const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
          return function(t) {
            return e.test(t || '') ? RegExp.$1.toLowerCase() : '';
          };
        })();
        function N(e) {
          const t = o();
          return (
            (e.tagName && e.tagName.toUpperCase() === 'INPUT') || (t.Blob && e instanceof t.Blob)
          );
        }
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const r = Object.prototype.hasOwnProperty;

      let o = '~';
      function i() {}
      function s(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function a() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (a.prototype.eventNames = function() {
          let e;

          let t;

          const n = [];
          if (this._eventsCount === 0) return n;
          for (t in (e = this._events)) r.call(e, t) && n.push(o ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }),
        (a.prototype.listeners = function(e, t) {
          const n = o ? o + e : e;

          const r = this._events[n];
          if (t) return !!r;
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, s = r.length, a = new Array(s); i < s; i++) a[i] = r[i].fn;
          return a;
        }),
        (a.prototype.emit = function(e, t, n, r, i, s) {
          const a = o ? o + e : e;
          if (!this._events[a]) return !1;
          let c;

          let u;

          const l = this._events[a];

          const p = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), p)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, n), !0;
              case 4:
                return l.fn.call(l.context, t, n, r), !0;
              case 5:
                return l.fn.call(l.context, t, n, r, i), !0;
              case 6:
                return l.fn.call(l.context, t, n, r, i, s), !0;
            }
            for (u = 1, c = new Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            let m;

            const d = l.length;
            for (u = 0; u < d; u++)
              switch ((l[u].once && this.removeListener(e, l[u].fn, void 0, !0), p)) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, n);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, n, r);
                  break;
                default:
                  if (!c) for (m = 1, c = new Array(p - 1); m < p; m++) c[m - 1] = arguments[m];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (a.prototype.on = function(e, t, n) {
          const r = new s(t, n || this);

          const i = o ? o + e : e;
          return (
            this._events[i]
              ? this._events[i].fn
                ? (this._events[i] = [this._events[i], r])
                : this._events[i].push(r)
              : ((this._events[i] = r), this._eventsCount++),
            this
          );
        }),
        (a.prototype.once = function(e, t, n) {
          const r = new s(t, n || this, !0);

          const i = o ? o + e : e;
          return (
            this._events[i]
              ? this._events[i].fn
                ? (this._events[i] = [this._events[i], r])
                : this._events[i].push(r)
              : ((this._events[i] = r), this._eventsCount++),
            this
          );
        }),
        (a.prototype.removeListener = function(e, t, n, r) {
          const s = o ? o + e : e;
          if (!this._events[s]) return this;
          if (!t)
            return (
              --this._eventsCount == 0 ? (this._events = new i()) : delete this._events[s], this
            );
          const a = this._events[s];
          if (a.fn)
            a.fn !== t ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              (--this._eventsCount == 0 ? (this._events = new i()) : delete this._events[s]);
          else {
            for (var c = 0, u = [], l = a.length; c < l; c++)
              (a[c].fn !== t || (r && !a[c].once) || (n && a[c].context !== n)) && u.push(a[c]);
            u.length
              ? (this._events[s] = u.length === 1 ? u[0] : u)
              : --this._eventsCount == 0
                ? (this._events = new i())
                : delete this._events[s];
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function(e) {
          let t;
          return (
            e
              ? ((t = o ? o + e : e),
                this._events[t] &&
                  (--this._eventsCount == 0 ? (this._events = new i()) : delete this._events[t]))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prototype.setMaxListeners = function() {
          return this;
        }),
        (a.prefixed = o),
        (a.EventEmitter = a),
        (e.exports = a);
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t) {
      let n = 0;

      const r = Math.random();
      e.exports = function(e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
      };
    },
    function(e, t, n) {
      const r = n(55);

      const o = n(36);
      e.exports =
        Object.keys ||
        function(e) {
          return r(e, o);
        };
    },
    ,
    function(e, t) {
      let n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function('return this')() || (0, eval)('this');
      } catch (e) {
        typeof window === 'object' && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      const r = n(6).f;

      const o = n(7);

      const i = n(2)('toStringTag');
      e.exports = function(e, t, n) {
        e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
      };
    },
    function(e, t) {
      const n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1);
      };
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, n) {
      const r = n(1);

      const o = n(3);

      const i = n(20);

      const s = n(35);

      const a = n(6).f;
      e.exports = function(e) {
        const t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        e.charAt(0) == '_' || e in t || a(t, e, { value: s.f(e) });
      };
    },
    function(e, t, n) {
      t.f = n(2);
    },
    function(e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    function(e, t, n) {
      const r = n(3);

      const o = n(1);

      const i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: r.version,
        mode: n(20) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(e, t, n) {
      const r = n(37)('keys');

      const o = n(27);
      e.exports = function(e) {
        return r[e] || (r[e] = o(e));
      };
    },
    function(e, t, n) {
      const r = n(11);
      e.exports = function(e, t) {
        if (!r(e)) return e;
        let n;
        let o;
        if (t && typeof (n = e.toString) === 'function' && !r((o = n.call(e)))) return o;
        if (typeof (n = e.valueOf) === 'function' && !r((o = n.call(e)))) return o;
        if (!t && typeof (n = e.toString) === 'function' && !r((o = n.call(e)))) return o;
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
      const n = Math.ceil;

      const r = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    ,
    function(e, t, n) {
      const r = n(0);

      var o = {
        init() {
          o.deviceId = r.guid();
        },
      };
      o.init(),
        (o.clientTypeMap = {
          1: 'Android',
          2: 'iOS',
          4: 'PC',
          8: 'WindowsPhone',
          16: 'Web',
          32: 'Server',
          64: 'Mac',
        }),
        (o.db = { open() {} }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(61);
      e.exports = function(e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function(n, r, o) {
              return e.call(t, n, r, o);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, n) {
      const r = n(9);

      const o = n(95);

      const i = n(36);

      const s = n(38)('IE_PROTO');

      const a = function() {};

      var c = function() {
        let e;

        const t = n(50)('iframe');

        let r = i.length;
        for (
          t.style.display = 'none',
            n(73).appendChild(t),
            t.src = 'javascript:',
            (e = t.contentWindow.document).open(),
            e.write('<script>document.F=Object</script>'),
            e.close(),
            c = e.F;
          r--;

        )
          delete c.prototype[i[r]];
        return c();
      };
      e.exports =
        Object.create ||
        function(e, t) {
          let n;
          return (
            e !== null
              ? ((a.prototype = r(e)), (n = new a()), (a.prototype = null), (n[s] = e))
              : (n = c()),
            void 0 === t ? n : o(n, t)
          );
        };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const o = n(25);

      const i = n(0);

      const s = i.notundef;

      const a = n(205);

      const c = n(4);
      n(43);
      function u() {}
      let l = {};
      (u.getInstance = function(e) {
        i.verifyOptions(e, 'account', 'api::Base.getInstance');
        const t = this.genInstanceName(e);

        let n = l[t];
        return n ? u.updateInstance(n, e) : (n = l[t] = new this(e)), n;
      }),
        (u.updateInstance = function(e, t) {
          e.setOptions(t), e.connect();
        });
      const p = (u.fn = u.prototype = Object.create(new o()));
      (p.updatePrivateConf = function(e) {
        if (e && (0, r.default)(e.privateConf) === 'object') {
          const t = e.privateConf;
          typeof t.lbs_web === 'string' && (e.lbsUrl = t.lbs_web),
            typeof t.link_ssl_web === 'boolean' && (e.secure = t.link_ssl_web),
            typeof t.https_enabled === 'boolean' && (e.httpsEnabled = t.https_enabled),
            (e.uploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null),
            (e.replaceUrl = t.nos_downloader ? t.nos_downloader : null),
            (e.downloadUrl = t.nos_accelerate ? t.nos_accelerate : null),
            (e.downloadHost = t.nos_accelerate_host ? t.nos_accelerate_host : null),
            (e.ntServerAddress = t.nt_server);
        }
        return (
          e.ntServerAddress === null || e.ntServerAddress === ''
            ? (c.ntServerAddress = null)
            : (c.ntServerAddress = e.ntServerAddress || c.defaultReportUrl),
          (c.uploadUrl = e.uploadUrl || c.uploadUrl),
          (c.downloadUrl = e.downloadUrl || c.downloadUrl),
          (c.downloadHost = e.downloadHost || c.downloadHost),
          (c.replaceUrl = e.replaceUrl || c.replaceUrl),
          (c.httpsEnabled = e.httpsEnabled || c.httpsEnabled),
          e
        );
      }),
        (p.init = function(e) {
          i.verifyOptions(e, 'account', 'api::Base.init'), (e = this.updatePrivateConf(e));
          const t = (this.account = e.account += '');

          const n = e.constructor.genInstanceName(e);

          let r = l[n];
          if ((e._disableSingleton && (r = null), r)) return u.updateInstance(r, e), r;
          (this.name = n),
            (l[n] = this),
            (this.logger = e.logger = new a({
              debug: e.debug,
              logFunc: e.logFunc,
              prefix: this.subType,
            })),
            (e.api = this);
          const o = (this.protocol = new e.Protocol(e));
          return (
            (o.name = `Protocol-${n}`),
            (o.account = t),
            (o.api = this),
            (o.message = this.message = new e.Message({ account: t })),
            (this.options = i.copy(e)),
            this.reset(),
            this
          );
        }),
        (p.destroy = function(e) {
          e = e || {};
          const t = this.name;
          this.protocol && this.protocol.resetPush && this.protocol.resetPush();
          const n = this;
          function r(r) {
            n.logger.warn('ApiBase::destroy: instance destroyed ...'),
              Object.getOwnPropertyNames(n).forEach(e => {
                delete n[e];
              }),
              l && (delete l[t], (l[t] = null)),
              e.done instanceof Function && e.done(r);
          }
          this.isConnected && this.isConnected() ? this.disconnect({ done: r }) : r(null);
        }),
        (p.reset = function() {
          const e = this.updatePrivateConf(this.options);
          i.verifyBooleanWithDefault(e, 'exifOrientation', !0, '', 'api::Base.reset');
        }),
        (p.setOptions = function(e) {
          this.reset(), this.protocol.setOptions(e);
        }),
        (p.processCallback = function(e, t) {
          m(e, t);
        }),
        (p.processCallbackPromise = function(e, t) {
          return new Promise((n, r) => {
            m(e, t, !0, n, r);
          });
        });
      var m = function(e, t, n, r, o) {
        let a = 'api::processCallback';
        n && (a = 'api::processCallbackPromise'),
          i.verifyCallback(e, 'done', a),
          (e.callback = function(c, u, l) {
            const p = e.callback.options;
            if (((u = u || p), t && (u = p), i.isFunction(e.cbaop))) {
              const m = e.cbaop(c, u);
              s(m) && (u = m);
            }
            const d = e.done;
            i.isObject(u) && (delete u.done, delete u.cb, delete u.callback),
              n
                ? c
                  ? o({ message: '生成接口回调错误', callFunc: a, event: c })
                  : r(u)
                : d(c, u, l);
          }),
          (e.callback.options = i.copy(e));
      };
      (p.processPs = function(e) {
        i.notexist(e.ps) && (e.ps = '');
      }),
        (p.processCustom = function(e) {
          i.notexist(e.custom) && (e.custom = '');
        }),
        (p.sendCmd = function() {
          this.protocol.sendCmd.apply(this.protocol, arguments);
        }),
        (p.sendCmdWithResp = function(e, t, n) {
          this.sendCmd(e, t, (e, t, r) => {
            i.isFunction(n) && (e ? n(e, t) : n(null, r));
          });
        }),
        (p.cbAndSendCmd = function(e, t) {
          const n = this.processCallbackPromise(t);
          return this.sendCmd(e, t), n;
        }),
        (u.use = function(e, t) {
          e && e.install && i.isFunction(e.install) && e.install(this, t);
        }),
        (u.rmAllInstances = function() {
          for (const e in l) l[e].destroy();
          l = {};
        }),
        (p.logout = function(e) {
          (this.protocol.shouldReconnect = !1),
            (this.protocol.doLogout = !0),
            this.processCallback(e),
            this.sendCmd('logout', e, e.callback);
        }),
        (e.exports = u),
        n(198),
        n(197),
        n(193),
        n(192),
        n(191),
        n(190);
    },
    ,
    ,
    function(e, t, n) {
      const r = n(40);
      e.exports = function(e) {
        return Object(r(e));
      };
    },
    function(e, t, n) {
      const r = n(11);

      const o = n(1).document;

      const i = r(o) && r(o.createElement);
      e.exports = function(e) {
        return i ? o.createElement(e) : {};
      };
    },
    function(e, t, n) {
      const r = n(97)(!0);
      n(58)(
        String,
        'String',
        function(e) {
          (this._t = String(e)), (this._i = 0);
        },
        function() {
          let e;

          const t = this._t;

          const n = this._i;
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    ,
    function(e, t, n) {
      const r = n(55);

      const o = n(36).concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return r(e, o);
        };
    },
    function(e, t, n) {
      const r = n(32);
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return r(e) == 'String' ? e.split('') : Object(e);
          };
    },
    function(e, t, n) {
      const r = n(7);

      const o = n(12);

      const i = n(94)(!1);

      const s = n(38)('IE_PROTO');
      e.exports = function(e, t) {
        let n;

        const a = o(e);

        let c = 0;

        const u = [];
        for (n in a) n != s && r(a, n) && u.push(n);
        for (; t.length > c; ) r(a, (n = t[c++])) && (~i(u, n) || u.push(n));
        return u;
      };
    },
    function(e, t, n) {
      e.exports = n(10);
    },
    function(e, t, n) {
      e.exports =
        !n(8) &&
        !n(16)(() => {
          return (
            Object.defineProperty(n(50)('div'), 'a', {
              get() {
                return 7;
              },
            }).a != 7
          );
        });
    },
    function(e, t, n) {
      const r = n(20);

      const o = n(13);

      const i = n(56);

      const s = n(10);

      const a = n(18);

      const c = n(96);

      const u = n(31);

      const l = n(92);

      const p = n(2)('iterator');

      const m = !([].keys && 'next' in [].keys());

      const d = function() {
        return this;
      };
      e.exports = function(e, t, n, f, h, y, g) {
        c(n, t, f);
        let v;

        let b;

        let k;

        const T = function(e) {
          if (!m && e in w) return w[e];
          switch (e) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, e);
              };
          }
          return function() {
            return new n(this, e);
          };
        };

        const M = `${t} Iterator`;

        const S = h == 'values';

        let x = !1;

        var w = e.prototype;

        const C = w[p] || w['@@iterator'] || (h && w[h]);

        let _ = C || T(h);

        const O = h ? (S ? T('entries') : _) : void 0;

        const P = (t == 'Array' && w.entries) || C;
        if (
          (P &&
            (k = l(P.call(new e()))) !== Object.prototype &&
            k.next &&
            (u(k, M, !0), r || typeof k[p] === 'function' || s(k, p, d)),
          S &&
            C &&
            C.name !== 'values' &&
            ((x = !0),
            (_ = function() {
              return C.call(this);
            })),
          (r && !g) || (!m && !x && w[p]) || s(w, p, _),
          (a[t] = _),
          (a[M] = d),
          h)
        )
          if (((v = { values: S ? _ : T('values'), keys: y ? _ : T('keys'), entries: O }), g))
            for (b in v) b in w || i(w, b, v[b]);
          else o(o.P + o.F * (m || x), t, v);
        return v;
      };
    },
    function(e, t, n) {
      const r = n(108);

      const o = n(200);

      const i = n(199);
      (r.json = o), (r.upload = i), (e.exports = r);
    },
    function(e, t, n) {
      n(91);
      for (
        let r = n(1),
          o = n(10),
          i = n(18),
          s = n(2)('toStringTag'),
          a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          c = 0;
        c < a.length;
        c++
      ) {
        const u = a[c];

        const l = r[u];

        const p = l && l.prototype;
        p && !p[s] && o(p, s, u), (i[u] = i.Array);
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
        return e;
      };
    },
    function(e, t, n) {
      const r = n(0);

      const o = n(4);

      const i = n(23);
      function s(e) {
        r.undef(e.secure) && (e.secure = !0),
          (this.options = r.copy(e)),
          this.init(),
          this.connect();
      }
      const a = (s.fn = s.prototype);
      (a.init = function() {
        (this.logger = this.options.logger),
          (this.cmdTaskArray = []),
          (this.timerMap = {}),
          (this.cmdCallbackMap = {}),
          (this.cmdContentMap = {}),
          this.initConnect(),
          this.reset();
      }),
        (a.reset = function() {
          this.resetConnect();
        }),
        (a.setOptions = function(e) {
          const t = this.options;

          const n = Object.keys(t);

          const o = n.indexOf('account');
          o !== -1 && n.splice(o, 1),
            (e = r.filterObj(e, n)),
            (this.options = r.merge(t, e)),
            this.reset();
        }),
        (a.sendCmd = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';

          let n = arguments[2];
          this.heartbeat(), e !== 'heartbeat' && this.logger.warn(`protocol::sendCmd: ${e}`, t);
          let r;

          const o = e;

          const i = (e = this.parser.createCmd(e, t)).SER;
          (t = t || {}),
            (this.cmdContentMap[i] = t),
            t.single &&
              (delete t.single,
              (r = Object.keys(t)).length === 1 && (this.cmdContentMap[i] = t[r[0]])),
            t.NOTSTORE &&
              ((r = t.NOTSTORE.split(' ')).forEach(e => {
                delete t[e];
              }),
              delete t.NOTSTORE),
            (n = n || t.callback) && (this.cmdCallbackMap[i] = n),
            this.cmdTaskArray.push({ cmdName: o, cmd: JSON.stringify(e) }),
            this.startCmdTaskTimer();
        }),
        (a.startCmdTaskTimer = function() {
          const e = this;
          e.cmdTaskTimer ||
            (e.cmdTaskTimer = setTimeout(() => {
              const t = e.cmdTaskArray.shift();
              (e.cmdTaskTimer = null),
                t && e.executeCmdTask(t),
                e.cmdTaskArray.length && e.startCmdTaskTimer();
            }, 0));
        }),
        (a.executeCmdTask = function(e) {
          const t = e.cmdName;

          let n = e.cmd;

          const r = (n = JSON.parse(n)).SER;
          this.isFrequencyControlled(t)
            ? (this.logger.warn(`protocol::executeCmdTask: ${t} hit freq control`),
              this.markCallbackInvalid(
                r,
                i.newFrequencyControlError({
                  callFunc: 'protocol::executeCmdTask',
                  message: `${t} hit freq control`,
                })
              ))
            : this.isConnected()
              ? (this.logger.log(`protocol::sendCmd: ${t} ${JSON.stringify(n)}`), this.doSendCmd(n))
              : (this.logger.warn(`protocol::executeCmdTask: ${t} not connected`),
                this.markCallbackInvalid(
                  r,
                  i.newSocketStateError({
                    callFunc: 'protocol::executeCmdTask',
                    message: `${t} not connected`,
                  })
                ));
        }),
        (a.isFrequencyControlled = function(e) {
          const t = this.frequencyControlMap && this.frequencyControlMap[e];
          if (t) {
            if (Date.now() < t.from + t.duration) return !0;
            delete this.frequencyControlMap[e];
          }
        }),
        (a.doSendCmd = function(e) {
          const t = this;

          const n = e.SER;
          t.timerMap[n] = setTimeout(() => {
            t.markCallbackInvalid(
              n,
              i.newTimeoutError({
                callFunc: 'protocol::doSendCmd',
                message: `ser ${n} Timeout Error`,
              })
            );
          }, o.cmdTimeout);
          try {
            t.socket.send(JSON.stringify(e));
          } catch (e) {
            t.markCallbackInvalid(
              n,
              i.newSocketStateError({
                callFunc: 'protocol::doSendCmd',
                message: `ser ${n} socketSendJson Error`,
              })
            ),
              t.onDisconnect(!0, 'protocol::doSendCmd:socketSendJson');
          }
        }),
        (a.getObjWithSer = function(e) {
          const t = this.cmdContentMap[e];
          return delete this.cmdContentMap[e], t && r.copy(t);
        }),
        (a.getCallbackWithSer = function(e) {
          const t = this.cmdCallbackMap[e];
          return delete this.cmdCallbackMap[e], t;
        }),
        (a.getTimerWithSer = function(e) {
          const t = this.timerMap[e];
          return delete this.timerMap[e], t;
        }),
        (a.clearTimerWithSer = function(e) {
          const t = this.getTimerWithSer(e);
          t && clearTimeout(t);
        }),
        (a.markCallbackInvalid = function(e, t) {
          this.getObjWithSer(e), this.clearTimerWithSer(e);
          const n = this.getCallbackWithSer(e);
          if (n) {
            const r = n.options;
            setTimeout(() => {
              n(t || i.newUnknownError({ ser: e }), r);
            }, 0);
          }
        }),
        (a.markAllCallbackInvalid = function(e) {
          const t = this;
          Object.keys(this.cmdCallbackMap).forEach(n => {
            t.markCallbackInvalid(n, e);
          });
        }),
        (a.getPacketObj = function(e) {
          let t = null;
          if (e && e.raw) {
            const n = e.raw.ser;
            r.notundef(n) && (t = this.getObjWithSer(n));
          }
          return t;
        }),
        (a.callPacketAckCallback = function(e) {
          const t = this;
          if (e && e.raw) {
            const n = e.raw.ser;
            if (r.notundef(n)) {
              t.clearTimerWithSer(n);
              const o = t.getCallbackWithSer(n);
              o &&
                (e.promise
                  ? e.promise.then(
                      () => {
                        o(e.error, e.obj);
                      },
                      r => {
                        (r.callFunc = 'protocol::callPacketAckCallback'),
                          (r.message = `Resp Promoise Error: cmd: ${e.cmd}, ser: ${n}`);
                        const s = i.customError('CALLBACK_ACK_ERR', r);
                        t.logger.error(
                          `protocol::callPacketAckCallback: promise error ${JSON.stringify(r)}`
                        ),
                          o(s, e.obj, e.content);
                      }
                    )
                  : o(e.error, e.obj, e.content));
            }
          }
        }),
        (a.onMessage = function(e) {
          this.heartbeat();
          const t = this.parser.parseResponse(e);
          t.notFound &&
            this.logger.warn(`protocol::onMessage: packet not found ${JSON.stringify(t)}`),
            t.error
              ? ((t.error.message = `${t.cmd} error: ${t.error.message}`),
                this.logger.error(`protocol::onMessage: packet error ${JSON.stringify(t.error)}`))
              : t.content ||
                t.cmd === 'heartbeat' ||
                this.logger.warn(
                  `protocol::onMessage: packet.content undefined ${JSON.stringify(t)}`
                ),
            t.frequencyControlDuration &&
              (this.logger.error(
                `protocol::onMessage: server freq control ${JSON.stringify(t.cmd)}`
              ),
              (this.frequencyControlMap = this.frequencyControlMap || {}),
              (this.frequencyControlMap[t.cmd] = {
                from: +new Date(),
                duration: t.frequencyControlDuration,
              })),
            (t.obj = this.getPacketObj(t)),
            t.cmd !== 'heartbeat' &&
              t.cmd !== 'getClientAntispam' &&
              this.logger.log(`protocol::recvCmd: ${t.cmd} ${t.rawStr}`);
          const n = `process${r.capFirstLetter(t.service)}`;
          this[n]
            ? (this.logger.warn(`protocol::recvCmd: ${t.cmd} ${n}`, t.content), this[n](t))
            : this.logger.warn(`protocol::onMessage: ${n} not found`),
            this.callPacketAckCallback(t);
        }),
        (a.onMiscError = function(e, t, n) {
          t && this.notifyError(e, t, n);
        }),
        (a.notifyError = function(e, t, n) {
          this.isConnected() &&
            (this.logger.error(`${e || ''} ${this.name}`, t, n), this.options.onerror(t, n));
        }),
        (a.emitAPI = function(e) {
          const t = e.type;

          const n = e.obj;
          this.api.emit(t, n);
        }),
        (e.exports = s),
        n(189),
        n(187),
        n(186),
        n(185);
    },
    ,
    ,
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));

      const o = n(71);
      const i = n(0);

      const s = i.notundef;

      const a = i.exist;

      const c = n(105);

      const u = n(154);

      const l = u.typeMap;
      function p(e) {
        e.resend
          ? (i.verifyOptions(e, 'idClient', 'msg::Message'), (this.idClient = e.idClient))
          : (this.idClient = i.guid()),
          (this.type = l[e.type]),
          (this.resend = e.resend ? 1 : 0),
          s(e.custom) &&
            ((0, r.default)(e.custom) === 'object'
              ? (this.logger.info('model::Message: custom should be JsonString, auto transfer'),
                (this.custom = JSON.stringify(e.custom)))
              : (this.custom = `${e.custom}`)),
          s(e.text) && (this.body = `${e.text}`),
          s(e.body) && (this.body = `${e.body}`),
          s(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
          s(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0),
          s(e.antiSpamContent) &&
            ((0, r.default)(e.antiSpamContent) === 'object'
              ? (this.logger.info(
                  'model::Message: antiSpamContent should be JsonString, auto transfer'
                ),
                (this.antiSpamContent = JSON.stringify(e.antiSpamContent)))
              : (this.antiSpamContent = `${e.antiSpamContent}`)),
          s(e.antiSpamBusinessId) &&
            ((0, r.default)(e.antiSpamBusinessId) === 'object'
              ? (this.logger.info(
                  'model::Message: antiSpamBusinessId should be JsonString, auto transfer'
                ),
                (this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)))
              : (this.antiSpamBusinessId = `${e.antiSpamBusinessId}`)),
          s(e.skipHistory) && (this.skipHistory = e.skipHistory ? 1 : 0),
          s(e.highPriority) && (this.highPriority = e.highPriority ? 1 : 0),
          s(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0);
      }
      (p.validTypes = u.validTypes),
        i.merge(p.prototype, u.prototype),
        (p.getType = u.getType),
        (p.reverse = function(e) {
          let t = i.filterObj(
            e,
            'chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status'
          );
          return (
            s(t.fromAvatar) && (t.fromAvatar = (0, o.genPrivateUrl)(t.fromAvatar)),
            (t = i.merge(t, {
              fromClientType: c.reverseType(e.fromClientType),
              time: +e.time,
              type: p.getType(e),
              text: a(e.body) ? e.body : '',
              resend: +e.resend == 1,
            })),
            s(t.userUpdateTime) && (t.userUpdateTime = +t.userUpdateTime),
            (t.status = t.status || 'success'),
            t
          );
        }),
        (p.setExtra = function(e, t) {
          u.setFlow(e, t);
        }),
        (e.exports = p);
    },
    ,
    function(e, t, n) {
      t.__esModule = !0;
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(78));
      t.default =
        r.default ||
        function(e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    },
    function(e, t, n) {
      const r = n(26);

      const o = n(19);

      const i = n(12);

      const s = n(39);

      const a = n(7);

      const c = n(57);

      const u = Object.getOwnPropertyDescriptor;
      t.f = n(8)
        ? u
        : function(e, t) {
            if (((e = i(e)), (t = s(t, !0)), c))
              try {
                return u(e, t);
              } catch (e) {}
            if (a(e, t)) return o(!r.f.call(e, t), e[t]);
          };
    },
    function(e, t, n) {
      const r = n(41);

      const o = Math.min;
      e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0;
      };
    },
    ,
    function(e, t, n) {
      const r = n(4);

      var o = {
        genUrlSep(e) {
          return (e = `${e}`).indexOf('?') === -1 ? '?imageView&' : '&';
        },
        url2object(e) {
          const t = (e = e || '').indexOf('https') >= 0 ? 'https://' : 'http://';

          let n = e.replace(t, '');
          n.indexOf('?') >= 0 && (n = n.substring(0, n.indexOf('?')));
          const r = n.split('/');
          n = r[0];
          let o = '';
          if ((r.length > 0 && (o = r.slice(1).join('/')), e.indexOf('?') === -1))
            return { protocol: t, hostname: n, path: o, query: {} };
          const i = {};
          return (
            e
              .substr(e.indexOf('?') + 1)
              .split('&')
              .forEach(e => {
                if (e.indexOf('=') > 0) {
                  const t = e.split('=');
                  i[t[0]] = decodeURIComponent(t[1]);
                } else i[e] = '';
              }),
            { protocol: t, hostname: n, path: o, query: i }
          );
        },
        object2url(e) {
          let t = e.protocol;

          let n = e.hostname;

          const r = e.path;

          let o = e.query;
          (t = t || 'http://'), (n = n || ''), r && (n = `${n}/${r}`), (o = o || {});
          const i = [];
          for (const s in o) s !== 'imageView' && i.push(`${s}=${encodeURIComponent(o[s])}`);
          return i.length > 0 ? `${t}${n}?imageView&${i.join('&')}` : `${t}${n}`;
        },
        genPrivateUrl(e) {
          const t = o.url2object(e);

          const n = t.hostname;

          const i = t.path;

          const s = r.downloadHost;

          const a = r.downloadUrl;
          if (n === s) {
            const c = i.indexOf('/');
            if (c !== -1) {
              const u = i.substring(0, c);

              const l = i.substring(c + 1);
              return a.replace('{bucket}', u).replace('{object}', l);
            }
          } else if (n.indexOf(s) !== -1) {
            const p = t.path;

            const m = p.indexOf('.');
            if (m !== -1) {
              const d = p.substring(0, m);

              const f = p;
              return a.replace('{bucket}', d).replace('{object}', f);
            }
          }
          return e;
        },
      };
      e.exports = o;
    },
    function(e, t) {},
    function(e, t, n) {
      const r = n(1).document;
      e.exports = r && r.documentElement;
    },
    function(e, t, n) {
      const r = n(0);

      const o = r.undef;

      const i = n(23);

      const s = n(146);

      const a = n(184);

      const c = n(183);

      const u = n(182);

      const l = n(181);

      const p = n(180);
      function m(e) {
        this.mixin(e);
      }
      m.prototype.mixin = function(e) {
        const t = this;
        (this.configMap = this.configMap || {}),
          ['idMap', 'cmdConfig', 'packetConfig'].forEach(n => {
            t.configMap[n] = r.merge({}, t.configMap[n], e.configMap && e.configMap[n]);
          }),
          ['serializeMap', 'unserializeMap'].forEach(n => {
            t[n] = r.merge({}, t[n], e[n]);
          });
      };
      const d = new m({ configMap: s, serializeMap: a, unserializeMap: c });

      const f = new m({ configMap: u, serializeMap: l, unserializeMap: p });
      (m.getInstance = function(e) {
        switch (e) {
          case 'IM':
            return d;
          case 'Chatroom':
            return f;
        }
      }),
        (m.prototype.createCmd = (function() {
          let e = 1;
          return function(t, n) {
            const r = this;

            const i = this.configMap.cmdConfig[t];
            return (
              (t = { SID: i.sid, CID: i.cid, SER: t === 'heartbeat' ? 0 : e++ }),
              i.params &&
                ((t.Q = []),
                i.params.forEach(e => {
                  let i = e.type;

                  const s = e.name;

                  const a = e.entity;

                  let c = n[s];
                  if (!o(c)) {
                    switch (i) {
                      case 'PropertyArray':
                        (i = 'ArrayMable'),
                          (c = c.map(e => {
                            return { t: 'Property', v: r.serialize(e, a) };
                          }));
                        break;
                      case 'Property':
                        c = r.serialize(c, s);
                        break;
                      case 'bool':
                        c = c ? 'true' : 'false';
                    }
                    t.Q.push({ t: i, v: c });
                  }
                })),
              t
            );
          };
        })()),
        (m.prototype.parseResponse = function(e) {
          const t = this;

          const n = JSON.parse(e);

          const o = { raw: n, rawStr: e, error: i.genError(n.code) };

          let s = t.configMap.packetConfig[`${n.sid}_${n.cid}`];
          if (!s) return (o.notFound = { sid: n.sid, cid: n.cid }), o;
          let a = n.r;

          const c = s.service === 'notify' && !s.cmd;
          if (((o.isNotify = c), c)) {
            var u = n.r[1].headerPacket;
            if (((s = t.configMap.packetConfig[`${u.sid}_${u.cid}`]), (a = n.r[1].body), !s))
              return (o.notFound = { sid: u.sid, cid: u.cid }), o;
          }
          if (((o.service = s.service), (o.cmd = s.cmd), o.error)) {
            let l = `${n.sid}_${n.cid}`;
            if (
              (c && (l = `${u.sid}_${u.cid}`),
              (o.error.cmd = o.cmd),
              (o.error.callFunc = `protocol::parseResponse: ${l}`),
              o.error.code === 416)
            ) {
              const p = a[0];
              p && (o.frequencyControlDuration = 1e3 * p);
            }
          }
          let m = !1;
          return (
            o.error &&
              s.trivialErrorCodes &&
              (m = s.trivialErrorCodes.indexOf(o.error.code) !== -1),
            (o.error && !m) ||
              !s.response ||
              ((o.content = {}),
              s.response.forEach((e, i) => {
                const s = a[i];
                if (!r.undef(s)) {
                  const u = e.type;

                  const l = e.name;

                  const p = e.entity || l;
                  switch (u) {
                    case 'Property':
                      o.content[l] = t.unserialize(s, p);
                      break;
                    case 'PropertyArray':
                      (o.content[l] = []),
                        s.forEach(e => {
                          o.content[l].push(t.unserialize(e, p));
                        });
                      break;
                    case 'KVArray':
                      o.content[l] = s;
                      break;
                    case 'long':
                    case 'Long':
                    case 'byte':
                    case 'Byte':
                    case 'Number':
                      o.content[l] = +s;
                      break;
                    default:
                      o.content[l] = s;
                  }
                  if ((c && l === 'msg') || l === 'sysMsg') {
                    const m = o.content[l];
                    r.isObject(m) &&
                      !m.idServer &&
                      ((m.idServer = `${n.r[0]}`),
                      m.type &&
                        m.type === '8' &&
                        m.deletedIdClient &&
                        (m.idServer = m.deletedIdClient));
                  }
                }
              })),
            o
          );
        }),
        (m.prototype.serialize = function(e, t) {
          const n = this.serializeMap[t];

          const r = {};
          for (const o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
          return r;
        }),
        (m.prototype.unserialize = function(e, t) {
          const n = this.unserializeMap[t];

          const r = {};
          if (e) for (const o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
          return r;
        }),
        (e.exports = m);
    },
    function(e, t, n) {
      const r = n(28);

      const o = n(33);

      const i = n(26);

      const s = n(49);

      const a = n(54);

      const c = Object.assign;
      e.exports =
        !c ||
        n(16)(() => {
          const e = {};

          const t = {};

          const n = Symbol();

          const r = 'abcdefghijklmnopqrst';
          return (
            (e[n] = 7),
            r.split('').forEach(e => {
              t[e] = e;
            }),
            c({}, e)[n] != 7 || Object.keys(c({}, t)).join('') != r
          );
        })
          ? function(e, t) {
              for (var n = s(e), c = arguments.length, u = 1, l = o.f, p = i.f; c > u; )
                for (
                  var m,
                    d = a(arguments[u++]),
                    f = l ? r(d).concat(l(d)) : r(d),
                    h = f.length,
                    y = 0;
                  h > y;

                )
                  p.call(d, (m = f[y++])) && (n[m] = d[m]);
              return n;
            }
          : c;
    },
    function(e, t, n) {
      const r = n(13);
      r(r.S + r.F, 'Object', { assign: n(75) });
    },
    function(e, t, n) {
      n(76), (e.exports = n(3).Object.assign);
    },
    function(e, t, n) {
      e.exports = { default: n(77), __esModule: !0 };
    },
    ,
    function(e, t, n) {
      n(34)('observable');
    },
    function(e, t, n) {
      n(34)('asyncIterator');
    },
    function(e, t, n) {
      const r = n(12);

      const o = n(53).f;

      const i = {}.toString;

      const s =
        typeof window === 'object' && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
      e.exports.f = function(e) {
        return s && i.call(e) == '[object Window]'
          ? (function(e) {
              try {
                return o(e);
              } catch (e) {
                return s.slice();
              }
            })(e)
          : o(r(e));
      };
    },
    function(e, t, n) {
      const r = n(32);
      e.exports =
        Array.isArray ||
        function(e) {
          return r(e) == 'Array';
        };
    },
    function(e, t, n) {
      const r = n(28);

      const o = n(33);

      const i = n(26);
      e.exports = function(e) {
        const t = r(e);

        const n = o.f;
        if (n)
          for (var s, a = n(e), c = i.f, u = 0; a.length > u; )
            c.call(e, (s = a[u++])) && t.push(s);
        return t;
      };
    },
    function(e, t, n) {
      const r = n(27)('meta');

      const o = n(11);

      const i = n(7);

      const s = n(6).f;

      let a = 0;

      const c =
        Object.isExtensible ||
        function() {
          return !0;
        };

      const u = !n(16)(() => {
        return c(Object.preventExtensions({}));
      });

      const l = function(e) {
        s(e, r, { value: { i: `O${++a}`, w: {} } });
      };

      var p = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey(e, t) {
          if (!o(e)) return typeof e === 'symbol' ? e : (typeof e === 'string' ? 'S' : 'P') + e;
          if (!i(e, r)) {
            if (!c(e)) return 'F';
            if (!t) return 'E';
            l(e);
          }
          return e[r].i;
        },
        getWeak(e, t) {
          if (!i(e, r)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[r].w;
        },
        onFreeze(e) {
          return u && p.NEED && c(e) && !i(e, r) && l(e), e;
        },
      });
    },
    function(e, t, n) {
      const r = n(1);

      const o = n(7);

      const i = n(8);

      const s = n(13);

      const a = n(56);

      const c = n(85).KEY;

      const u = n(16);

      const l = n(37);

      const p = n(31);

      const m = n(27);

      const d = n(2);

      const f = n(35);

      const h = n(34);

      const y = n(84);

      const g = n(83);

      const v = n(9);

      const b = n(11);

      const k = n(12);

      const T = n(39);

      const M = n(19);

      const S = n(45);

      const x = n(82);

      const w = n(68);

      const C = n(6);

      const _ = n(28);

      const O = w.f;

      const P = C.f;

      const I = x.f;

      let E = r.Symbol;

      const A = r.JSON;

      const j = A && A.stringify;

      const N = d('_hidden');

      const F = d('toPrimitive');

      const R = {}.propertyIsEnumerable;

      const L = l('symbol-registry');

      const D = l('symbols');

      const U = l('op-symbols');

      const q = Object.prototype;

      const B = typeof E === 'function';

      const H = r.QObject;

      let W = !H || !H.prototype || !H.prototype.findChild;

      const $ =
        i &&
        u(() => {
          return (
            S(
              P({}, 'a', {
                get() {
                  return P(this, 'a', { value: 7 }).a;
                },
              })
            ).a != 7
          );
        })
          ? function(e, t, n) {
              const r = O(q, t);
              r && delete q[t], P(e, t, n), r && e !== q && P(q, t, r);
            }
          : P;

      const X = function(e) {
        const t = (D[e] = S(E.prototype));
        return (t._k = e), t;
      };

      const J =
        B && typeof E.iterator === 'symbol'
          ? function(e) {
              return typeof e === 'symbol';
            }
          : function(e) {
              return e instanceof E;
            };

      var z = function(e, t, n) {
        return (
          e === q && z(U, t, n),
          v(e),
          (t = T(t, !0)),
          v(n),
          o(D, t)
            ? (n.enumerable
                ? (o(e, N) && e[N][t] && (e[N][t] = !1), (n = S(n, { enumerable: M(0, !1) })))
                : (o(e, N) || P(e, N, M(1, {})), (e[N][t] = !0)),
              $(e, t, n))
            : P(e, t, n)
        );
      };

      const G = function(e, t) {
        v(e);
        for (var n, r = y((t = k(t))), o = 0, i = r.length; i > o; ) z(e, (n = r[o++]), t[n]);
        return e;
      };

      const K = function(e) {
        const t = R.call(this, (e = T(e, !0)));
        return (
          !(this === q && o(D, e) && !o(U, e)) &&
          (!(t || !o(this, e) || !o(D, e) || (o(this, N) && this[N][e])) || t)
        );
      };

      const V = function(e, t) {
        if (((e = k(e)), (t = T(t, !0)), e !== q || !o(D, t) || o(U, t))) {
          const n = O(e, t);
          return !n || !o(D, t) || (o(e, N) && e[N][t]) || (n.enumerable = !0), n;
        }
      };

      const Y = function(e) {
        for (var t, n = I(k(e)), r = [], i = 0; n.length > i; )
          o(D, (t = n[i++])) || t == N || t == c || r.push(t);
        return r;
      };

      const Q = function(e) {
        for (var t, n = e === q, r = I(n ? U : k(e)), i = [], s = 0; r.length > s; )
          !o(D, (t = r[s++])) || (n && !o(q, t)) || i.push(D[t]);
        return i;
      };
      B ||
        (a(
          (E = function() {
            if (this instanceof E) throw TypeError('Symbol is not a constructor!');
            const e = m(arguments.length > 0 ? arguments[0] : void 0);

            var t = function(n) {
              this === q && t.call(U, n),
                o(this, N) && o(this[N], e) && (this[N][e] = !1),
                $(this, e, M(1, n));
            };
            return i && W && $(q, e, { configurable: !0, set: t }), X(e);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (w.f = V),
        (C.f = z),
        (n(53).f = x.f = Y),
        (n(26).f = K),
        (n(33).f = Q),
        i && !n(20) && a(q, 'propertyIsEnumerable', K, !0),
        (f.f = function(e) {
          return X(d(e));
        })),
        s(s.G + s.W + s.F * !B, { Symbol: E });
      for (
        let Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ee = 0;
        Z.length > ee;

      )
        d(Z[ee++]);
      for (let te = _(d.store), ne = 0; te.length > ne; ) h(te[ne++]);
      s(s.S + s.F * !B, 'Symbol', {
        for(e) {
          return o(L, (e += '')) ? L[e] : (L[e] = E(e));
        },
        keyFor(e) {
          if (!J(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in L) if (L[t] === e) return t;
        },
        useSetter() {
          W = !0;
        },
        useSimple() {
          W = !1;
        },
      }),
        s(s.S + s.F * !B, 'Object', {
          create(e, t) {
            return void 0 === t ? S(e) : G(S(e), t);
          },
          defineProperty: z,
          defineProperties: G,
          getOwnPropertyDescriptor: V,
          getOwnPropertyNames: Y,
          getOwnPropertySymbols: Q,
        }),
        A &&
          s(
            s.S +
              s.F *
                (!B ||
                  u(() => {
                    const e = E();
                    return j([e]) != '[null]' || j({ a: e }) != '{}' || j(Object(e)) != '{}';
                  })),
            'JSON',
            {
              stringify(e) {
                for (var t, n, r = [e], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                if (((n = t = r[1]), (b(t) || void 0 !== e) && !J(e)))
                  return (
                    g(t) ||
                      (t = function(e, t) {
                        if ((typeof n === 'function' && (t = n.call(this, e, t)), !J(t))) return t;
                      }),
                    (r[1] = t),
                    j.apply(A, r)
                  );
              },
            }
          ),
        E.prototype[F] || n(10)(E.prototype, F, E.prototype.valueOf),
        p(E, 'Symbol'),
        p(Math, 'Math', !0),
        p(r.JSON, 'JSON', !0);
    },
    function(e, t, n) {
      n(86), n(72), n(81), n(80), (e.exports = n(3).Symbol);
    },
    function(e, t, n) {
      e.exports = { default: n(87), __esModule: !0 };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    },
    function(e, t) {
      e.exports = function() {};
    },
    function(e, t, n) {
      const r = n(90);

      const o = n(89);

      const i = n(18);

      const s = n(12);
      (e.exports = n(58)(
        Array,
        'Array',
        function(e, t) {
          (this._t = s(e)), (this._i = 0), (this._k = t);
        },
        function() {
          const e = this._t;

          const t = this._k;

          const n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), o(1))
            : o(0, t == 'keys' ? n : t == 'values' ? e[n] : [n, e[n]]);
        },
        'values'
      )),
        (i.Arguments = i.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    function(e, t, n) {
      const r = n(7);

      const o = n(49);

      const i = n(38)('IE_PROTO');

      const s = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = o(e)),
            r(e, i)
              ? e[i]
              : typeof e.constructor === 'function' && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                  ? s
                  : null
          );
        };
    },
    function(e, t, n) {
      const r = n(41);

      const o = Math.max;

      const i = Math.min;
      e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
      };
    },
    function(e, t, n) {
      const r = n(12);

      const o = n(69);

      const i = n(93);
      e.exports = function(e) {
        return function(t, n, s) {
          let a;

          const c = r(t);

          const u = o(c.length);

          let l = i(s, u);
          if (e && n != n) {
            for (; u > l; ) if ((a = c[l++]) != a) return !0;
          } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, n) {
      const r = n(6);

      const o = n(9);

      const i = n(28);
      e.exports = n(8)
        ? Object.defineProperties
        : function(e, t) {
            o(e);
            for (var n, s = i(t), a = s.length, c = 0; a > c; ) r.f(e, (n = s[c++]), t[n]);
            return e;
          };
    },
    function(e, t, n) {
      const r = n(45);

      const o = n(19);

      const i = n(31);

      const s = {};
      n(10)(s, n(2)('iterator'), function() {
        return this;
      }),
        (e.exports = function(e, t, n) {
          (e.prototype = r(s, { next: o(1, n) })), i(e, `${t} Iterator`);
        });
    },
    function(e, t, n) {
      const r = n(41);

      const o = n(40);
      e.exports = function(e) {
        return function(t, n) {
          let i;

          let s;

          const a = String(o(t));

          const c = r(n);

          const u = a.length;
          return c < 0 || c >= u
            ? e
              ? ''
              : void 0
            : (i = a.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === u ||
              (s = a.charCodeAt(c + 1)) < 56320 ||
              s > 57343
              ? e
                ? a.charAt(c)
                : i
              : e
                ? a.slice(c, c + 2)
                : s - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, n) {
      n(51), n(60), (e.exports = n(35).f('iterator'));
    },
    function(e, t, n) {
      e.exports = { default: n(98), __esModule: !0 };
    },
    ,
    function(e, t, n) {
      const r = n(62);

      const o = n(0);

      const i = o.undef;

      const s = o.notundef;

      const a = n(4);

      const c = n(74).getInstance('Chatroom');

      const u = n(168);

      const l = n(141);
      function p(e) {
        o.verifyOptions(
          e,
          'appKey account chatroomId chatroomAddresses',
          'protocol::ChatroomProtocol'
        ),
          e.isAnonymous || o.verifyOptions(e, 'token', 'protocol::ChatroomProtocol'),
          o.verifyParamType(
            'chatroomAddresses',
            e.chatroomAddresses,
            'array',
            'protocol::ChatroomProtocol'
          ),
          o.verifyCallback(
            e,
            'onconnect onerror onwillreconnect ondisconnect onmsg onmsgs onrobots',
            'protocol::ChatroomProtocol'
          ),
          r.call(this, e);
      }
      const m = r.fn;

      const d = (p.fn = p.prototype = Object.create(m));
      (d.init = function() {
        m.init.call(this),
          (this.parser = c),
          (this.syncResult = {}),
          (this.timetags = {}),
          (this.msgBuffer = []);
      }),
        (d.reset = function() {
          const e = this;
          m.reset.call(e);
          const t = e.options;
          i(t.msgBufferInterval) && (t.msgBufferInterval = 300),
            o.verifyParamType(
              'msgBufferInterval',
              t.msgBufferInterval,
              'number',
              'protocol::ChatroomProtocol.reset'
            ),
            i(t.msgBufferSize) && (t.msgBufferSize = 500),
            o.verifyParamType(
              'msgBufferSize',
              t.msgBufferSize,
              'number',
              'protocol::ChatroomProtocol.reset'
            ),
            s(t.chatroomAddresses) &&
              ((e.socketUrls = t.chatroomAddresses.map(t => {
                return a.formatSocketUrl({ url: t, secure: e.options.secure });
              })),
              (e.socketUrlsBackup = e.socketUrls.slice(0)));
        }),
        (d.processChatroom = function(e) {
          switch (e.cmd) {
            case 'login':
              e.error ||
                (e.obj = {
                  chatroom: u.reverse(e.content.chatroom),
                  member: l.reverse(e.content.chatroomMember),
                });
              break;
            case 'kicked':
              this.onKicked(e);
              break;
            case 'logout':
              break;
            case 'sendMsg':
              this.onSendMsg(e);
              break;
            case 'msg':
              this.onMsg(e);
              break;
            case 'getChatroomMembers':
              this.onChatroomMembers(e);
              break;
            case 'getHistoryMsgs':
              this.onHistoryMsgs(e);
              break;
            case 'markChatroomMember':
              this.onMarkChatroomMember(e);
              break;
            case 'closeChatroom':
              break;
            case 'getChatroom':
              this.onChatroom(e);
              break;
            case 'updateChatroom':
              break;
            case 'updateMyChatroomMemberInfo':
              delete e.obj.chatroomMember;
              break;
            case 'getChatroomMembersInfo':
              this.onChatroomMembersInfo(e);
              break;
            case 'kickChatroomMember':
            case 'updateChatroomMemberTempMute':
              break;
            case 'queueList':
              e.error || (e.obj = e.content);
              break;
            case 'syncRobot':
              this.onSyncRobot(e);
          }
        }),
        (d.onChatroom = function(e) {
          e.error || (e.obj.chatroom = u.reverse(e.content.chatroom));
        }),
        (e.exports = p),
        n(285),
        n(284),
        n(283),
        n(282);
    },
    ,
    ,
    ,
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(43)).default.clientTypeMap;
      function o() {}
      (o.reverse = function(e) {
        const t = e;
        return (t.type = r[t.type]), t;
      }),
        (o.reverseType = function(e) {
          return r[e] || e;
        }),
        (e.exports = o);
    },
    ,
    function(e, t, n) {
      const r = n(24);

      const o = r.f;

      const i = n(203);
      function s(e) {
        e.onload && this.once('load', e.onload),
          e.onerror && this.once('error', e.onerror),
          e.onbeforesend && this.once('beforesend', e.onbeforesend),
          e.onaftersend && this.once('aftersend', e.onaftersend);
        const t = (e = this.options = r.fetch(
          {
            method: 'GET',
            url: '',
            sync: !1,
            data: null,
            headers: {},
            cookie: !1,
            timeout: 6e4,
            type: 'text',
            form: null,
            input: null,
            putFileAtEnd: !1,
            proxyUrl: '',
          },
          e
        )).headers;
        r.notexist(t['Content-Type']) && (t['Content-Type'] = 'application/x-www-form-urlencoded'),
          this.send();
      }
      const a = (s.prototype = Object.create(i.prototype));
      (a.send = function() {
        const e = this;

        const t = e.options;
        setTimeout(() => {
          try {
            try {
              e.emit('beforesend', t);
            } catch (e) {
              console.error('ignore error ajax beforesend,', e);
            }
            e.doSend();
          } catch (t) {
            console.error('ignore error server error,', t),
              e.onError('serverError', `请求失败:${t.message}`);
          }
        }, 0);
      }),
        (a.doSend = o),
        (a.afterSend = function() {
          const e = this;
          setTimeout(() => {
            e.emit('aftersend', e.options);
          }, 0);
        }),
        (a.onLoad = function(e) {
          const t = this.options;

          const n = e.status;

          let r = e.result;
          if (`${n}`.indexOf('2') === 0) {
            if (t.type === 'json')
              try {
                r = JSON.parse(r);
              } catch (e) {
                return (
                  console.error('ignore error parse json,', e), void this.onError('parseError', r)
                );
              }
            this.emit('load', r);
          } else this.onError('serverError', '服务器返回异常状态', { status: n, result: r });
        }),
        (a.onError = function(e, t, n) {
          const o = r.isObject(n) ? n : {};
          (o.code = e || 'error'), (o.message = t || '发生错误'), this.emit('error', o);
        }),
        (a.onTimeout = function() {
          this.onError('timeout', '请求超时');
        }),
        (a.abort = function() {
          this.onError('abort', '客户端中止');
        }),
        (a.header = function(e) {
          const t = this;
          if (!r.isArray(e)) return t.getResponseHeader(e || '');
          const n = {};
          return (
            e.forEach(e => {
              n[e] = t.header(e);
            }),
            n
          );
        }),
        (a.getResponseHeader = o),
        (a.destroy = o),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(24);

      const o = n(204);

      const i = n(202);

      const s = n(201);

      const a = {};

      let c = r.f;
      function u(e) {
        const t = (e.upload = (e.headers || r.o)['Content-Type'] === 'multipart/form-data');

        let n = !1;
        try {
          n = `${location.protocol}//${location.host}`.toLowerCase() !== r.url2origin(e.url);
        } catch (e) {}
        return (
          (e.cors = n),
          t || n || e.mode
            ? (function(e) {
                let t = e.mode;

                let n = o;

                const a = r.getGlobal();
                return (
                  !a.FormData && a.document && (t = 'iframe'),
                  t === 'iframe' && (n = e.upload ? i : s),
                  new n(e)
                );
              })(e)
            : new o(e)
        );
      }
      function l(e, t, n) {
        const r = a[e];
        if (r) {
          t === 'onload' &&
            r.result &&
            (n = (function(e, t) {
              t = { data: t };
              const n = e.result.headers;
              return n && (t.headers = e.req.header(n)), t;
            })(r, n)),
            (function(e) {
              const t = a[e];
              t && (t.req.destroy(), delete a[e]);
            })(e);
          const o = { type: t, result: n };
          c(o), o.stopped || r[t](o.result);
        }
      }
      function p(e, t) {
        const n = r.genUrlSep(e);
        return (t = t || ''), r.isObject(t) && (t = r.object2query(t)), t && (e += n + t), e;
      }
      function m(e, t) {
        t = t || {};
        const n = r.uniqueID();

        const o = { result: t.result, onload: t.onload || r.f, onerror: t.onerror || r.f };
        (a[n] = o),
          (t.onload = function(e, t) {
            l(e, 'onload', t);
          }.bind(null, n)),
          (t.onerror = function(e, t) {
            l(e, 'onerror', t);
          }.bind(null, n)),
          t.query && (e = p(e, t.query));
        const i = t.method || '';
        return (
          (i && !/get/i.test(i)) || !t.data || ((e = p(e, t.data)), (t.data = null)),
          (t.url = e),
          (o.req = u(t)),
          n
        );
      }
      (m.filter = function(e) {
        r.isFunction(e) && (c = e);
      }),
        (m.abort = function(e) {
          const t = a[e];
          t && t.req.abort();
        }),
        (e.exports = m);
    },
    ,
    function(e, t) {
      e.exports = function(e, t) {
        const n = t.split('.');
        for (; n.length; ) {
          let r = n.shift();

          let o = !1;
          if ((r[r.length - 1] == '?' && ((r = r.slice(0, -1)), (o = !0)), !(e = e[r]) && o))
            return e;
        }
        return e;
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      const r = n(71);

      const o = n(65);

      const i = n(0);

      const s = n(4);
      function a(e) {
        switch (
          (i.notundef(e.type) ? i.verifyFileType(e.type, 'msg::FileMessage') : (e.type = 'file'),
          i.verifyOptions(e, 'file', 'msg::FileMessage'),
          i.verifyOptions(e.file, 'url ext size md5', !0, 'file.', 'msg::FileMessage'),
          e.type)
        ) {
          case 'image':
            c.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'audio':
            u.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'video':
            l.verifyFile(e.file, 'msg::FileMessage');
        }
        o.call(this, e), (this.attach = JSON.stringify(e.file));
      }
      (a.prototype = Object.create(o.prototype)),
        (a.reverse = function(e) {
          const t = o.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.file = e.attach ? JSON.parse(e.attach) : {}),
            (t.file.url = (0, r.genPrivateUrl)(t.file.url)),
            t.type === 'audio' && (t.file.mp3Url = `${t.file.url}?audioTrans&type=mp3`),
            s.httpsEnabled && (t.file.url = t.file.url.replace('http', 'https')),
            t
          );
        }),
        (e.exports = a);
      var c = n(279);

      var u = n(278);

      var l = n(277);
    },
    function(e, t, n) {
      const r = n(46);

      const o = n(101);

      const i = n(4);

      const s = n(168);

      const a = n(281);

      const c = n(0);

      const u = c.verifyOptions;

      const l = c.verifyParamType;

      const p = n(74).getInstance('Chatroom');
      function m(e) {
        return (
          (this.subType = 'chatroom'),
          (e.Protocol = o),
          (e.Message = a),
          (e.constructor = m),
          e.isAnonymous &&
            ((e.account = e.account || `nimanon_${c.guid()}`),
            (e.isAnonymous = 1),
            c.verifyOptions(e, 'chatroomNick', 'api::Chatroom'),
            (e.chatroomAvatar = e.chatroomAvatar || ' ')),
          this.init(e)
        );
      }
      (m.Protocol = o),
        (m.parser = p),
        (m.use = r.use),
        (m.getInstance = function(e) {
          return (
            e.isAnonymous &&
              ((e.account = e.account || `nimanon_${c.guid()}`),
              (e.isAnonymous = 1),
              c.verifyOptions(e, 'chatroomNick', 'api::Chatroom.getInstance'),
              (e.chatroomAvatar = e.chatroomAvatar || ' ')),
            r.getInstance.call(this, e)
          );
        }),
        (m.genInstanceName = function(e) {
          return (
            c.verifyOptions(e, 'chatroomId', 'api::Chatroom.genInstanceName'),
            `Chatroom-account-${e.account}-chatroomId-${e.chatroomId}`
          );
        });
      const d = (m.fn = m.prototype = Object.create(r.prototype));
      (m.info = d.info = i.info),
        (d.getChatroom = function(e) {
          this.processCallback(e), this.sendCmd('getChatroom', e);
        }),
        (d.updateChatroom = function(e) {
          u(e, 'chatroom needNotify', 'api::updateChatroom'),
            l('needNotify', e.needNotify, 'boolean'),
            this.processCustom(e),
            this.processCallback(e),
            (e.chatroom = new s(e.chatroom)),
            this.sendCmd('updateChatroom', e);
        }),
        (d.closeChatroom = function(e) {
          this.processCustom(e), this.processCallback(e), this.sendCmd('closeChatroom', e);
        }),
        (e.exports = m),
        n(271),
        n(270),
        n(269);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      const r = {
        link: { id: 1, heartbeat: 2 },
        misc: {
          id: 6,
          getSimpleNosToken: 1,
          getNosToken: 2,
          notifyUploadLog: 3,
          uploadSdkLogUrl: 4,
          audioToText: 5,
          processImage: 6,
          getClientAntispam: 17,
          getNosTokenTrans: 7,
          notifyTransLog: 8,
          fetchFile: 9,
          fetchFileList: 10,
          removeFile: 11,
        },
      };

      const o = {
        heartbeat: { sid: r.link.id, cid: r.link.heartbeat },
        getSimpleNosToken: {
          sid: r.misc.id,
          cid: r.misc.getSimpleNosToken,
          params: [{ type: 'int', name: 'num' }],
        },
        getNosToken: {
          sid: r.misc.id,
          cid: r.misc.getNosToken,
          params: [{ type: 'String', name: 'responseBody' }],
        },
        uploadSdkLogUrl: {
          sid: r.misc.id,
          cid: r.misc.uploadSdkLogUrl,
          params: [{ type: 'string', name: 'url' }],
        },
        audioToText: {
          sid: r.misc.id,
          cid: r.misc.audioToText,
          params: [{ type: 'Property', name: 'audioToText' }],
        },
        processImage: {
          sid: r.misc.id,
          cid: r.misc.processImage,
          params: [
            { type: 'String', name: 'url' },
            { type: 'PropertyArray', name: 'imageOps', entity: 'imageOp' },
          ],
        },
        getClientAntispam: {
          sid: r.misc.id,
          cid: r.misc.getClientAntispam,
          params: [{ type: 'Property', name: 'clientAntispam' }],
        },
        getNosTokenTrans: {
          sid: r.misc.id,
          cid: r.misc.getNosTokenTrans,
          params: [{ type: 'Property', name: 'transToken' }],
        },
        fetchFile: {
          sid: r.misc.id,
          cid: r.misc.fetchFile,
          params: [{ type: 'String', name: 'docId' }],
        },
        fetchFileList: {
          sid: r.misc.id,
          cid: r.misc.fetchFileList,
          params: [{ type: 'Property', name: 'fileListParam' }],
        },
        removeFile: {
          sid: r.misc.id,
          cid: r.misc.removeFile,
          params: [{ type: 'String', name: 'docId' }],
        },
      };
      e.exports = {
        idMap: r,
        cmdConfig: o,
        packetConfig: {
          '1_2': { service: 'link', cmd: 'heartbeat' },
          '6_1': {
            service: 'misc',
            cmd: 'getSimpleNosToken',
            response: [{ type: 'PropertyArray', name: 'nosTokens', entity: 'nosToken' }],
          },
          '6_2': {
            service: 'misc',
            cmd: 'getNosToken',
            response: [{ type: 'Property', name: 'nosToken' }],
          },
          '6_3': { service: 'misc', cmd: 'notifyUploadLog' },
          '6_5': {
            service: 'misc',
            cmd: 'audioToText',
            response: [{ type: 'String', name: 'text' }],
          },
          '6_6': {
            service: 'misc',
            cmd: 'processImage',
            response: [{ type: 'String', name: 'url' }],
          },
          '6_17': {
            service: 'misc',
            cmd: 'getClientAntispam',
            response: [{ type: 'Property', name: 'clientAntispam' }],
          },
          '6_7': {
            service: 'misc',
            cmd: 'getNosTokenTrans',
            response: [{ type: 'Property', name: 'nosToken' }, { type: 'String', name: 'docId' }],
          },
          '6_8': {
            service: 'misc',
            cmd: 'notifyTransLog',
            response: [{ type: 'Property', name: 'transInfo' }],
          },
          '6_9': {
            service: 'misc',
            cmd: 'fetchFile',
            response: [{ type: 'Property', name: 'info', entity: 'transInfo' }],
          },
          '6_10': {
            service: 'misc',
            cmd: 'fetchFileList',
            response: [
              { type: 'PropertyArray', name: 'list', entity: 'transInfo' },
              { type: 'Number', name: 'totalCount' },
            ],
          },
          '6_11': {
            service: 'misc',
            cmd: 'removeFile',
            response: [{ type: 'String', name: 'res' }],
          },
        },
      };
    },
    function(module, exports, __webpack_require__) {
      (function(global, module) {
        let __WEBPACK_AMD_DEFINE_ARRAY__;
        let __WEBPACK_AMD_DEFINE_RESULT__;
        /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */ function getGlobal() {
          return typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
              ? self
              : void 0 !== global
                ? global
                : {};
        }
        const root = getGlobal();

        let io = module.exports;
        void 0 === root.location && (root.location = null),
          root.io ? module && (module.exports = io = root.io) : (root.io = io),
          (function() {
            !(function(e, t) {
              const n = e;
              (n.version = '0.9.11'),
                (n.protocol = 1),
                (n.transports = []),
                (n.j = []),
                (n.sockets = {}),
                (n.connect = function(e, r) {
                  let o;

                  let i;

                  const s = n.util.parseUri(e);
                  t &&
                    t.location &&
                    ((s.protocol = s.protocol || t.location.protocol.slice(0, -1)),
                    (s.host = s.host || (t.document ? t.document.domain : t.location.hostname)),
                    (s.port = s.port || t.location.port)),
                    (o = n.util.uniqueUri(s));
                  const a = {
                    host: s.host,
                    secure: s.protocol === 'https',
                    port: s.port || (s.protocol === 'https' ? 443 : 80),
                    query: s.query || '',
                  };
                  return (
                    n.util.merge(a, r),
                    (!a['force new connection'] && n.sockets[o]) || (i = new n.Socket(a)),
                    !a['force new connection'] && i && (n.sockets[o] = i),
                    (i = i || n.sockets[o]).of(s.path.length > 1 ? s.path : '')
                  );
                });
            })(module.exports, root),
              (function(e, t) {
                const n = (e.util = {});

                const r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

                const o = [
                  'source',
                  'protocol',
                  'authority',
                  'userInfo',
                  'user',
                  'password',
                  'host',
                  'port',
                  'relative',
                  'path',
                  'directory',
                  'file',
                  'query',
                  'anchor',
                ];
                (n.parseUri = function(e) {
                  for (var t = r.exec(e || ''), n = {}, i = 14; i--; ) n[o[i]] = t[i] || '';
                  return n;
                }),
                  (n.uniqueUri = function(e) {
                    const n = e.protocol;

                    let r = e.host;

                    let o = e.port;
                    return (
                      'document' in t
                        ? ((r = r || document.domain),
                          (o =
                            o ||
                            (n == 'https' && document.location.protocol !== 'https:'
                              ? 443
                              : document.location.port)))
                        : ((r = r || 'localhost'), o || n != 'https' || (o = 443)),
                      `${n || 'http'}://${r}:${o || 80}`
                    );
                  }),
                  (n.query = function(e, t) {
                    const r = n.chunkQuery(e || '');

                    const o = [];
                    for (const i in (n.merge(r, n.chunkQuery(t || '')), r))
                      r.hasOwnProperty(i) && o.push(`${i}=${r[i]}`);
                    return o.length ? `?${o.join('&')}` : '';
                  }),
                  (n.chunkQuery = function(e) {
                    for (var t, n = {}, r = e.split('&'), o = 0, i = r.length; o < i; ++o)
                      (t = r[o].split('='))[0] && (n[t[0]] = t[1]);
                    return n;
                  });
                let i = !1;
                (n.load = function(e) {
                  if ((document && document.readyState === 'complete') || i) return e();
                  n.on(t, 'load', e, !1);
                }),
                  (n.on = function(e, t, n, r) {
                    e.attachEvent
                      ? e.attachEvent(`on${t}`, n)
                      : e.addEventListener && e.addEventListener(t, n, r);
                  }),
                  (n.request = function(e) {
                    if (e && typeof XDomainRequest !== 'undefined' && !n.ua.hasCORS)
                      return new XDomainRequest();
                    if (typeof XMLHttpRequest !== 'undefined' && (!e || n.ua.hasCORS))
                      return new XMLHttpRequest();
                    if (!e)
                      try {
                        return new root[(['Active'].concat('Object').join('X'))](
                          'Microsoft.XMLHTTP'
                        );
                      } catch (e) {}
                    return null;
                  }),
                  void 0 !== root &&
                    n.load(() => {
                      i = !0;
                    }),
                  (n.defer = function(e) {
                    if (!n.ua.webkit || typeof importScripts !== 'undefined') return e();
                    n.load(() => {
                      setTimeout(e, 100);
                    });
                  }),
                  (n.merge = function(e, t, r, o) {
                    let i;

                    const s = o || [];

                    const a = void 0 === r ? 2 : r;
                    for (i in t)
                      t.hasOwnProperty(i) &&
                        n.indexOf(s, i) < 0 &&
                        (typeof e[i] === 'object' && a
                          ? n.merge(e[i], t[i], a - 1, s)
                          : ((e[i] = t[i]), s.push(t[i])));
                    return e;
                  }),
                  (n.mixin = function(e, t) {
                    n.merge(e.prototype, t.prototype);
                  }),
                  (n.inherit = function(e, t) {
                    function n() {}
                    (n.prototype = t.prototype), (e.prototype = new n());
                  }),
                  (n.isArray =
                    Array.isArray ||
                    function(e) {
                      return Object.prototype.toString.call(e) === '[object Array]';
                    }),
                  (n.intersect = function(e, t) {
                    for (
                      var r = [],
                        o = e.length > t.length ? e : t,
                        i = e.length > t.length ? t : e,
                        s = 0,
                        a = i.length;
                      s < a;
                      s++
                    )
                      ~n.indexOf(o, i[s]) && r.push(i[s]);
                    return r;
                  }),
                  (n.indexOf = function(e, t, n) {
                    const r = e.length;
                    for (n = n < 0 ? (n + r < 0 ? 0 : n + r) : n || 0; n < r && e[n] !== t; n++);
                    return r <= n ? -1 : n;
                  }),
                  (n.toArray = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                    return t;
                  }),
                  (n.ua = {}),
                  (n.ua.hasCORS =
                    typeof XMLHttpRequest !== 'undefined' &&
                    (function() {
                      try {
                        var e = new XMLHttpRequest();
                      } catch (e) {
                        return !1;
                      }
                      return void 0 != e.withCredentials;
                    })()),
                  (n.ua.webkit =
                    typeof navigator !== 'undefined' && /webkit/i.test(navigator.userAgent)),
                  (n.ua.iDevice =
                    typeof navigator !== 'undefined' &&
                    /iPad|iPhone|iPod/i.test(navigator.userAgent));
              })(void 0 !== io ? io : module.exports, root),
              (function(e, t) {
                function n() {}
                (e.EventEmitter = n),
                  (n.prototype.on = function(e, n) {
                    return (
                      this.$events || (this.$events = {}),
                      this.$events[e]
                        ? t.util.isArray(this.$events[e])
                          ? this.$events[e].push(n)
                          : (this.$events[e] = [this.$events[e], n])
                        : (this.$events[e] = n),
                      this
                    );
                  }),
                  (n.prototype.addListener = n.prototype.on),
                  (n.prototype.once = function(e, t) {
                    const n = this;
                    function r() {
                      n.removeListener(e, r), t.apply(this, arguments);
                    }
                    return (r.listener = t), this.on(e, r), this;
                  }),
                  (n.prototype.removeListener = function(e, n) {
                    if (this.$events && this.$events[e]) {
                      const r = this.$events[e];
                      if (t.util.isArray(r)) {
                        for (var o = -1, i = 0, s = r.length; i < s; i++)
                          if (r[i] === n || (r[i].listener && r[i].listener === n)) {
                            o = i;
                            break;
                          }
                        if (o < 0) return this;
                        r.splice(o, 1), r.length || delete this.$events[e];
                      } else
                        (r === n || (r.listener && r.listener === n)) && delete this.$events[e];
                    }
                    return this;
                  }),
                  (n.prototype.removeAllListeners = function(e) {
                    return void 0 === e
                      ? ((this.$events = {}), this)
                      : (this.$events && this.$events[e] && (this.$events[e] = null), this);
                  }),
                  (n.prototype.listeners = function(e) {
                    return (
                      this.$events || (this.$events = {}),
                      this.$events[e] || (this.$events[e] = []),
                      t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]),
                      this.$events[e]
                    );
                  }),
                  (n.prototype.emit = function(e) {
                    if (!this.$events) return !1;
                    const n = this.$events[e];
                    if (!n) return !1;
                    const r = Array.prototype.slice.call(arguments, 1);
                    if (typeof n === 'function') n.apply(this, r);
                    else {
                      if (!t.util.isArray(n)) return !1;
                      for (let o = n.slice(), i = 0, s = o.length; i < s; i++) o[i].apply(this, r);
                    }
                    return !0;
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(exports, nativeJSON) {
                if (nativeJSON && nativeJSON.parse)
                  return (exports.JSON = {
                    parse: nativeJSON.parse,
                    stringify: nativeJSON.stringify,
                  });
                const JSON = (exports.JSON = {});
                function f(e) {
                  return e < 10 ? `0${e}` : e;
                }
                function date(e, t) {
                  return isFinite(e.valueOf())
                    ? `${e.getUTCFullYear()}-${f(e.getUTCMonth() + 1)}-${f(e.getUTCDate())}T${f(
                        e.getUTCHours()
                      )}:${f(e.getUTCMinutes())}:${f(e.getUTCSeconds())}Z`
                    : null;
                }
                const cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                let gap;

                let indent;

                const meta = {
                  '\b': '\\b',
                  '\t': '\\t',
                  '\n': '\\n',
                  '\f': '\\f',
                  '\r': '\\r',
                  '"': '\\"',
                  '\\': '\\\\',
                };

                let rep;
                function quote(e) {
                  return (
                    (escapable.lastIndex = 0),
                    escapable.test(e)
                      ? `"${e.replace(escapable, e => {
                          const t = meta[e];
                          return typeof t === 'string'
                            ? t
                            : `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                        })}"`
                      : `"${e}"`
                  );
                }
                function str(e, t) {
                  let n;

                  let r;

                  let o;

                  let i;

                  let s;

                  const a = gap;

                  let c = t[e];
                  switch (
                    (c instanceof Date && (c = date(e)),
                    typeof rep === 'function' && (c = rep.call(t, e, c)),
                    typeof c)
                  ) {
                    case 'string':
                      return quote(c);
                    case 'number':
                      return isFinite(c) ? String(c) : 'null';
                    case 'boolean':
                    case 'null':
                      return String(c);
                    case 'object':
                      if (!c) return 'null';
                      if (
                        ((gap += indent),
                        (s = []),
                        Object.prototype.toString.apply(c) === '[object Array]')
                      ) {
                        for (i = c.length, n = 0; n < i; n += 1) s[n] = str(n, c) || 'null';
                        return (
                          (o =
                            s.length === 0
                              ? '[]'
                              : gap
                                ? `[\n${gap}${s.join(`,\n${gap}`)}\n${a}]`
                                : `[${s.join(',')}]`),
                          (gap = a),
                          o
                        );
                      }
                      if (rep && typeof rep === 'object')
                        for (i = rep.length, n = 0; n < i; n += 1)
                          typeof rep[n] === 'string' &&
                            (o = str((r = rep[n]), c)) &&
                            s.push(quote(r) + (gap ? ': ' : ':') + o);
                      else
                        for (r in c)
                          Object.prototype.hasOwnProperty.call(c, r) &&
                            (o = str(r, c)) &&
                            s.push(quote(r) + (gap ? ': ' : ':') + o);
                      return (
                        (o =
                          s.length === 0
                            ? '{}'
                            : gap
                              ? `{\n${gap}${s.join(`,\n${gap}`)}\n${a}}`
                              : `{${s.join(',')}}`),
                        (gap = a),
                        o
                      );
                  }
                }
                (JSON.stringify = function(e, t, n) {
                  let r;
                  if (((gap = ''), (indent = ''), typeof n === 'number'))
                    for (r = 0; r < n; r += 1) indent += ' ';
                  else typeof n === 'string' && (indent = n);
                  if (
                    ((rep = t),
                    t &&
                      typeof t !== 'function' &&
                      (typeof t !== 'object' || typeof t.length !== 'number'))
                  )
                    throw new Error('socket.io:: replacer cannot JSON.stringify');
                  return str('', { '': e });
                }),
                  (JSON.parse = function(text, reviver) {
                    let j;
                    function walk(e, t) {
                      let n;

                      let r;

                      const o = e[t];
                      if (o && typeof o === 'object')
                        for (n in o)
                          Object.prototype.hasOwnProperty.call(o, n) &&
                            (void 0 !== (r = walk(o, n)) ? (o[n] = r) : delete o[n]);
                      return reviver.call(e, t, o);
                    }
                    if (
                      ((text = String(text)),
                      (cx.lastIndex = 0),
                      cx.test(text) &&
                        (text = text.replace(cx, e => {
                          return `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                        })),
                      /^[\],:{}\s]*$/.test(
                        text
                          .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                          .replace(
                            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            ']'
                          )
                          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                      ))
                    )
                      return (
                        (j = eval(`(${text})`)),
                        typeof reviver === 'function' ? walk({ '': j }, '') : j
                      );
                    throw new SyntaxError('socket.io:: reviver cannot JSON.parse');
                  });
              })(void 0 !== io ? io : module.exports, typeof JSON !== 'undefined' ? JSON : void 0),
              (function(e, t) {
                const n = (e.parser = {});

                const r = (n.packets = [
                  'disconnect',
                  'connect',
                  'heartbeat',
                  'message',
                  'json',
                  'event',
                  'ack',
                  'error',
                  'noop',
                ]);

                const o = (n.reasons = [
                  'transport not supported',
                  'client not handshaken',
                  'unauthorized',
                ]);

                const i = (n.advice = ['reconnect']);

                const s = t.JSON;

                const a = t.util.indexOf;
                (n.encodePacket = function(e) {
                  const t = a(r, e.type);

                  const n = e.id || '';

                  const c = e.endpoint || '';

                  const u = e.ack;

                  let l = null;
                  switch (e.type) {
                    case 'error':
                      var p = e.reason ? a(o, e.reason) : '';

                      var m = e.advice ? a(i, e.advice) : '';
                      (p === '' && m === '') || (l = p + (m !== '' ? `+${m}` : ''));
                      break;
                    case 'message':
                      e.data !== '' && (l = e.data);
                      break;
                    case 'event':
                      var d = { name: e.name };
                      e.args && e.args.length && (d.args = e.args), (l = s.stringify(d));
                      break;
                    case 'json':
                      l = s.stringify(e.data);
                      break;
                    case 'connect':
                      e.qs && (l = e.qs);
                      break;
                    case 'ack':
                      l = e.ackId + (e.args && e.args.length ? `+${s.stringify(e.args)}` : '');
                  }
                  const f = [t, n + (u == 'data' ? '+' : ''), c];
                  return l !== null && void 0 !== l && f.push(l), f.join(':');
                }),
                  (n.encodePayload = function(e) {
                    let t = '';
                    if (e.length == 1) return e[0];
                    for (let n = 0, r = e.length; n < r; n++) {
                      t += `�${e[n].length}�${e[n]}`;
                    }
                    return t;
                  });
                const c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                (n.decodePacket = function(e) {
                  if (!(a = e.match(c))) return {};
                  const t = a[2] || '';

                  const n = ((e = a[5] || ''), { type: r[a[1]], endpoint: a[4] || '' });
                  switch ((t && ((n.id = t), a[3] ? (n.ack = 'data') : (n.ack = !0)), n.type)) {
                    case 'error':
                      var a = e.split('+');
                      (n.reason = o[a[0]] || ''), (n.advice = i[a[1]] || '');
                      break;
                    case 'message':
                      n.data = e || '';
                      break;
                    case 'event':
                      try {
                        const u = s.parse(e);
                        (n.name = u.name), (n.args = u.args);
                      } catch (e) {}
                      n.args = n.args || [];
                      break;
                    case 'json':
                      try {
                        n.data = s.parse(e);
                      } catch (e) {}
                      break;
                    case 'connect':
                      n.qs = e || '';
                      break;
                    case 'ack':
                      if (
                        (a = e.match(/^([0-9]+)(\+)?(.*)/)) &&
                        ((n.ackId = a[1]), (n.args = []), a[3])
                      )
                        try {
                          n.args = a[3] ? s.parse(a[3]) : [];
                        } catch (e) {}
                  }
                  return n;
                }),
                  (n.decodePayload = function(e) {
                    const t = function(e, t) {
                      for (var n = 0, r = e; r < t.length; r++) {
                        if (t.charAt(r) == '�') return n;
                        n++;
                      }
                      return n;
                    };
                    if (e.charAt(0) == '�') {
                      for (var r = [], o = 1, i = ''; o < e.length; o++)
                        if (e.charAt(o) == '�') {
                          let s = e.substr(o + 1).substr(0, i);
                          if (e.charAt(o + 1 + Number(i)) != '�' && o + 1 + Number(i) != e.length) {
                            const a = Number(i);
                            (l = t(o + a + 1, e)), (s = e.substr(o + 1).substr(0, a + l)), (o += l);
                          }
                          r.push(n.decodePacket(s)), (o += Number(i) + 1), (i = '');
                        } else i += e.charAt(o);
                      return r;
                    }
                    return [n.decodePacket(e)];
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t) {
                function n(e, t) {
                  (this.socket = e), (this.sessid = t);
                }
                (e.Transport = n),
                  t.util.mixin(n, t.EventEmitter),
                  (n.prototype.heartbeats = function() {
                    return !0;
                  }),
                  (n.prototype.onData = function(e) {
                    if (this !== this.socket.transport) return this;
                    if (
                      (this.clearCloseTimeout(),
                      (this.socket.connected ||
                        this.socket.connecting ||
                        this.socket.reconnecting) &&
                        this.setCloseTimeout(),
                      e !== '')
                    ) {
                      const n = t.parser.decodePayload(e);
                      if (n && n.length)
                        for (let r = 0, o = n.length; r < o; r++) this.onPacket(n[r]);
                    }
                    return this;
                  }),
                  (n.prototype.onPacket = function(e) {
                    return (
                      this.socket.setHeartbeatTimeout(),
                      e.type == 'heartbeat'
                        ? this.onHeartbeat()
                        : (e.type == 'connect' && e.endpoint == '' && this.onConnect(),
                          e.type == 'error' && e.advice == 'reconnect' && (this.isOpen = !1),
                          this.socket.onPacket(e),
                          this)
                    );
                  }),
                  (n.prototype.setCloseTimeout = function() {
                    if (!this.closeTimeout) {
                      const e = this;
                      this.closeTimeout = setTimeout(() => {
                        e.onDisconnect();
                      }, this.socket.closeTimeout);
                    }
                  }),
                  (n.prototype.onDisconnect = function() {
                    return (
                      this.isOpen && this.close(),
                      this.clearTimeouts(),
                      this.socket.transport === this
                        ? this.socket.onDisconnect()
                        : this.socket.setBuffer(!1),
                      this
                    );
                  }),
                  (n.prototype.onConnect = function() {
                    return this.socket.onConnect(), this;
                  }),
                  (n.prototype.clearCloseTimeout = function() {
                    this.closeTimeout &&
                      (clearTimeout(this.closeTimeout), (this.closeTimeout = null));
                  }),
                  (n.prototype.clearTimeouts = function() {
                    this.clearCloseTimeout(),
                      this.reopenTimeout && clearTimeout(this.reopenTimeout);
                  }),
                  (n.prototype.packet = function(e) {
                    this.send(t.parser.encodePacket(e));
                  }),
                  (n.prototype.onHeartbeat = function(e) {
                    this.packet({ type: 'heartbeat' });
                  }),
                  (n.prototype.onOpen = function() {
                    (this.isOpen = !0), this.clearCloseTimeout(), this.socket.onOpen();
                  }),
                  (n.prototype.onClose = function() {
                    (this.isOpen = !1),
                      this.socket.transport === this
                        ? this.socket.onClose()
                        : this.socket.setBuffer(!1),
                      this.onDisconnect(),
                      this.onDisconnectDone instanceof Function && this.onDisconnectDone(null),
                      this.onConnectionOver instanceof Function && this.onConnectionOver(null);
                  }),
                  (n.prototype.onDisconnectDone = function() {}),
                  (n.prototype.onConnectionOver = function() {}),
                  (n.prototype.prepareUrl = function() {
                    const e = this.socket.options;
                    return `${this.scheme()}://${e.host}:${e.port}/${e.resource}/${t.protocol}/${
                      this.name
                    }/${this.sessid}`;
                  }),
                  (n.prototype.ready = function(e, t) {
                    t.call(this);
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t, n) {
                function r(e) {
                  if (
                    ((this.options = {
                      port: 80,
                      secure: !1,
                      document: 'document' in n && document,
                      resource: 'socket.io',
                      transports: e.transports || t.transports,
                      'connect timeout': 1e4,
                      'try multiple transports': !0,
                      reconnect: !0,
                      'reconnection delay': 500,
                      'reconnection limit': 1 / 0,
                      'reopen delay': 3e3,
                      'max reconnection attempts': 10,
                      'sync disconnect on unload': !1,
                      'auto connect': !0,
                      'flash policy port': 10843,
                      manualFlush: !1,
                    }),
                    t.util.merge(this.options, e),
                    (this.connected = !1),
                    (this.open = !1),
                    (this.connecting = !1),
                    (this.reconnecting = !1),
                    (this.namespaces = {}),
                    (this.buffer = []),
                    (this.doBuffer = !1),
                    this.options['sync disconnect on unload'] &&
                      (!this.isXDomain() || t.util.ua.hasCORS))
                  ) {
                    const r = this;
                    t.util.on(
                      n,
                      'beforeunload',
                      () => {
                        r.disconnectSync();
                      },
                      !1
                    );
                  }
                  this.options['auto connect'] && this.connect();
                }
                function o() {}
                (e.Socket = r),
                  t.util.mixin(r, t.EventEmitter),
                  (r.prototype.of = function(e) {
                    return (
                      this.namespaces[e] ||
                        ((this.namespaces[e] = new t.SocketNamespace(this, e)),
                        e !== '' && this.namespaces[e].packet({ type: 'connect' })),
                      this.namespaces[e]
                    );
                  }),
                  (r.prototype.publish = function() {
                    let e;
                    for (const t in (this.emit.apply(this, arguments), this.namespaces))
                      this.namespaces.hasOwnProperty(t) &&
                        (e = this.of(t)).$emit.apply(e, arguments);
                  }),
                  (r.prototype.handshake = function(e) {
                    const n = this;

                    const r = this.options;
                    function i(t) {
                      t instanceof Error
                        ? ((n.connecting = !1), n.onError(t.message))
                        : (console.log(`SocketIO handshake success ${t}`), e(...t.split(':')));
                    }
                    const s = [
                      `http${r.secure ? 's' : ''}:/`,
                      `${r.host}:${r.port}`,
                      r.resource,
                      t.protocol,
                      t.util.query(this.options.query, `t=${+new Date()}`),
                    ].join('/');
                    if (
                      this.isXDomain() &&
                      !t.util.ua.hasCORS &&
                      document &&
                      document.getElementsByTagName
                    ) {
                      const a = document.getElementsByTagName('script')[0];

                      const c = document.createElement('script');
                      (c.src = `${s}&jsonp=${t.j.length}`),
                        (c.onreadystatechange = function() {
                          this.readyState == 'loaded' &&
                            c.parentNode &&
                            (c.parentNode.removeChild(c),
                            (n.connecting = !1),
                            !n.reconnecting && n.onError('Server down or port not open'),
                            n.publish('handshake_failed'));
                        }),
                        a.parentNode.insertBefore(c, a),
                        t.j.push(e => {
                          i(e), c.parentNode.removeChild(c);
                        });
                    } else {
                      const u = t.util.request();
                      u.open('GET', s, !0),
                        (u.timeout = 1e4),
                        this.isXDomain() && (u.withCredentials = !0),
                        (u.onreadystatechange = function() {
                          u.readyState == 4 &&
                            ((u.onreadystatechange = o),
                            u.status == 200
                              ? i(u.responseText)
                              : u.status == 403
                                ? ((n.connecting = !1),
                                  n.onError(u.responseText),
                                  n.publish('handshake_failed'))
                                : ((n.connecting = !1),
                                  !n.reconnecting && n.onError(u.responseText),
                                  n.publish('handshake_failed')));
                        }),
                        (u.ontimeout = function(e) {
                          (n.connecting = !1),
                            !n.reconnecting && n.onError(u.responseText),
                            n.publish('handshake_failed');
                        }),
                        u.send(null);
                    }
                  }),
                  (r.prototype.connect = function(e) {
                    if (this.connecting) return this;
                    const n = this;
                    return (
                      (n.connecting = !0),
                      this.handshake((r, o, i, s) => {
                        (n.sessionid = r),
                          (n.closeTimeout = 1e3 * i),
                          (n.heartbeatTimeout = 1e3 * o),
                          n.transports ||
                            (n.transports = n.origTransports = s
                              ? t.util.intersect(s.split(','), n.options.transports)
                              : n.options.transports),
                          console.log(
                            `SocketIO transports: ${n.transports} opt:${n.options.transports}`
                          ),
                          n.setHeartbeatTimeout(),
                          n.once('connect', () => {
                            clearTimeout(n.connectTimeoutTimer),
                              (n.connectTimeoutTimer = null),
                              e && typeof e === 'function' && e();
                          }),
                          n.doConnect();
                      }),
                      this
                    );
                  }),
                  (r.prototype.doConnect = function() {
                    const e = this;
                    if (
                      (e.transport && e.transport.clearTimeouts(),
                      (e.transport = e.getTransport(e.transports)),
                      !e.transport)
                    )
                      return e.publish('connect_failed');
                    e.transport.ready(e, () => {
                      (e.connecting = !0),
                        e.publish('connecting', e.transport.name),
                        e.transport.open(),
                        e.options['connect timeout'] &&
                          (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer),
                          (e.connectTimeoutTimer = setTimeout(
                            e.tryNextTransport.bind(e),
                            e.options['connect timeout']
                          )));
                    });
                  }),
                  (r.prototype.getTransport = function(e) {
                    for (var n, r = e || this.transports, o = 0; (n = r[o]); o++) {
                      if (
                        (console.log(
                          `SocketIO check ${n} ${t.Transport[n].check(this)} , cors ${t.Transport[
                            n
                          ].xdomainCheck(this)}`
                        ),
                        t.Transport[n] &&
                          t.Transport[n].check(this) &&
                          (!this.isXDomain() || t.Transport[n].xdomainCheck(this)))
                      )
                        return new t.Transport[n](this, this.sessionid);
                    }
                    return null;
                  }),
                  (r.prototype.tryNextTransport = function() {
                    console.log('SocketIO try next transport');
                    if (
                      !this.connected &&
                      ((this.connecting = !1), this.options['try multiple transports'])
                    ) {
                      for (
                        var e = this.transports;
                        e.length > 0 && e.splice(0, 1)[0] != this.transport.name;

                      );
                      e.length ? this.doConnect() : this.publish('connect_failed');
                    }
                  }),
                  (r.prototype.setHeartbeatTimeout = function() {
                    if (
                      (clearTimeout(this.heartbeatTimeoutTimer),
                      !this.transport || this.transport.heartbeats())
                    ) {
                      const e = this;
                      this.heartbeatTimeoutTimer = setTimeout(() => {
                        e.transport && e.transport.onClose();
                      }, this.heartbeatTimeout);
                    }
                  }),
                  (r.prototype.packet = function(e) {
                    return (
                      this.connected && !this.doBuffer
                        ? this.transport.packet(e)
                        : this.buffer.push(e),
                      this
                    );
                  }),
                  (r.prototype.setBuffer = function(e) {
                    (this.doBuffer = e),
                      !e &&
                        this.connected &&
                        this.buffer.length &&
                        (this.options.manualFlush || this.flushBuffer());
                  }),
                  (r.prototype.flushBuffer = function() {
                    this.transport.payload(this.buffer), (this.buffer = []);
                  }),
                  (r.prototype.disconnect = function() {
                    return (
                      (this.connected || this.connecting) &&
                        (this.open && this.of('').packet({ type: 'disconnect' }),
                        this.onDisconnect('booted')),
                      this
                    );
                  }),
                  (r.prototype.disconnectSync = function() {
                    const e = t.util.request();

                    const n = `${[
                      `http${this.options.secure ? 's' : ''}:/`,
                      `${this.options.host}:${this.options.port}`,
                      this.options.resource,
                      t.protocol,
                      '',
                      this.sessionid,
                    ].join('/')}/?disconnect=1`;
                    e.open('GET', n, !1), e.send(null), this.onDisconnect('booted');
                  }),
                  (r.prototype.isXDomain = function() {
                    const e = n.location.port || (n.location.protocol == 'https:' ? 443 : 80);
                    return this.options.host !== n.location.hostname || this.options.port != e;
                  }),
                  (r.prototype.onConnect = function() {
                    this.connected ||
                      ((this.connected = !0),
                      (this.connecting = !1),
                      this.doBuffer || this.setBuffer(!1),
                      this.emit('connect'));
                  }),
                  (r.prototype.onOpen = function() {
                    this.open = !0;
                  }),
                  (r.prototype.onClose = function() {
                    (this.open = !1), clearTimeout(this.heartbeatTimeoutTimer);
                  }),
                  (r.prototype.onPacket = function(e) {
                    this.of(e.endpoint).onPacket(e);
                  }),
                  (r.prototype.onError = function(e) {
                    e &&
                      e.advice &&
                      e.advice === 'reconnect' &&
                      (this.connected || this.connecting) &&
                      (this.disconnect(), this.options.reconnect && this.reconnect()),
                      this.publish('error', e && e.reason ? e.reason : e);
                  }),
                  (r.prototype.onDisconnect = function(e) {
                    const t = this.connected;

                    const n = this.connecting;
                    (this.connected = !1),
                      (this.connecting = !1),
                      (this.open = !1),
                      (t || n) &&
                        (this.transport.close(),
                        this.transport.clearTimeouts(),
                        t &&
                          (this.publish('disconnect', e),
                          e != 'booted' &&
                            this.options.reconnect &&
                            !this.reconnecting &&
                            this.reconnect()),
                        n && this.tryNextTransport());
                  }),
                  (r.prototype.reconnect = function() {
                    (this.reconnecting = !0),
                      (this.reconnectionAttempts = 0),
                      (this.reconnectionDelay = this.options['reconnection delay']);
                    const e = this;

                    const t = this.options['max reconnection attempts'];

                    const n = this.options['try multiple transports'];

                    const r = this.options['reconnection limit'];
                    function o() {
                      if (e.connected) {
                        for (const t in e.namespaces)
                          e.namespaces.hasOwnProperty(t) &&
                            t !== '' &&
                            e.namespaces[t].packet({ type: 'connect' });
                        e.publish('reconnect', e.transport.name, e.reconnectionAttempts);
                      }
                      clearTimeout(e.reconnectionTimer),
                        e.removeListener('connect_failed', i),
                        e.removeListener('connect', i),
                        (e.reconnecting = !1),
                        delete e.reconnectionAttempts,
                        delete e.reconnectionDelay,
                        delete e.reconnectionTimer,
                        delete e.redoTransports,
                        (e.options['try multiple transports'] = n);
                    }
                    function i() {
                      if (e.reconnecting)
                        return e.connected
                          ? o()
                          : e.connecting && e.reconnecting
                            ? (e.reconnectionTimer = setTimeout(i, 1e3))
                            : void (e.reconnectionAttempts++ >= t
                                ? e.redoTransports
                                  ? (e.publish('reconnect_failed'), o())
                                  : (e.on('connect_failed', i),
                                    (e.options['try multiple transports'] = !0),
                                    (e.transports = e.origTransports),
                                    (e.transport = e.getTransport()),
                                    (e.redoTransports = !0),
                                    e.connect())
                                : (e.reconnectionDelay < r && (e.reconnectionDelay *= 2),
                                  e.connect(),
                                  e.publish(
                                    'reconnecting',
                                    e.reconnectionDelay,
                                    e.reconnectionAttempts
                                  ),
                                  (e.reconnectionTimer = setTimeout(i, e.reconnectionDelay))));
                    }
                    (this.options['try multiple transports'] = !1),
                      (this.reconnectionTimer = setTimeout(i, this.reconnectionDelay)),
                      this.on('connect', i);
                  });
              })(
                void 0 !== io ? io : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t) {
                function n(e, t) {
                  (this.socket = e),
                    (this.name = t || ''),
                    (this.flags = {}),
                    (this.json = new r(this, 'json')),
                    (this.ackPackets = 0),
                    (this.acks = {});
                }
                function r(e, t) {
                  (this.namespace = e), (this.name = t);
                }
                (e.SocketNamespace = n),
                  t.util.mixin(n, t.EventEmitter),
                  (n.prototype.$emit = t.EventEmitter.prototype.emit),
                  (n.prototype.of = function() {
                    return this.socket.of.apply(this.socket, arguments);
                  }),
                  (n.prototype.packet = function(e) {
                    return (e.endpoint = this.name), this.socket.packet(e), (this.flags = {}), this;
                  }),
                  (n.prototype.send = function(e, t) {
                    const n = { type: this.flags.json ? 'json' : 'message', data: e };
                    return (
                      typeof t === 'function' &&
                        ((n.id = ++this.ackPackets), (n.ack = !0), (this.acks[n.id] = t)),
                      this.packet(n)
                    );
                  }),
                  (n.prototype.emit = function(e) {
                    let t = Array.prototype.slice.call(arguments, 1);

                    const n = t[t.length - 1];

                    const r = { type: 'event', name: e };
                    return (
                      typeof n === 'function' &&
                        ((r.id = ++this.ackPackets),
                        (r.ack = 'data'),
                        (this.acks[r.id] = n),
                        (t = t.slice(0, t.length - 1))),
                      (r.args = t),
                      this.packet(r)
                    );
                  }),
                  (n.prototype.disconnect = function() {
                    return (
                      this.name === ''
                        ? this.socket.disconnect()
                        : (this.packet({ type: 'disconnect' }), this.$emit('disconnect')),
                      this
                    );
                  }),
                  (n.prototype.onPacket = function(e) {
                    const n = this;
                    function r() {
                      n.packet({ type: 'ack', args: t.util.toArray(arguments), ackId: e.id });
                    }
                    switch (e.type) {
                      case 'connect':
                        this.$emit('connect');
                        break;
                      case 'disconnect':
                        this.name === ''
                          ? this.socket.onDisconnect(e.reason || 'booted')
                          : this.$emit('disconnect', e.reason);
                        break;
                      case 'message':
                      case 'json':
                        var o = ['message', e.data];
                        e.ack == 'data'
                          ? o.push(r)
                          : e.ack && this.packet({ type: 'ack', ackId: e.id }),
                          this.$emit.apply(this, o);
                        break;
                      case 'event':
                        o = [e.name].concat(e.args);
                        e.ack == 'data' && o.push(r), this.$emit.apply(this, o);
                        break;
                      case 'ack':
                        this.acks[e.ackId] &&
                          (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                        break;
                      case 'error':
                        e.advice
                          ? this.socket.onError(e)
                          : e.reason == 'unauthorized'
                            ? this.$emit('connect_failed', e.reason)
                            : this.$emit('error', e.reason);
                    }
                  }),
                  (r.prototype.send = function() {
                    (this.namespace.flags[this.name] = !0),
                      this.namespace.send.apply(this.namespace, arguments);
                  }),
                  (r.prototype.emit = function() {
                    (this.namespace.flags[this.name] = !0),
                      this.namespace.emit.apply(this.namespace, arguments);
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t, n) {
                function r(e) {
                  t.Transport.apply(this, arguments);
                }
                (e.websocket = r),
                  t.util.inherit(r, t.Transport),
                  (r.prototype.name = 'websocket'),
                  (r.prototype.open = function() {
                    let e;

                    const r = t.util.query(this.socket.options.query);

                    const o = this;
                    return (
                      e || (e = n.MozWebSocket || n.WebSocket),
                      (this.websocket = new e(this.prepareUrl() + r)),
                      (this.websocket.onopen = function() {
                        o.onOpen(), o.socket.setBuffer(!1);
                      }),
                      (this.websocket.onmessage = function(e) {
                        o.onData(e.data);
                      }),
                      (this.websocket.onclose = function() {
                        o.socket.setBuffer(!0), o.onClose();
                      }),
                      (this.websocket.onerror = function(e) {
                        o.onError(e);
                      }),
                      this
                    );
                  }),
                  t.util.ua.iDevice
                    ? (r.prototype.send = function(e) {
                        const t = this;
                        return (
                          setTimeout(() => {
                            t.websocket.send(e);
                          }, 0),
                          this
                        );
                      })
                    : (r.prototype.send = function(e) {
                        return this.websocket.send(e), this;
                      }),
                  (r.prototype.payload = function(e) {
                    for (let t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                    return this;
                  }),
                  (r.prototype.close = function() {
                    return this.websocket.close(), this;
                  }),
                  (r.prototype.onError = function(e) {
                    this.socket.onError(e);
                  }),
                  (r.prototype.scheme = function() {
                    return this.socket.options.secure ? 'wss' : 'ws';
                  }),
                  (r.check = function() {
                    return ('WebSocket' in n && !('__addTask' in WebSocket)) || 'MozWebSocket' in n;
                  }),
                  (r.xdomainCheck = function() {
                    return !0;
                  }),
                  t.transports.push('websocket');
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t, n) {
                function r(e) {
                  e && (t.Transport.apply(this, arguments), (this.sendBuffer = []));
                }
                function o() {}
                (e.XHR = r),
                  t.util.inherit(r, t.Transport),
                  (r.prototype.open = function() {
                    return (
                      this.socket.setBuffer(!1),
                      this.onOpen(),
                      this.get(),
                      this.setCloseTimeout(),
                      this
                    );
                  }),
                  (r.prototype.payload = function(e) {
                    for (var n = [], r = 0, o = e.length; r < o; r++)
                      n.push(t.parser.encodePacket(e[r]));
                    this.send(t.parser.encodePayload(n));
                  }),
                  (r.prototype.send = function(e) {
                    return this.post(e), this;
                  }),
                  (r.prototype.post = function(e) {
                    const t = this;
                    this.socket.setBuffer(!0),
                      (this.sendXHR = this.request('POST')),
                      n.XDomainRequest && this.sendXHR instanceof XDomainRequest
                        ? (this.sendXHR.onload = this.sendXHR.onerror = function() {
                            (this.onload = o), t.socket.setBuffer(!1);
                          })
                        : (this.sendXHR.onreadystatechange = function() {
                            this.readyState == 4 &&
                              ((this.onreadystatechange = o),
                              (t.posting = !1),
                              this.status == 200 ? t.socket.setBuffer(!1) : t.onClose());
                          }),
                      this.sendXHR.send(e);
                  }),
                  (r.prototype.close = function() {
                    return this.onClose(), this;
                  }),
                  (r.prototype.request = function(e) {
                    const n = t.util.request(this.socket.isXDomain());

                    const r = t.util.query(this.socket.options.query, `t=${+new Date()}`);
                    if ((n.open(e || 'GET', this.prepareUrl() + r, !0), e == 'POST'))
                      try {
                        n.setRequestHeader
                          ? n.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
                          : (n.contentType = 'text/plain');
                      } catch (e) {}
                    return n;
                  }),
                  (r.prototype.scheme = function() {
                    return this.socket.options.secure ? 'https' : 'http';
                  }),
                  (r.check = function(e, r) {
                    try {
                      const o = t.util.request(r);

                      const i = n.XDomainRequest && o instanceof XDomainRequest;

                      const s = e && e.options && e.options.secure ? 'https:' : 'http:';

                      const a = n.location && s != n.location.protocol;
                      if (o && (!i || !a)) return !0;
                    } catch (e) {}
                    return !1;
                  }),
                  (r.xdomainCheck = function(e) {
                    return r.check(e, !0);
                  });
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t, n) {
                function r() {
                  t.Transport.XHR.apply(this, arguments);
                }
                function o() {}
                (e['xhr-polling'] = r),
                  t.util.inherit(r, t.Transport.XHR),
                  t.util.merge(r, t.Transport.XHR),
                  (r.prototype.name = 'xhr-polling'),
                  (r.prototype.heartbeats = function() {
                    return !1;
                  }),
                  (r.prototype.open = function() {
                    return t.Transport.XHR.prototype.open.call(this), !1;
                  }),
                  (r.prototype.get = function() {
                    if (this.isOpen) {
                      const e = this;
                      (this.xhr = this.request()),
                        n.XDomainRequest && this.xhr instanceof XDomainRequest
                          ? ((this.xhr.onload = function() {
                              (this.onload = o),
                                (this.onerror = o),
                                (e.retryCounter = 1),
                                e.onData(this.responseText),
                                e.get();
                            }),
                            (this.xhr.onerror = function() {
                              e.retryCounter++,
                                !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get();
                            }))
                          : (this.xhr.onreadystatechange = function() {
                              this.readyState == 4 &&
                                ((this.onreadystatechange = o),
                                this.status == 200
                                  ? (e.onData(this.responseText), e.get())
                                  : e.onClose());
                            }),
                        this.xhr.send(null);
                    }
                  }),
                  (r.prototype.onClose = function() {
                    if ((t.Transport.XHR.prototype.onClose.call(this), this.xhr)) {
                      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = o;
                      try {
                        this.xhr.abort();
                      } catch (e) {}
                      this.xhr = null;
                    }
                  }),
                  (r.prototype.ready = function(e, n) {
                    const r = this;
                    t.util.defer(() => {
                      n.call(r);
                    });
                  }),
                  t.transports.push('xhr-polling');
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return io;
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
              void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
          })();
      }.call(this, __webpack_require__(30), __webpack_require__(188)(module)));
    },
    function(e, t, n) {
      const r = n(0);

      const o = {
        stripmeta: 0,
        blur: 2,
        quality: 3,
        crop: 4,
        rotate: 5,
        thumbnail: 7,
        interlace: 9,
      };

      const i = {
        0: 'stripmeta',
        1: 'type',
        2: 'blur',
        3: 'quality',
        4: 'crop',
        5: 'rotate',
        6: 'pixel',
        7: 'thumbnail',
        8: 'watermark',
        9: 'interlace',
        10: 'tmp',
      };
      function s(e) {
        r.verifyOptions(e, 'type', 'image::ImageOp'),
          r.verifyParamValid('type', e.type, s.validTypes, 'image::ImageOp'),
          r.merge(this, e),
          (this.type = o[e.type]);
      }
      (s.validTypes = Object.keys(o)),
        (s.reverse = function(e) {
          const t = r.copy(e);
          return (t.type = i[t.type]), t;
        }),
        (s.reverseImageOps = function(e) {
          return e.map(e => {
            return s.reverse(e);
          });
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(0);

      const o = {
        fromDataURL(e) {
          const t = r.getGlobal();

          let n = void 0;
          n =
            e.split(',')[0].indexOf('base64') >= 0
              ? t.atob(e.split(',')[1])
              : t.decodeURIComponent(e.split(',')[1]);
          for (
            var o = e
                .split(',')[0]
                .split(':')[1]
                .split(';')[0],
              i = new Uint8Array(n.length),
              s = 0;
            s < n.length;
            s++
          )
            i[s] = n.charCodeAt(s);
          return new t.Blob([i], { type: o });
        },
      };
      e.exports = o;
    },
    function(e, t, n) {
      const r = n(24);

      const o = r.getGlobal();

      const i = {};

      const s = o.name || '_parent';

      const a = [];

      const c = [];
      i.addMsgListener = function(e) {
        a.push(e);
      };
      const u = (function() {
        const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(t) {
          return (t = t || ''), e.test(t) ? RegExp.$1 : '*';
        };
      })();

      const l = function() {
        const e = unescape(o.name || '').trim();
        if (e && e.indexOf('MSG|') === 0) {
          o.name = '';
          const t = r.string2object(e.replace('MSG|', ''), '|');

          const n = (t.origin || '').toLowerCase();
          (n && n !== '*' && location.href.toLowerCase().indexOf(n) !== 0) ||
            (function(e) {
              for (let t = 0, n = a.length; t < n; t++)
                try {
                  a[t].call(null, e);
                } catch (e) {}
            })({
              data: JSON.parse(t.data || 'null'),
              source: o.frames[t.self] || t.self,
              origin: u(t.ref || document.referrer),
            });
        }
      };

      const p = (function() {
        let e;

        const t = function(e, t) {
          for (let n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
          return !1;
        };
        return function() {
          if (c.length) {
            e = [];
            for (var n, r = c.length - 1; r >= 0; r--)
              (n = c[r]), t(e, n.w) || (e.push(n.w), c.splice(r, 1), (n.w.name = n.d));
            e = null;
          }
        };
      })();

      const m = (i.startTimer = (function() {
        let e = !1;
        return function() {
          e || ((e = !0), o.postMessage || (setInterval(p, 100), setInterval(l, 20)));
        };
      })());
      (i.postMessage = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((r.fillUndef(t, { origin: '*', source: s }), o.postMessage)) {
          let n = t.data;
          o.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin);
        } else {
          if ((m(), r.isObject(t))) {
            const i = {};
            (i.origin = t.origin || ''),
              (i.ref = location.href),
              (i.self = t.source),
              (i.data = JSON.stringify(t.data)),
              (t = `MSG|${r.object2string(i, '|', !0)}`);
          }
          c.unshift({ w: e, d: escape(t) });
        }
      }),
        (e.exports = i);
    },
    function(e, t) {
      e.exports = function e(t, n) {
        let r;

        let o;

        const i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi;

        const s = /(^[ ]*|[ ]*$)/g;

        const a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;

        const c = /^0x[0-9a-f]+$/i;

        const u = /^0/;

        const l = function(t) {
          return (e.insensitive && `${t}`.toLowerCase()) || `${t}`;
        };

        const p = l(t).replace(s, '') || '';

        const m = l(n).replace(s, '') || '';

        const d = p
          .replace(i, '\0$1\0')
          .replace(/\0$/, '')
          .replace(/^\0/, '')
          .split('\0');

        const f = m
          .replace(i, '\0$1\0')
          .replace(/\0$/, '')
          .replace(/^\0/, '')
          .split('\0');

        const h = parseInt(p.match(c), 16) || (d.length !== 1 && p.match(a) && Date.parse(p));

        const y = parseInt(m.match(c), 16) || (h && m.match(a) && Date.parse(m)) || null;
        if (y) {
          if (h < y) return -1;
          if (h > y) return 1;
        }
        for (let g = 0, v = Math.max(d.length, f.length); g < v; g++) {
          if (
            ((r = (!(d[g] || '').match(u) && parseFloat(d[g])) || d[g] || 0),
            (o = (!(f[g] || '').match(u) && parseFloat(f[g])) || f[g] || 0),
            isNaN(r) !== isNaN(o))
          )
            return isNaN(r) ? 1 : -1;
          if ((typeof r !== typeof o && ((r += ''), (o += '')), r < o)) return -1;
          if (r > o) return 1;
        }
        return 0;
      };
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
    function(e, t, n) {
      const r = n(71);

      const o = n(0);

      const i = o.notundef;

      const s = { '-1': 'restricted', 0: 'common', 1: 'owner', 2: 'manager' };
      function a(e) {
        i(e.nick) && (this.nick = `${e.nick}`),
          i(e.avatar) && (this.avatar = `${e.avatar}`),
          i(e.custom) && (this.custom = `${e.custom}`);
      }
      (a.reverse = function(e) {
        const t = o.copy(e);
        return (
          i(t.chatroomId) && (t.chatroomId = `${t.chatroomId}`),
          i(t.avatar) && (t.avatar = (0, r.genPrivateUrl)(t.avatar)),
          i(t.type) && (t.type = s[t.type]),
          i(t.level) && (t.level = +t.level),
          i(t.online) && (t.online = +t.online == 1),
          i(t.enterTime) && (t.enterTime = +t.enterTime),
          i(t.guest) && (t.guest = +t.guest == 1),
          i(t.blacked) && (t.blacked = +t.blacked == 1),
          i(t.gaged) && (t.gaged = +t.gaged == 1),
          i(t.valid) && (t.valid = +t.valid == 1),
          i(t.updateTime) && (t.updateTime = +t.updateTime),
          i(t.tempMuted) ? (t.tempMuted = +t.tempMuted == 1) : (t.tempMuted = !1),
          i(t.tempMuteDuration)
            ? (t.tempMuteDuration = +t.tempMuteDuration)
            : (t.tempMuteDuration = 0),
          t.online || delete t.enterTime,
          t.guest && ((t.type = 'guest'), delete t.valid),
          t.type !== 'common' && delete t.level,
          delete t.guest,
          t
        );
      }),
        (a.reverseMembers = function(e) {
          return e.map(e => {
            return a.reverse(e);
          });
        }),
        (a.validTypes = Object.keys(s)),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(15);

      const o = n(178);

      const i = n(123);

      const s = n(127);

      const a = n(110);

      const c = n(0);

      const u = n(149);

      const l = n(125);

      const p = n(59);

      const m = n(170);

      const d = n(169);
      e.exports = function(e) {
        c.merge(e, {
          platform: r,
          xhr: o,
          io: i,
          naturalSort: s,
          deepAccess: a,
          util: c,
          support: u,
          blob: l,
          ajax: p,
          LoggerPlugin: m,
          usePlugin: d,
        });
      };
    },
    ,
    ,
    ,
    function(e, t, n) {
      const r = n(0);

      const o = n(122);

      const i = r.merge({}, o.idMap, {
        auth: { id: 2, login: 3, kicked: 5, logout: 6, multiPortLogin: 7, kick: 8 },
        user: {
          id: 3,
          updatePushToken: 1,
          appBackground: 2,
          markInBlacklist: 3,
          getBlacklist: 4,
          markInMutelist: 5,
          getMutelist: 6,
          getRelations: 8,
          getUsers: 7,
          updateMyInfo: 10,
          updateDonnop: 15,
          syncMyInfo: 109,
          syncUpdateMyInfo: 110,
        },
        notify: {
          id: 4,
          markRead: 3,
          syncOfflineMsgs: 4,
          batchMarkRead: 5,
          syncOfflineSysMsgs: 6,
          syncRoamingMsgs: 9,
          syncMsgReceipts: 12,
          syncRobots: 15,
          syncBroadcastMsgs: 16,
        },
        sync: { id: 5, sync: 1, syncTeamMembers: 2 },
        msg: {
          id: 7,
          sendMsg: 1,
          msg: 2,
          sysMsg: 3,
          getHistoryMsgs: 6,
          sendCustomSysMsg: 7,
          searchHistoryMsgs: 8,
          deleteSessions: 9,
          getSessions: 10,
          syncSendMsg: 101,
          sendMsgReceipt: 11,
          msgReceipt: 12,
          deleteMsg: 13,
          msgDeleted: 14,
          markSessionAck: 16,
          broadcastMsg: 17,
        },
        team: {
          id: 8,
          createTeam: 1,
          sendTeamMsg: 2,
          teamMsg: 3,
          teamMsgs: 4,
          addTeamMembers: 5,
          removeTeamMembers: 6,
          updateTeam: 7,
          leaveTeam: 8,
          getTeam: 9,
          getTeams: 10,
          getTeamMembers: 11,
          dismissTeam: 12,
          applyTeam: 13,
          passTeamApply: 14,
          rejectTeamApply: 15,
          addTeamManagers: 16,
          removeTeamManagers: 17,
          transferTeam: 18,
          updateInfoInTeam: 19,
          updateNickInTeam: 20,
          acceptTeamInvite: 21,
          rejectTeamInvite: 22,
          getTeamHistoryMsgs: 23,
          searchTeamHistoryMsgs: 24,
          updateMuteStateInTeam: 25,
          getMyTeamMembers: 26,
          getMutedTeamMembers: 27,
          sendTeamMsgReceipt: 28,
          getTeamMsgReads: 29,
          getTeamMsgReadAccounts: 30,
          notifyTeamMsgReads: 31,
          muteTeamAll: 32,
          syncMyTeamMembers: 126,
          syncTeams: 109,
          syncTeamMembers: 111,
          syncCreateTeam: 101,
          syncSendTeamMsg: 102,
          syncUpdateTeamMember: 119,
        },
        friend: {
          id: 12,
          friendRequest: 1,
          syncFriendRequest: 101,
          deleteFriend: 2,
          syncDeleteFriend: 102,
          updateFriend: 3,
          syncUpdateFriend: 103,
          getFriends: 4,
        },
        chatroom: { id: 13, getChatroomAddress: 1 },
        filter: {
          id: 101,
          sendFilterMsg: 1,
          filterMsg: 2,
          filterSysMsg: 3,
          sendFilterCustomSysMsg: 7,
        },
        eventService: {
          id: 14,
          publishEvent: 1,
          pushEvent: 2,
          subscribeEvent: 3,
          unSubscribeEventsByAccounts: 4,
          unSubscribeEventsByType: 5,
          querySubscribeEventsByAccounts: 6,
          querySubscribeEventsByType: 7,
          pushEvents: 9,
        },
      });

      const s = r.merge({}, o.cmdConfig, {
        login: {
          sid: i.auth.id,
          cid: i.auth.login,
          params: [{ type: 'Property', name: 'login' }],
        },
        logout: { sid: i.auth.id, cid: i.auth.logout },
        kick: {
          sid: i.auth.id,
          cid: i.auth.kick,
          params: [{ type: 'StrArray', name: 'deviceIds' }],
        },
        updatePushToken: {
          sid: i.user.id,
          cid: i.user.updatePushToken,
          params: [
            { type: 'String', name: 'tokenName' },
            { type: 'String', name: 'token' },
            { type: 'int', name: 'pushkit' },
          ],
        },
        appBackground: {
          sid: i.user.id,
          cid: i.user.appBackground,
          params: [{ type: 'bool', name: 'isBackground' }, { type: 'Int', name: 'badge' }],
        },
        markInBlacklist: {
          sid: i.user.id,
          cid: i.user.markInBlacklist,
          params: [{ type: 'String', name: 'account' }, { type: 'bool', name: 'isAdd' }],
        },
        getBlacklist: {
          sid: i.user.id,
          cid: i.user.getBlacklist,
          params: [{ type: 'long', name: 'time' }],
        },
        markInMutelist: {
          sid: i.user.id,
          cid: i.user.markInMutelist,
          params: [{ type: 'String', name: 'account' }, { type: 'bool', name: 'isAdd' }],
        },
        getMutelist: {
          sid: i.user.id,
          cid: i.user.getMutelist,
          params: [{ type: 'long', name: 'time' }],
        },
        getRelations: {
          sid: i.user.id,
          cid: i.user.getRelations,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getUsers: {
          sid: i.user.id,
          cid: i.user.getUsers,
          params: [{ type: 'StrArray', name: 'accounts' }],
        },
        updateMyInfo: {
          sid: i.user.id,
          cid: i.user.updateMyInfo,
          params: [{ type: 'Property', name: 'user' }],
        },
        updateDonnop: {
          sid: i.user.id,
          cid: i.user.updateDonnop,
          params: [{ type: 'Property', name: 'donnop' }],
        },
        markRead: {
          sid: i.notify.id,
          cid: i.notify.markRead,
          params: [{ type: 'long', name: 'id' }, { type: 'ph', name: 'ph' }],
        },
        batchMarkRead: {
          sid: i.notify.id,
          cid: i.notify.batchMarkRead,
          params: [
            { type: 'byte', name: 'sid' },
            { type: 'byte', name: 'cid' },
            { type: 'LongArray', name: 'ids' },
          ],
        },
        sync: { sid: i.sync.id, cid: i.sync.sync, params: [{ type: 'Property', name: 'sync' }] },
        syncTeamMembers: {
          sid: i.sync.id,
          cid: i.sync.syncTeamMembers,
          params: [{ type: 'LongLongMap', name: 'sync' }],
        },
        sendMsg: {
          sid: i.msg.id,
          cid: i.msg.sendMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        getHistoryMsgs: {
          sid: i.msg.id,
          cid: i.msg.getHistoryMsgs,
          params: [
            { type: 'String', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'long', name: 'lastMsgId' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        sendCustomSysMsg: {
          sid: i.msg.id,
          cid: i.msg.sendCustomSysMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        searchHistoryMsgs: {
          sid: i.msg.id,
          cid: i.msg.searchHistoryMsgs,
          params: [
            { type: 'String', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'String', name: 'keyword' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
          ],
        },
        getSessions: {
          sid: i.msg.id,
          cid: i.msg.getSessions,
          params: [{ type: 'long', name: 'time' }],
        },
        deleteSessions: {
          sid: i.msg.id,
          cid: i.msg.deleteSessions,
          params: [{ type: 'StrArray', name: 'sessions' }],
        },
        sendMsgReceipt: {
          sid: i.msg.id,
          cid: i.msg.sendMsgReceipt,
          params: [{ type: 'Property', name: 'msgReceipt' }],
        },
        deleteMsg: {
          sid: i.msg.id,
          cid: i.msg.deleteMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        markSessionAck: {
          sid: i.msg.id,
          cid: i.msg.markSessionAck,
          params: [
            { type: 'byte', name: 'scene' },
            { type: 'String', name: 'to' },
            { type: 'long', name: 'timetag' },
          ],
        },
        createTeam: {
          sid: i.team.id,
          cid: i.team.createTeam,
          params: [
            { type: 'Property', name: 'team' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'ps' },
          ],
        },
        sendTeamMsg: {
          sid: i.team.id,
          cid: i.team.sendTeamMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        addTeamMembers: {
          sid: i.team.id,
          cid: i.team.addTeamMembers,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'ps' },
          ],
        },
        removeTeamMembers: {
          sid: i.team.id,
          cid: i.team.removeTeamMembers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        updateTeam: {
          sid: i.team.id,
          cid: i.team.updateTeam,
          params: [{ type: 'Property', name: 'team' }],
        },
        leaveTeam: {
          sid: i.team.id,
          cid: i.team.leaveTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        getTeam: {
          sid: i.team.id,
          cid: i.team.getTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        getTeams: {
          sid: i.team.id,
          cid: i.team.getTeams,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getTeamMembers: {
          sid: i.team.id,
          cid: i.team.getTeamMembers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'long', name: 'timetag' }],
        },
        dismissTeam: {
          sid: i.team.id,
          cid: i.team.dismissTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        applyTeam: {
          sid: i.team.id,
          cid: i.team.applyTeam,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'ps' }],
        },
        passTeamApply: {
          sid: i.team.id,
          cid: i.team.passTeamApply,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'from' }],
        },
        rejectTeamApply: {
          sid: i.team.id,
          cid: i.team.rejectTeamApply,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'from' },
            { type: 'String', name: 'ps' },
          ],
        },
        addTeamManagers: {
          sid: i.team.id,
          cid: i.team.addTeamManagers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        removeTeamManagers: {
          sid: i.team.id,
          cid: i.team.removeTeamManagers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        transferTeam: {
          sid: i.team.id,
          cid: i.team.transferTeam,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'account' },
            { type: 'bool', name: 'leave' },
          ],
        },
        updateInfoInTeam: {
          sid: i.team.id,
          cid: i.team.updateInfoInTeam,
          params: [{ type: 'Property', name: 'teamMember' }],
        },
        updateNickInTeam: {
          sid: i.team.id,
          cid: i.team.updateNickInTeam,
          params: [{ type: 'Property', name: 'teamMember' }],
        },
        acceptTeamInvite: {
          sid: i.team.id,
          cid: i.team.acceptTeamInvite,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'from' }],
        },
        rejectTeamInvite: {
          sid: i.team.id,
          cid: i.team.rejectTeamInvite,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'from' },
            { type: 'String', name: 'ps' },
          ],
        },
        getTeamHistoryMsgs: {
          sid: i.team.id,
          cid: i.team.getTeamHistoryMsgs,
          params: [
            { type: 'long', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'long', name: 'lastMsgId' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        searchTeamHistoryMsgs: {
          sid: i.team.id,
          cid: i.team.searchTeamHistoryMsgs,
          params: [
            { type: 'long', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'String', name: 'keyword' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
          ],
        },
        updateMuteStateInTeam: {
          sid: i.team.id,
          cid: i.team.updateMuteStateInTeam,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'account' },
            { type: 'int', name: 'mute' },
          ],
        },
        getMyTeamMembers: {
          sid: i.team.id,
          cid: i.team.getMyTeamMembers,
          params: [{ type: 'LongArray', name: 'teamIds' }],
        },
        getMutedTeamMembers: {
          sid: i.team.id,
          cid: i.team.getMutedTeamMembers,
          params: [{ type: 'long', name: 'teamId' }],
        },
        sendTeamMsgReceipt: {
          sid: i.team.id,
          cid: i.team.sendTeamMsgReceipt,
          params: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        getTeamMsgReads: {
          sid: i.team.id,
          cid: i.team.getTeamMsgReads,
          params: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        getTeamMsgReadAccounts: {
          sid: i.team.id,
          cid: i.team.getTeamMsgReadAccounts,
          params: [{ type: 'Property', name: 'teamMsgReceipt' }],
        },
        muteTeamAll: {
          sid: i.team.id,
          cid: i.team.muteTeamAll,
          params: [{ type: 'long', name: 'teamId' }, { type: 'int', name: 'muteType' }],
        },
        friendRequest: {
          sid: i.friend.id,
          cid: i.friend.friendRequest,
          params: [
            { type: 'String', name: 'account' },
            { type: 'byte', name: 'type' },
            { type: 'String', name: 'ps' },
          ],
        },
        deleteFriend: {
          sid: i.friend.id,
          cid: i.friend.deleteFriend,
          params: [{ type: 'String', name: 'account' }],
        },
        updateFriend: {
          sid: i.friend.id,
          cid: i.friend.updateFriend,
          params: [{ type: 'Property', name: 'friend' }],
        },
        getFriends: {
          sid: i.friend.id,
          cid: i.friend.getFriends,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getChatroomAddress: {
          sid: i.chatroom.id,
          cid: i.chatroom.getChatroomAddress,
          params: [{ type: 'long', name: 'chatroomId' }, { type: 'bool', name: 'isWeixinApp' }],
        },
        sendFilterMsg: {
          sid: i.filter.id,
          cid: i.filter.sendFilterMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        sendFilterCustomSysMsg: {
          sid: i.filter.id,
          cid: i.filter.sendFilterCustomSysMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        publishEvent: {
          sid: i.eventService.id,
          cid: i.eventService.publishEvent,
          params: [{ type: 'Property', name: 'msgEvent' }],
        },
        pushEvent: { sid: i.eventService.id, cid: i.eventService.pushEvent },
        subscribeEvent: {
          sid: i.eventService.id,
          cid: i.eventService.subscribeEvent,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        unSubscribeEventsByAccounts: {
          sid: i.eventService.id,
          cid: i.eventService.unSubscribeEventsByAccounts,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        unSubscribeEventsByType: {
          sid: i.eventService.id,
          cid: i.eventService.unSubscribeEventsByType,
          params: [{ type: 'Property', name: 'msgEventSubscribe' }],
        },
        querySubscribeEventsByAccounts: {
          sid: i.eventService.id,
          cid: i.eventService.querySubscribeEventsByAccounts,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        querySubscribeEventsByType: {
          sid: i.eventService.id,
          cid: i.eventService.querySubscribeEventsByType,
          params: [{ type: 'Property', name: 'msgEventSubscribe' }],
        },
        pushEvents: { sid: i.eventService.id, cid: i.eventService.pushEvents },
      });

      const a = r.merge({}, o.packetConfig, {
        '2_3': {
          service: 'auth',
          cmd: 'login',
          response: [
            { type: 'Property', name: 'loginRes' },
            { type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort' },
            { type: 'Property', name: 'aosPushInfo' },
          ],
        },
        '2_5': {
          service: 'auth',
          cmd: 'kicked',
          response: [{ type: 'Number', name: 'from' }, { type: 'Number', name: 'reason' }],
        },
        '2_6': { service: 'auth', cmd: 'logout' },
        '2_7': {
          service: 'auth',
          cmd: 'multiPortLogin',
          response: [
            { type: 'Number', name: 'state' },
            { type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort' },
          ],
        },
        '2_8': {
          service: 'auth',
          cmd: 'kick',
          response: [{ type: 'StrArray', name: 'deviceIds' }],
        },
        '3_1': { service: 'user', cmd: 'updatePushToken' },
        '3_2': { service: 'user', cmd: 'appBackground' },
        '3_3': { service: 'user', cmd: 'markInBlacklist' },
        '3_103': {
          service: 'user',
          cmd: 'syncMarkInBlacklist',
          response: [{ type: 'String', name: 'account' }, { type: 'Boolean', name: 'isAdd' }],
        },
        '3_4': {
          service: 'user',
          cmd: 'getBlacklist',
          response: [{ type: 'StrArray', name: 'blacklist' }],
        },
        '3_5': { service: 'user', cmd: 'markInMutelist' },
        '3_105': {
          service: 'user',
          cmd: 'syncMarkInMutelist',
          response: [{ type: 'String', name: 'account' }, { type: 'Boolean', name: 'isAdd' }],
        },
        '3_6': {
          service: 'user',
          cmd: 'getMutelist',
          response: [{ type: 'StrArray', name: 'mutelist' }],
        },
        '3_8': {
          service: 'user',
          cmd: 'getRelations',
          response: [
            { type: 'PropertyArray', name: 'specialRelations', entity: 'specialRelation' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '3_7': {
          service: 'user',
          cmd: 'getUsers',
          response: [{ type: 'PropertyArray', name: 'users', entity: 'user' }],
        },
        '3_10': {
          service: 'user',
          cmd: 'updateMyInfo',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '3_15': {
          service: 'user',
          cmd: 'updateDonnop',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '3_115': {
          service: 'user',
          cmd: 'syncUpdateDonnop',
          response: [{ type: 'Property', name: 'donnop' }, { type: 'Number', name: 'timetag' }],
        },
        '3_109': {
          service: 'user',
          cmd: 'syncMyInfo',
          response: [{ type: 'Property', name: 'user' }, { type: 'Number', name: 'timetag' }],
        },
        '3_110': {
          service: 'user',
          cmd: 'syncUpdateMyInfo',
          response: [{ type: 'Property', name: 'user' }],
        },
        '4_1': { service: 'notify' },
        '4_2': { service: 'notify' },
        '4_3': { service: 'notify', cmd: 'markRead' },
        '4_4': {
          service: 'notify',
          cmd: 'syncOfflineMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_5': { service: 'notify', cmd: 'batchMarkRead' },
        '4_6': {
          service: 'notify',
          cmd: 'syncOfflineSysMsgs',
          response: [{ type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' }],
        },
        '4_9': {
          service: 'notify',
          cmd: 'syncRoamingMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_12': {
          service: 'notify',
          cmd: 'syncMsgReceipts',
          response: [
            { type: 'PropertyArray', name: 'msgReceipts', entity: 'msgReceipt' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '4_13': {
          service: 'notify',
          cmd: 'syncDonnop',
          response: [{ type: 'Property', name: 'donnop' }, { type: 'Number', name: 'timetag' }],
        },
        '4_14': {
          service: 'notify',
          cmd: 'syncSessionAck',
          response: [
            { type: 'StrLongMap', name: 'p2p' },
            { type: 'LongLongMap', name: 'team' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '4_15': {
          service: 'notify',
          cmd: 'syncRobots',
          response: [{ type: 'PropertyArray', name: 'robots', entity: 'robot' }],
        },
        '4_16': {
          service: 'notify',
          cmd: 'syncBroadcastMsgs',
          response: [{ type: 'PropertyArray', name: 'broadcastMsgs', entity: 'broadcastMsg' }],
        },
        '4_100': {
          service: 'notify',
          cmd: 'syncOfflineFilterMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_101': {
          service: 'notify',
          cmd: 'syncOfflineFilterSysMsgs',
          response: [{ type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' }],
        },
        '5_1': {
          service: 'sync',
          cmd: 'syncDone',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '5_2': {
          service: 'sync',
          cmd: 'syncTeamMembersDone',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '7_1': {
          service: 'msg',
          cmd: 'sendMsg',
          response: [{ type: 'Property', name: 'msg' }],
          trivialErrorCodes: [7101],
        },
        '7_2': { service: 'msg', cmd: 'msg', response: [{ type: 'Property', name: 'msg' }] },
        '7_3': {
          service: 'msg',
          cmd: 'sysMsg',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '7_6': {
          service: 'msg',
          cmd: 'getHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '7_7': { service: 'msg', cmd: 'sendCustomSysMsg', trivialErrorCodes: [7101] },
        '7_8': {
          service: 'msg',
          cmd: 'searchHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '7_9': { service: 'msg', cmd: 'deleteSessions' },
        '7_10': {
          service: 'msg',
          cmd: 'getSessions',
          response: [{ type: 'StrArray', name: 'sessions' }],
        },
        '7_101': {
          service: 'msg',
          cmd: 'syncSendMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '7_11': {
          service: 'msg',
          cmd: 'sendMsgReceipt',
          response: [{ type: 'Property', name: 'msgReceipt' }],
        },
        '7_12': {
          service: 'msg',
          cmd: 'msgReceipt',
          response: [{ type: 'Property', name: 'msgReceipt' }],
        },
        '7_13': { service: 'msg', cmd: 'onDeleteMsg' },
        '7_14': {
          service: 'msg',
          cmd: 'onMsgDeleted',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '7_15': {
          service: 'msg',
          cmd: 'onDeleteMsgOfflineRoaming',
          response: [
            { type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' },
            { type: 'Number', name: 'timetag' },
            { type: 'Number', name: 'type' },
          ],
        },
        '7_16': { service: 'msg', cmd: 'onMarkSessionAck' },
        '7_17': {
          service: 'msg',
          cmd: 'broadcastMsg',
          response: [{ type: 'Property', name: 'broadcastMsg' }],
        },
        '7_116': {
          service: 'msg',
          cmd: 'syncMarkSessionAck',
          response: [
            { type: 'Number', name: 'scene' },
            { type: 'String', name: 'to' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_1': {
          service: 'team',
          cmd: 'createTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_2': {
          service: 'team',
          cmd: 'sendTeamMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '8_3': { service: 'team', cmd: 'teamMsg', response: [{ type: 'Property', name: 'msg' }] },
        '8_4': {
          service: 'team',
          cmd: 'teamMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_5': { service: 'team', cmd: 'addTeamMembers' },
        '8_6': { service: 'team', cmd: 'removeTeamMembers' },
        '8_7': {
          service: 'team',
          cmd: 'updateTeam',
          response: [{ type: 'Number', name: 'id' }, { type: 'Number', name: 'time' }],
        },
        '8_8': { service: 'team', cmd: 'leaveTeam' },
        '8_9': {
          service: 'team',
          cmd: 'getTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_10': {
          service: 'team',
          cmd: 'getTeams',
          response: [
            { type: 'PropertyArray', name: 'teams', entity: 'team' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_11': {
          service: 'team',
          cmd: 'getTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'members', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_12': { service: 'team', cmd: 'dismissTeam' },
        '8_13': {
          service: 'team',
          cmd: 'applyTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_14': { service: 'team', cmd: 'passTeamApply' },
        '8_15': { service: 'team', cmd: 'rejectTeamApply' },
        '8_16': { service: 'team', cmd: 'addTeamManagers' },
        '8_17': { service: 'team', cmd: 'removeTeamManagers' },
        '8_18': { service: 'team', cmd: 'transferTeam' },
        '8_19': { service: 'team', cmd: 'updateInfoInTeam' },
        '8_20': { service: 'team', cmd: 'updateNickInTeam' },
        '8_21': {
          service: 'team',
          cmd: 'acceptTeamInvite',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_22': { service: 'team', cmd: 'rejectTeamInvite' },
        '8_23': {
          service: 'team',
          cmd: 'getTeamHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_24': {
          service: 'team',
          cmd: 'searchTeamHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_25': { service: 'team', cmd: 'updateMuteStateInTeam' },
        '8_26': {
          service: 'team',
          cmd: 'getMyTeamMembers',
          response: [{ type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' }],
        },
        '8_27': {
          service: 'team',
          cmd: 'getMutedTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' },
          ],
        },
        '8_28': {
          service: 'team',
          cmd: 'sendTeamMsgReceipt',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_29': {
          service: 'team',
          cmd: 'getTeamMsgReads',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_30': {
          service: 'team',
          cmd: 'getTeamMsgReadAccounts',
          response: [
            { type: 'String', name: 'idClient' },
            { type: 'StrArray', name: 'readAccounts' },
            { type: 'StrArray', name: 'unreadAccounts' },
          ],
        },
        '8_31': {
          service: 'team',
          cmd: 'notifyTeamMsgReads',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_32': { service: 'team', cmd: 'muteTeamAll', response: [] },
        '8_126': {
          service: 'team',
          cmd: 'syncMyTeamMembers',
          response: [
            { type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_109': {
          service: 'team',
          cmd: 'syncTeams',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'PropertyArray', name: 'teams', entity: 'team' },
          ],
        },
        '8_111': {
          service: 'team',
          cmd: 'syncTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'members', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_101': {
          service: 'team',
          cmd: 'syncCreateTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_102': {
          service: 'team',
          cmd: 'syncSendTeamMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '8_119': {
          service: 'team',
          cmd: 'syncUpdateTeamMember',
          response: [{ type: 'Property', name: 'teamMember' }],
        },
        '12_1': { service: 'friend', cmd: 'friendRequest' },
        '12_101': {
          service: 'friend',
          cmd: 'syncFriendRequest',
          response: [
            { type: 'String', name: 'account' },
            { type: 'Number', name: 'type' },
            { type: 'String', name: 'ps' },
          ],
        },
        '12_2': { service: 'friend', cmd: 'deleteFriend' },
        '12_102': {
          service: 'friend',
          cmd: 'syncDeleteFriend',
          response: [{ type: 'String', name: 'account' }],
        },
        '12_3': { service: 'friend', cmd: 'updateFriend' },
        '12_103': {
          service: 'friend',
          cmd: 'syncUpdateFriend',
          response: [{ type: 'Property', name: 'friend' }],
        },
        '12_4': {
          service: 'friend',
          cmd: 'getFriends',
          response: [
            { type: 'PropertyArray', name: 'friends', entity: 'friend' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '12_5': {
          service: 'friend',
          cmd: 'syncFriends',
          response: [
            { type: 'PropertyArray', name: 'friends', entity: 'friend' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '12_6': {
          service: 'friend',
          cmd: 'syncFriendUsers',
          response: [
            { type: 'PropertyArray', name: 'users', entity: 'user' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '13_1': {
          service: 'chatroom',
          cmd: 'getChatroomAddress',
          response: [{ type: 'StrArray', name: 'address' }],
        },
        '14_1': {
          service: 'eventService',
          cmd: 'publishEvent',
          response: [{ type: 'Property', name: 'msgEvent' }],
        },
        '14_2': {
          service: 'eventService',
          cmd: 'pushEvent',
          response: [{ type: 'Property', name: 'msgEvent' }],
        },
        '14_3': {
          service: 'eventService',
          cmd: 'subscribeEvent',
          response: [{ type: 'StrArray', name: 'accounts' }],
        },
        '14_4': {
          service: 'eventService',
          cmd: 'unSubscribeEventsByAccounts',
          response: [{ type: 'StrArray', name: 'accounts' }],
        },
        '14_5': { service: 'eventService', cmd: 'unSubscribeEventsByType' },
        '14_6': {
          service: 'eventService',
          cmd: 'querySubscribeEventsByAccounts',
          response: [
            { type: 'PropertyArray', name: 'msgEventSubscribes', entity: 'msgEventSubscribe' },
          ],
        },
        '14_7': {
          service: 'eventService',
          cmd: 'querySubscribeEventsByType',
          response: [
            { type: 'PropertyArray', name: 'msgEventSubscribes', entity: 'msgEventSubscribe' },
          ],
        },
        '14_9': {
          service: 'eventService',
          cmd: 'pushEvents',
          response: [{ type: 'PropertyArray', name: 'msgEvents', entity: 'msgEvent' }],
        },
        '101_1': {
          service: 'filter',
          cmd: 'sendFilterMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '101_2': {
          service: 'filter',
          cmd: 'filterMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '101_3': {
          service: 'filter',
          cmd: 'filterSysMsg',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '101_7': { service: 'filter', cmd: 'sendFilterCustomSysMsg' },
      });
      e.exports = { idMap: i, cmdConfig: s, packetConfig: a };
    },
    ,
    function(e, t) {
      function n(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (e.exports = n),
        (n.prototype.duration = function() {
          let e = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            const t = Math.random();

            const n = Math.floor(t * this.jitter * e);
            e = (1 & Math.floor(10 * t)) == 0 ? e - n : e + n;
          }
          return 0 | Math.min(e, this.max);
        }),
        (n.prototype.reset = function() {
          this.attempts = 0;
        }),
        (n.prototype.setMin = function(e) {
          this.ms = e;
        }),
        (n.prototype.setMax = function(e) {
          this.max = e;
        }),
        (n.prototype.setJitter = function(e) {
          this.jitter = e;
        });
    },
    function(e, t, n) {
      var r = {
        set(e, t, n) {
          (r[e] = t), n && (n.support = t);
        },
      };
      e.exports = r;
    },
    function(e, t, n) {
      n(208).polyfill(), (n(4).isBrowser = !0);
    },
    ,
    ,
    ,
    function(e, t, n) {
      const r = n(43);
      function o() {}
      o.typeMap = {
        text: 0,
        image: 1,
        audio: 2,
        video: 3,
        geo: 4,
        notification: 5,
        file: 6,
        tip: 10,
        robot: 11,
        custom: 100,
      };
      const i = (o.typeReverseMap = {
        0: 'text',
        1: 'image',
        2: 'audio',
        3: 'video',
        4: 'geo',
        5: 'notification',
        6: 'file',
        10: 'tip',
        11: 'robot',
        100: 'custom',
      });
      (o.validTypes = Object.keys(o.typeMap)),
        (o.setFlow = function(e, t) {
          let n = t === e.from;
          n && t === e.to && (n = r.deviceId === e.fromDeviceId),
            (e.flow = n ? 'out' : 'in'),
            e.type === 'robot' && e.content && e.content.msgOut && (e.flow = 'in');
        }),
        (o.getType = function(e) {
          const t = e.type;
          return i[t] || t;
        }),
        (e.exports = o);
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
    function(e, t, n) {
      const r = n(0);

      const o = r.notundef;

      const i = r.undef;
      function s(e) {
        o(e.name) && (this.name = `${e.name}`),
          o(e.announcement) && (this.announcement = `${e.announcement}`),
          o(e.broadcastUrl) && (this.broadcastUrl = `${e.broadcastUrl}`),
          o(e.custom) && (this.custom = `${e.custom}`),
          o(e.queuelevel) && (this.queuelevel = parseInt(e.queuelevel));
      }
      (s.reverse = function(e) {
        const t = r.copy(e);
        return (
          i(t.announcement) && (t.announcement = ''),
          i(t.broadcastUrl) && (t.broadcastUrl = ''),
          i(t.custom) && (t.custom = ''),
          o(t.createTime) && (t.createTime = +t.createTime),
          o(t.updateTime) && (t.updateTime = +t.updateTime),
          o(t.onlineMemberNum) && (t.onlineMemberNum = +t.onlineMemberNum),
          o(t.mute) && (t.mute = t.mute === '1'),
          t
        );
      }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(43);
      e.exports = function(e) {
        e.db && (r.db = e.db);
      };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      function o(e) {
        const t = this;

        const n = e.url || null;
        (t.level = { debug: 0, log: 1, info: 2, warn: 3, error: 4 }[e.level] || 0),
          (t.logCache = []),
          (t.logNum = 1),
          (t.timeInterval = 5e3),
          (window.onerror = function(e, n, r, o, i) {
            t.error.call(t, i);
          }),
          setInterval(() => {
            t.logCache.length > 0 && n && t.postLogs(n, t.logCache);
          }, t.timeInterval);
      }
      (o.prototype.debug = function() {
        this.level > 0 ||
          (console.debug.apply(this, arguments),
          this.cacheLogs.apply(this, ['[degbug]'].concat(arguments)));
      }),
        (o.prototype.log = function() {
          this.level > 1 ||
            (console.log.apply(this, arguments),
            this.cacheLogs.apply(this, ['[log]'].concat(arguments)));
        }),
        (o.prototype.info = function() {
          this.level > 2 ||
            (console.info.apply(this, arguments),
            this.cacheLogs.apply(this, ['[info]'].concat(arguments)));
        }),
        (o.prototype.warn = function() {
          this.level > 3 ||
            (console.warn.apply(this, arguments),
            this.cacheLogs.apply(this, ['[warn]'].concat(arguments)));
        }),
        (o.prototype.error = function() {
          this.level > 4 ||
            (console.error.apply(this, arguments),
            this.cacheLogs.apply(this, ['[error]'].concat(arguments)));
        }),
        (o.prototype.cacheLogs = function(e, t) {
          for (var n = [], o = 0; o < t.length; o++) {
            const i = t[o];
            (void 0 === i ? 'undefined' : (0, r.default)(i)) === 'object'
              ? n.push(JSON.stringify(i))
              : n.push(i);
          }
          const s = `${this.logNum++} ${e} ${n.join('; ')}`;
          this.logCache.push(s.replace('%c', ''));
        }),
        (o.prototype.postLogs = function(e, t) {
          const n = this;

          const r = new XMLHttpRequest();
          (r.onreadystatechange = function() {
            r.readyState === 4 &&
              (r.status === 200
                ? (console.info('LoggerPlugin::日志上报完成'),
                  (n.logCache = []),
                  (n.timeInterval = 5e3))
                : (n.timeInterval += 5e3));
          }),
            r.open('POST', e),
            r.setRequestHeader('Content-Type', 'plain/text;charset=utf-8'),
            (r.timeout = 360),
            r.send(t.join('\n'));
        }),
        (e.exports = o);
    },
    function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          const r = arguments[t];
          for (const o in r) n.call(r, o) && (e[o] = r[o]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    function(e, t, n) {
      const r = Function.prototype.toString;

      const o = /^\s*class\b/;

      const i = function(e) {
        try {
          const t = r.call(e);
          return o.test(t);
        } catch (e) {
          return !1;
        }
      };

      const s = Object.prototype.toString;

      const a = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
      e.exports = function(e) {
        if (!e) return !1;
        if (typeof e !== 'function' && typeof e !== 'object') return !1;
        if (typeof e === 'function' && !e.prototype) return !0;
        if (a)
          return (function(e) {
            try {
              return !i(e) && (r.call(e), !0);
            } catch (e) {
              return !1;
            }
          })(e);
        if (i(e)) return !1;
        const t = s.call(e);
        return t === '[object Function]' || t === '[object GeneratorFunction]';
      };
    },
    function(e, t, n) {
      const r = n(172);

      const o = Object.prototype.toString;

      const i = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, n) {
        if (!r(t)) throw new TypeError('iterator must be a function');
        let s;
        arguments.length >= 3 && (s = n),
          o.call(e) === '[object Array]'
            ? (function(e, t, n) {
                for (let r = 0, o = e.length; r < o; r++)
                  i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
              })(e, t, s)
            : typeof e === 'string'
              ? (function(e, t, n) {
                  for (let r = 0, o = e.length; r < o; r++)
                    n == null ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
                })(e, t, s)
              : (function(e, t, n) {
                  for (const r in e)
                    i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
                })(e, t, s);
      };
    },
    function(e, t) {
      ((t = e.exports = function(e) {
        return e.replace(/^\s*|\s*$/g, '');
      }).left = function(e) {
        return e.replace(/^\s*/, '');
      }),
        (t.right = function(e) {
          return e.replace(/\s*$/, '');
        });
    },
    function(e, t, n) {
      const r = n(174);

      const o = n(173);
      e.exports = function(e) {
        if (!e) return {};
        const t = {};
        return (
          o(r(e).split('\n'), e => {
            const n = e.indexOf(':');

            const o = r(e.slice(0, n)).toLowerCase();

            const i = r(e.slice(n + 1));
            void 0 === t[o]
              ? (t[o] = i)
              : !(function(e) {
                  return Object.prototype.toString.call(e) === '[object Array]';
                })(t[o])
                ? (t[o] = [t[o], i])
                : t[o].push(i);
          }),
          t
        );
      };
    },
    function(e, t) {
      e.exports = function(e) {
        const t = n.call(e);
        return (
          t === '[object Function]' ||
          (typeof e === 'function' && t !== '[object RegExp]') ||
          (typeof window !== 'undefined' &&
            (e === window.setTimeout ||
              e === window.alert ||
              e === window.confirm ||
              e === window.prompt))
        );
      };
      var n = Object.prototype.toString;
    },
    function(e, t, n) {
      (function(t) {
        let n;
        (n =
          typeof window !== 'undefined'
            ? window
            : void 0 !== t
              ? t
              : typeof self !== 'undefined'
                ? self
                : {}),
          (e.exports = n);
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const r = n(177);

      const o = n(176);

      const i = n(175);

      const s = n(171);
      function a(e, t, n) {
        let r = e;
        return (
          o(t) ? ((n = t), typeof e === 'string' && (r = { uri: e })) : (r = s(t, { uri: e })),
          (r.callback = n),
          r
        );
      }
      function c(e, t, n) {
        return u((t = a(e, t, n)));
      }
      function u(e) {
        if (void 0 === e.callback) throw new Error('callback argument missing');
        let t = !1;

        const n = function(n, r, o) {
          t || ((t = !0), e.callback(n, r, o));
        };
        function r(e) {
          return (
            clearTimeout(l),
            e instanceof Error || (e = new Error(`${e || 'Unknown XMLHttpRequest Error'}`)),
            (e.statusCode = 0),
            n(e, g)
          );
        }
        function o() {
          if (!a) {
            let t;
            clearTimeout(l),
              (t = e.useXDR && void 0 === u.status ? 200 : u.status === 1223 ? 204 : u.status);
            let r = g;

            let o = null;
            return (
              t !== 0
                ? ((r = {
                    body: (function() {
                      let e = void 0;
                      if (
                        ((e = u.response
                          ? u.response
                          : u.responseText ||
                            (function(e) {
                              try {
                                if (e.responseType === 'document') return e.responseXML;
                                const t =
                                  e.responseXML &&
                                  e.responseXML.documentElement.nodeName === 'parsererror';
                                if (e.responseType === '' && !t) return e.responseXML;
                              } catch (e) {}
                              return null;
                            })(u)),
                        y)
                      )
                        try {
                          e = JSON.parse(e);
                        } catch (e) {}
                      return e;
                    })(),
                    statusCode: t,
                    method: m,
                    headers: {},
                    url: p,
                    rawRequest: u,
                  }),
                  u.getAllResponseHeaders && (r.headers = i(u.getAllResponseHeaders())))
                : (o = new Error('Internal XMLHttpRequest Error')),
              n(o, r, r.body)
            );
          }
        }
        let s;

        let a;

        var u = e.xhr || null;
        u || (u = e.cors || e.useXDR ? new c.XDomainRequest() : new c.XMLHttpRequest());
        let l;

        var p = (u.url = e.uri || e.url);

        var m = (u.method = e.method || 'GET');

        let d = e.body || e.data;

        const f = (u.headers = e.headers || {});

        const h = !!e.sync;

        var y = !1;

        var g = { body: void 0, headers: {}, statusCode: 0, method: m, url: p, rawRequest: u };
        if (
          ('json' in e &&
            !1 !== e.json &&
            ((y = !0),
            f.accept || f.Accept || (f.Accept = 'application/json'),
            m !== 'GET' &&
              m !== 'HEAD' &&
              (f['content-type'] || f['Content-Type'] || (f['Content-Type'] = 'application/json'),
              (d = JSON.stringify(!0 === e.json ? d : e.json)))),
          (u.onreadystatechange = function() {
            u.readyState === 4 && setTimeout(o, 0);
          }),
          (u.onload = o),
          (u.onerror = r),
          (u.onprogress = function() {}),
          (u.onabort = function() {
            a = !0;
          }),
          (u.ontimeout = r),
          u.open(m, p, !h, e.username, e.password),
          h || (u.withCredentials = !!e.withCredentials),
          !h &&
            e.timeout > 0 &&
            (l = setTimeout(() => {
              if (!a) {
                (a = !0), u.abort('timeout');
                const e = new Error('XMLHttpRequest timeout');
                (e.code = 'ETIMEDOUT'), r(e);
              }
            }, e.timeout)),
          u.setRequestHeader)
        )
          for (s in f) f.hasOwnProperty(s) && u.setRequestHeader(s, f[s]);
        else if (
          e.headers &&
          !(function(e) {
            for (const t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          })(e.headers)
        )
          throw new Error('Headers cannot be set on an XDomainRequest object');
        return (
          'responseType' in e && (u.responseType = e.responseType),
          'beforeSend' in e && typeof e.beforeSend === 'function' && e.beforeSend(u),
          u.send(d || null),
          u
        );
      }
      (e.exports = c),
        (e.exports.default = c),
        (c.XMLHttpRequest = r.XMLHttpRequest || function() {}),
        (c.XDomainRequest =
          'withCredentials' in new c.XMLHttpRequest() ? c.XMLHttpRequest : r.XDomainRequest),
        (function(e, t) {
          for (let n = 0; n < e.length; n++) t(e[n]);
        })(['get', 'put', 'post', 'patch', 'head', 'delete'], e => {
          c[e === 'delete' ? 'del' : e] = function(t, n, r) {
            return ((n = a(t, n, r)).method = e.toUpperCase()), u(n);
          };
        });
    },
    ,
    function(e, t, n) {
      e.exports = {
        imLogin: {
          3: 'clientType',
          4: 'os',
          6: 'sdkVersion',
          8: 'appLogin',
          9: 'protocolVersion',
          10: 'pushTokenName',
          11: 'pushToken',
          13: 'deviceId',
          18: 'appKey',
          19: 'account',
          24: 'browser',
          26: 'session',
          32: 'deviceInfo',
          112: 'isReactNative',
          1000: 'token',
        },
        nosToken: { 1: 'objectName', 2: 'token', 3: 'bucket', 4: 'expireTime' },
        audioToText: { 2: 'url' },
        imageOp: {
          0: 'type',
          1: 'stripmeta',
          2: 'typeType',
          3: 'blurRadius',
          4: 'blurSigma',
          5: 'qualityQuality',
          6: 'cropX',
          7: 'cropY',
          8: 'cropWidth',
          9: 'cropHeight',
          10: 'rotateAngle',
          11: 'pixelPixel',
          12: 'thumbnailMode',
          13: 'thumbnailWidth',
          14: 'thumbnailHeight',
          15: 'thumbnailAxisX',
          16: 'thumbnailAxisY',
          17: 'thumbnailCenterX',
          18: 'thumbnailCenterY',
          19: 'thumbnailEnlarge',
          20: 'thumbnailToStatic',
          21: 'watermarkType',
          22: 'watermarkGravity',
          23: 'watermarkDissolve',
          24: 'watermarkDx',
          25: 'watermarkDy',
          26: 'watermarkImage',
          27: 'watermarkText',
          28: 'watermarkFont',
          29: 'watermarkFontSize',
          30: 'watermarkFontColor',
          31: 'interlace',
        },
        robot: {
          4: 'account',
          5: 'nick',
          6: 'avatar',
          7: 'intro',
          8: 'config',
          9: 'valid',
          10: 'createTime',
          11: 'updateTime',
          12: 'custid',
          13: 'botid',
          14: 'bindTime',
        },
        clientAntispam: { 1: 'version', 2: 'md5', 3: 'nosurl', 4: 'thesaurus' },
        transToken: { 1: 'name', 2: 'type', 3: 'transType', 4: 'size', 5: 'extra', 6: 'body' },
        transInfo: {
          1: 'docId',
          2: 'name',
          3: 'prefix',
          4: 'size',
          5: 'type',
          6: 'state',
          7: 'transType',
          8: 'transSize',
          9: 'pageCount',
          10: 'picInfo',
          11: 'extra',
          12: 'flag',
        },
        fileListParam: { 1: 'fromDocId', 2: 'limit' },
        login: {
          1: 'appKey',
          2: 'account',
          3: 'deviceId',
          5: 'chatroomId',
          8: 'appLogin',
          20: 'chatroomNick',
          21: 'chatroomAvatar',
          22: 'chatroomCustom',
          23: 'chatroomEnterCustom',
          26: 'session',
          38: 'isAnonymous',
        },
        chatroom: {
          1: 'id',
          3: 'name',
          4: 'announcement',
          5: 'broadcastUrl',
          12: 'custom',
          14: 'createTime',
          15: 'updateTime',
          16: 'queuelevel',
          100: 'creator',
          101: 'onlineMemberNum',
          102: 'mute',
        },
        msg: {
          1: 'idClient',
          2: 'type',
          3: 'attach',
          4: 'custom',
          5: 'resend',
          6: 'userUpdateTime',
          7: 'fromNick',
          8: 'fromAvatar',
          9: 'fromCustom',
          10: 'yidunEnable',
          11: 'antiSpamContent',
          12: 'skipHistory',
          13: 'body',
          14: 'antiSpamBusinessId',
          15: 'clientAntiSpam',
          16: 'antiSpamUsingYidun',
          20: 'time',
          21: 'from',
          22: 'chatroomId',
          23: 'fromClientType',
          25: 'highPriority',
        },
        chatroomMember: {
          1: 'chatroomId',
          2: 'account',
          3: 'type',
          4: 'level',
          5: 'nick',
          6: 'avatar',
          7: 'custom',
          8: 'online',
          9: 'guest',
          10: 'enterTime',
          12: 'blacked',
          13: 'gaged',
          14: 'valid',
          15: 'updateTime',
          16: 'tempMuted',
          17: 'tempMuteDuration',
        },
      };
    },
    function(e, t, n) {
      e.exports = {
        imLogin: {
          clientType: 3,
          os: 4,
          sdkVersion: 6,
          appLogin: 8,
          protocolVersion: 9,
          pushTokenName: 10,
          pushToken: 11,
          deviceId: 13,
          appKey: 18,
          account: 19,
          browser: 24,
          session: 26,
          deviceInfo: 32,
          isReactNative: 112,
          token: 1e3,
        },
        nosToken: { objectName: 1, token: 2, bucket: 3, expireTime: 4 },
        audioToText: { url: 2 },
        imageOp: {
          type: 0,
          stripmeta: 1,
          typeType: 2,
          blurRadius: 3,
          blurSigma: 4,
          qualityQuality: 5,
          cropX: 6,
          cropY: 7,
          cropWidth: 8,
          cropHeight: 9,
          rotateAngle: 10,
          pixelPixel: 11,
          thumbnailMode: 12,
          thumbnailWidth: 13,
          thumbnailHeight: 14,
          thumbnailAxisX: 15,
          thumbnailAxisY: 16,
          thumbnailCenterX: 17,
          thumbnailCenterY: 18,
          thumbnailEnlarge: 19,
          thumbnailToStatic: 20,
          watermarkType: 21,
          watermarkGravity: 22,
          watermarkDissolve: 23,
          watermarkDx: 24,
          watermarkDy: 25,
          watermarkImage: 26,
          watermarkText: 27,
          watermarkFont: 28,
          watermarkFontSize: 29,
          watermarkFontColor: 30,
          interlace: 31,
        },
        robot: {
          account: 4,
          nick: 5,
          avatar: 6,
          intro: 7,
          config: 8,
          valid: 9,
          createTime: 10,
          updateTime: 11,
          custid: 12,
          botid: 13,
          bindTime: 14,
        },
        clientAntispam: { version: 1, md5: 2, nosurl: 3, thesaurus: 4 },
        transToken: { name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6 },
        transInfo: {
          docId: 1,
          name: 2,
          prefix: 3,
          size: 4,
          type: 5,
          state: 6,
          transType: 7,
          transSize: 8,
          pageCount: 9,
          picInfo: 10,
          extra: 11,
          flag: 12,
        },
        fileListParam: { fromDocId: 1, limit: 2 },
        login: {
          appKey: 1,
          account: 2,
          deviceId: 3,
          chatroomId: 5,
          appLogin: 8,
          chatroomNick: 20,
          chatroomAvatar: 21,
          chatroomCustom: 22,
          chatroomEnterCustom: 23,
          session: 26,
          isAnonymous: 38,
        },
        chatroom: {
          id: 1,
          name: 3,
          announcement: 4,
          broadcastUrl: 5,
          custom: 12,
          createTime: 14,
          updateTime: 15,
          queuelevel: 16,
          creator: 100,
          onlineMemberNum: 101,
          mute: 102,
        },
        msg: {
          idClient: 1,
          type: 2,
          attach: 3,
          custom: 4,
          resend: 5,
          userUpdateTime: 6,
          fromNick: 7,
          fromAvatar: 8,
          fromCustom: 9,
          yidunEnable: 10,
          antiSpamContent: 11,
          skipHistory: 12,
          body: 13,
          antiSpamBusinessId: 14,
          clientAntiSpam: 15,
          antiSpamUsingYidun: 16,
          time: 20,
          from: 21,
          chatroomId: 22,
          fromClientType: 23,
          highPriority: 25,
        },
        chatroomMember: {
          chatroomId: 1,
          account: 2,
          type: 3,
          level: 4,
          nick: 5,
          avatar: 6,
          custom: 7,
          online: 8,
          guest: 9,
          enterTime: 10,
          blacked: 12,
          gaged: 13,
          valid: 14,
          updateTime: 15,
          tempMuted: 16,
          tempMuteDuration: 17,
        },
      };
    },
    function(e, t, n) {
      const r = n(0);

      const o = n(122);

      const i = r.merge({}, o.idMap, {
        chatroom: {
          id: 13,
          login: 2,
          kicked: 3,
          logout: 4,
          sendMsg: 6,
          msg: 7,
          getChatroomMembers: 8,
          getHistoryMsgs: 9,
          markChatroomMember: 11,
          closeChatroom: 12,
          getChatroom: 13,
          updateChatroom: 14,
          updateMyChatroomMemberInfo: 15,
          getChatroomMembersInfo: 16,
          kickChatroomMember: 17,
          updateChatroomMemberTempMute: 19,
          queueOffer: 20,
          queuePoll: 21,
          queueList: 22,
          peak: 23,
          queueDrop: 24,
          queueInit: 25,
        },
        user: { id: 3, syncRobot: 16 },
      });

      const s = r.merge({}, o.cmdConfig, {
        login: {
          sid: i.chatroom.id,
          cid: i.chatroom.login,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'Property', name: 'login' },
            { type: 'Property', name: 'imLogin' },
          ],
        },
        logout: { sid: i.chatroom.id, cid: i.chatroom.logout },
        sendMsg: {
          sid: i.chatroom.id,
          cid: i.chatroom.sendMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        getChatroomMembers: {
          sid: i.chatroom.id,
          cid: i.chatroom.getChatroomMembers,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'long', name: 'time' },
            { type: 'int', name: 'limit' },
          ],
        },
        getHistoryMsgs: {
          sid: i.chatroom.id,
          cid: i.chatroom.getHistoryMsgs,
          params: [
            { type: 'long', name: 'timetag' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        markChatroomMember: {
          sid: i.chatroom.id,
          cid: i.chatroom.markChatroomMember,
          params: [
            { type: 'string', name: 'account' },
            { type: 'int', name: 'type' },
            { type: 'bool', name: 'isAdd' },
            { type: 'int', name: 'level' },
            { type: 'string', name: 'custom' },
          ],
        },
        closeChatroom: {
          sid: i.chatroom.id,
          cid: i.chatroom.closeChatroom,
          params: [{ type: 'string', name: 'custom' }],
        },
        getChatroom: { sid: i.chatroom.id, cid: i.chatroom.getChatroom },
        updateChatroom: {
          sid: i.chatroom.id,
          cid: i.chatroom.updateChatroom,
          params: [
            { type: 'Property', name: 'chatroom' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
          ],
        },
        updateMyChatroomMemberInfo: {
          sid: i.chatroom.id,
          cid: i.chatroom.updateMyChatroomMemberInfo,
          params: [
            { type: 'Property', name: 'chatroomMember' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
            { type: 'bool', name: 'needSave' },
          ],
        },
        getChatroomMembersInfo: {
          sid: i.chatroom.id,
          cid: i.chatroom.getChatroomMembersInfo,
          params: [{ type: 'StrArray', name: 'accounts' }],
        },
        kickChatroomMember: {
          sid: i.chatroom.id,
          cid: i.chatroom.kickChatroomMember,
          params: [{ type: 'string', name: 'account' }, { type: 'string', name: 'custom' }],
        },
        updateChatroomMemberTempMute: {
          sid: i.chatroom.id,
          cid: i.chatroom.updateChatroomMemberTempMute,
          params: [
            { type: 'String', name: 'account' },
            { type: 'long', name: 'duration' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
          ],
        },
        queueOffer: {
          sid: i.chatroom.id,
          cid: i.chatroom.queueOffer,
          params: [
            { type: 'string', name: 'elementKey' },
            { type: 'string', name: 'elementValue' },
            { type: 'bool', name: 'transient' },
          ],
        },
        queuePoll: {
          sid: i.chatroom.id,
          cid: i.chatroom.queuePoll,
          params: [{ type: 'string', name: 'elementKey' }],
        },
        queueList: { sid: i.chatroom.id, cid: i.chatroom.queueList },
        peak: { sid: i.chatroom.id, cid: i.chatroom.peak },
        queueDrop: { sid: i.chatroom.id, cid: i.chatroom.queueDrop },
        queueInit: {
          sid: i.chatroom.id,
          cid: i.chatroom.queueInit,
          params: [{ type: 'int', name: 'limit' }],
        },
        syncRobot: {
          sid: i.user.id,
          cid: i.user.syncRobot,
          params: [{ type: 'long', name: 'timetag' }],
        },
      });

      const a = r.merge({}, o.packetConfig, {
        '4_10': { service: 'notify' },
        '4_11': { service: 'notify' },
        '3_16': {
          service: 'chatroom',
          cmd: 'syncRobot',
          response: [{ type: 'PropertyArray', name: 'robots', entity: 'robot' }],
        },
        '13_2': {
          service: 'chatroom',
          cmd: 'login',
          response: [
            { type: 'Property', name: 'chatroom' },
            { type: 'Property', name: 'chatroomMember' },
          ],
        },
        '13_3': {
          service: 'chatroom',
          cmd: 'kicked',
          response: [{ type: 'Number', name: 'reason' }, { type: 'String', name: 'custom' }],
        },
        '13_4': { service: 'chatroom', cmd: 'logout' },
        '13_6': {
          service: 'chatroom',
          cmd: 'sendMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '13_7': {
          service: 'chatroom',
          cmd: 'msg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '13_8': {
          service: 'chatroom',
          cmd: 'getChatroomMembers',
          response: [{ type: 'PropertyArray', name: 'members', entity: 'chatroomMember' }],
        },
        '13_9': {
          service: 'chatroom',
          cmd: 'getHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '13_11': {
          service: 'chatroom',
          cmd: 'markChatroomMember',
          response: [{ type: 'Property', name: 'chatroomMember' }],
        },
        '13_12': { service: 'chatroom', cmd: 'closeChatroom' },
        '13_13': {
          service: 'chatroom',
          cmd: 'getChatroom',
          response: [{ type: 'Property', name: 'chatroom' }],
        },
        '13_14': { service: 'chatroom', cmd: 'updateChatroom' },
        '13_15': { service: 'chatroom', cmd: 'updateMyChatroomMemberInfo' },
        '13_16': {
          service: 'chatroom',
          cmd: 'getChatroomMembersInfo',
          response: [{ type: 'PropertyArray', name: 'members', entity: 'chatroomMember' }],
        },
        '13_17': { service: 'chatroom', cmd: 'kickChatroomMember' },
        '13_19': { service: 'chatroom', cmd: 'updateChatroomMemberTempMute' },
        '13_20': { service: 'chatroom', cmd: 'queueOffer' },
        '13_21': {
          service: 'chatroom',
          cmd: 'queuePoll',
          response: [
            { type: 'String', name: 'elementKey' },
            { type: 'String', name: 'elementValue' },
          ],
        },
        '13_22': {
          service: 'chatroom',
          cmd: 'queueList',
          response: [{ type: 'KVArray', name: 'queueList' }],
        },
        '13_23': {
          service: 'chatroom',
          cmd: 'peak',
          response: [
            { type: 'String', name: 'elementKey' },
            { type: 'String', name: 'elementValue' },
          ],
        },
        '13_24': { service: 'chatroom', cmd: 'queueDrop' },
        '13_25': { service: 'chatroom', cmd: 'queueInit' },
      });
      e.exports = { idMap: i, cmdConfig: s, packetConfig: a };
    },
    function(e, t, n) {
      e.exports = {
        nosToken: { 1: 'objectName', 2: 'token', 3: 'bucket', 4: 'expireTime' },
        audioToText: { 2: 'url' },
        imageOp: {
          0: 'type',
          1: 'stripmeta',
          2: 'typeType',
          3: 'blurRadius',
          4: 'blurSigma',
          5: 'qualityQuality',
          6: 'cropX',
          7: 'cropY',
          8: 'cropWidth',
          9: 'cropHeight',
          10: 'rotateAngle',
          11: 'pixelPixel',
          12: 'thumbnailMode',
          13: 'thumbnailWidth',
          14: 'thumbnailHeight',
          15: 'thumbnailAxisX',
          16: 'thumbnailAxisY',
          17: 'thumbnailCenterX',
          18: 'thumbnailCenterY',
          19: 'thumbnailEnlarge',
          20: 'thumbnailToStatic',
          21: 'watermarkType',
          22: 'watermarkGravity',
          23: 'watermarkDissolve',
          24: 'watermarkDx',
          25: 'watermarkDy',
          26: 'watermarkImage',
          27: 'watermarkText',
          28: 'watermarkFont',
          29: 'watermarkFontSize',
          30: 'watermarkFontColor',
          31: 'interlace',
        },
        robot: {
          4: 'account',
          5: 'nick',
          6: 'avatar',
          7: 'intro',
          8: 'config',
          9: 'valid',
          10: 'createTime',
          11: 'updateTime',
          12: 'custid',
          13: 'botid',
          14: 'bindTime',
        },
        clientAntispam: { 1: 'version', 2: 'md5', 3: 'nosurl', 4: 'thesaurus' },
        transToken: { 1: 'name', 2: 'type', 3: 'transType', 4: 'size', 5: 'extra', 6: 'body' },
        transInfo: {
          1: 'docId',
          2: 'name',
          3: 'prefix',
          4: 'size',
          5: 'type',
          6: 'state',
          7: 'transType',
          8: 'transSize',
          9: 'pageCount',
          10: 'picInfo',
          11: 'extra',
          12: 'flag',
        },
        fileListParam: { 1: 'fromDocId', 2: 'limit' },
        login: {
          3: 'clientType',
          4: 'os',
          6: 'sdkVersion',
          8: 'appLogin',
          9: 'protocolVersion',
          10: 'pushTokenName',
          11: 'pushToken',
          13: 'deviceId',
          18: 'appKey',
          19: 'account',
          24: 'browser',
          26: 'session',
          32: 'deviceInfo',
          112: 'isReactNative',
          1000: 'token',
        },
        loginRes: {
          17: 'lastLoginDeviceId',
          102: 'connectionId',
          103: 'ip',
          104: 'port',
          106: 'country',
        },
        loginPort: {
          3: 'type',
          4: 'os',
          5: 'mac',
          13: 'deviceId',
          19: 'account',
          32: 'deviceInfo',
          102: 'connectionId',
          103: 'ip',
          109: 'time',
        },
        aosPushInfo: { 110: 'pushType', 111: 'hasTokenPreviously' },
        sync: {
          1: 'myInfo',
          2: 'offlineMsgs',
          3: 'teams',
          6: 'netcallMsgs',
          7: 'roamingMsgs',
          9: 'relations',
          11: 'friends',
          12: 'sessions',
          13: 'friendUsers',
          14: 'msgReceipts',
          15: 'myTeamMembers',
          16: 'donnop',
          17: 'deleteMsg',
          18: 'sessionAck',
          19: 'robots',
          20: 'broadcastMsgs',
          100: 'filterMsgs',
        },
        donnop: { 1: 'open' },
        team: {
          1: 'teamId',
          3: 'name',
          4: 'type',
          5: 'owner',
          6: 'level',
          7: 'selfCustom',
          8: 'valid',
          9: 'memberNum',
          10: 'memberUpdateTime',
          11: 'createTime',
          12: 'updateTime',
          13: 'validToCurrentUser',
          14: 'intro',
          15: 'announcement',
          16: 'joinMode',
          17: 'bits',
          18: 'custom',
          19: 'serverCustom',
          20: 'avatar',
          21: 'beInviteMode',
          22: 'inviteMode',
          23: 'updateTeamMode',
          24: 'updateCustomMode',
          100: 'mute',
          101: 'muteType',
        },
        teamMember: {
          1: 'teamId',
          3: 'account',
          4: 'type',
          5: 'nickInTeam',
          7: 'bits',
          8: 'active',
          9: 'valid',
          10: 'joinTime',
          11: 'updateTime',
          12: 'custom',
          13: 'mute',
        },
        msg: {
          0: 'scene',
          1: 'to',
          2: 'from',
          4: 'fromClientType',
          5: 'fromDeviceId',
          6: 'fromNick',
          7: 'time',
          8: 'type',
          9: 'body',
          10: 'attach',
          11: 'idClient',
          12: 'idServer',
          13: 'resend',
          14: 'userUpdateTime',
          15: 'custom',
          16: 'pushPayload',
          17: 'pushContent',
          18: 'apnsAccounts',
          19: 'apnsContent',
          20: 'apnsForcePush',
          21: 'yidunEnable',
          22: 'antiSpamContent',
          23: 'antiSpamBusinessId',
          24: 'clientAntiSpam',
          25: 'antiSpamUsingYidun',
          26: 'needMsgReceipt',
          100: 'isHistoryable',
          101: 'isRoamingable',
          102: 'isSyncable',
          104: 'isMuted',
          105: 'cc',
          107: 'isPushable',
          108: 'isOfflinable',
          109: 'isUnreadable',
          110: 'needPushNick',
          111: 'isReplyMsg',
          112: 'tempTeamMemberCount',
        },
        msgReceipt: { 1: 'to', 2: 'from', 7: 'time', 11: 'idClient' },
        teamMsgReceipt: {
          0: 'teamId',
          1: 'idServer',
          100: 'read',
          101: 'unread',
          102: 'idClient',
          103: 'account',
        },
        sysMsg: {
          0: 'time',
          1: 'type',
          2: 'to',
          3: 'from',
          4: 'ps',
          5: 'attach',
          6: 'idServer',
          7: 'sendToOnlineUsersOnly',
          8: 'apnsText',
          9: 'pushPayload',
          10: 'deletedIdClient',
          11: 'deletedIdServer',
          12: 'yidunEnable',
          13: 'antiSpamContent',
          14: 'deletedMsgTime',
          15: 'deletedMsgFromNick',
          16: 'opeAccount',
          105: 'cc',
          107: 'isPushable',
          109: 'isUnreadable',
          110: 'needPushNick',
        },
        broadcastMsg: { 1: 'broadcastId', 2: 'fromAccid', 3: 'fromUid', 4: 'timestamp', 5: 'body' },
        friend: {
          4: 'account',
          5: 'flag',
          6: 'beflag',
          7: 'source',
          8: 'alias',
          9: 'bits',
          10: 'custom',
          11: 'createTime',
          12: 'updateTime',
          13: 'serverex',
        },
        user: {
          1: 'account',
          3: 'nick',
          4: 'avatar',
          5: 'sign',
          6: 'gender',
          7: 'email',
          8: 'birth',
          9: 'tel',
          10: 'custom',
          12: 'createTime',
          13: 'updateTime',
        },
        specialRelation: {
          0: 'account',
          1: 'isMuted',
          2: 'isBlacked',
          3: 'createTime',
          4: 'updateTime',
        },
        msgType: {
          0: 'text',
          1: 'picture',
          2: 'audio',
          3: 'video',
          4: 'location',
          5: 'notification',
          6: 'file',
          7: 'netcall_audio',
          8: 'netcall_vedio',
          9: 'datatunnel_new',
          10: 'tips',
          11: 'robot',
          100: 'custom',
        },
        msgEvent: {
          1: 'type',
          2: 'value',
          3: 'idClient',
          4: 'custom',
          5: 'validTime',
          6: 'broadcastType',
          7: 'sync',
          8: 'validTimeType',
          9: 'durable',
          10: 'time',
          11: 'idServer',
          12: 'clientType',
          13: 'serverConfig',
          14: 'serverCustom',
          101: 'appid',
          103: 'account',
          104: 'enableMultiClient',
          106: 'consid',
        },
        msgEventSubscribe: {
          1: 'type',
          2: 'subscribeTime',
          3: 'sync',
          102: 'to',
          104: 'from',
          105: 'time',
        },
      };
    },
    function(e, t, n) {
      e.exports = {
        nosToken: { objectName: 1, token: 2, bucket: 3, expireTime: 4 },
        audioToText: { url: 2 },
        imageOp: {
          type: 0,
          stripmeta: 1,
          typeType: 2,
          blurRadius: 3,
          blurSigma: 4,
          qualityQuality: 5,
          cropX: 6,
          cropY: 7,
          cropWidth: 8,
          cropHeight: 9,
          rotateAngle: 10,
          pixelPixel: 11,
          thumbnailMode: 12,
          thumbnailWidth: 13,
          thumbnailHeight: 14,
          thumbnailAxisX: 15,
          thumbnailAxisY: 16,
          thumbnailCenterX: 17,
          thumbnailCenterY: 18,
          thumbnailEnlarge: 19,
          thumbnailToStatic: 20,
          watermarkType: 21,
          watermarkGravity: 22,
          watermarkDissolve: 23,
          watermarkDx: 24,
          watermarkDy: 25,
          watermarkImage: 26,
          watermarkText: 27,
          watermarkFont: 28,
          watermarkFontSize: 29,
          watermarkFontColor: 30,
          interlace: 31,
        },
        robot: {
          account: 4,
          nick: 5,
          avatar: 6,
          intro: 7,
          config: 8,
          valid: 9,
          createTime: 10,
          updateTime: 11,
          custid: 12,
          botid: 13,
          bindTime: 14,
        },
        clientAntispam: { version: 1, md5: 2, nosurl: 3, thesaurus: 4 },
        transToken: { name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6 },
        transInfo: {
          docId: 1,
          name: 2,
          prefix: 3,
          size: 4,
          type: 5,
          state: 6,
          transType: 7,
          transSize: 8,
          pageCount: 9,
          picInfo: 10,
          extra: 11,
          flag: 12,
        },
        fileListParam: { fromDocId: 1, limit: 2 },
        login: {
          clientType: 3,
          os: 4,
          sdkVersion: 6,
          appLogin: 8,
          protocolVersion: 9,
          pushTokenName: 10,
          pushToken: 11,
          deviceId: 13,
          appKey: 18,
          account: 19,
          browser: 24,
          session: 26,
          deviceInfo: 32,
          isReactNative: 112,
          token: 1e3,
        },
        loginRes: { lastLoginDeviceId: 17, connectionId: 102, ip: 103, port: 104, country: 106 },
        loginPort: {
          type: 3,
          os: 4,
          mac: 5,
          deviceId: 13,
          account: 19,
          deviceInfo: 32,
          connectionId: 102,
          ip: 103,
          time: 109,
        },
        aosPushInfo: { pushType: 110, hasTokenPreviously: 111 },
        sync: {
          myInfo: 1,
          offlineMsgs: 2,
          teams: 3,
          netcallMsgs: 6,
          roamingMsgs: 7,
          relations: 9,
          friends: 11,
          sessions: 12,
          friendUsers: 13,
          msgReceipts: 14,
          myTeamMembers: 15,
          donnop: 16,
          deleteMsg: 17,
          sessionAck: 18,
          robots: 19,
          broadcastMsgs: 20,
          filterMsgs: 100,
        },
        donnop: { open: 1 },
        team: {
          teamId: 1,
          name: 3,
          type: 4,
          owner: 5,
          level: 6,
          selfCustom: 7,
          valid: 8,
          memberNum: 9,
          memberUpdateTime: 10,
          createTime: 11,
          updateTime: 12,
          validToCurrentUser: 13,
          intro: 14,
          announcement: 15,
          joinMode: 16,
          bits: 17,
          custom: 18,
          serverCustom: 19,
          avatar: 20,
          beInviteMode: 21,
          inviteMode: 22,
          updateTeamMode: 23,
          updateCustomMode: 24,
          mute: 100,
          muteType: 101,
        },
        teamMember: {
          teamId: 1,
          account: 3,
          type: 4,
          nickInTeam: 5,
          bits: 7,
          active: 8,
          valid: 9,
          joinTime: 10,
          updateTime: 11,
          custom: 12,
          mute: 13,
        },
        msg: {
          scene: 0,
          to: 1,
          from: 2,
          fromClientType: 4,
          fromDeviceId: 5,
          fromNick: 6,
          time: 7,
          type: 8,
          body: 9,
          attach: 10,
          idClient: 11,
          idServer: 12,
          resend: 13,
          userUpdateTime: 14,
          custom: 15,
          pushPayload: 16,
          pushContent: 17,
          apnsAccounts: 18,
          apnsContent: 19,
          apnsForcePush: 20,
          yidunEnable: 21,
          antiSpamContent: 22,
          antiSpamBusinessId: 23,
          clientAntiSpam: 24,
          antiSpamUsingYidun: 25,
          needMsgReceipt: 26,
          isHistoryable: 100,
          isRoamingable: 101,
          isSyncable: 102,
          isMuted: 104,
          cc: 105,
          isPushable: 107,
          isOfflinable: 108,
          isUnreadable: 109,
          needPushNick: 110,
          isReplyMsg: 111,
          tempTeamMemberCount: 112,
        },
        msgReceipt: { to: 1, from: 2, time: 7, idClient: 11 },
        teamMsgReceipt: {
          teamId: 0,
          idServer: 1,
          read: 100,
          unread: 101,
          idClient: 102,
          account: 103,
        },
        sysMsg: {
          time: 0,
          type: 1,
          to: 2,
          from: 3,
          ps: 4,
          attach: 5,
          idServer: 6,
          sendToOnlineUsersOnly: 7,
          apnsText: 8,
          pushPayload: 9,
          deletedIdClient: 10,
          deletedIdServer: 11,
          yidunEnable: 12,
          antiSpamContent: 13,
          deletedMsgTime: 14,
          deletedMsgFromNick: 15,
          opeAccount: 16,
          cc: 105,
          isPushable: 107,
          isUnreadable: 109,
          needPushNick: 110,
        },
        broadcastMsg: { broadcastId: 1, fromAccid: 2, fromUid: 3, timestamp: 4, body: 5 },
        friend: {
          account: 4,
          flag: 5,
          beflag: 6,
          source: 7,
          alias: 8,
          bits: 9,
          custom: 10,
          createTime: 11,
          updateTime: 12,
          serverex: 13,
        },
        user: {
          account: 1,
          nick: 3,
          avatar: 4,
          sign: 5,
          gender: 6,
          email: 7,
          birth: 8,
          tel: 9,
          custom: 10,
          createTime: 12,
          updateTime: 13,
        },
        specialRelation: { account: 0, isMuted: 1, isBlacked: 2, createTime: 3, updateTime: 4 },
        msgType: {
          text: 0,
          picture: 1,
          audio: 2,
          video: 3,
          location: 4,
          notification: 5,
          file: 6,
          netcall_audio: 7,
          netcall_vedio: 8,
          datatunnel_new: 9,
          tips: 10,
          robot: 11,
          custom: 100,
        },
        msgEvent: {
          type: 1,
          value: 2,
          idClient: 3,
          custom: 4,
          validTime: 5,
          broadcastType: 6,
          sync: 7,
          validTimeType: 8,
          durable: 9,
          time: 10,
          idServer: 11,
          clientType: 12,
          serverConfig: 13,
          serverCustom: 14,
          appid: 101,
          account: 103,
          enableMultiClient: 104,
          consid: 106,
        },
        msgEventSubscribe: { type: 1, subscribeTime: 2, sync: 3, to: 102, from: 104, time: 105 },
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const o = n(124);
      r.processMisc = function(e) {
        switch (e.cmd) {
          case 'getSimpleNosToken':
            e.error || (e.obj = e.content.nosTokens[0]);
            break;
          case 'getNosToken':
            e.error || (e.obj = e.content.nosToken);
            break;
          case 'notifyUploadLog':
            e.error || this.emitAPI({ type: 'notifyUploadLog' });
            break;
          case 'audioToText':
            e.error || (e.obj.text = e.content.text);
            break;
          case 'processImage':
            (e.obj.imageOps = o.reverseImageOps(e.obj.imageOps)),
              e.error || (e.obj = { url: e.content.url });
            break;
          case 'getNosTokenTrans':
            e.error || (e.obj = { nosToken: e.content.nosToken, docId: e.content.docId });
            break;
          case 'notifyTransLog':
            e.error || this.emitAPI({ type: 'notifyTransLog', obj: e.content.transInfo });
            break;
          case 'fetchFile':
          case 'fetchFileList':
          case 'removeFile':
            e.error || (e.obj = e.content);
        }
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const o = n(4);
      (r.processLink = function(e) {
        e.cmd;
      }),
        (r.startHeartbeat = function() {
          const e = this;
          e.stopHeartbeat(),
            (e.heartbeatTimer = setTimeout(() => {
              e.sendCmd('heartbeat', null, e.onHeartbeat.bind(e));
            }, o.heartbeatInterval));
        }),
        (r.stopHeartbeat = function() {
          this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null));
        }),
        (r.onHeartbeat = function(e, t) {
          e
            ? ((e.callFunc = 'link::onHeartbeat'),
              this.api.reportLogs({ event: 'ping_timeout' }),
              this.onCustomError('heartbeat error', 'HEARTBEAT_ERROR', e))
            : this.startHeartbeat();
        }),
        (r.heartbeat = function() {});
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(67));
      const o = n(62).fn;

      const i = n(23);

      const s = n(15);

      const a = n(105);

      const c = n(43);

      const u = n(4);

      const l = n(0);

      const p = l.notundef;
      (o.login = function() {
        const e = this;
        Promise.resolve()
          .then(() => {
            return e.assembleLogin();
          })
          .then(t => {
            e.sendCmd('login', (0, r.default)({}, t), e.onLogin.bind(e));
          }),
          (e.autoconnect = !1);
      }),
        (o.genSessionKey = (function() {
          const e = {};
          return function() {
            const t = this.name;
            return (e[t] = e[t] || l.guid());
          };
        })()),
        (o.assembleIMLogin = function() {
          const e = this.options;

          const t = e.account;

          const n = this.autoconnect ? 0 : 1;
          return (
            (this.sdkSession = this.genSessionKey()),
            {
              appLogin: n,
              appKey: e.appKey,
              account: t,
              token: e.token,
              sdkVersion: u.info.sdkVersion,
              protocolVersion: u.info.protocolVersion,
              os: s.os.toString(),
              browser: `${s.name} ${s.version}`,
              clientType: u.CLIENTTYPE || 16,
              session: this.sdkSession,
              deviceId: c.deviceId,
              isReactNative: u.isRN ? 1 : 0,
            }
          );
        }),
        (o.onLogin = function(e, t) {
          (this.loginResult = t),
            e ? this.onAuthError(e, 'link::onLogin') : (this.startHeartbeat(), this.afterLogin(t));
        }),
        (o.afterLogin = l.emptyFunc),
        (o.notifyLogin = function() {
          const e = this.loginResult;
          this.logger.info('link::notifyLogin: on connect', e), this.options.onconnect(e);
        }),
        (o.logout = function() {
          let e = 'done disconnect';
          if (this.doLogout)
            return (
              (this.doLogout = !1),
              (e = 'done logout'),
              void this.onAuthError(new i(e, 'logout'), 'link::logout')
            );
          if (this.isConnected()) {
            const t = new i(e, 'logout');
            this.onAuthError(t, 'link::logout');
          }
        }),
        (o.onKicked = function(e) {
          const t = e.content;

          const n = t.from;

          const r = t.reason;

          const o = t.custom;

          const s = {
            reason: this.kickedReasons[r] || 'unknown',
            message: this.kickedMessages[r] || '未知原因',
          };
          if (
            (p(n) && (s.from = a.reverseType(n)),
            p(o) && (s.custom = o),
            this.shouldNotifyKicked(s))
          ) {
            const c = new i('被踢了', 'kicked');
            l.merge(c, s), this.onAuthError(c, 'link::onKicked');
          } else
            this.logger.warn('link::onKicked: silentlyKick'),
              (this.shouldReconnect = !0),
              (this.hasNotifyDisconnected = !0),
              this.disconnectSocket();
        }),
        (o.shouldNotifyKicked = function(e) {
          return e.reason !== 'silentlyKick';
        }),
        (o.onAuthError = function(e, t) {
          (this.shouldReconnect = !1),
            ((e = e || i.newConnectionError({ callFunc: t })).callFunc = e.callFunc || t || null),
            this.markAllCallbackInvalid(e),
            this.notifyDisconnect(e);
        });
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get() {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const o = n(23);

      const i = n(148);

      const s = n(123);

      const a = n(4);

      const c = n(0);
      (r.initConnect = function() {
        (this.socket = null),
          (this.retryCount = 0),
          (this.connecting = !1),
          (this.shouldReconnect = !0),
          (this.hasNotifyDisconnected = !1),
          (this.doLogout = !1);
      }),
        (r.resetConnect = function() {
          const e = this.options;
          c.notundef(e.needReconnect)
            ? (c.verifyParamType('needReconnect', e.needReconnect, 'boolean', 'link::resetConnect'),
              (this.needReconnect = e.needReconnect))
            : (this.needReconnect = !0),
            this.logger.log(`link::resetConnect: needReconnect ${this.needReconnect}`),
            c.notundef(e.reconnectionAttempts) &&
              c.verifyParamType(
                'reconnectionAttempts',
                e.reconnectionAttempts,
                'number',
                'link::resetConnect'
              ),
            (this.reconnectionAttempts =
              typeof e.reconnectionAttempts === 'number' ? e.reconnectionAttempts : 1 / 0),
            (this.backoff = new i({
              min: a.reconnectionDelay,
              max: a.reconnectionDelayMax,
              jitter: a.reconnectionJitter,
            }));
        }),
        (r.connect = function() {
          if (this.isConnected()) this.logger.warn('link::connect: already connected');
          else if (this.connecting) this.logger.warn('link::connect: already connecting');
          else if (((this.connecting = !0), (this.hasNotifyDisconnected = !1), this.socket))
            this.logger.info('link::connect: try connecting...'), this.socket.socket.connect();
          else {
            const e = this.getNextSocketUrl();
            e ? this.connectToUrl(e) : this.refreshSocketUrl();
          }
        }),
        (r.getNextSocketUrl = function() {
          return this.socketUrls.shift();
        }),
        (r.isConnected = function() {
          return !!this.socket && !!this.socket.socket && this.socket.socket.connected;
        }),
        (r.connectToUrl = function(e) {
          const t = this;
          if ((t.logger.log(`link::connectToUrl: ${e}`), typeof window === 'undefined')) {
            const n = c.getGlobal();

            const r = e.split(':');
            n.location || (n.location = { protocol: r[0], hostname: r[1].slice(2), port: r[2] }),
              (this.options.transports = ['websocket']);
          }
          const o = this.options.transports || ['websocket', 'xhr-polling'];
          (t.socket = s.connect(
            e,
            {
              transports: o,
              reconnect: !1,
              'force new connection': !0,
              'connect timeout': a.connectTimeout,
            }
          )),
            t.logger.info(`link::connectToUrl: socket url: ${e}, transports: ${JSON.stringify(o)}`),
            t.socket.on('connect', t.onConnect.bind(t)),
            t.socket.on('handshake_failed', t.onHandshakeFailed.bind(t)),
            t.socket.on('connect_failed', t.onConnectFailed.bind(t)),
            t.socket.on('error', t.onError.bind(t)),
            t.socket.on('message', t.onMessage.bind(t)),
            t.socket.on('disconnect', n => {
              t.logger.warn(`link::connectToUrl: socket url: ${e}, disconnected`),
                t.doLogout ? t.logout() : t.onDisconnect(!0, 'link::socketDisconnect');
            });
        }),
        (r.disconnect = function(e) {
          const t = this;
          function n(n) {
            t.logger.info('link::disconnect: socket finally closed, ', n),
              clearTimeout(t.disconnectCallbackTimer),
              e(n);
          }
          e instanceof Function || (e = function() {}),
            clearTimeout(t.connectTimer),
            (t.disconnectCallbackTimer = setTimeout(() => {
              e.call(t, 'mark disconnected due to timeout');
            }, 1e4)),
            t.socket && t.socket.socket && t.socket.socket.transport
              ? (t.socket.socket.transport.onDisconnectDone = function(e) {
                  n(e);
                })
              : n(null),
            t.isConnected()
              ? (t.logger.log('link::disconnect: start disconnecting'), t.logout())
              : t.connecting
                ? (t.logger.log('link::disconnect: abort connecting'), t.disconnectSocket())
                : (t.logger.log('link::disconnect: start otherwise'),
                  (t.connecting = !1),
                  (t.shouldReconnect = !1),
                  (t.needReconnect = !1),
                  t.options.ondisconnect({
                    callFunc: 'link::disconnect',
                    message: 'manually disconnect status',
                  }));
        }),
        (r.onConnect = function() {
          this.backoff && this.backoff.reset(),
            (this.reconnectStatus = this.retryCount > 0 ? 1 : 0),
            (this.retryCount = 0),
            (this.connecting = !1),
            (this.shouldReconnect = !0),
            (this.hasNotifyDisconnected = !1),
            this.logger.log('link::onConnect: socket onconnected, start login'),
            this.login(),
            this.api.reportLogs({ event: 'ws_connected' });
        }),
        (r.onHandshakeFailed = function() {
          this.api.reportLogs({ event: 'ws_handshake_failed' }),
            this.onDisconnect(!1, 'link::onHandshakeFailed');
        }),
        (r.onConnectFailed = function() {
          this.api.reportLogs({ event: 'ws_connect_failed' }),
            this.onDisconnect(!1, 'link::onConnectFailed');
        }),
        (r.onError = function() {
          const e = arguments[0];
          e &&
            (this.api.reportLogs({ event: 'connect_timeout' }),
            this.onMiscError('连接错误', new o(e, 'LINK_ERROR', { callFunc: 'link::onError' }))),
            (this.connecting = !1);
        }),
        (r.onDisconnect = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          (this.connected = e),
            (this.connecting = !1),
            this.markAllCallbackInvalid(o.newNetworkError({ callFunc: t })),
            this.stopHeartbeat(),
            this.reconnect();
        }),
        (r.willReconnect = function() {
          return (
            this.shouldReconnect &&
            this.needReconnect &&
            this.retryCount < this.reconnectionAttempts
          );
        }),
        (r.reconnect = function() {
          const e = this;
          if (e.willReconnect())
            if (
              e.socket &&
              e.socket.socket &&
              e.socket.socket.transport &&
              e.socket.socket.transport.websocket
            ) {
              e.logger.info('link::reconnect: on socket closed');
              try {
                e.socket.socket.transport.websocket.close();
              } catch (t) {
                e.logger.warn('link::reconnect: force disconnect error:', t);
              }
              e.socket.socket.transport.onConnectionOver = function() {
                e.doReconnect();
              };
            } else e.logger.info('link::reconnect: on socket timeout'), e.doReconnect();
          else e.notifyDisconnect();
        }),
        (r.doReconnect = function() {
          const e = this;
          (e.socket = null), e.connected && (e.autoconnect = !0), e.retryCount++, (e.appLogin = 1);
          const t = e.backoff.duration();
          e.logger.info(`link::reconnect: will retry after ${t}ms, retryCount ${e.retryCount}`),
            e.options.onwillreconnect({ retryCount: e.retryCount, duration: t }),
            (e.connectTimer = setTimeout(() => {
              clearTimeout(e.connectTimer), e.connect();
            }, t));
        }),
        (r.notifyConnectError = function(e) {
          const t = o.newConnectError({ message: e, callFunc: 'link::notifyConnectError' });
          this.logger.error('link::notifyConnectError:', t), this.options.onerror(t);
        }),
        (r.notifyDisconnect = function(e) {
          const t = this;
          t.hasNotifyDisconnected ||
            ((t.hasNotifyDisconnected = !0),
            t.disconnectSocket(),
            ((e = e || new o()).retryCount = t.retryCount),
            (e.willReconnect = t.willReconnect()),
            t.backoff && t.backoff.reset(),
            (t.retryCount = 0),
            t.socket &&
            t.socket.socket &&
            t.socket.socket.transport &&
            t.socket.socket.transport.websocket
              ? (t.logger.info('link::notifyDisconnect: ondisconnected', e),
                (t.socket.socket.transport.onConnectionOver = function() {
                  (t.socket = null), t.options.ondisconnect(e);
                }))
              : (t.logger.info('link::notifyDisconnect: ondisconnected/no transport ws', e),
                t.options.ondisconnect(e)));
        }),
        (r.disconnectSocket = function() {
          if (this.isConnected() || this.connecting)
            try {
              (this.connecting = !1),
                (this.shouldReconnect = !1),
                (this.needReconnect = !1),
                this.socket.disconnect();
            } catch (e) {
              this.logger.info('link::disconnectSocket: disconnect failed, error ', e);
            }
        });
    },
    function(e, t, n) {
      const r = n(46).fn;

      const o = n(0);

      const i = n(59);

      const s = n(4);

      let a = n(15);
      ((a = a || {}).name = a.name || ''),
        (a.version = a.version || ''),
        (r.reportLogs = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = this;

          const n = t.options;

          const r = s.ntServerAddress;
          if (r) {
            const c = s.info;
            e = o.merge(e, {
              appkey: n.appKey,
              uid: n.account,
              os: 'web',
              session: t.protocol.sdkSession || '',
              ver: c.sdkVersion,
              type: t.subType,
              platform: `${a.name.toLowerCase()}${a.version.replace(/(\.\d+)+$/, '')}`,
            });
            let u = r + o.genUrlSep(r);

            const l = [];
            for (const p in e) l.push(`${p}=${e[p]}`);
            (u += l.join('&')),
              i(u, {
                proxyUrl: `${o.url2origin(u)}/lbs/res/cors/nej_proxy_frame.html`,
                timeout: s.xhrTimeout,
                onload() {},
                onerror(e) {
                  t.logger.info('report::ajax report error', e);
                },
              });
          }
        });
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const o = n(0);

      const i = n(46).fn;
      function s(e, t, n, r) {
        let o = !1;

        let i = '';
        if (
          (n === 1
            ? e.indexOf(t) >= 0 && ((o = !0), (i = t))
            : n === 2 && (i = new RegExp(t, 'g')).test(e) && (o = !0),
          o && i !== '')
        )
          switch (r) {
            case 1:
              return e.replace(i, '**');
            case 2:
              return { code: 2 };
            case 3:
              return { code: 3 };
          }
        return e;
      }
      function a(e, t) {
        for (var n = t.match, o = t.operate, i = e, a = 0; a < t.keys.length; a++) {
          const c = t.keys[a];

          const u = c.match || n;

          const l = c.operate || o;
          try {
            if ((void 0 === (i = s(i, c.key, u, l)) ? 'undefined' : (0, r.default)(i)) === 'object')
              return i;
          } catch (e) {
            this.logger.warn('misc::filterContent: js cannot parse this regexp ', e);
          }
        }
        return i;
      }
      (i.uploadSdkLogUrl = function(e) {
        return (
          o.verifyOptions(e, 'url', 'misc::uploadSdkLogUrl'),
          this.cbAndSendCmd('uploadSdkLogUrl', e)
        );
      }),
        (i.getClientAntispamLexicon = function(e) {
          const t = this;

          let n = (e = e || {}).done;
          n instanceof Function || (n = function() {}), (e = { clientAntispam: { version: 0 } });
          const r = this;
          return this.protocol.sendCmd('getClientAntispam', e, (e, o, i) => {
            e
              ? (r.protocol.logger.error('misc::getClientAntispamLexicon:', e), n.call(t, e, {}))
              : (n.call(t, null, i), (r.antispamLexicon = i.clientAntispam || {}));
          });
        }),
        (i.filterClientAntispam = function(e) {
          const t = e.content;

          let n = e.antispamLexicon;
          if (!t) return { code: 404, errmsg: '待反垃圾文本content不存在' };
          n = n || this.antispamLexicon || {};
          let o = this.antispamLexicon && this.antispamLexicon.thesaurus;
          if (!o) return { code: 404, errmsg: '没有反垃圾词库或者词库格式不合法' };
          try {
            o = JSON.parse(o).thesaurus;
          } catch (e) {
            return (
              this.protocol.logger.error('misc::filterClientAntispam: parse thesaurus error'),
              { code: 500, errmsg: '反垃圾词库格式不合法' }
            );
          }
          for (var i = t, s = 0; s < o.length; s++)
            if (
              (void 0 === (i = a.call(this, i, o[s])) ? 'undefined' : (0, r.default)(i)) ===
              'object'
            ) {
              if (i.code === 2)
                return { code: 200, type: 2, errmsg: '建议拒绝发送', content: t, result: '' };
              if (i.code === 3)
                return {
                  code: 200,
                  type: 3,
                  errmsg: '建议服务器处理反垃圾，发消息带上字段clientAntiSpam',
                  content: t,
                  result: t,
                };
            }
          return i === t
            ? { code: 200, type: 0, errmsg: '', content: t, result: i }
            : { code: 200, type: 1, errmsg: '已对特殊字符做了过滤', content: t, result: i };
        });
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));

      const o = n(71);
      const i = n(0);

      const s = n(46).fn;
      (s.viewImageSync = function(e) {
        const t = this.options;
        i.verifyOptions(e, 'url', 'nos::viewImageSync');
        const n = e.url;

        const s = (0, o.url2object)(n);

        const a = s.protocol;

        const c = s.hostname;

        const u = s.path;

        const l = s.query;
        if (
          (typeof e.strip === 'boolean' && (l.stripmeta = e.strip ? 1 : 0),
          typeof e.quality === 'number' &&
            (i.verifyParamMin('quality', e.quality, 0, 'nos::viewImageSync'),
            i.verifyParamMax('quality', e.quality, 100, 'nos::viewImageSync'),
            (l.quality = Math.round(e.quality))),
          typeof e.interlace === 'boolean' && (l.interlace = e.interlace ? 1 : 0),
          typeof e.rotate === 'number' && (l.rotate = Math.round(e.rotate)),
          (0, r.default)(e.thumbnail) === 'object')
        ) {
          let p = e.thumbnail.mode || 'crop';

          const m = e.thumbnail.width;

          const d = e.thumbnail.height;
          if (m >= 0 && d >= 0 && m < 4096 && d < 4096 && (m > 0 || d > 0)) {
            switch (p) {
              case 'crop':
                p = 'y';
                break;
              case 'contain':
                p = 'x';
                break;
              case 'cover':
                p = 'z';
                break;
              default:
                p = 'x';
            }
            l.thumbnail = `${m}${p}${d}`;
          }
        }
        if (t.downloadUrl) {
          const f = (0, o.url2object)(e.url);

          let h = t.downloadUrl;

          const y = f.path;

          const g = y.indexOf('/');
          if (g !== -1) {
            const v = y.substring(0, g);

            const b = y.substring(g + 1);
            h = h.replace('{bucket}', v).replace('{object}', b);
          }
          const k = (0, o.url2object)(h);
          return (0, o.object2url)({
            protocol: k.protocol,
            hostname: k.hostname,
            path: k.path,
            query: i.merge(k.query, l),
          });
        }
        return (0, o.object2url)({ protocol: a, hostname: c, path: u, query: l });
      }),
        (s.viewImageStripMeta = function(e) {
          i.verifyOptions(e, 'url strip', 'nos::viewImageStripMeta'),
            i.verifyParamType('strip', e.strip, 'boolean', 'nos::viewImageStripMeta');
          const t = `stripmeta=${e.strip ? 1 : 0}`;

          const n = (0, o.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (s.viewImageQuality = function(e) {
          i.verifyOptions(e, 'url quality', 'nos::viewImageQuality'),
            i.verifyParamType('quality', e.quality, 'number', 'nos::viewImageQuality'),
            i.verifyParamMin('quality', e.quality, 0, 'nos::viewImageQuality'),
            i.verifyParamMax('quality', e.quality, 100, 'nos::viewImageQuality');
          const t = `quality=${Math.round(e.quality)}`;

          const n = (0, o.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (s.viewImageInterlace = function(e) {
          i.verifyOptions(e, 'url', 'nos::viewImageInterlace');
          const t = (0, o.genUrlSep)(e.url);
          return `${e.url + t}interlace=1`;
        }),
        (s.viewImageRotate = function(e) {
          for (
            i.verifyOptions(e, 'url angle', 'nos::viewImageRotate'),
              i.verifyParamType('angle', e.angle, 'number', 'nos::viewImageRotate');
            e.angle < 0;

          )
            e.angle += 360;
          e.angle %= 360;
          const t = `rotate=${Math.round(e.angle)}`;

          const n = (0, o.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (s.viewImageBlur = function(e) {
          i.verifyOptions(e, 'url radius sigma', 'nos::viewImageBlur'),
            i.verifyParamType('radius', e.radius, 'number', 'nos::viewImageBlur'),
            i.verifyParamMin('radius', e.radius, 1, 'nos::viewImageBlur'),
            i.verifyParamMax('radius', e.radius, 50, 'nos::viewImageBlur'),
            i.verifyParamType('sigma', e.sigma, 'number', 'nos::viewImageBlur'),
            i.verifyParamMin('sigma', e.sigma, 0, 'nos::viewImageBlur');
          const t = `blur=${Math.round(e.radius)}x${Math.round(e.sigma)}`;

          const n = (0, o.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (s.viewImageCrop = function(e) {
          i.verifyOptions(e, 'url x y width height', 'nos::viewImageCrop'),
            i.verifyParamType('x', e.x, 'number', 'nos::viewImageCrop'),
            i.verifyParamMin('x', e.x, 0, 'nos::viewImageCrop'),
            i.verifyParamType('y', e.y, 'number', 'nos::viewImageCrop'),
            i.verifyParamMin('y', e.y, 0, 'nos::viewImageCrop'),
            i.verifyParamType('width', e.width, 'number', 'nos::viewImageCrop'),
            i.verifyParamMin('width', e.width, 0, 'nos::viewImageCrop'),
            i.verifyParamType('height', e.height, 'number', 'nos::viewImageCrop'),
            i.verifyParamMin('height', e.height, 0, 'nos::viewImageCrop');
          const t = `crop=${Math.round(e.x)}_${Math.round(e.y)}_${Math.round(e.width)}_${Math.round(
            e.height
          )}`;

          const n = (0, o.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (s.viewImageThumbnail = (function() {
          const e = { cover: 'z', contain: 'x', crop: 'y' };
          return function(t) {
            i.verifyOptions(t, 'url mode', 'nos::viewImageThumbnail'),
              i.verifyParamValid('mode', t.mode, Object.keys(e), 'nos::viewImageThumbnail'),
              t.mode === 'contain'
                ? i.verifyParamAtLeastPresentOne(t, 'width height', 'nos::viewImageThumbnail')
                : i.verifyOptions(t, 'width height', 'nos::viewImageThumbnail'),
              i.undef(t.width) && (t.width = 0),
              i.undef(t.height) && (t.height = 0),
              i.verifyParamType('width', t.width, 'number', 'nos::viewImageThumbnail'),
              i.verifyParamMin('width', t.width, 0, 'nos::viewImageThumbnail'),
              i.verifyParamType('height', t.height, 'number', 'nos::viewImageThumbnail'),
              i.verifyParamMin('height', t.height, 0, 'nos::viewImageThumbnail');
            const n = Math.round(t.width);

            const r = Math.round(t.height);

            let s = `thumbnail=${n}${e[t.mode]}${r}`;
            t.mode === 'crop' &&
              (i.notundef(t.axis) &&
                (i.undef(t.axis.x) && (t.axis.x = 5),
                i.undef(t.axis.y) && (t.axis.y = 5),
                i.verifyParamMin('axis.x', t.axis.x, 0, 'nos::viewImageThumbnail'),
                i.verifyParamMax('axis.x', t.axis.x, 10, 'nos::viewImageThumbnail'),
                i.verifyParamMin('axis.y', t.axis.y, 0, 'nos::viewImageThumbnail'),
                i.verifyParamMax('axis.y', t.axis.y, 10, 'nos::viewImageThumbnail'),
                (s = `${s}&axis=${Math.round(t.axis.x)}_${Math.round(t.axis.y)}`)));
            i.notundef(t.enlarge) &&
              (i.verifyParamType('enlarge', t.enlarge, 'boolean', 'nos::viewImageThumbnail'),
              t.enlarge && (s += '&enlarge=1'));
            const a = (0, o.genUrlSep)(t.url);
            return t.url + a + s;
          };
        })());
    },
    function(e, t, n) {
      const r = n(0);

      const o = n(46).fn;

      const i = n(124);
      (o.getSimpleNosToken = function() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (e.num = 1), r.verifyOptions(e), this.cbAndSendCmd('getSimpleNosToken', e);
      }),
        (o.getNosToken = function(e) {
          this.sendCmd('getNosToken', { responseBody: e.responseBody }, e.callback);
        }),
        (o.getNosTokenTrans = function(e) {
          this.sendCmd('getNosTokenTrans', e.responseBody, e.callback);
        }),
        (o.packFileDownloadName = function(e) {
          r.verifyOptions(e, 'url name', !0, '', 'nos::packFileDownloadName');
          const t = e.url;
          return `${t + r.genUrlSep(t)}download=${encodeURIComponent(e.name)}`;
        }),
        (o.audioToMp3 = function(e) {
          r.verifyOptions(e, 'url', 'nos::audioToMp3');
          const t = e.url;
          return `${t + r.genUrlSep(t)}audioTrans&type=mp3`;
        }),
        (o.removeFile = function(e) {
          this.sendCmd('removeFile', e, e.callback);
        }),
        (o.fetchFile = function(e) {
          this.sendCmd('fetchFile', e, e.callback);
        }),
        (o.fetchFileList = function(e) {
          this.sendCmd('fetchFileList', e, e.callback);
        }),
        (o.stripImageMeta = function(e) {
          return this.beforeProcessImage(e, 'stripmeta');
        }),
        (o.qualityImage = function(e) {
          return this.beforeProcessImage(e, 'quality');
        }),
        (o.interlaceImage = function(e) {
          return this.beforeProcessImage(e, 'interlace');
        }),
        (o.rotateImage = function(e) {
          return this.beforeProcessImage(e, 'rotate');
        }),
        (o.blurImage = function(e) {
          return this.beforeProcessImage(e, 'blur');
        }),
        (o.cropImage = function(e) {
          return this.beforeProcessImage(e, 'crop');
        }),
        (o.thumbnailImage = function(e) {
          return this.beforeProcessImage(e, 'thumbnail');
        }),
        (o.beforeProcessImage = function(e, t) {
          const n = r.copy(e);
          return (n.type = t), (e.ops = [n]), this.processImage(e);
        }),
        (o.processImage = function(e) {
          const t = this;
          r.verifyOptions(e, 'url ops', !0, '', 'nos::processImage'),
            r.verifyParamType('ops', e.ops, 'array', 'nos::processImage');
          const n = e.ops.map(e => {
            return (
              r.verifyOptions(e, 'type', !0, '', 'nos::processImage'),
              r.verifyParamValid('type', e.type, i.validTypes, 'nos::processImage'),
              t[`gen${e.type.slice(0, 1).toUpperCase()}${e.type.slice(1)}Op`](e)
            );
          });
          t.processCallback(e), t.sendCmd('processImage', { url: e.url, imageOps: n }, e.callback);
        }),
        (o.genStripmetaOp = function(e) {
          return new i({ type: e.type, stripmeta: e.strip ? 1 : 0 });
        }),
        (o.genQualityOp = function(e) {
          r.verifyOptions(e, 'quality', !0, '', 'nos::genQualityOp'),
            r.verifyParamType('quality', e.quality, 'number', 'nos::genQualityOp'),
            r.verifyParamMin('quality', e.quality, 0, 'nos::genQualityOp'),
            r.verifyParamMax('quality', e.quality, 100, 'nos::genQualityOp');
          const t = Math.round(e.quality);
          return new i({ type: e.type, qualityQuality: t });
        }),
        (o.genInterlaceOp = function(e) {
          return new i({ type: e.type });
        }),
        (o.genRotateOp = function(e) {
          for (
            r.verifyOptions(e, 'angle', !0, '', 'nos::genRotateOp'),
              r.verifyParamType('angle', e.angle, 'number', 'nos::genRotateOp');
            e.angle < 0;

          )
            e.angle += 360;
          e.angle %= 360;
          const t = Math.round(e.angle);
          return new i({ type: e.type, rotateAngle: t });
        }),
        (o.genBlurOp = function(e) {
          r.verifyOptions(e, 'radius sigma', 'nos::genBlurOp'),
            r.verifyParamType('radius', e.radius, 'number', 'nos::genBlurOp'),
            r.verifyParamMin('radius', e.radius, 1, 'nos::genBlurOp'),
            r.verifyParamMax('radius', e.radius, 50, 'nos::genBlurOp'),
            r.verifyParamType('sigma', e.sigma, 'number', 'nos::genBlurOp'),
            r.verifyParamMin('sigma', e.sigma, 0, 'nos::genBlurOp');
          const t = Math.round(e.radius);

          const n = Math.round(e.sigma);
          return new i({ type: e.type, blurRadius: t, blurSigma: n });
        }),
        (o.genCropOp = function(e) {
          r.verifyOptions(e, 'x y width height', 'nos::genCropOp'),
            r.verifyParamType('x', e.x, 'number', 'nos::genCropOp'),
            r.verifyParamMin('x', e.x, 0, 'nos::genCropOp'),
            r.verifyParamType('y', e.y, 'number', 'nos::genCropOp'),
            r.verifyParamMin('y', e.y, 0, 'nos::genCropOp'),
            r.verifyParamType('width', e.width, 'number', 'nos::genCropOp'),
            r.verifyParamMin('width', e.width, 0, 'nos::genCropOp'),
            r.verifyParamType('height', e.height, 'number', 'nos::genCropOp'),
            r.verifyParamMin('height', e.height, 0, 'nos::genCropOp');
          const t = Math.round(e.x);

          const n = Math.round(e.y);

          const o = Math.round(e.width);

          const s = Math.round(e.height);
          return new i({ type: e.type, cropX: t, cropY: n, cropWidth: o, cropHeight: s });
        }),
        (o.genThumbnailOp = (function() {
          const e = { cover: 'z', contain: 'x', crop: 'y' };
          return function(t) {
            r.verifyOptions(t, 'mode', 'nos::genThumbnailOp'),
              r.verifyParamValid('mode', t.mode, Object.keys(e), 'nos::genThumbnailOp'),
              t.mode === 'contain'
                ? r.verifyParamAtLeastPresentOne(t, 'width height', 'nos::genThumbnailOp')
                : r.verifyOptions(t, 'width height', 'nos::genThumbnailOp'),
              r.undef(t.width) && (t.width = 0),
              r.undef(t.height) && (t.height = 0),
              r.verifyParamType('width', t.width, 'number', 'nos::genThumbnailOp'),
              r.verifyParamMin('width', t.width, 0, 'nos::genThumbnailOp'),
              r.verifyParamType('height', t.height, 'number', 'nos::genThumbnailOp'),
              r.verifyParamMin('height', t.height, 0, 'nos::genThumbnailOp');
            const n = Math.round(t.width);

            const o = Math.round(t.height);

            const s = new i({
              type: t.type,
              thumbnailMode: e[t.mode],
              thumbnailWidth: n,
              thumbnailHeight: o,
            });
            if (t.mode === 'crop' && r.notundef(t.axis)) {
              r.undef(t.axis.x) && (t.axis.x = 5),
                r.undef(t.axis.y) && (t.axis.y = 5),
                r.verifyParamMin('axis.x', t.axis.x, 0, 'nos::genThumbnailOp'),
                r.verifyParamMax('axis.x', t.axis.x, 10, 'nos::genThumbnailOp'),
                r.verifyParamMin('axis.y', t.axis.y, 0, 'nos::genThumbnailOp'),
                r.verifyParamMax('axis.y', t.axis.y, 10, 'nos::genThumbnailOp');
              const a = Math.round(t.axis.x);

              const c = Math.round(t.axis.y);
              (s.thumbnailAxisX = a), (s.thumbnailAxisY = c);
            }
            return (
              r.notundef(t.enlarge) &&
                (r.verifyParamType('enlarge', t.enlarge, 'boolean', 'nos::genThumbnailOp'),
                t.enlarge && (s.thumbnailEnlarge = 1)),
              s
            );
          };
        })());
    },
    function(e, t, n) {
      const r = n(0);

      const o = n(23);

      const i = n(59).upload;

      const s = n(59).abort;

      const a = r.supportFormData;

      const c = 104857600;
      function u(e) {
        const t = this;
        (t.options = r.copy(e)),
          r.verifyOptions(e, 'url fileName'),
          r.verifyParamPresentJustOne(e, 'blob fileInput'),
          r.verifyCallback(e, 'beginupload uploadprogress uploaddone'),
          e.fileInput && (e.fileInput = r.verifyFileInput(e.fileInput)),
          e.type && r.verifyFileType(e.type),
          e.timeout ? r.verifyParamType('timeout', e.timeout, 'number') : (e.timeout = 6e5),
          r.verifyFileUploadCallback(e),
          (e.data = {});
        const n = e.fileName;

        const s = e.fileInput;
        if (a)
          if (s) {
            const u = e.type ? r.filterFiles(s.files, e.type) : [].slice.call(s.files, 0);
            if (!u || !u.length)
              return void e.uploaddone(
                o.newWrongFileTypeError(
                  `未读取到${e.type}类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了${
                    e.type
                  }类型的文件`
                )
              );
            if (s.files[0].size > c)
              return void e.uploaddone(o.newFileTooLargeError('文件大小超过100M'));
            e.data[n] = u[0];
          } else e.blob && (e.data[n] = e.blob);
        else r.dataset(s, 'name', n), (e.data.input = s);
        e.params && r.merge(e.data, e.params);
        const l = {
          data: e.data,
          onaftersend() {
            e.beginupload(t);
          },
          onuploading(t) {
            const n = Math.floor((1e4 * t.loaded) / t.total) / 100;

            const r = {
              docId: e.docId,
              total: t.total,
              loaded: t.loaded,
              percentage: n,
              percentageText: `${n}%`,
            };
            e.fileInput && (r.fileInput = e.fileInput),
              e.blob && (r.blob = e.blob),
              e.uploadprogress(r);
          },
          onload(n) {
            (n.docId = e.docId), n.Error ? t.onError(n) : e.uploaddone(null, n);
          },
          onerror(n) {
            try {
              if (n.result) var r = JSON.parse(n.result);
              else r = n;
              t.onError(r);
            } catch (r) {
              console.error('ignore error if could not parse obj.result', r),
                e.uploaddone(new o(n.message, n.code), t.options);
            }
          },
        };
        a || (l.mode = 'iframe'), (l.putFileAtEnd = !0), (t.sn = i(e.url, l));
      }
      (u.prototype.onError = function(e) {
        let t;

        let n;

        let r;

        const i = this.options;
        (n = (t = (e = e || {}).Error || e || {}).Code || t.code || 'unknown'),
          (r = t.Message || t.message || '未知错误'),
          i.uploaddone(new o(`${n}(${r})`, n));
      }),
        (u.prototype.abort = function() {
          s(this.sn);
        }),
        (e.exports = u);
    },
    function(e, t, n) {
      const r = n(0);

      const o = {
        file: { md5: '$(Etag)', size: '$(ObjectSize)' },
        image: {
          md5: '$(Etag)',
          size: '$(ObjectSize)',
          w: '$(ImageInfo.Width)',
          h: '$(ImageInfo.Height)',
          orientation: '$(ImageInfo.Orientation)',
        },
        audio: { md5: '$(Etag)', size: '$(ObjectSize)', dur: '$(AVinfo.Audio.Duration)' },
        video: {
          md5: '$(Etag)',
          size: '$(ObjectSize)',
          dur: '$(AVinfo.Video.Duration)',
          w: '$(AVinfo.Video.Width)',
          h: '$(AVinfo.Video.Height)',
        },
      };

      const i = {
        genResponseBody(e) {
          return o[(e = e || 'file')];
        },
        parseResponse(e, t) {
          r.notundef(e.size) && (e.size = +e.size),
            r.notundef(e.w) && (e.w = +e.w),
            r.notundef(e.h) && (e.h = +e.h),
            r.notundef(e.dur) && (e.dur = +e.dur);
          const n = e.orientation;
          if (
            r.notundef(n) &&
            (delete e.orientation, t && (n === 'right, top' || n === 'left, bottom'))
          ) {
            const o = e.w;
            (e.w = e.h), (e.h = o);
          }
          return e;
        },
      };
      e.exports = i;
    },
    function(e, t, n) {
      let r;
      let o;
      let i;
      !(function(n, s) {
        (o = []),
          void 0 ===
            (i =
              typeof (r = function(e) {
                return function(t) {
                  (t = t || {}),
                    (function() {
                      (t.arrayAccessForm = t.arrayAccessForm || 'none'),
                        (t.emptyNodeForm = t.emptyNodeForm || 'text'),
                        (t.jsAttributeFilter = t.jsAttributeFilter),
                        (t.jsAttributeConverter = t.jsAttributeConverter),
                        (t.attributeConverters = t.attributeConverters || []),
                        (t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || []),
                        (t.arrayAccessFormPaths = t.arrayAccessFormPaths || []),
                        void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0);
                      void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0);
                      void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0);
                      void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0);
                      void 0 === t.ignoreRoot && (t.ignoreRoot = !1);
                      void 0 === t.escapeMode && (t.escapeMode = !0);
                      void 0 === t.attributePrefix && (t.attributePrefix = '_');
                      void 0 === t.selfClosingElements && (t.selfClosingElements = !0);
                      void 0 === t.keepCData && (t.keepCData = !1);
                      void 0 === t.jsDateUTC && (t.jsDateUTC = !1);
                    })(),
                    (function() {
                      function e(e) {
                        let t = String(e);
                        return t.length === 1 && (t = `0${t}`), t;
                      }
                      typeof String.prototype.trim !== 'function' &&
                        (String.prototype.trim = function() {
                          return this.replace(/^\s+|^\n+|(\s|\n)+$/g, '');
                        });
                      typeof Date.prototype.toISOString !== 'function' &&
                        (Date.prototype.toISOString = function() {
                          return `${this.getUTCFullYear()}-${e(this.getUTCMonth() + 1)}-${e(
                            this.getUTCDate()
                          )}T${e(this.getUTCHours())}:${e(this.getUTCMinutes())}:${e(
                            this.getUTCSeconds()
                          )}.${String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5)}Z`;
                        });
                    })();
                  const n = {
                    ELEMENT_NODE: 1,
                    TEXT_NODE: 3,
                    CDATA_SECTION_NODE: 4,
                    COMMENT_NODE: 8,
                    DOCUMENT_NODE: 9,
                  };
                  function r(e) {
                    let t = e.localName;
                    return (
                      t == null && (t = e.baseName), (t != null && t !== '') || (t = e.nodeName), t
                    );
                  }
                  function o(e) {
                    return typeof e === 'string'
                      ? e
                          .replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                          .replace(/"/g, '&quot;')
                          .replace(/'/g, '&#x27;')
                      : e;
                  }
                  function i(e, n, r) {
                    switch (t.arrayAccessForm) {
                      case 'property':
                        e[n] instanceof Array
                          ? (e[`${n}_asArray`] = e[n])
                          : (e[`${n}_asArray`] = [e[n]]);
                    }
                    if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                      for (var o = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
                        const s = t.arrayAccessFormPaths[i];
                        if (typeof s === 'string') {
                          if (s === r) {
                            o = !0;
                            break;
                          }
                        } else if (s instanceof RegExp) {
                          if (s.test(r)) {
                            o = !0;
                            break;
                          }
                        } else if (typeof s === 'function' && s(n, r)) {
                          o = !0;
                          break;
                        }
                      }
                      o && (e[n] = [e[n]]);
                    }
                  }
                  function s(e) {
                    const t = e.split(/[-T:+Z]/g);

                    let n = new Date(t[0], t[1] - 1, t[2]);

                    const r = t[5].split('.');
                    if (
                      (n.setHours(t[3], t[4], r[0]),
                      r.length > 1 && n.setMilliseconds(r[1]),
                      t[6] && t[7])
                    ) {
                      let o = 60 * t[6] + Number(t[7]);

                      const i = /\d\d-\d\d:\d\d$/.test(e) ? '-' : '+';
                      (o = 0 + (i === '-' ? -1 * o : o)),
                        n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset());
                    } else
                      e.indexOf('Z', e.length - 1) !== -1 &&
                        (n = new Date(
                          Date.UTC(
                            n.getFullYear(),
                            n.getMonth(),
                            n.getDate(),
                            n.getHours(),
                            n.getMinutes(),
                            n.getSeconds(),
                            n.getMilliseconds()
                          )
                        ));
                    return n;
                  }
                  function a(e, o) {
                    for (var a = { __cnt: 0 }, u = e.childNodes, l = 0; l < u.length; l++) {
                      const p = u.item(l);

                      const m = r(p);
                      p.nodeType !== n.COMMENT_NODE &&
                        (a.__cnt++,
                        a[m] == null
                          ? ((a[m] = c(p, `${o}.${m}`)), i(a, m, `${o}.${m}`))
                          : (a[m] instanceof Array || ((a[m] = [a[m]]), i(a, m, `${o}.${m}`)),
                            (a[m][a[m].length] = c(p, `${o}.${m}`))));
                    }
                    for (let d = 0; d < e.attributes.length; d++) {
                      const f = e.attributes.item(d);
                      a.__cnt++;
                      for (var h = f.value, y = 0; y < t.attributeConverters.length; y++) {
                        const g = t.attributeConverters[y];
                        g.test.call(null, f.name, f.value) &&
                          (h = g.convert.call(null, f.name, f.value));
                      }
                      a[t.attributePrefix + f.name] = h;
                    }
                    const v = (function(e) {
                      return e.prefix;
                    })(e);
                    return (
                      v && (a.__cnt++, (a.__prefix = v)),
                      a['#text'] &&
                        ((a.__text = a['#text']),
                        a.__text instanceof Array && (a.__text = a.__text.join('\n')),
                        t.escapeMode &&
                          (a.__text = (function(e) {
                            return e
                              .replace(/&lt;/g, '<')
                              .replace(/&gt;/g, '>')
                              .replace(/&quot;/g, '"')
                              .replace(/&#x27;/g, "'")
                              .replace(/&amp;/g, '&');
                          })(a.__text)),
                        t.stripWhitespaces && (a.__text = a.__text.trim()),
                        delete a['#text'],
                        t.arrayAccessForm === 'property' && delete a['#text_asArray'],
                        (a.__text = (function(e, n, r) {
                          if (t.datetimeAccessFormPaths.length > 0)
                            for (
                              let o = r.split('.#')[0], i = 0;
                              i < t.datetimeAccessFormPaths.length;
                              i++
                            ) {
                              const a = t.datetimeAccessFormPaths[i];
                              if (typeof a === 'string') {
                                if (a === o) return s(e);
                              } else if (a instanceof RegExp) {
                                if (a.test(o)) return s(e);
                              } else if (typeof a === 'function' && a(o)) return s(e);
                            }
                          return e;
                        })(a.__text, 0, `${o}.#text`))),
                      a.hasOwnProperty('#cdata-section') &&
                        ((a.__cdata = a['#cdata-section']),
                        delete a['#cdata-section'],
                        t.arrayAccessForm === 'property' && delete a['#cdata-section_asArray']),
                      a.__cnt === 1 && a.__text
                        ? (a = a.__text)
                        : a.__cnt === 0 && t.emptyNodeForm === 'text'
                          ? (a = '')
                          : a.__cnt > 1 &&
                            void 0 !== a.__text &&
                            t.skipEmptyTextNodesForObj &&
                            ((t.stripWhitespaces && a.__text === '') || a.__text.trim() === '') &&
                            delete a.__text,
                      delete a.__cnt,
                      t.keepCData || a.hasOwnProperty('__text') || !a.hasOwnProperty('__cdata')
                        ? (t.enableToStringFunc &&
                            (a.__text || a.__cdata) &&
                            (a.toString = function() {
                              return (
                                (this.__text ? this.__text : '') +
                                (this.__cdata ? this.__cdata : '')
                              );
                            }),
                          a)
                        : a.__cdata
                          ? a.__cdata
                          : ''
                    );
                  }
                  function c(e, o) {
                    return e.nodeType === n.DOCUMENT_NODE
                      ? (function(e) {
                          for (var o = {}, i = e.childNodes, s = 0; s < i.length; s++) {
                            const a = i.item(s);
                            if (a.nodeType === n.ELEMENT_NODE) {
                              const u = r(a);
                              t.ignoreRoot ? (o = c(a, u)) : (o[u] = c(a, u));
                            }
                          }
                          return o;
                        })(e)
                      : e.nodeType === n.ELEMENT_NODE
                        ? a(e, o)
                        : e.nodeType === n.TEXT_NODE || e.nodeType === n.CDATA_SECTION_NODE
                          ? e.nodeValue
                          : null;
                  }
                  function u(e, n, r, i) {
                    let s = `<${e && e.__prefix ? `${e.__prefix}:` : ''}${n}`;
                    if (r)
                      for (let a = 0; a < r.length; a++) {
                        const c = r[a];

                        let u = e[c];
                        t.escapeMode && (u = o(u)),
                          (s += ` ${c.substr(t.attributePrefix.length)}=`),
                          t.useDoubleQuotes ? (s += `"${u}"`) : (s += `'${u}'`);
                      }
                    return (s += i ? ' />' : '>');
                  }
                  function l(e, t) {
                    return `</${e && e.__prefix ? `${e.__prefix}:` : ''}${t}>`;
                  }
                  function p(e, n) {
                    return !!(
                      (t.arrayAccessForm === 'property' &&
                        (function(e, t) {
                          return e.indexOf(t, e.length - t.length) !== -1;
                        })(n.toString(), '_asArray')) ||
                      n.toString().indexOf(t.attributePrefix) === 0 ||
                      n.toString().indexOf('__') === 0 ||
                      e[n] instanceof Function
                    );
                  }
                  function m(e) {
                    let t = 0;
                    if (e instanceof Object) for (const n in e) p(e, n) || t++;
                    return t;
                  }
                  function d(e) {
                    const n = [];
                    if (e instanceof Object)
                      for (const r in e)
                        r.toString().indexOf('__') === -1 &&
                          r.toString().indexOf(t.attributePrefix) === 0 &&
                          n.push(r);
                    return n;
                  }
                  function f(e) {
                    let n = '';
                    return (
                      e instanceof Object
                        ? (n += (function(e) {
                            let n = '';
                            e.__cdata && (n += `<![CDATA[${e.__cdata}]]>`);
                            e.__text && (t.escapeMode ? (n += o(e.__text)) : (n += e.__text));
                            return n;
                          })(e))
                        : e !== null && (t.escapeMode ? (n += o(e)) : (n += e)),
                      n
                    );
                  }
                  function h(e, n, r) {
                    let o = '';
                    if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e)) return o;
                    if (
                      (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)),
                      (void 0 !== e && e !== null && e !== '') || !t.selfClosingElements)
                    )
                      if (typeof e === 'object')
                        if (Object.prototype.toString.call(e) === '[object Array]')
                          o += (function(e, t, n) {
                            let r = '';
                            if (e.length === 0) r += u(e, t, n, !0);
                            else for (let o = 0; o < e.length; o++) r += h(e[o], t, d(e[o]));
                            return r;
                          })(e, n, r);
                        else if (e instanceof Date)
                          (o += u(e, n, r, !1)),
                            (o += t.jsDateUTC ? e.toUTCString() : e.toISOString()),
                            (o += l(e, n));
                        else {
                          const i = m(e);
                          i > 0 || e.__text || e.__cdata
                            ? ((o += u(e, n, r, !1)), (o += y(e)), (o += l(e, n)))
                            : t.selfClosingElements
                              ? (o += u(e, n, r, !0))
                              : ((o += u(e, n, r, !1)), (o += l(e, n)));
                        }
                      else (o += u(e, n, r, !1)), (o += f(e)), (o += l(e, n));
                    else o += u(e, n, r, !0);
                    return o;
                  }
                  function y(e) {
                    let t = '';

                    const n = m(e);
                    if (n > 0)
                      for (const r in e)
                        if (!p(e, r)) {
                          const o = e[r];

                          const i = d(o);
                          t += h(o, r, i);
                        }
                    return (t += f(e));
                  }
                  function g(t) {
                    if (void 0 === t) return null;
                    if (typeof t !== 'string') return null;
                    let n = null;

                    let r = null;
                    if (e) (n = new e()), (r = n.parseFromString(t, 'text/xml'));
                    else if (window && window.DOMParser) {
                      n = new window.DOMParser();
                      let o = null;

                      const i = window.ActiveXObject || 'ActiveXObject' in window;
                      if (!i)
                        try {
                          o = n.parseFromString('INVALID', 'text/xml').childNodes[0].namespaceURI;
                        } catch (e) {
                          o = null;
                        }
                      try {
                        (r = n.parseFromString(t, 'text/xml')),
                          o !== null &&
                            r.getElementsByTagNameNS(o, 'parsererror').length > 0 &&
                            (r = null);
                      } catch (e) {
                        r = null;
                      }
                    } else
                      t.indexOf('<?') === 0 && (t = t.substr(t.indexOf('?>') + 2)),
                        ((r = new ActiveXObject('Microsoft.XMLDOM')).async = 'false'),
                        r.loadXML(t);
                    return r;
                  }
                  (this.asArray = function(e) {
                    return void 0 === e || e === null ? [] : e instanceof Array ? e : [e];
                  }),
                    (this.toXmlDateTime = function(e) {
                      return e instanceof Date
                        ? e.toISOString()
                        : typeof e === 'number'
                          ? new Date(e).toISOString()
                          : null;
                    }),
                    (this.asDateTime = function(e) {
                      return typeof e === 'string' ? s(e) : e;
                    }),
                    (this.xml2dom = function(e) {
                      return g(e);
                    }),
                    (this.dom2js = function(e) {
                      return c(e, null);
                    }),
                    (this.js2dom = function(e) {
                      const t = this.js2xml(e);
                      return g(t);
                    }),
                    (this.xml2js = function(e) {
                      const t = g(e);
                      return t != null ? this.dom2js(t) : null;
                    }),
                    (this.js2xml = function(e) {
                      return y(e);
                    }),
                    (this.getVersion = function() {
                      return '3.1.1';
                    });
                };
              }) === 'function'
                ? r.apply(t, o)
                : r) || (e.exports = i);
      })();
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const o = n(46).fn;

      const i = n(0);

      const s = n(196);

      const a = n(23);

      const c = n(4);

      const u = n(195);

      const l = n(194);

      const p = n(125);
      (o.sendText = function(e) {
        return this.processCallback(e), (e.msg = new this.message.TextMessage(e)), this.sendMsg(e);
      }),
        (o.previewFile = function(e) {
          if (
            (i.verifyOptions(e, 'done', 'msg::previewFile'),
            e.type || (e.type = 'file'),
            i.verifyParamPresentJustOne(
              e,
              'dataURL blob fileInput filePath wxFilePath fileObject',
              'msg::previewFile'
            ),
            (e.filePath = e.filePath || e.wxFilePath),
            delete e.wxFilePath,
            e.dataURL)
          )
            e.blob = p.fromDataURL(e.dataURL);
          else if (e.blob);
          else if (e.fileInput) {
            if (
              ((e.fileInput = i.verifyFileInput(e.fileInput, 'msg::previewFile')),
              e.fileInput.files)
            ) {
              if (!e.fileInput.files.length)
                return void e.done(
                  a.newNoFileError(`请选择${e.type}文件`, {
                    callFunc: 'msg::previewFile',
                    fileInput: e.fileInput,
                  }),
                  e
                );
              e.fileSize = e.fileInput.files[0].size;
            }
            (e.fileInputName = i.getFileName(e.fileInput)),
              (e.fileInfo = i.getFileInfo(e.fileInput)),
              (e.transtype = e.fileInfo.type);
          }
          this.processCallback(e);
          const t = JSON.stringify(u.genResponseBody(e.type) || {}).replace(/"/gi, '\\"');

          let n = null;

          const r = e.transcode ? 'getNosTokenTrans' : 'getNosToken';
          (n = e.transcode
            ? {
                transToken: {
                  name: e.fileInfo.name,
                  type: e.fileInfo.transcodeType,
                  transType: e.transcode === 'png' ? 11 : 10,
                  size: e.fileInfo.size,
                  body: t,
                },
              }
            : t),
            this[r]({
              responseBody: n,
              callback: function(t, n) {
                t
                  ? e.done(t, e.callback.options)
                  : (e.transcode
                      ? ((e.nosToken = n.nosToken), (e.docId = n.docId))
                      : (e.nosToken = n),
                    this._doPreviewFile(e));
              }.bind(this),
            });
        }),
        (o._doPreviewFile = function(e) {
          const t = this;

          const n = e.uploaddone;

          const o = c.genUploadUrl(e.nosToken.bucket);

          const s = this.assembleUploadParams(e.nosToken);
          function p(r, o) {
            if (((e.uploaddone = n), r)) e.done(r, e.callback.options);
            else {
              if (
                (((o = u.parseResponse(o, t.options.exifOrientation)).url = c.genDownloadUrl(
                  e.nosToken.bucket,
                  s.Object
                )),
                i.exist(e.fileInputName))
              )
                o.name = e.fileInputName;
              else if (e.blob) {
                const a = e.blob.name;
                if (((o.name = a || `blob-${o.md5}`), !a)) {
                  const l = e.blob.type;
                  o.ext = l.slice(l.lastIndexOf('/') + 1);
                }
              } else
                e.filePath
                  ? (o.name = e.filePath)
                  : e.fileObject && (o.name = e.fileObject.fileName);
              if (!o.ext) {
                const p = o.name.lastIndexOf('.');
                o.ext = p === -1 ? 'unknown' : o.name.slice(p + 1);
              }
              (o.size = o.size || 0), e.done(null, i.copy(o));
            }
          }
          if (c.isWeixinApp)
            i.verifyOptions(e, 'filePath', 'msg::_doPreviewFile'),
              wx.uploadFile({
                url: o,
                filePath: e.filePath,
                name: 'file',
                formData: s,
                fail(e) {
                  console.error('api::msg:upload file failed', e);
                },
                success(e) {
                  if (e.statusCode === 200)
                    try {
                      p(null, JSON.parse(e.data));
                    } catch (t) {
                      console.error('parse wx upload file res error', t),
                        p({ code: 'PARSE_WX_UPLOAD_FILE_RES_ERROR', str: e.data, msg: e.errMsg });
                    }
                  else p({ code: e.statusCode, msg: e.errMsg });
                },
              });
          else if (c.isNodejs) {
            const m = {
              url: o,
              name: 'file',
              formData: s,
              success(e) {
                if (e.statusCode === 200)
                  try {
                    p(null, JSON.parse(e.data));
                  } catch (t) {
                    console.error('parse nodejs upload file res error', t),
                      p({ code: 'PARSE_NODEJS_UPLOAD_FILE_RES_ERROR', str: e.data, msg: e.errMsg });
                  }
                else p({ code: e.statusCode, msg: e.errMsg });
              },
              fail(e) {
                console.error('api::msg:upload file failed', e);
              },
            };
            if (e.filePath) m.filePath = e.filePath;
            else {
              if ((0, r.default)(e.fileObject) !== 'object')
                throw new a('Nodejs上传fileObject参数类型应如 {fileName:..,fileData:..} ');
              m.fileData = e.fileObject.fileData;
            }
            l.uploadFile(m);
          } else if (c.isRN) {
            const d = {
              url: o,
              name: 'file',
              formData: s,
              filePath: e.filePath,
              success(e) {
                if (e.ok && e.status === 200)
                  try {
                    (e.md5 =
                      (e.headers.map && e.headers.map.etag && e.headers.map.etag[0]) || 'UNKNOWN'),
                      p(null, e);
                  } catch (t) {
                    console.error('parse React Native upload file res error', t),
                      p({ code: 'PARSE_React_Native_UPLOAD_FILE_RES_ERROR', res: e });
                  }
                else p({ code: e.status, msg: e.statusText });
              },
              fail(e) {
                console.error('api::msg:upload file failed', e);
              },
            };
            l.uploadFile(d);
          } else (e.uploaddone = p), (e.url = o), (e.params = s), (e.fileName = 'file'), new l(e);
        }),
        (o.sendFile = function(e) {
          if (
            (e.type || (e.type = 'file'),
            i.verifyParamPresentJustOne(
              e,
              'dataURL blob fileInput file filePath wxFilePath fileObject',
              'msg::sendFile'
            ),
            this.processCallback(e),
            (e.filePath = e.filePath || e.wxFilePath),
            delete e.wxFilePath,
            e.dataURL)
          )
            this._previewAndSendFile(e);
          else if (e.blob) this._previewAndSendFile(e);
          else if (e.fileInput) {
            if (
              ((e.fileInput = i.verifyFileInput(e.fileInput, 'msg::sendFile')),
              e.fileInput.files && !e.fileInput.files.length)
            )
              return void e.done(
                a.newNoFileError(`请选择${e.type}文件`, {
                  callFunc: 'msg::sendFile',
                  fileInput: e.fileInput,
                }),
                e.callback.options
              );
            this._previewAndSendFile(e);
          } else if (e.filePath || e.fileObject) this._previewAndSendFile(e);
          else if (e.file) return (e.msg = new this.message.FileMessage(e)), this.sendMsg(e);
        }),
        (o._previewAndSendFile = function(e) {
          const t = this;
          i.verifyCallback(e, 'uploaddone beforesend', 'msg::_previewAndSendFile');
          const n = e.done;
          (e.done = function(r, o) {
            if (((e.done = n), r)) e.uploaddone(r, e.callback.options);
            else {
              if (/chatroom/.test(e.scene)) return;
              e.uploaddone(null, i.copy(o)),
                (e.file = o),
                (e.msg = new t.message.FileMessage(e)),
                e.beforesend(t.sendMsg(e));
            }
          }),
            t.previewFile(e);
        }),
        (o.assembleUploadParams = function(e) {
          return e
            ? {
                Object: decodeURIComponent(e.objectName),
                'x-nos-token': e.token,
                'x-nos-entity-type': 'json',
              }
            : null;
        }),
        (o.deleteFile = function(e) {
          i.verifyParamPresentJustOne(e, 'docId', 'msg::deleteFile'),
            this.removeFile({
              docId: e.docId,
              callback(t, n) {
                t ? e.error && e.error(t, n) : e.success && e.success(n);
              },
            });
        }),
        (o.getFile = function(e) {
          i.verifyParamPresentJustOne(e, 'docId', 'msg::getFile'),
            this.fetchFile({
              docId: e.docId,
              callback(t, n) {
                t ? e.error && e.error(t, n) : e.success && e.success(n.info);
              },
            });
        }),
        (o.getFileList = function(e) {
          const t = e.fromDocId;

          const n = void 0 === t ? '' : t;

          const r = e.limit;

          const o = void 0 === r ? 10 : r;

          const i = { limit: o };
          n && (i.fromDocId = n),
            this.fetchFileList({
              fileListParam: i,
              callback(t, n) {
                t
                  ? (o > 30 && (t.message += '::文档条数超过限制:30'), e.error && e.error(t, n))
                  : e.success && e.success(n);
              },
            });
        }),
        (o.sendGeo = function(e) {
          return this.processCallback(e), (e.msg = new this.message.GeoMessage(e)), this.sendMsg(e);
        }),
        (o.sendTipMsg = function(e) {
          return this.processCallback(e), (e.msg = new this.message.TipMessage(e)), this.sendMsg(e);
        }),
        (o.sendCustomMsg = function(e) {
          return (
            this.processCallback(e), (e.msg = new this.message.CustomMessage(e)), this.sendMsg(e)
          );
        }),
        (o.sendRobotMsg = function(e) {
          return (
            this.processCallback(e), (e.msg = new this.message.RobotMessage(e)), this.sendMsg(e)
          );
        }),
        (o.sendMsg = function(e) {
          const t = this.protocol;

          const n = e.msg;

          const r = {};

          const o = !!e.isLocal;
          if (
            (o && e.time && (n.time = e.time),
            e.resend && (e.flow !== 'out' || e.status !== 'fail'))
          )
            return i.onError('只能重发发送失败的消息');
          (e.callback.options.idClient = n.idClient), this.beforeSendMsg(e, r);
          let s = (e.rtnMsg = this.formatReturnMsg(n));
          return (
            o && ((s.status = 'success'), (s.isLocal = !0)),
            t.storeSendMsg && (r.promise = t.storeSendMsg(s)),
            (e.cbaop = function(e) {
              if (e && e.from !== 'server')
                return (s.status = 'fail'), t.updateSendMsgError && t.updateSendMsgError(s), s;
            }),
            o || ((r.msg = n), this.sendCmd(e.cmd, r, e.callback)),
            this.afterSendMsg(e),
            o &&
              setTimeout(() => {
                (s = i.simpleClone(s)), e.done(null, s);
              }, 0),
            i.copy(s)
          );
        }),
        (o.beforeSendMsg = function() {}),
        (o.afterSendMsg = function() {}),
        (o.formatReturnMsg = function(e) {
          return (
            (e = i.copy(e)),
            this.protocol.completeMsg(e),
            (e.status = 'sending'),
            (e = this.message.reverse(e))
          );
        }),
        (o.resendMsg = function(e) {
          return (
            i.verifyOptions(e, 'msg', 'msg::resendMsg'),
            this.trimMsgFlag(e),
            (e.resend = !0),
            this._sendMsgByType(e)
          );
        }),
        (o.forwardMsg = function(e) {
          return (
            i.verifyOptions(e, 'msg', 'msg::forwardMsg'),
            this.beforeForwardMsg(e),
            this.trimMsgFlag(e),
            (e.forward = !0),
            (e.msg.idClient = i.guid()),
            this._sendMsgByType(e)
          );
        }),
        (o.trimMsgFlag = function(e) {
          e && e.msg && ((e.msg = i.copy(e.msg)), delete e.msg.resend, delete e.msg.forward);
        }),
        (o.beforeForwardMsg = function() {}),
        (o._sendMsgByType = function(e) {
          switch (
            (i.verifyOptions(e, 'msg', 'msg::_sendMsgByType'),
            i.verifyParamValid(
              'msg.type',
              e.msg.type,
              this.message.validTypes,
              'msg::_sendMsgByType'
            ),
            i.merge(e, e.msg),
            e.type)
          ) {
            case 'text':
              return this.sendText(e);
            case 'image':
            case 'audio':
            case 'video':
            case 'file':
              return this.sendFile(e);
            case 'geo':
              return this.sendGeo(e);
            case 'custom':
              return this.sendCustomMsg(e);
            case 'tip':
              return this.sendTipMsg(e);
            default:
              throw new a(`不能发送类型为 ${e.type} 的消息`);
          }
        }),
        (o.parseRobotTemplate = function(e) {
          if (/<template[^>\/]+\/>/.test(e))
            return { raw: e, json: [{ type: 'text', name: '', text: '' }] };
          if (!/<template[^>\/]+>/.test(e))
            return { raw: e, json: [{ type: 'text', name: '', text: e }] };
          const t = new s({ escapeMode: !1 });
          e = e.replace(/<template [^>]+>/, '<template>');
          let n = t.xml2js(e);
          (n = n.template.LinearLayout), Array.isArray(n) || (n = [n]);
          let r = [];
          return (
            (n = n.forEach(e => {
              e.image && (r = r.concat(i(e))),
                e.text && (r = r.concat(o(e))),
                e.link &&
                  (r = r.concat(
                    (function(e) {
                      if (e.link) {
                        let t = e.link;
                        Array.isArray(t) || (t = [t]),
                          (t = t.map(e => {
                            return (
                              e.image && (e.image = i(e)),
                              e.text && (e.text = o(e)),
                              e._type === 'url'
                                ? ((e.type = 'url'),
                                  (e.style = e._style || ''),
                                  (e.target = e._target),
                                  delete e._target,
                                  delete e._style)
                                : e._type === 'block' &&
                                  ((e.type = 'block'),
                                  (e.style = e._style || ''),
                                  (e.params = e._params || ''),
                                  (e.target = e._target),
                                  delete e._params,
                                  delete e._target,
                                  delete e._style),
                              delete e._type,
                              e
                            );
                          })),
                          (e.link = t);
                      }
                      return e.link;
                    })(e)
                  ));
            })),
            { raw: e, json: r }
          );
          function o(e) {
            return (
              Array.isArray(e.text) || (e.text = [e.text]),
              (e.text = e.text.map(e => {
                return { type: 'text', name: e._name, text: e.__text };
              })),
              e.text
            );
          }
          function i(e) {
            return (
              Array.isArray(e.image) || (e.image = [e.image]),
              (e.image = e.image.map(e => {
                return { type: 'image', name: e._name, url: e._url };
              })),
              e.image
            );
          }
        });
    },
    function(e, t, n) {
      const r = n(46).fn;
      (r.isConnected = function() {
        return !!this.protocol && this.protocol.isConnected();
      }),
        (r.connect = function() {
          (this.protocol.appLogin = 0), this.protocol.connect();
        }),
        (r.disconnect = function(e) {
          (e = e || {}), this.protocol.disconnect(e.done);
        });
    },
    function(e, t, n) {
      const r = n(108);
      e.exports = function(e, t) {
        return (
          (t.method = 'POST'),
          (t.headers = t.headers || {}),
          (t.headers['Content-Type'] = 'multipart/form-data'),
          (t.timeout = 0),
          (t.type = t.type || 'json'),
          r(e, t)
        );
      };
    },
    function(e, t, n) {
      const r = n(24);

      const o = n(108);

      const i = (function() {
        const e = /json/i;

        const t = /post/i;
        return function(n, i) {
          const s = ((i = i || {}).data = i.data || {});

          const a = (i.headers = i.headers || {});

          const c = r.checkWithDefault(a, 'Accept', 'application/json');

          const u = r.checkWithDefault(a, 'Content-Type', 'application/json');
          return (
            e.test(c) && (i.type = 'json'),
            t.test(i.method) && e.test(u) && (i.data = JSON.stringify(s)),
            o(n, i)
          );
        };
      })();
      e.exports = i;
    },
    function(e, t, n) {
      const r = n(24);

      const o = n(126);

      const i = n(107);

      const s = {};
      function a(e) {
        this.init(), i.call(this, e);
      }
      const c = i.prototype;

      const u = (a.prototype = Object.create(c));
      (u.init = (function() {
        const e = 'NEJ-AJAX-DATA:';

        let t = !1;
        function n(t) {
          let n = t.data;
          if (n.indexOf(e) === 0) {
            const r = (n = JSON.parse(n.replace(e, ''))).key;

            const o = s[r];
            o && (delete s[r], (n.result = decodeURIComponent(n.result || '')), o.onLoad(n));
          }
        }
        return function() {
          !(function() {
            if (!t) {
              t = !0;
              const e = r.getGlobal();
              e.postMessage ? r.on(e, 'message', n) : o.addMsgListener(n);
            }
          })();
        };
      })()),
        (u.doSend = function() {
          const e = this.options;

          const t = r.url2origin(e.url);

          const n = e.proxyUrl || `${t}/res/nej_proxy_frame.html`;

          const i = s[n];
          if (r.isArray(i)) i.push(this.doSend.bind(this, e));
          else {
            if (!i)
              return (
                (s[n] = [this.doSend.bind(this, e)]),
                void r.createIframe({
                  src: n,
                  onload(e) {
                    const t = s[n];
                    (s[n] = r.target(e).contentWindow),
                      t.forEach(e => {
                        try {
                          e();
                        } catch (e) {
                          console.error(e);
                        }
                      });
                  },
                })
              );
            if (!this.aborted) {
              const a = (this.key = r.uniqueID());
              s[a] = this;
              const c = r.fetch({ method: 'GET', url: '', data: null, headers: {}, timeout: 0 }, e);
              (c.key = a), o.postMessage(i, { data: c }), this.afterSend();
            }
          }
        }),
        (u.abort = function() {
          (this.aborted = !0), delete s[this.key], c.abort.call(this);
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(24);

      const o = n(107);

      const i = n(126);

      const s = 'NEJ-UPLOAD-RESULT:';

      const a = {};
      function c(e) {
        this.init(), o.call(this, e);
      }
      const u = o.prototype;

      const l = (c.prototype = Object.create(u));
      (l.init = (function() {
        let e = !1;
        function t(e) {
          let t = e.data;
          if (t.indexOf(s) === 0) {
            const n = (t = JSON.parse(t.replace(s, ''))).key;

            const r = a[n];
            r && (delete a[n], (t.result = decodeURIComponent(t.result || '')), r.onLoad(t.result));
          }
        }
        return function() {
          !(function() {
            if (!e) {
              e = !0;
              const n = r.getGlobal();
              n.postMessage ? r.on(n, 'message', t) : (i.addMsgListener(t), i.startTimer());
            }
          })();
        };
      })()),
        (l.doSend = function() {
          const e = this;

          const t = e.options;

          const n = (e.key = `zoro-ajax-upload-iframe-${r.uniqueID()}`);
          a[n] = e;
          const o = (e.form = r.html2node('<form style="display:none;"></form>'));
          document.body.appendChild(o),
            (o.target = n),
            (o.method = 'POST'),
            (o.enctype = 'multipart/form-data'),
            (o.encoding = 'multipart/form-data');
          const i = t.url;

          const s = r.genUrlSep(i);
          o.action = `${i + s}_proxy_=form`;
          const c = t.data;

          const u = [];

          const l = [];
          function p() {
            u.forEach((e, t) => {
              const n = l[t];
              n.parentNode &&
                ((e.name = n.name),
                r.isFunction(e.setAttribute) && e.setAttribute('form', n.getAttribute('form')),
                n.parentNode.replaceChild(e, n));
            });
          }
          c &&
            r.getKeys(c, t.putFileAtEnd).forEach(e => {
              const t = c[e];
              if (t.tagName && t.tagName.toUpperCase() === 'INPUT') {
                if (t.type === 'file') {
                  const n = t;

                  const i = n.cloneNode(!0);
                  n.parentNode.insertBefore(i, n);
                  const s = r.dataset(n, 'name');
                  s && (n.name = s),
                    o.appendChild(n),
                    r.isFunction(n.setAttribute) &&
                      (n.setAttribute('form', ''), n.removeAttribute('form')),
                    u.push(t),
                    l.push(i);
                }
              } else {
                const a = r.html2node('<input type="hidden"/>');
                (a.name = e), (a.value = t), o.appendChild(a);
              }
            });
          var m = (e.iframe = r.createIframe({
            name: n,
            onload() {
              e.aborted
                ? p()
                : (r.on(m, 'load', e.checkResult.bind(e)), o.submit(), p(), e.afterSend());
            },
          }));
        }),
        (l.checkResult = function() {
          let e;
          let t;
          try {
            if (
              (t = (
                (e = this.iframe.contentWindow.document.body).innerText ||
                e.textContent ||
                ''
              ).trim()).indexOf(s) >= 0 ||
              e.innerHTML.indexOf(s) >= 0
            )
              return;
          } catch (e) {
            return void console.error('ignore error if not same domain,', e);
          }
          this.onLoad(t);
        }),
        (l.onLoad = function(e) {
          u.onLoad.call(this, { status: 200, result: e }),
            r.remove(this.form),
            r.remove(this.iframe),
            u.destroy.call(this);
        }),
        (l.destroy = function() {
          r.remove(this.iframe), r.remove(this.form);
        }),
        (l.abort = function() {
          (this.aborted = !0), delete a[this.key], u.abort.call(this);
        }),
        (e.exports = c);
    },
    function(e, t, n) {
      let r;
      /*!
 * EventEmitter v5.2.5 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */ !(function(
        t
      ) {
        function o() {}
        const i = o.prototype;

        const s = t.EventEmitter;
        function a(e, t) {
          for (let n = e.length; n--; ) if (e[n].listener === t) return n;
          return -1;
        }
        function c(e) {
          return function() {
            return this[e].apply(this, arguments);
          };
        }
        (i.getListeners = function(e) {
          let t;

          let n;

          const r = this._getEvents();
          if (e instanceof RegExp)
            for (n in ((t = {}), r)) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
          else t = r[e] || (r[e] = []);
          return t;
        }),
          (i.flattenListeners = function(e) {
            let t;

            const n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
          }),
          (i.getListenersAsObject = function(e) {
            let t;

            const n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n;
          }),
          (i.addListener = function(e, t) {
            if (
              !(function e(t) {
                return (
                  typeof t === 'function' ||
                  t instanceof RegExp ||
                  (!(!t || typeof t !== 'object') && e(t.listener))
                );
              })(t)
            )
              throw new TypeError('listener must be a function');
            let n;

            const r = this.getListenersAsObject(e);

            const o = typeof t === 'object';
            for (n in r)
              r.hasOwnProperty(n) &&
                a(r[n], t) === -1 &&
                r[n].push(o ? t : { listener: t, once: !1 });
            return this;
          }),
          (i.on = c('addListener')),
          (i.addOnceListener = function(e, t) {
            return this.addListener(e, { listener: t, once: !0 });
          }),
          (i.once = c('addOnceListener')),
          (i.defineEvent = function(e) {
            return this.getListeners(e), this;
          }),
          (i.defineEvents = function(e) {
            for (let t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
          }),
          (i.removeListener = function(e, t) {
            let n;

            let r;

            const o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && (n = a(o[r], t)) !== -1 && o[r].splice(n, 1);
            return this;
          }),
          (i.off = c('removeListener')),
          (i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t);
          }),
          (i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t);
          }),
          (i.manipulateListeners = function(e, t, n) {
            let r;

            let o;

            const i = e ? this.removeListener : this.addListener;

            const s = e ? this.removeListeners : this.addListeners;
            if (typeof t !== 'object' || t instanceof RegExp)
              for (r = n.length; r--; ) i.call(this, t, n[r]);
            else
              for (r in t)
                t.hasOwnProperty(r) &&
                  (o = t[r]) &&
                  (typeof o === 'function' ? i.call(this, r, o) : s.call(this, r, o));
            return this;
          }),
          (i.removeEvent = function(e) {
            let t;

            const n = typeof e;

            const r = this._getEvents();
            if (n === 'string') delete r[e];
            else if (e instanceof RegExp)
              for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this;
          }),
          (i.removeAllListeners = c('removeEvent')),
          (i.emitEvent = function(e, t) {
            let n;

            let r;

            let o;

            let i;

            const s = this.getListenersAsObject(e);
            for (i in s)
              if (s.hasOwnProperty(i))
                for (n = s[i].slice(0), o = 0; o < n.length; o++)
                  !0 === (r = n[o]).once && this.removeListener(e, r.listener),
                    r.listener.apply(this, t || []) === this._getOnceReturnValue() &&
                      this.removeListener(e, r.listener);
            return this;
          }),
          (i.trigger = c('emitEvent')),
          (i.emit = function(e) {
            const t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
          }),
          (i.setOnceReturnValue = function(e) {
            return (this._onceReturnValue = e), this;
          }),
          (i._getOnceReturnValue = function() {
            return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
          }),
          (i._getEvents = function() {
            return this._events || (this._events = {});
          }),
          (o.noConflict = function() {
            return (t.EventEmitter = s), o;
          }),
          void 0 ===
            (r = function() {
              return o;
            }.call(t, n, t, e)) || (e.exports = r);
      })(typeof window !== 'undefined' ? window : this || {});
    },
    function(e, t, n) {
      const r = n(24);

      const o = n(107);
      function i(e) {
        e.onuploading && this.on('uploading', e.onuploading), o.call(this, e);
      }
      const s = o.prototype;

      const a = (i.prototype = Object.create(s));
      (a.doSend = function() {
        const e = this.options;

        const t = e.headers;

        const n = (this.xhr = new XMLHttpRequest());
        if (t['Content-Type'] === 'multipart/form-data') {
          delete t['Content-Type'],
            (n.upload.onprogress = this.onProgress.bind(this)),
            (n.upload.onload = this.onProgress.bind(this));
          const o = e.data;
          (e.data = new window.FormData()),
            o &&
              r.getKeys(o, e.putFileAtEnd).forEach(t => {
                const n = o[t];
                n.tagName && n.tagName.toUpperCase() === 'INPUT'
                  ? n.type === 'file' &&
                    [].forEach.call(n.files, t => {
                      e.data.append(
                        r.dataset(n, 'name') || n.name || t.name || `file-${r.uniqueID()}`,
                        t
                      );
                    })
                  : e.data.append(t, n);
              });
        }
        (n.onreadystatechange = this.onStateChange.bind(this)),
          e.timeout !== 0 && (this.timer = setTimeout(this.onTimeout.bind(this), e.timeout)),
          n.open(e.method, e.url, !e.sync),
          Object.keys(t).forEach(e => {
            n.setRequestHeader(e, t[e]);
          }),
          e.cookie && 'withCredentials' in n && (n.withCredentials = !0),
          n.send(e.data),
          this.afterSend();
      }),
        (a.onProgress = function(e) {
          e.lengthComputable && e.loaded <= e.total && this.emit('uploading', e);
        }),
        (a.onStateChange = function() {
          const e = this.xhr;
          e.readyState === 4 && this.onLoad({ status: e.status, result: e.responseText || '' });
        }),
        (a.getResponseHeader = function(e) {
          const t = this.xhr;
          return t ? t.getResponseHeader(e) : '';
        }),
        (a.destroy = function() {
          clearTimeout(this.timer);
          try {
            (this.xhr.onreadystatechange = r.f), this.xhr.abort();
          } catch (e) {
            console.error('ignore error ajax destroy,', e);
          }
          s.destroy.call(this);
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(15);

      const o = n(0);
      n(59);
      function i() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o.merge(this, {
          options: e,
          debug: !1,
          api: 'log',
          style: 'color:blue;',
          log: o.emptyFunc,
          info: o.emptyFunc,
          warn: o.emptyFunc,
          error: o.emptyFunc,
        }),
          (this.prefix = e.prefix || ''),
          this.setDebug(e.debug);
      }
      const s = i.prototype;

      const a = ['Chrome', 'Safari', 'Firefox'];
      (s.setDebug = function() {
        const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

        const t = this;
        if (((t.debug = e), e.style && (t.style = e.style), t.debug && o.exist(console))) {
          const n = console;
          (t.debug = function() {
            const e = t.formatArgs(arguments);
            a.indexOf(r.name) !== -1 &&
              o.isString(e[0]) &&
              ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
              t._log('debug', e);
          }),
            (t.log = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                o.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('log', e);
            }),
            (t.info = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                o.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('info', e);
            }),
            (t.warn = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                o.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('warn', e);
            }),
            (t.error = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                o.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('error', e);
            }),
            (t._log = function(e, r) {
              const i = t.options.logFunc;

              let s = null;
              if (i && (i[e] && (s = i[e]), o.isFunction(s))) s.apply(i, r);
              else if (n[e])
                try {
                  n[e].apply ? t.chrome(e, r) : t.ie(e, r);
                } catch (e) {}
            }),
            (t.chrome = function(e, o) {
              a.indexOf(r.name) !== -1 ? n[e](...o) : t.ie(e, o);
            }),
            (t.ie = function(e, t) {
              t.forEach(t => {
                n[e](JSON.stringify(t, null, 4));
              });
            });
        }
      }),
        (s.formatArgs = function(e) {
          e = [].slice.call(e, 0);
          const t = new Date();

          const n = `[NIM LOG ${c(t.getMonth() + 1)}-${c(t.getDate())} ${c(t.getHours())}:${c(
            t.getMinutes()
          )}:${c(t.getSeconds())}:${c(t.getMilliseconds(), 3)} ${this.prefix.toUpperCase()}]  `;
          return (
            o.isString(e[0]) ? (e[0] = n + e[0]) : e.splice(0, 0, n),
            e.forEach((t, n) => {
              (o.isArray(t) || o.isObject(t)) && (e[n] = o.simpleClone(t));
            }),
            e
          );
        });
      var c = function(e, t) {
        t = t || 2;
        for (var n = `${e}`; n.length < t; ) n = `0${n}`;
        return n;
      };
      e.exports = i;
    },
    function(e, t, n) {
      const r = n(4);
      typeof window !== 'undefined' &&
        (window.console ||
          r.isWeixinApp ||
          (window.console = {
            log() {},
            info() {},
            warn() {},
            error() {},
          }));
    },
    function(e, t) {
      let n;

      let r;

      const o = (e.exports = {});
      function i() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = typeof setTimeout === 'function' ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = typeof clearTimeout === 'function' ? clearTimeout : s;
        } catch (e) {
          r = s;
        }
      })();
      let c;

      let u = [];

      let l = !1;

      let p = -1;
      function m() {
        l && c && ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && d());
      }
      function d() {
        if (!l) {
          const e = a(m);
          l = !0;
          for (let t = u.length; t; ) {
            for (c = u, u = []; ++p < t; ) c && c[p].run();
            (p = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function f(e, t) {
        (this.fun = e), (this.array = t);
      }
      function h() {}
      (o.nextTick = function(e) {
        const t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (let n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new f(e, t)), u.length !== 1 || l || a(d);
      }),
        (f.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = h),
        (o.addListener = h),
        (o.once = h),
        (o.off = h),
        (o.removeListener = h),
        (o.removeAllListeners = h),
        (o.emit = h),
        (o.prependListener = h),
        (o.prependOnceListener = h),
        (o.listeners = function(e) {
          return [];
        }),
        (o.binding = function(e) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function() {
          return '/';
        }),
        (o.chdir = function(e) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function() {
          return 0;
        });
    },
    function(e, t, n) {
      (function(t, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
        !(function(t, n) {
          e.exports = n();
        })(0, () => {
          function e(e) {
            return typeof e === 'function';
          }
          const r = Array.isArray
            ? Array.isArray
            : function(e) {
                return Object.prototype.toString.call(e) === '[object Array]';
              };

          let o = 0;

          let i = void 0;

          let s = void 0;

          let a = function(e, t) {
            (f[o] = e), (f[o + 1] = t), (o += 2) === 2 && (s ? s(h) : y());
          };
          const c = typeof window !== 'undefined' ? window : void 0;

          const u = c || {};

          const l = u.MutationObserver || u.WebKitMutationObserver;

          const p =
            typeof self === 'undefined' &&
            void 0 !== t &&
            {}.toString.call(t) === '[object process]';

          const m =
            typeof Uint8ClampedArray !== 'undefined' &&
            typeof importScripts !== 'undefined' &&
            typeof MessageChannel !== 'undefined';
          function d() {
            const e = setTimeout;
            return function() {
              return e(h, 1);
            };
          }
          var f = new Array(1e3);
          function h() {
            for (let e = 0; e < o; e += 2) {
              (0, f[e])(f[e + 1]), (f[e] = void 0), (f[e + 1] = void 0);
            }
            o = 0;
          }
          var y = void 0;
          function g(e, t) {
            const n = this;

            const r = new this.constructor(k);
            void 0 === r[b] && F(r);
            const o = n._state;
            if (o) {
              const i = arguments[o - 1];
              a(() => {
                return j(o, r, i, n._result);
              });
            } else E(n, r, e, t);
            return r;
          }
          function v(e) {
            if (e && typeof e === 'object' && e.constructor === this) return e;
            const t = new this(k);
            return _(t, e), t;
          }
          y = p
            ? function() {
                return t.nextTick(h);
              }
            : l
              ? (function() {
                  let e = 0;

                  const t = new l(h);

                  const n = document.createTextNode('');
                  return (
                    t.observe(n, { characterData: !0 }),
                    function() {
                      n.data = e = ++e % 2;
                    }
                  );
                })()
              : m
                ? (function() {
                    const e = new MessageChannel();
                    return (
                      (e.port1.onmessage = h),
                      function() {
                        return e.port2.postMessage(0);
                      }
                    );
                  })()
                : void 0 === c
                  ? (function() {
                      try {
                        const e = Function('return this')().require('vertx');
                        return void 0 !== (i = e.runOnLoop || e.runOnContext)
                          ? function() {
                              i(h);
                            }
                          : d();
                      } catch (e) {
                        return d();
                      }
                    })()
                  : d();
          var b = Math.random()
            .toString(36)
            .substring(2);
          function k() {}
          const T = void 0;

          const M = 1;

          const S = 2;

          const x = { error: null };
          function w(e) {
            try {
              return e.then;
            } catch (e) {
              return (x.error = e), x;
            }
          }
          function C(t, n, r) {
            n.constructor === t.constructor && r === g && n.constructor.resolve === v
              ? (function(e, t) {
                  t._state === M
                    ? P(e, t._result)
                    : t._state === S
                      ? I(e, t._result)
                      : E(
                          t,
                          void 0,
                          t => {
                            return _(e, t);
                          },
                          t => {
                            return I(e, t);
                          }
                        );
                })(t, n)
              : r === x
                ? (I(t, x.error), (x.error = null))
                : void 0 === r
                  ? P(t, n)
                  : e(r)
                    ? (function(e, t, n) {
                        a(e => {
                          let r = !1;

                          const o = (function(e, t, n, r) {
                            try {
                              e.call(t, n, r);
                            } catch (e) {
                              return e;
                            }
                          })(
                            n,
                            t,
                            n => {
                              r || ((r = !0), t !== n ? _(e, n) : P(e, n));
                            },
                            t => {
                              r || ((r = !0), I(e, t));
                            },
                            e._label
                          );
                          !r && o && ((r = !0), I(e, o));
                        }, e);
                      })(t, n, r)
                    : P(t, n);
          }
          function _(e, t) {
            e === t
              ? I(e, new TypeError('You cannot resolve a promise with itself'))
              : !(function(e) {
                  const t = typeof e;
                  return e !== null && (t === 'object' || t === 'function');
                })(t)
                ? P(e, t)
                : C(e, t, w(t));
          }
          function O(e) {
            e._onerror && e._onerror(e._result), A(e);
          }
          function P(e, t) {
            e._state === T &&
              ((e._result = t), (e._state = M), e._subscribers.length !== 0 && a(A, e));
          }
          function I(e, t) {
            e._state === T && ((e._state = S), (e._result = t), a(O, e));
          }
          function E(e, t, n, r) {
            const o = e._subscribers;

            const i = o.length;
            (e._onerror = null),
              (o[i] = t),
              (o[i + M] = n),
              (o[i + S] = r),
              i === 0 && e._state && a(A, e);
          }
          function A(e) {
            const t = e._subscribers;

            const n = e._state;
            if (t.length !== 0) {
              for (let r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3)
                (r = t[s]), (o = t[s + n]), r ? j(n, r, o, i) : o(i);
              e._subscribers.length = 0;
            }
          }
          function j(t, n, r, o) {
            const i = e(r);

            let s = void 0;

            let a = void 0;

            let c = void 0;

            let u = void 0;
            if (i) {
              if (
                ((s = (function(e, t) {
                  try {
                    return e(t);
                  } catch (e) {
                    return (x.error = e), x;
                  }
                })(r, o)) === x
                  ? ((u = !0), (a = s.error), (s.error = null))
                  : (c = !0),
                n === s)
              )
                return void I(
                  n,
                  new TypeError('A promises callback cannot return that same promise.')
                );
            } else (s = o), (c = !0);
            n._state !== T ||
              (i && c ? _(n, s) : u ? I(n, a) : t === M ? P(n, s) : t === S && I(n, s));
          }
          let N = 0;
          function F(e) {
            (e[b] = N++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
          }
          const R = (function() {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(k)),
                this.promise[b] || F(this.promise),
                r(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    this.length === 0
                      ? P(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        this._remaining === 0 && P(this.promise, this._result)))
                  : I(this.promise, new Error('Array Methods must be provided an Array'));
            }
            return (
              (e.prototype._enumerate = function(e) {
                for (let t = 0; this._state === T && t < e.length; t++) this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function(e, t) {
                const n = this._instanceConstructor;

                const r = n.resolve;
                if (r === v) {
                  const o = w(e);
                  if (o === g && e._state !== T) this._settledAt(e._state, t, e._result);
                  else if (typeof o !== 'function') this._remaining--, (this._result[t] = e);
                  else if (n === L) {
                    const i = new n(k);
                    C(i, e, o), this._willSettleAt(i, t);
                  } else
                    this._willSettleAt(
                      new n(t => {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(r(e), t);
              }),
              (e.prototype._settledAt = function(e, t, n) {
                const r = this.promise;
                r._state === T && (this._remaining--, e === S ? I(r, n) : (this._result[t] = n)),
                  this._remaining === 0 && P(r, this._result);
              }),
              (e.prototype._willSettleAt = function(e, t) {
                const n = this;
                E(
                  e,
                  void 0,
                  e => {
                    return n._settledAt(M, t, e);
                  },
                  e => {
                    return n._settledAt(S, t, e);
                  }
                );
              }),
              e
            );
          })();
          var L = (function() {
            function e(t) {
              (this[b] = N++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                k !== t &&
                  (typeof t !== 'function' &&
                    (function() {
                      throw new TypeError(
                        'You must pass a resolver function as the first argument to the promise constructor'
                      );
                    })(),
                  this instanceof e
                    ? (function(e, t) {
                        try {
                          t(
                            t => {
                              _(e, t);
                            },
                            t => {
                              I(e, t);
                            }
                          );
                        } catch (t) {
                          I(e, t);
                        }
                      })(this, t)
                    : (function() {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function(e) {
                return this.then(null, e);
              }),
              (e.prototype.finally = function(e) {
                const t = this.constructor;
                return this.then(
                  n => {
                    return t.resolve(e()).then(() => {
                      return n;
                    });
                  },
                  n => {
                    return t.resolve(e()).then(() => {
                      throw n;
                    });
                  }
                );
              }),
              e
            );
          })();
          return (
            (L.prototype.then = g),
            (L.all = function(e) {
              return new R(this, e).promise;
            }),
            (L.race = function(e) {
              const t = this;
              return r(e)
                ? new t((n, r) => {
                    for (let o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r);
                  })
                : new t((e, t) => {
                    return t(new TypeError('You must pass an array to race.'));
                  });
            }),
            (L.resolve = v),
            (L.reject = function(e) {
              const t = new this(k);
              return I(t, e), t;
            }),
            (L._setScheduler = function(e) {
              s = e;
            }),
            (L._setAsap = function(e) {
              a = e;
            }),
            (L._asap = a),
            (L.polyfill = function() {
              let e = void 0;
              if (void 0 !== n) e = n;
              else if (typeof self !== 'undefined') e = self;
              else
                try {
                  e = Function('return this')();
                } catch (e) {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment'
                  );
                }
              const t = e.Promise;
              if (t) {
                let r = null;
                try {
                  r = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if (r === '[object Promise]' && !t.cast) return;
              }
              e.Promise = L;
            }),
            (L.Promise = L),
            L
          );
        });
      }.call(this, n(207), n(30)));
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
    function(e, t, n) {
      const r = n(116).fn;

      const o = n(0);
      (r.queueOffer = function(e) {
        o.verifyOptions(e, 'elementKey elementValue', 'msg::queueOffer'),
          e.transient ? (e.transient = !0) : (e.transient = !1),
          this.processCallback(e),
          this.sendCmd('queueOffer', e, e.callback);
      }),
        (r.queuePoll = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (e.elementKey = e.elementKey || ''),
            this.processCallback(e),
            this.sendCmd('queuePoll', e, e.callback);
        }),
        (r.queueList = function(e) {
          this.processCallback(e), this.sendCmd('queueList', e, e.callback);
        }),
        (r.peak = function(e) {
          this.processCallback(e), this.sendCmd('peak', e, e.callback);
        }),
        (r.queueDrop = function(e) {
          this.processCallback(e), this.sendCmd('queueDrop', e, e.callback);
        });
    },
    function(e, t, n) {
      const r = n(0);

      const o = r.undef;

      const i = r.verifyOptions;

      const s = r.verifyParamType;

      const a = n(141);

      const c = n(116).fn;
      (c.updateMyChatroomMemberInfo = function(e) {
        i(e, 'member needNotify', 'member::updateMyChatroomMemberInfo'),
          s('needNotify', e.needNotify, 'boolean', 'member::updateMyChatroomMemberInfo'),
          (e.needSave = e.needSave || !1),
          s('needSave', e.needSave, 'boolean', 'member::updateMyChatroomMemberInfo'),
          this.processCustom(e),
          this.processCallback(e),
          (e.chatroomMember = new a(e.member)),
          this.sendCmd('updateMyChatroomMemberInfo', e);
      }),
        (c.getChatroomMembers = function(e) {
          i(e, 'guest', 'member::getChatroomMembers'),
            s('guest', e.guest, 'boolean', 'member::getChatroomMembers'),
            o(e.time) ? (e.time = 0) : s('time', e.time, 'number', 'member::getChatroomMembers'),
            o(e.limit)
              ? (e.limit = 100)
              : s('limit', e.limit, 'number', 'member::getChatroomMembers'),
            this.processCallback(e),
            (e.type = e.guest ? 1 : 0),
            !e.guest && e.onlyOnline && (e.type = 2),
            this.sendCmd('getChatroomMembers', e);
        }),
        (c.getChatroomMembersInfo = function(e) {
          i(e, 'accounts', 'member::getChatroomMembersInfo'),
            s('accounts', e.accounts, 'array', 'member::getChatroomMembersInfo'),
            this.processCallback(e),
            this.sendCmd('getChatroomMembersInfo', e);
        }),
        (c.markChatroomManager = function(e) {
          (e.type = 1), this.markChatroomMember(e);
        }),
        (c.markChatroomCommonMember = function(e) {
          (e.type = 2), this.markChatroomMember(e);
        }),
        (c.markChatroomBlacklist = function(e) {
          (e.type = -1), this.markChatroomMember(e);
        }),
        (c.markChatroomGaglist = function(e) {
          (e.type = -2), this.markChatroomMember(e);
        }),
        (c.markChatroomMember = function(e) {
          i(e, 'account type isAdd', 'member::markChatroomMember'),
            s('isAdd', e.isAdd, 'boolean', 'member::markChatroomMember'),
            o(e.level)
              ? (e.level = 0)
              : s('level', e.level, 'number', 'member::markChatroomMember');
          this.processCustom(e), this.processCallback(e), this.sendCmd('markChatroomMember', e);
        }),
        (c.kickChatroomMember = function(e) {
          i(e, 'account', 'member::kickChatroomMember'),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd('kickChatroomMember', e);
        }),
        (c.updateChatroomMemberTempMute = function(e) {
          i(e, 'account duration needNotify', 'member::updateChatroomMemberTempMute'),
            s('duration', e.duration, 'number', 'member::updateChatroomMemberTempMute'),
            s('needNotify', e.needNotify, 'boolean', 'member::updateChatroomMemberTempMute'),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd('updateChatroomMemberTempMute', e);
        }),
        (c.getRobotList = function(e) {
          o(e.timetag) && (e.timetag = 0), this.processCallback(e), this.sendCmd('syncRobot', e);
        });
    },
    function(e, t, n) {
      const r = n(0);

      const o = r.undef;

      const i = n(116).fn;
      i.beforeSendMsg = function(e) {
        e.cmd = 'sendMsg';
      };
      const s = {
        text: 0,
        image: 1,
        audio: 2,
        video: 3,
        geo: 4,
        notification: 5,
        file: 6,
        tip: 10,
        robot: 11,
        custom: 100,
      };
      i.getHistoryMsgs = function(e) {
        r.verifyOptions(e),
          o(e.timetag)
            ? (e.timetag = 0)
            : r.verifyParamType('timetag', e.timetag, 'number', 'msg::getHistoryMsgs'),
          o(e.limit)
            ? (e.limit = 100)
            : r.verifyParamType('limit', e.limit, 'number', 'msg::getHistoryMsgs'),
          o(e.reverse)
            ? (e.reverse = !1)
            : r.verifyParamType('reverse', e.reverse, 'boolean', 'msg::getHistoryMsgs'),
          o(e.msgTypes)
            ? (e.msgTypes = [])
            : Array.isArray(e.msgTypes)
              ? ((e.msgTypes = e.msgTypes.map(e => {
                  return s[e];
                })),
                (e.msgTypes = e.msgTypes.filter(e => {
                  return typeof e === 'number';
                })))
              : typeof s[e.msgTypes] === 'number'
                ? (e.msgTypes = [s[e.msgTypes]])
                : (e.msgTypes = []);
        this.processCallback(e),
          this.sendCmd('getHistoryMsgs', e, (t, n, r) => {
            Array.isArray(r) &&
              (r = r.map(e => {
                return s[e.type] && (e.type = s[e.type]), e;
              })),
              e.callback(t, n, r);
          });
      };
    },
    function(e, t, n) {
      const r = n(65);

      const o = n(0);

      const i = { welcome: '00', text: '01', link: '03' };

      const s = { '01': 'text', '02': 'image', '03': 'answer', 11: 'template' };
      function a(e) {
        o.verifyOptions(e, 'content', 'msg::RobotMessage');
        let t = e.content;
        switch (t.type) {
          case 'welcome':
            o.undef(e.body) && (this.body = '欢迎消息');
            break;
          case 'text':
            o.verifyOptions(t, 'content', 'msg::RobotMessage'),
              o.undef(e.body) && (this.body = t.content);
            break;
          case 'link':
            o.verifyOptions(t, 'target', 'msg::RobotMessage');
        }
        t.type && (t.type = i[t.type]),
          (t = { param: t, robotAccid: e.robotAccid }),
          (this.attach = JSON.stringify(t)),
          (e.type = 'robot'),
          r.call(this, e);
      }
      (a.prototype = Object.create(r.prototype)),
        (a.reverse = function(e) {
          const t = r.reverse(e);
          if (t.type === 'robot') {
            let n = JSON.parse(e.attach);
            if ((n.param && (n.param.type = s[n.param.type] || 'unknown'), n.robotMsg)) {
              const i = (n = o.merge(n, n.robotMsg)).message;
              n.flag === 'bot'
                ? (n.message = i.map(e => {
                    return (e.type = s[e.type] || 'unknown'), e;
                  }))
                : n.flag,
                delete n.robotMsg;
            }
            t.content = n;
          }
          return t;
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(65);

      const o = n(0);
      function i(e) {
        o.verifyOptions(e, 'tip', 'msg::TipMessage'),
          (e.type = 'tip'),
          r.call(this, e),
          (this.attach = e.tip);
      }
      (i.prototype = Object.create(r.prototype)),
        (i.reverse = function(e) {
          const t = r.reverse(e);
          return (t.tip = e.attach), t;
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(65);

      const o = n(0);
      function i(e) {
        o.verifyOptions(e, 'content', 'msg::CustomMessage'),
          (e.type = 'custom'),
          r.call(this, e),
          typeof e.content !== 'string' && (e.content = JSON.stringify(e.content)),
          (this.attach = e.content);
      }
      (i.prototype = Object.create(r.prototype)),
        (i.reverse = function(e) {
          const t = r.reverse(e);
          return (t.content = e.attach), t;
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(0).notundef;

      const o = n(65);

      const i = {
        301: 'memberEnter',
        302: 'memberExit',
        303: 'blackMember',
        304: 'unblackMember',
        305: 'gagMember',
        306: 'ungagMember',
        307: 'addManager',
        308: 'removeManager',
        309: 'addCommon',
        310: 'removeCommon',
        311: 'closeChatroom',
        312: 'updateChatroom',
        313: 'kickMember',
        314: 'addTempMute',
        315: 'removeTempMute',
        316: 'updateMemberInfo',
        317: 'updateQueue',
        318: 'muteRoom',
        319: 'unmuteRoom',
        320: 'batchUpdateQueue',
      };
      function s() {}
      (s.prototype = Object.create(o.prototype)),
        (s.reverse = function(e) {
          const t = o.reverse(e);
          if (((e.attach = e.attach ? `${e.attach}` : ''), e.attach)) {
            const n = JSON.parse(e.attach);
            if (((t.attach = { type: i[n.id] }), r(n.data))) {
              const s = n.data;
              if (
                (r(s.operator) && (t.attach.from = s.operator),
                r(s.opeNick) && (t.attach.fromNick = s.opeNick),
                r(s.target) && (t.attach.to = s.target),
                r(s.tarNick) && (t.attach.toNick = s.tarNick),
                r(s.muteDuration) && (t.attach.duration = parseInt(s.muteDuration, 10)),
                t.attach.type === 'memberEnter' &&
                  (r(s.muted) ? (t.attach.gaged = +s.muted == 1) : (t.attach.gaged = !1),
                  r(s.tempMuted)
                    ? (t.attach.tempMuted = +s.tempMuted == 1)
                    : (t.attach.tempMuted = !1),
                  r(s.muteTtl)
                    ? (t.attach.tempMuteDuration = +s.muteTtl)
                    : (t.attach.tempMuteDuration = 0)),
                r(s.ext) && (t.attach.custom = s.ext),
                r(s.queueChange))
              ) {
                const a = JSON.parse(s.queueChange);
                switch (a._e) {
                  case 'OFFER':
                    t.attach.queueChange = {
                      type: 'OFFER',
                      elementKey: a.key,
                      elementValue: a.content,
                    };
                    break;
                  case 'POLL':
                    t.attach.queueChange = {
                      type: 'POLL',
                      elementKey: a.key,
                      elementValue: a.content,
                    };
                    break;
                  case 'DROP':
                    t.attach.queueChange = { type: 'DROP' };
                    break;
                  case 'PARTCLEAR':
                    t.attach.queueChange = { type: 'PARTCLEAR', elementKv: a.kvObject };
                }
              }
            }
          } else t.attach = {};
          return t;
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(65);

      const o = n(0);
      function i(e) {
        (e.type = 'geo'),
          o.verifyOptions(e, 'geo', 'msg::GeoMessage'),
          o.verifyOptions(e.geo, 'lng lat title', !0, 'geo.', 'msg::GeoMessage'),
          o.verifyParamType('geo.lng', e.geo.lng, 'number', 'msg::GeoMessage'),
          o.verifyParamType('geo.lat', e.geo.lat, 'number', 'msg::GeoMessage'),
          o.verifyParamType('geo.title', e.geo.title, 'string', 'msg::GeoMessage'),
          r.call(this, e),
          (this.attach = JSON.stringify(e.geo));
      }
      (i.prototype = Object.create(r.prototype)),
        (i.reverse = function(e) {
          const t = r.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.geo = e.attach ? JSON.parse(e.attach) : {}),
            t
          );
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(115);

      const o = n(0);
      function i() {}
      (i.prototype = Object.create(r.prototype)),
        (i.verifyFile = function(e, t) {
          o.verifyOptions(e, 'dur w h', !0, 'file.', t);
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(115);

      const o = n(0);
      function i() {}
      (i.prototype = Object.create(r.prototype)),
        (i.verifyFile = function(e, t) {
          o.verifyOptions(e, 'dur', !0, 'file.', t);
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(0);

      const o = n(115);
      function i() {}
      (i.prototype = Object.create(o.prototype)),
        (i.verifyFile = function(e, t) {
          r.verifyOptions(e, 'w h', !0, 'file.', t);
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(65);

      const o = n(0);
      function i(e) {
        o.verifyOptions(e, 'text', 'msg::TextMessage'),
          (e.type = 'text'),
          r.call(this, e),
          (this.attach = e.text),
          (this.body = '');
      }
      (i.prototype = Object.create(r.prototype)),
        (i.reverse = function(e) {
          const t = r.reverse(e);
          return (t.text = e.attach), t;
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(0);

      const o = function(e) {
        this.account = e.account;
      };

      const i = o.prototype;

      const s = (i.Message = n(65));

      const a = (i.TextMessage = n(280));

      const c = (i.FileMessage = n(115));

      const u = (i.GeoMessage = n(276));

      const l = (i.NotificationMessage = n(275));

      const p = (i.CustomMessage = n(274));

      const m = (i.TipMessage = n(273));

      const d = (i.RobotMessage = n(272));
      (i.validTypes = s.validTypes),
        (i.reverse = function(e) {
          let t;
          switch (s.getType(e)) {
            case 'text':
              t = a.reverse(e);
              break;
            case 'image':
            case 'audio':
            case 'video':
            case 'file':
              t = c.reverse(e);
              break;
            case 'geo':
              t = u.reverse(e);
              break;
            case 'notification':
              t = l.reverse(e);
              break;
            case 'custom':
              t = p.reverse(e);
              break;
            case 'tip':
              t = m.reverse(e);
              break;
            case 'robot':
              t = d.reverse(e);
              break;
            default:
              t = s.reverse(e);
          }
          return s.setExtra(t, this.account), t;
        }),
        (i.reverseMsgs = function(e, t) {
          let n;

          let o;

          const i = this;
          return e.map(e => {
            return (
              (e = i.reverse(e)),
              t &&
                ((n = t.modifyObj) && (e = r.merge(e, n)),
                (o = t.mapper),
                r.isFunction(o) && (e = o(e))),
              e
            );
          });
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(101).fn;

      const o = n(141);
      (r.onChatroomMembersInfo = r.onChatroomMembers = function(e) {
        e.error || (e.obj.members = o.reverseMembers(e.content.members));
      }),
        (r.onMarkChatroomMember = function(e) {
          e.error || (e.obj.member = o.reverse(e.content.chatroomMember));
        }),
        (r.onSyncRobot = function(e) {
          !e.error && this.options.onrobots
            ? this.options.onrobots(null, e.content)
            : this.ontions.onrobots(e.error, {});
        });
    },
    function(e, t, n) {
      const r = n(101).fn;

      const o = n(0);
      (r.completeMsg = function(e) {
        (e.chatroomId = this.chatroom.id),
          (e.from = this.options.account),
          (e.fromClientType = 'Web'),
          e.time || (e.time = +new Date());
      }),
        (r.onMsg = function(e) {
          const t = this.message.reverse(e.content.msg);
          this.checkMsgUnique(t) &&
            (this.msgBuffer.push(t), this.msgFlushTimer || this.startMsgFlushTimer());
        }),
        (r.startMsgFlushTimer = function() {
          const e = this;

          const t = e.options;
          e.msgFlushTimer = setTimeout(() => {
            const n = e.msgBuffer.splice(0, t.msgBufferSize);
            e.options.onmsgs(n),
              e.msgBuffer.length ? e.startMsgFlushTimer() : delete e.msgFlushTimer;
          }, t.msgBufferInterval);
        }),
        (r.checkMsgUnique = o.genCheckUniqueFunc('idClient')),
        (r.onSendMsg = function(e) {
          let t = e.obj.msg;
          e.error ? (t.status = 'fail') : ((t = e.content.msg).status = 'success'),
            (t = this.message.reverse(t)),
            (e.obj = t);
        }),
        (r.onHistoryMsgs = function(e) {
          e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs));
        });
    },
    function(e, t, n) {
      const r = n(101).fn;

      const o = n(43);

      const i = n(0);
      (r.assembleLogin = function() {
        const e = this.options;
        this.sdkSession = this.genSessionKey();
        let t = {
          appKey: e.appKey,
          account: e.account,
          deviceId: o.deviceId,
          chatroomId: e.chatroomId,
          session: this.sdkSession,
          appLogin: this.appLogin || 0,
        };
        return {
          type: 1,
          login: (t = i.merge(
            t,
            i.filterObj(
              e,
              'chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom isAnonymous'
            )
          )),
          imLogin: this.assembleIMLogin(),
        };
      }),
        (r.afterLogin = function(e) {
          const t = e.chatroom;
          (this.chatroom = t), this.notifyLogin();
        }),
        (r.kickedReasons = [
          '',
          'chatroomClosed',
          'managerKick',
          'samePlatformKick',
          'silentlyKick',
          'blacked',
        ]),
        (r.kickedMessages = [
          '',
          '聊天室关闭了',
          '被房主或者管理员踢出',
          '不允许同一个帐号在多个地方同时登录',
          '悄悄被踢',
          '被拉黑了',
        ]);
    },
    function(e, t, n) {
      n(101).fn.refreshSocketUrl = function() {
        (this.socketUrls = this.socketUrlsBackup.slice(0)),
          this.logger.info('link::refreshSocketUrl'),
          this.connectToUrl(this.getNextSocketUrl());
      };
    },
    function(e, t, n) {
      n(150);
      const r = n(116);
      n(142)(r), (e.exports = r);
    },
  ]);
});
