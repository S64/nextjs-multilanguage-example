import I18Next from '../i18n'

const Second = ({ t }) => (
    <div>
        <h1>{t('second-text')}</h1>
        <I18Next.Link href="/">Index</I18Next.Link>
    </div>
)
  
export default I18Next.withTranslation()(Second)
