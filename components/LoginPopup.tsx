import React from 'react'

function LoginPopup() {
  return (
    <div className="hw-overlay2" id="hw-layer02">
      <div className="hw-layer-wrap2">
        <span className="glyphicon glyphicon-remove hwLayer-close2" />
        <div className="hw-layer-wrap2-header">
          <h1 className="text-center">登入</h1>
        </div>
        <div className="hw-content2">
          <button type="button" className="btn btn-default pop-btn-lg">
            <img src="images/icon_loginApple.png" alt="" />
            Apple ID登入
          </button>
          <button type="button" className="btn btn-default pop-btn-lg">
            <img src="images/icon_loginLine.png" alt="" />
            Line登入
          </button>
          <form className="form-horizontal" role="form">
            <div className="input-group pop-btn-lg2">
              <div className="input-group-btn2">
                <select className="form-control2">
                  <option value={1}>1(美國)</option>
                  <option value={60}>60(馬來西亞)</option>
                  <option value={852}>852(香港)</option>
                  <option value={886} selected>
                    886(台灣)
                  </option>
                </select>
              </div>
              {/* /btn-group */}
              <input type="text" className="input-group-btn3" />
              <hr className="float-none" />
            </div>
            {/* /input-group */}
            <div className="pop-form-group">
              <label htmlFor="verify" className="col-lg-12 control-label">
                簡訊驗證碼
              </label>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control input-lg form-verify"
                  id="verify"
                  placeholder="請輸簡訊驗證碼"
                />
                <button
                  type="button"
                  className="btn btn-default btn-lg btn-verify"
                >
                  發送驗證碼
                </button>
                <hr className="float-none" />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-default pop-btn-login btn-lg"
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup
