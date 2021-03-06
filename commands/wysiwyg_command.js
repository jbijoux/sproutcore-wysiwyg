/*-------------------------------------------------------------------------------------------------
 - Project:   Sproutcore WYSIWYG                                                                  -
 - Copyright: ©2012 Matygo Educational Incorporated operating as Learndot                         -
 - Author:    Joe Gaudet (joe@learndot.com) and contributors (see contributors.txt)               -
 - License:   Licensed under MIT license (see license.js)                                         -
 -------------------------------------------------------------------------------------------------*/
/*globals SproutCoreWysiwyg */
sc_require('controls/wysiwyg_button_view');
/**
  @class
  
  A command object contains all of the information about a command including
  how it is executed.
  
  Required to implement execute: function(source, editor);
  
  If you implement a class you are required to add it to the command factory
  after your definition.
  
  @extends SC.Object
  @author Joe Gaudet - joe@learndot.com
*/
SC.WYSIWYGCommand = {

	/**
	  Quack like a duck
	*/
	isWYSIWYGCommand: YES,

	/**
	  @property {String} - Name of the command.
	*/
	commandName: '',

	/**
	  @property {String} - class name for the icon that represents this
	            command.
	*/
	icon: function() {
		return this.get('commandName').dasherize();
	}.property().cacheable(),

	/**
	  @property {String} - toolTip for this command, will be applied to the
	            control that invokes this command
	*/
	toolTip: function() {
		var keyEquivalent = SproutCoreWysiwyg.beautifyShortcut(this.get('keyEquivalent'));

		return this.get('title').loc() + (keyEquivalent ? ' (%@)'.fmt(keyEquivalent).toUpperCase() : '');
	}.property().cacheable(),

	title: function() {
		return this.get('commandName').titleize();
	}.property().cacheable(),

	/**
	  @property {String} - key equivalent that will execute this command.
	*/
	keyEquivalent: '',

	/**
	  @property {SC.View} - view to display in the toolbar
	*/
	exampleView: SC.WYSIWYGButtonView,

	/**
	  The expected interface through which commands are called.
	  
	  @param {SC.Control}
	             source - control that invoked this command
	  @param {SC.WYSIWYGEditorView}
	             editor - instance of the wysiwyg editor
	*/
	execute: function(source, editor) {
		SC.info('Override me for action');
	},

	cancelCommand: function(editor) {

	},

	toString: function() {
		return 'command: %@'.fmt(this.commandName);
	}
};
