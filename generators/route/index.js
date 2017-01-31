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
    },
    {
      when: function (response) {
        return response.routeType === 'views';
      },
      type: 'name',
      name: 'viewLabel',
      message: 'What is the route label?'
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
      var paths = [
        {
          'templates' : this.props.routeType + '/tabs/anexo.html',
          'destination' : this.props.nameDash + '/tabs/anexo.html'
        },
        {
          'templates' : this.props.routeType + '/tabs/dados.html',
          'destination' : this.props.nameDash + '/tabs/dados.html'
        },
        {
          'templates' : this.props.routeType + '/tabs/historico.html',
          'destination' : this.props.nameDash + '/tabs/historico.html'
        }
      ];

      var self = this;

      paths.map(function(item) {
        self.fs.copyTpl(
          self.templatePath(item.templates),
          self.destinationPath(item.destination),
          self.props
        );
      })
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
