class <%= name %>Ctrl {

}

export const <%= name %>Page = {
  template: require('./<%= nameDash %>.template.html'),
  controller: <%= name %>Ctrl,
  controllerAs: 'vm'
};
