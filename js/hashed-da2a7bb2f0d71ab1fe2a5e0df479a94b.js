head(function(){var t=tweet_data.sort(function(){return 0.5-Math.random()});var n=[];for(i=0;i<t.length;i++){var p=t[i];var v=p.entities.urls;var A=p.entities.hashtags;var f=p.entities.user_mentions;var x=[];if(v.length>0){for(u=0;u<v.length;u++){var b=v[u];var w=[];w.indices=b.indices;w.index_diff=b.indices[1]-b.indices[0];if(b.display_url){var g=b.display_url}else{var g=b.url}w.html='<a target="_blank" href="'+b.url+'">'+g+"</a>";x.push(w)}}if(A.length>0){for(h=0;h<A.length;h++){var y=A[h];var w=[];w.indices=y.indices;w.index_diff=y.indices[1]-y.indices[0];var q=y.text;var c=y.indices;w.html='<a target="_blank" href="http://www.twitter.com/search/?q='+q+'">#'+q+"</a>";x.push(w)}}if(f.length>0){for(m=0;m<f.length;m++){var z=f[m];var w=[];w.indices=z.indices;w.index_diff=z.indices[1]-z.indices[0];w.html='<a target="_blank" href="http://www.twitter.com/'+z.screen_name+'">@'+z.screen_name+"</a>";x.push(w)}}x.sort(function(C,B){return parseFloat(C.indices[0])-parseFloat(B.indices[0])});if(x.length>0){var q=p.text;var k=0;var r=0;for(e=0;e<x.length;e++){var j=x[e].indices[0]+k-r;var d=j+x[e].index_diff;var o=x[e].html;var s=q.substring(0,j);var a=q.substring(d,q.length);q=s+o+a;k=o.length;r=x[e].index_diff}}else{var q=p.text}var l=[];l.push("background-color: #"+p.user.profile_background_color);if(p.user.profile_use_background_image){l.push("background-image: url("+p.user.profile_background_image_url+")");if(!p.user.profile_background_tile){l.push("background-repeat: no-repeat")}}html_tmpl='<div style="'+l.join(";")+'" class="tweet right-tweet"><p class="tweet-box"><span class="tweet-author"><a class="tweet-av" href="http://www.twitter.com/'+p.user.screen_name+'/"><img height="48" width="48" src="'+p.user.profile_image_url+'"></a><span class="tweet-name"><a class="tweet-screenname" href="http://www.twitter.com/'+p.user.screen_name+'/">@'+p.user.screen_name+'</a><br><span class="tweet-full-name">'+p.user.name+'</span></span></span><span class="tweet-text">'+q+'</span><span class="tweet-meta"><a href="http://www.twitter.com/'+p.user.screen_name+"/status/"+p.id_str+'">'+p.created_at.substr(3,7)+", "+p.created_at.substr(26,30)+"</a></span></p></div>";n.push(html_tmpl)}$(".tweet.throbber").replaceWith(n.join(""))});head(function(){$(".tweet").first().addClass("first-tweet center-tweet").removeClass("right-tweet");$(".tweet").last().prev().addClass("last-tweet");$(".say-what-control").live("click",function(b){b.preventDefault();var a=$(".tweet.center-tweet");if($(this).hasClass("next")){$(".tweets").animate({"margin-left":"-=960"},300);next_tweet=a.next().next().addClass("center-tweet").removeClass("right-tweet");a.addClass("left-tweet")}else{if($(this).hasClass("prev")){$(".tweets").animate({"margin-left":"+=960"},300);prev_tweet=a.prev().prev().addClass("center-tweet").removeClass("left-tweet");a.addClass("right-tweet")}}a.removeClass("center-tweet");$(".say-what-control.prev").show();$(".say-what-control.next").show();if($(".tweet.first-tweet").hasClass("center-tweet")){$(".say-what-control.prev").hide()}if($(".tweet.last-tweet").hasClass("center-tweet")){$(".say-what-control.next").hide()}});$(".say-what-control.prev").hide()});