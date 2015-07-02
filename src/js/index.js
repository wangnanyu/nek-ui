/**
 * ------------------------------------------------------------
 * RGUI      Regular UI库
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var RGUI = {}

/**
 * base
 */
RGUI.Regular = require('regularjs');
RGUI.Component = require('./base/component.js');
RGUI._ = require('./base/util.js');
RGUI.request = require('./base/request.js');

/**
 * jsUnit
 */
// 消息类
RGUI.Notify = require('./unit/notify.js');
RGUI.Progress = require('./unit/progress.js');

// 效果类
RGUI.DropDown = require('./unit/dropDown.js');

// 表单类
RGUI.InputEx = require('./unit/inputEx.js');
RGUI.CheckEx = require('./unit/checkEx.js');
RGUI.CheckGroup = require('./unit/checkGroup.js');
RGUI.CheckExGroup = require('./unit/checkExGroup.js');
RGUI.RadioGroup = require('./unit/radioGroup.js');
RGUI.RadioExGroup = require('./unit/radioExGroup.js');
RGUI.SelectEx = require('./unit/selectEx.js');
RGUI.Suggest = require('./unit/suggest.js');

// 数据类
RGUI.ListBox = require('./unit/listBox.js');
RGUI.ListView = require('./unit/listView.js');
RGUI.GridView = require('./unit/gridView.js');
RGUI.TreeView = require('./unit/treeView.js');
RGUI.TableView = require('./unit/tableView.js');
RGUI.TreeSelect = require('./unit/treeSelect.js');

// 日期类
RGUI.Calendar = require('./unit/calendar.js');
RGUI.DatePicker = require('./unit/datePicker.js');
RGUI.TimePicker = require('./unit/timePicker.js');
RGUI.DateTimePicker = require('./unit/dateTimePicker.js');

/**
 * jsModule
 */
// 导航类
RGUI.Tab = require('./module/tab.js');
RGUI.Pager = require('./module/pager.js');

// 窗口类
RGUI.Modal = require('./module/modal.js');

// 编辑器类
RGUI.Editor = require('./module/editor.js');
RGUI.MarkEditor = require('./module/markEditor.js');

module.exports = window.RGUI = RGUI;