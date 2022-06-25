import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const SleepCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} {...props}>
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
    <G data-name="035-sleep">
      <G data-name="Group 2846" transform="translate(.384 .429)">
        <Circle
          data-name="Ellipse 454"
          cx={31}
          cy={31}
          r={31}
          transform="translate(-.385 -.429)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2848">
        <G data-name="Group 2847">
          <Path
            data-name="Path 4736"
            d="M133.307 121.314a7.628 7.628 0 0 1 0-13.981.847.847 0 0 0 0-1.553 9.323 9.323 0 1 0 0 17.088.847.847 0 0 0 0-1.553Zm-14.747-6.991a11.021 11.021 0 0 1 .218-2.18 11.011 11.011 0 1 0 8.039 12.833 11.027 11.027 0 0 1-8.257-10.653Zm-1.7 8.475a.858.858 0 0 1-.249.6l-3.389 3.389a.847.847 0 0 1-1.2-1.2l3.142-3.142v-4.734a.847.847 0 1 1 1.695 0v5.089Z"
            transform="translate(-87.943 -88.252)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default SleepCateg
