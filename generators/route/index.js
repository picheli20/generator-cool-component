'use strict';
var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [{
      type: 'list',
      name: 'routeType',
      message: 'Which type of route are you using?',
      choices: [{
        name: 'Normal',
        value: 'default'
      }, {
        name: 'With views',
        value: 'views'
      }, {
        name: 'none',
        value: 'none'
      }]
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = _.extend(props, this.options);
    }.bind(this));
  },

  writing: function () {
    if(this.props.routeType !== 'none'){
      this.fs.copyTpl(
        this.templatePath(this.props.routeType + '/_.route.js'),
        this.destinationPath(this.props.prefix + '.route.js'),
        this.props
      );
    }

    if(this.props.routeType === 'views'){
      this.fs.copyTpl(
        this.templatePath(this.props.routeType + '/tabs/anexo.html'),
        this.destinationPath(this.props.nameDash + '/tabs/anexo.html'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.routeType + '/tabs/dados.html'),
        this.destinationPath(this.props.nameDash + '/tabs/dados.html'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.routeType + '/tabs/historico.html'),
        this.destinationPath(this.props.nameDash + '/tabs/historico.html'),
        this.props
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
