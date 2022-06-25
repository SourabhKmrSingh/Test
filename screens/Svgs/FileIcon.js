import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const FileIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} {...props}>
    <G data-name="Group 3921" transform="translate(-31 -195)">
      <Circle
        data-name="Ellipse 377"
        cx={30}
        cy={30}
        r={30}
        transform="translate(31 195)"
        fill="#edf4fd"
      />
      <Path
        data-name="Icon awesome-folder-plus"
        d="M70.542 219.833h-8.5L59.208 217h-7.083A2.125 2.125 0 0 0 50 219.125v12.75A2.125 2.125 0 0 0 52.125 234h18.417a2.125 2.125 0 0 0 2.125-2.125v-9.917a2.125 2.125 0 0 0-2.125-2.125Zm-4.25 7.437a.708.708 0 0 1-.708.708H62.4v3.187a.708.708 0 0 1-.708.708h-.708a.708.708 0 0 1-.708-.708v-3.186h-3.193a.708.708 0 0 1-.708-.708v-.708a.708.708 0 0 1 .708-.708h3.187v-3.188a.708.708 0 0 1 .708-.708h.708a.708.708 0 0 1 .708.708v3.188h3.188a.708.708 0 0 1 .708.708Z"
        fill="#1e64cc"
      />
    </G>
  </Svg>
)

export default FileIcon
