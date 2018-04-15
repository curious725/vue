$(document).ready(function(){

  // include Vue in jquery
  var initialText, correctText;

  initialText = 'Me  is  sad because he  is  more  clever  than  I.';
  correctText =   'I  am  sad because he  is  more  clever  than  me.';  
   
  new Vue({
    el: '#pronouns',
    data: {
      text: initialText,
      correct: false
    },
    methods: {
      checkText: function() {
        var text;
        text = this.text.trim();
        this.correct = text === correctText;
      }
    }
  })

  /**
  * Add button click handler
  */
  function onAdd() {
    var $ul, li, $li, $label, $div, value;

    value = $('.js-new-item').val();
    //validate against empty values
    if (value === '') {
      return;
    }
    $ul = $('ul');
    $li = $('<li>').appendTo($ul);
    $div = $('<div>')
        .addClass('checkbox')
        .appendTo($li);
    $label = $('<label>').appendTo($div);
    $('<input>')
        .attr('type', 'checkbox')
        .addClass('item')
        .attr('name', 'list')
        .click(toggleRemoved)
        .appendTo($label);
    $label
        .append(value);
    $('.js-new-item').val('');
  }

  /**
  * Checkbox click handler - toggles class removed on li parent element
  *
  */
  function toggleRemoved(ev) {
    var $el;

    $el = $(ev.currentTarget);
    $el.closest('li').toggleClass('removed');
  }

  function onChangeTitle() {
    $('h2').text($('.js-change-title').val())
  }

  $('.js-add').click(onAdd);
  $('.js-item').click(toggleRemoved);
  $('.js-change-title').keyup(onChangeTitle);
});
