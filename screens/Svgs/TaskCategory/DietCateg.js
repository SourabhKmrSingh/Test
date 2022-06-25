import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const DietCateg = (props) => (
  <Svg
    data-name="032-diet"
    xmlns="http://www.w3.org/2000/svg"
    width={63}
    height={63}
    {...props}
  >
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
    <G data-name="Group 2864">
      <Circle
        data-name="Ellipse 460"
        cx={31.5}
        cy={31.5}
        r={31.5}
        fill="#edf4fd"
      />
    </G>
    <G data-name="Group 2866">
      <G data-name="Group 2865">
        <Path
          data-name="Path 4742"
          d="M124.824 108.777h-10.387v4.723a2.833 2.833 0 1 1-5.665 0 .944.944 0 0 1 1.888 0 .944.944 0 1 0 1.888 0v-4.721h-1.888v-.944a.944.944 0 1 1 1.888 0v.944h1.888v-.944a2.833 2.833 0 1 0-5.665 0v.944h-2.833a.935.935 0 0 0-.944.944v26.438a.935.935 0 0 0 .944.944h18.884a.935.935 0 0 0 .944-.944v-26.44a.935.935 0 0 0-.942-.944Zm-10.67 22.378-1.888 1.888a.913.913 0 0 1-1.322 0l-1.888-1.888a.935.935 0 1 1 1.322-1.322l1.228 1.209 1.227-1.209a.935.935 0 0 1 1.322 1.322Zm0-5.665-1.888 1.888a.912.912 0 0 1-1.322 0l-1.888-1.888a.935.935 0 0 1 1.322-1.322l1.228 1.209 1.227-1.209a.935.935 0 0 1 1.322 1.322Zm0-5.665-1.888 1.888a.913.913 0 0 1-1.322 0l-1.888-1.888a.935.935 0 1 1 1.322-1.322l1.228 1.209 1.227-1.209a.935.935 0 0 1 1.322 1.322Zm6.893 13.5h-3.777a.944.944 0 0 1 0-1.888h3.777a.944.944 0 1 1 0 1.888Zm0-5.665h-3.777a.944.944 0 0 1 0-1.888h3.777a.944.944 0 1 1 0 1.888Zm0-5.665h-3.777a.944.944 0 0 1 0-1.888h3.777a.944.944 0 1 1 0 1.888Z"
          transform="translate(-84.219 -90.683)"
          fill="url(#a)"
        />
      </G>
    </G>
  </Svg>
)

export default DietCateg
