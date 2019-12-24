/* 窗口全屏封装 */
// 全屏
function requestFullScreen (element) {
  var requestMethod = element.requestFullScreen || // W3C
		element.webkitRequestFullScreen || // Chrome等
		element.mozRequestFullScreen || // FireFox
		element.msRequestFullScreen // IE11
	
  if (requestMethod) {
    requestMethod.call(element)
  } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explore
    var wscript = new ActiveXObject('WScript.Shell')
    if (wscript !== null) {
      wscript.SendKeys('{F11}')
    }
  }
}

// 退出全屏
function exitFull () {
  var exitMethod = document.exitFullscreen || // W3C
		document.webkitCancelFullScreen || // Chrome等
		document.mozCancelFullScreen || // Firefox
		document.msExitFullscreen // IE11
  if (exitMethod) {
    exitMethod.call(document)
  } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explore
    var wscript = new ActiveXObject('WScript.Shell')
    if (wscript !== null) {
      wscript.SendKeys('{F11}')
    }
  }
}

// 监听窗口全屏状态变化
function fullScreenChange (el, callback) {
  // W3C
  el.addEventListener('fullscreenchange', function () {
    callback && callback(document.fullscreen)
  })
  // Chrome
  el.addEventListener('webkitfullscreenchange', function () {
    callback && callback(document.webkitIsFullScreen)
  })
  // Firefox
  el.addEventListener('mozfullscreenchange', function () {
    callback && callback(document.mozFullScreen)
  })
  // IE11
  el.addEventListener('msfullscreenchange', function () {
    callback && callback(document.msFullscreenElement)
  })
}