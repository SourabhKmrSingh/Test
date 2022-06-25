import * as React from "react"
import Svg, { G, Ellipse } from "react-native-svg"

const ThreeDots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={3.373}
    height={15.005}
    {...props}
  >
    <G data-name="Group 36" transform="rotate(-90 7.503 7.503)" fill="#1c1c1c">
      <Ellipse
        data-name="Ellipse 31"
        cx={1.735}
        cy={1.687}
        rx={1.735}
        ry={1.687}
      />
      <Ellipse
        data-name="Ellipse 32"
        cx={1.735}
        cy={1.687}
        rx={1.735}
        ry={1.687}
        transform="translate(5.89)"
      />
      <Ellipse
        data-name="Ellipse 33"
        cx={1.735}
        cy={1.687}
        rx={1.735}
        ry={1.687}
        transform="translate(11.534)"
      />
    </G>
  </Svg>
)

export default ThreeDots
