(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Home_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      routeName: "",
      click: 0,
      loginResponse: {},
      transitionName: ''
    };
  },
  methods: {
    active: function active() {
      this.click += 1;
      this.routeName = this.$route.name;

      if (this.click == 1) {
        if (this.routeName == "home.conversations") {
          this.routeName = "home.contacts";
        } else if (this.routeName == "home.contacts") {
          this.routeName = "home.conversations";
        }
      }
    },
    login: function login() {
      if (this.$store.getters.loginResponse.success !== undefined) {
        return this.$store.getters.loginResponse;
      } else {
        if (JSON.parse(sessionStorage.getItem('loginResponse')) !== undefined) {
          return JSON.parse(sessionStorage.getItem('loginResponse'));
        } else {
          return {
            'success': null,
            'message': null
          };
        }
      }
    },
    logout: function logout() {
      this.$store.dispatch('logout');
    }
  },
  watch: {
    '$route': function $route(to, from) {
      var start = from.name;
      var end = to.name;
      if (start == 'home.conversations' && end == 'home.contacts') this.transitionName = 'fade';
      if (start == 'home.contacts' && end == 'home.conversations') this.transitionName = 'fade';
    }
  },
  created: function created() {
    this.routeName = this.$route.name;
    this.loginResponse = this.login();

    if (this.loginResponse.success == null) {
      this.$router.push({
        name: 'login'
      });
    } //get the logged user information

  }
});

/***/ }),

/***/ "./resources/js/Components/Home/home.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/Home/home.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=6a8c9a58& */ "./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/Components/Home/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Home/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Home/home.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Home/home.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_6a8c9a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=6a8c9a58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/home.vue?vue&type=template&id=6a8c9a58& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mx-5 p-rel" },
    [
      _c("div", { staticClass: "sticky-top pt-5 bg-white z-999" }, [
        _c(
          "div",
          {
            staticClass:
              "w-100 d-flex justify-content-between align-items-center"
          },
          [
            _c("div", { staticClass: "text-black font-bold" }, [
              _vm._v("Welcome !! "),
              _c("span", { staticClass: "text-orange" }, [
                _vm._v(_vm._s(_vm.loginResponse.authUser.name))
              ])
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "btn btn-link font-bold text-orange cursor-pointer",
                on: { click: _vm.logout }
              },
              [_vm._v("Logout")]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("ul", { staticClass: "nav nav-tabs font-bold" }, [
          _c(
            "li",
            { staticClass: "w-50 text-center" },
            [
              _c(
                "router-link",
                {
                  class: [
                    _vm.routeName == "home.conversations" ? "active" : "",
                    "nav-link"
                  ],
                  attrs: { to: { name: "home.conversations" } },
                  nativeOn: {
                    click: function($event) {
                      return _vm.active()
                    }
                  }
                },
                [_vm._v("Conversations")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "w-50 text-center" },
            [
              _c(
                "router-link",
                {
                  class: [
                    _vm.routeName == "home.contacts" ? "active" : "",
                    "nav-link"
                  ],
                  attrs: { to: { name: "home.contacts" } },
                  nativeOn: {
                    click: function($event) {
                      return _vm.active()
                    }
                  }
                },
                [_vm._v("Contacts")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.transitionName, mode: "out-in" } },
        [_c("router-view", { attrs: { loginResponse: _vm.loginResponse } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "mb-4 p-rel" }, [
      _c("input", {
        staticClass: "form-control italic outline-none",
        attrs: { type: "text", placeholder: "Search or start new chat" }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "search bg-transparent border-none text-orange font-bold font-20 p-abs",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "fa fa-search" })]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);