'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

String.prototype.toDash = function(){
  return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
};

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [{
      type: 'list',
      name: 'cssExtention',
      message: 'Which CSS extentions?',
      choices: [{
        name: 'SASS',
        value: 'scss'
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
    if(this.props.cssExtention !== 'none'){
      this.fs.copyTpl(
        this.templatePath('_.style.' + this.props.cssExtention),
        this.destinationPath(this.props.prefix + '.' + this.props.cssExtention),
        this.props
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
