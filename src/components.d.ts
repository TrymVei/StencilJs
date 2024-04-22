/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CardComponent {
        /**
          * Card title
         */
        "cardTitle": string;
        /**
          * Image alt
         */
        "imageAlt": string;
        /**
          * Image source
         */
        "imageSrc": string;
    }
    interface GridComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TabComponent {
    }
}
declare global {
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLGridComponentElement extends Components.GridComponent, HTMLStencilElement {
    }
    var HTMLGridComponentElement: {
        prototype: HTMLGridComponentElement;
        new (): HTMLGridComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTabComponentElement extends Components.TabComponent, HTMLStencilElement {
    }
    var HTMLTabComponentElement: {
        prototype: HTMLTabComponentElement;
        new (): HTMLTabComponentElement;
    };
    interface HTMLElementTagNameMap {
        "card-component": HTMLCardComponentElement;
        "grid-component": HTMLGridComponentElement;
        "my-component": HTMLMyComponentElement;
        "tab-component": HTMLTabComponentElement;
    }
}
declare namespace LocalJSX {
    interface CardComponent {
        /**
          * Card title
         */
        "cardTitle"?: string;
        /**
          * Image alt
         */
        "imageAlt"?: string;
        /**
          * Image source
         */
        "imageSrc"?: string;
    }
    interface GridComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TabComponent {
    }
    interface IntrinsicElements {
        "card-component": CardComponent;
        "grid-component": GridComponent;
        "my-component": MyComponent;
        "tab-component": TabComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "grid-component": LocalJSX.GridComponent & JSXBase.HTMLAttributes<HTMLGridComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "tab-component": LocalJSX.TabComponent & JSXBase.HTMLAttributes<HTMLTabComponentElement>;
        }
    }
}
