import { AppCard } from '../../components/AppCard/AppCard'

export const AppSection = () => (
  <section id="apps" className="px-8 mt-20">
    <p>I contribute to the world of open-source in my free time.</p>
    <p className="mt-5">By developing apps</p>
    <AppCard
      title={'Mindfulness Notifier'}
      description={'An app reminding you to stay present and mindful'}
      repo="https://github.com/miloslavnosek/mindfulness-notifier/tree/configurable-notifications"
      tags={['android', 'go']} />
  </section>
);
