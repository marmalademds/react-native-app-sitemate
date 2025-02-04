import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
    app: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBar: {
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    flatListItem: {
        backgroundColor: '#6fbbd6',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    container: {
        flex: 1, // Allows the component to take full screen height
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, // Adjusts the padding around content
    },
    row: {
        flexDirection: 'row', // Aligns children in a row
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column', // Aligns children in a column (default behavior)
        alignItems: 'flex-start', // Aligns children to the left
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // For Android shadow
    },
    spaceBetween: {
        justifyContent: 'space-between', // Distributes space evenly between elements
        flexDirection: 'row',
    },
    spaceAround: {
        justifyContent: 'space-around', // Distributes space evenly with space at the edges
        flexDirection: 'row',
    },
    fullWidth: {
        width: '100%', // Makes the element take full width
    },
    marginSmall: {
        margin: 10, // Small margin
    },
    marginMedium: {
        margin: 20, // Medium margin
    },
    marginLarge: {
        margin: 30, // Large margin
    },
    paddingSmall: {
        padding: 10, // Small padding
    },
    paddingMedium: {
        padding: 20, // Medium padding
    },
    paddingLarge: {
        padding: 30, // Large padding
    },
    flex1: {
        flex: 1, // Makes the element take up available space
    },
    fw80: {
        maxWidth: "80%",
    },
    fw20: {
        maxWidth: "20%",
    },
  })