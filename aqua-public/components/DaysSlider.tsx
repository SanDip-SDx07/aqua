import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

// ---- Subcomponents ----
const Tick = ({ position }: { position: number }) => {
  return <View style={[styles.tick, { left: `${position}%` }]} />;
};

const TickLabel = ({
  label,
  position,
}: {
  label: string;
  position: number;
}) => {
  return (
    <Text style={[styles.tickLabel, { left: `${position}%` }]}>{label}</Text>
  );
};

const SelectedRangeBar = ({ width }: { width: number }) => {
  return <View style={[styles.selectedBar, { width: `${width}%` }]} />;
};

// ---- Main Slider ----
export default function DaysSlider() {
  const [value, setValue] = useState<number>(1);

  const breakpoints = [7, 14, 21];

  // Convert day value to percentage of 28 max
  const valueToPercent = (val: number) => (val / 28) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <View style={styles.timeline} />

        {breakpoints.map((bp) => (
          <Tick key={bp} position={(bp / 28) * 100} />
        ))}

        {breakpoints.map((bp) => (
          <TickLabel key={bp} label={`${bp}d`} position={(bp / 28) * 100} />
        ))}

        <SelectedRangeBar width={valueToPercent(value)} />
      </View>

      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={28}
        step={1}
        value={value}
        minimumTrackTintColor="#0077cc"
        maximumTrackTintColor="#ccc"
        onValueChange={(val) => setValue(val)}
      />

      <Text style={styles.selectedText}>Selected: {value} day(s)</Text>
    </View>
  );
}

// ---- Styles ----
const styles = StyleSheet.create({
  container: { padding: 20 },
  timelineContainer: {
    height: 40,
    justifyContent: "center",
    // marginBottom: 10,
    position: "relative",
  },
  timeline: {
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    width: "100%",
    position: "absolute",
    top: 18,
  },
  tick: {
    position: "absolute",
    width: 2,
    height: 12,
    backgroundColor: "#0077cc",
    top: 14,
    marginLeft: -1,
  },
  tickLabel: {
    position: "absolute",
    top: 0,
    fontSize: 12,
    color: "#0077cc",
    fontWeight: "500",
    marginLeft: -10,
    width: 20,
    textAlign: "center",
  },
  selectedBar: {
    position: "absolute",
    top: 18,
    height: 4,
    backgroundColor: "#0077cc",
    borderRadius: 2,
  },
  slider: { width: "100%" },
  selectedText: {
    width: 150,
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
});

// import React, { useState, useRef } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Slider from "@react-native-community/slider";

// // ---- Small subcomponents ----
// const Tick = ({ position }: { position: number }) => {
//   return <View style={[styles.tick, { left: position }]} />;
// };

// const TickLabel = ({
//   label,
//   position,
// }: {
//   label: string;
//   position: number;
// }) => {
//   return <Text style={[styles.tickLabel, { left: position }]}>{label}</Text>;
// };

// const SelectedRangeBar = ({ left, width }: { left: number; width: number }) => {
//   return <View style={[styles.selectedBar, { left, width }]} />;
// };

// // ---- Main Slider Component ----
// export default function DaysSlider() {
//   const [value, setValue] = useState<number>(1);
//   const sliderWidth = useRef(0);

//   // Breakpoints for ticks: only internal
//   const breakpoints = [7, 14, 21];

//   // Convert day value to pixel position
//   const valueToPosition = (val: number) => {
//     if (sliderWidth.current === 0) return 0;
//     return (val / 28) * sliderWidth.current;
//   };

//   const selectedLeft = 0;
//   const selectedWidth = valueToPosition(value);

//   return (
//     <View style={styles.container}>
//       <View
//         style={styles.timelineContainer}
//         onLayout={(event) => {
//           sliderWidth.current = event.nativeEvent.layout.width;
//         }}
//       >
//         {/* Base timeline */}
//         <View style={styles.timeline}>
//           <Slider
//             style={styles.slider}
//             minimumValue={1}
//             maximumValue={28}
//             step={1}
//             value={value}
//             minimumTrackTintColor="#0077cc"
//             maximumTrackTintColor="#ccc"
//             onValueChange={(val) => setValue(val)}
//           />
//         </View>

//         {sliderWidth.current > 0 && (
//           <>
//             {breakpoints.map((bp) => (
//               <Tick key={bp} position={valueToPosition(bp)} />
//             ))}
//             {breakpoints.map((bp) => (
//               <TickLabel
//                 key={bp}
//                 label={`${bp}d`}
//                 position={valueToPosition(bp)}
//               />
//             ))}
//             <SelectedRangeBar left={0} width={valueToPosition(value)} />
//           </>
//         )}

//         {/* Selected overlay */}
//         <SelectedRangeBar left={selectedLeft} width={selectedWidth} />
//       </View>
//       <Text style={styles.selectedText}>Rent: {value} day(s)</Text>
//     </View>
//   );
// }

// // ---- Styles ----
// const styles = StyleSheet.create({
//   container: { padding: 20, justifyContent: "center" },
//   timelineContainer: {
//     height: 40,
//     justifyContent: "center",
//     marginBottom: 10,
//     position: "relative",
//   },
//   timeline: {
//     height: 4,
//     backgroundColor: "#ccc",
//     borderRadius: 2,
//     width: "100%",
//     position: "absolute",
//     top: 18,
//   },
//   tick: {
//     position: "absolute",
//     width: 2,
//     height: 12,
//     backgroundColor: "#0077cc",
//     top: 14,
//     marginLeft: -1,
//   },
//   tickLabel: {
//     position: "absolute",
//     top: 0,
//     fontSize: 12,
//     color: "#0077cc",
//     fontWeight: "500",
//     marginLeft: -10,
//     width: 20,
//     textAlign: "center",
//   },
//   selectedBar: {
//     position: "absolute",
//     top: 18,
//     height: 4,
//     backgroundColor: "#0077cc",
//     borderRadius: 2,
//   },
//   slider: { width: "100%", height: 40 },
//   selectedText: {
//     width: 150,
//     marginTop: 10,
//     fontSize: 14,
//     fontWeight: "500",
//     color: "#000",
//     backgroundColor: "#fff",
//     textAlign: "center",
//     padding: 8,
//     borderRadius: 8,
//     alignSelf: "center", // centers horizontally
//   },
// });
