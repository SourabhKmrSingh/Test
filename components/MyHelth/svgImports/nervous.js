import * as React from "react"
import Svg, { Defs, G, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const NervousIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} {...props}>
    <Defs></Defs>
    <G data-name="008-nervous-1">
      <G transform="translate(-.001)" filter="url(#a)">
        <Circle
          data-name="Ellipse 408"
          cx={13}
          cy={13}
          r={13}
          transform="translate(9 6)"
          fill="#ffd93b"
        />
      </G>
      <Path
        data-name="Path 4621"
        d="M34.481 18.853a12.854 12.854 0 0 1-22.857 8.071A12.855 12.855 0 0 0 29.699 8.849a12.846 12.846 0 0 1 4.782 10.004Z"
        fill="#f4c534"
      />
      <G data-name="Group 2727" fill="#3e4347">
        <Path
          data-name="Path 4622"
          d="M26.828 26.005c-.541.315-2.409-1.151-5.056-1.072-2.648-.08-4.515 1.386-5.056 1.072-.663-.248.854-3.348 5.056-3.355s5.719 3.107 5.056 3.355Z"
        />
        <Path
          data-name="Path 4623"
          d="M14.096 18.706a4.179 4.179 0 0 1 5.826 0 2.92 2.92 0 0 0-5.826 0Z"
        />
        <Path
          data-name="Path 4624"
          d="M23.334 18.706a4.179 4.179 0 0 1 5.826 0 2.92 2.92 0 0 0-5.826 0Z"
        />
      </G>
      <Path
        data-name="Path 4625"
        d="M32.701 14.414c0-1.113-2.016-3.891-2.016-3.891s-2.016 2.778-2.016 3.891a2.017 2.017 0 1 0 4.033 0Z"
        fill="#45cbea"
      />
      <G data-name="Group 2728" opacity={0.2}>
        <Path
          data-name="Path 4626"
          d="M31.779 15.27c-.2.275-.507.4-.684.275s-.171-.452.031-.727.507-.4.69-.275.169.445-.037.727Z"
          fill="#fff"
        />
      </G>
      <Path
        data-name="Path 4627"
        d="M28.473 9.476c0-.788-1.426-2.752-1.426-2.752s-1.426 1.964-1.426 2.752a1.426 1.426 0 0 0 2.852 0Z"
        fill="#45cbea"
      />
      <G data-name="Group 2729" opacity={0.2}>
        <Path
          data-name="Path 4628"
          d="M27.821 10.08c-.138.194-.358.28-.484.194s-.121-.32.022-.514.358-.285.488-.194.116.316-.026.514Z"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
)

export default NervousIcon
