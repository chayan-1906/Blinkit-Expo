"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var authStore_1 = require("@/state/authStore");
var storage_1 = require("@/state/storage");
var NoticeAnimation_1 = require("@/app/components/dashboard/NoticeAnimation");
var Scaling_1 = require("@/utils/Scaling");
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var Visuals_1 = require("@/app/components/dashboard/Visuals");
var react_native_collapsible_1 = require("@r0b0t3d/react-native-collapsible");
var AnimatedHeader_1 = require("@/app/components/dashboard/AnimatedHeader");
var StickySearchBar_1 = require("@/app/components/dashboard/StickySearchBar");
var NOTICE_HEIGHT = -(Scaling_1.NoticeHeight + 18);
function ProductDashboard() {
    var _this = this;
    var user = (0, authStore_1.useAuthStore)().user;
    var noticePosition = (0, react_1.useRef)(new react_native_1.Animated.Value(NOTICE_HEIGHT)).current;
    var slideUp = function () {
        react_native_1.Animated.timing(noticePosition, {
            toValue: NOTICE_HEIGHT,
            duration: 1200,
            useNativeDriver: false,
        }).start();
    };
    var slideDown = function () {
        react_native_1.Animated.timing(noticePosition, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: false,
        }).start();
    };
    (0, react_1.useEffect)(function () {
        slideDown();
        var timeoutId = setTimeout(function () { return slideUp(); }, 3500);
        return function () { return clearTimeout(timeoutId); };
    }, []);
    // @ts-ignore
    return (<NoticeAnimation_1.default noticePosition={noticePosition}>
            <>
                <Visuals_1.default />
                <react_native_safe_area_context_1.SafeAreaView />

                <react_native_collapsible_1.CollapsibleContainer style={{ flex: 1 }}>
                    <react_native_collapsible_1.CollapsibleHeaderContainer containerStyle={styles.transparent}>
                        <AnimatedHeader_1.default showNotice={function () {
            slideDown();
            setTimeout(function () { return slideUp(); }, 3500);
        }}/>
                        <StickySearchBar_1.default />
                    </react_native_collapsible_1.CollapsibleHeaderContainer>
                    <react_native_1.View>
                        {/*<Text>Body content</Text>*/}
                    </react_native_1.View>
                </react_native_collapsible_1.CollapsibleContainer>

                {/*<Text className={'text-6xl text-red-400 font-black'}>ProductDashboard</Text>*/}
                <react_native_1.TouchableOpacity className={'mt-20 w-fit bg-red-500'} onPress={function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, storage_1.secureStorage.clearAll()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); }}>
                    <react_native_1.Text className={'text-3xl'}>Logout</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </>
        </NoticeAnimation_1.default>);
}
exports.default = (0, react_native_collapsible_1.withCollapsibleContext)(ProductDashboard);
var styles = react_native_1.StyleSheet.create({
    transparent: {
        backgroundColor: 'transparent',
    },
});
