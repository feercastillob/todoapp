import { camelCase, upperFirst } from "lodash-es";

export const registerBaseComponents = (vm) => {
  try {
    const requireComponent = require.context(
      "@/components/base",
      true,
      /Base[\w-]+\.vue$/
    );
    requireComponent.keys().forEach((filePath) => {
      const fileName = filePath.split("/").slice(-1)[0];
      const componentConfig = requireComponent(filePath);
      const componentName = upperFirst(
        camelCase(fileName.replace(/\.\w+$/, "").replace("Base", "H"))
      );
      vm.component(componentName, componentConfig.default || componentConfig);
    });
  } catch (error) {
    console.log("Base components registration failed");
    console.error(error);
  }
};
