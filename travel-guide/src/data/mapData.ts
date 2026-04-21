// 地图坐标数据（WGS-84 坐标系，兼容 OpenStreetMap/Leaflet）

export type MarkerData = {
  name: string;
  lng: number;
  lat: number;
  tag: string;
  tagType: string;
};

// 路线途径点
export const routeWaypoints = [
  { name: "杭州", lng: 120.1551, lat: 30.2741 },
  { name: "连云港", lng: 119.1789, lat: 34.6006 },
  { name: "威海", lng: 122.1205, lat: 37.5134 },
  { name: "青岛", lng: 120.3838, lat: 36.0671 },
];

// 威海景点坐标
export const weihaiMarkers = [
  { name: "猫头山观景台", lng: 122.0853, lat: 37.5408, tag: "必去", tagType: "red" },
  { name: "火炬八街", lng: 122.0645, lat: 37.5358, tag: "网红", tagType: "orange" },
  { name: "布鲁威斯号", lng: 122.4189, lat: 37.2156, tag: "必去", tagType: "red" },
  { name: "那香海", lng: 122.3463, lat: 37.2567, tag: "休闲", tagType: "blue" },
  { name: "成山头", lng: 122.5415, lat: 37.3634, tag: "选去", tagType: "blue" },
  { name: "韩乐坊", lng: 122.1633, lat: 37.5089, tag: "美食", tagType: "green" },
  { name: "小石岛", lng: 122.0466, lat: 37.5254, tag: "日落", tagType: "green" },
  { name: "国际海水浴场", lng: 122.0543, lat: 37.5347, tag: "住宿", tagType: "blue" },
  { name: "半月湾", lng: 122.0972, lat: 37.5381, tag: "景", tagType: "blue" },
];

// 青岛景点坐标
export const qingdaoMarkers = [
  { name: "八大关", lng: 120.3536, lat: 36.0570, tag: "必去", tagType: "red" },
  { name: "小麦岛公园", lng: 120.4144, lat: 36.0609, tag: "五一优选", tagType: "green" },
  { name: "大学路", lng: 120.3318, lat: 36.0637, tag: "五一优选", tagType: "green" },
  { name: "栈桥", lng: 120.3175, lat: 36.0585, tag: "网红但挤", tagType: "orange" },
  { name: "崂山仰口", lng: 120.6679, lat: 36.1765, tag: "选去", tagType: "blue" },
  { name: "五四广场", lng: 120.3859, lat: 36.0567, tag: "地标", tagType: "green" },
  { name: "青岛啤酒博物馆", lng: 120.3615, lat: 36.0751, tag: "文化", tagType: "green" },
  { name: "天主教堂", lng: 120.3299, lat: 36.0673, tag: "建筑", tagType: "blue" },
  { name: "青岛北站", lng: 120.3831, lat: 36.1636, tag: "停车", tagType: "blue" },
];

// 路线连线
export const routePaths = [
  {
    name: "D1: 杭州 → 连云港",
    path: [
      [120.1551, 30.2741],
      [119.9, 31.2],
      [119.5, 32.4],
      [119.2, 33.6],
      [119.1789, 34.6006],
    ],
    color: "#d97757",
  },
  {
    name: "D2: 连云港 → 威海",
    path: [
      [119.1789, 34.6006],
      [119.6, 35.3],
      [120.3, 36.0],
      [121.0, 36.8],
      [122.1205, 37.5134],
    ],
    color: "#6a9bcc",
  },
  {
    name: "D4: 威海 → 青岛",
    path: [
      [122.1205, 37.5134],
      [121.6, 37.2],
      [121.1, 36.8],
      [120.7, 36.5],
      [120.3838, 36.0671],
    ],
    color: "#788c5d",
  },
  {
    name: "D6: 青岛 → 杭州",
    path: [
      [120.3838, 36.0671],
      [119.8, 35.5],
      [119.3, 34.6],
      [118.8, 33.5],
      [118.3, 32.3],
      [119.1, 31.2],
      [120.1551, 30.2741],
    ],
    color: "#b0aea5",
  },
];