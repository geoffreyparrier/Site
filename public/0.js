(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'createApi',
  data: function data() {
    return {
      form: {
        url: String,
        count_id: 0,
        multiple_input: [{
          id: 0,
          title: "",
          type: "",
          value: ""
        }]
      },
      resApi: {}
    };
  },
  computed: {
    postData: function postData() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function postData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('/api', {
                // Default options are marked with *
                method: 'POST',
                // *GET, POST, PUT, DELETE, etc.
                mode: 'same-origin',
                // no-cors, *cors, same-origin
                cache: 'no-cache',
                // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: _defineProperty({
                  'Content-Type': 'application/json'
                }, "Content-Type", 'application/x-www-form-urlencoded'),
                // redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer',
                // no-referrer, *client
                body: JSON.stringify(this.form.multiple_input) // body data type must match "Content-Type" header

              }));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  methods: {
    submit: function submit() {
      this.$inertia.post('/users', this.form);
    },
    add_input: function add_input() {
      this.form.count_id++;
      this.form.multiple_input.push({
        id: this.form.count_id,
        title: "",
        type: "",
        value: ""
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "b-col",
        [
          _c("b-row", { attrs: { id: "form" } }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c("label", { attrs: { for: "url" } }, [_vm._v("Url")]),
                _vm._v(" "),
                _c("input", { attrs: { id: "url", model: _vm.form.url } }),
                _vm._v(" "),
                _c(
                  "table",
                  [
                    _c("tr", [
                      _c("th", [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("CSS Selector")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.form.multiple_input, function(input) {
                      return _c("tr", { key: input.id }, [
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.title,
                                expression: "input.title"
                              }
                            ],
                            attrs: { id: "input-" + input.id, type: "text" },
                            domProps: { value: input.title },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(input, "title", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.type,
                                  expression: "input.type"
                                }
                              ],
                              attrs: { id: "input-" + input.id },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    input,
                                    "type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "text" } }, [
                                _vm._v("Text")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "link" } }, [
                                _vm._v("Link")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.value,
                                expression: "input.value"
                              }
                            ],
                            attrs: {
                              id: "input-" + input.id,
                              type: "text",
                              rows: "1",
                              cols: "50"
                            },
                            domProps: { value: input.value },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(input, "value", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { attrs: { type: "button" }, on: { click: _vm.add_input } },
                  [_vm._v("add")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("b-row", { staticClass: "col", attrs: { id: "result" } }, [
            _vm._v("\n            " + _vm._s(_vm.resApi) + "\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("button", { attrs: { type: "submit" }, on: { click: _vm.postData } }, [
        _vm._v("Create API")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/CreateApi.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/CreateApi.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateApi.vue?vue&type=template&id=ed4bbdb6& */ "./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6&");
/* harmony import */ var _CreateApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateApi.vue?vue&type=script&lang=js& */ "./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/CreateApi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateApi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/CreateApi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateApi.vue?vue&type=template&id=ed4bbdb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/CreateApi.vue?vue&type=template&id=ed4bbdb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateApi_vue_vue_type_template_id_ed4bbdb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);