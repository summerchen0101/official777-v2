type SubNavType = {
  label: string
  onClick?: () => void
}

interface HeaderNavItemProps {
  onClick?: () => void
  label: string
  subs?: SubNavType[]
}

function HeaderNavItem({ onClick, label, subs }: HeaderNavItemProps) {
  return (
    <div className="nav relative" onClick={onClick}>
      {label}
      {subs && (
        <div className="sub-nav-list absolute flex flex-col w-32 left-0 -ml-6">
          <div className="mt-6 bg-white py-3 rounded-b shadow-lg">
            {subs.map((t, i) => (
              <div
                key={i}
                className="text-base text-gray-500 hover:text-indigo-500 py-1"
                onClick={t.onClick}
              >
                {t.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderNavItem
