import React, { useState } from 'react'

function usePaymentWin() {
  const [resUrl, setResUrl] = useState('')
  const [resHtml, setResHtml] = useState('')
  const openPaymentWin = () => {
    if (!resUrl || !resHtml) return
    const win = window.open(resUrl, 'payment')
    const doc = resHtml.replace('<head>', `<head>\n<base href="${resUrl}">`)
    win?.document.write(doc)
    win?.document.close()
    setResUrl('')
    setResHtml('')
  }
  return {
    resUrl,
    setResUrl,
    resHtml,
    setResHtml,
    openPaymentWin,
  }
}

export default usePaymentWin
