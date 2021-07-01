#  1.   安装CLI脚手架

##  1.1 官网
-   https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC

```angular2html
npm install -g @vue/cli
vue --version
```

##  runtime-compiler和runtime-only的区别
```angular2html
runtime-compiler
runtime-compiler -> ast -> render -> vdom -> UI

runtime-only (性能更好,代码更少)
render -> vdom -> UI
```

##  .vue文件的template是谁处理的
```angular2html
vue-template-compiler
```