/* @ds-bundle: {"format":4,"namespace":"ShadcnUiDesignSystem_78dd73","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarImage","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarFallback","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardAction","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"TableHeader","sourcePath":"components/data/Table.jsx"},{"name":"TableBody","sourcePath":"components/data/Table.jsx"},{"name":"TableFooter","sourcePath":"components/data/Table.jsx"},{"name":"TableRow","sourcePath":"components/data/Table.jsx"},{"name":"TableHead","sourcePath":"components/data/Table.jsx"},{"name":"TableCell","sourcePath":"components/data/Table.jsx"},{"name":"TableCaption","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"RadioGroupItem","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"AccordionItem","sourcePath":"components/navigation/Accordion.jsx"},{"name":"AccordionTrigger","sourcePath":"components/navigation/Accordion.jsx"},{"name":"AccordionContent","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"BreadcrumbList","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"BreadcrumbItem","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"BreadcrumbLink","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"BreadcrumbPage","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"BreadcrumbSeparator","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsTrigger","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogTrigger","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogContent","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogHeader","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogFooter","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogTitle","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogDescription","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogClose","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuTrigger","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuContent","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuLabel","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuItem","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuShortcut","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"DropdownMenuSeparator","sourcePath":"components/overlays/DropdownMenu.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2d2e5f1ef516","components/core/Badge.jsx":"617ffa31df26","components/core/Button.jsx":"5796d1fd942c","components/core/Card.jsx":"a8e9118b7387","components/core/Kbd.jsx":"b31113781a58","components/core/Separator.jsx":"5051a78cf7d0","components/core/Skeleton.jsx":"6ffd82f86841","components/data/Table.jsx":"b358a2fe269f","components/feedback/Alert.jsx":"fab5122348e7","components/feedback/Progress.jsx":"e7b39a421b21","components/feedback/Tooltip.jsx":"e6a81296b487","components/forms/Checkbox.jsx":"db24bdf6ada0","components/forms/Input.jsx":"d296bd9bdaba","components/forms/Label.jsx":"bcde81cbce1c","components/forms/RadioGroup.jsx":"61cac1bb5298","components/forms/Select.jsx":"9293939f64b7","components/forms/Switch.jsx":"e47c30745b74","components/forms/Textarea.jsx":"f4975b258c72","components/forms/Toggle.jsx":"61a68a10af44","components/navigation/Accordion.jsx":"dc41428f8b08","components/navigation/Breadcrumb.jsx":"6e2450726ca2","components/navigation/Tabs.jsx":"b6f97448560b","components/overlays/Dialog.jsx":"e013d45aedf2","components/overlays/DropdownMenu.jsx":"e319251c2878"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShadcnUiDesignSystem_78dd73 = window.ShadcnUiDesignSystem_78dd73 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular user image with text fallback. */
function Avatar({
  size = "default",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-avatar ${className}`.trim(),
    "data-size": size
  }, props), children);
}
function AvatarImage({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    className: className
  }, props));
}
function AvatarFallback({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-avatar-fallback ${className}`.trim()
  }, props), children);
}
function AvatarGroup({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-avatar-group ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Avatar, AvatarImage, AvatarFallback, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category label. Pill-shaped. */
function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-badge ${className}`.trim(),
    "data-variant": variant
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Primary action trigger. Variants and sizes mirror the shadcn/ui registry. */
function Button({
  variant = "default",
  size = "default",
  className = "",
  type = "button",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: `ds-btn ${className}`.trim(),
    "data-variant": variant,
    "data-size": size
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card ${className}`.trim()
  }, props), children);
}
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-header ${className}`.trim()
  }, props), children);
}
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-title ${className}`.trim()
  }, props), children);
}
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-description ${className}`.trim()
  }, props), children);
}
function CardAction({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-action ${className}`.trim()
  }, props), children);
}
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-content ${className}`.trim()
  }, props), children);
}
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-card-footer ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Keyboard key indicator. */
function Kbd({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    className: `ds-kbd ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin divider line. */
function Separator({
  orientation = "horizontal",
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    className: `ds-separator ${className}`.trim(),
    "data-orientation": orientation
  }, props));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Loading placeholder block. Set width/height via style or className. */
function Skeleton({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-skeleton ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Data table. Compose native thead/tbody with the sub-parts below. */
function Table({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-table-container"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: `ds-table ${className}`.trim()
  }, props), children));
}
function TableHeader({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("thead", props, children);
}
function TableBody({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tbody", props, children);
}
function TableFooter({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tfoot", props, children);
}
function TableRow({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tr", props, children);
}
function TableHead({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("th", props, children);
}
function TableCell({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("td", props, children);
}
function TableCaption({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("caption", props, children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Callout box. Pass an inline SVG icon as the first child for the icon layout. */
function Alert({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: `ds-alert ${className}`.trim(),
    "data-variant": variant
  }, props), children);
}
function AlertTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-alert-title ${className}`.trim()
  }, props), children);
}
function AlertDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-alert-description ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Determinate progress bar. `value` is 0–100. */
function Progress({
  value = 0,
  className = "",
  ...props
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-progress ${className}`.trim(),
    role: "progressbar",
    "aria-valuenow": v,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "ds-progress-indicator",
    style: {
      width: `${v}%`
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip. Wraps a trigger; `content` is the bubble text. */
function Tooltip({
  content,
  side = "top",
  children,
  className = ""
}) {
  const [open, setOpen] = React.useState(false);
  const pos = side === "bottom" ? {
    top: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : side === "left" ? {
    right: "calc(100% + 6px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : side === "right" ? {
    left: "calc(100% + 6px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    bottom: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    className: `ds-tooltip ${className}`.trim(),
    role: "tooltip",
    style: {
      position: "absolute",
      whiteSpace: "nowrap",
      zIndex: 50,
      ...pos
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox. Uncontrolled by default; pass checked+onChange to control. */
function Checkbox({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: `ds-checkbox ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  className = "",
  type = "text",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: `ds-input ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Form label. Set htmlFor to the field id. */
function Label({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: `ds-label ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio group. Give all items the same `name`. */
function RadioGroup({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-radio-group ${className}`.trim(),
    role: "radiogroup"
  }, props), children);
}
function RadioGroupItem({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: `ds-radio ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { RadioGroup, RadioGroupItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select. Pass <option> children. */
function Select({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: `ds-select ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off switch. Uncontrolled by default; pass checked+onChange to control. */
function Switch({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: `ds-switch ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: `ds-textarea ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Two-state toggle button. Uncontrolled unless `pressed` is passed. */
function Toggle({
  variant = "default",
  pressed,
  defaultPressed = false,
  onPressedChange,
  className = "",
  children,
  ...props
}) {
  const isControlled = pressed !== undefined;
  const [on, setOn] = React.useState(defaultPressed);
  const active = isControlled ? pressed : on;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `ds-toggle ${className}`.trim(),
    "data-variant": variant,
    "data-state": active ? "on" : "off",
    "aria-pressed": active,
    onClick: () => {
      const next = !active;
      if (!isControlled) setOn(next);
      onPressedChange && onPressedChange(next);
    }
  }, props), children);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ChevronDown = props => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/** Vertical stack of expandable panels. type "single" (default) or "multiple". */
function Accordion({
  type = "single",
  defaultValue,
  className = "",
  children,
  ...props
}) {
  const initial = defaultValue == null ? [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const [open, setOpen] = React.useState(initial);
  const toggle = v => setOpen(cur => {
    const has = cur.includes(v);
    if (type === "multiple") return has ? cur.filter(x => x !== v) : [...cur, v];
    return has ? [] : [v];
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-accordion ${className}`.trim()
  }, props), React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
    _open: open.includes(child.props.value),
    _toggle: () => toggle(child.props.value)
  }) : child));
}
function AccordionItem({
  _open,
  _toggle,
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-accordion-item ${className}`.trim(),
    "data-state": _open ? "open" : "closed"
  }, props), React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
    _open,
    _toggle
  }) : child));
}
function AccordionTrigger({
  _open,
  _toggle,
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `ds-accordion-trigger ${className}`.trim(),
    "data-state": _open ? "open" : "closed",
    "aria-expanded": _open,
    onClick: _toggle
  }, props), children, /*#__PURE__*/React.createElement(ChevronDown, {
    width: "16",
    height: "16"
  }));
}
function AccordionContent({
  _open,
  className = "",
  children,
  ...props
}) {
  if (!_open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-accordion-content ${className}`.trim()
  }, props), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Accordion, AccordionItem, AccordionTrigger, AccordionContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumb trail. Compose items and separators. */
function Breadcrumb({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "breadcrumb",
    className: className
  }, props), children);
}
function BreadcrumbList({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexWrap: "wrap",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)"
    }
  }, props), children);
}
function BreadcrumbItem({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, props), children);
}
function BreadcrumbLink({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: className,
    style: {
      color: "inherit",
      textDecoration: "none"
    },
    onMouseOver: e => e.currentTarget.style.color = "var(--foreground)",
    onMouseOut: e => e.currentTarget.style.color = "inherit"
  }, props), children);
}
function BreadcrumbPage({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-current": "page",
    style: {
      color: "var(--foreground)",
      fontWeight: "var(--font-weight-normal)"
    }
  }, props), children);
}
function BreadcrumbSeparator({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    "aria-hidden": true,
    className: className,
    style: {
      display: "inline-flex"
    }
  }, props), children ?? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })));
}
Object.assign(__ds_scope, { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TabsCtx = React.createContext(null);

/** Tabbed section. Provide value/onValueChange to control, or defaultValue. */
function Tabs({
  defaultValue,
  value,
  onValueChange,
  className = "",
  children,
  ...props
}) {
  const isControlled = value !== undefined;
  const [val, setVal] = React.useState(defaultValue);
  const active = isControlled ? value : val;
  const setActive = v => {
    if (!isControlled) setVal(v);
    onValueChange && onValueChange(v);
  };
  return /*#__PURE__*/React.createElement(TabsCtx.Provider, {
    value: {
      active,
      setActive
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-tabs ${className}`.trim()
  }, props), children));
}
function TabsList({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-tabs-list ${className}`.trim(),
    role: "tablist"
  }, props), children);
}
function TabsTrigger({
  value,
  className = "",
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  const active = ctx && ctx.active === value;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    className: `ds-tabs-trigger ${className}`.trim(),
    "data-state": active ? "active" : "inactive",
    "aria-selected": active,
    onClick: () => ctx && ctx.setActive(value)
  }, props), children);
}
function TabsContent({
  value,
  className = "",
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  if (!ctx || ctx.active !== value) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-tabs-content ${className}`.trim(),
    role: "tabpanel"
  }, props), children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsTrigger, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DialogCtx = React.createContext(null);

/** Modal dialog. Uncontrolled via trigger, or controlled with open/onOpenChange. */
function Dialog({
  open,
  onOpenChange,
  defaultOpen = false,
  children
}) {
  const isControlled = open !== undefined;
  const [o, setO] = React.useState(defaultOpen);
  const isOpen = isControlled ? open : o;
  const setOpen = v => {
    if (!isControlled) setO(v);
    onOpenChange && onOpenChange(v);
  };
  return /*#__PURE__*/React.createElement(DialogCtx.Provider, {
    value: {
      isOpen,
      setOpen
    }
  }, children);
}
function DialogTrigger({
  asChild,
  children,
  ...props
}) {
  const ctx = React.useContext(DialogCtx);
  const onClick = e => {
    children?.props?.onClick?.(e);
    ctx.setOpen(true);
  };
  if (asChild && React.isValidElement(children)) return React.cloneElement(children, {
    onClick
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, props), children);
}
function DialogContent({
  className = "",
  children,
  showCloseButton = true,
  ...props
}) {
  const ctx = React.useContext(DialogCtx);
  if (!ctx.isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "grid",
      placeItems: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-dialog-overlay",
    style: {
      position: "fixed"
    },
    onClick: () => ctx.setOpen(false)
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    className: `ds-dialog ${className}`.trim()
  }, props), children, showCloseButton && /*#__PURE__*/React.createElement("button", {
    className: "ds-dialog-close",
    "aria-label": "Close",
    onClick: () => ctx.setOpen(false)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))));
}
function DialogHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dialog-header ${className}`.trim()
  }, props), children);
}
function DialogFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dialog-footer ${className}`.trim()
  }, props), children);
}
function DialogTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dialog-title ${className}`.trim()
  }, props), children);
}
function DialogDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dialog-description ${className}`.trim()
  }, props), children);
}
function DialogClose({
  asChild,
  children,
  ...props
}) {
  const ctx = React.useContext(DialogCtx);
  const onClick = e => {
    children?.props?.onClick?.(e);
    ctx.setOpen(false);
  };
  if (asChild && React.isValidElement(children)) return React.cloneElement(children, {
    onClick
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, props), children);
}
Object.assign(__ds_scope, { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/DropdownMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MenuCtx = React.createContext(null);

/** Dropdown menu opened by a trigger button. */
function DropdownMenu({
  children
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement(MenuCtx.Provider, {
    value: {
      open,
      setOpen
    }
  }, /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children));
}
function DropdownMenuTrigger({
  asChild,
  children,
  ...props
}) {
  const ctx = React.useContext(MenuCtx);
  const onClick = e => {
    children?.props?.onClick?.(e);
    ctx.setOpen(v => !v);
  };
  if (asChild && React.isValidElement(children)) return React.cloneElement(children, {
    onClick
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, props), children);
}
function DropdownMenuContent({
  align = "start",
  className = "",
  children,
  ...props
}) {
  const ctx = React.useContext(MenuCtx);
  if (!ctx.open) return null;
  const alignStyle = align === "end" ? {
    right: 0
  } : align === "center" ? {
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    left: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-menu ${className}`.trim(),
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      zIndex: 50,
      ...alignStyle
    }
  }, props), children);
}
function DropdownMenuLabel({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-menu-label ${className}`.trim()
  }, props), children);
}
function DropdownMenuItem({
  variant = "default",
  className = "",
  children,
  onClick,
  ...props
}) {
  const ctx = React.useContext(MenuCtx);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menuitem",
    className: `ds-menu-item ${className}`.trim(),
    "data-variant": variant,
    onClick: e => {
      onClick && onClick(e);
      ctx.setOpen(false);
    }
  }, props), children);
}
function DropdownMenuShortcut({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-menu-shortcut ${className}`.trim()
  }, props), children);
}
function DropdownMenuSeparator({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-menu-separator ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuSeparator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarImage = __ds_scope.AvatarImage;

__ds_ns.AvatarFallback = __ds_scope.AvatarFallback;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardAction = __ds_scope.CardAction;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableFooter = __ds_scope.TableFooter;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.TableCaption = __ds_scope.TableCaption;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.RadioGroupItem = __ds_scope.RadioGroupItem;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.AccordionTrigger = __ds_scope.AccordionTrigger;

__ds_ns.AccordionContent = __ds_scope.AccordionContent;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.BreadcrumbList = __ds_scope.BreadcrumbList;

__ds_ns.BreadcrumbItem = __ds_scope.BreadcrumbItem;

__ds_ns.BreadcrumbLink = __ds_scope.BreadcrumbLink;

__ds_ns.BreadcrumbPage = __ds_scope.BreadcrumbPage;

__ds_ns.BreadcrumbSeparator = __ds_scope.BreadcrumbSeparator;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsTrigger = __ds_scope.TabsTrigger;

__ds_ns.TabsContent = __ds_scope.TabsContent;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DialogTrigger = __ds_scope.DialogTrigger;

__ds_ns.DialogContent = __ds_scope.DialogContent;

__ds_ns.DialogHeader = __ds_scope.DialogHeader;

__ds_ns.DialogFooter = __ds_scope.DialogFooter;

__ds_ns.DialogTitle = __ds_scope.DialogTitle;

__ds_ns.DialogDescription = __ds_scope.DialogDescription;

__ds_ns.DialogClose = __ds_scope.DialogClose;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.DropdownMenuTrigger = __ds_scope.DropdownMenuTrigger;

__ds_ns.DropdownMenuContent = __ds_scope.DropdownMenuContent;

__ds_ns.DropdownMenuLabel = __ds_scope.DropdownMenuLabel;

__ds_ns.DropdownMenuItem = __ds_scope.DropdownMenuItem;

__ds_ns.DropdownMenuShortcut = __ds_scope.DropdownMenuShortcut;

__ds_ns.DropdownMenuSeparator = __ds_scope.DropdownMenuSeparator;

})();
