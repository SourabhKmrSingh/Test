import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const WakeupCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={63} height={64} {...props}>
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
    <G data-name="004-morning">
      <G data-name="Group 2819" transform="translate(0 .429)">
        <Ellipse
          data-name="Ellipse 445"
          cx={31.5}
          cy={32}
          rx={31.5}
          ry={32}
          transform="translate(0 -.429)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2821">
        <G data-name="Group 2820">
          <Path
            data-name="Path 4727"
            d="M140.588 186.589h-8.124a9.706 9.706 0 1 0-18.261 0h-8.124a1.078 1.078 0 1 0 0 2.157h34.51a1.078 1.078 0 0 0 0-2.157Zm-17.255-15.1a1.078 1.078 0 0 0 1.078-1.078v-2.157a1.078 1.078 0 0 0-2.157 0v2.157a1.078 1.078 0 0 0 1.079 1.08Zm-15.1 12.941h2.157a1.078 1.078 0 1 0 0-2.157h-2.157a1.078 1.078 0 1 0 0 2.157Zm26.961-1.078a1.078 1.078 0 0 0 1.079 1.078h2.157a1.078 1.078 0 1 0 0-2.157h-2.157a1.078 1.078 0 0 0-1.073 1.08Zm-.116-5.536 1.867-1.078a1.079 1.079 0 0 0-1.078-1.868L134 175.949a1.079 1.079 0 0 0 1.078 1.868Zm-5.816-4.737a1.079 1.079 0 0 0 1.473-.395l1.079-1.867a1.079 1.079 0 0 0-1.868-1.078l-1.079 1.867a1.078 1.078 0 0 0 .398 1.474Zm-13.336-.395a1.079 1.079 0 0 0 1.868-1.078l-1.078-1.867a1.079 1.079 0 0 0-1.868 1.078Zm-6.209 4.054 1.867 1.078a1.079 1.079 0 0 0 1.078-1.868l-1.862-1.078a1.079 1.079 0 0 0-1.078 1.868Z"
            transform="translate(-91.908 -145.764)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default WakeupCateg
