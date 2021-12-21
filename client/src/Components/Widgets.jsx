import React from "react";
import "./styles/Widgets.css"
function Widgets() {
  return (
    <div className="marginRight">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasaischool&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="100%"
        height="100%"
        title="Facebook Plugins"
        scrolling="yes"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Widgets;
