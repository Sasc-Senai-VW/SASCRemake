import "./style.home.css";
import { useEffect } from "react";
import React from "react";
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
        <iframe id="dashboradHome" title="PowerBiSascHome" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=5dcc2254-405e-4ecb-9910-bb6a3cbba750&autoAuth=true&ctid=79553679-86d7-4827-88ba-d5dd74a01773" frameborder="0" allowFullScreen="true"></iframe>
        </div>
        
        <a  href="https://borainvestir.b3.com.br/noticias/esg/entenda-o-que-sao-e-como-funcionam-os-creditos-de-carbono/?gclid=CjwKCAiAtt2tBhBDEiwALZuhAHNnTDsRPruf4xOdpa95JPU9WdRXyzqgn-NW3MmdkjOM8SuoAsiHeBoCxwAQAvD_BwE" target="_blank">
            <div className="linhasHome" id="frameCredito"> </div>
        </a>

      </div>

    </>
  );
}
