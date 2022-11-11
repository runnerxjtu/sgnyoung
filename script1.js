$.fn.commentCards = function(){

  return this.each(function(){

    var $this = $(this),
        $cards = $this.find('.ccard'),
        $current = $cards.filter('.ccard--current'),
        $next;

    $cards.on('click',function(){
      if ( !$current.is(this) ) {
        $cards.removeClass('ccard--current ccard--out ccard--next');
        $current.addClass('ccard--out');
        $current = $(this).addClass('ccard--current');
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass('ccard--next');
      }
    });

    if ( !$current.length ) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('ccards--active');

  })

};

$('.ccards').commentCards();