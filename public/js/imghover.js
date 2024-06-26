document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('a img')
  images.forEach((img) => {
    console.log(this.dataset.activeSrc)
    img.addEventListener('mouseenter', function () {
      this.dataset.originalSrc = this.src
      this.src = this.dataset.activeSrc
    })

    img.addEventListener('mouseleave', function () {
      this.src = this.dataset.originalSrc
    })
  })
})
