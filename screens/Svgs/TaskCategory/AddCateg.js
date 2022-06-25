import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Text,
  TSpan,
  Path,
} from "react-native-svg"

const AddCateg = (props) => (
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
      <Text
        transform="translate(4.499 36.093)"
        fill="#0e58c7"
        fontSize={13}
        fontFamily="HelveticaNeue, Helvetica Neue"
      >
        <TSpan x={14} y={12}>
          {"Add"}
        </TSpan>
      </Text>
      <Path
        d="M13.186 3a10.186 10.186 0 1 0 10.185 10.186A10.189 10.189 0 0 0 13.186 3Zm5.093 11.2H14.2v4.074h-2.033V14.2H8.093v-2.033h4.074V8.093H14.2v4.074h4.074Z"
        transform="translate(17.499 7.908)"
        fill="url(#a)"
      />
    </G>
  </Svg>
)

export default AddCateg
