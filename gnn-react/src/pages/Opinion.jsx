import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest Opinions',
    items: [
      { label: 'Editorial: The Need for Policy Reform', href: '#', time: '2 hours ago' },
      { label: 'Column: Global Market Outlook', href: '#', time: '4 hours ago' },
      { label: 'Interview: Tech Leader Speaks Out', href: '#', time: '6 hours ago' },
      { label: 'Guest Piece: Education in the Digital Age', href: '#', time: '1 day ago' },
    ],
  },
]

const tableStyles = {
  table: {
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif",
    border: '1px solid blue',
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    marginBottom: '30px',
  },
  tdTh: {
    border: '3px solid #8fe61edd',
    textAlign: 'left',
    padding: '8px',
  },
}

export default function Opinion() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h3>Opinion &amp; Analysis</h3>
        <p>Expert viewpoints, editorials, and thought-provoking commentary on current issues.</p>

        <div className="category-grid">
          <article className="article-card">
            <img src="/CKK01797.jpg" alt="Opinion piece" />
            <h3><a href="#">Why Digital Transformation Is Essential</a></h3>
            <p className="meta">By Prof. Michael Anderson | Mar 1, 2024</p>
            <p className="excerpt">An in-depth editorial on the importance of digital transformation in the modern economy and what it means for businesses.</p>
          </article>

          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Analysis" />
            <h3><a href="#">The Future of Work: Remote or Office?</a></h3>
            <p className="meta">By Lisa Chen | Feb 25, 2024</p>
            <p className="excerpt">A thoughtful analysis of the ongoing debate between remote and office work, and what the future of work looks like.</p>
          </article>

          <article className="article-card">
            <img src="/9K7A7502.JPG" alt="Guest piece" />
            <h3><a href="#">Sustainability and Economic Growth Can Coexist</a></h3>
            <p className="meta">By Dr. James Powell | Mar 5, 2024</p>
            <p className="excerpt">A guest piece exploring how businesses can achieve sustainable practices while maintaining profitability and growth.</p>
          </article>
        </div>

        <table style={tableStyles.table}>
          <tbody>
            <tr>
              <th style={tableStyles.tdTh}>CONTINENT</th>
              <th style={tableStyles.tdTh}>POPULATION</th>
              <th style={tableStyles.tdTh}>GROWTH INDEX</th>
            </tr>
            <tr>
              <td style={tableStyles.tdTh}>AFRICA</td>
              <td style={tableStyles.tdTh}>2 Billion</td>
              <td style={tableStyles.tdTh}>47%</td>
            </tr>
            <tr style={{ backgroundColor: '#8bc1e3dd' }}>
              <td style={tableStyles.tdTh}>ASIA</td>
              <td style={tableStyles.tdTh}>4 Billion</td>
              <td style={tableStyles.tdTh}>78%</td>
            </tr>
            <tr>
              <td style={tableStyles.tdTh}>EUROPE</td>
              <td style={tableStyles.tdTh}>1 Billion</td>
              <td style={tableStyles.tdTh}>88%</td>
            </tr>
            <tr style={{ backgroundColor: '#8bc1e3dd' }}>
              <td style={tableStyles.tdTh}>SOUTH AMERICA</td>
              <td style={tableStyles.tdTh}>4 Billion</td>
              <td style={tableStyles.tdTh}>89%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
