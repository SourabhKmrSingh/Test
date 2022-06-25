import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg"

const StudyCateg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} {...props}>
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
    <G data-name="001-reading book">
      <G data-name="Group 2816" transform="translate(-.231 -.349)">
        <Circle
          data-name="Ellipse 444"
          cx={32.5}
          cy={32.5}
          r={32.5}
          transform="translate(.231 .349)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2818">
        <G data-name="Group 2817">
          <Path
            data-name="Path 4726"
            d="M136.395 133.55h-2.854v18.075a.951.951 0 0 1-.951.951h-9.513a.952.952 0 0 0-.951.951.951.951 0 0 1-1.9 0 .952.952 0 0 0-.951-.951h-9.513a.951.951 0 0 1-.951-.951V133.55h-2.854a.951.951 0 0 0-.951.951v20.929a.951.951 0 0 0 .951.951h11.416a.952.952 0 0 1 .951.951.951.951 0 0 0 .951.951h3.805a.951.951 0 0 0 .951-.951.952.952 0 0 1 .951-.951h11.416a.951.951 0 0 0 .951-.951V134.5a.951.951 0 0 0-.954-.95Zm-4.757 17.123V132.6a.951.951 0 0 0-.951-.951h-7.61a.951.951 0 0 0-.951.951v18.253a2.819 2.819 0 0 1 .951-.179h8.562Zm-6.659-16.173h3.805a.951.951 0 0 1 0 1.9h-3.805a.951.951 0 0 1 0-1.9Zm0 3.805h3.805a.951.951 0 1 1 0 1.9h-3.805a.951.951 0 0 1 0-1.9Zm0 3.805h3.805a.951.951 0 1 1 0 1.9h-3.805a.951.951 0 0 1 0-1.9Zm0 3.805h3.805a.951.951 0 1 1 0 1.9h-3.805a.951.951 0 0 1 0-1.9Zm-4.756 4.935V132.6a.951.951 0 0 0-.951-.951h-7.61a.951.951 0 0 0-.951.951v18.075h8.562a2.817 2.817 0 0 1 .95.177Zm-2.854-3.033h-3.805a.951.951 0 1 1 0-1.9h3.805a.951.951 0 1 1 0 1.9Zm0-3.805h-3.805a.951.951 0 0 1 0-1.9h3.805a.951.951 0 0 1 0 1.9Zm0-3.805h-3.805a.951.951 0 0 1 0-1.9h3.805a.951.951 0 0 1 0 1.9Zm0-3.805h-3.805a.951.951 0 1 1 0-1.9h3.805a.951.951 0 1 1 0 1.9Z"
            transform="translate(-89.018 -112.927)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default StudyCateg
