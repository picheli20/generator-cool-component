class <%= name %>Controller {

}

export const <%= name %>Page = {
  template: require('./<%= nameDash %>.html'),
  controller: <%= name %>Controller,
  controllerAs: 'vm'
};
