'use strict';
var Generator = require('yeoman-generator');
var _ = require('lodash');


String.prototype.toDash = function(){
  return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
};
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [{
      type: 'name',
      name: 'name',
      message: 'What is the component name? (Ex.: testingApp will be testing-app.XXX.js)',
    }];

    return this.prompt(prompts).then(function (props) {
      props.nameFirstUpper = props.name.capitalizeFirstLetter();
      props.nameDash = props.name.toDash();
      props.prefix = props.nameDash + '/' + props.nameDash;
      this.props = _.extend(props, this.options);
    }.bind(this));
  },

  writing: function () {
    this.composeWith('cool-component:controller', this.props);
    this.composeWith('cool-component:css', this.props);
    this.composeWith('cool-component:html', this.props);
    // this.composeWith('cool-component:inject', this.props);
  },

  install: function () {
    // this.installDependencies();
  }
});
