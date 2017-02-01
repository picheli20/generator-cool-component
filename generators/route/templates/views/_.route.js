export const <%= name %>Route = {
  url: '/<%= nameDash %>',
  parent: 'menu',
  label: '<%= viewLabel %>',
  views: {
    '': {
      component: '<%= name %>'
    },
    'dados@<%= nameDash %>': {
      template: require('./tabs/dados.html')
    },
    'anexo@<%= nameDash %>': {
      template: require('./tabs/anexo.html')
    },
    'historico@<%= nameDash %>': {
      template: require('./tabs/historico.html')
    }
  },
  params: {
  }
};
