import Link from 'next/link'

function LogoBox() {
  return (
    <div
      className="logo-box wow fadeInDown"
      data-wow-duration="2s"
      data-wow-delay="0.5s"
    >
      <Link href="/home" passHref>
        <a>
          <img
            src="images/logo.png"
            alt=""
            className="img-responsive center-block"
          />
        </a>
      </Link>
    </div>
  )
}

export default LogoBox
