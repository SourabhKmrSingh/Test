import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const MeditCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={63} {...props}>
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
    <G data-name="045-meditation">
      <G data-name="Group 2858" transform="translate(.385)">
        <Ellipse
          data-name="Ellipse 458"
          cx={31}
          cy={31.5}
          rx={31}
          ry={31.5}
          transform="translate(-.385)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2860">
        <G data-name="Group 2859">
          <Path
            data-name="Path 4740"
            d="M124.108 108.64a3.64 3.64 0 1 0-3.64 3.64 3.643 3.643 0 0 0 3.64-3.64Zm10.919 25.477H105.91a.91.91 0 1 0 0 1.82h29.117a.91.91 0 0 0 0-1.82Zm-23.657-7.279a2.73 2.73 0 0 0 0 5.459h18.2a2.73 2.73 0 1 0 0-5.459Zm-3.64-5.459h6.37a2.73 2.73 0 0 0 2.73-2.73v6.369h7.279v-6.369a2.73 2.73 0 0 0 2.73 2.73h6.369a.91.91 0 0 0 .91-.91 2.73 2.73 0 0 0-2.73-2.73h-3.64a5.465 5.465 0 0 0-5.459-5.459h-3.64a5.465 5.465 0 0 0-5.459 5.459h-3.64a2.73 2.73 0 0 0-2.73 2.73.91.91 0 0 0 .91.909Z"
            transform="translate(-89.071 -89.143)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default MeditCateg
