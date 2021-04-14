$(document).ready ->
  people = [
    '.liu'
    '.jheng'
    '.jhou'
    '.jiang'
    '.jhuang'
    '.syu'
    '.he'
  ]
  current = 0
  $('.photos').slick
    slidesToShow: 5
    slidesToScroll: 1
    centerMode: true
    infinite: true
    focusOnSelect: true
    centerPadding: '7%'
    prevArrow: $('.prev')
    nextArrow: $('.next')
  people.forEach (name) ->
    $('#member ' + name).css 'display', 'none'
    return
  $('.prev').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member ' + (if current == 0 then people[6] else people[current - 1])).css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member ' + (if current == 0 then people[6] else people[current - 1])).css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current--
      return
    ), 1000
    return
  $('.next').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member ' + people[(current + 1) % 7]).css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member ' + people[(current + 1) % 7]).css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current++
      return
    ), 1000
    return
  $('.member5').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .jhuang').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .jhuang').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 4
      return
    ), 1000
    return
  $('#member #menu .top .person_one').click (event) ->
    $('.photos').slick 'slickGoTo', 4
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .jhuang').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 4
    return
  $('.member3').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .jhou').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .jhou').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 2
      return
    ), 1000
    return
  $('#member #menu .top .person_two').click (event) ->
    $('.photos').slick 'slickGoTo', 2
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .jhou').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 2
    return
  $('.member4').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .jiang').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .jiang').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 3
      return
    ), 1000
    return
  $('#member #menu .top .person_three').click (event) ->
    $('.photos').slick 'slickGoTo', 3
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .jiang').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 3
    return
  $('.member6').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .syu').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .syu').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 5
      return
    ), 1000
    return
  $('#member #menu .bottom .person_four').click (event) ->
    $('.photos').slick 'slickGoTo', 5
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .syu').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 5
    return
  $('.member2').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .jheng').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .jheng').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 1
      return
    ), 1000
    return
  $('#member #menu .bottom .person_five').click (event) ->
    $('.photos').slick 'slickGoTo', 1
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .jheng').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 1
    return
  $('.member7').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .he').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .he').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 6
      return
    ), 1000
    return
  $('#member #menu .bottom .person_six').click (event) ->
    $('.photos').slick 'slickGoTo', 6
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .he').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 6
    return
  $('.member1').click (event) ->
    if $('#member #menu').css('display') == 'none'
      $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
        $('#member ' + people[current]).css 'display', 'none'
        $('#member .liu').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    else
      $('#member #menu').animate { opacity: 0 }, 500, ->
        $('#member #menu').css 'display', 'none'
        $('#member .liu').css(
          'opacity': '0'
          'display': 'flex').animate { opacity: 1 }, 500
        return
    setTimeout (->
      current = 0
      return
    ), 1000
    return
  $('#member #menu .bottom .person_seven').click (event) ->
    $('.photos').slick 'slickGoTo', 0
    $('#member #menu').animate { opacity: 0 }, 500, ->
      $('#member #menu').css 'display', 'none'
      $('#member .liu').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    current = 0
    return
  $('#member .back_button').click (event) ->
    $('#member ' + people[current]).animate { opacity: 0 }, 500, ->
      $('#member ' + people[current]).css 'display', 'none'
      $('#member #menu').css(
        'opacity': '0'
        'display': 'flex').animate { opacity: 1 }, 500
      return
    return
  return
