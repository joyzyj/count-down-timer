window.count = 0
window.t = 0

function startCount () {

  var hour = document.getElementById('hourId').value
  var minute = document.getElementById('minuteId').value
  var second = document.getElementById('secondId').value

  if (minute > 60 || second > 60) {
    alert ('请输入正确数字！')
    return
  }

  if (second == 0 && minute == 0 && hour == 0) {
    alert ('时间到了～')
    return
  }

  if (count == 0) {
    document.getElementById('hourId').value = hour
    document.getElementById('minuteId').value = minute
    document.getElementById('secondId').value = second
    count = 1
    t = setTimeout('startCount()',1000)
  }

  else {

    second -= 1

    if (second < 0 && minute > 0) {
      second -= 0
      second += 60
      minute -= 1
    }

    else if (second < 0 && minute == 0) {
      second -= 0
      second += 60
      minute -= 0
      minute += 59
      hour -= 1
    }

    document.getElementById('hourId').value = hour
    document.getElementById('minuteId').value = minute
    document.getElementById('secondId').value = second

    t = setTimeout('startCount()',1000)
  }
}

function stopCount () {
  clearTimeout(t)
  count = 0
}
