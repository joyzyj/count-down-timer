window.count = 0
window.t = 0

//点击按钮开始倒计时
function startCount (once) {

  var hour = document.getElementById('hourId').value
  var minute = document.getElementById('minuteId').value
  var second = document.getElementById('secondId').value

  if (minute > 60 || second > 60) {
    alert ('请输入正确数字！')
    return
  }

  if (second == 0 && minute == 0 && hour == 0 && count==1) {
    alert('时间到了！')
    return
  }

  if (count == 0) {
    document.getElementById('hourId').value = addZero (hour)
    document.getElementById('minuteId').value = addZero (minute)
    document.getElementById('secondId').value = addZero (second)

    document.getElementById('hourChar').style.fontSize="80px"
    document.getElementById('hourChar').value = "："
    document.getElementById('minuteChar').style.fontSize="80px"
    document.getElementById('minuteChar').value = "："
    document.getElementById('secondChar').value = " "

    document.getElementById('hourId').style.color="#000"
    document.getElementById('minuteId').style.color="#000"
    document.getElementById('secondId').style.color="#000"

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

    document.getElementById('hourId').value = addZero (hour)
    document.getElementById('minuteId').value = addZero (minute)
    document.getElementById('secondId').value = addZero (second)

    t = setTimeout('startCount()',1000)
  }
}

//点击按钮暂停倒计时
function stopCount () {
  clearTimeout(t)
  count = 0
}

//点击按钮重置时间为0
function resetCount () {
  document.getElementById('hourId').value = '00'
  document.getElementById('hourId').style.color='rgba(1,0,0,0.2)'

  document.getElementById('minuteId').value = '00'
  document.getElementById('minuteId').style.color='rgba(1,0,0,0.2)'

  document.getElementById('secondId').value = '00'
  document.getElementById('secondId').style.color='rgba(1,0,0,0.2)'

  document.getElementById('hourChar').style.fontSize="30px"
  document.getElementById('hourChar').value = "小时"
  document.getElementById('minuteChar').style.fontSize="30px"
  document.getElementById('minuteChar').value = "分钟"
  document.getElementById('secondChar').value = "秒"
  return
}

//输出指定位长的数字
function addZero (num) {
  var str = '00' + num
  return str.substring(str.length-2, str.length)
}

//文本框被点击时改变样式
function setStyle (x) {
  document.getElementById(x).value = ""
  document.getElementById(x).style.color="#000"
}
