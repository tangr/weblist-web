import http from "./http"

let url = {
  busmonitor: {
    lines: "/api/base/lines/", // 路线接口
    stops: "/api/base/stops/", // 公交站接口
    bustime: "/api/base/bus-time/", // 实时信息
  }
};

function fetch_stops(line_no, d) {
  return http.get(url.busmonitor.stops + line_no + '/', d)
}

function fetch_bustime(direction_id, d) {
  return http.get(url.busmonitor.bustime + direction_id + '/', d)
}

let monitor = {
  fetch_lines: function (d) {
    return http.get(url.busmonitor.lines, d)
  },
  fetch_stops: fetch_stops,
  fetch_bustime: fetch_bustime,
};

export default {
  monitor
}
