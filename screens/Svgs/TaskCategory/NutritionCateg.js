import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const NutritionCateg = (props) => (
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
    <G data-name="036-detox">
      <G data-name="Group 2849" transform="translate(.385 -.349)">
        <Ellipse
          data-name="Ellipse 455"
          cx={31.5}
          cy={31}
          rx={31.5}
          ry={31}
          transform="translate(-.385 .349)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2851">
        <G data-name="Group 2850">
          <Path
            data-name="Path 4737"
            d="M155.452 105h-5.8a4.444 4.444 0 0 0-4.382 3.81l-.461 3.278h1.791l.426-3.03a2.654 2.654 0 0 1 2.626-2.286h5.8a.886.886 0 1 0 0-1.772Zm-20.173 7.372a.99.99 0 0 0-.231.691l.568 6.114h.94a12.714 12.714 0 0 0 6.086-1.684c.479-.248.958-.479 1.49-.709l.674-4.7h-8.871a.928.928 0 0 0-.656.288Zm14.513 3.261h.994l.231-2.57a.99.99 0 0 0-.231-.691.929.929 0 0 0-.656-.284h-3.53l-.586 4.04a15.52 15.52 0 0 1 3.778-.495Zm-6.363 3.451a14.449 14.449 0 0 1-6.821 1.866h-.837l1.051 11.518a2.663 2.663 0 0 0 2.661 2.658h7.1a2.642 2.642 0 0 0 2.658-2.578l1.378-15.144h-.8a12.828 12.828 0 0 0-6.39 1.68Zm-3.968-8.767a4.42 4.42 0 1 0-5.855 6.412l-.322-3.512a2.66 2.66 0 0 1 2.651-2.9h3.526Z"
            transform="translate(-112.244 -89.087)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default NutritionCateg
