import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Introduction } from './sections/Introduction/Introduction'
import { AppSection } from './sections/AppSection/AppSection'
import { ArticleSection } from './sections/ArticleSection/ArticleSection'

export const App = () => (
  <>
    <Header />
    <Hero />
    <div className="mx-auto max-w-3xl">
      <Introduction />
      <AppSection />
      <ArticleSection />
    </div>
  </>
)
