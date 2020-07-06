const Project = require('./.elek.io/project.json');

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: Project.pages.map((page) => {
        return page.path;
      }),
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
