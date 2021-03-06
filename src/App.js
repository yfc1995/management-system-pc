

import { ConfigProvider } from 'antd'
import RouteWithSubRoutes from './router/RouteWithSubRoutes'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale/zh_CN'
import routes from './router/routerConfig'




function App() {
  
console.log(routes)
  // const debounce = (func, delay, immediate) => {
  //   // result表示返回值
  //   let timeout, result

  //   let debounced = function () {
  //     // 存储触发当前事件的this
  //     let _this = this
  //     // 存储event对象
  //     let args = arguments
  //     clearTimeout(timeout)
  //     // 判断是否立即执行，如果不传默认不立即执行
  //     if (immediate) {
  //       // 立即执行
  //       let callNow = !timeout
  //       timeout = setTimeout(() => {
  //         timeout = null
  //       }, delay)
  //       if (callNow) result = func.apply(_this, args)
  //     } else {
  //       timeout = setTimeout(function () {
  //         func.apply(_this, args)
  //       }, delay)
  //     }
  //     return result
  //   }
  //   debounced.cancel = function () {
  //     clearTimeout(timeout)
  //     timeout = null
  //   }
  //   return debounced
  // }

  // const setHtmlSize = () => {
  //   let width = window.innerWidth > 2770 ? 2770 : window.innerWidth
  //   // let width = window.innerWidth 
  //   document.documentElement.style.fontSize = `${width / 192}px`
  // }

  // useEffect(() => {
  //   setHtmlSize()
  //   window.addEventListener('resize', debounce(setHtmlSize, 600, false))
  // }, [])

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        {
          routes && routes.length ? <RouteWithSubRoutes routes={routes} /> : null
        }

      </div>
    </ConfigProvider>

  );
}

export default App;
