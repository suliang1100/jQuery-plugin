//create by suliang on 2016-07-08
;(function($){
    var pluginName = "switchTab";
    var defaults   = {
        events   :  "click",
        autoplay :  false,
        laytime  :  3000,
        type     :  "show"
    }

    var SwitchTab  = function(element,options){
        this.element  = $(element);
        this.content  = this.element.find(".tab-content");
        this.pane     = this.element.find(".tab-pane");
        this.index    = 0;
        this.settings = $.extend({},defaults,options);
        this.init();
    }

    SwitchTab.prototype.init = function(){

        var $this = this;
        this.settings.autoplay && this.play();
        this.element.on(this.settings.events,".tab-title li",function(){

            var _this = $(this);
            if(_this.hasClass("active")) return;

            _this.closest("ul").find(".active").removeClass("active");
            _this.addClass("active");
            $this.index = _this.index();

            if($this.settings.type == "show"){
                $this.show();
            }else if($this.settings.type == "fade"){
                $this.fade();
            }
        })
    }

    SwitchTab.prototype.show = function(){
        this.content.find(".active").removeClass("active");
        this.pane.eq(this.index).addClass("active");
    }

    SwitchTab.prototype.fade = function(){
        this.content.find(".active").removeClass("active");
        this.pane.css("display","none");
        this.pane.eq(this.index).fadeIn(200);
    }

    SwitchTab.prototype.play = function(){

        var $this = this;
        function autoPlay(){
            $this.index++;
            if($this.index > $this.pane.length-1){
                $this.index = 0;
            }
            $this.element.find(".tab-title li.active").removeClass("active");
            $this.element.find(".tab-title li").eq($this.index).addClass("active");
            if($this.settings.type == "show"){
                $this.show();
            }else if($this.settings.type == "fade"){
                $this.fade();
            }
        }
        var autoplay = setInterval(autoPlay,this.settings.laytime);
        this.element.on("mouseenter",function(){
            clearInterval(autoplay);
        })
        this.element.on("mouseleave",function(){
            autoplay = setInterval(autoPlay,$this.settings.laytime)
        })
    }

    var Plugin = function(options){
        if(this.length){
            this.each(function(){
                var $this = $(this);
                var data = $this.data[pluginName]
                if(!data){
                    $this.data(pluginName,(data=new SwitchTab(this,options)));
                }
            })
        }

        return this;
    }

    $.fn.switchTab             = Plugin;
    $.fn.switchTab.constructor = SwitchTab;

})(jQuery);