import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const Micsvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} {...props}>
    <G data-name="Group 3505" transform="translate(-2 -2.388)">
      <Circle
        data-name="Ellipse 550"
        cx={21}
        cy={21}
        r={21}
        transform="translate(2 2.388)"
        fill="#dbecff"
        opacity={0.354}
      />
      <Circle
        data-name="Ellipse 430"
        cx={19}
        cy={19}
        r={19}
        transform="translate(4 4.387)"
        fill="#fff"
      />
      <Path
        data-name="Icon awesome-microphone"
        d="M23.001 26.053a2.668 2.668 0 0 0 2.668-2.668v-4.447a2.668 2.668 0 0 0-5.336 0v4.447a2.668 2.668 0 0 0 2.668 2.668Zm4.447-4.447h-.445a.445.445 0 0 0-.445.445v1.334a3.562 3.562 0 0 1-3.913 3.54 3.666 3.666 0 0 1-3.2-3.7v-1.174a.445.445 0 0 0-.445-.445h-.446a.445.445 0 0 0-.445.445v1.119a5.045 5.045 0 0 0 4.225 5.05v.95h-1.557a.445.445 0 0 0-.445.445v.445a.445.445 0 0 0 .445.445h4.447a.445.445 0 0 0 .445-.445v-.445a.445.445 0 0 0-.445-.445h-1.556v-.939a4.9 4.9 0 0 0 4.224-4.846v-1.334a.445.445 0 0 0-.444-.445Z"
        fill="#0e58c7"
      />
    </G>
  </Svg>
)

export default Micsvg


