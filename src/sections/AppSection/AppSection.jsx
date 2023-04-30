import { AppCard } from '../../components/AppCard/AppCard'
import { Quote } from '../../components/Quote/Quote'

export const AppSection = () => (
  <section id="apps" className="px-8 mt-14">
    <Quote />
    <div className="mt-14">
      <h2 className="font-bold text-lg">My open-source contributions:</h2>
      <h3 className="mt-5 font-semibold text-lg">Apps:</h3>
      <AppCard
        title={'Mindfulness Notifier'}
        description={'An app reminding you to stay present and mindful'}
        repo="https://github.com/miloslavnosek/mindfulness-notifier/tree/configurable-notifications"
        tags={['android', 'go']} />
    </div>
  </section>
)
