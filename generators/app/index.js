'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the outstanding ' + chalk.green('cool-component') + ' generator!'
    ));

    this.log(chalk.red('We are under development!'))

    var prompts = [
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [{
        name: 'Create new component',
        value: 'new'
      }/* , 
      {
        name: 'Rename',
        value: 'rename'
      }, {
        name: 'Move',
        value: 'move'
      }*/
      ]
    }, {
      type: 'confirm',
      name: 'path',
      message: 'The component is in this folder? (' + path.basename(this.env.cwd) + ')',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      if(props.path){
        props.path = path.basename(this.env.cwd);
      }

      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.composeWith('cool-component:component', this.props);
  },

  install: function () {
    // this.installDependencies();
  }
});
