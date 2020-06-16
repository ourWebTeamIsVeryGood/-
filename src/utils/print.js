import echarts from 'echarts'
const Print =function(dom,echartArr) {
    if (!(this instanceof Print)) return new Print(dom,echartArr);
  
    // this.options = this.extend({
    //   'noPrint': '.no-print'
    // }, options);
  
    if ((typeof dom) === "string") {
      this.dom = document.querySelector(dom);
    } else {
      this.dom = dom;
    }
    if((typeof echartArr)==="object"){
        this.echartArr=echartArr;
    }
    this.init();
  };
  Print.prototype = {
    init: function () {
      var content = this.getStyle() + this.getHtml();
      this.writeIframe(content);
    },
    extend: function (obj, obj2) {
      for (var k in obj2) {
        obj[k] = obj2[k];
      }
      return obj;
    },
  
    getStyle: function () {
      var str = "",
        styles = document.querySelectorAll('style,link');
      for (var i = 0; i < styles.length; i++) {
        str += styles[i].outerHTML;
      }
    //   str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";
  
      return str;
    },
  
    getHtml: function () {
      var inputs = document.querySelectorAll('input');
      var textareas = document.querySelectorAll('textarea');
      var selects = document.querySelectorAll('select');
  
      for (var k in inputs) {
        if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
          if (inputs[k].checked == true) {
            inputs[k].setAttribute('checked', "checked")
          } else {
            inputs[k].removeAttribute('checked')
          }
        } else if (inputs[k].type == "text") {
          inputs[k].setAttribute('value', inputs[k].value)
        }
      }
  
      for (var k2 in textareas) {
        if (textareas[k2].type == 'textarea') {
          textareas[k2].innerHTML = textareas[k2].value
        }
      }
  
      for (var k3 in selects) {
        if (selects[k3].type == 'select-one') {
          var child = selects[k3].children;
          for (var i in child) {
            if (child[i].tagName == 'OPTION') {
              if (child[i].selected == true) {
                child[i].setAttribute('selected', "selected")
              } else {
                child[i].removeAttribute('selected')
              }
            }
          }
        }
      }
        var div = document.createElement("div");
        div.innerHTML=this.dom.outerHTML;
        for(let i in this.echartArr){
            let el = document.getElementById(this.echartArr[i]);
            var myChart = echarts.init(el);
            let echartDiv = div.querySelector("#"+this.echartArr[i]);
            echartDiv.innerHTML='<img src="'+myChart.getDataURL()+'" alt="" style="height:300px"/>';
            // // 把echarts图片转成64编码的图片
            // var img = new Image();
            // var imgSrc = myChart.getDataURL();
            // // 渲染到图表上面，遮住图表
            // img.src = imgSrc;
            // img.onload = () =>{
  
            // }
        }
        return div.innerHTML;
    },
  
    writeIframe: function (content) {
      var w, doc, iframe = document.createElement('iframe'),
        f = document.body.appendChild(iframe);
      iframe.id = "myIframe";
      iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
  
      w = f.contentWindow || f.contentDocument;
      doc = f.contentDocument || f.contentWindow.document;
      doc.open();
      doc.write(content);
      doc.close();
      this.toPrint(w);
  
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 100)
    },
  
    toPrint: function (frameWindow) {
      try {
        setTimeout(function () {
          frameWindow.focus();
          try {
            if (!frameWindow.document.execCommand('print', false, null)) {
              frameWindow.print();
            }
          } catch (e) {
            frameWindow.print();
          }
          frameWindow.close();
        }, 10);
      } catch (err) {
        console.log('err', err);
      }
    }
  };
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 4. 添加实例方法
    Vue.prototype.$print = Print
  }
  export default MyPlugin