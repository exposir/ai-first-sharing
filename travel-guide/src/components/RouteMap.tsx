"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  routeWaypoints,
  weihaiMarkers,
  qingdaoMarkers,
  routePaths,
} from "@/data/mapData";

type MapView = "overview" | "weihai" | "qingdao";

const tagColorMap: Record<string, string> = {
  red: "#ef4444",
  orange: "#f97316",
  blue: "#3b82f6",
  green: "#22c55e",
};

const viewConfigs: Record<MapView, { center: [number, number]; zoom: number }> = {
  overview: { center: [35.5, 121.0], zoom: 7 },
  weihai: { center: [37.51, 122.12], zoom: 11 },
  qingdao: { center: [36.07, 120.38], zoom: 12 },
};

// Leaflet 组件懒加载
let L: typeof import("leaflet") | null = null;
let RL: typeof import("react-leaflet") | null = null;

function RouteMapContent() {
  const [activeView, setActiveView] = useState<MapView>("overview");
  const [LeafletMap, setLeafletMap] = useState<{
    L: typeof import("leaflet");
    RL: typeof import("react-leaflet");
  } | null>(null);

  useEffect(() => {
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([leaflet, reactLeaflet]) => {
      L = leaflet;
      RL = reactLeaflet;

      // 修复 Leaflet 默认 icon 问题（webpack 会丢掉默认 icon 路径）
      const DefaultIcon = leaflet.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      leaflet.Marker.prototype.options.icon = DefaultIcon;

      setLeafletMap({ L: leaflet, RL: reactLeaflet });
    });
  }, []);

  const config = viewConfigs[activeView];

  // 获取当前视图的 markers
  const currentMarkers =
    activeView === "weihai"
      ? weihaiMarkers.map((m) => ({ ...m, key: `w-${m.name}` }))
      : activeView === "qingdao"
      ? qingdaoMarkers.map((m) => ({ ...m, key: `q-${m.name}` }))
      : [];

  const views: { key: MapView; label: string }[] = [
    { key: "overview", label: "全程路线" },
    { key: "weihai", label: "威海景点" },
    { key: "qingdao", label: "青岛景点" },
  ];

  if (!LeafletMap) {
    return (
      <section id="map" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-claude-dark dark:text-white mb-2">路线地图</h2>
          <div className="h-[500px] rounded-2xl bg-claude-warm dark:bg-[#1a1a19] border border-claude-light-gray/30 dark:border-white/[0.06] flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-claude-orange border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-claude-mid text-sm">地图加载中...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { MapContainer, TileLayer, Polyline, Marker, Popup } = LeafletMap.RL;

  // 创建城市标记用的自定义 icon
  function createCityIcon(tagType: string, label: string) {
    const color = tagColorMap[tagType] || "#3b82f6";
    return L!.divIcon({
      className: "custom-marker",
      html: `<div style="
        background:white;
        padding:4px 10px;
        border-radius:12px;
        font-size:11px;
        white-space:nowrap;
        border:1.5px solid ${color};
        box-shadow:0 2px 8px rgba(0,0,0,0.12);
        transform:translate(-50%,-100%);
        margin-top:-12px;
      ">
        <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${color};margin-right:5px;vertical-align:middle;"></span>
        <span style="font-weight:600;color:#141413;vertical-align:middle;">${label}</span>
      </div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      popupAnchor: [0, -10],
    });
  }

  function createWaypointIcon(name: string) {
    return L!.divIcon({
      className: "custom-marker",
      html: `<div style="
        background:#141413;
        color:#faf9f5;
        padding:4px 12px;
        border-radius:20px;
        font-size:12px;
        font-weight:600;
        white-space:nowrap;
        border:2px solid #d97757;
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        transform:translate(-50%,-100%);
        margin-top:-8px;
      ">${name}</div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      popupAnchor: [0, -10],
    });
  }

  const mapKey = `${activeView}-${config.zoom}`;

  return (
    <section id="map" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-claude-dark dark:text-white mb-2">
          路线地图
        </h2>
        <p className="text-claude-mid mb-6">
          点击景点查看详情，切换视图查看不同城市的景点分布
        </p>

        {/* 视图切换 Tab */}
        <div className="flex gap-2 mb-4">
          {views.map((v) => (
            <button
              key={v.key}
              onClick={() => setActiveView(v.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeView === v.key
                  ? "bg-claude-orange text-white shadow-md"
                  : "bg-claude-warm dark:bg-[#222120] text-claude-mid hover:bg-claude-mid/20"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* 地图容器 */}
        <div className="relative rounded-2xl overflow-hidden border border-[#e8e6dc] dark:border-white/[0.06] shadow-lg">
          <MapContainer
            key={mapKey}
            center={config.center}
            zoom={config.zoom}
            scrollWheelZoom={true}
            className="w-full h-[500px] rounded-2xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 全程路线视图 */}
            {activeView === "overview" &&
              routePaths.map((route) => (
                <Polyline
                  key={route.name}
                  positions={route.path.map(([lng, lat]) => [lat, lng] as [number, number])}
                  pathOptions={{ color: route.color, weight: 3, opacity: 0.8 }}
                />
              ))}

            {activeView === "overview" &&
              routeWaypoints.map((wp) => (
                <Marker
                  key={wp.name}
                  position={[wp.lat, wp.lng]}
                  icon={createWaypointIcon(wp.name)}
                >
                  <Popup>
                    <strong>{wp.name}</strong>
                  </Popup>
                </Marker>
              ))}

            {/* 城市景点视图 */}
            {currentMarkers.map((m) => {
              const color = tagColorMap[m.tagType] || "#3b82f6";
              return (
                <Marker
                  key={m.key}
                  position={[m.lat, m.lng]}
                  icon={createCityIcon(m.tagType, m.name)}
                >
                  <Popup>
                    <div className="min-w-[100px]">
                      <strong className="text-sm block mb-1">{m.name}</strong>
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs text-white"
                        style={{ background: color }}
                      >
                        {m.tag}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        {/* 图例 */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-claude-mid">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded bg-[#d97757] inline-block" />
            D1 杭州→连云港
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded bg-[#6a9bcc] inline-block" />
            D2 连云港→威海
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded bg-[#788c5d] inline-block" />
            D4 威海→青岛
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded bg-[#b0aea5] inline-block" />
            D6 青岛→杭州
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function RouteMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="map" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-claude-dark dark:text-white mb-2">路线地图</h2>
          <div className="h-[500px] rounded-2xl bg-claude-warm dark:bg-[#1a1a19] border border-claude-light-gray/30 dark:border-white/[0.06] flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-claude-orange border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-claude-mid text-sm">地图加载中...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <RouteMapContent />;
}