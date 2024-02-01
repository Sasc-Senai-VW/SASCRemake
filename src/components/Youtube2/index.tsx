import "./style.youtube.css";

import PropTypes from "prop-types";

const YoutubeEmbed2 = ({ embedId }: any) => (
  
  <div className="video-responsive" id="video">
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/sAQnMBD_5UI?si=AjwJf7QDe6BIV6Wm" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>

    </iframe>
  </div>

    );
    
    YoutubeEmbed2.propTypes = {
      embedId: PropTypes.string.isRequired,
    };
    
    export default YoutubeEmbed2;