export function showToast(
  title,
  icon = "success",
  successCallback,
  failCallback
) {
  let params = {
    title,
    icon
  }
  successCallback && (params.success = successCallback)
  failCallback && (params.fail = failCallback)
  wx.showToast(params)
}
