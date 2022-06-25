import * as React from "react"
import Svg, { G, Ellipse, Path } from "react-native-svg"

const MeditationSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={125} height={126} {...props}>
    <G data-name="045-meditation">
      <G data-name="Group 2858" transform="translate(.857 .977)">
        <Ellipse
          data-name="Ellipse 458"
          cx={57}
          cy={57.5}
          rx={57}
          ry={57.5}
          transform="translate(4.642 4.523)"
          fill="#fff"
        />
        <Ellipse
          data-name="Ellipse 463"
          cx={62}
          cy={62.5}
          rx={62}
          ry={62.5}
          transform="translate(-.358 -.477)"
          fill="none"
          stroke="#0e58c7"
        />
      </G>
      <G data-name="Group 2860">
        <G data-name="Group 2859">
          <Path
            data-name="Path 4740"
            d="M69.713 41.249a6.611 6.611 0 1 0-6.611 6.611 6.617 6.617 0 0 0 6.611-6.611Zm19.833 46.277H36.659a1.653 1.653 0 1 0 0 3.305h52.887a1.653 1.653 0 0 0 0-3.305ZM46.575 74.304a4.958 4.958 0 1 0 0 9.916H79.63a4.958 4.958 0 1 0 0-9.916Zm-6.611-9.916h11.569a4.958 4.958 0 0 0 4.958-4.958v11.568h13.222V59.429a4.958 4.958 0 0 0 4.958 4.958H86.24a1.653 1.653 0 0 0 1.653-1.653 4.958 4.958 0 0 0-4.958-4.958h-6.611a9.927 9.927 0 0 0-9.916-9.916h-6.611a9.927 9.927 0 0 0-9.916 9.916H43.27a4.958 4.958 0 0 0-4.958 4.958 1.653 1.653 0 0 0 1.652 1.653Z"
            fill="#1e64cc"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default MeditationSvg
