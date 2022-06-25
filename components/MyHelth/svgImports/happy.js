import * as React from "react"
import Svg, { Defs, G, Ellipse, Path, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const HappyIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} {...props}>
    <Defs></Defs>
    <G data-name="025-happy-15" transform="translate(9 6)">
      <G transform="translate(-9 -6)" filter="url(#a)">
        <Ellipse
          data-name="Ellipse 415"
          cx={12.5}
          cy={13}
          rx={12.5}
          ry={13}
          transform="translate(9 6)"
          fill="#ffd93b"
        />
      </G>
      <Path
        data-name="Path 4660"
        d="M25.505 12.853a12.854 12.854 0 0 1-22.859 8.07A12.854 12.854 0 0 0 20.721 2.848a12.839 12.839 0 0 1 4.784 10.005Z"
        fill="#f4c534"
      />
      <Path
        data-name="Path 4661"
        d="M20.861 16.065a8.816 8.816 0 0 1-16.42 0 .678.678 0 0 1 .643-.912h15.138a.678.678 0 0 1 .639.912Z"
        fill="#3e4347"
      />
      <Path
        data-name="Path 4662"
        d="M19.087 16.258a.93.93 0 0 1-.627.8 20.454 20.454 0 0 1-11.146 0 .932.932 0 0 1-.627-.8Z"
        fill="#fff"
      />
      <Path
        data-name="Path 4663"
        d="M15.824 21.078a8.751 8.751 0 0 1-3.173.59 8.845 8.845 0 0 1-2.723-.43 2.929 2.929 0 0 1 .281-.835 2.074 2.074 0 0 1 2.069-1.048q.121.012.241.012a2.688 2.688 0 0 0 .671-.084 2.067 2.067 0 0 1 2.273.92 2.944 2.944 0 0 1 .361.875Z"
        fill="#e24b4b"
      />
      <Circle
        data-name="Ellipse 416"
        cx={1.888}
        cy={1.888}
        transform="translate(14.596 8.131)"
        fill="#3e4347"
        r={1.888}
      />
      <Ellipse
        data-name="Ellipse 417"
        cx={0.482}
        cy={0.32}
        rx={0.482}
        ry={0.32}
        transform="rotate(-135 10.684 1.352)"
        fill="#5a5f63"
      />
      <G
        data-name="Group 2739"
        transform="translate(6.929 6.073)"
        fill="#3e4347"
      >
        <Path
          data-name="Path 4664"
          d="M12.922 3.535C11.552.764 10.902 1.33 7.986.358A3.144 3.144 0 0 1 9.468.001C11.011 0 12.689 1.04 12.922 3.535Z"
        />
        <Circle
          data-name="Ellipse 418"
          cx={1.888}
          cy={1.888}
          transform="translate(0 2.058)"
          r={1.888}
        />
      </G>
      <Ellipse
        data-name="Ellipse 419"
        cx={0.32}
        cy={0.482}
        rx={0.32}
        ry={0.482}
        transform="rotate(-135 6.053 3.27)"
        fill="#5a5f63"
      />
      <Path
        data-name="Path 4665"
        d="M5.447 9.608c1.37-2.771 2.02-2.205 4.936-3.177a3.145 3.145 0 0 0-1.482-.357c-1.538-.001-3.217 1.039-3.454 3.534Z"
        fill="#3e4347"
      />
    </G>
  </Svg>
)

export default HappyIcon
