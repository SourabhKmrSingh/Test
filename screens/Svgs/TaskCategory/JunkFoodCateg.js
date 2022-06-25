import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const JunkFoodCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={63} height={63} {...props}>
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
    <G data-name="025-no fast food">
      <G data-name="Group 2837" transform="translate(.09 .429)">
        <Circle
          data-name="Ellipse 451"
          cx={31.5}
          cy={31.5}
          r={31.5}
          transform="translate(-.09 -.429)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2839">
        <G data-name="Group 2838">
          <Path
            data-name="Path 4733"
            d="M105.824 109.944h21.426a.824.824 0 0 0 .824-.824 4.12 4.12 0 0 0-4.12-4.12H109.12a4.12 4.12 0 0 0-4.12 4.12.824.824 0 0 0 .824.824Zm20.6 3.3v-1.648h-19.776v1.648Zm-19.778 4.945h19.778a1.648 1.648 0 1 0 0-3.3h-19.776a1.648 1.648 0 0 0 0 3.3Zm20.6 3.3a5.769 5.769 0 1 0 5.769 5.768 5.781 5.781 0 0 0-5.765-5.776Zm0 9.889a4.114 4.114 0 0 1-3.434-6.389l5.7 5.7a4.092 4.092 0 0 1-2.262.68Zm3.434-1.852-5.7-5.7a4.114 4.114 0 0 1 5.7 5.7Zm-24.86-6.389a.824.824 0 0 0-.824.824 4.12 4.12 0 0 0 4.12 4.12h10.8a7.254 7.254 0 0 1-.083-.824 7.371 7.371 0 0 1 1.256-4.12h-15.265Zm.824-1.648h16a7.333 7.333 0 0 1 3.78-1.565v-.083h-19.776Z"
            transform="translate(-87.68 -87.323)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default JunkFoodCateg
