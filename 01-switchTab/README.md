### jQuery插件 - switchTab
#### 一个基于jQuery的选项卡插件，可以实现常用选项卡切换效果
1. 引用jQuery库和插件
```javascript
<script src="js/jquery.min.js"></script>
<script src="js/jquery-switchTab.min.js"></script>
```
2. 调用插件
######默认无参数直接调用
```javascript
$(".tab-basic").switchTab();
```
###### 使用jQuery渐隐方式
```javascript
$(".tab-basic").switchTab({
	type:"fade"
});
```
###### 默认为鼠标点击切换，传入参数可以使用鼠标滑过切换
```javascript
$(".tab-basic").switchTab({
	events:"mouseover"
});
```
###### 开启自动切换
```javascript
$(".tab-basic").switchTab({
	autoplay:true
});
```
###### 自动切换默认停留时间为3000ms，可以传入参数进行修改
```javascript
$(".tab-basic").switchTab({
	autoplay:true,
	laytime:5000
});
```