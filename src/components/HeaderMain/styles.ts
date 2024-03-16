import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064,
        backgroundColor: '#f7d102',
    },
    headerOne: {
        height: height * 0.064,
        width: "80%",
        backgroundColor: "white",
        flexDirection:"row",
        alignItems: "center",
        paddingHorizontal: "4%",
        borderTopRightRadius: 29,
        borderBottomRightRadius: 29
    },
    image: {
        width: 30,
        height: 30
    },
    headerOneView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftColor: "#f3f2fd",
        borderLeftWidth: 3
    },
    headerTwo: {
        width: "20%",
        height: height * 0.064,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 16
    }
});

export default styles