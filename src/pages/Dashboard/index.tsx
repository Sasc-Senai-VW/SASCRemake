import React from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

import "./style.dashboard.css";
import { Id } from "../../../node_modules/react-toastify/dist/index";

export default function Dashboard(){

  return(
    <iframe id="dashboard" title="PowerBiSasc2" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6010dfaf-b747-447d-84c4-e19dd7f6eac5&autoAuth=true&ctid=79553679-86d7-4827-88ba-d5dd74a01773" frameborder="0" allowFullScreen="true"></iframe>
  ); 
}
