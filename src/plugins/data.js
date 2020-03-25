import pageData from '@/page-data/index.js'
import constants from '@/constants.js'

function install (Vue) {
  Vue.prototype.$pageData = pageData
  Vue.prototype.$constants = constants

  Vue.prototype.slugToKey = function (slug) {
    const words = slug
      .split('-')
      .map((word) => word[0].toUpperCase()+word.substr(1,word.length-1))
      .join('')
    return words
  }
}

export default {
  install
}
