import React from "react";
import ReactDOM from "react-dom";

const withReactVueComponent = (Component) => {
  return {
    methods: {
      renderReactComponent() {
        const props = {
          ...this.$props,
          ...this.$attrs,
          ...this.$listeners,
        };

        ReactDOM.render(
          React.createElement(Component, props),
          this.$refs.react
        );
      },
    },
    mounted() {
      this.renderReactComponent();
    },
    beforeDestroy() {
      ReactDOM.unmountComponentAtNode(this.$refs.react);
    },
    updated() {
      this.renderReactComponent();
    },
    render(createElement) {
      return createElement("div", { ref: "react" });
    },
    inheritAttrs: false,
    watch: {
      $attrs: {
        handler() {
          this.renderReactComponent();
        },
        deep: true,
      },
      $props: {
        handler() {
          this.renderReactComponent();
        },
      },
      $listeners: {
        handler() {
          this.renderReactComponent();
        },
        deep: true,
      },
    },
  };
};

export const withDirectusReact = (extensionConfig) => (Component) => {
  return {
    ...extensionConfig,
    component: withReactVueComponent(Component),
  };
};
