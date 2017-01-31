export const <%= name %>Route = {
  url: '/<%= nameDash %>',
  parent: 'menu',
  label: '<%= viewLabel %>',
  views: {
    '': {
      component: '<%= name %>'
    },
    'dados@<%= name %>': {
      template: require('./tabs/dados.html')
    },
    'anexo@<%= name %>': {
      template: require('./tabs/anexo.html')
    },
    'historico@<%= name %>': {
      template: require('./tabs/historico.html')
    }
  },
  params: {
  }
};
