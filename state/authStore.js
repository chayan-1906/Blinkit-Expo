"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
var storage_1 = require("@/state/storage");
exports.useAuthStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return ({
    user: null,
    currentOrder: null,
    setUser: function (data) { return set({ user: data }); },
    setCurrentOrder: function (order) { return set({ currentOrder: order }); },
    logout: function () { return set({ user: null, currentOrder: null }); },
}); }, {
    name: 'auth-storage',
    storage: (0, middleware_1.createJSONStorage)(function () { return storage_1.secureStorage; }),
}));
