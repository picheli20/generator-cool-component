'use strict';
var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [{
      type: 'confirm',
      name: 'typeHtml',
      message: 'Should have a HTML?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = _.extend(props, this.options);
    }.bind(this));
  },

  writing: function () {
    if(this.props.typeHtml){
      this.fs.copyTpl(
        this.templatePath('_.template.html'),
        this.destinationPath(this.props.prefix + '.html'),
        this.props
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
