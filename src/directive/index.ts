import { type App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * @param https://cn.vuejs.org/api/application.html#app-use
 */

const imgLazy = {
  mounted(el: HTMLElement) {
    //1. 一開始先不要加載，等到要看到的時後再加載

    // 2.緩存當前圖片路徑
    console.log(el)
    const catchSrc = el.getAttribute('src')
    console.log(catchSrc)

    // 3.設定 img 預設顯示
    el.setAttribute('src', 'https://res.lgdsunday.club/img-load.png')

    // 4. 監聽及將要看到的
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 5. render image
        console.log(isIntersecting)
        el.setAttribute('src', `${catchSrc}`)

        // 6. 停止監聽
        stop()
      }
    })
  }
}

export default {
  // 使用 install 是為了在 app.use 使用
  install: (app: App) => {
    // console.log(app)
    app.directive('imgLazy', imgLazy)
  }
}
