import { Link } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function Footer() {
  const { data } = usePortfolioContent()
  const year = new Date().getFullYear()

  return (
    <footer className="footer page-width">
      <Link className="brand" to="/"><span className="brand-mark">{data.site.monogram}</span><span className="brand-name">{data.site.name}</span></Link>
      <p>© {year} · {data.site.name}</p>
      <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top</a>
    </footer>
  )
}

export default Footer
