import "./style.home.css";
import { useEffect } from "react";
import YoutubeEmbed from "../../components/Youtube";
import YoutubeEmbed2 from "../../components/Youtube2/index";

export default function Home() {
  useEffect(() => {
    document.title = "Home - SASC";
  }, []);

  return (
    <>
      <div id="home">
        <div className="linhasHome" id="linha1">
          <div className="videoYoutube">
            <YoutubeEmbed embedId="p3j_4-WA8FQ"></YoutubeEmbed>
          </div>

          <div className="videoYoutube">
            <YoutubeEmbed2 embedId="p3j_4-WA8FQ"></YoutubeEmbed2>
          </div>
        </div>

        <div className="linhasHome" id="linha2">
          <iframe
            id="dashboradHome"
            title="PowerBiSascHome"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=5dcc2254-405e-4ecb-9910-bb6a3cbba750&autoAuth=true&ctid=79553679-86d7-4827-88ba-d5dd74a01773"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="linhasHome" id="linha3"></div>
      </div>
    </>
  );
}
