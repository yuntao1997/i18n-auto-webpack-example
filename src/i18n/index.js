// 国际化
import Vue from 'vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)

import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import ElementLocale from 'element-ui/lib/locale'

let zhCN = {}
try{
    zhCN = require('./auto/zh.json')
}catch (e) {
    zhCN = {}
}
let en = {}
try{
    en = require('./auto/en.json')
}catch (e) {
    en = {}
}

const messages = {
    zh: {
        ...zhCN,
        ...elementZhLocale
    },
    en: {
        ...en,
        ...elementEnLocale
    }
}


const i18n = new VueI18n({
    locale: 'en',
    messages,
})
/*window.i18n = i18n*/
ElementLocale.i18n((key, value) => i18n.t(key, value))




export default i18n
