import "./style.youtube.css";

import PropTypes from "prop-types";

const YoutubeEmbed2 = ({}: any) => (
  <div className="video-responsive" id="video">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/LmkrrGd-Er4?si=LHP6LEHhHUtPmv2x"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed2.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed2;
