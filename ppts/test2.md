title: test2
speaker: zhangle
url: https://github.com/ksky521/nodePPT
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# test
## 演讲者：zhangle

[slide]

## some javascript code
```javascript
export default class test extends think.model.test{
	init(...args){
		init(...args);
	}
}
alert('nodeppt');
```


[slide]

# 封面样式2 {:&.flexbox.vleft}
## 左对齐

[slide style="background-image:url('/img/bg1.png')"]

## 使用背景

[slide]
## 使用.class/#id/自定义属性样式
----

```javascript
export default class test extends think.model.test{
	init(...args){
		init(...args);
	}
}
alert('nodeppt');
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.1

Github：https://github.com/ksky521/nodePPT

[slide]
## 使用LaTex公式：
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a}.    s = ut + \frac{1}{2}at^2 $$
矩阵：\\( x = {\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \end{bmatrix}}  \\)

