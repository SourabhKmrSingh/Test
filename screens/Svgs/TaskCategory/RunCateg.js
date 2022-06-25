import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const RunCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={66} height={66} {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#37aadd" />
        <Stop offset={1} stopColor="#1f64cc" />
      </LinearGradient>
    </Defs>
    <G data-name="020-treadmill">
      <G data-name="Group 2831" transform="translate(-.295 .429)">
        <Circle
          data-name="Ellipse 449"
          cx={33}
          cy={33}
          r={33}
          transform="translate(.295 -.429)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2833">
        <G data-name="Group 2832">
          <Path
            data-name="Path 4731"
            d="M136.932 124.679a.941.941 0 0 0-.856-.13l-4.448 1.482h-7.6a1.9 1.9 0 1 0 0 3.8h7.443a.948.948 0 0 0 .3-.049l4.9-1.634a.949.949 0 0 0 .649-.9v-1.8a.951.951 0 0 0-.388-.769Zm-4.556 6.9a2.844 2.844 0 0 1-.9.146H128.4l-1.9 7.6h5.872l2.1-8.442Zm.2 9.643h-22.79a4.748 4.748 0 0 0-.95 9.4v1.046a.95.95 0 0 0 1.9 0v-.95h20.891v.95a.95.95 0 0 0 1.9 0v-1.046a4.748 4.748 0 0 0-.949-9.4Zm-22.79 5.7a.95.95 0 1 1 .95-.95.95.95 0 0 1-.948.951Zm22.79 0a.95.95 0 1 1 .95-.95.95.95 0 0 1-.948.951Z"
            transform="translate(-89.027 -105.286)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default RunCateg
