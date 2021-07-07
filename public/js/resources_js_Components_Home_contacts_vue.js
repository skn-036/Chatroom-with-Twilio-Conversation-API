(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Home_contacts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      authUser: this.loginResponse.authUser,
      users: {}
    };
  },
  props: ['loginResponse'],
  methods: {
    conversation: function conversation(participants) {
      var _this = this;

      axios.post('/api/conversations/create', participants).then(function (response) {
        if (response.status == 200) {
          _this.$router.push({
            name: 'conversation.message.index',
            params: {
              sid: response.data.conversation[0].sid
            }
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    axios.get('/api/users').then(function (response) {
      _this2.users = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./resources/js/Components/Home/contacts.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Home/contacts.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.vue?vue&type=template&id=4006e470& */ "./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470&");
/* harmony import */ var _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.vue?vue&type=script&lang=js& */ "./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__.render,
  _contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Home/contacts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_4006e470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./contacts.vue?vue&type=template&id=4006e470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Home/contacts.vue?vue&type=template&id=4006e470& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container mt-4" },
    _vm._l(_vm.users, function(user, index) {
      return _c("div", { key: index, staticClass: "row mt-2 mb-4" }, [
        _vm._m(0, true),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-10 my-auto border-bottom-light pb-3 cursor-pointer",
            on: {
              click: function($event) {
                return _vm.conversation({ authUser: _vm.authUser, user: user })
              }
            }
          },
          [
            _c("div", {}, [
              _c("h5", { staticClass: "text-black" }, [
                _vm._v(_vm._s(user.name))
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [_c("p", [_vm._v(_vm._s(user.email))])])
          ]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "img-fluid round-full",
        attrs: {
          src: "https://picsum.photos/200",
          alt: "https://picsum.photos/200"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);