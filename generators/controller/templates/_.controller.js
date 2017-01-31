class <%= name %>Ctrl {

}

export const <%= name %>Page = {
  template: require('./<%= nameDash %>.html'),
  controller: <%= name %>Ctrl,
  controllerAs: 'vm'
};
