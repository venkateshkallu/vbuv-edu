module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
            lineNumber: 78,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                                    lineNumber: 16,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/toaster.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/sonner.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Toaster"],
    "toast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/sonner.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tooltip.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Providers({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                    refetchOnWindowFocus: false
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/providers.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/providers.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mongo-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:bg-primary/90 shadow-md hover:shadow-lg active:scale-[0.98]",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:bg-destructive/90 shadow-md hover:shadow-lg",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
            gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] focus-visible:shadow-xl focus-visible:scale-[1.02] active:scale-[0.98]",
            hero: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 focus-visible:shadow-xl focus-visible:bg-primary/90 font-semibold",
            "hero-outline": "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground font-semibold",
            // MongoDB University specific variants
            "mongodb-primary": "bg-mongo-accent text-white hover:bg-mongo-accent/90 focus-visible:bg-mongo-accent/90 shadow-md hover:shadow-lg active:scale-[0.98]",
            "mongodb-secondary": "bg-green-skill text-white hover:bg-green-skill/90 focus-visible:bg-green-skill/90 shadow-md hover:shadow-lg active:scale-[0.98]",
            "mongodb-outline": "border border-mongo-accent text-mongo-accent bg-transparent hover:bg-mongo-accent hover:text-white focus-visible:bg-mongo-accent focus-visible:text-white",
            "mongodb-ghost": "text-mongo-accent hover:bg-mongo-light hover:text-mongo-accent focus-visible:bg-mongo-light focus-visible:text-mongo-accent",
            // Course Detail Redesign specific variants
            "course-primary": "bg-course-blue-primary text-white hover:bg-course-blue-dark focus-visible:bg-course-blue-dark shadow-md hover:shadow-lg active:scale-[0.98] font-times",
            "course-secondary": "bg-course-blue-light text-course-blue-primary border border-course-blue-primary hover:bg-course-blue-primary hover:text-white focus-visible:bg-course-blue-primary focus-visible:text-white font-times",
            "course-outline": "border border-course-blue-primary text-course-blue-primary bg-transparent hover:bg-course-blue-primary hover:text-white focus-visible:bg-course-blue-primary focus-visible:text-white font-times",
            "course-ghost": "text-course-blue-primary hover:bg-course-blue-light hover:text-course-blue-primary focus-visible:bg-course-blue-light focus-visible:text-course-blue-primary font-times"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-xl px-8 text-base",
            xl: "h-14 rounded-xl px-10 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx",
        lineNumber: 57,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Header = ()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container flex h-16 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 transition-opacity hover:opacity-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/favicon.ico",
                                alt: "VBUV-Cloud",
                                width: 32,
                                height: 32,
                                className: "h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-slate-900",
                                children: "VBUV-Cloud"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                    children: [
                                        "Products",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                    children: [
                                        "Resources",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                    children: [
                                        "Solutions",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                    children: [
                                        "Company",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "text-slate-700 hover:text-slate-900",
                            children: "My Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "md:hidden",
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 84,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 84,
                            columnNumber: 57
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container flex h-14 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/courses",
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                                    children: "VBUV-Cloud University"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/courses",
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                                    children: "Self-paced Learning"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                        children: [
                                            "Instructor-led Training",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 flex items-center gap-1",
                                        children: [
                                            "Credentials",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/courses",
                                    className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                                    children: "Skills"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "text-blue-600 border-blue-600 hover:bg-blue-50",
                                children: "+ VBUV-Cloud AI"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("md:hidden overflow-hidden transition-all duration-300 ease-in-out", mobileMenuOpen ? "max-h-80 border-b border-border" : "max-h-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container flex flex-col gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                            onClick: ()=>setMobileMenuOpen(false),
                            children: "Courses"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/learning-paths",
                            className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                            onClick: ()=>setMobileMenuOpen(false),
                            children: "Learning Paths"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/resources",
                            className: "text-sm font-medium text-slate-700 transition-colors hover:text-slate-900",
                            onClick: ()=>setMobileMenuOpen(false),
                            children: "Resources"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "flex-1",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "default",
                                    className: "flex-1",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const MongoDBStyleTopNav = ()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Handle escape key to close menus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (event)=>{
            if (event.key === 'Escape') {
                setMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return ()=>document.removeEventListener('keydown', handleEscape);
    }, []);
    // Handle click outside to close dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (activeDropdown && dropdownRefs.current[activeDropdown] && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        activeDropdown
    ]);
    const toggleDropdown = (dropdown)=>{
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
    const handleMobileMenuToggle = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
        // Focus management for mobile menu
        if (!mobileMenuOpen) {
            setTimeout(()=>{
                const firstMenuItem = mobileMenuRef.current?.querySelector('button, a');
                if (firstMenuItem instanceof HTMLElement) {
                    firstMenuItem.focus();
                }
            }, 100);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-gray-border bg-white",
        role: "banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 flex h-16 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-mongo-accent focus:ring-offset-2 rounded-sm",
                        "aria-label": "VBUV-Cloud home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/favicon.ico",
                                alt: "",
                                width: 32,
                                height: 32,
                                className: "h-8 w-8",
                                role: "presentation"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-gray-900",
                                children: "VBUV-Cloud"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-6 xl:gap-8",
                        "aria-label": "Main navigation",
                        role: "navigation",
                        children: [
                            [
                                {
                                    name: 'Products',
                                    hasDropdown: true
                                },
                                {
                                    name: 'Resources',
                                    hasDropdown: true
                                },
                                {
                                    name: 'Solutions',
                                    hasDropdown: true
                                },
                                {
                                    name: 'Company',
                                    hasDropdown: true
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: (el)=>{
                                        dropdownRefs.current[item.name] = el;
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mongodb-nav-link text-sm font-medium px-2 py-1 flex items-center gap-1 whitespace-nowrap",
                                            "aria-haspopup": "true",
                                            "aria-expanded": activeDropdown === item.name,
                                            onClick: ()=>toggleDropdown(item.name),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    toggleDropdown(item.name);
                                                }
                                            },
                                            children: [
                                                item.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", activeDropdown === item.name && "rotate-180"),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeDropdown === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 w-48 mongodb-card z-50",
                                            role: "menu",
                                            "aria-labelledby": `${item.name}-button`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 text-sm text-gray-text",
                                                    children: [
                                                        item.name,
                                                        " menu items would go here"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "mongodb-nav-link text-sm font-medium px-2 py-1 whitespace-nowrap",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "mongodb-button-outline text-sm",
                            "aria-label": "Sign in to your account",
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "lg:hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
                        onClick: handleMobileMenuToggle,
                        "aria-expanded": mobileMenuOpen,
                        "aria-controls": "mobile-menu",
                        "aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                            lineNumber: 158,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                            lineNumber: 158,
                            columnNumber: 76
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-menu",
                ref: mobileMenuRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-border", mobileMenuOpen ? "max-h-96" : "max-h-0"),
                "aria-hidden": !mobileMenuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container mx-auto px-4 flex flex-col gap-4 py-4",
                    "aria-label": "Mobile navigation",
                    children: [
                        [
                            'Products',
                            'Resources',
                            'Solutions',
                            'Company'
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mongodb-nav-link text-sm font-medium px-2 py-1 text-left",
                                "aria-label": `${item} menu`,
                                children: item
                            }, item, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/pricing",
                            className: "mongodb-nav-link text-sm font-medium px-2 py-1",
                            onClick: ()=>setMobileMenuOpen(false),
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "mongodb-button-outline flex-1",
                                "aria-label": "Sign in to your account",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MongoDBStyleTopNav;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MongoDBStyleSubNav = ()=>{
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Handle escape key to close dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (event)=>{
            if (event.key === 'Escape') {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return ()=>document.removeEventListener('keydown', handleEscape);
    }, []);
    // Handle click outside to close dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (activeDropdown && dropdownRefs.current[activeDropdown] && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        activeDropdown
    ]);
    const toggleDropdown = (dropdown)=>{
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b border-gray-border bg-gray-bg",
        "aria-label": "University navigation",
        role: "navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 flex h-14 items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            className: "mongodb-nav-link text-sm font-medium px-2 py-1 whitespace-nowrap flex-shrink-0",
                            "aria-current": "page",
                            children: "VBUV-Cloud University"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            className: "mongodb-nav-link text-sm font-medium px-2 py-1 whitespace-nowrap flex-shrink-0 hidden sm:block",
                            children: "Self-paced Learning"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative hidden md:block flex-shrink-0",
                            ref: (el)=>{
                                dropdownRefs.current['training'] = el;
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mongodb-nav-link text-sm font-medium px-2 py-1 flex items-center gap-1 whitespace-nowrap",
                                    "aria-haspopup": "true",
                                    "aria-expanded": activeDropdown === 'training',
                                    onClick: ()=>toggleDropdown('training'),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleDropdown('training');
                                        }
                                    },
                                    children: [
                                        "Instructor-led Training",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", activeDropdown === 'training' && "rotate-180"),
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeDropdown === 'training' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 mt-1 w-56 mongodb-card z-50",
                                    role: "menu",
                                    "aria-labelledby": "training-button",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2 text-sm text-gray-text",
                                            children: "Training options would go here"
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative hidden lg:block flex-shrink-0",
                            ref: (el)=>{
                                dropdownRefs.current['credentials'] = el;
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mongodb-nav-link text-sm font-medium px-2 py-1 flex items-center gap-1 whitespace-nowrap",
                                    "aria-haspopup": "true",
                                    "aria-expanded": activeDropdown === 'credentials',
                                    onClick: ()=>toggleDropdown('credentials'),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleDropdown('credentials');
                                        }
                                    },
                                    children: [
                                        "Credentials",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", activeDropdown === 'credentials' && "rotate-180"),
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeDropdown === 'credentials' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 mt-1 w-48 mongodb-card z-50",
                                    role: "menu",
                                    "aria-labelledby": "credentials-button",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2 text-sm text-gray-text",
                                            children: "Credential options would go here"
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            className: "mongodb-nav-link text-sm font-medium px-2 py-1 whitespace-nowrap flex-shrink-0 hidden xl:block",
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-shrink-0 ml-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "mongodb-button-outline flex items-center gap-2 text-xs md:text-sm whitespace-nowrap",
                        "aria-label": "Access VBUV-Cloud AI assistant",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-3 w-3 md:h-4 md:w-4 flex-shrink-0",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "VBUV-Cloud AI"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: "AI"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MongoDBStyleSubNav;
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/ConditionalNavigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionalNavigation",
    ()=>ConditionalNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$MongoDBStyleTopNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleTopNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$MongoDBStyleSubNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/MongoDBStyleSubNav.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ConditionalNavigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Check if we're on a course detail page or lesson page
    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname !== '/courses';
    // Use MongoDB-style navigation for course detail pages and lesson pages
    if (isCourseDetailPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$MongoDBStyleTopNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/ConditionalNavigation.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$MongoDBStyleSubNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/ConditionalNavigation.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    // Use default navigation for all other pages
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/layout/ConditionalNavigation.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__92c3da8b._.js.map