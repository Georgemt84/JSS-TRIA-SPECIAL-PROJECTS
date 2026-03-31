import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Continental News',
    items: [
      { label: 'Latest from Africa', href: '/continents#africa' },
      { label: 'Latest from Europe', href: '/continents#europe' },
      { label: 'Latest from Asia', href: '/continents#asia' },
      { label: 'Latest from Oceania', href: '/continents#oceania' },
      { label: 'Latest from North America', href: '/continents#north-america' },
      { label: 'Latest from South America', href: '/continents#south-america' },
    ],
  },
]

export default function Continents() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h1>Global News by Continent</h1>
        <p>Get the latest news and updates from around the world, organized by region.</p>

        <section id="africa">
          <h2>Africa</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/CKK01797.jpg" alt="African news" className="article-card-img" />
              <h3><a href="#">Economic Growth in East Africa</a></h3>
              <p className="meta">By African Correspondent | Mar 1, 2024</p>
              <p className="excerpt">East African countries continue to show strong economic growth and attract international investment.</p>
            </article>
          </div>
        </section>

        <section id="europe">
          <h2>Europe</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/0Y2A0133.jpg" alt="European news" className="article-card-img" />
              <h3><a href="#">European Union Policy Updates</a></h3>
              <p className="meta">By Europe Reporter | Feb 28, 2024</p>
              <p className="excerpt">The EU announces new policies affecting trade and environmental regulations across member states.</p>
            </article>
          </div>
        </section>

        <section id="asia">
          <h2>Asia</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/9K7A7502.JPG" alt="Asian news" className="article-card-img" />
              <h3><a href="#">Tech Innovation in Asia</a></h3>
              <p className="meta">By Asia Tech Correspondent | Mar 3, 2024</p>
              <p className="excerpt">Asian tech companies lead the way in innovation and development of new technologies.</p>
            </article>
          </div>
        </section>

        <section id="oceania">
          <h2>Oceania</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/CKK01797.jpg" alt="Oceania news" className="article-card-img" />
              <h3><a href="#">Environmental Initiatives in Oceania</a></h3>
              <p className="meta">By Pacific Reporter | Feb 25, 2024</p>
              <p className="excerpt">Pacific nations unite on environmental conservation and sustainable development projects.</p>
            </article>
          </div>
        </section>

        <section id="north-america">
          <h2>North America</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/0Y2A0133.jpg" alt="North America news" className="article-card-img" />
              <h3><a href="#">North American Trade Agreements</a></h3>
              <p className="meta">By North America Editor | Mar 2, 2024</p>
              <p className="excerpt">New trade agreements signed between North American nations to boost economic cooperation.</p>
            </article>
          </div>
        </section>

        <section id="south-america">
          <h2>South America</h2>
          <div className="category-grid">
            <article className="article-card">
              <img src="/9K7A7502.JPG" alt="South America news" className="article-card-img" />
              <h3><a href="#">Sustainable Development in South America</a></h3>
              <p className="meta">By South America Correspondent | Feb 27, 2024</p>
              <p className="excerpt">South American countries focus on sustainable development and environmental protection initiatives.</p>
            </article>
          </div>
        </section>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
