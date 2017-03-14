import angular from 'angular';
import ButtonController from './controllers/button';

angular
    .module('app', [])
    .controller('ButtonController', ButtonController);