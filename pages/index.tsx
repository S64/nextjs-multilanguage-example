import Head from 'next/head'
import I18Next from '../i18n'
import getConfig from 'next/config'

const { _, publicRuntimeConfig } = getConfig()

const Index = ({ t, i18n }) => (
    <div>
        <h1>{t('create-new-app')}</h1>
        <I18Next.Link href="/2nd">2nd</I18Next.Link>
        <ul>
            {publicRuntimeConfig.languages.map((lng) => {
                return <li><button onClick={() => i18n.changeLanguage(lng)}>{lng}</button></li>
            })}
        </ul>
    </div>
)

export default I18Next.withTranslation()(Index)
