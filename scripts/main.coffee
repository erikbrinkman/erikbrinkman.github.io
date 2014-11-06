# Filtering
PLEB_SEARCH.init '.filter', '.filterable', jQuery.fn.slideDown, jQuery.fn.slideUp

# Click to expand
$ '.block-list > li'
.click (event) ->
    do $ @
    .find '.click-expand'
    .slideToggle if event.target.tagName isnt 'A'
    return

# Smooth scrolling
$ 'nav a[href*=#]'
.click ->
    target = $ @hash
    $ 'html, body'
    .animate
        scrollTop: Math.min target.offset().top,
                            $(document).height() - $(window).height()
        , 600
    false

# Link highlighting
navLinks = $ 'nav a[href*=#]'
targets = $ navLinks.map ->
    do $ @hash
    .toArray
$ window
.scroll ->
    pos = do $ @
    .scrollTop
    [cur, ...] = targets.filter -> $(@).offset().top >= pos
    re = new RegExp("##{cur.id}$")
    (if re.test nl then $(nl).addClass 'active' else $(nl).removeClass 'active') for nl in navLinks
    return

# All keypresses sent to search box
searchBox = $ '.filter'
$ window
.keypress -> do searchBox.focus

return
