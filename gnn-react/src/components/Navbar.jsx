import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'News', to: '/' },
  {
    label: 'Continents',
    to: '/continents',
    dropdown: [
      { label: 'Africa', to: '/continents#africa' },
      { label: 'Europe', to: '/continents#europe' },
      { label: 'Asia', to: '/continents#asia' },
      { label: 'Oceania', to: '/continents#oceania' },
      { label: 'North America', to: '/continents#north-america' },
      { label: 'South America', to: '/continents#south-america' },
    ],
  },
  {
    label: 'Business',
    to: '/business',
    dropdown: [
      { label: 'Finance', to: '/business#finance' },
      { label: 'Stocks', to: '/business#stocks' },
      { label: 'Bonds', to: '/business#bonds' },
      { label: 'Commodities', to: '/business#commodities' },
      { label: 'Real Estate', to: '/business#real-estate' },
    ],
  },
  { label: 'Health', to: '/health' },
  {
    label: 'Opinion',
    to: '/opinion',
    dropdown: [
      { label: 'Editorials', to: '/opinion#editorials' },
      { label: 'Columns', to: '/opinion#columns' },
      { label: 'Interviews', to: '/opinion#interviews' },
      { label: 'Guest Pieces', to: '/opinion#guest-pieces' },
    ],
  },
  {
    label: 'Sports',
    to: '/sports',
    dropdown: [
      { label: 'Football', to: '/sports#football' },
      { label: 'Rugby', to: '/sports#rugby' },
      { label: 'Basketball', to: '/sports#basketball' },
      { label: 'Athletics', to: '/sports#athletics' },
      { label: 'Cricket', to: '/sports#cricket' },
      { label: 'Motorsport', to: '/sports#motorsport' },
    ],
  },
  {
    label: 'Lifestyle',
    to: '/lifestyle',
    dropdown: [
      { label: 'Travel', to: '/lifestyle#travel' },
      { label: 'Food', to: '/lifestyle#food' },
      { label: 'Home & Garden', to: '/lifestyle#home-garden' },
      { label: 'Health & Wellness', to: '/lifestyle#health-wellness' },
      { label: 'Fashion', to: '/lifestyle#fashion' },
      { label: 'Relationships', to: '/lifestyle#relationships' },
      { label: 'Arts & Culture', to: '/lifestyle#arts-culture' },
      { label: 'Leisure', to: '/lifestyle#leisure' },
      { label: 'Events Calendar', to: '/lifestyle#events-calendar' },
    ],
  },
]

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <li
      className="has-dropdown"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.to}
        end={item.to === '/'}
        className={({ isActive }) =>
          'dropdown-toggle' + (isActive ? ' active' : '')
        }
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault()
          setOpen((v) => !v)
        }}
      >
        {item.label} <span className="caret">v</span>
      </NavLink>
      <div
        className="dropdown-menu"
        role="menu"
        style={open ? { opacity: 1, visibility: 'visible', transform: 'translateY(0)' } : {}}
      >
        {item.dropdown.map((sub) => (
          <Link key={sub.label} to={sub.to} role="menuitem" onClick={() => setOpen(false)}>
            {sub.label}
          </Link>
        ))}
      </div>
    </li>
  )
}

export default function Navbar() {
  return (
    <div className="header-top">
      <div className="header-brand">
        <Link to="/" className="logo" aria-label="Global News Home">
          <img src="/QB logo.png" alt="Global News logo" />
        </Link>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownItem key={item.label} item={item} />
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="header-right">
        <div className="header-search">
          <form
            className="search-bar"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search for news, topics, or authors..."
              aria-label="Search"
            />
            <button type="submit" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="header-actions">
          <button
            id="openLoginBtn"
            className="btn-login"
            type="button"
            onClick={() => document.dispatchEvent(new CustomEvent('openLogin'))}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
