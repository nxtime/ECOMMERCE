"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartMenu)
/* harmony export */ });
/* harmony import */ var _components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7822);
/* harmony import */ var _components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2092);
/* harmony import */ var _utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4268);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2367);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8697);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_0__]);
_components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/no-unused-prop-types */









function CartMenu({
  products,
  removeItem
}) {
  const total = products.reduce((acc, {
    price,
    qty
  }) => acc + price * qty, 0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
      children: products.map(({
        id,
        image,
        name,
        price,
        qty
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "cart",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "cart__image",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: `/produto/${id}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                  src: image,
                  height: 24,
                  width: 24,
                  alt: name
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              type: "subtitle",
              children: name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "cart__price-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: ["Qtd: ", qty]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              type: "subtitle",
              children: (0,_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__/* .currency */ .A)(price)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "cart__price-total",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              type: "subtitle",
              children: "Total"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: (0,_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__/* .currency */ .A)(price * qty)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "cart__actions",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
              onClick: () => removeItem?.(id),
              icon: "fa:close",
              color: "secondary"
            })
          })]
        })
      }, id))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "cart__total",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        type: "subtitle",
        size: "md",
        children: ["Valor total: ", (0,_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__/* .currency */ .A)(total)]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/carrinho",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          color: "secondary",
          children: "Ver Carrinho"
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _design_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7554);


const StyledCartMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "styles__StyledCartMenu",
  componentId: "sc-110r15p-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;display:flex;flex-direction:column;align-items:center;gap:", ";top:4rem;right:0;padding:1rem;z-index:20;background-color:", ";& > ul{max-height:15rem;background-color:", ";overflow:auto;& > li{width:100%;& .cart{display:flex;padding:0.5rem;align-items:center;justify-content:space-between;gap:", ";&:hover{background-color:", ";color:", ";}&__image{width:2.5rem;height:2.5rem;cursor:pointer;&:hover{opacity:0.7;}& a > span{width:100% !important;height:100% !important;}}&__price-content,&__price-total{display:flex;flex-direction:column;align-items:center;}}}}", ""], theme.sizing.sm, theme.colors["primary-300"], theme.colors["primary-500"], theme.sizing.sm, theme.colors["primary-700"], theme.colors["primary-100"], _design_mixins__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mobile.standard */ .Z.mobile.standard`
        left: auto;
        right: unset;
        left: 50%;
        transform: translateX(-50%) !important;
        // width: fit-content;
        // margin-inline: auto;
        `));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCartMenu);

/***/ }),

/***/ 9128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_navlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5390);
/* harmony import */ var _components_organisms_Submenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6357);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2367);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5566);
/* harmony import */ var _components_molecules_CartMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3954);
/* harmony import */ var _components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2092);
/* harmony import */ var _store_userCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2028);
/* harmony import */ var _lib_get_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1672);
/* harmony import */ var _components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7822);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_5__, _components_molecules_CartMenu__WEBPACK_IMPORTED_MODULE_6__, _store_userCart__WEBPACK_IMPORTED_MODULE_8__, _lib_get_products__WEBPACK_IMPORTED_MODULE_9__, _components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_10__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_5__, _components_molecules_CartMenu__WEBPACK_IMPORTED_MODULE_6__, _store_userCart__WEBPACK_IMPORTED_MODULE_8__, _lib_get_products__WEBPACK_IMPORTED_MODULE_9__, _components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/style-prop-object */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-expressions */















function Header() {
  const {
    products
  } = (0,_store_userCart__WEBPACK_IMPORTED_MODULE_8__/* .userCartStore */ .Z)(state => state);
  const removeFromCart = (0,_store_userCart__WEBPACK_IMPORTED_MODULE_8__/* .userCartStore */ .Z)(state => state.removeFromCart); // console.log("aqui", products);

  const {
    0: cartItems,
    1: setCartItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: currentSelected,
    1: setCurrentSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isCart,
    1: setIsCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isBrowser) setIsBrowser(true);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const productsData = products.map(value => _objectSpread(_objectSpread({}, value), (0,_lib_get_products__WEBPACK_IMPORTED_MODULE_9__/* .getProductByID */ .ax)(value.id)));
    setCartItems(productsData); // console.log(productsData);
    // return () => products;
  }, [JSON.stringify(products)]);

  const removeItemFromCart = id => {
    cartItems.length === 1 && setIsCart(false);
    removeFromCart(id.toString());
  };

  if (!isBrowser) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    onMouseLeave: () => setCurrentSelected(null),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("nav", {
      className: "header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          className: "header__logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h2", {
            children: "DudaShop"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "header__action",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "nav-item cart",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            style: "display: flex; gap: 0.5rem",
            color: isCart ? "secondary" : "primary",
            onClick: () => setIsCart(prev => cartItems.length > 0 ? !prev : prev),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
              icon: "eva:shopping-cart-fill"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              children: ["(", cartItems.length, ")"]
            })]
          }), isCart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_molecules_CartMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            products: cartItems,
            removeItem: itemId => removeItemFromCart(itemId)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_molecules_IconButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          onClick: () => setIsMenuOpen(s => !s),
          icon: isMenuOpen ? "ep:close-bold" : "charm:menu-hamburger"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("ul", {
        className: `header__nav-items ${!isMenuOpen && "menu-closed"}`,
        children: [_config_navlinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map(({
          label,
          href
        }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
          className: "nav-item",
          onMouseEnter: () => setCurrentSelected(index),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            children: label
          })
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("li", {
          className: "nav-item cart",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            style: "display: flex; gap: 0.5rem",
            color: isCart ? "secondary" : "primary",
            onClick: () => setIsCart(prev => cartItems.length > 0 ? !prev : prev),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
              icon: "eva:shopping-cart-fill"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              children: ["(", cartItems.length, ")"]
            })]
          }), isCart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_molecules_CartMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            products: cartItems,
            removeItem: itemId => removeItemFromCart(itemId)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
          className: "nav-item perfil",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/perfil",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                className: "perfil__img",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                  src: "/images/blank-profile.svg",
                  height: 16,
                  width: 16,
                  alt: "User"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: "Marcos"
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: `header__submenu ${isCart ? "cart-submenu" : ""}`,
      children: currentSelected !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_organisms_Submenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        options: _config_navlinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[currentSelected].submenus
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _design_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7554);


const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("header").withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-dyorkz-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;align-items:center;flex-direction:column;width:100%;position:fixed;top:0;left:0;height:5rem;padding-inline:1rem;background-color:", ";color:", ";z-index:99;& .header{max-width:1000px;margin-inline:auto;display:flex;height:100%;left:0;align-items:center;width:100%;position:relative;background-color:", ";", ";&__logo{width:fit-content;cursor:pointer;& h2{font-size:20pt;font-weight:700;}}&__action{display:none;margin-left:auto;", "}&__nav-items{display:flex;justify-content:flex-end;align-items:center;gap:1rem;flex:1;", " & .nav-item{a{transition:all ease .3s;}&:hover a{color:", "}&.perfil{background-color:", ";& a{display:flex;cursor:pointer;align-items:center;}& .perfil__img{width:2.5rem;height:2.5rem;background-color:red;& > span{width:100%!important;height:100%!important;}}p{padding-inline:.5rem;}}&.cart{position:relative;", "}}}&__submenu{width:100%;&.cart-submenu{}}"], theme.colors["primary-300"], theme.colors["primary-900"], theme.colors["primary-300"], _design_mixins__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mobile.standard */ .Z.mobile.standard(`
                & .header__submenu {
                    & > div {
                        top: 16rem;
                    }
                }
            `), _design_mixins__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mobile.standard */ .Z.mobile.standard`display: flex;`, _design_mixins__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mobile.standard */ .Z.mobile.standard(`
                    position: absolute;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    top: 5rem;
                    z-index: -1;
                    padding-block: 1rem;
                    background-color: ${theme.colors["primary-100"]};

                    &.menu-closed {
                        display: none;
                    }
                `), theme.colors["primary-700"], theme.colors["primary-500"], _design_mixins__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mobile.standard */ .Z.mobile.standard(`
                            display: none;
                        `)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledHeader);

/***/ }),

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Submenu)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/organisms/Submenu/styles.ts

const StyledSubmenu = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledSubmenu",
  componentId: "sc-1akf4zg-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:absolute;top:100%;width:100%;min-height:10rem;left:0;z-index:2;display:flex;.submenu{width:100%;background-color:", ";padding:1rem;display:flex;flex-direction:column;gap:1rem;ul{display:flex;flex-direction:column;&__nav-item{}}}"], theme.colors["primary-500"]));
/* harmony default export */ const styles = (StyledSubmenu);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/organisms/Submenu/index.tsx
/* eslint-disable max-len */




function Submenu({
  options
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(styles, {
    children: options.map((submenu, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "submenu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: submenu.name
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: submenu.categories.map(({
          label,
          link
        }, ind) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "submenu__nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: link,
            children: label
          })
        }, ind))
      }, index)]
    }, index))
  });
}

/***/ }),

/***/ 1744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _components_organisms_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9128);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7040);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_organisms_Header__WEBPACK_IMPORTED_MODULE_0__]);
_components_organisms_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Layout({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "interface",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_organisms_Header__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("main", {
        children: children
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RootStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__RootStyle",
  componentId: "sc-1ot3pil-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background-color:", ";.interface{main{max-width:1000px;margin-top:5rem;margin-inline:auto;min-height:calc(100vh - 5rem);}}"], theme.colors["primary-100"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootStyle);

/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navlinksConfig = [{
  label: "Categorias",
  href: "/produtos",
  submenus: [{
    name: "Sexo",
    categories: [{
      label: "Homem",
      link: "/produtos/categorias?categoria=homem"
    }, {
      label: "Mulher",
      link: "/produtos/categorias?categoria=mulher"
    }, {
      label: "Unissex",
      link: "/produtos/categorias?categoria=unissex"
    }]
  }, {
    name: "Infantil",
    categories: [{
      label: "Bebês",
      link: "/produtos/categorias?categoria=bebe"
    }, {
      label: "Crianças",
      link: "/produtos/categorias?categoria=criança"
    }]
  }, {
    name: "Estação",
    categories: [{
      label: "Verão",
      link: "/produtos/categorias?categoria=verao"
    }, {
      label: "Inverno",
      link: "/produtos/categorias?categoria=inverno"
    }, {
      label: "Outono",
      link: "/produtos/categorias?categoria=outono"
    }]
  }]
}, {
  label: "Produtos",
  href: "/produtos",
  submenus: [{
    name: "Roupas",
    categories: [{
      label: "Calças",
      link: "/produtos/categorias?categoria=calcas"
    }, {
      label: "Camisas",
      link: "/produtos/categorias?categoria=camisas"
    }, {
      label: "Blusas",
      link: "/produtos/categorias?categoria=blusas"
    }]
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navlinksConfig);

/***/ }),

/***/ 3611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1744);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
      theme: _styles_global__WEBPACK_IMPORTED_MODULE_2__/* .DefaultTheme */ .X,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles_global__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps))
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DefaultTheme),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // const colors = {
//     "primary-100": "#ceeafd",
//     "primary-300": "#55b7f9",
//     "primary-500": "#4da7de",
//     "primary-700": "#3e86b2",
//     "primary-900": "#1f4359",
//     "neutral-100": "#cae5f5",
//     "neutral-300": "#a0b9c8",
//     "neutral-500": "#608aa4",
//     "neutral-700": "#4d6e83",
//     "dark-100": "#373737",
//     "dark-400": "#252525",
//     "dark-700": "#121212",
//     "text-primary": "#2f424d",
//     "text-primary-faint": "#5e839a",
//     "text-primary-oposite": "#f6e4e4",
//     white: "#fefefe",
//     warning: "#CB5547"
// };

const colors = {
  "primary-100": "#f6e4e4",
  "primary-300": "#ecc9c9",
  "primary-500": "#e3aeae",
  "primary-700": "#b38484",
  "primary-900": "#8f6a6a",
  "neutral-100": "#e9e9e9",
  "neutral-300": "#d4d4d4",
  "neutral-500": "#bebebe",
  "neutral-700": "#a5a5a5",
  "dark-100": "#373737",
  "dark-400": "#252525",
  "dark-700": "#121212",
  "text-primary": "#8f6a6a",
  "text-primary-faint": "#b38484",
  "text-primary-oposite": "#f6e4e4",
  white: "#fefefe",
  warning: "#CB5547"
};
const DefaultTheme = {
  colors,
  sizing: {
    default: "2.5rem",
    xs: ".25rem",
    sm: ".5rem",
    md: ".75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem"
  },
  font: {
    xs: "8pt",
    sm: "12pt",
    md: "16pt",
    lg: "20pt",
    xl: "24pt"
  }
};
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["*{margin:0;padding:0;box-sizing:border-box;}body{font-family:\"Montserrat\",\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif;color:", ";overflow-x:hidden;}ul{list-style:none;}img{max-width:100%;}a{text-decoration:none;color:", ";}button,input{background-color:transparent;border:none;outline:none;color:", ";font-size:12pt;}@media (hover:none){*{transform:none !important;}}"], theme.colors["text-primary"], theme.colors["text-primary"], theme.colors["text-primary"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9182:
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675,340,344,92], () => (__webpack_exec__(3611)));
module.exports = __webpack_exports__;

})();