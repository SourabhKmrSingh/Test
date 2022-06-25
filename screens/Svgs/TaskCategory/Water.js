import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const Water = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} {...props}>
    <G data-name="Group 3913" transform="translate(0 -2)">
      <Circle
        data-name="Ellipse 689"
        cx={24.5}
        cy={24.5}
        r={24.5}
        transform="translate(0 2)"
        fill="#d2dff2"
      />
      <Path
        data-name="Icon awesome-pills"
        d="M23.628 13.15a3.609 3.609 0 0 0-4.995 1.062L14.7 20.267a3.61 3.61 0 1 0 6.055 3.933l3.933-6.055a3.609 3.609 0 0 0-1.06-4.994Zm-2.636 6.899-2.595-1.686 1.966-3.027a1.548 1.548 0 1 1 2.595 1.685Z"
        fill="#1e64cc"
      />
      <G data-name="Group 3552" stroke="#fff">
        <G
          data-name="Ellipse 690"
          fill="#1e64cc"
          transform="translate(21.672 24.057)"
        >
          <Circle cx={7.085} cy={7.085} stroke="none" r={7.085} />
          <Circle cx={7.085} cy={7.085} fill="none" r={6.585} />
        </G>
        <Path data-name="Path 8467" d="M28.757 24.986v12.492" fill="none" />
      </G>
    </G>
  </Svg>
)

export default Water