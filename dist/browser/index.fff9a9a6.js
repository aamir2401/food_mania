import "./index.e4ad75d6.css";
import {jsx as $8Wa95$jsx, jsxs as $8Wa95$jsxs} from "react/jsx-runtime";
import $8Wa95$react, {lazy as $8Wa95$lazy, Suspense as $8Wa95$Suspense, useState as $8Wa95$useState, useEffect as $8Wa95$useEffect, useContext as $8Wa95$useContext, createContext as $8Wa95$createContext} from "react";
import $8Wa95$reactdomclient from "react-dom/client";
import {Outlet as $8Wa95$Outlet, createBrowserRouter as $8Wa95$createBrowserRouter, RouterProvider as $8Wa95$RouterProvider, Link as $8Wa95$Link, useRouteError as $8Wa95$useRouteError, useParams as $8Wa95$useParams} from "react-router-dom";
import {Provider as $8Wa95$Provider, useSelector as $8Wa95$useSelector, useDispatch as $8Wa95$useDispatch} from "react-redux";
import {FaCartShopping as $8Wa95$FaCartShopping} from "react-icons/fa6";
import {BsArrowUpCircleFill as $8Wa95$BsArrowUpCircleFill, BsArrowDownCircleFill as $8Wa95$BsArrowDownCircleFill} from "react-icons/bs";
import {createSlice as $8Wa95$createSlice, configureStore as $8Wa95$configureStore} from "@reduxjs/toolkit";


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("a5ISf", function(module, exports) {
module.exports = import("./Grocery.244ac150.js").then(()=>parcelRequire("cUf9G"));

});






const $88da1d261a291d79$export$8878ead86ed0da0b = "https://imgs.search.brave.com/EUZncsLVBhF4jN0UosG5dUrLuoaBF9523TbZX63mc34/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3N3aWdn/eTIzNDAuanBn";
const $88da1d261a291d79$export$31adfacaf07ffe63 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const $88da1d261a291d79$export$61c9011cb002716f = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=";




const $8abaa1e137baa310$var$useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = (0, $8Wa95$useState)(true);
    (0, $8Wa95$useState)(()=>{
        window.addEventListener("offline", (event)=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    }, []);
    return onlineStatus;
};
var $8abaa1e137baa310$export$2e2bcd8739ae039 = $8abaa1e137baa310$var$useOnlineStatus;




const $919fb1e9d0c42bd2$var$Header = ()=>{
    const onlineStatus = (0, $8abaa1e137baa310$export$2e2bcd8739ae039)();
    //subscribing to store 
    const cartItems = (0, $8Wa95$useSelector)((store)=>store.cart.items);
    //  console.log("cartItems", cartItems)
    const [loginToggleBtn, setLoginToggleBtn] = (0, $8Wa95$useState)("Login");
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: " flex justify-between shadow-xl bg-[#ffffff] px-2 py-0",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "w-36",
                children: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                    to: "/",
                    children: /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                        className: "logo",
                        src: (0, $88da1d261a291d79$export$8878ead86ed0da0b),
                        alt: "Logo"
                    })
                })
            }),
            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("p", {
                        className: "font-semibold",
                        children: [
                            "Online: ",
                            onlineStatus ? "\uD83D\uDFE2" : "\uD83D\uDD34"
                        ]
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("nav", {
                        children: /*#__PURE__*/ (0, $8Wa95$jsxs)("ul", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                                    className: "header-points text-gray-700 font-semibold hover:text-blue-500",
                                    to: "/",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                                    className: "header-points text-gray-700 font-semibold hover:text-blue-500",
                                    to: "about",
                                    children: "About-Us"
                                }),
                                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                                    className: "header-points text-gray-700 font-semibold hover:text-blue-500",
                                    to: "contactus",
                                    children: "Contact-Us"
                                }),
                                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                                    className: "header-points text-gray-700 font-semibold hover:text-blue-500 py-1",
                                    to: "cart",
                                    children: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$FaCartShopping), {})
                                }),
                                " (",
                                cartItems.length,
                                ")"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                        className: "btn-container",
                        children: /*#__PURE__*/ (0, $8Wa95$jsx)("button", {
                            className: "login-btn bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600",
                            onClick: ()=>{
                                setLoginToggleBtn(loginToggleBtn === "Login" ? "Logout" : "Login");
                            },
                            children: loginToggleBtn
                        })
                    })
                ]
            })
        ]
    });
};
var $919fb1e9d0c42bd2$export$2e2bcd8739ae039 = $919fb1e9d0c42bd2$var$Header;







const $7c12f56f79f210b6$var$UserContext = /*#__PURE__*/ (0, $8Wa95$createContext)({
    loggedUserName: "Default User"
});
var $7c12f56f79f210b6$export$2e2bcd8739ae039 = $7c12f56f79f210b6$var$UserContext;


const $4a2792164c2cdc38$var$RestaurantCard = (props)=>{
    const { resData: resData } = props;
    const { loggedUserName: loggedUserName } = (0, $8Wa95$useContext)((0, $7c12f56f79f210b6$export$2e2bcd8739ae039));
    const { name: name, avgRating: avgRating, cuisines: cuisines, cloudinaryImageId: cloudinaryImageId, costForTwo: costForTwo } = resData?.info;
    const { slaString: slaString } = resData.info.sla;
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: "res-card animate p-5 bg-gradient-to-r from-gray-50  to-orange-50 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-900 ease-in-out w-64 h-72 ",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "food-image rounded-t-lg overflow-hidden shadow-sm",
                children: /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                    className: "object-cover w-full h-32",
                    src: (0, $88da1d261a291d79$export$31adfacaf07ffe63) + cloudinaryImageId,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "mt-3 space-y-2 space-x-3",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                        className: "font-semibold text-lg text-gray-800 truncate",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, $8Wa95$jsxs)("h4", {
                                className: "text-yellow-500",
                                children: [
                                    "\u2B50 ",
                                    avgRating
                                ]
                            }),
                            /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                                className: "text-gray-600",
                                children: costForTwo
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                        className: "text-gray-700 text-sm truncate",
                        children: cuisines.join(", ")
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("h4", {
                        className: "text-gray-500 text-xs",
                        children: [
                            " EAT: ",
                            slaString
                        ]
                    })
                ]
            })
        ]
    });
};
var $4a2792164c2cdc38$export$2e2bcd8739ae039 = $4a2792164c2cdc38$var$RestaurantCard;
const $4a2792164c2cdc38$export$587c0482e0d76452 = ()=>{
    return (props)=>{
        return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $8Wa95$jsx)("label", {
                    className: "absolute",
                    children: "Open"
                }),
                /*#__PURE__*/ (0, $8Wa95$jsx)($4a2792164c2cdc38$var$RestaurantCard, {
                    ...props
                })
            ]
        });
    };
};





// import './ShimmerCard.css'; // Import the CSS for shimmer effect
const $a2b3996ae80e057d$var$ShimmerCard = ()=>{
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        class: " shimmer-card p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                class: "shimmer shimmer-image bg-gray-300 h-40 w-full rounded-lg"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                class: "shimmer shimmer-title bg-gray-300 h-6 w-3/4 rounded"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                class: "shimmer shimmer-text bg-gray-300 h-4 w-full rounded"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                class: "shimmer shimmer-text bg-gray-300 h-4 w-5/6 rounded"
            })
        ]
    });
};
var $a2b3996ae80e057d$export$2e2bcd8739ae039 = $a2b3996ae80e057d$var$ShimmerCard;





const $2e433b22dc2b7152$var$Footer = ()=>{
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: "bg-gradient-to-r from-blue-100 via-purple-100 to-slate-200 p-8 ",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "my-3 footer-container flex flex-col md:flex-row items-center justify-between py-8",
                children: /*#__PURE__*/ (0, $8Wa95$jsxs)("ul", {
                    className: "list-footer flex flex-wrap justify-center md:justify-start gap-8 mb-6 md:mb-0",
                    children: [
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Privacy Policy"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Terms Of Service"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Refund Policy"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Become Affiliate"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Gift a Course"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Team"
                            })
                        }),
                        /*#__PURE__*/ (0, $8Wa95$jsx)("li", {
                            className: "text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300",
                            children: /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                children: "Contact Us"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "text-center mt-6",
                children: /*#__PURE__*/ (0, $8Wa95$jsxs)("h4", {
                    className: "text-gray-700 text-lg font-semibold",
                    children: [
                        "Made with ",
                        /*#__PURE__*/ (0, $8Wa95$jsx)("span", {
                            className: "text-red-500",
                            children: "\u2764\uFE0F"
                        }),
                        " in India"
                    ]
                })
            })
        ]
    });
};
var $2e433b22dc2b7152$export$2e2bcd8739ae039 = $2e433b22dc2b7152$var$Footer;


const $31e377f2c8e853b4$var$Body = ()=>{
    const onlineStatus = (0, $8abaa1e137baa310$export$2e2bcd8739ae039)();
    const [resList, setResList] = (0, $8Wa95$useState)([]);
    const RestaurantOpenHai = (0, $4a2792164c2cdc38$export$587c0482e0d76452)(resList);
    const [filteredRestaurant, setFilteredRestaurant] = (0, $8Wa95$useState)([]);
    const [searchInput, setSearchInput] = (0, $8Wa95$useState)("");
    // 🔴🔴🔴🔴 Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    //   console.log(searchInput);
    (0, $8Wa95$useEffect)(()=>{
        fetchdata();
    }, []);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await data.json();
        // console.log("json",response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // console.log("response", response);
        setResList(response?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(response?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        if (onlineStatus === false) return /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
            children: "Check your Internet connection and try again later!"
        });
    };
    return resList.length === 0 ? [
        ...Array(10)
    ].map((_, index)=>/*#__PURE__*/ (0, $8Wa95$jsx)((0, $a2b3996ae80e057d$export$2e2bcd8739ae039), {}, index)) : /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "flex gap-6 font-semibold cursor-pointer search-container mx-3 my-4",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsx)("input", {
                        className: "w-50% p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none ",
                        type: "text",
                        placeholder: "Search...",
                        value: searchInput,
                        onChange: (e)=>{
                            setSearchInput(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("button", {
                        className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50",
                        onClick: ()=>{
                            console.log("check", searchInput);
                            const filteredList = resList.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                            setFilteredRestaurant(filteredList);
                        },
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("button", {
                        className: "filter-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50",
                        onClick: ()=>{
                            const filteredList = resList.filter((res)=>res.info.avgRating > 4);
                            setFilteredRestaurant(filteredList);
                        },
                        children: "Top-Restaurants"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "flex gap-6 font-semibold cursor-pointer search-container mx-3 my-4",
                children: /*#__PURE__*/ (0, $8Wa95$jsx)("h1", {})
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "flex flex-wrap justify-evenly gap-y-8",
                children: (filteredRestaurant.length > 0 ? filteredRestaurant : resList).map((restaurant)=>/*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Link), {
                        className: "restaurant-link",
                        to: "restaurants/" + restaurant.info.id,
                        children: resList[13].info.isOpen ? /*#__PURE__*/ (0, $8Wa95$jsx)(RestaurantOpenHai, {
                            resData: restaurant
                        }) : /*#__PURE__*/ (0, $8Wa95$jsx)((0, $4a2792164c2cdc38$export$2e2bcd8739ae039), {
                            resData: restaurant
                        })
                    }, restaurant.info.id))
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)((0, $2e433b22dc2b7152$export$2e2bcd8739ae039), {})
        ]
    });
};
var $31e377f2c8e853b4$export$2e2bcd8739ae039 = $31e377f2c8e853b4$var$Body;







const $6cf80c9ee8fc847f$var$User = ({ name: name, location: location })=>{
    const [count, setCount] = (0, $8Wa95$useState)(0);
    function incrementTheCount() {
        setCount(count + 1);
    }
    const decTheCount = ()=>{
        setCount(count - 1);
    };
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: "user-card",
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                children: "Heyy!!!"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsxs)("h1", {
                children: [
                    "count = ",
                    count
                ]
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                children: name
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                children: "Contact: @aamir18"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsxs)("h4", {
                children: [
                    "Location: ",
                    location
                ]
            })
        ]
    });
};
var $6cf80c9ee8fc847f$export$2e2bcd8739ae039 = $6cf80c9ee8fc847f$var$User;




class $cba545914c356de2$var$UserClass extends (0, $8Wa95$react).Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: "default",
            location: "Default delhi"
        };
    }
    async componentDidMount() {
        const data = await fetch("https://apri.github.com/users/aamir18");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log("heyy aamir", json);
    }
    render() {
        const { login: login, location: location, avatar_url: avatar_url } = this.state.userInfo;
        // debugger;
        return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
            className: "user-card",
            children: [
                /*#__PURE__*/ (0, $8Wa95$jsx)("h4", {
                    children: "Heyy class!!!"
                }),
                /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                    children: login
                }),
                /*#__PURE__*/ (0, $8Wa95$jsxs)("h4", {
                    children: [
                        location,
                        "..."
                    ]
                }),
                /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                    src: avatar_url
                })
            ]
        });
    }
}
var $cba545914c356de2$export$2e2bcd8739ae039 = $cba545914c356de2$var$UserClass;


const $a34782459ada99e4$var$About = ()=>{
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("h2", {
                children: "This is about page"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)((0, $cba545914c356de2$export$2e2bcd8739ae039), {
                name: "Name: Aamir Anwar ",
                contact: "@aamiranwar18 class comp..."
            })
        ]
    });
};
var $a34782459ada99e4$export$2e2bcd8739ae039 = $a34782459ada99e4$var$About;





const $71c380b185f6e941$var$Error = ()=>{
    const err = (0, $8Wa95$useRouteError)();
    console.log("errr", err);
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                children: "Opps!!!"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                children: "Error Encountered!"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsxs)("h1", {
                children: [
                    err.status,
                    ":",
                    err.statusText
                ]
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "error-image",
                children: /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                    src: "https://www.pedalo.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/05/Firebox-1024x599.png.webp"
                })
            })
        ]
    });
};
var $71c380b185f6e941$export$2e2bcd8739ae039 = $71c380b185f6e941$var$Error;




const $952910dc2ff9b3f0$var$Contactus = ()=>{
    return /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
        children: " This is Contactus page..."
    });
};
var $952910dc2ff9b3f0$export$2e2bcd8739ae039 = $952910dc2ff9b3f0$var$Contactus;






const $538dd3d5fa4bc879$var$CartItems = ({ items: items })=>{
    console.log("fet", items); // Assuming 'items' is being passed correctly as a prop
    return /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
        children: items.map((item)=>/*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "menu-item mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                        className: "text-lg font-semibold text-gray-800",
                                        children: item.card.info.name
                                    }),
                                    /*#__PURE__*/ (0, $8Wa95$jsxs)("span", {
                                        className: "text-lg font-medium text-green-500",
                                        children: [
                                            "\u20B9",
                                            item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                                className: "relative w-36 h-16",
                                children: /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                                    src: CDN_URL + item.card.info.imageId,
                                    alt: item.card.info.id,
                                    className: "object-cover rounded-md w-full h-full"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                            className: "text-gray-600 text-xs",
                            children: item.card.info.description
                        })
                    })
                ]
            }, item?.card?.info?.id))
    });
};
var $538dd3d5fa4bc879$export$2e2bcd8739ae039 = $538dd3d5fa4bc879$var$CartItems;


const $0bd2f4b0703e7e0a$var$Cart = ()=>{
    const cartItems = (0, $8Wa95$useSelector)((store)=>store.cart.items);
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        className: "h-auto m-4 w-auto text-center font-serif text-xl p-6 bg-gradient-to-r from-blue-50 to-slate-100",
        children: [
            "This is the cart page...",
            cartItems.length > 0 ? /*#__PURE__*/ (0, $8Wa95$jsx)((0, $538dd3d5fa4bc879$export$2e2bcd8739ae039), {
                items: cartItems
            }) : /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                children: "Your cart is empty"
            })
        ]
    });
};
var $0bd2f4b0703e7e0a$export$2e2bcd8739ae039 = $0bd2f4b0703e7e0a$var$Cart;







const $33ac73fe4fe1faa3$var$useRestaurantMenu = (resId)=>{
    const [individualResInfo, setIndividualResInfo] = (0, $8Wa95$useState)(null);
    (0, $8Wa95$useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        const data = await fetch((0, $88da1d261a291d79$export$61c9011cb002716f) + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setIndividualResInfo(json);
    };
    return individualResInfo;
};
var $33ac73fe4fe1faa3$export$2e2bcd8739ae039 = $33ac73fe4fe1faa3$var$useRestaurantMenu;








const $d9e6314dd99e18f3$var$cartSlice = (0, $8Wa95$createSlice)({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});
const { addItem: $d9e6314dd99e18f3$export$fb9705de59d96855, removeItem: $d9e6314dd99e18f3$export$fe2d9b4e03920b4c, clearCart: $d9e6314dd99e18f3$export$810121176e3e3671 } = $d9e6314dd99e18f3$var$cartSlice.actions;
var $d9e6314dd99e18f3$export$2e2bcd8739ae039 = $d9e6314dd99e18f3$var$cartSlice.reducer;


const $00fee05912ea49fa$var$MenuItemList = ({ items: items })=>{
    //   console.log(items);
    const dispatch = (0, $8Wa95$useDispatch)();
    const handleAddItemsCart = ()=>{
        dispatch((0, $d9e6314dd99e18f3$export$fb9705de59d96855)(items));
    };
    return /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
        className: "p-6 bg-gradient-to-r from-blue-50 to-slate-100",
        children: items.map((item)=>/*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "menu-item mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $8Wa95$jsx)("h3", {
                                        className: "text-lg font-semibold text-gray-800",
                                        children: item.card.info.name
                                    }),
                                    /*#__PURE__*/ (0, $8Wa95$jsxs)("span", {
                                        className: "text-lg font-medium text-green-500",
                                        children: [
                                            "\u20B9",
                                            item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                                className: "relative w-36 h-16",
                                children: [
                                    /*#__PURE__*/ (0, $8Wa95$jsx)("img", {
                                        src: (0, $88da1d261a291d79$export$31adfacaf07ffe63) + item.card.info.imageId,
                                        alt: item.card.info.id,
                                        className: "object-cover rounded-md w-full h-full"
                                    }),
                                    /*#__PURE__*/ (0, $8Wa95$jsx)("button", {
                                        className: "absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white to-purple-600 text-green-500 font-semibold py-0 px-2  rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105",
                                        onClick: ()=>handleAddItemsCart(item),
                                        children: "ADD"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                            className: "text-gray-600 text-xs",
                            children: item.card.info.description
                        })
                    })
                ]
            }, item.card.info.id))
    });
};
var $00fee05912ea49fa$export$2e2bcd8739ae039 = $00fee05912ea49fa$var$MenuItemList;



const $83e68a7096359c46$var$RestaurantCategory = ({ data: data, expantItems: expantItems, setExpandItems: setExpandItems })=>{
    const handleClick = ()=>{
        setExpandItems();
    // console.log("clicked")
    // setExpandItems(!expantItems)
    };
    return /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
            className: "w-10/12 md:w-8/12 lg:w-6/12 my-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer",
            children: [
                /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                    onClick: handleClick,
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, $8Wa95$jsx)("span", {
                                    className: "font-semibold text-lg font-sans text-gray-800",
                                    children: data.title
                                }),
                                /*#__PURE__*/ (0, $8Wa95$jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "(",
                                        data?.itemCards.length,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        expantItems ? /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$BsArrowUpCircleFill), {
                            className: "text-gray-600 text-2xl hover:text-gray-950 transition duration-300 ease-in-out"
                        }) : /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$BsArrowDownCircleFill), {
                            className: "text-gray-600 text-2xl hover:text-gray-950 transition duration-300 ease-in-out"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                    children: expantItems && /*#__PURE__*/ (0, $8Wa95$jsx)((0, $00fee05912ea49fa$export$2e2bcd8739ae039), {
                        items: data.itemCards
                    })
                })
            ]
        })
    });
};
var $83e68a7096359c46$export$2e2bcd8739ae039 = $83e68a7096359c46$var$RestaurantCategory;



const $af6f7486762be8a7$var$RestaurantMenu = ()=>{
    const [expantItems, setExpandItems] = (0, $8Wa95$useState)(null);
    const { resId: resId } = (0, $8Wa95$useParams)();
    const individualResInfo = (0, $33ac73fe4fe1faa3$export$2e2bcd8739ae039)(resId);
    const { name: name, costForTwoMessage: costForTwoMessage, areaName: areaName, city: city, avgRating: avgRating, cuisines: cuisines } = individualResInfo?.data?.cards[2]?.card?.card?.info || {};
    // const itemCards =
    // individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    // console.log("--->", itemCards)
    // console.log("first", individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const restaurantMenuCategories = individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredMenu = Array.isArray(restaurantMenuCategories) ? restaurantMenuCategories.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") : [];
    //   console.log("restaurantMenuCategories", filteredMenu)
    return /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
                className: "my-3 menu p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4",
                children: [
                    /*#__PURE__*/ (0, $8Wa95$jsx)("h2", {
                        className: "text-2xl font-bold text-black",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                        className: "text-gray-500",
                        children: `Outlet - ${areaName} - ${city}`
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsx)("p", {
                        className: "text-sm text-gray-600",
                        children: cuisines?.length ? cuisines.join(", ") : "Cuisines not available"
                    }),
                    /*#__PURE__*/ (0, $8Wa95$jsxs)("p", {
                        className: "flex items-center text-yellow-500",
                        children: [
                            "\u2B50",
                            /*#__PURE__*/ (0, $8Wa95$jsx)("span", {
                                className: "ml-1 text-lg font-semibold",
                                children: avgRating
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("h1", {
                className: "text-center font-semibold my-3",
                children: "CATEGORIES"
            }),
            /*#__PURE__*/ (0, $8Wa95$jsx)("div", {
                className: "",
                children: filteredMenu.map((category, index)=>/*#__PURE__*/ (0, $8Wa95$jsx)((0, $83e68a7096359c46$export$2e2bcd8739ae039), {
                        data: category?.card?.card,
                        expantItems: index === expantItems ? true : false,
                        setExpandItems: ()=>setExpandItems(index)
                    }, index))
            })
        ]
    });
};
var $af6f7486762be8a7$export$2e2bcd8739ae039 = $af6f7486762be8a7$var$RestaurantMenu;






const $6f8f8ca33f20f533$var$appStore = (0, $8Wa95$configureStore)({
    reducer: {
        cart: (0, $d9e6314dd99e18f3$export$2e2bcd8739ae039)
    }
});
var $6f8f8ca33f20f533$export$2e2bcd8739ae039 = $6f8f8ca33f20f533$var$appStore;



const $11dfb7bc01b3706d$var$Grocery = /*#__PURE__*/ (0, $8Wa95$lazy)(()=>(parcelRequire("a5ISf")));
//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic importing
const $11dfb7bc01b3706d$var$AppLayout = ()=>{
    return /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Provider), {
        store: (0, $6f8f8ca33f20f533$export$2e2bcd8739ae039),
        children: /*#__PURE__*/ (0, $8Wa95$jsxs)("div", {
            className: "app-layout",
            children: [
                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $919fb1e9d0c42bd2$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Outlet), {})
            ]
        })
    });
};
const $11dfb7bc01b3706d$var$appRouter = (0, $8Wa95$createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $8Wa95$jsx)($11dfb7bc01b3706d$var$AppLayout, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $31e377f2c8e853b4$export$2e2bcd8739ae039), {})
            },
            {
                path: "/about",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $a34782459ada99e4$export$2e2bcd8739ae039), {})
            },
            {
                path: "/contactus",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $952910dc2ff9b3f0$export$2e2bcd8739ae039), {})
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $0bd2f4b0703e7e0a$export$2e2bcd8739ae039), {})
            },
            {
                path: "/grocery",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$Suspense), {
                    children: /*#__PURE__*/ (0, $8Wa95$jsx)($11dfb7bc01b3706d$var$Grocery, {})
                })
            },
            {
                path: "restaurants/:resId",
                element: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $af6f7486762be8a7$export$2e2bcd8739ae039), {})
            }
        ],
        errorElement: /*#__PURE__*/ (0, $8Wa95$jsx)((0, $71c380b185f6e941$export$2e2bcd8739ae039), {})
    }
]);
const $11dfb7bc01b3706d$var$root = (0, $8Wa95$reactdomclient).createRoot(document.getElementById("root"));
$11dfb7bc01b3706d$var$root.render(/*#__PURE__*/ (0, $8Wa95$jsx)((0, $8Wa95$RouterProvider), {
    router: $11dfb7bc01b3706d$var$appRouter
}));


//# sourceMappingURL=index.fff9a9a6.js.map
