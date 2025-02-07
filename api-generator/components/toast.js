const ToastProps = [
    {
        name: "group",
        type: "string",
        default: "null",
        description: "Unique identifier of a message group."
    },
    {
        name: "position",
        type: "string",
        default: "top-right",
        description: 'Position of the toast in viewport. Other valid values are "top-left", "top-center", "bottom-left", "botton-center", "bottom-right" and "center".'
    },
    {
        name: "autoZIndex",
        type: "boolean",
        default: "true",
        description: "Whether to automatically manage layering."
    },
    {
        name: "baseZIndex",
        type: "number",
        default: "0",
        description: "Base zIndex value to use in layering."
    },
    {
        name: "breakpoints",
        type: "object",
        default: "null",
        description: "Object literal to define styles per screen size."
    }
];

const ToastSlots = [
    {
        name: "message",
        description: "Custom content for the component."
    }
];

const ToastMessageProps = [
    {
        name: "iconProp",
        type: "string",
        default: "null",
        description: "Html content for message icon"
    }
]

module.exports = {
    toast: {
        name: "Toast",
        description: "Toast is used to display messages in an overlay.",
        props: ToastProps,
        slots: ToastSlots,
        messageProps: ToastMessageProps
    }
};
