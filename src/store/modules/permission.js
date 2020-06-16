import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          let arr = [];
          for(let i=0;i<res.length;i++){
            let obj={};
            if(res[i].pageurl==""){
              obj.alwaysShow=true;
              obj.component = "Layout";
              obj.redirect="noRedirect";
            }else{
              obj.component=res[i].pageurl;
            }
            obj.hidden=false;
            obj.name=res[i].pageurl;
            obj.path=res[i].pageurl;
            obj.meta={
              icon:res[i].icon,
              title:res[i].name
            }
            obj.children=[];
            arr.push(obj);
            if(res[i].leaf.length!=0){
              list(arr[i].children,res[i].leaf);
            }
          }
          const accessedRoutes = filterAsyncRouter(arr)
          accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    }
  }
}
// 递归修改数据
function list(arr,res){
  for(let i=0;i<res.length;i++){
    let obj={};
    if(res[i].pageurl==""){
      obj.alwaysShow=true;
      obj.component = "Layout";
      obj.redirect="noRedirect";
    }else{
      obj.component=res[i].pageurl;
    }
    obj.hidden=false;
    obj.name=res[i].pageurl;
    obj.path=res[i].pageurl;
    obj.meta={
      icon:res[i].icon,
      title:res[i].name
    }
    obj.children=[];
    arr.push(obj);
    if(res[i].leaf&&res[i].leaf.length!=0){
      list(arr[i].children,res[i].leaf);
    }
  }
}
// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) =>  require([`@/views/${view}`], resolve)
}

export default permission
