import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from "react-native-svg"

const HealthCateg = (props) => (
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
    <G data-name="033-green tea">
      <G data-name="Group 2843" transform="translate(0 -.349)">
        <Ellipse
          data-name="Ellipse 453"
          cx={31.5}
          cy={31}
          rx={31.5}
          ry={31}
          transform="translate(0 .349)"
          fill="#edf4fd"
        />
      </G>
      <G data-name="Group 2845">
        <G data-name="Group 2844">
          <Path
            data-name="Path 4735"
            d="M125.872 134.039h-16.335a.907.907 0 1 0 0 1.815h16.334a.907.907 0 1 0 0-1.815Zm-8.809-21.513a.907.907 0 0 0 1.283 1.283 3.477 3.477 0 0 0 0-4.913 1.661 1.661 0 0 1 0-2.347.907.907 0 0 0-1.283-1.283 3.477 3.477 0 0 0 0 4.913 1.661 1.661 0 0 1 0 2.346Zm-4.693 1.815a.907.907 0 0 0 1.283 1.283 3.477 3.477 0 0 0 0-4.913 1.661 1.661 0 0 1 0-2.347.907.907 0 0 0-1.283-1.283 3.477 3.477 0 0 0 0 4.913 1.661 1.661 0 0 1 0 2.346Zm9.387 0a.907.907 0 0 0 1.283 1.283 3.477 3.477 0 0 0 0-4.913 1.661 1.661 0 0 1 0-2.347.907.907 0 1 0-1.283-1.283 3.477 3.477 0 0 0 0 4.913 1.661 1.661 0 0 1-.001 2.346Zm9.56 3.364h-25.41a.907.907 0 0 0-.907.907v1.815a11.811 11.811 0 0 0 11.8 11.8h1.815a11.755 11.755 0 0 0 8.493-3.63h1.3c4.457 0 7.45-3.284 7.45-6.352a4.489 4.489 0 0 0-4.541-4.545Zm-9.075 6.352a4.537 4.537 0 1 1-9.075 0v-1.815a.907.907 0 0 1 .907-.907 4.52 4.52 0 0 1 3.63 1.843 4.52 4.52 0 0 1 3.63-1.843.907.907 0 0 1 .907.907v1.815Zm6.3 2.71a11.714 11.714 0 0 0 1.865-6.34v-.907h.907a2.663 2.663 0 0 1 2.722 2.722c.003 2.114-2.249 4.458-5.491 4.524Zm-9.933-.895v.752a2.728 2.728 0 0 0 1.815-2.567v-.757a2.728 2.728 0 0 0-1.812 2.571Zm-3.63-2.567v.752a2.728 2.728 0 0 0 1.815 2.567v-.752a2.728 2.728 0 0 0-1.812-2.572Z"
            transform="translate(-89.197 -89.45)"
            fill="url(#a)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default HealthCateg
