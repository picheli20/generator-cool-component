'use strict';
var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [{
      type: 'list',
      name: 'jsType',
      message: 'Which JS are you using?',
      choices: [{
        name: 'ECS6',
        value: 'ecs6'
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
    if(this.props.jsType !== 'none'){
      this.fs.copyTpl(
        this.templatePath('_.controller.js'),
        this.destinationPath(this.props.prefix + '.controller.js'),
        this.props
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
