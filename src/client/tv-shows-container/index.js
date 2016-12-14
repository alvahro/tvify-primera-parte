/**
 * Module Dependencies
 */

import $ from 'jquery'

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this);
  $this.data('id')
  $this.closest('.tv-show').toggleClass('liked')
})

export default $tvShowsContainer