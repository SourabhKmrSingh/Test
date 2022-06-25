import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const OutCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={63} height={62} {...props}>
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
    <G data-name="040-cycling">
      <G data-name="Group 2855" transform="translate(.09 -.349)">
        <Ellipse
          data-name="Ellipse 457"
          cx={31.5}
          cy={31}
          rx={31.5}
          ry={31}
          transform="translate(-.09 .349)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2857">
        <G data-name="Group 2856">
          <Path
            data-name="Path 4739"
            d="m134.358 166.99-1.109-7.763a1.087 1.087 0 0 0-1.076-.933h-4.348a1.087 1.087 0 0 0 0 2.174h3.405l.31 2.174h-11.674l-.87-2.174h2.304a1.087 1.087 0 0 0 0-2.174h-6.521a1.087 1.087 0 0 0 0 2.174h1.873l1.266 3.163-2.371 3.952a7.615 7.615 0 1 0 4.557 8.1h3.37a1.147 1.147 0 0 0 .9-.478l6.237-10.391h1.237l.359 2.517a7.5 7.5 0 1 0 2.148-.342Zm-21.749 13.041a5.435 5.435 0 1 1 0-10.869 5.368 5.368 0 0 1 1.8.329l-2.728 4.546a1.087 1.087 0 0 0 .932 1.646h5.325a5.443 5.443 0 0 1-5.33 4.349Zm1.92-6.521 1.741-2.9a5.415 5.415 0 0 1 1.663 2.9Zm5.578 0a7.558 7.558 0 0 0-2.712-4.778l1.54-2.566 2.938 7.344h-1.766Zm3.566-1.351-2.937-7.344h7.343Zm10.673 7.873a5.421 5.421 0 0 1-1.826-10.532l.75 5.25a1.087 1.087 0 1 0 2.153-.308l-.75-5.248a5.423 5.423 0 0 1-.327 10.836Z"
            transform="translate(-92.036 -139.273)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default OutCateg
