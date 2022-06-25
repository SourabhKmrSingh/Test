import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const SocialCateg = (props) => (
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
    <G data-name="021-family">
      <G data-name="Group 2834" transform="translate(.09)">
        <Circle
          data-name="Ellipse 450"
          cx={31.5}
          cy={31.5}
          r={31.5}
          transform="translate(-.09)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2836">
        <G data-name="Group 2835">
          <Path
            data-name="Path 4732"
            d="M115.517 134.238a.956.956 0 1 0 .956.956.957.957 0 0 0-.956-.956Zm11.473 0a.956.956 0 1 0 .956.956.957.957 0 0 0-.955-.956Zm-11.473 5.737a2.871 2.871 0 0 0-2.868 2.868v3.212a41.931 41.931 0 0 0 5.737 3.955v-7.167a2.872 2.872 0 0 0-2.869-2.868Zm21.991-7.331c0-5.54-3.78-9.88-8.605-9.88a10.307 10.307 0 0 0-7.649 3.442 10.309 10.309 0 0 0-7.649-3.442c-4.825 0-8.605 4.34-8.605 9.88 0 2.64.947 6.964 5.737 11.678v-1.479a4.786 4.786 0 0 1 4.781-4.781 2.868 2.868 0 1 1 2.868-2.868 2.871 2.871 0 0 1-2.868 2.868 4.786 4.786 0 0 1 4.781 4.781v8.215c.178.094.335.189.516.283a.954.954 0 0 0 .88 0c.182-.094.339-.189.516-.283v-8.215a4.786 4.786 0 0 1 4.781-4.781 2.868 2.868 0 1 1 2.868-2.868 2.871 2.871 0 0 1-2.868 2.868 4.786 4.786 0 0 1 4.781 4.781v1.479c4.79-4.713 5.736-9.038 5.736-11.678Zm-10.517 7.331a2.871 2.871 0 0 0-2.868 2.868v7.167a41.931 41.931 0 0 0 5.737-3.955v-3.212a2.871 2.871 0 0 0-2.869-2.868Z"
            transform="translate(-89.656 -103.781)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default SocialCateg
