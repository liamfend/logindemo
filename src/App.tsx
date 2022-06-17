import { ReactElement, useState } from 'react'
import { Login } from '@overseas-student-living/common-utils'
import '@overseas-student-living/common-utils/dist/index.css'
import { useTranslation } from 'react-i18next'

export function MyApp(): ReactElement {
  const [showLogin, setShowLogin] = useState(false)
  const { t } = useTranslation()
  return (
    <div>
      <button
        onClick={() => {
          setShowLogin((pre) => !pre)
        }}
      >
        login student account
      </button>
      {showLogin && (
        <Login
          event={() => {
            console.log('mixpanel demo')
          }}
          onClose={() => {
            // alert('you should control visible status . ')
            setShowLogin((pre) => !pre)
          }}
          t={t}
          setToken={(toekn) => {
            alert(
              'login succ  , you can do any thing you want! token is : ' + toekn
            )
          }}
        />
      )}
    </div>
  )
}

export default MyApp
