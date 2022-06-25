import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const JoggCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={63} {...props}>
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
    <G data-name="017-jogging">
      <G data-name="Group 2828" transform="translate(-.295)">
        <Ellipse
          data-name="Ellipse 448"
          cx={31}
          cy={31.5}
          rx={31}
          ry={31.5}
          transform="translate(.295)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2830">
        <G data-name="Group 2829">
          <Path
            data-name="Path 4730"
            d="M112.982 133.26a1.087 1.087 0 1 0 0-2.174h-2.547a1.087 1.087 0 1 0 0 2.174Zm-5.808 3.261a1.086 1.086 0 0 0 1.087 1.087h9.069a1.087 1.087 0 0 0 0-2.174h-9.069a1.086 1.086 0 0 0-1.087 1.087Zm14.551 3.261h-15.638a1.087 1.087 0 0 0 0 2.174h15.638a1.087 1.087 0 1 0 0-2.174Zm3.541-24.59a5.052 5.052 0 0 0 3.646-1.5l6.84-6.84a1.087 1.087 0 0 0-.768-1.855h-11.25a1.087 1.087 0 0 0-.771.321l-3.486 3.5a2.242 2.242 0 0 0-.421 2.587 7.2 7.2 0 0 0 6.209 3.779Zm15.1 19.613-4.943-3.718h-7.643a1.087 1.087 0 0 1 0-2.174h5.335l-.312-2.174h-5.644a1.087 1.087 0 0 1 0-2.174h5.332l-.312-2.174h-5.642a1.087 1.087 0 0 1 0-2.174h5.33l-.357-2.493a6.114 6.114 0 0 0-.905-2.648 7.234 7.234 0 0 1-5.34 2.29 9.3 9.3 0 0 1-8.217-5.121 4.468 4.468 0 0 1 .171-3.982 3.217 3.217 0 0 0-2.684.883l-5.374 5.375 6.917 6.917a1.087 1.087 0 1 1-1.537 1.537l-6.84-6.84a5.429 5.429 0 0 0 .683 6.831l14.846 14.846a14.059 14.059 0 0 0 10.007 4.145h4.739a3.974 3.974 0 0 0 2.393-7.151Z"
            transform="translate(-92.326 -92.152)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default JoggCateg
