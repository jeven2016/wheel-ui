var config = {

  scssFile: {
    elems: {
      path: 'src/elements',
      config: {
        blockquota: true,
        badge: true,
        checkbox: true,
        headings: true,
        input: true,
        'input-group': true,
        popup: true,
        dropdown: true,
        drawer: true,
        button: true,
        'button-group': true,
        card: true,
        layout: true,
        dialog: true,
        tabs: true,
        navbar: true,
        menu: true,
        divider: true,
        popovers: true,
        tooltip: true,
        breadcrumb: true,
        form: true,
        table: true,
        pagination: true,
        loading: true,
        accordion: true,
        toggle: true,
        alert: true,
        progress: true,
        select: true,
        carousel: true,
        affix: true

      },
    },

    variableFile: '_variables.scss',
    base: {
      path: 'src/',
      file: ['_normalize.scss', '_variables.scss'],
    },
    mixin: {
      path: 'src/mixin',
      file: [
        '_common.scss',
        '_button.scss',
        '_disabled.scss',
        '_display.scss',
        '_variant-size.scss',
        '_pseudo_class.scss',
        '_layout.scss',
        '_input.scss',
        '_navbar.scss',
        '_menu.scss',
        '_table.scss',
        '_align.scss',
        '_border-radius.scss',
        '_hover_focus_active.scss',
        '_flex.scss',
        '_child-margin.scss',
        '_width.scss'],
    },

    themes: {
      path: 'src/themes',
    },

    common: {
      path: 'src/elements/common',
    },

  },

};

module.exports = config;