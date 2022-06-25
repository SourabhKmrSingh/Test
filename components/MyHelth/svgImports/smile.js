import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const SmileIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
    <G data-name="020-happy-16" transform="translate(-.285)">
      <Circle
        data-name="Ellipse 413"
        cx={13}
        cy={13}
        r={13}
        transform="translate(.285)"
        fill="#ffd93b"
      />
      <Path
        data-name="Path 4648"
        d="M12.992 21.358a7.841 7.841 0 0 1-7.478-5.453.6.6 0 1 1 1.136-.367 6.661 6.661 0 0 0 12.686 0 .6.6 0 0 1 1.136.367 7.841 7.841 0 0 1-7.48 5.453Z"
        fill="#3e4347"
      />
      <Path
        data-name="Path 4649"
        d="M25.724 12.975a12.733 12.733 0 0 1-22.643 7.993 12.733 12.733 0 0 0 17.9-17.9 12.718 12.718 0 0 1 4.743 9.907Z"
        fill="#f4c534"
      />
      <G data-name="Group 2736" fill="#3e4347">
        <Path
          data-name="Path 4650"
          d="M10.876 10.895a3.791 3.791 0 0 0-5.821.006 2.911 2.911 0 0 1 5.821-.006Z"
        />
        <Path
          data-name="Path 4651"
          d="M20.934 10.895a3.791 3.791 0 0 0-5.821.006 2.911 2.911 0 0 1 5.821-.006Z"
        />
      </G>
    </G>
  </Svg>
)

export default SmileIcon
