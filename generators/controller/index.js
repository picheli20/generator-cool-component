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
    }, {
      when: function (response) {
        return response.jsType !== 'none';
      },
      type: 'list',
      name: 'generatedType',
      message: 'What do you want to generate?',
      choices: [{
        name: 'Controller',
        value: 'controller'
      }, {
        name: 'Component',
        value: 'component'
      }, {
        name: 'Service',
        value: 'service'
      }]
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = _.extend(props, this.options);
    }.bind(this));
  },

  writing: function () {
    if(this.props.jsType !== 'none'){
      this.fs.copyTpl(
        this.templatePath('_.'+ this.props.generatedType +'.js'),
        this.destinationPath(this.props.prefix + '.'+ this.props.generatedType +'.js'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_.spec.'+ this.props.generatedType +'.js'),
        this.destinationPath(this.props.prefix + '.spec.js'),
        this.props
      );

      if(this.props.generatedType === 'controller'){
        this.composeWith('cool-component:route', this.props);
      }
    }
  }
});
