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
          event={{
            VIEWED_SIGNUP() {
              console.log('VIEWED_SIGNUP');
            },
            VIEWED_LOGIN() {
              console.log('VIEWED_LOGIN');
            },
            VIEWED_FACEBOOK() {
              console.log('VIEWED_FACEBOOK');
            },
            VIEWED_WECHAT() {
              console.log('VIEWED_WECHAT');
            },
            SIGNUP_SUCCESS(socialType, newsletterAccepted) {
              // socialType:  枚举 'facebook' | 'wechat' | 'email' | 'phone'
              // newsletterAccepted: 类型 boolean, 只有注册时候有 表示是否勾选“我愿意以电子邮件或短信的形式接收来自STUDENT.COM学旅家的独家优惠和最新房源资讯。”
              console.log('SIGNUP_SUCCESS', socialType, newsletterAccepted);
            },
            LOGIN_SUCCESS(socialType) {
              // socialType: 枚举 'facebook' | 'wechat' | 'email' | 'phone'
              console.log('LOGIN_SUCCESS', socialType);
            },
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
